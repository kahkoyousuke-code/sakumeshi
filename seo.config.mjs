// seo.config.mjs
// SEO レポート（npm run seo:fetch / seo:report）に、このサイト固有の情報を渡す設定。
//
// scripts/ の3ファイル（gsc-fetch.mjs / seo-report.mjs / seo-config.mjs）はサイトに
// 依存しない。姉妹サービス（サクサプ・サクトレ）と同じものをそのまま置いてあり、
// サクメシの事情はこのファイルだけに閉じ込めてある。
//
// TypeScript をそのまま実行はできないので、正規表現で読む。
// 対象ファイルの書式を変えたらここのパターンも直すこと。

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (rel) => readFileSync(join(ROOT, rel), "utf8").replace(/\r\n/g, "\n");

/**
 * 公開済みのコラム。
 *
 * title / description は COLUMNS ではなく各記事ページの columnMetadata() から取る。
 * 検索結果に出るのはそちらで、COLUMNS のほうは一覧カード用の短い文言だから。
 * 「順位のわりにクリックされていないページ」で見たいのは、実際に検索結果へ出ている文言。
 */
function columns() {
  const src = read("src/lib/columns.ts");
  const entries = [...src.matchAll(
    /slug:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]*)",\s*\n\s*description:\s*"([^"]*)",\s*\n\s*date:\s*"([^"]*)"/g,
  )];

  return entries.map((m) => {
    const [, slug, listTitle, listDescription, date] = m;
    const page = `src/app/column/${slug}/page.tsx`;
    let title = listTitle;
    let description = listDescription;

    if (existsSync(join(ROOT, page))) {
      // prettier が description を次の行に折るので、改行を挟む形も拾う。
      const meta = read(page).match(
        /columnMetadata\(\s*"[^"]+"\s*,\s*\{\s*title:\s*\n?\s*"((?:[^"\\]|\\.)*)"\s*,\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/,
      );
      if (meta) {
        title = meta[1];
        description = meta[2];
      }
    }
    return { path: `/column/${slug}`, title, description, date };
  });
}

const config = {
  siteUrl: "https://sakumeshi.app/",

  pages: columns,

  /**
   * クエリにこの語が含まれたら、そのページが扱っているとみなす表。
   * サクメシには成分名のような機械的に引ける一覧が無いので手で持つ。
   * 記事を足したらここにも足す（足さなくても動くが、その記事は
   * 「受け皿が無い」側に出てしまう）。
   */
  keywords: () => [
    { kw: "PFC", path: "/column/pfc-calculation" },
    { kw: "低糖質", path: "/column/lowcarb-vs-lowfat" },
    { kw: "糖質制限", path: "/column/lowcarb-vs-lowfat" },
    { kw: "低脂質", path: "/column/lowcarb-vs-lowfat" },
    { kw: "間食", path: "/column/diet-snacks" },
    { kw: "おやつ", path: "/column/diet-snacks" },
    { kw: "基礎代謝", path: "/column/boost-metabolism" },
    { kw: "代謝", path: "/column/boost-metabolism" },
    { kw: "コンビニ", path: "/column/convenience-diet" },
    { kw: "筋トレ", path: "/column/workout-meal-timing" },
    { kw: "トレーニング", path: "/column/workout-meal-timing" },
    { kw: "食べる順番", path: "/column/eating-order" },
    { kw: "ベジファースト", path: "/column/eating-order" },
    { kw: "血糖値", path: "/column/gi-index" },
    { kw: "GI", path: "/column/gi-index" },
    { kw: "外食", path: "/column/eating-out" },
    { kw: "ラーメン", path: "/column/eating-out" },
    { kw: "居酒屋", path: "/column/eating-out" },
    { kw: "定食", path: "/column/eating-out" },
    { kw: "リバウンド", path: "/column/no-rebound" },
    { kw: "お酒", path: "/column/alcohol-diet" },
    { kw: "アルコール", path: "/column/alcohol-diet" },
    { kw: "ビール", path: "/column/alcohol-diet" },
    { kw: "禁酒", path: "/column/quit-drinking-diet" },
    { kw: "断酒", path: "/column/quit-drinking-diet" },
    { kw: "腸活", path: "/column/gut-health-diet" },
    { kw: "食物繊維", path: "/column/gut-health-diet" },
    { kw: "発酵", path: "/column/gut-health-diet" },
    { kw: "タンパク質", path: "/column/protein-intake" },
    { kw: "たんぱく質", path: "/column/protein-intake" },
    { kw: "プロテイン", path: "/column/protein-intake" },
    { kw: "停滞期", path: "/column/diet-plateau" },
    { kw: "チートデイ", path: "/column/diet-plateau" },
    { kw: "睡眠", path: "/column/sleep-diet" },
    { kw: "寝不足", path: "/column/sleep-diet" },
    { kw: "水分", path: "/column/water-intake" },
    { kw: "作り置き", path: "/column/meal-prep" },
    { kw: "ミールプレップ", path: "/column/meal-prep" },
    { kw: "40代", path: "/column/diet-over-40" },
    { kw: "生理", path: "/column/female-cycle-diet" },
    { kw: "月経", path: "/column/female-cycle-diet" },
    { kw: "断食", path: "/column/intermittent-fasting" },
    { kw: "ファスティング", path: "/column/intermittent-fasting" },
    { kw: "16時間", path: "/column/intermittent-fasting" },
    { kw: "食欲", path: "/column/appetite-control" },
    { kw: "運動なし", path: "/column/no-exercise-diet" },
    { kw: "むくみ", path: "/column/salt-swelling" },
    { kw: "塩分", path: "/column/salt-swelling" },
    { kw: "摂取カロリー", path: "/column/daily-calories" },
    { kw: "カロリー", path: "/column/daily-calories" },
    { kw: "3kg", path: "/column/lose-3kg-month" },
    { kw: "食材", path: "/column/diet-foods" },
    { kw: "夜食", path: "/column/late-night-meal" },
    { kw: "夜遅い", path: "/column/late-night-meal" },
    { kw: "鶏むね", path: "/column/chicken-bento-1year" },
    { kw: "鶏胸", path: "/column/chicken-bento-1year" },
    { kw: "弁当", path: "/column/chicken-bento-1year" },
    { kw: "週平均", path: "/column/weight-weekly-average" },
    { kw: "見た目", path: "/column/scale-vs-mirror" },
  ],

  /** 記事に加えて、流入の入口になる固定ページも URL 検査にかける。 */
  inspectPaths: () => ["/", "/form", "/column", "/about", ...columns().map((c) => c.path)],

  /** ダイエット系のクエリで、どの記事名にも入ってしまう一般語。突き合わせから外す。 */
  stopWords: [
    "ダイエット", "痩せる", "痩せたい", "太る", "太らない", "食事", "ごはん", "meal",
    "方法", "効果", "おすすめ", "とは", "選び方", "やり方", "コツ", "食べ方",
    "比較", "一覧", "人気", "ランキング", "簡単", "目安", "違い",
  ],

  /** 打ち手の文面。サクメシのファイル構成に合わせる。 */
  advice: {
    nearTop: "その記事に、クエリに正面から答える見出しを足す。関連コラム（`src/lib/columns.ts` の `related`）からそのページへリンクを集める。",
    lowCtr: "その記事の `src/app/column/<slug>/page.tsx` にある `columnMetadata()` の `title` / `description` を見直す（検索結果に出るのはこちら。`src/lib/columns.ts` のほうは一覧カード用）。",
    hasPage: "その記事に、このクエリに答える節を足す。分量が増えるなら別記事として起こす。",
    noPage: "新しいコラムを立てる。`src/lib/columns.ts` に追記してから `src/app/column/<slug>/page.tsx` を作る（CLAUDE.md の「コラム」参照）。",
  },
};

export default config;
