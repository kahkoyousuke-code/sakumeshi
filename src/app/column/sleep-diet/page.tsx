import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "睡眠とダイエットの関係｜寝不足だと太るって本当？ | サクメシ",
  description:
    "睡眠不足が食欲ホルモンと代謝に与える影響を解説。痩せやすい体を作る睡眠習慣と、夜食を防ぐ食事のコツを紹介します。",
};

const TOC = [
  { id: "why", label: "寝不足だと太る3つの理由" },
  { id: "how-long", label: "何時間寝ればいい？" },
  { id: "habits", label: "痩せる睡眠習慣5つ" },
  { id: "food", label: "睡眠の質を上げる食事・下げる食事" },
  { id: "summary", label: "まとめ" },
];

export default function SleepDiet() {
  return (
    <ColumnShell
      slug="sleep-diet"
      h1="睡眠とダイエットの関係｜寝不足だと太るって本当？"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「食事も運動も頑張ってるのに、なぜか痩せない」</p>
        <p>
          そんな人に必ず聞くのが「<strong>ちゃんと寝てますか？</strong>」です。実は睡眠不足は、食事の乱れと同じくらいダイエットの敵。僕自身、仕事が忙しくて睡眠5時間を切っていた時期は、食事管理をしていても体重が動きませんでした。
        </p>
        <p>この記事では、睡眠とダイエットの関係と、今日からできる改善方法を解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          寝不足だと太る3つの理由
        </h2>
        <div className="space-y-4">
          <p>睡眠不足が太りやすさに直結することは、多くの研究で確認されています。理由は主に3つです。</p>
          <div className="space-y-2">
            {[
              { title: "食欲ホルモンが乱れる", desc: "睡眠不足になると、食欲を抑えるレプチンが減り、食欲を増やすグレリンが増える。つまり「寝てないだけで腹が減る」。しかも高カロリー・高糖質なものが欲しくなることが分かっている。" },
              { title: "代謝が下がる", desc: "成長ホルモンは睡眠中に分泌され、筋肉の修復や脂肪の分解を促す。睡眠が短いとこの働きが弱まり、消費カロリーが減る。" },
              { title: "起きている時間＝食べられる時間が増える", desc: "夜更かしすると、単純に夜食のチャンスが生まれる。22時以降の食欲は睡眠不足も相まって強力。寝てしまえば食べない。" },
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
            睡眠時間が5時間未満の人は、7時間以上の人と比べて<strong>肥満率が大幅に高い</strong>という調査結果もあります。「睡眠を削って運動する」は、ダイエットにおいては本末転倒になりかねません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how-long" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          何時間寝ればいい？
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">ダイエット中の睡眠時間の目安</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">7時間</p>
                <p className="text-xs text-gray-500">前後 / 日</p>
              </div>
              <p className="text-sm text-gray-500">（6時間未満が続くと食欲ホルモンの乱れが顕著に）</p>
            </div>
          </div>
          <p>
            個人差はありますが、目安は<strong>6.5〜8時間</strong>。「平日は5時間、週末に寝だめ」というパターンは、体内時計が乱れてかえって食欲が不安定になります。毎日同じくらいの時間に寝起きするほうが効果的です。
          </p>
          <p>
            どうしても忙しくて時間が確保できない人は、まず「<strong>今より30分早く寝る</strong>」から始めてください。その30分のスマホ時間を睡眠に変えるだけで、翌日の食欲が変わることを実感できるはずです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          痩せる睡眠習慣5つ
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 寝る90分前にお風呂に入る</p>
              <p>湯船で深部体温を一度上げると、下がるタイミングで自然な眠気が来ます。シャワーだけの人は、まずここから。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 寝る1時間前からスマホを見ない</p>
              <p>ブルーライトと情報の刺激は入眠の最大の敵。難しければ、せめて画面を暗くしてベッドの外で充電しましょう。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. カフェインは14時まで</p>
              <p>カフェインの効果は5〜8時間持続します。夕方のコーヒーやエナジードリンクが、夜の寝つきを静かに削っています。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 朝起きたら太陽の光を浴びる</p>
              <p>体内時計がリセットされ、夜に自然と眠くなるリズムができます。朝の散歩は運動にもなって一石二鳥。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">5. 寝酒をやめる</p>
              <p>アルコールは寝つきを良くするように感じますが、睡眠の質を大きく下げます。夜中に目が覚める人は、まず寝酒を疑ってください。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="food" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          睡眠の質を上げる食事・下げる食事
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">⭕ 睡眠に良い</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・<strong>夕食は寝る3時間前まで</strong>に済ませる</li>
                <li>・トリプトファンを含む食品（乳製品・大豆・バナナ）</li>
                <li>・温かい味噌汁やスープで体を温める</li>
                <li>・夕食の糖質を「適量」摂る（極端な糖質カットは眠りを浅くすることがある）</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 睡眠に悪い</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・寝る直前の食事（消化にエネルギーが取られ眠りが浅くなる）</li>
                <li>・夕方以降のカフェイン</li>
                <li>・アルコール（特に寝酒）</li>
                <li>・脂っこい夜食（ラーメン・揚げ物）</li>
              </ul>
            </div>
          </div>
          <p>
            「夜どうしてもお腹が空いて眠れない」ときは、我慢して眠れないより、<strong>温かい味噌汁やギリシャヨーグルトなど軽いもの</strong>を選んで食べたほうが結果的にプラスです。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>寝不足は食欲を増やし、代謝を下げる</strong>（寝ないだけで太りやすくなる）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>目安は7時間前後</strong>。まずは「今より30分早く寝る」</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>入浴・スマホ断ち・カフェイン14時まで</strong>で睡眠の質を上げる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>夕食は寝る3時間前まで</strong>。寝酒はやめる</span></li>
          </ol>
          <p>
            食事・運動・睡眠はダイエットの三本柱。サクメシで食事を整えたら、あとは寝るだけです。「頑張っているのに痩せない」と感じている方こそ、今夜の睡眠から見直してみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
