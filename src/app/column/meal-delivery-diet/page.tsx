import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import ColumnFigure from "@/components/column/ColumnFigure";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("meal-delivery-diet", {
  title: "ダイエットに宅食は高い？1食約1,400円を自炊・コンビニと比べて分かる「使うべき人」 | サクメシ",
  description:
    "ダイエット中の宅食（冷凍弁当）は高いのか。自炊・コンビニ弁当と、高たんぱくの宅食（1食約1,400円）、おかずだけの宅食（1食約560円）を、1食あたりの費用と手間で比べました。宅食で痩せる仕組み、向いている人・向かない人、毎日ではなく「自炊できない日の保険」にする使い方、選ぶときの5つのチェック項目まで解説します。",
});

const TOC = [
  { id: "quick", label: "結論：宅食は毎日ではなく「自炊できない週の保険」にすると割に合う" },
  { id: "effect", label: "宅食で痩せる？効くのは「カロリーが決まっていること」" },
  { id: "cost", label: "1食あたりの費用比較：自炊・コンビニ・宅食" },
  { id: "time", label: "手間の比較：自炊は週30分強の仕込み、宅食は温めるだけ" },
  { id: "fit", label: "宅食が向いている人" },
  { id: "unfit", label: "宅食が向いていない人" },
  { id: "how", label: "使い方：毎日ではなく「1日1食・仕込めない週だけ」" },
  { id: "check", label: "宅食を選ぶときの5つのチェック項目" },
  { id: "ng", label: "よくある失敗" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

/**
 * Per-meal cost comparison.
 * Home cooking: chicken breast 60-80 yen/100g x 200g (from chicken-bento-1year, rice not included).
 * Convenience store bento: 500-600 yen (same article).
 * Meal delivery (high protein): Muscle Deli regular subscription, 5 meals 5,821 yen (10% off, tax incl.) + shipping 1,200 yen.
 * Checked on muscledeli.jp on 2026-11-08.
 * Meal delivery (side dishes only): Watami Direct "いつでも三菜" おまかせ定期 10 meals 4,645 yen (tax incl.) + shipping 990 yen
 * (Honshu/Shikoku/Kyushu) = 5,635 yen / 10 = ~560 yen. Rice not included. Checked on watami-takushoku-direct.jp on 2026-11-21.
 */
const COST_TABLE = [
  { label: "自炊（運営者の鶏むね弁当）", cost: "約120〜160円", note: "鶏むね肉200g分。米は別" },
  { label: "コンビニ弁当", cost: "約500〜600円", note: "買いに行く手間はかかる" },
  { label: "宅食・おかずのみ（送料込み）", cost: "約560円", note: "ワタミの宅食ダイレクト いつでも三菜・定期おまかせ・10食。ごはんは別" },
  { label: "宅食・高たんぱく（送料別）", cost: "約1,160円", note: "マッスルデリ MAINTAIN・通常定期・5食・2回目以降" },
  { label: "宅食・高たんぱく（送料込み）", cost: "約1,400円", note: "上に5食分の送料1,200円を足した額" },
];

/**
 * Two meal delivery services compared on the 5 checklist items.
 * Muscle Deli: muscledeli.jp, 2026-11-08. Watami Direct: watami-takushoku-direct.jp, 2026-11-21.
 * Watami "いつでも三菜" nutrition = range and mean of the 94 三菜 menus listed on the official 選べるセット page.
 */
const SERVICE_COMPARE = [
  {
    item: "1食のカロリー",
    muscle: "LEAN 350〜450kcal／MAINTAIN 450〜550kcal",
    watami: "いつでも三菜 144〜348kcal（平均約250kcal）",
  },
  {
    item: "たんぱく質",
    muscle: "LEAN 30g以上／MAINTAIN 35g以上",
    watami: "6.7〜21.6g（平均約12g）",
  },
  {
    item: "定期便の縛り",
    muscle: "通常の定期便は縛りなし。継続割は途中解約で違約金。解約はお届け予定日の5日前まで",
    watami: "定期は3回以上のお届けが条件。変更・停止は4回目以降で、締め切りはお届け予定日の4〜6日前（地域で異なる）",
  },
  {
    item: "送料込みの単価",
    muscle: "通常定期・5食で約1,400円（送料は5食1,200円）",
    watami: "定期おまかせ・10食で約560円（送料は1回990円。北海道1,320円・沖縄2,420円）",
  },
  {
    item: "冷凍庫とレンジ",
    muscle: "1食20×15×4.5cm。600Wで MAINTAIN 5分30秒",
    watami: "三菜は約17.6×13.6×2.6cm（新容器は高さ約3.2cm）。加熱時間は商品ごとにパッケージに記載",
  },
  {
    item: "主食（ごはん）",
    muscle: "入っている",
    watami: "基本はおかずのみ（注文時に「ごはんあり」も選べる）",
  },
];

/**
 * Per-meal cost bars, scaled 0.3px = 1 yen (420px = 1,400 yen, x starts at 20). Values from COST_TABLE:
 * home cooking 120-160 yen (chicken breast 200g, rice not included), convenience store bento 500-600 yen,
 * Watami Direct いつでも三菜 10 meals with shipping ~560 yen (side dishes only, 2026-11-21),
 * Muscle Deli regular subscription 5 meals: ~1,160 yen without shipping, ~1,400 yen with shipping (muscledeli.jp, 2026-11-08).
 * Ranges: solid bar up to the lower bound, light segment from lower to upper bound.
 */
function MealCostDiagram() {
  return (
    <svg viewBox="0 0 640 506" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="20" y="28" fontSize="16" fill="#374151">1食あたりの費用（長いほど高い）</text>
      <rect x="512" y="15" width="20" height="16" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
      <text x="620" y="28" textAnchor="end" fontSize="16" fill="#374151">＝価格の幅</text>
      <line x1="20" y1="44" x2="20" y2="496" stroke="#9CA3AF" strokeWidth="2" />

      {/* Home cooking: 120-160 yen -> 36px solid + 12px range */}
      <text x="32" y="70" fontSize="18" fontWeight="bold" fill="#374151">自炊（鶏むね弁当・肉代）</text>
      <rect x="20" y="82" width="36" height="36" fill="#4CAF50" />
      <rect x="56" y="82" width="12" height="36" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
      <text x="80" y="106" fontSize="18" fontWeight="bold" fill="#2E7D32">約120〜160円</text>

      {/* Convenience store bento: 500-600 yen -> 150px solid + 30px range */}
      <text x="32" y="162" fontSize="18" fontWeight="bold" fill="#374151">コンビニ弁当</text>
      <rect x="20" y="174" width="150" height="36" fill="#4CAF50" />
      <rect x="170" y="174" width="30" height="36" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1.5" />
      <text x="212" y="198" fontSize="18" fontWeight="bold" fill="#2E7D32">約500〜600円</text>

      {/* Side-dish-only meal delivery with shipping: 560 yen -> 168px */}
      <text x="32" y="254" fontSize="18" fontWeight="bold" fill="#374151">宅食・おかずのみ（送料込み）</text>
      <rect x="20" y="266" width="168" height="36" fill="#66BB6A" />
      <text x="200" y="290" fontSize="18" fontWeight="bold" fill="#2E7D32">約560円（ごはん別）</text>

      {/* High-protein meal delivery without shipping: 1,160 yen -> 348px */}
      <text x="32" y="346" fontSize="18" fontWeight="bold" fill="#374151">宅食・高たんぱく（送料別）</text>
      <rect x="20" y="358" width="348" height="36" fill="#66BB6A" />
      <text x="380" y="382" fontSize="18" fontWeight="bold" fill="#2E7D32">約1,160円</text>

      {/* High-protein meal delivery with shipping: 1,400 yen -> 420px (highlight) */}
      <text x="32" y="438" fontSize="18" fontWeight="bold" fill="#F57C00">宅食・高たんぱく（送料込み）</text>
      <rect x="20" y="450" width="420" height="36" fill="#F57C00" />
      <text x="452" y="474" fontSize="18" fontWeight="bold" fill="#F57C00">約1,400円</text>
    </svg>
  );
}

const FIT_LIST = [
  {
    title: "作り置きが続かない、仕込めない週がある",
    desc: "週末に予定が入ると、平日の食事が一気に崩れるタイプ。冷凍庫に数食あるだけで、その週を立て直せます。",
  },
  {
    title: "昼や夜をコンビニ・外食に頼っていて、そこで食べすぎる",
    desc: "空腹のまま店に入ると、つい大盛りや揚げ物を選んでしまう。最初から量が決まった1食があると、その場で迷わずに済みます。",
  },
  {
    title: "カロリーやPFCを毎回計算したくない",
    desc: "1日3食のうち1食の数字が決まっているだけで、残り2食の調整がぐっと楽になります。",
  },
  {
    title: "一人暮らしで、食材を余らせがち",
    desc: "自炊は作る量が多いほど安くなりますが、1人分だと食材を使い切れずに捨てることもあります。そのぶん、実際の単価は表の数字より上がります。",
  },
  {
    title: "筋トレをしていて、たんぱく質を確実にとりたい",
    desc: "たとえばマッスルデリの減量向けプランは、1食でたんぱく質30g以上が目安です。ふだんの食事でたんぱく質が足りない日の穴埋めに向いています。",
  },
];

const UNFIT_LIST = [
  {
    title: "とにかく予算を優先したい",
    desc: "高たんぱくの宅食は送料込みで1食約1,400円。運営者の鶏むね弁当（肉代120〜160円）の約9〜12倍です。おかずだけの宅食なら約560円まで下がりますが、ごはん代は別にかかります。安く痩せるなら、自炊にはかないません。",
  },
  {
    title: "自炊がすでに回っている",
    desc: "作り置きが続いているなら、置き換える理由がありません。崩れた週にだけ使う、くらいで十分です。",
  },
  {
    title: "家族と同じ食事をとる",
    desc: "自分だけ別の食事にすると、結局家族の分も食べてしまいがちです。家族の献立の中で量を調整するほうが続きます。",
  },
  {
    title: "冷凍庫に余裕がない",
    desc: "冷凍の宅食は1食で弁当箱ほどの大きさがあります。マッスルデリは1食20×15×4.5cmなので、5食重ねると高さは20cmを超えます。届く前に冷凍庫を空けておく必要があります。",
  },
];

const CHECK_LIST = [
  {
    title: "1食のカロリー：自分の目標の3分の1以内か",
    desc: "1日の目標が1,500kcalなら、1食500kcalまでが目安です。同じサービスでも、カロリーの違うプランが用意されていることがあります（マッスルデリなら、1,500kcalの人は LEAN、1,800kcalの人は MAINTAIN がこの範囲に収まります）。",
  },
  {
    title: "たんぱく質：1食で何gとれるか",
    desc: "減量中は筋肉を落とさないために、たんぱく質を多めにとるのが基本です。栄養成分表示で、たんぱく質の量を必ず確認します。",
  },
  {
    title: "定期便の縛り：何回目から解約できるか",
    desc: "「◯回継続で割引」のプランは、途中でやめると違約金がかかることがあります。解約・休止の締め切り（お届けの何日前か）も確認します。",
  },
  {
    title: "送料込みの1食単価",
    desc: "表示されている価格は送料別のことが多く、食数が少ないほど1食あたりの送料が重くなります。送料を足した額で比べるのが確実です。",
  },
  {
    title: "冷凍庫の空きと、レンジの加熱時間",
    desc: "届いた分が冷凍庫に入るか。会社に持っていくなら、職場のレンジで温められるか。生活に組み込めるかは、ここで決まります。",
  },
];

const NG_LIST = [
  {
    title: "割引につられて、いきなり長期の継続割で申し込む",
    desc: "口に合わない、冷凍庫に入らないと分かっても、途中でやめると違約金がかかることがあります。最初は縛りのないプランで試すのが安全です。",
  },
  {
    title: "宅食の日は安心して、残りの2食や間食で食べすぎる",
    desc: "宅食で決まるのは1食分だけです。残りでいつもより食べれば、1日の合計は変わりません。",
  },
  {
    title: "毎日・毎食にして、費用が続かなくなる",
    desc: "1日3食を宅食にすると1ヶ月で約90食。MAINTAIN の通常定期（1食約1,160円）なら、送料を入れなくても10万円を超えます。お金が続かなくなってやめると、元の食事に戻るだけです。",
  },
  {
    title: "冷凍のまま持っていかず、自然解凍で食べようとする",
    desc: "冷凍の宅食は、自然解凍に対応していないものがあります。持っていくなら冷凍のまま保冷バッグに入れ、食べる直前に温めます。",
  },
];

const FAQS = [
  {
    q: "宅食だけで痩せられる？",
    a: "宅食そのものに痩せる効果があるわけではありません。痩せるかどうかは1日の合計カロリーで決まります。宅食の役割は、1食分のカロリーとたんぱく質を決めて、食べすぎる余地を減らすことです。残りの食事で取り返してしまえば、体重は変わりません。",
  },
  {
    q: "1日何食を宅食にすればいい？",
    a: "多くの人は1日1食で十分です。食べすぎやすい時間帯（昼をコンビニで済ませる人なら昼、帰りが遅い人なら夜）を1食だけ置き換えるのが、費用と効果のバランスがいい使い方です。マッスルデリも公式サイトで「1日1食もしくは2日に1食」を推奨しています。",
  },
  {
    q: "宅食とコンビニ弁当、ダイエットにはどっちがいい？",
    a: "費用はコンビニ弁当（1食500〜600円）のほうが安く、高たんぱくの宅食は送料込みで1食約1,400円です。おかずだけの宅食（約560円）ならコンビニ弁当と同じくらいですが、ごはんは別に用意する必要があります。一方で、コンビニは店で選ぶので、その日の気分で量やおかずが変わります。選ぶ力に自信があればコンビニ、迷うと食べすぎるなら宅食、と考えると選びやすくなります。",
  },
  {
    q: "安い宅食（おかずだけ・1食500円台）でもダイエットに使える？",
    a: "使えます。ワタミの宅食ダイレクトの「いつでも三菜」は、おかずだけで1食144〜348kcal（平均約250kcal）と低めなので、ごはんの量を自分で決めれば1食の合計を調整しやすくなります。ただし、たんぱく質は平均約12gと、高たんぱくの宅食（30g以上）より少なめです。減量中は、ゆで卵や納豆、ギリシャヨーグルトなどを1品足すと、たんぱく質を補いやすくなります。それでも高たんぱくの宅食ほどにはなりにくいので、足りない分は残りの食事で調整します。なお、1食500円台になるのは定期・10食以上・本州・四国・九州の場合です。7食セットや北海道・沖縄、都度購入では1食600〜700円前後になります。",
  },
  {
    q: "筋トレ中、宅食1食でたんぱく質は足りる？",
    a: "1食分としては十分な量です。マッスルデリは LEAN で30g以上、MAINTAIN で35g以上が目安です。1日に必要な量は体重や運動量で変わるので、残りの食事と合わせて考えます。増量中は GAIN（50g以上）を選ぶか、主食を足して調整します。",
  },
  {
    q: "宅食を会社に持っていける？",
    a: "持っていけます。ただし冷凍の宅食は、自然解凍に対応していないものがあります。冷凍のまま保冷バッグに入れて持っていき、食べる直前に職場の電子レンジで温めます。レンジが使えない職場には向きません。",
  },
  {
    q: "定期便はすぐに解約できる？",
    a: "プランによります。マッスルデリの場合、縛りのない通常の定期便は初回のあとでも解約できます。「6回継続」などの継続割プランは、途中で解約すると違約金がかかります。解約はお届け予定日の5日前までです。ワタミの宅食ダイレクトの定期購入は3回以上のお届けが条件で、変更・停止ができるのは4回目以降（お届け予定日の4〜6日前まで）です。縛りなしで試したいなら、定期ではない「都度購入」を選びます（2026年11月時点の各公式サイトの記載）。",
  },
];

export default function MealDeliveryDiet() {
  return (
    <ColumnShell
      slug="meal-delivery-diet"
      h1="ダイエットに宅食は高い？1食約1,400円を自炊・コンビニと比べて分かる「使うべき人」"
      toc={TOC}
      faqs={FAQS}
    >
      <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
        この記事には広告（PR）を含みます。本文で例に使っているマッスルデリとワタミの宅食ダイレクトはサクメシの提携先で、記事の下で紹介しています。価格や栄養価は各公式サイトの記載をもとにしており、運営者自身はどちらも利用していません。
      </p>

      {/* リード文 */}
      <div className="space-y-4">
        <p>
          「ダイエット中の食事を宅食に任せたら楽そう。でも高いのでは」——減量を始めると、一度は考えることです。
        </p>
        <p>
          先に書いておくと、運営者は宅食を使っていません。低温調理した鶏むね肉とおにぎりの弁当を、1年以上自分で作り続けている自炊派です。その記録は
          <a href="/column/chicken-bento-1year" className="text-green-700 underline hover:no-underline">鶏むね弁当を1年続けた記録</a>
          に、仕込みの時間からお金まで数字で残しています。
        </p>
        <p>
          この記事では、その自炊の実数とコンビニ弁当、宅食（冷凍弁当）を1食あたりで並べ、宅食で得をする人・しない人を線引きします。宅食の例には、提携先から性格の違う2つを使います。高たんぱくで主食まで入ったマッスルデリ（2026年11月8日に公式サイトで確認）と、おかずだけで手頃なワタミの宅食ダイレクト（2026年11月21日に確認）です。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：宅食は毎日ではなく「自炊できない週の保険」にすると割に合う
        </h2>
        <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>宅食に痩せる効果があるわけではない。効くのは<strong>1食分のカロリーとたんぱく質が最初から決まっていること</strong></span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>費用は送料込みで、高たんぱくの宅食が<strong>1食約1,400円</strong>（コンビニ弁当の2倍以上）、おかずだけの宅食なら<strong>約560円</strong>（ごはんは別）</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>だから<strong>毎日・毎食ではなく、1日1食・仕込めない週だけ</strong>に絞るのが現実的</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>申し込むなら、まず<strong>縛りのない定期便か都度購入</strong>で試す。長期の継続割や回数条件のある定期は、口に合うと分かってから</span></li>
          </ul>
          <p className="text-sm text-gray-700">
            お金で判断したい人は<a href="#cost" className="text-green-700 underline hover:no-underline">1食あたりの費用比較</a>、自分に合うか知りたい人は<a href="#fit" className="text-green-700 underline hover:no-underline">向いている人</a>からどうぞ。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="effect" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          宅食で痩せる？効くのは「カロリーが決まっていること」
        </h2>
        <div className="space-y-4">
          <p>
            体重が減るかどうかは、1日に食べたカロリーと使ったカロリーの差で決まります。宅食を食べたから痩せる、という特別な仕組みはありません。
          </p>
          <p>
            それでも減量向けの宅食が役に立つのは、<strong>1食分の数字が最初から決まっている</strong>からです。たとえばマッスルデリの公式サイトでは、プランごとに1食の目安が次のように示されています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="text-left p-2 border border-green-200">プラン</th>
                  <th className="text-left p-2 border border-green-200">カロリー</th>
                  <th className="text-left p-2 border border-green-200">たんぱく質</th>
                  <th className="text-left p-2 border border-green-200">向いている人（公式の案内）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-2 border border-green-100 font-bold text-gray-800 whitespace-nowrap">LEAN</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">350〜450kcal</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">30g以上</td>
                  <td className="p-2 border border-green-100 text-gray-600">減量中の女性、カロリーを大きく抑えたい男性</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-bold text-gray-800 whitespace-nowrap">MAINTAIN</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">450〜550kcal</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">35g以上</td>
                  <td className="p-2 border border-green-100 text-gray-600">筋肉をつけながら痩せたい男性、体型を保ちたい女性</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border border-green-100 font-bold text-gray-800 whitespace-nowrap">GAIN</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">550〜750kcal</td>
                  <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">50g以上</td>
                  <td className="p-2 border border-green-100 text-gray-600">筋肉を増やしたい人（増量）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            ※ マッスルデリ公式サイトの記載（2026年11月8日確認）。ほかに糖質15g以下の低糖質プランもあります。
          </p>
          <p>
            おかずだけの宅食は、数字の決まり方が少し違います。ワタミの宅食ダイレクトの「いつでも三菜」（主菜1品＋副菜2品）は、公式サイトに載っている94品で1食144〜348kcal、平均すると約250kcalです（2026年11月21日に運営者が集計）。ごはんは入っていないので、<strong>おかずのカロリーが決まっていて、ごはんの量は自分で調整する</strong>使い方になります。
          </p>
          <p>
            1日の目標が1,800kcalの人なら、MAINTAIN を1食（500kcal前後）入れると、残り2食で使えるのは約1,300kcalです。1食分の数字が決まっていれば、残りの調整はずっと簡単になります。逆に、残り2食でいつもより多く食べれば、宅食の意味はなくなります。
          </p>
          <p>
            自分の目標カロリーが分からない人は、先に
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">1日の摂取カロリーの目安</a>
            で計算しておくと、どのプランが合うか選びやすくなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="cost" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1食あたりの費用比較：自炊・コンビニ・宅食
        </h2>
        <div className="space-y-4">
          <p>
            運営者の鶏むね弁当、コンビニ弁当、宅食を、1食あたりの値段で並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="text-left p-2 border border-green-200">食事</th>
                  <th className="text-left p-2 border border-green-200">1食あたり</th>
                  <th className="text-left p-2 border border-green-200">中身・前提</th>
                </tr>
              </thead>
              <tbody>
                {COST_TABLE.map((row) => (
                  <tr key={row.label} className="bg-white">
                    <td className="p-2 border border-green-100 font-bold text-gray-800">{row.label}</td>
                    <td className="p-2 border border-green-100 font-bold text-green-700 whitespace-nowrap">{row.cost}</td>
                    <td className="p-2 border border-green-100 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            ※ 自炊は運営者が買っている業務用サイズの鶏むね肉（100gあたり60〜80円。店や時期で変わります）を200g使った場合の肉代です。おかずのみの宅食は、ワタミの宅食ダイレクト「いつでも三菜」の定期おまかせ10食セット4,645円（税込）に送料990円（本州・四国・九州）を足し、10で割った額です（2026年11月21日時点）。定期は3回以上のお届けが条件です。定期ではない都度購入だと、セット（お肉・お魚・ミックス）10食で4,890円、自分で選ぶセット10食で5,190円（送料込みの1食はそれぞれ約590円・約620円）です。高たんぱくの宅食（送料別）は、マッスルデリ MAINTAIN の縛りのない定期便（2回目以降10%OFF）で5食を頼んだときの1回5,821円（税込）を5で割った額です。送料込みは、これに5食分の送料1,200円（税込）を足して計算しています。10食・15食だと送料は1,420円で、1食あたりの負担は軽くなります。価格はプランによって異なり、ここでの数字は2026年11月8日時点の公式サイトの記載です。初回は25%OFFなので2回目以降より安く、6〜24回の継続割にすると MAINTAIN の1食は1,035〜1,125円（送料別）まで下がります。ただし継続割は、契約した回数に達する前に解約すると違約金がかかります。
          </p>
          <ColumnFigure
            caption="高たんぱくの宅食は送料込みで1食約1,400円。おかずだけの宅食ならコンビニ弁当並みの約560円"
            alt="1食あたりの費用を比べた横棒グラフ。自炊（運営者の鶏むね弁当・肉代）は約120〜160円、コンビニ弁当は約500〜600円、おかずのみの宅食（送料込み・ごはん別）は約560円、高たんぱくの宅食は送料別で約1,160円、送料込みで約1,400円。高たんぱくの宅食はコンビニ弁当の2倍以上、自炊の約9〜12倍になる。"
            note="おかずのみはワタミの宅食ダイレクト いつでも三菜・定期おまかせ10食（2026年11月21日時点）、高たんぱくはマッスルデリ MAINTAIN・通常定期・5食・2回目以降（2026年11月8日時点）の公式価格で計算。自炊は鶏むね肉200g分の肉代で、米は含まない"
          >
            <MealCostDiagram />
          </ColumnFigure>
          <p>
            数字だけ見れば、<strong>高たんぱくの宅食はコンビニ弁当の2倍以上、自炊の肉代の約9〜12倍</strong>です。安く痩せることだけが目的なら、自炊にはかないません。
          </p>
          <p>
            おかずだけの宅食は約560円で、コンビニ弁当とほぼ同じです。その代わり、ごはんを自分で用意する手間と費用は別にかかり、たんぱく質も高たんぱくの宅食より少なめです。<strong>「安さ」をとるならおかず型、「1食で数字を完結させる」なら高たんぱく型</strong>と考えると選びやすくなります。
          </p>
          <p>
            ただ、宅食を比べる相手は「完璧に自炊できた週」ではなく、<strong>「自炊できなかった週」</strong>です。仕込めなかった週の昼をコンビニで済ませると、1週間（5食）で2,500〜3,000円。同じ5食を高たんぱくの宅食にすると、送料込みで約7,000円です。差は1週間で4,000〜4,500円ほど。この差額を、その週の食事が崩れないための保険料と考えられるかどうかが、判断の分かれ目になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="time" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          手間の比較：自炊は週30分強の仕込み、宅食は温めるだけ
        </h2>
        <div className="space-y-4">
          <p>
            お金の次は手間です。運営者は週1回、鶏むね肉を2kgほどまとめて仕込みます（平日5日分の弁当と、夕食のたんぱく源の分）。低温調理器の加熱中は放っておけますが、肉の下ごしらえ、袋詰め、粗熱を取ってからの小分け、洗い物まで含めると、手を動かす時間は毎週30分強。1年で約26時間になります。
          </p>
          <p>
            一方、宅食（マッスルデリの場合）はレンジで温める5分半も待っているだけです。作業といえば容器の出し入れくらいなので、比べるべきは時間の長さより<strong>「手を動かす時間があるかどうか」</strong>です。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">自炊（運営者の鶏むね弁当）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・週1回の仕込みで、手を動かすのは30分強</li>
                <li>・1年で約26時間（買い物の時間は別）</li>
                <li>・仕込めなかった週は、その週の弁当がない</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">宅食（マッスルデリ）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・冷凍で届き、公式の案内ではフタをはがさずにレンジで温める</li>
                <li>・600Wの目安は MAINTAIN で5分30秒（LEAN は4分30秒）</li>
                <li>・注文と受け取り、冷凍庫の空きの管理は必要</li>
              </ul>
            </div>
          </div>
          <p>
            年26時間は、毎日1時間走ることに比べればずっと軽い手間です。運営者はこの手間で続けられています。ただ、
            <strong>その30分が取れない週がある人</strong>
            にとっては、宅食の「温めるだけ」がそのまま価値になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fit" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          宅食が向いている人
        </h2>
        <div className="space-y-3">
          {FIT_LIST.map((item, i) => (
            <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          1つでも強く当てはまるなら、試す価値はあります。特に1つ目と2つ目は、運営者が自炊を続けられている理由の裏返しです。仕込まなかった週は昼に買いに行くしかなく、それは太っていた頃の生活に戻ることでした。その「戻り道」をふさぐ手段の1つが、冷凍庫に置いておける宅食です。
        </p>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="unfit" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          宅食が向いていない人
        </h2>
        <div className="space-y-3">
          {UNFIT_LIST.map((item, i) => (
            <div key={item.title} className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="font-bold text-red-700 text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          当てはまる人は、宅食より自炊の仕組みを整えるほうが近道です。
          <a href="/column/meal-prep" className="text-green-700 underline hover:no-underline">作り置きのコツ</a>
          や、
          <a href="/column/convenience-diet" className="text-green-700 underline hover:no-underline">コンビニでの選び方</a>
          から始めてみてください。
        </p>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          使い方：毎日ではなく「1日1食・仕込めない週だけ」
        </h2>
        <div className="space-y-4">
          <p>
            宅食は、使う量を絞るほど費用と効果のバランスがよくなります。おすすめの使い方は次の3つです。
          </p>
          <ol className="space-y-3">
            <li className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">1. いちばん食べすぎる1食だけ置き換える</p>
              <p className="text-sm text-gray-600">
                昼をコンビニで済ませているなら昼、帰りが遅くて夜にドカ食いするなら夜。3食すべてではなく、崩れやすい1食だけを宅食にします。
              </p>
            </li>
            <li className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">2. 冷凍庫に「仕込めない週」の分を置いておく</p>
              <p className="text-sm text-gray-600">
                ふだんは自炊、出張や繁忙期で仕込めない週だけ宅食。冷凍で届くので、すぐに食べなくても置いておけます（マッスルデリは出荷時点で賞味期限30日以上）。定期便は決まった間隔で自動的に届くため、仕込める週が続くときはマイページから次回の配送をスキップします。定期便ではなく単品で買うこともできます。ワタミの宅食ダイレクトの定期は3回目まで止められないので、たまに使うだけなら都度購入が向いています。
              </p>
            </li>
            <li className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">3. 減量の最初の数週間、「量の手本」にする</p>
              <p className="text-sm text-gray-600">
                1食500kcal・たんぱく質35gがどのくらいの量なのかは、実物を見るのがいちばん早く分かります。一度見ておくと、自炊やコンビニで選ぶときの基準になります。
              </p>
            </li>
          </ol>
          <p>
            運営者は、作り置きの中身を
            <a href="/column/cutting-meal-plan" className="text-green-700 underline hover:no-underline">減量期の1週間の献立</a>
            で型にしています。宅食を使うなら、この型が回らない週の代わりにするのがいちばん自然です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="check" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          宅食を選ぶときの5つのチェック項目
        </h2>
        <div className="space-y-3">
          {CHECK_LIST.map((item, i) => (
            <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 mt-4">
          <p>
            例として、性格の違う2つの宅食をこの5項目で比べました。2つの型でいちばん違いが出る「主食が入っているか」も加えています（マッスルデリは2026年11月8日、ワタミの宅食ダイレクトは2026年11月21日時点の公式サイトの記載）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="text-left p-2 border border-green-200">項目</th>
                  <th className="text-left p-2 border border-green-200">マッスルデリ（高たんぱく型）</th>
                  <th className="text-left p-2 border border-green-200">ワタミの宅食ダイレクト（おかず型）</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_COMPARE.map((row) => (
                  <tr key={row.item} className="bg-white">
                    <td className="p-2 border border-green-100 font-bold text-gray-800 whitespace-nowrap">{row.item}</td>
                    <td className="p-2 border border-green-100 text-gray-600">{row.muscle}</td>
                    <td className="p-2 border border-green-100 text-gray-600">{row.watami}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            ※ ワタミの宅食ダイレクトのカロリーとたんぱく質は、公式サイトの「いつでも三菜」選べるセットに載っている94品の値から運営者が範囲と平均を出したものです（価格は定期おまかせセットのもの）。メニューは入れ替わるため、注文時は各商品の栄養成分表示を確認してください。
          </p>
          <p>
            たんぱく質をしっかりとりたい筋トレ中の人や、1食で数字を完結させたい人はマッスルデリのような高たんぱく型。費用を抑えたい人や、ごはんの量を自分で決めたい人はワタミのようなおかず型が向いています。
          </p>
          <p>
            栄養成分表示の読み方に慣れていない人は、エネルギー（kcal）とたんぱく質の2つだけ見れば十分です。脂質や炭水化物まで細かく追うのは、慣れてからで構いません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある失敗
        </h2>
        <div className="space-y-3">
          {NG_LIST.map((item) => (
            <div key={item.title} className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="font-bold text-red-700 text-sm mb-1">✕ {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="faq" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある質問
        </h2>
        <div className="space-y-3">
          {FAQS.map((item) => (
            <div key={item.q} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">Q. {item.q}</p>
              <p className="text-sm text-gray-600">A. {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>宅食で痩せるのではなく、<strong>1食分の数字が決まっている</strong>から食べすぎにくくなる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>費用は送料込みで、高たんぱくの宅食が<strong>1食約1,400円</strong>、おかずだけの宅食なら<strong>約560円</strong>（ごはん別）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>比べる相手は「自炊できなかった週」。<strong>崩れた週の保険</strong>として考える</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>使うなら<strong>1日1食・仕込めない週だけ</strong>。残りの食事で取り返さない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>申し込むなら<strong>縛りのないプラン（通常の定期便・都度購入）</strong>から。回数の条件と解約の締め切りも先に確認する</span></li>
          </ol>
          <p>
            宅食を1食入れるにしても、残りの2食をどう組むかは自分で決める必要があります。
          </p>
          <p>
            サクメシなら、体格と目標から1日のカロリーとPFCを計算して、7日分の献立まで作れます。宅食を入れる日と自炊する日の組み合わせを考えるときの土台として使ってください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
