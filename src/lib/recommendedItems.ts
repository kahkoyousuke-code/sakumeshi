// ── ダイエット応援アイテム（アフィリエイト用キュレーション） ──────────────
// 結果ページに表示する「リピート購入されやすく報酬率も高い」ダイエット定番品。
// 食材ごとの検索リンク（生鮮で報酬ほぼ無し）より収益効率が高い。
// keyword は楽天・Amazon の検索キーワードに使う（具体的なほど購入意図が高い）。
// 品目を足す・変えるにはこの配列だけ編集すればよい（シングルソース）。

export interface RecommendedItem {
  /** 表示名 */
  name: string;
  /** 絵文字アイコン */
  emoji: string;
  /** 一言メリット（30文字以内目安） */
  detail: string;
  /** 楽天・Amazon 検索に使うキーワード */
  keyword: string;
}

export const RECOMMENDED_ITEMS: RecommendedItem[] = [
  {
    name: "ホエイプロテイン",
    emoji: "💪",
    detail: "高タンパクを手軽に。間食の置き換えにも",
    keyword: "ホエイプロテイン 1kg",
  },
  {
    name: "サラダチキン まとめ買い",
    emoji: "🍗",
    detail: "低脂質・高タンパクの定番。常備に便利",
    keyword: "サラダチキン まとめ買い",
  },
  {
    name: "オートミール",
    emoji: "🥣",
    detail: "食物繊維たっぷり。朝食の主食におすすめ",
    keyword: "オートミール 1kg",
  },
  {
    name: "こんにゃく麺・糖質オフ麺",
    emoji: "🍜",
    detail: "麺が食べたい日のカロリーカットに",
    keyword: "こんにゃく麺 糖質オフ",
  },
  {
    name: "MCTオイル",
    emoji: "🫗",
    detail: "コーヒーやサラダにかけてエネルギー補給",
    keyword: "MCTオイル",
  },
  {
    name: "体組成計",
    emoji: "⚖️",
    detail: "体重・体脂肪を記録してモチベ維持",
    keyword: "体組成計 体脂肪",
  },
];
