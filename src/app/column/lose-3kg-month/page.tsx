import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/lose-3kg-month" },
  title: "1ヶ月で3kg痩せるには？必要な数字と現実的なペース | サクメシ",
  description:
    "1ヶ月3kg減に必要な赤字カロリーを計算し、あなたの体重で無理のないペースかを判定します。安全な上限の考え方と、間に合わないときの現実的な選択肢も解説。",
};

const TOC = [
  { id: "math", label: "3kg減に必要なカロリーを計算する" },
  { id: "safe", label: "あなたの体重で3kgは妥当か" },
  { id: "first", label: "最初の1〜2kgは脂肪ではない" },
  { id: "how", label: "1ヶ月の進め方（週別）" },
  { id: "menu", label: "赤字を作る具体的な引き算" },
  { id: "ng", label: "やってはいけない詰め方" },
  { id: "notenough", label: "間に合わないと分かったら" },
  { id: "summary", label: "まとめ" },
];

export default function Lose3kgMonth() {
  return (
    <ColumnShell
      slug="lose-3kg-month"
      h1="1ヶ月で3kg痩せるには？必要な数字と現実的なペース"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>結婚式、同窓会、健康診断。「1ヶ月で3kg」という目標には、たいてい期限があります。</p>
        <p>
          結論から言うと、<strong>できるかどうかは今の体重で決まります</strong>。85kgの人には十分現実的で、50kgの人にはかなり無理があります。同じ3kgでも意味がまるで違うからです。
        </p>
        <p>この記事では、必要な数字を実際に計算して、自分にとって妥当なペースかを判定できるようにします。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="math" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          3kg減に必要なカロリーを計算する
        </h2>
        <div className="space-y-4">
          <p>体脂肪1kgを減らすには、およそ<strong>7,700kcal</strong>の赤字が必要です。ここから逆算します。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm text-gray-700">7,700kcal × 3kg ＝ <strong className="text-green-700">23,100kcal</strong></p>
            <p className="text-sm text-gray-700">23,100kcal ÷ 30日 ＝ <strong className="text-green-700">1日あたり約770kcalの赤字</strong></p>
          </div>
          <p>
            この「770kcal」がすべてです。維持カロリーが2,200kcalの人なら、1日1,430kcalで過ごす計算になります。
          </p>
          <p>
            ちなみに標準的なダイエットの設定は<strong>1日−500kcal</strong>（週約0.45kg減）。3kg/月はその<strong>1.5倍以上のペース</strong>ということになります。楽な目標ではありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">1日の赤字</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1ヶ月の減量</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">難易度</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">−300kcal</td>
                  <td className="p-2 border border-green-100 text-center">約1.2kg</td>
                  <td className="p-2 border border-green-100">ほぼ無理なく続く</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">−500kcal</td>
                  <td className="p-2 border border-green-100 text-center">約1.9kg</td>
                  <td className="p-2 border border-green-100">標準。長期戦向き</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">−770kcal</td>
                  <td className="p-2 border border-green-100 text-center">約3.0kg</td>
                  <td className="p-2 border border-green-100">短期集中。体重次第では厳しい</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">−1,000kcal</td>
                  <td className="p-2 border border-green-100 text-center">約3.9kg</td>
                  <td className="p-2 border border-green-100">推奨しない。筋肉が削れる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="safe" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          あなたの体重で3kgは妥当か
        </h2>
        <div className="space-y-4">
          <p>
            健康的に減らせるペースの上限は、一般に<strong>体重の約1%／週</strong>とされています。体が大きいほど余裕があり、細い人ほど余裕がないということです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">現在の体重</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">安全な上限（週）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1ヶ月の上限</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">3kgは？</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">50kg</td>
                  <td className="p-2 border border-green-100 text-center">0.5kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.0kg</td>
                  <td className="p-2 border border-green-100 text-red-600 font-medium">無理がある</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">60kg</td>
                  <td className="p-2 border border-green-100 text-center">0.6kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.4kg</td>
                  <td className="p-2 border border-green-100 text-red-600 font-medium">やや厳しい</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">70kg</td>
                  <td className="p-2 border border-green-100 text-center">0.7kg</td>
                  <td className="p-2 border border-green-100 text-center">約2.8kg</td>
                  <td className="p-2 border border-green-100 font-medium">ギリギリ射程</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">80kg</td>
                  <td className="p-2 border border-green-100 text-center">0.8kg</td>
                  <td className="p-2 border border-green-100 text-center">約3.2kg</td>
                  <td className="p-2 border border-green-100 text-green-700 font-medium">現実的</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">90kg</td>
                  <td className="p-2 border border-green-100 text-center">0.9kg</td>
                  <td className="p-2 border border-green-100 text-center">約3.6kg</td>
                  <td className="p-2 border border-green-100 text-green-700 font-medium">十分可能</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>体重が75kg以上なら3kg/月は狙えます。</strong>逆に55kg前後の人が同じことをやろうとすると、必要な赤字が維持カロリーに対して大きすぎて、筋肉の減少と反動の過食をほぼ確実に招きます。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">なぜ体重で変わるのか</strong><br />
              体が大きい人は維持カロリー自体が高く、同じ700kcalの赤字でも「全体に対する割合」が小さくて済みます。体重50kgで維持1,500kcalの人が700kcal引くと、残りは800kcal。これは栄養がまともに摂れない量です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="first" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          最初の1〜2kgは脂肪ではない
        </h2>
        <div className="space-y-4">
          <p>
            食事を変えると、最初の数日で1〜2kg落ちることがよくあります。ここで「いけそう」と思うと、あとで必ず裏切られます。
          </p>
          <p>
            <strong>初期の減少は主に水分</strong>だからです。糖質の摂取を減らすと、体内に貯蔵されていたグリコーゲンが減り、それとセットで保持されていた水分も抜けます。塩分を控えた分のむくみも同時に引きます。
          </p>
          <div className="space-y-2">
            {[
              { title: "1週目：−1.5kg（うち脂肪0.5kg程度）", desc: "水分の減少が大きい。数字だけ見ると順調に見える。" },
              { title: "2週目：−0.5kg", desc: "水分の抜けが止まり、脂肪の減少ぶんだけになる。「止まった」と感じやすいのはここ。" },
              { title: "3〜4週目：−0.6kg／週", desc: "ここからが本番。ペースが落ちたのではなく、これが本来の速度。" },
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
            2週目で失速したように見えても、それは<strong>失敗ではなく正常</strong>です。ここで焦って食事をさらに削るのが、1ヶ月ダイエットの典型的な失敗パターンです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1ヶ月の進め方（週別）
        </h2>
        <div className="space-y-3">
          {[
            { n: "1週目", title: "計測と土台づくり", desc: "毎朝同じ条件で体重を測る。まず「飲み物のカロリー」「間食」「夜の主食量」の3つだけ手をつける。いきなり全部変えない。" },
            { n: "2週目", title: "タンパク質を固める", desc: "各食に手のひら1枚分のタンパク質を必ず入れる。ここを守れるかで、落ちるのが脂肪か筋肉かが変わる。" },
            { n: "3週目", title: "停滞に備える", desc: "数字が動かない週。体重は週平均で比較する。前週の平均と比べて減っていれば順調。" },
            { n: "4週目", title: "詰めすぎない", desc: "残り数日で焦って絶食や脱水に走らない。ここでの無理は、翌月のリバウンドをそのまま買っているのと同じ。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}：{item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="menu" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          赤字を作る具体的な引き算
        </h2>
        <div className="space-y-4">
          <p>「1日770kcal減らす」と言われても手が動きません。実際の引き算はこうです。</p>
          <div className="space-y-3">
            {[
              { from: "毎日の甘い飲み物・カフェラテ", to: "水・お茶・ブラック", point: "−150〜250kcal。最も痛みが少なく、最も効く引き算" },
              { from: "夜の主食を大盛り", to: "普通盛り or 半分", point: "−150〜250kcal。夕食の炭水化物は減らしても支障が出にくい" },
              { from: "揚げ物のおかず", to: "焼く・蒸す", point: "−100〜200kcal。同じ食材でも調理法だけで変わる" },
              { from: "夜の間食（スナック・アイス）", to: "ヨーグルト・高カカオチョコ少量", point: "−150〜250kcal。ゼロにしなくていい、置き換えでいい" },
              { from: "週2回の飲み会", to: "週1回・蒸留酒に変更", point: "−300〜600kcal（その日）。1回の飲み会は1日分の赤字を消す威力がある" },
            ].map((item) => (
              <div key={item.from} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-red-600">{item.from}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-green-700">{item.to}</span>
                </p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p>
            上から3つ組み合わせるだけで、<strong>400〜700kcalの赤字</strong>が作れます。「何も食べない」ではなく「毎日の中の高カロリーな習慣を1つずつ外す」のが、続く引き算です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やってはいけない詰め方
        </h2>
        <div className="space-y-3">
          {[
            { habit: "極端な絶食・置き換えだけで乗り切る", desc: "落ちた体重の多くが筋肉になり、維持カロリーが下がる。同じ食事に戻したとき、以前より太りやすい体になっている。" },
            { habit: "直前に水分を抜く", desc: "体重計の数字は動くが脂肪は1gも減っていない。体調を崩すだけで、水を飲めば即座に戻る。" },
            { habit: "毎日体重を測って一喜一憂する", desc: "日々の変動は水分で1〜2kg動く。増えた日に自暴自棄になって食べるのが最大の損失。週平均で見る。" },
            { habit: "タンパク質まで減らす", desc: "カロリーを削るときに真っ先に減らされがちだが、ここを削ると筋肉から落ちる。減らすなら脂質と糖質から。" },
            { habit: "運動で帳尻を合わせようとする", desc: "770kcalを運動で作るのはジョギング1時間以上に相当。食事側で作るほうが圧倒的に現実的。" },
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
        <h2 id="notenough" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          間に合わないと分かったら
        </h2>
        <div className="space-y-4">
          <p>3週目あたりで「このままだと3kgは届かない」と分かることがあります。そのときの選択肢は3つです。</p>
          <div className="space-y-3">
            {[
              { n: "1", title: "目標を2kgに下方修正する", desc: "最も賢い選択。2kg落ちた体は見た目でも十分変わる。無理な最後の追い込みで失うもののほうが大きい。" },
              { n: "2", title: "期限を2ヶ月に延ばす", desc: "期限が動かせるなら延ばす。同じ3kgでも2ヶ月なら−385kcal/日で済み、格段にラクになる。" },
              { n: "3", title: "見た目の目標に切り替える", desc: "体重ではなく、むくみを取る・姿勢を直す・服のサイズで判断する。イベントが目的なら、数字より見え方が本質。" },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-green-700">{item.n}. {item.title}</span>
                </p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            サクメシでは目標体重と期間を入力すると、<strong>そのペースが安全な範囲かをその場で判定</strong>します。無理な設定なら警告が出るので、走り出す前に気づけます。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>3kg減には<strong>23,100kcal＝1日約770kcalの赤字</strong>が必要</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>安全な上限は<strong>体重の1%／週</strong>。75kg以上なら射程、55kg前後なら無理がある</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>最初の1〜2kgは<strong>水分</strong>。2週目の失速は正常なので焦らない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>赤字は<strong>飲み物・夜の主食・揚げ物</strong>の引き算で作る。絶食では作らない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>届かないと分かったら<strong>目標を下げるか期限を延ばす</strong>。最後の追い込みは損</span></li>
          </ol>
          <p>
            自分の体重で3kgが妥当かどうかは、実際に数字を入れてみるのが一番早いです。サクメシなら目標と期間からペースを判定して、必要なカロリーに沿った7日分の献立まで作れます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
