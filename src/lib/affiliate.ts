const RAKUTEN_AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? "";
const AMAZON_AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? "";

export function rakutenSearchUrl(keyword: string): string {
  const q = encodeURIComponent(keyword);
  const dest = `https://search.rakuten.co.jp/search/mall/${q}/`;
  // アフィリエイトID未設定なら裸の検索URL（リンクは機能するが報酬は発生しない）
  if (!RAKUTEN_AFFILIATE_ID) return dest;
  // 報酬が計測されるのは hb.afl.rakuten.co.jp 経由のリンクのみ。
  // pc=PC遷移先 / m=モバイル遷移先（いずれも遷移先URLをエンコードして渡す）
  const enc = encodeURIComponent(dest);
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${enc}&m=${enc}`;
}

export function amazonSearchUrl(keyword: string): string {
  const q = encodeURIComponent(keyword);
  const tag = AMAZON_AFFILIATE_TAG ? `&tag=${AMAZON_AFFILIATE_TAG}` : "";
  return `https://www.amazon.co.jp/s?k=${q}${tag}`;
}
