// ── 宅食（ASP アフィリエイト） ──────────────────────────────
// 結果ページの「7日間の食事メニュー」直後に出す。献立を見て「毎日作るのは大変」と
// 感じた人向け。1件あたりの報酬が数千円と高く、少ない PV でも収益になる。
// url が空の案件は表示しない（提携審査待ちの案件を先に登録しておける）。
// 全件 url が空ならセクションごと非表示。

export interface MealDeliveryService {
  /** React key 用 */
  id: string;
  /** 表示名 */
  name: string;
  /** 絵文字アイコン */
  emoji: string;
  /** 一言メリット（30文字以内目安） */
  detail: string;
  /** ASP の広告リンク（A8.net / afb の管理画面で発行したもの）。空なら非表示 */
  url: string;
  /** ASP のインプレッション計測用 1x1 画像の src（任意） */
  pixel?: string;
}

export const MEAL_DELIVERY_SERVICES: MealDeliveryService[] = [
  {
    id: "muscle-deli",
    name: "マッスルデリ",
    emoji: "💪",
    detail: "高タンパクの宅食。筋トレ・減量中の食事管理に",
    url: "https://px.a8.net/svt/ejp?a8mat=3HGD1K+D0KDKY+4CPY+5YRHE",
    pixel: "https://www17.a8.net/0.gif?a8mat=3HGD1K+D0KDKY+4CPY+5YRHE",
  },
  {
    id: "nosh",
    name: "nosh（ナッシュ）",
    emoji: "🍱",
    detail: "糖質控えめの冷凍弁当。レンジで温めるだけ",
    url: "",
  },
];

export function activeMealDeliveryServices(): MealDeliveryService[] {
  return MEAL_DELIVERY_SERVICES.filter((s) => s.url);
}
