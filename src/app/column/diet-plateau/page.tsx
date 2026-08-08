import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/diet-plateau" },
  title: "停滞期の乗り越え方｜体重が落ちなくなったらやるべきこと | サクメシ",
  description:
    "ダイエットの停滞期はなぜ起きるのか、いつまで続くのかを解説。やってはいけないNG行動と、チートデイの正しいやり方も紹介します。",
};

const TOC = [
  { id: "what", label: "停滞期はなぜ起きる？" },
  { id: "check", label: "それ、本当に停滞期？【チェックリスト】" },
  { id: "hidden", label: "隠れカロリーの正体" },
  { id: "duration", label: "止まった期間別の対応" },
  { id: "ng", label: "停滞期にやってはいけないこと" },
  { id: "actions", label: "停滞期を抜けるための5つの対処法" },
  { id: "metrics", label: "体重以外に見るべき3つの指標" },
  { id: "break", label: "ダイエットブレイクという選択肢" },
  { id: "cheatday", label: "チートデイの正しいやり方" },
  { id: "experience", label: "2回の停滞期で分かったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const HIDDEN = [
  { item: "ドレッシング 大さじ1", kcal: "約60kcal" },
  { item: "マヨネーズ 大さじ1", kcal: "約80kcal" },
  { item: "調理に使う油 大さじ1", kcal: "約110kcal" },
  { item: "加糖コーヒー・カフェラテ 1本", kcal: "100〜200kcal" },
  { item: "職場でもらうお菓子 1個", kcal: "50〜100kcal" },
  { item: "調理中の味見・つまみ食い", kcal: "100〜200kcal" },
  { item: "お酒 1杯", kcal: "70〜200kcal" },
  { item: "ナッツ ひとつかみ", kcal: "約150kcal" },
  { item: "ヨーグルトにかけるはちみつ", kcal: "30〜60kcal" },
];

const FAQS = [
  {
    q: "停滞期はどれくらい続く？",
    a: "2週間から1ヶ月程度が一般的です。ただし「本当の停滞期」の場合の話で、隠れカロリーや目標カロリーの設定ミスが原因なら、直すまでずっと続きます。まず原因の切り分けをしてください。",
  },
  {
    q: "運動を増やせば抜けられる？",
    a: "有効な手段のひとつですが、優先順位としては後ろです。まず記録の見直しと目標カロリーの再計算をしてください。それでも動かないときに、日常の活動量を増やすほうが体への負担も少なく続きます。",
  },
  {
    q: "停滞期に糖質制限を始めるのは？",
    a: "一時的に体重は落ちますが、その多くは水分です。数字が動くので抜けたように見えますが、脂肪が減ったわけではありません。やり方を大きく変えるより、今のやり方を続けるほうが確実です。",
  },
  {
    q: "何ヶ月も止まっている",
    a: "それは停滞期ではなく、摂取と消費が釣り合っている状態です。体重が減ったぶん必要カロリーも下がっているので、今の体重で計算し直してください。多くの場合、原因はここにあります。",
  },
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
        <h2 id="hidden" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          隠れカロリーの正体
        </h2>
        <div className="space-y-4">
          <p>
            「停滞期だと思っていたら、実は食べていた」——これが本当に多い。しかも
            <strong>本人はまったく自覚していない</strong>
            のが厄介なところです。記録に残らないカロリーの代表例を挙げます。
          </p>
          <div className="space-y-1.5">
            {HIDDEN.map((h) => (
              <div key={h.item} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-green-100">
                <span className="text-sm">{h.item}</span>
                <span className="text-sm font-bold text-amber-700 whitespace-nowrap ml-3">{h.kcal}</span>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="font-bold text-amber-800 text-sm mb-1">⚠ 3つ重なれば300kcal</p>
            <p className="text-sm text-gray-600">
              ドレッシングをたっぷりかけて、午後に職場のお菓子を1つもらって、夜にナッツをつまむ。これだけで
              <strong>1日300kcal前後</strong>
              。目標の赤字が400kcalなら、ほぼ帳消しです。体重が動かないのは当然ということになります。
            </p>
          </div>
          <p>
            対策は難しくありません。
            <strong>3日だけ、口に入れたものを全部記録する</strong>
            。ずっと続ける必要はなく、3日で十分に原因は見えます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="duration" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          止まった期間別の対応
        </h2>
        <div className="space-y-4">
          <p>止まってからの期間で、やるべきことは変わります。焦って全部やらないでください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">期間</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">状態</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">やること</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">〜1週間</td>
                  <td className="p-2 border border-green-100">誤差の範囲</td>
                  <td className="p-2 border border-green-100">何もしない。水分と便通で1〜2kgは動きます</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">2〜3週間</td>
                  <td className="p-2 border border-green-100">本物の停滞期の可能性</td>
                  <td className="p-2 border border-green-100">3日間の記録で隠れカロリーを確認。問題なければ続ける</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">1ヶ月</td>
                  <td className="p-2 border border-green-100">設定が合っていない可能性</td>
                  <td className="p-2 border border-green-100">今の体重で目標カロリーを再計算する</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium whitespace-nowrap">2ヶ月以上</td>
                  <td className="p-2 border border-green-100">停滞期ではなく「釣り合っている」</td>
                  <td className="p-2 border border-green-100">ダイエットブレイクを挟むか、活動量を増やす</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            2ヶ月以上動かないものを「停滞期」と呼ぶのは正確ではありません。それは
            <strong>摂取と消費が釣り合った状態</strong>
            です。待っても抜けないので、どこかを変える必要があります。
          </p>
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
        <h2 id="metrics" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          体重以外に見るべき3つの指標
        </h2>
        <div className="space-y-4">
          <p>
            停滞期でつらいのは「進んでいる実感がないこと」です。体重が止まっていても
            <strong>体は変わり続けていることが多い</strong>
            ので、別の物差しを持っておくと精神的にかなり楽になります。
          </p>
          <div className="space-y-3">
            {[
              { title: "腹囲（ウエスト）", how: "へその高さで、息を吐いた状態で測る。週1回、同じ曜日・同じ時間に。体重より正直に動くことがあります。" },
              { title: "写真", how: "同じ場所・同じ照明・同じ姿勢で、2週間に1回。毎日見ていると気づかない変化が、並べると一目で分かります。" },
              { title: "服のサイズ感", how: "ベルトの穴、パンツのウエスト。数字を測らなくても分かる指標として優秀です。" },
            ].map((m) => (
              <div key={m.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">{m.title}</p>
                <p className="text-sm text-gray-600">{m.how}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            体組成計の体脂肪率は、水分量の影響を受けやすく日々のブレが大きい指標です。1回の値ではなく、同じ条件で測った1ヶ月分の傾向で見てください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="break" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ダイエットブレイクという選択肢
        </h2>
        <div className="space-y-4">
          <p>
            チートデイより先に検討してほしいのが
            <strong>ダイエットブレイク</strong>
            です。1日だけ多く食べるのではなく、
            <strong>1〜2週間まるごと維持カロリーに戻す</strong>
            というやり方です。
          </p>
          <div className="bg-white rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">やり方</p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">1.</span><span>今の体重で計算した<strong>維持カロリー（TDEE）</strong>に戻す</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">2.</span><span>タンパク質は減らさない。増やす枠は主食（糖質）に回す</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">3.</span><span>1〜2週間続ける。体重は1kg前後増えるが、大半は水分</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">4.</span><span>期間が終わったら、また赤字に戻す</span></li>
            </ol>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">チートデイより優れている点</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・1日で暴走するリスクがない</li>
                <li>・精神的な休憩になる</li>
                <li>・トレーニングの調子が戻る</li>
                <li>・食事管理の練習になる（維持期の予行演習）</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="text-sm font-bold text-amber-800 mb-2">注意点</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・その期間は当然、体重は落ちない</li>
                <li>・「維持カロリー」を守る必要がある</li>
                <li>・そのまま終わってしまう人もいる</li>
                <li>・終わる日を先に決めておくこと</li>
              </ul>
            </div>
          </div>
          <p>
            減量が長期化している人ほど有効です。半年ずっと赤字を続けるより、
            <strong>2ヶ月落として2週間戻す</strong>
            を繰り返すほうが、続けやすく体調も保てます。
          </p>
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
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          2回の停滞期で分かったこと
        </h2>
        <div className="space-y-4">
          <p>
            92kgからの減量中、大きな停滞期が2回ありました。
            <strong>やったことも、結果もまったく違いました</strong>。
          </p>
          <p>
            1回目は5kgほど落ちたあたり。「代謝が落ちたに違いない」と思い込んで、目標カロリーをさらに200kcal下げました。結果、
            <strong>体重は動かないまま体調だけ悪くなり</strong>
            、2週間後に反動でまとめて食べて終わりです。今思えば、あれは停滞期ですらありませんでした。
          </p>
          <p>
            あとから3日分の食事を記録して分かったのが、
            <strong>サラダのドレッシングと職場でもらうお菓子で1日300kcal超</strong>
            使っていたことです。減っていなかったのではなく、そもそも赤字になっていなかった。原因を確かめずに減らしたのが最大の失敗でした。
          </p>
          <p>
            2回目は10kgほど落ちたあたりで、こちらは本物でした。やったのは、今の体重でカロリーを計算し直したことと、体重を見るのをやめて腹囲だけ測ったこと。
            <strong>3週間動かなかったあと、何も変えていないのに落ち始めました</strong>。
          </p>
          <p>
            その後の減量では、2ヶ月落として2週間維持に戻す形にしています。チートデイは自分には向いていませんでした。1日だけ解禁すると、その勢いが翌日以降も続いてしまうタイプだからです。
            <strong>自分がどちらのタイプか分かっていれば、選ぶ手段も変わります</strong>。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>停滞期は順調に痩せている証拠</strong>（体重の5%減あたりで来る）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>まず<strong>3日間の記録で隠れカロリー</strong>を確認する。原因の大半はここ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>1週間は誤差、2〜3週で確認、<strong>1ヶ月で再計算</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>基本は<strong>変えずに待つ</strong>。追いカロリーカットは逆効果</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>体重が止まっても<strong>腹囲・写真・服のサイズ</strong>は動いている</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>長期化しているなら<strong>ダイエットブレイク（1〜2週間の維持）</strong>を挟む</span></li>
          </ol>
          <p>
            体重が減ったら目標カロリーも変わります。停滞期を感じたら、サクメシで今の体重をもとにプランを作り直してみてください。「痩せた後の自分」に合った食事量にアップデートできます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
