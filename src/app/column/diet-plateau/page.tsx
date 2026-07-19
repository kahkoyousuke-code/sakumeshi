import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "停滞期の乗り越え方｜体重が落ちなくなったらやるべきこと | サクメシ",
  description:
    "ダイエットの停滞期はなぜ起きるのか、いつまで続くのかを解説。やってはいけないNG行動と、チートデイの正しいやり方も紹介します。",
};

const TOC = [
  { id: "what", label: "停滞期はなぜ起きる？" },
  { id: "check", label: "それ、本当に停滞期？【チェックリスト】" },
  { id: "ng", label: "停滞期にやってはいけないこと" },
  { id: "actions", label: "停滞期を抜けるための5つの対処法" },
  { id: "cheatday", label: "チートデイの正しいやり方" },
  { id: "summary", label: "まとめ" },
];

export default function DietPlateau() {
  return (
    <ColumnShell
      slug="diet-plateau"
      h1="停滞期の乗り越え方｜体重が落ちなくなったらやるべきこと"
      toc={TOC}
      ctaLabel="サクメシで食事プランを見直す →"
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「順調に落ちてた体重が、ピタッと止まった…」</p>
        <p>
          ダイエットを続けていると、ほぼ必ず訪れるのが<strong>停滞期</strong>です。ここで多くの人が「もう痩せないんだ」と挫折します。僕も92kgからの減量中、2回大きな停滞期を経験しました。
        </p>
        <p>
          でも先に結論を言うと、<strong>停滞期は「順調に痩せている証拠」</strong>です。仕組みを知っていれば、焦らず淡々と乗り越えられます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          停滞期はなぜ起きる？
        </h2>
        <div className="space-y-4">
          <p>
            主な原因は<strong>体の防衛反応（ホメオスタシス）</strong>です。体重が減り続けると、体は「飢餓状態かもしれない」と判断して省エネモードに入ります。
          </p>
          <div className="space-y-2">
            {[
              { title: "基礎代謝の低下", desc: "体重が減った分、そもそも消費カロリーは減る。さらに省エネモードで代謝が抑えられる。" },
              { title: "食欲ホルモンの変化", desc: "レプチン（満腹ホルモン）が減り、グレリン（空腹ホルモン）が増える。空腹を感じやすくなる。" },
              { title: "水分・グリコーゲンの変動", desc: "糖質を摂ると体内に水分が保持され、脂肪が減っていても体重の数字は動かないことがある。" },
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
            タイミングの目安は<strong>体重の約5%が減った頃</strong>。70kgの人なら3.5kg減あたりで来ることが多く、期間は2週間〜1ヶ月程度が一般的です。つまり停滞期が来た＝それだけ順調に減ってきた証拠なんです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="check" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          それ、本当に停滞期？【チェックリスト】
        </h2>
        <div className="space-y-4">
          <p>「停滞期だと思ってたら、単に食べすぎていた」はあるあるです。まず以下を確認してください。</p>
          <div className="space-y-3">
            {[
              { q: "体重が2週間以上、まったく動いていない？", a: "1週間程度の足踏みは誤差の範囲。水分・便通・むくみで1〜2kgは普通に変動します。" },
              { q: "摂取カロリーが増えていない？", a: "慣れてくると調味料・間食・味見が増えがち。3日だけ食べたものを全部記録すると発見があります。" },
              { q: "「痩せた自分」の消費カロリーで計算し直した？", a: "体重が5kg減ったら必要カロリーも減ります。開始時の目標カロリーのままでは、いつか釣り合ってしまいます。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">☑️ {item.q}</p>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <p>3つすべて YES なら、本物の停滞期です。次の対処法に進みましょう。</p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          停滞期にやってはいけないこと
        </h2>
        <div className="space-y-3">
          {[
            { habit: "さらにカロリーを減らす", desc: "省エネモードの体をさらに飢餓に追い込むと、代謝がもっと下がる悪循環に。停滞期の追いカロリーカットは逆効果。" },
            { habit: "毎日体重計に一喜一憂する", desc: "停滞期の体重は本当に動かない。数字を見てストレスを溜めるくらいなら、週1回の測定に切り替えるのもアリ。" },
            { habit: "ヤケ食い・ダイエット中断", desc: "「どうせ痩せないし」で食べると、省エネモードの体は効率よく脂肪を溜める。一番もったいないパターン。" },
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
        <h2 id="actions" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          停滞期を抜けるための5つの対処法
        </h2>
        <div className="space-y-5">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 何も変えずに続ける（最有力）</p>
              <p>
                拍子抜けするかもしれませんが、これが一番の正解。停滞期は<strong>待てば必ず抜けます</strong>。体が新しい体重に慣れれば、また落ち始めます。「体が調整中なんだな」と割り切って淡々と続けましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 目標カロリーを再計算する</p>
              <p>
                開始時から体重が5kg以上減っているなら、今の体重で計算し直しましょう。サクメシでもう一度プランを作り直すのが手っ取り早いです。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 体重以外の指標を見る</p>
              <p>
                ウエスト・体脂肪率・見た目の写真。体重が止まっていても、体は変わり続けていることが多い。<strong>特にウエストのサイズは正直</strong>です。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 睡眠とストレスを整える</p>
              <p>
                寝不足とストレスはホルモンバランスを乱し、停滞を長引かせます。ダイエットの見直しと同じくらい、生活の見直しが効きます。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">5. チートデイを入れる（上級者向け）</p>
              <p>正しくやれば省エネモードの解除に役立ちます。ただしやり方を間違えると単なる食べすぎに。次で詳しく解説します。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="cheatday" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          チートデイの正しいやり方
        </h2>
        <div className="space-y-4">
          <p>
            チートデイとは、<strong>意図的に多く食べて「飢餓じゃないよ」と体に教える日</strong>のこと。レプチンを回復させて省エネモードを解除するのが目的です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">項目</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ルール</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">頻度</td>
                  <td className="p-2 border border-green-100">2週間〜1ヶ月に1回まで。「週1のご褒美」はチートデイではなくただの食べすぎ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">量</td>
                  <td className="p-2 border border-green-100">維持カロリー〜+500kcal程度。「無制限に食べていい日」ではない</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">中身</td>
                  <td className="p-2 border border-green-100">糖質中心に増やす（ごはん・餅・和菓子など）。脂質の爆食いは脂肪に直行しやすい</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">翌日</td>
                  <td className="p-2 border border-green-100">体重が1〜2kg増えるが、ほぼ水分。3〜4日で戻るので慌てて絶食しない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ チートデイが向いているのは、体脂肪率がある程度低く、食事管理がきっちりできている人。<strong>「食べたい言い訳」になりそうなら、やらないほうが確実に痩せます。</strong>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>停滞期は順調に痩せている証拠</strong>（体重の5%減あたりで来る）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>まず「本当に停滞期か」をチェック</strong>（隠れカロリー・目標の再計算）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>基本は「変えずに待つ」</strong>。追いカロリーカットは逆効果</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>チートデイは月1〜2回・糖質中心</strong>で計画的に</span></li>
          </ol>
          <p>
            体重が減ったら目標カロリーも変わります。停滞期を感じたら、サクメシで今の体重をもとにプランを作り直してみてください。「痩せた後の自分」に合った食事量にアップデートできます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
