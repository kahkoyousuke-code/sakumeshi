// ── レート制限 ────────────────────────────────────────────────────────────
// 既定は IP ごとに 1 時間あたり 5 回。エンドポイントごとに max / windowSec /
// prefix を変えて別バケットとして使える（prefix が違えばカウントは独立）。
//
// Vercel のサーバーレス環境ではインスタンスごとにメモリが分かれ、デプロイで
// リセットされるため、メモリ方式だけでは「ザル」になる。Upstash Redis の REST
// API（追加 npm 依存なしで fetch から呼べる）が設定されていればそちらを使い、
// 未設定ならメモリ方式にフォールバックする。
//
// 有効化するには Vercel の環境変数に以下を設定する：
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN

const DEFAULT_MAX = 5;
const DEFAULT_WINDOW_SEC = 60 * 60; // 1時間

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export interface RateLimitOptions {
  /** ウィンドウ内の最大許可回数（既定 5） */
  max?: number;
  /** ウィンドウ秒数（既定 3600） */
  windowSec?: number;
  /** エンドポイントごとのバケット名。違う prefix はカウントが独立する */
  prefix?: string;
}

/**
 * リバースプロキシ（Vercel）越しのクライアント IP を取得する。
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

// ── メモリ方式（フォールバック） ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimitMemory(key: string, max: number, windowSec: number): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, {
      count: 1,
      resetAt: now + windowSec * 1000,
    });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

// ── Upstash Redis 方式 ──
// INCR でカウントアップし、初回のみ EXPIRE でウィンドウを設定する（パイプライン）。
async function checkRateLimitUpstash(
  key: string,
  max: number,
  windowSec: number
): Promise<boolean> {
  const redisKey = `ratelimit:${key}`;
  const res = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", redisKey],
      ["EXPIRE", redisKey, String(windowSec), "NX"],
    ]),
    // Upstash 障害時にリクエスト全体を巻き込まないよう短めに
    signal: AbortSignal.timeout(2000),
  });

  if (!res.ok) throw new Error(`Upstash error: ${res.status}`);

  const data = (await res.json()) as { result: number }[];
  const count = data[0]?.result ?? 0;
  return count <= max;
}

/**
 * レート制限を判定する。true なら許可、false なら制限超過。
 * Upstash 未設定・障害時はメモリ方式にフォールバックする（ここで通信エラーを
 * 握りつぶしてもサービス継続を優先する）。
 */
export async function checkRateLimit(
  ip: string,
  opts: RateLimitOptions = {}
): Promise<boolean> {
  const max = opts.max ?? DEFAULT_MAX;
  const windowSec = opts.windowSec ?? DEFAULT_WINDOW_SEC;
  const key = `${opts.prefix ?? "default"}:${ip}`;

  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      return await checkRateLimitUpstash(key, max, windowSec);
    } catch (err) {
      console.warn("[rate-limit] Upstash 失敗、メモリ方式にフォールバック:", err);
    }
  }
  return checkRateLimitMemory(key, max, windowSec);
}
