import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("bulking-meal-plan", {
  title: "増量期の食事メニュー｜太りすぎない会社員の1週間の献立例 | サクメシ",
  description:
    "増量期は「とにかく食べる」ではなく、維持カロリー＋300kcalで十分です。目標カロリーの出し方、食が細い会社員でも入る1日の型、筋トレ週3回の1週間の献立例、太りすぎていないかの確かめ方まで、数字で具体的にまとめました。",
});

const TOC = [
  { id: "quick", label: "結論：増量期は「＋300kcal」で十分" },
  { id: "who", label: "増量期が向いている人・向いていない人" },
  { id: "numbers", label: "まず数字を決める（モデルケース）" },
  { id: "template", label: "増量期の会社員の1日の型" },
  { id: "eat", label: "増量期に量が食べられない人の工夫" },
  { id: "week", label: "増量期の1週間の献立例（筋トレ週3回）" },
  { id: "check", label: "太りすぎていないかの確かめ方" },
  { id: "backup", label: "自炊できない週の逃げ道" },
  { id: "writer", label: "この記事を書いている人の立場" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

/**
 * The fixed bulking template. kcal / protein are rough values for common
 * portions (check package labels). Meat weights are raw weights.
 */
const DAY_TEMPLATE = [
  {
    when: "朝",
    menu: "オートミール30g＋牛乳200ml、バナナ1本、ゆで卵1個、おにぎり1個",
    kcal: "約570kcal",
    protein: "約21g",
  },
  {
    when: "昼",
    menu: "鶏むね肉（皮なし）200g ※生の重さ（作り置き）＋おにぎり2個",
    kcal: "約570kcal",
    protein: "約52g",
  },
  {
    when: "間食①（15時ごろ）",
    menu: "無糖のギリシャヨーグルト1個＋素焼きアーモンド20g",
    kcal: "約210kcal",
    protein: "約14g",
  },
  {
    when: "間食②（夕方・筋トレ前）",
    menu: "おにぎり1個＋バナナ1本",
    kcal: "約270kcal",
    protein: "約4g",
  },
  {
    when: "夜",
    menu: "ご飯350g、主菜（鶏むね肉100gなど）、野菜の副菜、味噌汁",
    kcal: "約830kcal",
    protein: "約30g",
  },
];

/** What changes from the cutting template in the companion article. */
const DIFF_FROM_CUTTING = [
  { what: "朝", change: "おにぎりを1個足す", kcal: "＋約180kcal" },
  { what: "昼", change: "おにぎりを1個から2個に", kcal: "＋約180kcal" },
  { what: "間食", change: "夕方に「おにぎり＋バナナ」をもう1回", kcal: "＋約270kcal" },
  { what: "夜", change: "ご飯を200g → 350g", kcal: "＋約235kcal" },
  { what: "夜", change: "鶏むね肉を150g → 100gに減らす", kcal: "−約55kcal" },
  { what: "夜", change: "調理の油を少し増やす", kcal: "＋約30kcal" },
];

const WEEK = [
  { day: "月", training: "休み", note: "夜：鶏むね肉100g。自由枠はナッツやチーズで" },
  { day: "火", training: "筋トレ（仕事帰り）", note: "トレ前に間食②、帰宅後すぐに夜ご飯" },
  { day: "水", training: "休み", note: "夜：鮭の塩焼き1切れ＋冷奴" },
  { day: "木", training: "筋トレ（仕事帰り）", note: "夜：豚もも薄切り100gのしゃぶしゃぶ" },
  { day: "金", training: "休み", note: "飲み会。つまみは焼き鳥・刺身・冷奴、〆はおにぎりかお茶漬け", loose: true },
  { day: "土", training: "筋トレ（昼）", note: "昼：外食の定食をご飯大盛りで", loose: true },
  { day: "日", training: "休み", note: "鶏むねの仕込みの日。夜：まぐろの刺身", loose: true },
];

const FAQS = [
  {
    q: "プロテインは飲まないといけませんか？",
    a: "必須ではありません。この記事の型なら、食事だけでタンパク質は約120gとれています。プロテインが役に立つのは、昼に肉を食べられなかった日や、筋トレのあとすぐに食事をとれない日です。足りない日の代わりとして使ってください。",
  },
  {
    q: "食べているつもりなのに体重が増えません",
    a: "まず3日だけ、食べたものを記録してみてください。「食べているつもり」の日ほど、実際は維持カロリーに届いていないことがよくあります。記録しても2週間の平均が増えていなければ、夜のご飯を50g（約80kcal）足します。食べる量を増やしても体重が減り続けるような場合は、医療機関に相談してください。",
  },
  {
    q: "増量を始めてから、お腹ばかり出てきました",
    a: "増えるペースが速すぎる可能性があります。1か月で2kg以上増えているなら、夜のご飯を50〜100g減らしてペースを落としてください。それでもお腹まわりの増え方が気になるなら、いったん増量を区切って減量期に切り替えるのも手です。",
  },
  {
    q: "朝はそんなに食べられません",
    a: "朝のおにぎりを夕方の間食②に回してください。1日の合計が同じなら構いません。それでも入らなければ、朝は牛乳とバナナだけにして、残りを昼と間食に分けます。",
  },
  {
    q: "筋トレをしないで増量してもいいですか？",
    a: "おすすめしません。筋肉を増やすには筋トレによる刺激が必要で、食事だけを増やすと、主に脂肪が増えやすいからです。増量期の食事は、筋トレとセットで考えてください。",
  },
  {
    q: "女性でも同じやり方で大丈夫ですか？",
    a: "考え方は同じで、維持カロリーに＋300kcalです。ただし体格が小さい人は、この記事の型だと量が多すぎます。まず自分の維持カロリーを出し、型の主食の量で合わせてください。",
  },
  {
    q: "増量期はどれくらい続ければいいですか？",
    a: "始める前に期間か目標体重を決めておくことをすすめます。たとえば「3か月で＋3kg前後」のように区切っておくと、太りすぎる前に止められます。区切りが来たら、維持か減量期に移ります。また体重が3kgほど増えたら維持カロリーも上がるので、その時点で目標カロリーを計算し直してください。",
  },
];

export default function BulkingMealPlan() {
  return (
    <ColumnShell slug="bulking-meal-plan" toc={TOC} faqs={FAQS}>
      {/* リード文 */}
      <div className="space-y-4">
        <p>
          増量期の食事というと、「とにかく食べろ」のような極端な話をよく見かけます。ただ、普通の会社員が平日にそれを続けるのは難しいですし、続けられたとしても、筋肉より脂肪のほうが多く増えがちです。
        </p>
        <p>
          この記事では、<strong>太りすぎずに体を大きくする</strong>ことを目標に、増量期の食事を組み立てます。目標カロリーの出し方から、食が細い人でも入る1日の型、筋トレ週3回の1週間の献立例、太りすぎていないかの確かめ方まで、具体的な数字で書きます。
        </p>
        <p className="text-sm text-gray-600">
          減量期の食事は
          <a href="/column/cutting-meal-plan" className="text-green-700 underline hover:no-underline">
            減量期の食事メニュー
          </a>
          にまとめています。この記事の型は、その減量期の型に「足す」形で作っています。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：増量期は「＋300kcal」で十分
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">増量期の食事の3つのルール</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. <strong>維持カロリー＋300kcal</strong>にする。計算上は1か月で約1.2kgのペースで、それ以上は急がない</li>
              <li>2. <strong>増やすのは主食</strong>。この記事の型はタンパク質を先に確保しているので、足りないのはご飯やおにぎりのほう</li>
              <li>3. <strong>2週間ごとに体重の平均を見る</strong>。増えすぎも増えなさすぎも、夜のご飯の量で調整する</li>
            </ol>
          </div>
          <p>
            増量期の失敗は大きく2つあります。<strong>食べすぎて脂肪が増え、そのあとの減量期が長くなる</strong>ことと、<strong>量が入らず体重が増えない</strong>ことです。＋300kcalは控えめに見えますが、その両方を避けやすい量です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="who" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          増量期が向いている人・向いていない人
        </h2>
        <div className="space-y-4">
          <p>
            始める前に、BMI（体重kg ÷ 身長m ÷ 身長m）を出してみてください。日本肥満学会の基準（厚生労働省の健康づくりサポートネットにも掲載）では、BMI 18.5未満が低体重、18.5以上25未満が普通体重、25以上が肥満とされています。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
              <p className="text-sm font-bold text-green-700">向いている人</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・BMIが普通体重の範囲で、体を大きくしたい</li>
                <li>・筋トレをしていて、重量や見た目が伸び悩んでいる</li>
                <li>・痩せ型で、食べてもなかなか体重が増えない</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-2">
              <p className="text-sm font-bold text-amber-800">先に減量期をすすめる人</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・BMIが25に近い、または超えている</li>
                <li>・お腹まわりの脂肪が気になっている</li>
                <li>・筋トレをしていない（主に脂肪が増えやすい）</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            筋肉の多い人はBMIが高めに出ることもあります。ただ、普通の会社員の増量でBMIが25に近づいてきたなら、脂肪が増えている可能性が高いと考えてください。
          </p>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="text-sm text-gray-700">
              <strong className="text-red-700">BMIが18.5未満の人、食べているのに体重が減ってきた人へ</strong><br />
              筋トレ目的の増量より先に、病気が隠れていないか医療機関で確認してください。この記事は、普通体重の人が筋トレと合わせて体を大きくする場合を想定しています。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="numbers" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まず数字を決める（モデルケース）
        </h2>
        <div className="space-y-4">
          <p>
            計算方法の詳細は
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">
              1日の摂取カロリーの目安
            </a>
            に書いたので、ここでは結果だけを使います。この記事では次の人をモデルにします。
          </p>
          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-3">
            <p className="text-sm font-bold text-gray-800">モデル：30歳男性・身長172cm・体重65kg（BMI 約22）・デスクワーク・筋トレ週3回</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・基礎代謝（ハリス・ベネディクト式）＝ <strong>約1,615kcal</strong></li>
              <li>・維持カロリー ＝ 1,615 × 1.55 ＝ <strong>約2,500kcal</strong></li>
              <li>・増量期の目標 ＝ 2,500 ＋ 300 ＝ <strong>約2,800kcal</strong>（1週間で約19,600kcal）</li>
              <li>・タンパク質 ＝ 体重 × 1.6〜2.0g ＝ <strong>約105〜130g</strong></li>
            </ul>
          </div>
          <p>
            ＋300kcalは、計算上は週に約0.27kg、1か月で約1.2kg増えるペースです。サクメシの診断も同じ式・同じ＋300kcalで目標カロリーを出しているので、自分の身長・体重を入れれば、この記事の数字を自分用に置き換えられます。
          </p>
          <p className="text-sm text-gray-600">
            タンパク質の「体重×1.6〜2.0g」は、筋トレをしている人向けの実務的な目安で、厚生労働省の食事摂取基準にある推奨量よりも多めです。考え方は
            <a href="/column/protein-intake" className="text-green-700 underline hover:no-underline">
              タンパク質は1日どれくらい必要？
            </a>
            に書きました。<strong>腎臓に持病がある方は、量について必ず主治医に相談してください。</strong>
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="template" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          増量期の会社員の1日の型
        </h2>
        <div className="space-y-4">
          <p>モデルの2,800kcalに対して、平日はこの型で食べます。食事は1日5回に分けています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">いつ</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食べるもの</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">タンパク質</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {DAY_TEMPLATE.map((row, i) => (
                  <tr key={row.when} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="p-2 border border-green-100 font-medium">{row.when}</td>
                    <td className="p-2 border border-green-100">{row.menu}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.kcal}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">1日の合計（型の部分）</p>
            <p className="text-sm text-gray-700">
              <strong>約2,450kcal</strong>／タンパク質 約120g・脂質 約50g・炭水化物 約375g
            </p>
            <p className="text-sm text-gray-700">
              目標の2,800kcalまで<strong>約350kcalの自由枠</strong>があります。減量期の自由枠は「使わずに残してもいい枠」でしたが、増量期は<strong>使い切る枠</strong>です。ナッツ、チーズ、牛乳など、手軽に足せるものを用意しておくと埋めやすくなります。型の部分だけだと脂質は少なめなので、脂質を含むもので自由枠を埋めると、1日全体のバランスも整います。
            </p>
          </div>
          <p className="text-sm text-gray-600">
            夜のご飯350g（茶碗2杯強）が多いと感じたら、150gを夕方の間食に回して構いません。1日の合計が同じなら、効果は変わりません。
          </p>
          <p className="text-sm text-gray-600">
            ※ カロリーは一般的な量での目安です（夜の調理油・ドレッシング分として約80kcalを含めています）。肉の重さは生の重さです。市販品はパッケージの栄養成分表示で確認してください。
          </p>

          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">減量期の型から変えたところ</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">どこ</th>
                    <th className="text-left p-2 border border-green-100 font-semibold text-green-800">変えたこと</th>
                    <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">カロリー</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {DIFF_FROM_CUTTING.map((row, i) => (
                    <tr key={row.change} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                      <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.what}</td>
                      <td className="p-2 border border-green-100">{row.change}</td>
                      <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.kcal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p>
            足したのは<strong>ほとんどが主食</strong>で、夜の肉はむしろ減らしています。昼の弁当だけでタンパク質を約50gとれているので、肉をさらに増やすより、エネルギー源になるご飯を増やしたほうが目標に近づくからです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="eat" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          増量期に量が食べられない人の工夫
        </h2>
        <div className="space-y-4">
          <p>
            増量期でつまずくのは、たいてい「そんなに入らない」ことです。食が細い人ほど、1回の量を増やすより、次の工夫のほうが効きます。
          </p>
          <div className="space-y-3">
            {[
              {
                title: "回数を増やす",
                desc: "1日3回で2,800kcalだと1回900kcal超えになりますが、5回に分ければ平均560kcal前後です。この記事の型が間食を2回入れているのはそのためです。",
              },
              {
                title: "かさの小さい主食を選ぶ",
                desc: "ご飯やおにぎりは食べ慣れていて量を増やしやすく、もちやパン、ドライフルーツは、かさのわりにエネルギーがとれます。逆に、野菜やきのこ、汁物で先に胃がふくれると、主食が入らなくなります。",
              },
              {
                title: "飲み物で足す",
                desc: "牛乳200mlで約125kcal。食事と一緒にコップ1杯を足すだけでも、1日の合計は変わります。",
              },
              {
                title: "油を少しだけ使う",
                desc: "料理にオリーブオイルを小さじ1かけると約40kcal増えます。かさは増えないので、食が細い人向けです。ただし揚げ物やお菓子で埋めると脂質が多くなりすぎるので、使うのは少しだけにします。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-green-700 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            筋トレの前後に何を食べるかは
            <a href="/column/workout-meal-timing" className="text-green-700 underline hover:no-underline">
              筋トレ前後の食事タイミング
            </a>
            に詳しく書きました。仕事帰りにジムへ行くなら、夕方の間食②がトレーニング前の補給になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="week" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          増量期の1週間の献立例（筋トレ週3回）
        </h2>
        <div className="space-y-4">
          <p>
            火・木の仕事帰りと土曜の昼に筋トレをする1週間です。表にないところは型のままで、<strong>どの日も約2,800kcal</strong>を目指します。夜の主菜や外食でカロリーが変わった分は、自由枠で合わせます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">曜日</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">筋トレ</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">型から変えるところ</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {WEEK.map((row) => (
                  <tr key={row.day} className={row.loose ? "bg-amber-50" : undefined}>
                    <td className="p-2 border border-green-100 text-center font-medium">{row.day}</td>
                    <td className="p-2 border border-green-100 whitespace-nowrap">{row.training}</td>
                    <td className="p-2 border border-green-100">{row.note}</td>
                  </tr>
                ))}
                <tr className="bg-green-50 font-bold text-green-800">
                  <td className="p-2 border border-green-100 text-center">計</td>
                  <td className="p-2 border border-green-100" colSpan={2}>
                    約2,800kcal × 7日 ＝ 約19,600kcal（維持より約2,100kcal多い）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">この1週間の組み方のポイント</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>筋トレしない日も食べる量は同じ</strong>。日によって変えるやり方もありますが、会社員はまず固定したほうが続きます</li>
              <li>・<strong>飲み会は酒で枠を埋めない</strong>。酒の量が増えるほど、つまみや〆のご飯が入らなくなります。つまみは肉・魚・豆腐、〆はおにぎりかお茶漬けにして、夜の型のご飯の代わりにします（飲み方は<a href="/column/alcohol-diet" className="text-green-700 underline hover:no-underline">お酒とダイエットの両立</a>も参考に）</li>
              <li>・<strong>外食は大盛りにしていい</strong>。減量期とは逆に、定食のご飯の大盛りは増量期の味方です</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            夜の主菜の候補（目安・重さは生）：鶏むね肉（皮なし）100g 約105kcal／鮭1切れ（80g）＋冷奴（絹ごし150g）約185kcal／豚もも薄切り（脂身の少ないもの）100g 約140kcal／まぐろ赤身の刺身100g 約110kcal。主菜の差は自由枠で調整してください。
          </p>
          <p className="text-sm text-gray-600">
            鶏むね肉は、昼200g×5日＋夜100g×2日で生1.2kg前後です。仕込みと保存（冷蔵は2〜3日まで、それ以降の分は冷凍）は、
            <a href="/column/cutting-meal-plan#prep" className="text-green-700 underline hover:no-underline">
              減量期の記事の「週末の仕込み」
            </a>
            と同じです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="check" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          太りすぎていないかの確かめ方
        </h2>
        <div className="space-y-4">
          <p>
            増量期は体重が増えるのが正解なので、「増えた」だけでは良いのか悪いのか判断できません。見るのは<strong>増え方の速さ</strong>です。毎朝の体重を2週間ずつ平均し、前の2週間の平均と比べます（計算どおりなら約＋0.5kg）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">前の2週間の平均と比べた変化</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">判断</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">やること</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">＋0.2kg未満</td>
                  <td className="p-2 border border-green-100">足りていない</td>
                  <td className="p-2 border border-green-100">夜のご飯を50g（約80kcal）足す</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">＋0.2〜1kg未満</td>
                  <td className="p-2 border border-green-100">ほぼ計算どおり</td>
                  <td className="p-2 border border-green-100">そのまま続ける</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">＋1kg以上</td>
                  <td className="p-2 border border-green-100">速すぎる</td>
                  <td className="p-2 border border-green-100">夜のご飯を50〜100g減らす</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            ※ 増量を始めた最初の1〜2週間は、食事の量が増えたぶん体内の水分や消化中の食べ物も増えるため、計算より大きく増えて見えることがあります。最初の2週間は判断を急がないでください。
          </p>
          <div className="space-y-3">
            {[
              {
                title: "毎朝測って、2週間の平均で見る",
                desc: "1日の体重は、水分で1kg前後、多い日は2kg近く上下します。毎朝の数字で一喜一憂すると、増量期でも食べる量がぶれます。",
                link: { href: "/column/weight-weekly-average", label: "毎朝の体重に一喜一憂していた話" },
              },
              {
                title: "お腹まわりを週1回測る",
                desc: "朝、へその高さでメジャーを1周させます。体重が増えてもお腹まわりがあまり変わらないなら順調、お腹まわりばかり増えていくなら、増えた分の多くは脂肪だと考えます。",
              },
              {
                title: "月1回、同じ条件で写真を撮る",
                desc: "見た目の変化は、体重ほどすぐには出ません（自分の減量のときは、鏡が変わったのは体重より半年以上あとでした）。同じ場所・同じ時間・同じ服で撮っておくと、比べられます。",
                link: { href: "/column/scale-vs-mirror", label: "運動なしで体重は落ちた。鏡が変わったのは半年以上あとだった" },
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-green-100 p-4 space-y-1">
                <p className="text-sm font-bold text-green-700">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {item.link && (
                  <p className="text-sm">
                    →{" "}
                    <a href={item.link.href} className="text-green-700 underline hover:no-underline">
                      {item.link.label}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
          <p>
            決めておいた期間か体重に届いたら、増量期は終わりです。維持カロリーに戻すか、
            <a href="/column/cutting-meal-plan" className="text-green-700 underline hover:no-underline">
              減量期
            </a>
            に移って、増えた脂肪を落とします。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="backup" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自炊できない週の逃げ道
        </h2>
        <div className="space-y-4">
          <p>
            増量期は、食べる量が減っても体重が増えなくなるだけなので、減量期より崩れたことに気づきにくい時期です。繁忙期で仕込みができない週ほど、1日の合計が維持カロリーまで落ちていることがよくあります。
          </p>
          <p>
            対策は減量期と同じで、<strong>仕込めなかった週の代わりを先に決めておく</strong>ことです。昼はコンビニのサラダチキン＋おにぎり2個、夜は冷凍の宅食を何食かストックしておき、ご飯を足して食べます。宅食はカロリーとタンパク質が表示されているので、足りない分が分かりやすくなります。
          </p>
          <p className="text-sm text-gray-600">
            この記事の下に、サクメシが提携している宅食サービスを載せています（PR）。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="writer" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          この記事を書いている人の立場
        </h2>
        <div className="space-y-4">
          <p>
            先に書いておくと、<strong>自分（運営者）は「増量期」と呼べる期間を設けたことがありません</strong>。この記事の型と1週間の表は、モデルケースに合わせて計算で組んだもので、自分の記録ではありません。
          </p>
          <p>
            代わりに経験があるのは、<strong>意図せず太ったほう</strong>です。就職してから体重が25kg増え、最大92kgになりました。あとから割り戻すと、10年かけて増えたとして1日あたりの食べすぎは約53kcalです（
            <a href="/column/slow-weight-gain" className="text-green-700 underline hover:no-underline">
              25kg増を1日あたりに割ってみた
            </a>
            ）。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              増量期の＋300kcalは、その<strong>約6倍</strong>です。確かめずに1年続ければ、計算上は約14kg増えます（300×365÷7,700）。1日53kcalでも気づかないうちに25kg増えた自分からすると、確かめずに続けるのは怖い数字です。この記事が「たくさん食べる」より「増え方を確かめる」ことに紙幅を割いているのは、そのためです。
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-2">
            <p className="text-sm font-bold text-amber-800">先に断っておくこと</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・型の中で自分が実際にやっているのは、<strong>昼の鶏むね肉の弁当だけ</strong>です（自分の昼はおにぎり1個です）</li>
              <li>・カロリーとタンパク質は一般的な量での目安で、実測ではありません</li>
              <li>・持病がある方、妊娠中・授乳中の方、医師から食事の指示を受けている方は、この型より医師の指示を優先してください</li>
            </ul>
          </div>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>目標は<strong>維持カロリー＋300kcal</strong>。1か月で約1.2kgのペースで十分</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>減量期の型に<strong>主食を足す</strong>。タンパク質は体重×1.6〜2.0gで足りている</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>量が入らない人は<strong>回数を増やし、かさの小さい主食と飲み物</strong>で足す</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>2週間の平均とお腹まわり</strong>で増え方を確かめ、夜のご飯で調整する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>期間か目標体重を決め、届いたら<strong>維持か減量期へ</strong></span></li>
          </ol>
          <p>
            この記事の数字はモデルケースのものです。サクメシなら、目標で「筋肉・体重を増やしたい」を選ぶと、自分の身長・体重・運動量から目標カロリーを計算し、7日分の献立まで無料で作れます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
