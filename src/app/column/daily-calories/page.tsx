import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/daily-calories" },
  title: "1日の摂取カロリーの目安｜自分に必要な数字の出し方 | サクメシ",
  description:
    "「1日1,500kcal」は誰にでも当てはまる数字ではありません。年齢・身長・体重・活動量から自分専用の必要カロリーを計算する手順と、減らしすぎの危険ラインを解説します。",
};

const TOC = [
  { id: "why", label: "「1日1,500kcal」が当てにならない理由" },
  { id: "steps", label: "計算は3ステップで終わる" },
  { id: "example", label: "実際に計算してみる" },
  { id: "table", label: "ざっくり目安表（計算が面倒な人へ）" },
  { id: "floor", label: "減らしすぎの危険ライン" },
  { id: "ng", label: "よくある勘違い" },
  { id: "next", label: "数字を決めたあとにやること" },
  { id: "summary", label: "まとめ" },
];

export default function DailyCalories() {
  return (
    <ColumnShell
      slug="daily-calories"
      h1="1日の摂取カロリーの目安｜自分に必要な数字の出し方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「ダイエット中は1日1,500kcal」——よく見る数字ですが、これは<strong>誰かにとっての正解であって、あなたの正解ではありません</strong>。</p>
        <p>
          身長160cmの40代女性と、身長180cmで週3回運動する20代男性では、必要なカロリーが1,000kcal以上違います。同じ数字を目指したら、片方は痩せず、片方は栄養不足になります。
        </p>
        <p>この記事では、<strong>自分に必要なカロリーを自分で出す方法</strong>を、電卓ひとつでできる形にして解説します。</p>
      </div>

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
              { title: "年齢", desc: "年齢とともに基礎代謝は下がる。20代と50代では同じ体格でも200kcal前後違うことがある。" },
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
              <li>・減量目標 ＝ 1,616 − 500 ＝ <strong>約1,116kcal</strong> → 下限を下回るので後述の<strong>1,200kcal</strong>に引き上げ</li>
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
            同じ「ダイエット中」でも、目標カロリーが<strong>1,200kcal と 2,037kcal</strong>。800kcal以上の差があります。世の中の「1日1,500kcal」がいかに乱暴な数字か分かると思います。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">なぜ −500kcal なのか</strong><br />
              体脂肪1kgを減らすには約7,700kcalの赤字が必要です。1日500kcalの赤字なら、7日で3,500kcal＝<strong>週あたり約0.45kg</strong>のペース。これが続けやすさと確実さのバランスが取れた標準的な設定です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ざっくり目安表（計算が面倒な人へ）
        </h2>
        <div className="space-y-4">
          <p>「運動はほぼしない・30代」を前提にした、減量時の目標カロリーのざっくり目安です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体格</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">維持カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">減量時の目安</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">女性・150cm台／50kg前後</td>
                  <td className="p-2 border border-green-100 text-center">約1,500kcal</td>
                  <td className="p-2 border border-green-100 text-center">1,200〜1,300kcal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">女性・160cm台／60kg前後</td>
                  <td className="p-2 border border-green-100 text-center">約1,650kcal</td>
                  <td className="p-2 border border-green-100 text-center">1,200〜1,400kcal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">男性・170cm台／70kg前後</td>
                  <td className="p-2 border border-green-100 text-center">約2,000kcal</td>
                  <td className="p-2 border border-green-100 text-center">1,500〜1,600kcal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">男性・170cm台／85kg前後</td>
                  <td className="p-2 border border-green-100 text-center">約2,250kcal</td>
                  <td className="p-2 border border-green-100 text-center">1,700〜1,800kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            あくまで目安です。運動習慣がある人はこれより多くなります。正確に出したいなら、上の式に自分の数字を入れてください。
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
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある勘違い
        </h2>
        <div className="space-y-3">
          {[
            { habit: "計算結果は1kcal単位で正しい", desc: "推定式なので誤差は当然あります。2週間の体重推移を見て、減らなければ100〜200kcal下げる、という運用で十分。数字は出発点であってゴールではない。" },
            { habit: "運動した分を全部食べていい", desc: "アプリやウォッチの消費カロリー表示は多めに出がち。「運動したから追加で食べる」は赤字を消しやすい典型パターン。" },
            { habit: "カロリーさえ守れば中身は何でもいい", desc: "同じ1,500kcalでも、タンパク質が足りないと筋肉が落ちる。カロリーは枠、PFCは中身。両方いる。" },
            { habit: "毎日ぴったり守らないと意味がない", desc: "見るべきは週の合計。飲み会の日に超えても、他の日で調整すれば流れは変わらない。" },
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
        <h2 id="next" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          数字を決めたあとにやること
        </h2>
        <div className="space-y-4">
          <p>カロリーが決まっても、それだけでは献立になりません。次にやることは2つです。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">① PFCに割り振る</p>
              <p className="text-sm text-gray-600">
                タンパク質・脂質・炭水化物の配分を決める。タンパク質は体重1kgあたり1.2〜1.6gを目安に確保するのが優先。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>手順は<strong>BMR → ×活動係数 → −500kcal</strong>の3ステップ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>1,200kcalは下回らない</strong>。割り込むなら赤字を緩めるか活動量を上げる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>数字は出発点。<strong>2週間の体重推移を見て微調整</strong>する運用が現実的</span></li>
          </ol>
          <p>
            自分の数字が分かったら、あとはそれを毎日の食事に変えるだけです。サクメシなら計算から献立まで無料でまとめて作れるので、まずは自分の数字を見てみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
