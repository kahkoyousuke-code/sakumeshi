export interface ColumnMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  emoji: string;
}

export const COLUMNS: ColumnMeta[] = [
  {
    slug: "lowcarb-vs-lowfat",
    title: "低糖質と低脂質、結局どっちがいいの？",
    description: "低糖質と低脂質のメリット・デメリットと選び方を解説",
    date: "2026-03-20",
    emoji: "🥗",
  },
  {
    slug: "pfc-calculation",
    title: "PFCバランスの計算方法を分かりやすく解説！",
    description: "ダイエット初心者でも5分で分かるPFC計算の4ステップ",
    date: "2026-03-20",
    emoji: "📊",
  },
];
