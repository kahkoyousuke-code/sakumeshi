const RAKUTEN_AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? "";
const AMAZON_AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? "";

export function rakutenSearchUrl(keyword: string): string {
  const q = encodeURIComponent(keyword);
  const scid = RAKUTEN_AFFILIATE_ID ? `&scid=${RAKUTEN_AFFILIATE_ID}` : "";
  return `https://search.rakuten.co.jp/search/mall/${q}/${scid}`;
}

export function amazonSearchUrl(keyword: string): string {
  const q = encodeURIComponent(keyword);
  const tag = AMAZON_AFFILIATE_TAG ? `&tag=${AMAZON_AFFILIATE_TAG}` : "";
  return `https://www.amazon.co.jp/s?k=${q}${tag}`;
}
