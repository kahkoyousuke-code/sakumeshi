import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/water-intake" },
  title: "ダイエット中の水分補給｜水は1日どれくらい飲めばいい？ | サクメシ",
  description:
    "水を飲むと痩せるのかを冷静に整理。1日の必要量の出し方、飲み物のカロリー早見表、飲むタイミングの決め方、むくみとの関係、飲みすぎのリスクまで解説します。",
};

const TOC = [
  { id: "why", label: "水分がダイエットに効く4つの理由" },
  { id: "how-much", label: "1日どれくらい飲めばいい？" },
  { id: "timing", label: "いつ飲むか（1日のタイムテーブル）" },
  { id: "drinks", label: "何を飲む？飲み物の選び方" },
  { id: "calorie", label: "飲み物のカロリー早見表" },
  { id: "swelling", label: "水を飲むとむくむ、は逆" },
  { id: "too-much", label: "飲みすぎにも注意が必要" },
  { id: "tips", label: "無理なく量を増やすコツ" },
  { id: "experience", label: "実際に置き換えて変わったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const DRINK_CALORIES = [
  { name: "水・炭酸水（無糖）", size: "500ml", kcal: "0kcal", sugar: "0g", level: "ok" },
  { name: "麦茶・緑茶・ウーロン茶", size: "500ml", kcal: "0kcal", sugar: "0g", level: "ok" },
  { name: "ブラックコーヒー", size: "1杯", kcal: "約5kcal", sugar: "0g", level: "ok" },
  { name: "無調整豆乳", size: "200ml", kcal: "約110kcal", sugar: "約6g", level: "mid" },
  { name: "スポーツドリンク", size: "500ml", kcal: "約110kcal", sugar: "約25g", level: "mid" },
  { name: "野菜ジュース", size: "200ml", kcal: "約70kcal", sugar: "約15g", level: "mid" },
  { name: "飲むヨーグルト", size: "180ml", kcal: "約120kcal", sugar: "約20g", level: "ng" },
  { name: "オレンジジュース", size: "200ml", kcal: "約85kcal", sugar: "約20g", level: "ng" },
  { name: "加糖カフェラテ（M）", size: "1杯", kcal: "約200kcal", sugar: "約25g", level: "ng" },
  { name: "コーラなど炭酸飲料", size: "500ml", kcal: "約225kcal", sugar: "約56g", level: "ng" },
  { name: "ミルクティー（ペット）", size: "500ml", kcal: "約200kcal", sugar: "約40g", level: "ng" },
];

const TIMETABLE = [
  { time: "起床後", amount: "200ml", why: "寝ている間に失われた水分を戻す。1杯目を固定すると1日が始めやすい" },
  { time: "朝食前", amount: "200ml", why: "食前の1杯は食べすぎ防止にも効く" },
  { time: "午前中", amount: "200〜400ml", why: "デスクにボトルを置いて少しずつ" },
  { time: "昼食前", amount: "200ml", why: "同上。食前に固定するのが最も忘れにくい" },
  { time: "午後", amount: "200〜400ml", why: "15〜16時の「なんとなく空腹」対策にもなる" },
  { time: "夕食前", amount: "200ml", why: "夕食は量が増えやすいので、ここが一番効く" },
  { time: "入浴前後", amount: "200ml", why: "発汗ぶんの補給。入浴前に飲むと湯あたりも防げる" },
];

const FAQS = [
  {
    q: "お茶やコーヒーは水分にカウントしていい？",
    a: "してかまいません。カフェインには利尿作用がありますが、飲んだ量以上に水分が失われるわけではないので、日常的な量ならプラスになります。ただし全部をコーヒーにするとカフェインが多くなるので、水と混ぜて考えてください。",
  },
  {
    q: "白湯のほうが痩せる？",
    a: "白湯そのものに特別な減量効果があるという根拠はありません。ただ、冷たい水より飲みやすく量が増える人は多いので、その意味では有効です。飲みやすい温度を選んでください。",
  },
  {
    q: "食事中に水を飲むと消化に悪い？",
    a: "普通の量なら問題ありません。むしろよく噛んで飲み込みやすくなります。ただし大量に流し込むと噛む回数が減るので、あくまで喉を潤す程度に。",
  },
  {
    q: "むくみが怖くて夜は飲まないようにしている",
    a: "水分を控えると、体はむしろ水を溜め込もうとします。夜に極端に控えるより、日中にしっかり飲んで塩分を摂りすぎないほうが、翌朝のむくみは軽くなります。",
  },
];

function levelClass(level: string) {
  if (level === "ok") return "text-green-700";
  if (level === "mid") return "text-amber-700";
  return "text-red-700";
}

export default function WaterIntake() {
  return (
    <ColumnShell
      slug="water-intake"
      h1="ダイエット中の水分補給｜水は1日どれくらい飲めばいい？"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「水を飲むと痩せる」と聞いたことはありませんか。</p>
        <p>
          半分本当で、半分誤解です。水そのものに脂肪を燃やす作用はありません。ただ、
          <strong>正しく水分を摂ると痩せやすい状態は作れます</strong>
          し、逆に飲み物の選び方を間違えると、それだけで減量が止まります。
        </p>
        <p>この記事では、必要量の出し方から飲み物のカロリー、飲みすぎのリスクまで、実践できる形で整理します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          水分がダイエットに効く4つの理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "空腹との混同を防ぐ", desc: "喉の渇きを空腹と勘違いして食べてしまうことは珍しくありません。食前にコップ1杯飲んでおくと、それだけで食べる量が変わります。" },
              { title: "代謝の土台になる", desc: "栄養の運搬も老廃物の排出も、体液の中で行われます。水分が足りない状態では、そもそも体の反応が効率よく回りません。" },
              { title: "むくみが軽くなる", desc: "水分が不足すると、体は水を溜め込もうとします。飲まないほうがむくむ、というのが実際のところです。" },
              { title: "便通が整う", desc: "食物繊維は水を吸って働きます。繊維だけ増やして水が足りないと、かえって便が硬くなります。" },
            ].map((item) => (
              <div key={item.title} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <div>
                  <p className="text-sm font-bold text-green-700">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            そして最大の効果が
            <strong>「飲み物のカロリーをゼロにできる」</strong>
            ことです。ジュースや甘いカフェラテを水・お茶に置き換えるだけで、1日200〜400kcal減る人はかなりいます。食事を我慢するより、はるかに簡単なカロリーカットです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how-much" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日どれくらい飲めばいい？
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">飲み水としての目安</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">1.5〜2L</p>
                <p className="text-xs text-gray-500">/ 日</p>
              </div>
              <p className="text-sm text-gray-500">（食事に含まれる水分とは別。運動する日・夏場はさらにプラス）</p>
            </div>
          </div>
          <p>
            体格でも変わります。ひとつの目安が
            <strong>体重×約35ml（食事からの分を含む1日の総量）</strong>
            です。体重70kgなら約2.5L。このうち食事から1L前後は摂れるので、飲み水としては1.5L前後という計算になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体重</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1日の総量目安</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">飲み水の目安</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">50kg</td>
                  <td className="p-2 border border-green-100 text-center">約1.8L</td>
                  <td className="p-2 border border-green-100 text-center">約1.2L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">60kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.1L</td>
                  <td className="p-2 border border-green-100 text-center">約1.4L</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">70kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.5L</td>
                  <td className="p-2 border border-green-100 text-center">約1.5L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">80kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.8L</td>
                  <td className="p-2 border border-green-100 text-center">約1.8L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 一度に大量に飲んでも吸収しきれません。<strong>コップ1杯（200ml）を1日7〜8回</strong>に分けるのが基本です。腎臓や心臓に持病がある方、水分制限を指示されている方は、必ず主治医の指示に従ってください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="timing" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          いつ飲むか（1日のタイムテーブル）
        </h2>
        <div className="space-y-4">
          <p>
            量を意識するより、
            <strong>飲むタイミングを固定するほうが確実に増えます</strong>
            。「喉が渇いたら飲む」だと、忙しい日ほど飲めません。
          </p>
          <div className="space-y-1.5">
            {TIMETABLE.map((row) => (
              <div key={row.time} className="flex gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
                <span className="text-xs font-bold text-green-700 w-16 shrink-0 pt-0.5">{row.time}</span>
                <span className="text-sm font-bold text-gray-700 w-20 shrink-0">{row.amount}</span>
                <span className="text-xs text-gray-500">{row.why}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            合計すると約1.4〜1.8L。これに食事の水分が加わるので、多くの人はこれで足ります。就寝直前の大量摂取は夜間の目覚めにつながるので、寝る前は少量にしてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="drinks" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          何を飲む？飲み物の選び方
        </h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">評価</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">飲み物</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ポイント</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 text-center">◎</td>
                  <td className="p-2 border border-green-100 font-medium">水・炭酸水（無糖）</td>
                  <td className="p-2 border border-green-100">基本はこれ。炭酸水は満腹感が出るので間食対策にも使える</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 text-center">◎</td>
                  <td className="p-2 border border-green-100 font-medium">お茶（麦茶・緑茶・ウーロン茶）</td>
                  <td className="p-2 border border-green-100">0kcal。カフェイン入りは夕方以降を控えめに。麦茶はノンカフェイン</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 text-center">○</td>
                  <td className="p-2 border border-green-100 font-medium">ブラックコーヒー</td>
                  <td className="p-2 border border-green-100">ほぼ0kcal。砂糖・ミルクを入れた瞬間に別の飲み物になる</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 text-center">△</td>
                  <td className="p-2 border border-green-100 font-medium">ゼロカロリー飲料</td>
                  <td className="p-2 border border-green-100">ジュースからの移行段階としては有効。常用より、水への橋渡しと考える</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 text-center">△</td>
                  <td className="p-2 border border-green-100 font-medium">スポーツドリンク</td>
                  <td className="p-2 border border-green-100">大量に汗をかいた日は有効。日常の水分補給に使うと糖質が上乗せされる</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 text-center">❌</td>
                  <td className="p-2 border border-green-100 font-medium">ジュース・加糖コーヒー・甘い炭酸</td>
                  <td className="p-2 border border-green-100">液体の糖は満腹感が残らず、そのまま上乗せになる。最優先でカット</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            とくに注意したいのが
            <strong>「健康そうに見える飲み物」</strong>
            です。野菜ジュース、飲むヨーグルト、スムージー、スポーツドリンクは糖質が多い商品が少なくありません。買う前に栄養成分表示の炭水化物の欄を見る習慣をつけてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="calorie" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲み物のカロリー早見表
        </h2>
        <div className="space-y-4">
          <p>数字で並べると、置き換えの効果が分かりやすくなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">飲み物</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">量</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">糖質</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {DRINK_CALORIES.map((d, i) => (
                  <tr key={d.name} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className={`p-2 border border-green-100 font-medium ${levelClass(d.level)}`}>{d.name}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.size}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.kcal}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.sugar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">※ 商品によって幅があります。実際の値はパッケージの表示で確認してください。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">置き換えの効果</p>
            <p className="text-sm text-gray-600">
              加糖カフェラテ（200kcal）とペットボトルのミルクティー（200kcal）を毎日1本ずつ飲んでいる人が、両方を無糖に変えると<strong>1日400kcal</strong>。1週間で2,800kcal——脂肪に換算すると約0.4kg分にあたります。食事を一切変えなくてもこれだけ動きます。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="swelling" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          水を飲むとむくむ、は逆
        </h2>
        <div className="space-y-4">
          <p>
            「むくむから水を控えている」という人は多いのですが、
            <strong>むくみの主な原因は水ではなく塩分（ナトリウム）</strong>
            です。体は体液の濃度を一定に保とうとするため、塩分が多いと水を抱え込みます。
          </p>
          <p>
            つまり、水を控えても塩分が多ければむくみます。むしろ水分が不足すると体は水を溜め込む方向に働くので、
            <strong>控えるほど悪化する</strong>という関係になります。
          </p>
          <div className="space-y-2">
            {[
              "水はしっかり飲む（1日1.5〜2L）",
              "塩分を減らす（汁物を飲み干さない、麺類のスープを残す）",
              "カリウムを含む食材を足す（野菜・果物・海藻・大豆製品）",
              "同じ姿勢を続けない（デスクワークなら1時間に1回立つ）",
            ].map((item) => (
              <div key={item} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="too-much" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲みすぎにも注意が必要
        </h2>
        <div className="space-y-4">
          <p>
            「多く飲むほどいい」ではありません。短時間に大量の水を飲むと、
            <strong>体内のナトリウム濃度が下がりすぎて不調が出ることがあります</strong>
            。頭痛・吐き気・だるさなどが典型で、まれに重い症状につながります。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-2">
            <p className="font-bold text-amber-800 text-sm">気をつけるケース</p>
            {[
              "「1日3L飲む」といった目標を立てて、夜にまとめて飲み干す",
              "長時間の運動や大量発汗のあと、水だけを大量に飲む（塩分も補給する）",
              "もともと腎機能や心機能に不安がある",
            ].map((t) => (
              <p key={t} className="text-sm text-gray-600 flex gap-2"><span className="text-amber-500">・</span>{t}</p>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            基本は「こまめに、少しずつ」。尿の色が薄い黄色であれば足りているサインです。透明すぎる状態が続くなら、飲みすぎかもしれません。体調に不安があるときは医療機関にご相談ください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          無理なく量を増やすコツ
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. タイミングを固定して仕組みにする</p>
              <p>起床後・各食事の前・入浴前後・就寝前。この6〜7回にコップ1杯ずつで約1.4L。<strong>「喉が渇いたら飲む」ではなく「その時間になったら飲む」</strong>に変えるのが最大のコツです。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 常に手の届く場所に置く</p>
              <p>デスクに1Lボトルを置き、「昼までに半分、夕方までに1本」と決めると進み具合が見えます。取りに行く必要がある場所に置くと、それだけで飲まなくなります。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 冷たすぎない温度にする</p>
              <p>キンキンに冷えた水は一度に飲める量が少なくなります。常温か白湯のほうが結果的に総量は増えます。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 味を変えて飽きを防ぐ</p>
              <p>水だけが続かない人は、麦茶・炭酸水・レモンを絞った水などを混ぜてください。無糖であれば何でもかまいません。続かない方法に価値はありません。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          実際に置き換えて変わったこと
        </h2>
        <div className="space-y-4">
          <p>
            減量を始める前、自分は毎日ペットボトルの加糖コーヒーを2本飲んでいました。食事は気をつけているつもりだったのに落ちなかった時期の話です。計算してみたら、
            <strong>それだけで1日300kcal以上</strong>ありました。
          </p>
          <p>
            これを無糖のコーヒーと麦茶に変えました。食事は何も変えていません。それでも1ヶ月で体重が動き始めました。振り返ると、
            <strong>あの時期に一番効いた変更はこれです</strong>
            。我慢した記憶もほとんどありません。
          </p>
          <p>
            もうひとつ実感があるのが、食前の1杯です。減量後半で空腹がつらくなってきた頃、食事の前にコップ1杯飲むようにしたら、同じ量でも満足しやすくなりました。劇的ではありませんが、続けるうえでの差は大きかったです。
          </p>
          <p>
            逆に失敗もあります。「1日3L飲む」と決めて、夕方に足りないぶんを一気に飲んでいた時期があり、そのときは頭痛と気持ち悪さが出ました。
            <strong>合計を守ることより、こまめに分けること</strong>
            のほうが大事だと、そこで理解しました。
          </p>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>飲み水の目安は<strong>1日1.5〜2L</strong>。体重×35mlから逆算してもよい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>タイミングを固定する</strong>。量を数えるより確実に増える</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>甘い飲み物を無糖に置き換える</strong>のが最も簡単なカロリーカット</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>むくみの原因は水ではなく<strong>塩分</strong>。控えるほど悪化する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>短時間の大量摂取は<strong>体調不良の原因になる</strong>。こまめに分ける</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span><strong>食前の1杯</strong>で食べすぎを防ぐ</span></li>
          </ol>
          <p>
            水分補給は、今日から・お金をかけずに・我慢なしで始められる数少ない習慣です。まずは毎日飲んでいる甘い飲み物を1本だけ無糖に変えるところから試してみてください。
          </p>
          <p>
            食事のほうも整えたい場合は、サクメシで自分に必要なカロリーとPFC、1週間分の献立を出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
