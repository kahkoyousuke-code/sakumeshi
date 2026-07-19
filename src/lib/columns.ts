export interface ColumnMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  emoji: string;
  /** slugs of related columns shown at the bottom of the article */
  related: string[];
}

export const COLUMNS: ColumnMeta[] = [
  {
    slug: "lowcarb-vs-lowfat",
    title: "低糖質と低脂質、結局どっちがいいの？",
    description: "低糖質と低脂質のメリット・デメリットと選び方を解説",
    date: "2026-03-20",
    emoji: "🥗",
    related: ["pfc-calculation", "boost-metabolism", "diet-plateau"],
  },
  {
    slug: "pfc-calculation",
    title: "PFCバランスの計算方法を分かりやすく解説！",
    description: "ダイエット初心者でも5分で分かるPFC計算の4ステップ",
    date: "2026-03-20",
    emoji: "📊",
    related: ["lowcarb-vs-lowfat", "protein-intake", "boost-metabolism"],
  },
  {
    slug: "diet-snacks",
    title: "ダイエット中の間食、何食べていい？太らないおやつの選び方",
    description: "目的別のおすすめ間食とコンビニで買えるダイエットおやつを紹介",
    date: "2026-03-21",
    emoji: "🥜",
    related: ["convenience-diet", "alcohol-diet", "water-intake"],
  },
  {
    slug: "boost-metabolism",
    title: "基礎代謝を上げる食事とは？痩せやすい体を作る食べ方",
    description: "食事で基礎代謝を上げる5つのポイントとやってはいけない食事法",
    date: "2026-03-29",
    emoji: "🔥",
    related: ["gut-health-diet", "sleep-diet", "protein-intake"],
  },
  {
    slug: "convenience-diet",
    title: "コンビニで買えるダイエット飯の選び方",
    description: "セブン・ファミマ・ローソン別おすすめ商品と避けるべき商品を徹底解説",
    date: "2026-05-09",
    emoji: "🏪",
    related: ["diet-snacks", "eating-out", "meal-prep"],
  },
  {
    slug: "workout-meal-timing",
    title: "筋トレ前後の食事タイミング｜何をいつ食べるか完全解説",
    description: "トレーニング前後に何をいつ食べるか、プロテインのタイミングも解説",
    date: "2026-05-09",
    emoji: "💪",
    related: ["protein-intake", "pfc-calculation", "boost-metabolism"],
  },
  {
    slug: "eating-order",
    title: "食べる順番ダイエット｜血糖値を抑えて太りにくい食べ方",
    description: "野菜→タンパク質→炭水化物の順番で血糖値スパイクを防ぐ方法",
    date: "2026-05-09",
    emoji: "🥢",
    related: ["eating-out", "gut-health-diet", "intermittent-fasting"],
  },
  {
    slug: "eating-out",
    title: "外食でも太らない食べ方｜定食・ラーメン・居酒屋シーン別",
    description: "外食中でもダイエットを続けるためのシーン別メニュー選びガイド",
    date: "2026-05-09",
    emoji: "🍽️",
    related: ["alcohol-diet", "convenience-diet", "eating-order"],
  },
  {
    slug: "no-rebound",
    title: "リバウンドしない食習慣｜落とした体重を維持する方法",
    description: "なぜリバウンドが起きるのか、維持期の食事の考え方と習慣化のポイント",
    date: "2026-05-09",
    emoji: "⚖️",
    related: ["diet-plateau", "boost-metabolism", "sleep-diet"],
  },
  {
    slug: "alcohol-diet",
    title: "お酒とダイエットの両立｜太りにくいお酒の選び方",
    description: "蒸留酒・飲み方ルール・おつまみ選びでダイエット中でもお酒を楽しむ",
    date: "2026-05-09",
    emoji: "🍺",
    related: ["eating-out", "diet-snacks", "sleep-diet"],
  },
  {
    slug: "gut-health-diet",
    title: "腸活×ダイエット｜食物繊維・発酵食品で痩せやすい体に",
    description: "腸内環境を整えて代謝を上げる食物繊維・発酵食品の摂り方を解説",
    date: "2026-05-09",
    emoji: "🌿",
    related: ["eating-order", "boost-metabolism", "water-intake"],
  },
  {
    slug: "protein-intake",
    title: "タンパク質は1日どれくらい必要？プロテインの活用法も解説",
    description: "体重別の必要量・食品の選び方・プロテインが必要な人を分かりやすく解説",
    date: "2026-07-19",
    emoji: "🍗",
    related: ["pfc-calculation", "workout-meal-timing", "meal-prep"],
  },
  {
    slug: "diet-plateau",
    title: "停滞期の乗り越え方｜体重が落ちなくなったらやるべきこと",
    description: "停滞期が起きる理由と対処法、チートデイの正しいやり方を解説",
    date: "2026-07-19",
    emoji: "⛰️",
    related: ["no-rebound", "boost-metabolism", "sleep-diet"],
  },
  {
    slug: "sleep-diet",
    title: "睡眠とダイエットの関係｜寝不足だと太るって本当？",
    description: "睡眠不足が食欲ホルモンに与える影響と、痩せるための睡眠習慣を解説",
    date: "2026-07-19",
    emoji: "😴",
    related: ["boost-metabolism", "diet-plateau", "alcohol-diet"],
  },
  {
    slug: "water-intake",
    title: "ダイエット中の水分補給｜水は1日どれくらい飲めばいい？",
    description: "水分摂取が代謝・食欲に与える影響と、無理なく飲む量を増やすコツ",
    date: "2026-07-19",
    emoji: "💧",
    related: ["boost-metabolism", "gut-health-diet", "diet-snacks"],
  },
  {
    slug: "meal-prep",
    title: "作り置きダイエット｜週末2時間で平日5日を乗り切る",
    description: "挫折しない作り置きの始め方・おすすめおかず・保存のコツを解説",
    date: "2026-07-19",
    emoji: "🍱",
    related: ["convenience-diet", "protein-intake", "pfc-calculation"],
  },
  {
    slug: "diet-over-40",
    title: "40代からのダイエット｜若い頃と同じやり方が通用しない理由",
    description: "代謝が落ちた40代が無理なく痩せるための食事戦略を実体験ベースで解説",
    date: "2026-07-19",
    emoji: "👔",
    related: ["boost-metabolism", "sleep-diet", "protein-intake"],
  },
  {
    slug: "female-cycle-diet",
    title: "生理周期とダイエット｜痩せやすい時期・停滞する時期を知る",
    description: "ホルモンの波に合わせた無理しない食事管理の考え方を解説",
    date: "2026-07-19",
    emoji: "🌸",
    related: ["diet-plateau", "sleep-diet", "diet-snacks"],
  },
  {
    slug: "gi-index",
    title: "GI値って何？血糖値を意識した食材選びで太りにくく",
    description: "低GI食品の選び方と置き換え例、GI値だけに頼らない注意点を解説",
    date: "2026-07-19",
    emoji: "🍚",
    related: ["eating-order", "lowcarb-vs-lowfat", "convenience-diet"],
  },
  {
    slug: "intermittent-fasting",
    title: "16時間断食は痩せる？メリット・デメリットと正しいやり方",
    description: "流行りの16時間断食を冷静に検証。向いている人・向かない人を解説",
    date: "2026-07-19",
    emoji: "⏰",
    related: ["eating-order", "diet-plateau", "lowcarb-vs-lowfat"],
  },
];

export function getColumn(slug: string): ColumnMeta | undefined {
  return COLUMNS.find((c) => c.slug === slug);
}

/** COLUMNS sorted by date descending (newest first), stable for same-date entries */
export function columnsByDateDesc(): ColumnMeta[] {
  return [...COLUMNS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getRelatedColumns(slug: string): ColumnMeta[] {
  const current = getColumn(slug);
  const slugs = current?.related ?? [];
  const related = slugs
    .map((s) => getColumn(s))
    .filter((c): c is ColumnMeta => Boolean(c));
  if (related.length > 0) return related;
  return columnsByDateDesc()
    .filter((c) => c.slug !== slug)
    .slice(0, 3);
}
