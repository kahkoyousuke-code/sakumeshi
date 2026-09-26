const RAKUTEN_AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? "";
const AMAZON_AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG ?? "";

// ── 置き場所ごとの Amazon トラッキングID（クリック計測用） ──────────────
// Amazon アソシエイトの管理画面（アカウント設定 → トラッキングIDの管理）で追加した ID を入れると、
// レポートでクリック数・売上が置き場所ごとに分かれて見える。
// 空なら既定のタグ（NEXT_PUBLIC_AMAZON_AFFILIATE_TAG）を使う。
// 管理画面で作っていない ID を入れると報酬が計上されないので、必ず先に作ってから入れる。
export type AffiliatePlacement = "result" | "column";

const AMAZON_PLACEMENT_TAGS: Record<AffiliatePlacement, string> = {
  result: "sakumeshi01-22",
  column: "sakumeshi02-22",
};

function amazonTag(placement?: AffiliatePlacement): string {
  return (placement && AMAZON_PLACEMENT_TAGS[placement]) || AMAZON_AFFILIATE_TAG;
}

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

export function amazonSearchUrl(keyword: string, placement?: AffiliatePlacement): string {
  const q = encodeURIComponent(keyword);
  const tag = amazonTag(placement);
  return `https://www.amazon.co.jp/s?k=${q}${tag ? `&tag=${tag}` : ""}`;
}

/** 商品ページへの直リンク。検索結果より購入まで進みやすい */
export function amazonProductUrl(asin: string, placement?: AffiliatePlacement): string {
  const tag = amazonTag(placement);
  return `https://www.amazon.co.jp/dp/${asin}/${tag ? `?tag=${tag}` : ""}`;
}

/** ASIN があれば商品ページ、なければ検索結果へ */
export function amazonUrl(
  item: { keyword: string; asin?: string },
  placement?: AffiliatePlacement
): string {
  return item.asin ? amazonProductUrl(item.asin, placement) : amazonSearchUrl(item.keyword, placement);
}
