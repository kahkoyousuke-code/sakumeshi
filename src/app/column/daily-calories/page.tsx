import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("daily-calories", {
  title: "1日の摂取カロリーの目安｜年代別の早見表と自分の数字の出し方 | サクメシ",
  description:
    "「1日1,500kcal」は誰にでも当てはまる数字ではありません。年代・体格別の早見表と、ハリス・ベネディクト式で自分専用の必要カロリーを出す3ステップ、減らしすぎの危険ラインを解説します。",
});

const TOC = [
  { id: "quick", label: "結論：先に数字だけ知りたい人へ" },
  { id: "why", label: "「1日1,500kcal」が当てにならない理由" },
  { id: "steps", label: "計算は3ステップで終わる" },
  { id: "example", label: "実際に計算してみる" },
  { id: "table", label: "年代別・体格別の早見表" },
  { id: "women", label: "女性は「−500kcal」が使えないことが多い" },
  { id: "floor", label: "減らしすぎの危険ライン" },
  { id: "experience", label: "92kgの頃に計算して分かったこと" },
  { id: "adjust", label: "2週間ごとの微調整のしかた" },
  { id: "ng", label: "よくある勘違い" },
  { id: "faq", label: "よくある質問" },
  { id: "next", label: "数字を決めたあとにやること" },
  { id: "summary", label: "まとめ" },
];

/** Ages used for each decade column in the reference tables. */
const AGE_COLUMNS = ["20代", "30代", "40代", "50代"];

/**
 * Maintenance calories (TDEE) computed from the Harris-Benedict equation in
 * this article, activity factor 1.2, at ages 25 / 35 / 45 / 55, rounded to 10.
 */
const FEMALE_TABLE = [
  { body: "150cm / 50kg", values: ["1,520", "1,470", "1,420", "1,360"] },
  { body: "155cm / 55kg", values: ["1,590", "1,540", "1,490", "1,440"] },
  { body: "160cm / 55kg", values: ["1,610", "1,560", "1,510", "1,460"] },
  { body: "160cm / 60kg", values: ["1,670", "1,620", "1,560", "1,510"] },
  { body: "165cm / 65kg", values: ["1,740", "1,690", "1,640", "1,590"] },
];

const MALE_TABLE = [
  { body: "165cm / 60kg", values: ["1,850", "1,780", "1,710", "1,650"] },
  { body: "170cm / 70kg", values: ["2,040", "1,970", "1,900", "1,840"] },
  { body: "175cm / 75kg", values: ["2,150", "2,080", "2,010", "1,950"] },
  { body: "175cm / 85kg", values: ["2,310", "2,240", "2,170", "2,110"] },
  { body: "180cm / 80kg", values: ["2,260", "2,190", "2,120", "2,050"] },
];

const FAQS = [
  {
    q: "計算した数字と、アプリで出た数字が違います",
    a: "使っている計算式が違うためです。ハリス・ベネディクト式、国立健康・栄養研究所の式など複数あり、同じ体格でも数百kcalの差が出ます。どれが正解かを探すより、ひとつ選んで固定し、2週間ごとの体重の動きで補正するほうが実用的です。",
  },
  {
    q: "1日の摂取カロリーは、毎日ぴったり守らないと意味がない？",
    a: "1日単位ではなく1週間の合計で見てください。体脂肪1kgは約7,700kcalなので、1日の数百kcalのズレが体脂肪に直結することはありません。飲み会で超えた分を翌日から数日かけてならせば、週の赤字は保てます。",
  },
  {
    q: "運動した分は食べ足してもいいですか？",
    a: "全部は足さないほうが安全です。ウォッチやアプリの消費カロリー表示は多めに出る傾向があり、表示どおり食べ足すと赤字が消えます。どうしても足すなら表示の半分までにしてください。",
  },
  {
    q: "計算結果が1,200kcalを下回りました",
    a: "その数字では設定しないでください。赤字を−300kcal程度に緩めるか、歩数や活動量を増やして維持カロリー側を引き上げます。1,200kcalを切ると必要な栄養素が食事だけでは満たしにくくなり、筋肉も削られます。",
  },
  {
    q: "体重が減ったら計算し直す必要はありますか？",
    a: "あります。体重が下がれば基礎代謝も維持カロリーも下がります。目安として体重が3〜5kg動いたら、または1ヶ月に1回は計算をやり直してください。開始時の数字のまま続けると、いつか赤字が消えて停滞します。",
  },
  {
    q: "活動係数はどれを選べばいいか分かりません",
    a: "迷ったら低いほうです。人は自分の活動量を多めに見積もる傾向があり、高い係数を選ぶと「計算どおり食べているのに減らない」状態になります。低めで始めて、減りすぎたら上げるほうが調整しやすいです。",
  },
  {
    q: "カロリーだけ守れば中身は何でもいいですか？",
    a: "カロリーは枠、PFC（タンパク質・脂質・炭水化物）は中身です。同じ1,500kcalでもタンパク質が足りないと筋肉が落ち、維持カロリーがさらに下がります。枠が決まったら次はPFCに割り振ってください。",
  },
];

