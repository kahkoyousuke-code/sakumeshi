import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "作り置きダイエット｜週末2時間で平日5日を乗り切る方法 | サクメシ",
  description:
    "ダイエットが続かない最大の原因は「毎日の調理が面倒」。週末2時間の作り置きで平日をラクに乗り切る方法、おすすめおかず、保存のコツを解説します。",
};

const TOC = [
  { id: "why", label: "なぜ作り置きがダイエットに効くのか" },
  { id: "start", label: "挫折しない作り置きの始め方" },
  { id: "recipes", label: "定番おすすめ作り置きおかず" },
  { id: "storage", label: "保存のコツと日持ちの目安" },
  { id: "summary", label: "まとめ" },
];

export default function MealPrep() {
  return (
    <ColumnShell
      slug="meal-prep"
      h1="作り置きダイエット｜週末2時間で平日5日を乗り切る方法"
      toc={TOC}
      ctaLabel="サクメシで1週間分の献立を作る →"
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「今日は疲れたから、もうコンビニ弁当でいいや…」</p>
        <p>
          ダイエットが崩れる瞬間は、だいたい<strong>「疲れて考えたくない夜」</strong>にやってきます。意志が弱いんじゃありません。疲れた状態で毎日ヘルシーな食事を用意するのが、そもそも無理ゲーなんです。
        </p>
        <p>
          その解決策が<strong>作り置き（ミールプレップ）</strong>。週末に2時間だけ頑張れば、平日は「チンして食べるだけ」。判断力が落ちた夜でも、目の前にヘルシーな食事があれば人はそれを食べます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜ作り置きがダイエットに効くのか
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "「決断疲れ」をなくせる", desc: "「今日何食べよう」を毎日考えるのは想像以上に消耗する。決めるのは週1回だけにして、平日は考えずに食べる。" },
              { title: "空腹時の衝動買いを防げる", desc: "空腹でスーパー・コンビニに行くと高カロリーなものに手が伸びる。家に食事があれば、そもそも寄らない。" },
              { title: "量とカロリーが管理できる", desc: "1食分ずつ容器に分けておけば、食べる量が自動的に決まる。「あとちょっと」のおかわりが物理的に発生しない。" },
              { title: "実は節約にもなる", desc: "食材をまとめ買い・使い切りできるので食費が下がる。外食・中食が減る効果も大きい。" },
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
        <h2 id="start" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          挫折しない作り置きの始め方
        </h2>
        <div className="space-y-4">
          <p>作り置きの失敗パターンは「最初に張り切りすぎて、2週目にやめる」。続けるためのステップはこうです。</p>
          <div className="space-y-3">
            {[
              { step: "STEP 1", title: "まずは「主菜2品」だけ作る", desc: "いきなり10品作らない。鶏むね肉の料理1品＋魚か豆腐の料理1品。副菜は冷凍野菜やカット野菜で十分。" },
              { step: "STEP 2", title: "献立を先に決めてから買い物する", desc: "「何作ろう」とスーパーで悩むのが一番疲れる。献立→買い物リスト→買い物→調理の順番を固定する。" },
              { step: "STEP 3", title: "同時進行で時短する", desc: "炊飯器で米を炊きながら、オーブンや電子レンジで1品、コンロで1品。「待ち時間に次の準備」で2時間に収まる。" },
              { step: "STEP 4", title: "1食分ずつ容器に分ける", desc: "大皿にまとめると食べる量が曖昧になる。ごはんも1食150gずつ小分け冷凍が鉄則。" },
            ].map((item) => (
              <div key={item.step} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">{item.step}：{item.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            サクメシで7日分の食事プランを作ると、<strong>買い物リストまで自動生成</strong>できるので、STEP 2の「献立と買い物リスト作り」がほぼゼロになります。作り置きとの相性は抜群です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="recipes" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          定番おすすめ作り置きおかず
        </h2>
        <div className="space-y-4">
          <p>高タンパク・低〜中脂質で、冷蔵保存に向く定番を紹介します。味付けを変えれば飽きずに回せます。</p>
          <div className="space-y-3">
            {[
              { food: "サラダチキン（鶏むね肉の低温調理）", point: "塩・砂糖少々を揉み込んで沸騰後火を止めた湯に放置するだけ。しっとり仕上がり、スライスしてサラダ・スープに展開できる。" },
              { food: "鶏むね肉の照り焼き・塩麹焼き", point: "そのまま主菜に。塩麹に漬けておくとパサつかない。1枚ずつ焼いて小分けに。" },
              { food: "ゆで卵・味玉", point: "最強の間食兼おかず。めんつゆに漬けるだけで味玉に。1週間分まとめて作れる。" },
              { food: "ひじき煮・切り干し大根", point: "食物繊維とミネラルの補給に。和の副菜は日持ちしやすく、弁当にも使える。" },
              { food: "野菜の揚げないマリネ・ナムル", point: "ブロッコリー・にんじん・ほうれん草をレンジ加熱して和えるだけ。彩りが揃うと満足感が上がる。" },
              { food: "具だくさんスープ・味噌汁の素", point: "野菜ときのこを煮て小分け冷凍。夜に温めれば「あと1品」が10秒で完成。" },
            ].map((item) => (
              <div key={item.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">🍳 {item.food}</p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="storage" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          保存のコツと日持ちの目安
        </h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">保存方法</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">日持ちの目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">向いているもの</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">冷蔵</td>
                  <td className="p-2 border border-green-100">2〜4日</td>
                  <td className="p-2 border border-green-100">週前半に食べる主菜・副菜・味玉</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">冷凍</td>
                  <td className="p-2 border border-green-100">2〜3週間</td>
                  <td className="p-2 border border-green-100">週後半の主菜・ごはん小分け・スープの素</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2">
            {[
              "清潔な箸・容器を使い、よく冷ましてからフタをする（蒸気は傷みのもと）",
              "週後半に食べる分は最初から冷凍へ。「冷蔵で5日持たせる」は狙わない",
              "作った日をマスキングテープに書いて貼ると、食べ忘れ・迷いがなくなる",
              "夏場や梅雨時は日持ちを1日短めに見積もる。少しでも怪しい臭い・味がしたら食べない",
            ].map((tip, i) => (
              <div key={i} className="flex gap-2 bg-white rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">💡</span>
                <p className="text-sm text-gray-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>ダイエットの敵は「疲れた夜の判断」</strong>。作り置きで判断を不要にする</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>最初は主菜2品だけ</strong>。張り切りすぎない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>1食分ずつ小分け</strong>にして量を自動管理</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>週前半は冷蔵・後半は冷凍</strong>で無理なく回す</span></li>
          </ol>
          <p>
            「献立を考える→買い物リストを作る」の部分は、サクメシに任せるのが一番ラクです。7日分のメニューと買い物リストを自動生成して、週末の作り置きにそのまま使えます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
