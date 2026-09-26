// ── ダイエット応援アイテム（アフィリエイト用キュレーション） ──────────────
// 結果ページとコラム末尾に表示する「リピート購入されやすく報酬率も高い」ダイエット定番品。
// 食材ごとの検索リンク（生鮮で報酬ほぼ無し）より収益効率が高い。
// keyword は楽天・Amazon の検索キーワードに使う（具体的なほど購入意図が高い）。
// asin を入れると Amazon は検索結果ではなく商品ページへ直接飛ぶ（購入まで進みやすい）。
// 品目を足す・変えるにはこの配列だけ編集すればよい（シングルソース）。

import type { Exercise, Goal, Preference, UserAnswers } from "./types";

export interface RecommendedItem {
  /** コラムからの参照・React key 用 */
  id: string;
  /** 表示名 */
  name: string;
  /** 絵文字アイコン */
  emoji: string;
  /** 一言メリット（30文字以内目安。効果・効能をうたう表現は避ける） */
  detail: string;
  /** 楽天・Amazon 検索に使うキーワード */
  keyword: string;
  /** Amazon の商品ID（任意）。実際に使っている商品を入れる */
  asin?: string;
  /** この目標の人にだけ出す（省略時は全員） */
  goals?: Goal[];
  /** この食事スタイルの人には上位に出す */
  preferences?: Preference[];
  /** 運動している人には上位に出す */
  forExercisers?: boolean;
  /** dislikes（アレルギー・苦手）にこれが含まれていたら出さない */
  excludeIf?: string[];
  /** この id のアイテムが除外されたときだけ代わりに出す（結果ページのみ。コラムでは常に出る） */
  replaces?: string;
}

export const RECOMMENDED_ITEMS: RecommendedItem[] = [
  {
    id: "whey-protein",
    name: "ホエイプロテイン（エクスプロージョン）",
    emoji: "💪",
    detail: "筆者が愛用。3kgで味の種類も多くコスパ重視に",
    keyword: "エクスプロージョン ホエイプロテイン 3kg",
    // 3kg ミルクチョコレート味。商品ページで味を選べる
    asin: "B06Y69FKT2",
    forExercisers: true,
    excludeIf: ["乳製品"],
  },
  {
    id: "soy-protein",
    name: "ソイプロテイン",
    emoji: "🌱",
    detail: "乳製品が合わない人のタンパク質補給に",
    keyword: "ソイプロテイン",
    excludeIf: ["大豆"],
    replaces: "whey-protein",
  },
  {
    id: "salad-chicken",
    name: "サラダチキン まとめ買い",
    emoji: "🍗",
    detail: "低脂質・高タンパクの定番。常備に便利",
    keyword: "サラダチキン まとめ買い",
    preferences: ["lowfat", "lowcarb"],
  },
  {
    id: "boniq",
    name: "低温調理器（BONIQ）",
    emoji: "🌡️",
    detail: "筆者が愛用。鶏むね肉をしっとり作り置き",
    keyword: "BONIQ 低温調理器",
    // BONIQ 3.0 本体（ブラック）
    asin: "B0DQ1D5KLB",
    preferences: ["lowfat"],
  },
  {
    id: "oatmeal",
    name: "オートミール",
    emoji: "🥣",
    detail: "食物繊維たっぷり。朝食の主食におすすめ",
    keyword: "オートミール 1kg",
    preferences: ["lowfat"],
  },
  {
    id: "konjac-noodles",
    name: "こんにゃく麺・糖質オフ麺",
    emoji: "🍜",
    detail: "麺が食べたい日のカロリーカットに",
    keyword: "こんにゃく麺 糖質オフ",
    goals: ["lose", "maintain"],
    preferences: ["lowcarb"],
  },
  {
    id: "body-scale",
    name: "体組成計",
    emoji: "⚖️",
    detail: "体重・体脂肪を記録してモチベ維持",
    keyword: "体組成計 体脂肪",
    goals: ["lose", "maintain"],
  },
  {
    id: "kitchen-scale",
    name: "キッチンスケール",
    emoji: "🥄",
    detail: "ごはんや肉の量を量るとカロリー管理が正確に",
    keyword: "キッチンスケール 0.1g",
  },
  {
    id: "protein-bar",
    name: "プロテインバー",
    emoji: "🍫",
    detail: "持ち歩ける間食。トレーニング後の補給にも",
    keyword: "プロテインバー まとめ買い",
    goals: ["gain", "maintain"],
    forExercisers: true,
    excludeIf: ["乳製品"],
  },
  {
    id: "mct-oil",
    name: "MCTオイル",
    emoji: "🫗",
    detail: "コーヒーやサラダにかけてエネルギー補給",
    keyword: "MCTオイル",
    preferences: ["lowcarb"],
  },
  {
    id: "food-container",
    name: "保存容器（レンジ対応）",
    emoji: "🍱",
    detail: "作り置き・弁当をまとめて準備するときに",
    keyword: "保存容器 レンジ対応 弁当",
  },
];

export type RecommendationContext = Pick<UserAnswers, "goal" | "exercise" | "preference" | "dislikes">;

const EXERCISING: Exercise[] = ["light", "active"];

/**
 * ユーザーの回答に合うアイテムを最大 limit 件選ぶ。
 * 目標・アレルギーで絞り込み、食事スタイルと運動習慣が合うものを上位にする（同点なら配列順）。
 * replaces を持つアイテムは、置き換え先が残っているときは出さない（例：ホエイが出るならソイは出さない）。
 */
export function pickRecommendedItems(ctx: RecommendationContext, limit = 6): RecommendedItem[] {
  const exercises = EXERCISING.includes(ctx.exercise);
  const fits = RECOMMENDED_ITEMS.filter(
    (item) =>
      (!item.goals || item.goals.includes(ctx.goal)) &&
      !item.excludeIf?.some((d) => ctx.dislikes.includes(d))
  );
  const fitIds = new Set(fits.map((item) => item.id));
  return fits
    .filter((item) => !item.replaces || !fitIds.has(item.replaces))
    .map((item) => ({ item, index: RECOMMENDED_ITEMS.indexOf(item) }))
    .map(({ item, index }) => {
      let score = 0;
      if (item.preferences?.includes(ctx.preference)) score += 2;
      if (item.forExercisers && exercises) score += 1;
      return { item, index, score };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getRecommendedItem(id: string): RecommendedItem | undefined {
  return RECOMMENDED_ITEMS.find((item) => item.id === id);
}