export default function DailyCalories() {
  return (
    <ColumnShell
      slug="daily-calories"
      h1="1日の摂取カロリーの目安｜自分に必要な数字の出し方"
      toc={TOC}
      faqs={FAQS}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「ダイエット中は1日1,500kcal」——よく見る数字ですが、これは<strong>誰かにとっての正解であって、あなたの正解ではありません</strong>。</p>
        <p>
          身長160cmの40代女性と、身長180cmで週3回運動する20代男性では、必要なカロリーが1,000kcal以上違います。同じ数字を目指したら、片方は痩せず、片方は栄養不足になります。
        </p>
        <p>この記事では、<strong>自分に必要なカロリーを自分で出す方法</strong>を、電卓ひとつでできる形にして解説します。急ぐ方は次の結論だけ読んでください。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：先に数字だけ知りたい人へ
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">減量中の1日の摂取カロリーの目安</p>
            <p className="text-sm text-gray-700">
              <strong>維持カロリー −300〜500kcal</strong>（ただし1,200kcalは下回らない）
            </p>
            <p className="text-sm text-gray-700">
              維持カロリーがまだ分からない人向けのざっくり値：デスクワーク中心なら
              <strong>体重1kgあたり25〜30kcal</strong>
              が維持カロリーの目安です。体重60kgなら約1,500〜1,800kcal、体重80kgなら約2,000〜2,400kcal。
            </p>
          </div>
          <p className="text-sm text-gray-600">
            この「25〜30kcal」は、後述の計算式に一般的な体格を入れて割り戻した幅です。あくまで出発点なので、
            <a href="#table" className="text-green-700 underline hover:no-underline">年代別の早見表</a>
            か
            <a href="#steps" className="text-green-700 underline hover:no-underline">3ステップの計算</a>
            で自分の数字に置き換えてください。年齢と活動量で200〜500kcalは簡単に変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「1日1,500kcal」が当てにならない理由
        </h2>
        <div className="space-y-4">
          <p>必要カロリーは、次の5つでほぼ決まります。</p>
          <div className="space-y-2">
            {[
              { title: "体重", desc: "体が大きいほど、じっとしていても消費するエネルギーは多い。ここが最も影響が大きい。" },
              { title: "身長", desc: "同じ体重でも背が高いほど体表面積が広く、消費が増える。" },
              { title: "年齢", desc: "年齢とともに基礎代謝は下がる。20代と50代では同じ体格でも150〜200kcal違う（後述の早見表で実際の差が見られます）。" },
              { title: "性別", desc: "平均すると男性のほうが筋肉量が多く、基礎代謝が高い。" },
              { title: "活動量", desc: "デスクワーク中心か、立ち仕事か、週に何回運動するか。ここで最大3割変わる。" },
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
            つまり、<strong>雑誌やSNSで見た数字をそのまま使うのは、他人の靴を履くようなもの</strong>です。大きすぎれば脱げるし、小さすぎれば足を痛めます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="steps" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          計算は3ステップで終わる
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "基礎代謝（BMR）を出す", desc: "1日じっと寝ていても消費するエネルギー。体温維持や内臓の活動に使われる分で、総消費の6〜7割を占める。" },
            { n: "2", title: "活動量をかけて消費カロリー（TDEE）にする", desc: "BMR に活動係数をかけると、生活込みで1日に消費する総カロリーが出る。これが「維持カロリー」。" },
            { n: "3", title: "目標に応じて増減させる", desc: "痩せたいなら TDEE から引く、増やしたいなら足す。この最後の引き算がダイエットの本体。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}. {item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm font-bold text-gray-700">BMR の計算式（ハリス・ベネディクト式）</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
            <div>
              <p className="text-sm font-bold text-green-700 mb-1">男性</p>
              <p className="text-sm text-gray-600">88.36 ＋（13.40 × 体重kg）＋（4.80 × 身長cm）−（5.68 × 年齢）</p>
            </div>
            <div>
              <p className="text-sm font-bold text-green-700 mb-1">女性</p>
              <p className="text-sm text-gray-600">447.59 ＋（9.25 × 体重kg）＋（3.10 × 身長cm）−（4.33 × 年齢）</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            サクメシの診断も、この記事とまったく同じ式で計算しています。記事の数字とサービスの数字がずれないようにするためです。
          </p>

          <p className="text-sm font-bold text-gray-700">活動係数（BMR にかける数字）</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">運動の頻度</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">係数</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">こんな人</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">ほぼ運動しない</td>
                  <td className="p-2 border border-green-100 text-center">1.2</td>
                  <td className="p-2 border border-green-100">デスクワーク中心・通勤も座りがち</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">週1〜2回</td>
                  <td className="p-2 border border-green-100 text-center">1.375</td>
                  <td className="p-2 border border-green-100">たまにジム・週末に運動する</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">週3回以上</td>
                  <td className="p-2 border border-green-100 text-center">1.55</td>
                  <td className="p-2 border border-green-100">習慣的にトレーニング・立ち仕事</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            迷ったら<strong>低めを選ぶ</strong>のが安全です。人は自分の活動量を多めに見積もりがちで、高い係数を選ぶと「食べていいはずなのに減らない」状態になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="example" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          実際に計算してみる
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-3">
            <p className="text-sm font-bold text-gray-800">例1：35歳女性・身長160cm・体重60kg・ほぼ運動しない</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・BMR ＝ 447.59 ＋（9.25×60）＋（3.10×160）−（4.33×35） ＝ <strong>約1,347kcal</strong></li>
              <li>・TDEE ＝ 1,347 × 1.2 ＝ <strong>約1,616kcal</strong>（この量なら体重は変わらない）</li>
              <li>・−500kcal だと 1,116kcal で下限割れ → <strong>−300kcal の 約1,316kcal</strong> に設定</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-3">
            <p className="text-sm font-bold text-gray-800">例2：28歳男性・身長175cm・体重80kg・週1〜2回運動</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・BMR ＝ 88.36 ＋（13.40×80）＋（4.80×175）−（5.68×28） ＝ <strong>約1,841kcal</strong></li>
              <li>・TDEE ＝ 1,841 × 1.375 ＝ <strong>約2,531kcal</strong></li>
              <li>・減量目標 ＝ 2,531 − 500 ＝ <strong>約2,031kcal</strong></li>
            </ul>
          </div>

          <p>
            同じ「ダイエット中」でも、目標カロリーが<strong>1,316kcal と 2,031kcal</strong>。700kcal以上の差があります。世の中の「1日1,500kcal」がいかに乱暴な数字か分かると思います。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">なぜ −500kcal なのか</strong><br />
              体脂肪1kgを減らすには約7,700kcalの赤字が必要です。1日500kcalの赤字なら、7日で3,500kcal＝<strong>週あたり約0.45kg</strong>のペース。これが続けやすさと確実さのバランスが取れた標準的な設定です。−300kcalなら週あたり約0.27kg、1ヶ月で約1.2kgのペースになります。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          年代別・体格別の早見表
        </h2>
        <div className="space-y-6">
          <p>
            計算が面倒な人向けに、上の式をそのまま使って<strong>維持カロリー</strong>を計算した表を用意しました。いずれも活動係数1.2（ほぼ運動しない）の値です。減量目標はここから300〜500kcal引いてください。
          </p>

          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">女性・維持カロリー（運動習慣なし）</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体格</th>
                    {AGE_COLUMNS.map((age) => (
                      <th key={age} className="text-center p-2 border border-green-100 font-semibold text-green-800">{age}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {FEMALE_TABLE.map((row, i) => (
                    <tr key={row.body} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                      <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.body}</td>
                      {row.values.map((v, j) => (
                        <td key={AGE_COLUMNS[j]} className="p-2 border border-green-100 text-center whitespace-nowrap">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700 mb-2">男性・維持カロリー（運動習慣なし）</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体格</th>
                    {AGE_COLUMNS.map((age) => (
                      <th key={age} className="text-center p-2 border border-green-100 font-semibold text-green-800">{age}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {MALE_TABLE.map((row, i) => (
                    <tr key={row.body} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                      <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.body}</td>
                      {row.values.map((v, j) => (
                        <td key={AGE_COLUMNS[j]} className="p-2 border border-green-100 text-center whitespace-nowrap">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">この表から読み取れること</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>年代が1つ上がるごとに約50kcal下がる</strong>。20代と50代では同じ体格でも150〜200kcalの差。</li>
              <li>・体重が10kg違うと<strong>150kcal前後</strong>変わる。痩せるほど維持カロリーも下がっていく。</li>
              <li>・週1〜2回運動する人は、表の値を<strong>1.15倍</strong>（1.375÷1.2）してください。週3回以上なら<strong>1.3倍</strong>です。</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            ※ 推定式による目安です。同じ体格でも筋肉量によって実際の代謝は変わります。表の値から始めて、体重の動きで補正してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="women" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          女性は「−500kcal」が使えないことが多い
        </h2>
        <div className="space-y-4">
          <p>
            上の女性の表をもう一度見てください。維持カロリーは1,360〜1,740kcalの範囲です。ここから定番の−500kcalを引くと、<strong>860〜1,240kcal</strong>。
            <strong>ほぼ全部が下限の1,200kcalを割り込みます</strong>。
          </p>
          <p>
            「−500kcal」はネット上でいちばんよく見る設定ですが、体格の大きい男性を念頭に置いた数字です。女性がそのまま使うと、最初から続かない設定になります。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">女性におすすめの組み立て方</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・赤字は<strong>−300kcal</strong>から始める（週あたり約0.27kg、1ヶ月で約1.2kgのペース）</li>
              <li>・足りない赤字は<strong>活動量で作る</strong>。1日の歩数を+3,000歩増やすほうが、食事を100kcal削るより続きます</li>
              <li>・それでも1,200kcalを割るなら、<strong>減量ペースのほうを落とす</strong>。期間を延ばすのが正解です</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            運動を増やすのがハードルなら、
            <a href="/column/no-exercise-diet" className="text-green-700 underline hover:no-underline">
              運動なしで痩せる食事の組み立て方
            </a>
            も参考にしてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="floor" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          減らしすぎの危険ライン
        </h2>
        <div className="space-y-4">
          <p>
            計算結果が低く出ても、<strong>1日1,200kcalを下回る設定はしない</strong>のが基本です。理由は「つらいから」ではなく、実際に不利になるからです。
          </p>
          <div className="space-y-3">
            {[
              { habit: "必要な栄養素が物理的に入らない", desc: "1,200kcalを切ると、タンパク質・鉄・カルシウムなどを食事だけで満たすのがかなり難しくなる。" },
              { habit: "筋肉が削れて代謝が落ちる", desc: "極端な赤字では脂肪だけでなく筋肉も分解される。筋肉が減ると維持カロリーも下がり、後で痩せにくくなる。" },
              { habit: "反動の食欲が強くなる", desc: "強い制限のあとの過食はほぼ生理的な反応。意志の問題ではないので、我慢で対抗しても勝てない。" },
              { habit: "続かないので結局リバウンドする", desc: "3日で挫折する1,000kcalより、3ヶ月続く1,600kcalのほうが最終的に減る。" },
            ].map((item) => (
              <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100">
                <p className="font-bold text-red-700 text-sm mb-1">⚠️ {item.habit}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            計算上の目標が1,200kcalを割り込む場合は、<strong>赤字を−300kcal程度に緩めるか、活動量を増やして分母を上げる</strong>ほうが現実的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          92kgの頃に計算して分かったこと
        </h2>
        <div className="space-y-4">
          <p>
            自分（173cm）が92kgあった頃、この計算を初めてやりました。デスクワーク中心なので活動係数は1.2。出てきた維持カロリーは
            <strong>約2,350kcal</strong>
            でした。
          </p>
          <p>
            当時の食事を書き出して積み上げると、1日あたり
            <strong>2,400〜2,900kcal</strong>
            。飲んだ日は2,900kcal前後でした（
            <a href="/column/eating-out-92kg" className="text-green-700 underline hover:no-underline">
              92kgの頃に食べていたものを書き出した記事
            </a>
            に内訳があります）。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              つまり<strong>維持カロリーちょうど〜少し上</strong>を毎日食べていたわけです。暴食していた自覚はまったくありませんでしたが、数字にすると「増えも減りもしない量」をきれいに維持していました。92kgで止まっていたのは意志の弱さではなく、単に計算どおりでした。
            </p>
          </div>
          <p>
            もうひとつ、あとから効いてきたのが<strong>維持カロリーは痩せると下がる</strong>という点です。同じ173cm・同じ年齢で計算すると、92kgのときの維持カロリーが約2,350kcal、78kgになった今は
            <strong>約2,120kcal</strong>
            。14kg落とした結果、1日あたり約230kcal分の余裕が消えています。
          </p>
          <p>
            これを知らずに「最初に決めた数字」を守り続けると、ある時点から必ず止まります。自分も一度そこで止まり、原因が分からず食事を減らしすぎて反動の過食に振れました。
            <strong>体重が動いたら計算もやり直す</strong>
            。これだけで防げます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="adjust" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          2週間ごとの微調整のしかた
        </h2>
        <div className="space-y-4">
          <p>
            計算で出した数字は推定なので、最初から当たっているとは限りません。<strong>2週間の体重の動きを見て補正する</strong>のが現実的な運用です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">2週間の体重変化</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">やること</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">−0.5〜−1.0kg</td>
                  <td className="p-2 border border-green-100">ちょうどいいペース。数字は変えない</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">ほぼ変わらない</td>
                  <td className="p-2 border border-green-100">目標を100〜200kcal下げる。または活動量を増やす</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">−1.5kg以上</td>
                  <td className="p-2 border border-green-100">速すぎ。100〜200kcal戻す。筋肉が落ちている可能性が高い</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">増えた</td>
                  <td className="p-2 border border-green-100">記録の漏れを疑う。3日だけ調味料・飲み物まで全部書き出す</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            比べるのは<strong>毎朝の体重そのものではなく、1週間の平均値どうし</strong>です。体重は水分と食事内容で1〜2kg簡単に動くので、日々の増減を見ても判断できません。詳しくは
            <a href="/column/weight-weekly-average" className="text-green-700 underline hover:no-underline">
              体重を週平均で見る話
            </a>
            にまとめています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある勘違い
        </h2>
        <div className="space-y-3">
          {[
            { habit: "計算結果は1kcal単位で正しい", desc: "推定式なので誤差は当然あります。2週間の体重推移を見て、減らなければ100〜200kcal下げる、という運用で十分。数字は出発点であってゴールではない。" },
            { habit: "運動した分を全部食べていい", desc: "アプリやウォッチの消費カロリー表示は多めに出がち。「運動したから追加で食べる」は赤字を消しやすい典型パターン。" },
            { habit: "カロリーさえ守れば中身は何でもいい", desc: "同じ1,500kcalでも、タンパク質が足りないと筋肉が落ちる。カロリーは枠、PFCは中身。両方いる。" },
            { habit: "毎日ぴったり守らないと意味がない", desc: "見るべきは週の合計。飲み会の日に超えても、他の日で調整すれば流れは変わらない。" },
            { habit: "基礎代謝ぶんだけ食べれば安全", desc: "基礎代謝は「寝たきりの消費量」なので、それを目標カロリーにすると赤字が大きくなりすぎる。基準にするのは基礎代謝ではなく維持カロリー（TDEE）。" },
          ].map((item) => (
            <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="font-bold text-red-700 text-sm mb-1">❌ {item.habit}</p>
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
        <h2 id="next" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          数字を決めたあとにやること
        </h2>
        <div className="space-y-4">
          <p>カロリーが決まっても、それだけでは献立になりません。次にやることは2つです。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">① PFCに割り振る</p>
              <p className="text-sm text-gray-600">
                タンパク質・脂質・炭水化物の配分を決める。タンパク質は体重1kgあたり1.2〜1.6gを目安に確保するのが優先。手順は
                <a href="/column/pfc-calculation" className="text-green-700 underline hover:no-underline">
                  PFCバランスの計算方法
                </a>
                にまとめています。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">② 具体的な献立に落とす</p>
              <p className="text-sm text-gray-600">
                ここが一番の関門。毎食カロリーを調べて組み立てるのは、まず続きません。仕組みで解決するのが正解。
              </p>
            </div>
          </div>
          <p>
            サクメシは、この記事の計算をそのまま自動でやります。年齢・身長・体重・活動量・目標を答えるだけで、BMR・TDEE・目標カロリー・PFCを計算し、<strong>その数字に沿った7日分の献立まで一気に作ります</strong>。電卓を叩く必要はありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>必要カロリーは<strong>体重・身長・年齢・性別・活動量</strong>で決まる。共通の正解はない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>手順は<strong>BMR → ×活動係数 → −300〜500kcal</strong>の3ステップ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>1,200kcalは下回らない</strong>。女性は−500だとほぼ割り込むので、−300から始める</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>数字は出発点。<strong>2週間の体重平均を比べて微調整</strong>する運用が現実的</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>痩せると維持カロリーも下がる。<strong>体重が3〜5kg動いたら計算し直す</strong></span></li>
          </ol>
          <p>
            自分の数字が分かったら、あとはそれを毎日の食事に変えるだけです。サクメシなら計算から献立まで無料でまとめて作れるので、まずは自分の数字を見てみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
