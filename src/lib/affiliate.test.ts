import { describe, it, expect, vi, afterEach } from "vitest";

// The tag is read at module load, so each test imports a fresh copy after stubbing env.
async function load(tag: string) {
  vi.stubEnv("NEXT_PUBLIC_AMAZON_AFFILIATE_TAG", tag);
  vi.resetModules();
  return import("./affiliate");
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("amazon links", () => {
  it("検索リンクにタグを付ける", async () => {
    const { amazonSearchUrl } = await load("test-22");
    expect(amazonSearchUrl("プロテイン")).toBe(
      "https://www.amazon.co.jp/s?k=%E3%83%97%E3%83%AD%E3%83%86%E3%82%A4%E3%83%B3&tag=test-22"
    );
  });

  it("ASIN があれば商品ページ、なければ検索結果へ", async () => {
    const { amazonUrl } = await load("test-22");
    expect(amazonUrl({ keyword: "x", asin: "B000000000" })).toBe(
      "https://www.amazon.co.jp/dp/B000000000/?tag=test-22"
    );
    expect(amazonUrl({ keyword: "x" })).toBe("https://www.amazon.co.jp/s?k=x&tag=test-22");
  });

  it("置き場所を渡すとその置き場所のトラッキングIDを使う", async () => {
    const { amazonSearchUrl, amazonProductUrl } = await load("test-22");
    expect(amazonSearchUrl("x", "result")).toBe("https://www.amazon.co.jp/s?k=x&tag=sakumeshi01-22");
    expect(amazonProductUrl("B000000000", "column")).toBe(
      "https://www.amazon.co.jp/dp/B000000000/?tag=sakumeshi02-22"
    );
  });

  it("タグ未設定ならタグなしのURL", async () => {
    const { amazonSearchUrl, amazonProductUrl } = await load("");
    expect(amazonSearchUrl("x")).toBe("https://www.amazon.co.jp/s?k=x");
    expect(amazonProductUrl("B000000000")).toBe("https://www.amazon.co.jp/dp/B000000000/");
  });
});
