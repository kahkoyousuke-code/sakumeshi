import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { checkRateLimit, getClientIp } from "./rate-limit";

describe("getClientIp", () => {
  const ipOf = (headers: Record<string, string>) =>
    getClientIp(new Request("https://sakumeshi.app/api/generate", { headers }));

  it("x-forwarded-for の先頭（実クライアント）を取る", () => {
    expect(ipOf({ "x-forwarded-for": "203.0.113.1, 70.41.3.18, 150.172.238.178" }))
      .toBe("203.0.113.1");
  });

  it("x-forwarded-for の前後の空白を落とす", () => {
    expect(ipOf({ "x-forwarded-for": "  203.0.113.1  , 70.41.3.18" })).toBe("203.0.113.1");
  });

  it("x-forwarded-for が無ければ x-real-ip を使う", () => {
    expect(ipOf({ "x-real-ip": "203.0.113.9" })).toBe("203.0.113.9");
  });

  it("どちらも無ければ unknown", () => {
    expect(ipOf({})).toBe("unknown");
  });
});

// Upstash 未設定時のメモリ方式。カウントはモジュール内で共有されるため、
// テストごとに別の prefix / IP を使って干渉を避ける。
describe("checkRateLimit（メモリ方式）", () => {
  it("上限までは通し、超えたら弾く", async () => {
    const opts = { max: 3, prefix: "test-limit" };
    expect(await checkRateLimit("1.1.1.1", opts)).toBe(true);
    expect(await checkRateLimit("1.1.1.1", opts)).toBe(true);
    expect(await checkRateLimit("1.1.1.1", opts)).toBe(true);
    expect(await checkRateLimit("1.1.1.1", opts)).toBe(false);
    expect(await checkRateLimit("1.1.1.1", opts)).toBe(false);
  });

  it("IP が違えばカウントは独立する", async () => {
    const opts = { max: 1, prefix: "test-ip" };
    expect(await checkRateLimit("2.2.2.2", opts)).toBe(true);
    expect(await checkRateLimit("2.2.2.2", opts)).toBe(false);
    expect(await checkRateLimit("3.3.3.3", opts)).toBe(true);
  });

  it("prefix が違えばカウントは独立する（エンドポイント別バケット）", async () => {
    expect(await checkRateLimit("4.4.4.4", { max: 1, prefix: "gen" })).toBe(true);
    expect(await checkRateLimit("4.4.4.4", { max: 1, prefix: "gen" })).toBe(false);
    expect(await checkRateLimit("4.4.4.4", { max: 1, prefix: "regen" })).toBe(true);
    expect(await checkRateLimit("4.4.4.4", { max: 1, prefix: "shop" })).toBe(true);
  });

  it("ウィンドウが過ぎたらカウントがリセットされる", async () => {
    vi.useFakeTimers();
    try {
      const opts = { max: 1, windowSec: 60, prefix: "test-window" };
      expect(await checkRateLimit("5.5.5.5", opts)).toBe(true);
      expect(await checkRateLimit("5.5.5.5", opts)).toBe(false);

      vi.advanceTimersByTime(59_000); // まだウィンドウ内
      expect(await checkRateLimit("5.5.5.5", opts)).toBe(false);

      vi.advanceTimersByTime(2_000); // ウィンドウを超えた
      expect(await checkRateLimit("5.5.5.5", opts)).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });
});

// Upstash 設定時。環境変数はモジュール読み込み時に固定されるので、
// stubEnv → resetModules → 再 import の順で読み込み直す。
describe("checkRateLimit（Upstash 方式）", () => {
  beforeEach(() => {
    vi.stubEnv("UPSTASH_REDIS_REST_URL", "https://example.upstash.io");
    vi.stubEnv("UPSTASH_REDIS_REST_TOKEN", "test-token");
    vi.resetModules();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  /** Upstash のパイプライン応答（1件目が INCR 後のカウント）を返す fetch */
  const fetchReturning = (count: number) =>
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ result: count }, { result: 1 }],
    });

  it("カウントが上限以内なら通す", async () => {
    vi.stubGlobal("fetch", fetchReturning(5));
    const { checkRateLimit: limit } = await import("./rate-limit");
    expect(await limit("6.6.6.6", { max: 5, prefix: "gen" })).toBe(true);
  });

  it("カウントが上限を超えたら弾く", async () => {
    vi.stubGlobal("fetch", fetchReturning(6));
    const { checkRateLimit: limit } = await import("./rate-limit");
    expect(await limit("6.6.6.6", { max: 5, prefix: "gen" })).toBe(false);
  });

  it("prefix と IP でキーを分ける", async () => {
    const fetchMock = fetchReturning(1);
    vi.stubGlobal("fetch", fetchMock);
    const { checkRateLimit: limit } = await import("./rate-limit");
    await limit("7.7.7.7", { max: 5, windowSec: 3600, prefix: "regen" });

    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body).toEqual([
      ["INCR", "ratelimit:regen:7.7.7.7"],
      ["EXPIRE", "ratelimit:regen:7.7.7.7", "3600", "NX"],
    ]);
  });

  it("Upstash が落ちていたらメモリ方式にフォールバックして通す", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network down")));
    const { checkRateLimit: limit } = await import("./rate-limit");
    expect(await limit("8.8.8.8", { max: 1, prefix: "fallback" })).toBe(true);
    // フォールバック先のメモリ方式でちゃんと数えている
    expect(await limit("8.8.8.8", { max: 1, prefix: "fallback" })).toBe(false);
  });

  it("Upstash が 5xx を返してもフォールバックする", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    const { checkRateLimit: limit } = await import("./rate-limit");
    expect(await limit("9.9.9.9", { max: 1, prefix: "fallback-5xx" })).toBe(true);
  });
});
