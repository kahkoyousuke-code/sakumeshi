import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "運動なしで痩せる？食事だけダイエットの現実的なやり方 | サクメシ",
  description:
    "運動なしでも体重は落とせます。食事だけで痩せる仕組みと具体的な進め方、運動なしゆえのデメリットと対策を、実体験ベースで分かりやすく解説します。",
};

const TOC = [
  { id: "answer", label: "結論：運動なしでも痩せられる" },
  { id: "why", label: "なぜ運動より食事のほうが効くのか" },
  { id: "how", label: "食事だけダイエットの進め方4ステップ" },
  { id: "risk", label: "運動なしゆえのデメリットと対策" },
  { id: "neat", label: "「運動」しなくても消費を増やす方法" },
  { id: "summary", label: "まとめ" },
];

export default function NoExerciseDiet() {
  return (
    <ColumnShell
      slug="no-exercise-diet"
      h1="運動なしで痩せる？食事だけダイエットの現実的なやり方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「ジムに行く時間がない」「運動が続いたためしがない」——それでも痩せたい人は多いはずです。</p>
        <p>
          結論から言うと、<strong>運動なしでも体重は落とせます</strong>。むしろ体重を減らすという一点だけを見れば、食事のほうが圧倒的に効率がいい。ただし、運動をしないぶん<strong>気をつけるべきポイントがはっきりある</strong>のも事実です。
        </p>
        <p>この記事では、食事だけで痩せる仕組みと現実的な進め方、そして落とし穴を解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="answer" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：運動なしでも痩せられる
        </h2>
        <div className="space-y-4">
          <p>
            体重が減るかどうかを決めるのは<strong>摂取カロリーと消費カロリーの差</strong>だけです。運動は消費を増やす手段のひとつにすぎず、必須条件ではありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">やること</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">約300kcal</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">かかる労力</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">ランニング</td>
                  <td className="p-2 border border-green-100 text-center">約30〜40分</td>
                  <td className="p-2 border border-green-100">着替え・移動込みで1時間、疲労も残る</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">食事を調整</td>
                  <td className="p-2 border border-green-100 text-center">菓子パン1個ぶん</td>
                  <td className="p-2 border border-green-100">買わない、それだけ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            30分走って稼げるのは、菓子パン1個ぶん程度。<strong>「運動しているから食べていい」が最も太る考え方</strong>である理由がここにあります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜ運動より食事のほうが効くのか
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "運動の消費カロリーは思ったより小さい", desc: "1日の消費のうち運動が占める割合はごくわずか。大部分は基礎代謝と日常動作で、意識的な運動はおまけに近い。" },
              { title: "食事は毎日3回、確実に発生する", desc: "運動は「やらない日」があるが、食事は必ず毎日ある。1食あたり100kcal変えるだけで1日300kcalの差になる。" },
              { title: "運動後は食欲が増えやすい", desc: "運動したご褒美として食べる量が増え、結果的に差し引きゼロになるケースは非常に多い。" },
              { title: "時間もお金もかからない", desc: "続かない最大の理由は時間。食事の調整はゼロ分で始められて、コンビニでも実行できる。" },
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
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食事だけダイエットの進め方4ステップ
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "目標カロリーを決める", desc: "消費カロリーから200〜400kcal引いた値を目安にする。減らしすぎると筋肉が落ちて代謝が下がり、反動のドカ食いも起きる。月2kg以内のペースが現実的。" },
            { n: "2", title: "タンパク質を先に確保する", desc: "運動しないぶん筋肉は落ちやすい。体重1kgあたり1.2〜1.6gを目安に、毎食タンパク源を入れるところから組み立てる。" },
            { n: "3", title: "削るのは脂質と間食から", desc: "揚げ物・菓子パン・加糖飲料・お酒。この4つを減らすだけで、たいていの人は目標カロリーに収まる。主食を極端に抜く必要はない。" },
            { n: "4", title: "週単位で調整する", desc: "1日単位の体重は水分で1〜2kg動く。判断は週平均で。落ちていなければ食事を見直し、落ちすぎなら少し戻す。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}. {item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="risk" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          運動なしゆえのデメリットと対策
        </h2>
        <div className="space-y-4">
          <p>「痩せられる」のと「理想の見た目になる」は別問題です。ここは正直に押さえておきましょう。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">起きやすいこと</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・筋肉も一緒に落ちて代謝が下がる</li>
                <li>・体重は減ったのにたるんで見える</li>
                <li>・停滞期に打つ手が少ない</li>
                <li>・戻したときにリバウンドしやすい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">対策</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・タンパク質を多めに確保する</li>
                <li>・減量ペースを緩やかにする</li>
                <li>・日常動作で消費を増やす</li>
                <li>・自重トレを週2回だけ入れる</li>
              </ul>
            </div>
          </div>
          <p>
            とはいえ、<strong>まずは体重を落とすことに集中していい</strong>と思います。10kg落ちてから見た目を整えるほうが、最初から全部やろうとして挫折するよりずっと早い。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="neat" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「運動」しなくても消費を増やす方法
        </h2>
        <div className="space-y-4">
          <p>ジムに行かなくても、日常動作の積み上げ（NEAT）は意外と大きな差になります。</p>
          <div className="space-y-3">
            {[
              { from: "エレベーター", to: "階段", point: "1日数回でも積み重なる。運動と認識しなくていいのが強み" },
              { from: "最寄り駅で降りる", to: "ひと駅前で降りる", point: "10〜15分の歩行が自動的に生活へ組み込まれる" },
              { from: "座りっぱなし", to: "1時間に1回立つ", point: "消費だけでなく、むくみや午後の眠気の対策にもなる" },
              { from: "車で買い物", to: "歩いて買い物", point: "移動そのものを運動にすると、続ける意志力が要らない" },
            ].map((item) => (
              <div key={item.from} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-gray-500">{item.from}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-green-700">{item.to}</span>
                </p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p>
            ポイントは<strong>「運動の時間を作る」のではなく「今ある行動を置き換える」</strong>こと。新しい習慣を増やすより挫折しにくくなります。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>運動なしでも痩せられる</strong>。体重を決めるのはカロリー収支</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>運動で稼げる消費は小さい。<strong>食事のほうが確実で再現性が高い</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>運動しないぶん<strong>タンパク質を多めに、ペースは緩やかに</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>階段・徒歩など<strong>日常動作の置き換え</strong>でジムなしでも消費は増やせる</span></li>
          </ol>
          <p>
            食事だけで進めるなら、目標カロリーとPFCの設計が結果を左右します。サクメシは質問に答えるだけで、あなたの体格と目標に合わせた7日分の食事プランを自動で作れます。運動する時間がなくても始められます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
