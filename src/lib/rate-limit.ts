// ── レート制限 ────────────────────────────────────────────────────────────
// 既定は IP ごとに 1 時間あたり 5 回。
//
// Vercel のサーバーレス環境ではインスタンスごとにメモリが分かれ、デプロイで
// リセットされるため、メモリ方式だけでは「ザル」になる。Upstash Redis の REST
// API（追加 npm 依存なしで fetch から呼べる）が設定されていればそちらを使い、
// 未設定ならメモリ方式にフォールバックする。
//
// 有効化するには Vercel の環境変数に以下を設定する：
//   UPSTASH_REDIS_REST_URL
//   UPSTASH_REDIS_REST_TOKEN

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SEC = 60 * 60; // 1時間

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// ── メモリ方式（フォールバック） ──
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimitMemory(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_SEC * 1000,
    });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

// ── Upstash Redis 方式 ──
// INCR でカウントアップし、初回のみ EXPIRE でウィンドウを設定する（パイプライン）。
async function checkRateLimitUpstash(ip: string): Promise<boolean> {
  const key = `ratelimit:${ip}`;
  const res = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, String(RATE_LIMIT_WINDOW_SEC), "NX"],
    ]),
    // Upstash 障害時にリクエスト全体を巻き込まないよう短めに
    signal: AbortSignal.timeout(2000),
  });

  if (!res.ok) throw new Error(`Upstash error: ${res.status}`);

  const data = (await res.json()) as { result: number }[];
  const count = data[0]?.result ?? 0;
  return count <= RATE_LIMIT_MAX;
}

/**
 * レート制限を判定する。true なら許可、false なら制限超過。
 * Upstash 未設定・障害時はメモリ方式にフォールバックする（ここで通信エラーを
 * 握りつぶしてもサービス継続を優先する）。
 */
export async function checkRateLimit(ip: string): Promise<boolean> {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      return await checkRateLimitUpstash(ip);
    } catch (err) {
      console.warn("[rate-limit] Upstash 失敗、メモリ方式にフォールバック:", err);
    }
  }
  return checkRateLimitMemory(ip);
}
