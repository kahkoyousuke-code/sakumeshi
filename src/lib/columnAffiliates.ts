// ── コラム末尾のアフィリエイト枠 ────────────────────────────────
// slug → その記事の内容に合う商品。ColumnFooter が本文直後に「PR」付きで1枠だけ出す。
// ここに無い記事には何も出さない（健康ジャンルは広告過多が AdSense 審査に響くため、
// 記事と関係の薄い商品は置かない。1記事あたり商品2つまで）。
// 宅食は全記事共通の MealDeliveryBox（ColumnFooter の CTA の下）が出すので、ここには入れない。
// items は recommendedItems.ts の id。存在しない id は無視される。

export interface ColumnAffiliate {
  /** 枠の見出しの下に出す一文（記事の流れから商品につなぐ） */
  lead: string;
  /** RECOMMENDED_ITEMS の id（最大2つ） */
  items: string[];
}

export const COLUMN_AFFILIATES: Record<string, ColumnAffiliate> = {
  "protein-intake": {
    lead: "食事だけでタンパク質の目標量に届かない日はプロテインで足し、鶏むね肉を低温調理で作り置きしておくと続けやすくなります。",
    items: ["whey-protein", "boniq"],
  },
  "workout-meal-timing": {
    lead: "トレーニング前後にすぐ食事をとれないときは、持ち運べるものを用意しておくと便利です。",
    items: ["whey-protein", "protein-bar"],
  },
  "diet-snacks": {
    lead: "間食を選ぶのが面倒なら、タンパク質がとれるものを買い置きしておくのが手軽です。",
    items: ["protein-bar", "salad-chicken"],
  },
  "convenience-diet": {
    lead: "コンビニに頼る日が続くなら、定番のタンパク源をまとめ買いしておくと選ぶ手間が減ります。",
    items: ["salad-chicken"],
  },
  "meal-prep": {
    lead: "作り置きは低温調理器と容器をそろえると準備が早くなります。",
    items: ["boniq", "food-container"],
  },
  "chicken-bento-1year": {
    lead: "鶏むね弁当を続けるなら、低温調理器でまとめて仕込み、容器に小分けしておくと毎朝の準備が短くなります。",
    items: ["boniq", "food-container"],
  },
  "daily-calories": {
    lead: "計算したカロリーを守るには、最初の数週間だけでも量を量ってみるのが近道です。",
    items: ["kitchen-scale"],
  },
  "pfc-calculation": {
    lead: "PFC を毎食そろえるには、最初の数週間だけでも食材の量を量ってみるのが近道です。",
    items: ["kitchen-scale"],
  },
  "lowcarb-vs-lowfat": {
    lead: "どちらの方法でも、主食を置き換えられる食品があると続けやすくなります。",
    items: ["konjac-noodles", "oatmeal"],
  },
  "gi-index": {
    lead: "主食を選び直すなら、食物繊維の多いものから試すと取り入れやすいです。",
    items: ["oatmeal", "konjac-noodles"],
  },
  "gut-health-diet": {
    lead: "食物繊維を増やしたいなら、朝の主食を変えるのがいちばん手軽です。",
    items: ["oatmeal"],
  },
  "scale-vs-mirror": {
    lead: "体重だけでなく体脂肪率も記録すると、見た目の変化と数字を結びつけやすくなります。",
    items: ["body-scale"],
  },
  "weight-weekly-average": {
    lead: "週平均で見るには毎日の記録が欠かせません。スマホに記録が残る体組成計だと手間が減ります。",
    items: ["body-scale"],
  },
  "lose-3kg-month": {
    lead: "1か月続けるなら、体重と体脂肪率を毎日記録して変化を見える化するのがコツです。",
    items: ["body-scale"],
  },
};

export function getColumnAffiliate(slug: string): ColumnAffiliate | undefined {
  return COLUMN_AFFILIATES[slug];
}
