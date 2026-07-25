import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/appetite-control" },
  title: "食欲を抑える方法｜我慢に頼らず食べすぎを止める7つのコツ | サクメシ",
  description:
    "食欲が止まらないのは意志の弱さではありません。血糖値・タンパク質・睡眠など原因別に、我慢に頼らず食欲をコントロールする具体的な方法を解説します。",
};

const TOC = [
  { id: "why", label: "食欲が止まらないのは意志の問題じゃない" },
  { id: "basic", label: "食欲を抑える食事の土台3つ" },
  { id: "tips", label: "今すぐ使えるテクニック7選" },
  { id: "timing", label: "「時間帯別」よくある食欲の正体" },
  { id: "ng", label: "やってはいけない食欲対策" },
  { id: "summary", label: "まとめ" },
];

export default function AppetiteControl() {
  return (
    <ColumnShell
      slug="appetite-control"
      h1="食欲を抑える方法｜我慢に頼らず食べすぎを止める7つのコツ"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「夜になると何か食べたくなる」「食べたばかりなのにお腹が空く」——ダイエットが続かない理由の大半は、根性が足りないことではなく<strong>食欲が暴走する条件が揃っている</strong>ことです。</p>
        <p>
          食欲はホルモンと血糖値と睡眠でかなりの部分が決まります。つまり<strong>条件を変えれば、我慢しなくても勝手に落ち着く</strong>ということ。
        </p>
        <p>この記事では、食欲が出る仕組みと、今日から変えられる具体策を解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食欲が止まらないのは意志の問題じゃない
        </h2>
        <div className="space-y-4">
          <p>食欲は主に4つの要因で強くなります。心当たりのあるものから潰していくのが最短ルートです。</p>
          <div className="space-y-2">
            {[
              { title: "血糖値の乱高下", desc: "菓子パンや甘い飲み物で血糖値が急上昇すると、その後の急降下で強い空腹感が来る。食後2〜3時間で「もう腹が減った」となる人はこれ。" },
              { title: "タンパク質・食物繊維の不足", desc: "この2つは満腹感を長持ちさせる要素。糖質と脂質だけの食事はカロリーの割に満足感が続かない。" },
              { title: "睡眠不足", desc: "寝不足だと食欲を高めるグレリンが増え、抑えるレプチンが減る。同じ意志の強さでも、寝不足の日は物理的に食欲が強い。" },
              { title: "実は喉が渇いているだけ", desc: "軽い脱水は空腹感と間違えやすい。特にデスクワーク中の「なんとなく口寂しい」はこれが混ざっている。" },
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
            逆に言えば、<strong>血糖値・タンパク質・睡眠・水分</strong>を整えるだけで、食欲の強さは体感でかなり変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="basic" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食欲を抑える食事の土台3つ
        </h2>
        <div className="space-y-4">
          <p>小手先のテクニックより先に、この3つを固めるほうが効きます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">土台</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">具体例</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">タンパク質</td>
                  <td className="p-2 border border-green-100">毎食20g以上</td>
                  <td className="p-2 border border-green-100">卵2個・納豆＋豆腐・鶏むね100g・サラダチキン1個</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">食物繊維</td>
                  <td className="p-2 border border-green-100">1日20g前後</td>
                  <td className="p-2 border border-green-100">野菜・きのこ・海藻・豆類・オートミール</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">主食の質</td>
                  <td className="p-2 border border-green-100">白→茶色に</td>
                  <td className="p-2 border border-green-100">白米に大麦を混ぜる、食パン→全粒粉パン</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            特に効果が分かりやすいのは<strong>朝食のタンパク質</strong>です。朝を菓子パンやおにぎりだけで済ませている人が、卵やヨーグルトを足すだけで昼と夜の食欲が落ち着くケースは多いです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          今すぐ使えるテクニック7選
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "食べる前にコップ1杯の水", desc: "喉の渇きと空腹の混同を切り分けられる。10分待っても食べたいなら本物の空腹。" },
            { n: "2", title: "野菜・タンパク質から食べる", desc: "順番を変えるだけで血糖値の上がり方が緩やかになり、後半の食欲が落ちる。" },
            { n: "3", title: "一口ごとに箸を置く", desc: "満腹感の信号が届くまで15〜20分かかる。早食いは信号が届く前に食べ終わってしまう。" },
            { n: "4", title: "間食を「先に決めておく」", desc: "その場の判断に任せると必ず負ける。ナッツ・ヨーグルト・高カカオチョコなどを決め打ちで用意しておく。" },
            { n: "5", title: "見えるところに置かない", desc: "机の上のお菓子は視界に入るたびに意志力を削る。買わない・見せないが最強。" },
            { n: "6", title: "無糖の炭酸水・お茶を挟む", desc: "口寂しさの正体は刺激不足のことが多い。カロリーゼロで満たせる。" },
            { n: "7", title: "7時間寝る", desc: "食欲対策として、下手な間食の工夫より効く。寝不足の日は「今日は食欲が強くて当然」と割り切る。" },
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
        <h2 id="timing" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「時間帯別」よくある食欲の正体
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">午後3時ごろの猛烈な空腹</p>
              <p className="text-sm text-gray-600">
                昼食が糖質中心だった日に起きやすい血糖値の急降下。昼にタンパク質を足すか、15時に決め打ちの間食を入れると夜のドカ食いを防げる。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">夜の「何か食べたい」</p>
              <p className="text-sm text-gray-600">
                空腹というより疲労・ストレス・退屈が原因のことが多い。温かいお茶、風呂に入る、早く寝るのいずれかで消えるならニセの空腹。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">食後すぐの物足りなさ</p>
              <p className="text-sm text-gray-600">
                量ではなく噛む回数と食物繊維の不足。汁物・サラダ・きのこを足すと同じカロリーでも満足度が上がる。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">飲んだ後の〆が欲しい</p>
              <p className="text-sm text-gray-600">
                アルコールは食欲の抑制を外し、判断力も下げる。飲む前に食べておく・〆を頼まない前提で店を選ぶのが現実的。
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やってはいけない食欲対策
        </h2>
        <div className="space-y-3">
          {[
            { habit: "極端に食事量を減らす", desc: "一時的には減らせても、食欲は必ず反動で返ってくる。摂取カロリーを削りすぎた翌日にドカ食いするのは、意志ではなく生理反応。" },
            { habit: "「食べない」で我慢だけする", desc: "我慢は消耗品。意志力で押さえ込む戦略は、疲れた日・飲んだ日に必ず破綻する。環境と食事内容を変えるほうが再現性が高い。" },
            { habit: "0キロカロリーの甘味に頼りすぎる", desc: "強い甘味に慣れると、通常の食事の満足感が下がることがある。使うのは構わないが、主戦力にはしない。" },
            { habit: "食欲がない日に無理に食べる", desc: "体調やホルモンの波で食欲が落ちる日はある。その日は素直に軽くして、翌日以降で帳尻を合わせればいい。" },
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
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>食欲の暴走は<strong>意志ではなく条件</strong>の問題。血糖値・タンパク質・睡眠・水分を疑う</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>毎食タンパク質20g＋食物繊維</strong>が土台。特に朝食を変えると1日が変わる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>間食は<strong>その場で選ばず、先に決めておく</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>極端な食事制限は逆効果</strong>。反動のドカ食いは生理反応であって性格ではない</span></li>
          </ol>
          <p>
            「食欲さえ抑えられれば痩せるのに」と感じている人ほど、実は食事の中身に原因があります。サクメシならタンパク質と食物繊維が自動で組み込まれた7日分のプランが作れるので、食欲が落ち着く食事をそのまま実行できます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
