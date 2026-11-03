import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import ColumnFigure from "@/components/column/ColumnFigure";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("cheat-day", {
  title: "チートデイは意味ある？頻度・量・翌日の体重増の正体と戻し方 | サクメシ",
  description:
    "チートデイに意味はあるのかを冷静に整理。1回で1週間の赤字がどれだけ消えるかの計算、頻度と量の目安、何を食べるか、翌日に体重が1〜2kg増える理由と戻し方まで解説します。",
});

const TOC = [
  { id: "quick", label: "結論：チートデイは「やらなくていい」人が多い" },
  { id: "what", label: "チートデイとは？ご褒美の日との違い" },
  { id: "evidence", label: "チートデイに意味はある？分かっていること・いないこと" },
  { id: "math", label: "1回のチートデイで1週間の赤字はどれだけ消える？" },
  { id: "weight", label: "翌日に体重が1〜2kg増えるのはなぜ？" },
  { id: "who", label: "チートデイが向いている人・向かない人" },
  { id: "how", label: "チートデイのやり方：頻度・量・タイミングの目安" },
  { id: "food", label: "チートデイに何を食べる？増やすもの・控えるもの" },
  { id: "after", label: "チートデイ翌日からの戻し方" },
  { id: "ng", label: "よくある失敗" },
  { id: "break", label: "迷ったらダイエットブレイク" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

/**
 * Weekly deficit with and without a cheat day.
 * Assumes maintenance 2,200kcal and a 1,700kcal target (-500kcal/day). 1kg of body fat ≈ 7,700kcal.
 */
const WEEK_TABLE = [
  { label: "チートデイなし", day: "1,700kcal", week: "3,500kcal", fat: "約0.45kg" },
  { label: "ルールどおり（維持＋500kcal）", day: "2,700kcal", week: "2,500kcal", fat: "約0.32kg" },
  { label: "食べ放題（5,000kcal）", day: "5,000kcal", week: "200kcal", fat: "約0.03kg" },
];

const WEIGHT_REASONS = [
  {
    title: "食べたもの・飲んだものの重さ",
    desc: "いつもより多く食べた分は、消化されて出ていくまで体の中にあります。量が多い日ほど、翌朝の体重に乗ります。",
  },
  {
    title: "糖質と一緒に蓄えられる水分",
    desc: "糖質は筋肉や肝臓にグリコーゲンとして蓄えられ、そのとき水も一緒に抱え込みます。減量中で空いていた貯蔵庫が埋まるので、水分ごと体重が増えます。",
  },
  {
    title: "塩分による水分の溜め込み",
    desc: "外食やお菓子は塩分も多め。体は塩分濃度を保とうとして水を溜めるので、むくみとして体重に出ます。",
  },
];

const NG_LIST = [
  {
    title: "「何を食べてもいい日」にする",
    desc: "上の計算のとおり、5,000kcal食べれば1週間の赤字はほぼ消えます。チートデイの量は「維持カロリー＋500kcalまで」が上限です。",
  },
  {
    title: "週1回の恒例行事にする",
    desc: "毎週やると、毎週の赤字が削られ続けます。頻度は2週間〜1ヶ月に1回まで。週1回の楽しみがほしいなら、いつもの予算の中に好きなものを組み込むほうが確実です。",
  },
  {
    title: "揚げ物やケーキで量を稼ぐ",
    desc: "脂質の多い食べ物は少量でカロリーが大きく、満足する前に上限を超えます。増やすのは主食（糖質）が基本です。",
  },
  {
    title: "翌日に絶食して取り返す",
    desc: "増えた体重のほとんどは水分と食べ物の重さで、取り返すほど体脂肪は増えていません。絶食すると空腹の反動で、次の食べすぎを招きやすくなります。",
  },
  {
    title: "1日で終わらず、そのまま連休になる",
    desc: "「昨日食べたし、今日もいいか」が一番多い失敗です。チートデイは1日だけ。翌朝からいつもの食事に戻すことを先に決めておきます。",
  },
];

const FAQS = [
  {
    q: "チートデイは本当に意味がある？",
    a: "長く減量を続けて体重が止まった人が、気持ちの区切りとして使う分には意味があります。ただ、1日多く食べるだけで代謝が上がり、その後よく痩せるようになるとまでは言い切れません。研究もまだ少なく、効果ははっきりしていません。まだ減量を始めたばかりの人や、順調に落ちている人には必要ありません。",
  },
  {
    q: "チートデイの頻度はどれくらい？",
    a: "2週間〜1ヶ月に1回までが目安です。週1回にすると、毎週の赤字がその分削られ続けます。減量を始めて1〜2ヶ月は、そもそも入れる必要はありません。",
  },
  {
    q: "チートデイは何キロカロリーまで食べていい？",
    a: "維持カロリー（今の体重を保つカロリー）から＋500kcalまでが上限の目安です。維持カロリーが2,200kcalの人なら、2,700kcalまでです。自分の維持カロリーは「1日の摂取カロリーの目安」の記事で計算できます。",
  },
  {
    q: "チートデイの翌日、体重が2kg増えたのは太ったから？",
    a: "ほとんどは水分と、まだ消化されていない食べ物の重さです。維持カロリー＋500kcal食べた日に増える体脂肪は、計算上は約0.06kgです。いつもの食事に戻せば3〜4日で戻ることが多いので、翌日の数字で判断しないでください。",
  },
  {
    q: "チートデイの翌日はどうすればいい？",
    a: "いつもどおりの食事に戻すだけです。絶食や極端な食事制限は必要ありません。水分をふだんどおり摂り、塩分の多いものを控えると、むくみが引きやすくなります。判断は翌日の体重ではなく、1週間の平均体重で行います。",
  },
  {
    q: "チートデイに何を食べればいい？",
    a: "増やすのはごはん・餅・うどん・パン・和菓子・果物など、糖質中心のものです。揚げ物・ピザ・ケーキ・スナック菓子のように脂質が多いものは、少量でカロリーが大きくなるので量を稼ぐのには向きません。タンパク質はいつもの量を保ちます。",
  },
  {
    q: "チートデイを入れたら、そのまま止まらなくなった。どうすればいい？",
    a: "チートデイが合わないタイプかもしれません。その場合は無理に入れず、1〜2週間まるごと維持カロリーに戻す「ダイエットブレイク」か、毎日の予算の中に好きなものを少しずつ組み込むやり方のほうが向いています。",
  },
];

/**
 * Weekly deficit bars, scaled 440px = 3,500kcal (x starts at 20).
 * Maintenance 2,200kcal, target 1,700kcal (-500kcal/day), 1kg body fat = 7,700kcal. Values from WEEK_TABLE.
 */
function WeeklyDeficitDiagram() {
  return (
    <svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="20" y="28" fontSize="16" fill="#374151">1週間の赤字（長いほど体脂肪が減る）</text>
      <line x1="20" y1="44" x2="20" y2="316" stroke="#9CA3AF" strokeWidth="2" />

      <text x="32" y="70" fontSize="18" fontWeight="bold" fill="#374151">チートデイなし</text>
      <text x="620" y="70" textAnchor="end" fontSize="16" fill="#374151">体脂肪 約0.45kg</text>
      <rect x="20" y="82" width="440" height="40" fill="#4CAF50" />
      <text x="472" y="109" fontSize="18" fontWeight="bold" fill="#2E7D32">3,500kcal</text>

      <text x="32" y="165" fontSize="18" fontWeight="bold" fill="#374151">ルールどおり（維持＋500kcal）</text>
      <text x="620" y="165" textAnchor="end" fontSize="16" fill="#374151">体脂肪 約0.32kg</text>
      <rect x="20" y="177" width="314" height="40" fill="#4CAF50" />
      <text x="346" y="204" fontSize="18" fontWeight="bold" fill="#2E7D32">2,500kcal</text>

      <text x="32" y="260" fontSize="18" fontWeight="bold" fill="#F57C00">食べ放題（5,000kcal）</text>
      <text x="620" y="260" textAnchor="end" fontSize="16" fill="#374151">体脂肪 約0.03kg</text>
      <rect x="20" y="272" width="25" height="40" fill="#F57C00" />
      <text x="57" y="299" fontSize="18" fontWeight="bold" fill="#F57C00">200kcal ← ほぼ帳消し</text>
    </svg>
  );
}

/**
 * Concept image of next-morning weight gain (+1-2kg). Only the fat figure (~0.06kg = 500/7,700) is from the text;
 * the three non-fat blocks are drawn equal on purpose because the article gives no ratio.
 */
function NextMorningWeightDiagram() {
  return (
    <svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="40" y="36" fontSize="20" fontWeight="bold" fill="#374151">翌朝の体重 ＋1〜2kg の中身</text>

      <rect x="40" y="56" width="200" height="74" rx="6" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="2" />
      <text x="140" y="99" textAnchor="middle" fontSize="16" fill="#374151">食べたものの重さ</text>
      <rect x="40" y="133" width="200" height="74" rx="6" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="2" />
      <text x="140" y="176" textAnchor="middle" fontSize="16" fill="#374151">糖質と蓄える水分</text>
      <rect x="40" y="210" width="200" height="74" rx="6" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="2" />
      <text x="140" y="253" textAnchor="middle" fontSize="16" fill="#374151">塩分で溜まる水分</text>
      <rect x="40" y="290" width="200" height="6" fill="#F57C00" />

      <path d="M248 56 L256 56 L256 284 L248 284" fill="none" stroke="#2E7D32" strokeWidth="2" />
      <text x="276" y="150" fontSize="18" fontWeight="bold" fill="#2E7D32">体脂肪ではない</text>
      <text x="276" y="180" fontSize="16" fill="#374151">いつもの食事に戻せば</text>
      <text x="276" y="204" fontSize="16" fill="#374151">3〜4日で戻ることが多い</text>

      <line x1="244" y1="293" x2="272" y2="293" stroke="#F57C00" strokeWidth="2" />
      <text x="280" y="299" fontSize="18" fontWeight="bold" fill="#F57C00">体脂肪は 約0.06kg だけ</text>
      <text x="280" y="324" fontSize="16" fill="#374151">（維持＋500kcal食べた日）</text>
    </svg>
  );
}

export default function CheatDay() {
  return (
    <ColumnShell
      slug="cheat-day"
      h1="チートデイは意味ある？頻度・量・翌日の体重増の正体と戻し方"
      toc={TOC}
      faqs={FAQS}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>
          「停滞期にはチートデイを入れるといい」「食べたほうが代謝が上がる」——減量を続けていると、一度は耳にする話です。
        </p>
        <p>
          ただ、やってみたら翌朝の体重が2kg増えて焦った、1日のつもりが3日続いた、という話もよく聞きます。
        </p>
        <p>
          この記事では、チートデイ1回で1週間の赤字がどれだけ消えるのかを数字で確かめたうえで、やるならどのくらいの頻度・量にするか、翌日の体重増をどう扱うかをまとめます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：チートデイは「やらなくていい」人が多い
        </h2>
        <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>チートデイで代謝が上がり、その後よく痩せるようになるとまでは<strong>言い切れない</strong>。期待できるのは主に気持ちの区切り</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>やるなら<strong>2週間〜1ヶ月に1回、維持カロリー＋500kcalまで</strong>。増やすのは糖質</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>「食べ放題」にすると、<strong>1週間分の赤字がほぼ消える</strong></span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>翌日の体重が1〜2kg増えても<strong>ほとんどは水分</strong>。いつもの食事に戻せば3〜4日で戻ることが多い</span></li>
          </ul>
          <p className="text-sm text-gray-700">
            数字で確かめたい人は<a href="#math" className="text-green-700 underline hover:no-underline">1週間の赤字の計算</a>、翌日の体重に焦っている人は<a href="#weight" className="text-green-700 underline hover:no-underline">体重が増える理由</a>からどうぞ。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイとは？ご褒美の日との違い
        </h2>
        <div className="space-y-4">
          <p>
            チートデイは、減量中に<strong>あらかじめ決めた日だけ、意図的に多く食べる</strong>方法です。「cheat（ズルをする）」から来た呼び名で、ボディビルなど、体脂肪をかなり絞る人たちの間でよく使われてきました。
          </p>
          <p>
            狙いとしてよく言われるのは、カロリーの赤字が続いて省エネ気味になった体に「食べ物は足りている」と伝え、停滞を抜けるきっかけにすることです。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">チートデイ</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・日にちを先に決めておく</li>
                <li>・量に上限がある（維持＋500kcalまで）</li>
                <li>・増やすのは主に糖質</li>
                <li>・翌日からいつもの食事に戻す</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">ただのご褒美の日</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・食べたくなった日に決める</li>
                <li>・量は気が済むまで</li>
                <li>・揚げ物・スイーツ・お酒が中心</li>
                <li>・翌日もなんとなく続く</li>
              </ul>
            </div>
          </div>
          <p>
            右側に当てはまるなら、名前はチートデイでも中身は食べすぎです。
            <strong>「計画して、上限を決めて、1日で終える」</strong>
            の3つがそろって、はじめてチートデイと呼べます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="evidence" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイに意味はある？分かっていること・いないこと
        </h2>
        <div className="space-y-4">
          <p>チートデイが効くという話には、確かな部分と、まだはっきりしない部分が混ざっています。</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">◎ 分かっていること</p>
              <p className="text-sm text-gray-600">
                減量が長く続くと、体重が減った分、消費カロリーも少しずつ下がり、同じ食事でも落ちにくくなります。満腹を伝えるホルモン（レプチン）が減り、お腹が空きやすくなることも知られています。
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-bold text-amber-800 text-sm mb-1">△ 分かっていないこと</p>
              <p className="text-sm text-gray-600">
                「1日だけ多く食べれば、それらが元に戻って、その後の減量が進むのか」。ここは研究がまだ少なく、
                <strong>チートデイで代謝が上がって痩せる、と言い切れる段階ではありません</strong>。
              </p>
            </div>
          </div>
          <p>
            一方で、我慢が続いて限界が近いときに「この日は食べていい」と決めておくと、気持ちが持ち直す人もいます。
            <strong>体の仕組みというより、減量を続けるための息抜き</strong>
            と考えておくと、期待外れになりません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="math" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1回のチートデイで1週間の赤字はどれだけ消える？
        </h2>
        <div className="space-y-4">
          <p>
            維持カロリーが2,200kcalの人が、毎日1,700kcal（1日500kcalの赤字）で減量しているとします。1週間の赤字は3,500kcalです。このうち1日をチートデイにすると、どうなるかを計算しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-800">
                  <th className="text-left p-2 border border-green-200">1週間の過ごし方</th>
                  <th className="text-left p-2 border border-green-200">チートデイの摂取</th>
                  <th className="text-left p-2 border border-green-200">1週間の赤字</th>
                  <th className="text-left p-2 border border-green-200">体脂肪の目安</th>
                </tr>
              </thead>
              <tbody>
                {WEEK_TABLE.map((row) => (
                  <tr key={row.label} className="bg-white">
                    <td className="p-2 border border-green-100 font-bold text-gray-800">{row.label}</td>
                    <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">{row.day}</td>
                    <td className="p-2 border border-green-100 text-gray-600 whitespace-nowrap">{row.week}</td>
                    <td className="p-2 border border-green-100 font-bold text-green-700 whitespace-nowrap">{row.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            ※ 体脂肪1kg＝約7,700kcalで計算した目安です。ルールどおりの場合は、6日間の赤字3,000kcalからチートデイの黒字500kcalを引いて2,500kcal。食べ放題の場合は、黒字2,800kcalを引いて200kcalです。
          </p>
          <ColumnFigure
            caption="食べ放題にすると、6日間の赤字がほぼ帳消しになる"
            alt="1週間の赤字を比べた横棒グラフ。チートデイなしは3,500kcalで体脂肪約0.45kg、ルールどおり（維持＋500kcal）は2,500kcalで約0.32kg、食べ放題（5,000kcal）は200kcalで約0.03kgとなり、赤字がほぼ帳消しになる。"
            note="維持2,200kcal・1日500kcalの赤字で減量している場合の計算"
          >
            <WeeklyDeficitDiagram />
          </ColumnFigure>
          <p>
            ルールどおりなら、1週間の赤字は3割ほど減るだけで、減量はちゃんと前に進みます。ところが
            <strong>「今日は何でもいい日」にして5,000kcal食べると、6日間の我慢がほぼ帳消し</strong>
            になります。
          </p>
          <p>
            朝から菓子パン、昼にラーメンと餃子、夜にピザ（Mサイズ1枚）、デザートにケーキを2つ……と重ねていけば、5,000kcalは1日で届いてしまう数字です。チートデイで大事なのは「食べること」より
            <strong>「上限を決めておくこと」</strong>
            です。自分の維持カロリーは
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">1日の摂取カロリーの目安</a>
            で計算できます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="weight" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          翌日に体重が1〜2kg増えるのはなぜ？
        </h2>
        <div className="space-y-4">
          <p>
            チートデイの翌朝、体重計に乗ると1〜2kg増えていることがよくあります。でも、維持カロリー＋500kcal食べた日に増える体脂肪は、計算上
            <strong>約0.06kg（500÷7,700）</strong>
            です。食べ放題で5,000kcal食べた日でも約0.36kgで、1kgには届きません。
          </p>
          <p>残りの増えた分は、主にこの3つです。</p>
          <div className="space-y-2">
            {WEIGHT_REASONS.map((item, i) => (
              <div key={item.title} className="flex gap-3 bg-white rounded-xl p-4 border border-green-100">
                <span className="text-sm font-bold text-green-700 shrink-0">{i + 1}.</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ColumnFigure
            caption="翌朝の体重増のほとんどは、体脂肪ではない"
            alt="翌朝に1〜2kg増えた体重の中身のイメージ図。大部分は食べたものの重さ、糖質と一緒に蓄えられる水分、塩分で溜まる水分で、いつもの食事に戻せば3〜4日で戻ることが多い。体脂肪は維持＋500kcal食べた日で約0.06kgとごく一部。"
            note="イメージ図。体脂肪以外の内訳の大きさは人によって違います"
          >
            <NextMorningWeightDiagram />
          </ColumnFigure>
          <p>
            どれも体脂肪ではないので、いつもの食事に戻せば3〜4日で抜けていくことが多いです。塩分と水分の関係は
            <a href="/column/salt-swelling" className="text-green-700 underline hover:no-underline">体重が一晩で2kg増えた｜むくみと塩分の関係</a>
            で詳しく解説しています。
          </p>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 翌朝の数字を見て慌てて絶食すると、空腹の反動で次の食べすぎにつながりやすくなります。判断は1日の数字ではなく、
            <a href="/column/weight-weekly-average" className="underline hover:no-underline">1週間の平均体重</a>
            で前の週と比べてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="who" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイが向いている人・向かない人
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">向いている人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・2〜3ヶ月以上、食事管理を続けている</li>
                <li>・ある程度体脂肪が落ちて、減りが鈍ってきた</li>
                <li>・ふだんの摂取カロリーを把握できている</li>
                <li>・体重が順調に落ちたあと、止まっている</li>
                <li>・決めた量で食べるのをやめられる</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">向かない人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・減量を始めて1〜2ヶ月以内</li>
                <li>・体重がまだ順調に落ちている</li>
                <li>・ふだんの摂取カロリーが分からない</li>
                <li>・食べ始めると止まらなくなるタイプ</li>
                <li>・過食の傾向がある</li>
              </ul>
            </div>
          </div>
          <p>
            始めたばかりで順調に落ちているなら、チートデイを入れる理由はありません。
            <strong>体重が止まったら、まず停滞期かどうかを確かめるのが先</strong>
            です。見分け方は
            <a href="/column/diet-plateau" className="text-green-700 underline hover:no-underline">停滞期の乗り越え方</a>
            にまとめています。
          </p>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 糖尿病などで治療中の方、妊娠中・授乳中の方、摂食障害の既往がある方は、自己判断で食事量を大きく変えず、主治医に相談してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイのやり方：頻度・量・タイミングの目安
        </h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">項目</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">目安</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">頻度</td>
                  <td className="p-2 border border-green-100">2週間〜1ヶ月に1回まで。減量の最初の1〜2ヶ月は入れない</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">量</td>
                  <td className="p-2 border border-green-100">維持カロリー〜＋500kcalまで（維持2,200kcalの人なら2,700kcalまで）</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">中身</td>
                  <td className="p-2 border border-green-100">増やすのは糖質。タンパク質はいつもどおり、脂質は増やしすぎない</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">日にち</td>
                  <td className="p-2 border border-green-100">前もって決める。会食などの予定がある日に合わせてもよい（その場合も上限は同じ。揚げ物とお酒で枠を使い切らないように）</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">長さ</td>
                  <td className="p-2 border border-green-100">1日だけ。翌朝からいつもの食事に戻す</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 pt-2">
            <div>
              <p className="font-bold text-gray-800 mb-1">上限は「＋500kcal」で考える</p>
              <p>
                ＋500kcalは、ごはん茶碗1杯（150g）が約230kcalなので、
                <strong>維持カロリーの食事に茶碗2杯ぶん足すくらい</strong>
                です。思っているより控えめに感じるかもしれませんが、減量中の1,700kcalから見れば1,000kcal増えています。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">予定のある日に合わせると、ムダがない</p>
              <p>
                誕生日や会食など、どうせ食べる日をチートデイにしてしまうのも手です。別の日に改めて入れる必要がなくなります。お酒が入る日の選び方は
                <a href="/column/alcohol-diet" className="text-green-700 underline hover:no-underline">お酒とダイエットの両立</a>
                を参考にしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="food" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイに何を食べる？増やすもの・控えるもの
        </h2>
        <div className="space-y-4">
          <p>
            同じ＋500kcalでも、何で増やすかで満足感がまったく違います。基本は
            <strong>「主食を増やして、脂質は増やしすぎない」</strong>
            です。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">⭕ 増やすもの（糖質中心）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ごはんのおかわり、おにぎり</li>
                <li>・餅、うどん、そば</li>
                <li>・パン（菓子パンより食パン・ベーグル）</li>
                <li>・大福・団子などの和菓子</li>
                <li>・バナナなどの果物</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 量を稼ぐのに向かないもの（脂質が多い）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・揚げ物（唐揚げ・とんかつ・フライドポテト）</li>
                <li>・ピザ、こってり系ラーメン</li>
                <li>・生クリームのケーキ、ドーナツ</li>
                <li>・ポテトチップスなどのスナック菓子</li>
              </ul>
            </div>
          </div>
          <p>
            脂質は1gあたり約9kcalで、糖質（約4kcal）の倍以上です。揚げ物やケーキで増やすと、
            <strong>少し食べただけで上限を超えてしまいます</strong>
            。どうしても食べたいものがあるなら、それを1品だけ決めて、残りは主食で増やすとまとまります。
          </p>
          <p className="text-sm text-gray-500">
            タンパク質はいつもの量を保ってください。増やす枠を主食に回すのは、
            <a href="/column/pfc-calculation" className="text-green-700 underline hover:no-underline">PFCバランス</a>
            のうち糖質（C）だけを一時的に上げるイメージです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="after" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイ翌日からの戻し方
        </h2>
        <div className="space-y-4">
          <p>チートデイは、翌日の過ごし方で結果が決まります。やることは4つだけです。</p>
          <div className="space-y-2">
            {[
              { step: "翌朝", task: "いつもどおりの食事に戻す", why: "絶食も、極端に減らすことも不要。いつもの1日に戻すのがいちばん早い" },
              { step: "翌日", task: "水分はふだんどおり、塩分は控えめに", why: "水を減らしても体重は戻らない。塩辛い外食やスナックを避けると、むくみが引きやすい" },
              { step: "2〜4日", task: "体重が戻るのを待つ", why: "増えた分のほとんどは水分と食べ物の重さ。3〜4日で戻ることが多い" },
              { step: "1週間後", task: "週平均の体重で判断する", why: "前の週の平均と比べる。ルールどおりなら、1週間の赤字は残っている" },
            ].map((w) => (
              <div key={w.step} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs bg-green-600 text-white font-bold px-2 py-1 rounded whitespace-nowrap">{w.step}</span>
                  <p className="text-sm font-bold text-gray-800">{w.task}</p>
                </div>
                <p className="text-xs text-gray-500">{w.why}</p>
              </div>
            ))}
          </div>
          <p>
            食べた翌日は食欲が残りやすいので、朝からタンパク質と野菜をしっかり摂っておくと落ち着きます。空腹との付き合い方は
            <a href="/column/appetite-control" className="text-green-700 underline hover:no-underline">食欲・空腹を抑える方法</a>
            も参考にしてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある失敗
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {NG_LIST.map((item, i) => (
              <div key={item.title} className="flex gap-3 bg-white rounded-xl p-4 border border-green-100">
                <span className="text-sm font-bold text-red-600 shrink-0">{i + 1}.</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            とくに5つ目の「連休化」は、減量が終わったあとのリバウンドと同じ形です。リバウンドを防ぐ考え方は
            <a href="/column/no-rebound" className="text-green-700 underline hover:no-underline">リバウンドしない食習慣</a>
            にまとめています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="break" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          迷ったらダイエットブレイク
        </h2>
        <div className="space-y-4">
          <p>
            チートデイが不安な人、1日で止められる自信がない人には、
            <strong>ダイエットブレイク</strong>
            のほうが向いています。1日だけ多く食べるのではなく、
            <strong>1〜2週間まるごと維持カロリーに戻す</strong>
            方法です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800"></th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">チートデイ</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ダイエットブレイク</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">期間</td>
                  <td className="p-2 border border-green-100">1日</td>
                  <td className="p-2 border border-green-100">1〜2週間</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">食べる量</td>
                  <td className="p-2 border border-green-100">維持〜＋500kcal</td>
                  <td className="p-2 border border-green-100">維持カロリーちょうど</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">食べすぎのリスク</td>
                  <td className="p-2 border border-green-100">1日で暴走しやすい</td>
                  <td className="p-2 border border-green-100">低い</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">注意点</td>
                  <td className="p-2 border border-green-100">翌日に戻せるかがすべて</td>
                  <td className="p-2 border border-green-100">終わる日を先に決めておく</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            減量が長期化している人ほど、「2ヶ月減量して、2週間は維持カロリーに戻す」を繰り返すほうが続けやすくなります。やり方の詳細は
            <a href="/column/diet-plateau" className="text-green-700 underline hover:no-underline">停滞期の乗り越え方</a>
            の「ダイエットブレイクという選択肢」で解説しています。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>チートデイで痩せやすくなるとは<strong>言い切れない</strong>。期待できるのは主に気持ちの区切り</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>やるなら<strong>2週間〜1ヶ月に1回、維持カロリー＋500kcalまで</strong>。増やすのは糖質</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>食べ放題にすると<strong>1週間分の赤字がほぼ消える</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>翌日の体重増は<strong>ほとんど水分</strong>。絶食せず、いつもの食事に戻す</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>結果は<strong>1週間の平均体重</strong>で判断する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>止められる自信がなければ<strong>ダイエットブレイク</strong>を選ぶ</span></li>
          </ol>
          <p>
            チートデイの上限を決めるには、まず自分の維持カロリーと、ふだんの目標カロリーを知っておく必要があります。
          </p>
          <p>
            サクメシなら、体格と目標から1日のカロリーとPFCを計算して、7日分の献立まで作れます。チートデイ明けに「いつもの食事」へ戻すときの基準としても使ってください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
