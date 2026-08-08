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
  { id: "hormone", label: "食欲を動かしているホルモン" },
  { id: "check", label: "本物の空腹か見分ける方法" },
  { id: "basic", label: "食欲を抑える食事の土台3つ" },
  { id: "satiety", label: "同じカロリーでも満腹感が違う食べ物" },
  { id: "tips", label: "今すぐ使えるテクニック7選" },
  { id: "timing", label: "「時間帯別」よくある食欲の正体" },
  { id: "stress", label: "ストレス食いへの対処" },
  { id: "ng", label: "やってはいけない食欲対策" },
  { id: "clinic", label: "自分でどうにもならないと感じたら" },
  { id: "experience", label: "食欲が落ち着いたきっかけ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const SATIETY = [
  { pair: "菓子パン1個 vs おにぎり2個＋ゆで卵", kcal: "どちらも約400kcal", diff: "後者はタンパク質が約4倍。3時間後の空腹の強さがまったく違います" },
  { pair: "カフェラテ vs ギリシャヨーグルト", kcal: "どちらも約150kcal", diff: "液体は満腹感がほぼ残りません。噛むものに変えるだけで持ちが変わります" },
  { pair: "うどん単品 vs そば＋卵＋わかめ", kcal: "どちらも約450kcal", diff: "タンパク質と食物繊維が入るぶん、夕方の間食が減ります" },
  { pair: "ポテトチップス1袋 vs 素焼きアーモンド30粒", kcal: "どちらも約340kcal", diff: "噛む回数と脂質の質が違う。ナッツは途中で止まりやすい" },
];

const FAQS = [
  {
    q: "生理前の食欲も同じ方法で抑えられる？",
    a: "土台（タンパク質・食物繊維・睡眠）は同じですが、ホルモンの影響によるものなので完全には抑えられません。この時期は「抑える」より「食べていいものを先に決める」ほうが現実的です。",
  },
  {
    q: "ガムを噛むのは効果ある？",
    a: "口寂しさの対策としては有効です。ただし本物の空腹には効きません。10分噛んでもまだ食べたいなら、素直に何か食べたほうが夜の反動を防げます。",
  },
  {
    q: "食欲を抑えるサプリはどう？",
    a: "食物繊維系のものは満腹感の補助になりますが、根本の解決にはなりません。睡眠とタンパク質を整えるほうが、費用ゼロで効果も大きいです。",
  },
  {
    q: "夜勤で生活が不規則。どうすれば？",
    a: "睡眠を整えるのが難しい以上、食事側で対処します。勤務前に何を食べるかを先に決めておく、タンパク質を多めに確保する、この2つが効きます。抑えきれない日があっても、そういうものだと割り切ってください。",
  },
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
        <h2 id="hormone" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食欲を動かしているホルモン
        </h2>
        <div className="space-y-4">
          <p>「気合いで抑える」がうまくいかない理由は、食欲が体の仕組みとして作られているからです。関わる代表的なホルモンはこの2つです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ホルモン</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">働き</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">増える／減る条件</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">グレリン</td>
                  <td className="p-2 border border-green-100">空腹を知らせ、食欲を増やす</td>
                  <td className="p-2 border border-green-100">睡眠不足・空腹時間が長い・極端な制限で<strong>増える</strong></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">レプチン</td>
                  <td className="p-2 border border-green-100">満腹を知らせ、食欲を抑える</td>
                  <td className="p-2 border border-green-100">睡眠不足・体脂肪の減少で<strong>減る</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            表を見ると分かるとおり、
            <strong>睡眠不足はこの両方を悪い方向に動かします</strong>
            。寝ていない日に食欲が強いのは、気持ちの問題ではなく体がそう作られているからです。
          </p>
          <p className="text-sm text-gray-500">
            ※ ここに書いたのは一般的な傾向で、影響の大きさには個人差があります。数値を追うより、「寝不足の翌日は食べすぎやすい」という前提で予定を組むほうが実用的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="check" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          本物の空腹か見分ける方法
        </h2>
        <div className="space-y-4">
          <p>食べたい気持ちの多くは、実は空腹ではありません。次の4つで切り分けられます。</p>
          <div className="space-y-2">
            {[
              { q: "「何でもいいから食べたい」か「特定のものが食べたい」か", a: "ごはんでも野菜でもいいなら本物の空腹。「甘いものが」「ラーメンが」と具体的なら、多くはストレスや習慣によるものです。" },
              { q: "水を1杯飲んで10分待っても食べたいか", a: "消えるなら喉の渇きか口寂しさ。残るなら本物です。" },
              { q: "最後に食べてから3時間以上経っているか", a: "2時間以内なら、生理的な空腹ではない可能性が高い。血糖の急降下か、単なる習慣です。" },
              { q: "お腹が鳴っているか・胃が空っぽの感覚があるか", a: "身体の感覚を伴わない「頭で食べたい」は、退屈や疲労のサインであることが多い。" },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-4 border border-green-100">
                <p className="text-sm font-bold text-gray-800 mb-1">☑️ {item.q}</p>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <p>
            <strong>ニセの空腹だと分かったら、我慢する必要はありません</strong>
            。水を飲む、歯を磨く、外の空気を吸う、風呂に入る。5分で消えることがほとんどです。逆に本物なら、素直に食べたほうが後の反動を防げます。
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
        <h2 id="satiety" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          同じカロリーでも満腹感が違う
        </h2>
        <div className="space-y-4">
          <p>
            食欲の話でいちばん実感しやすいのがここです。
            <strong>同じカロリーでも、何を食べたかで持ちがまったく違います</strong>
            。減らす前に、まず置き換えを試してください。
          </p>
          <div className="space-y-3">
            {SATIETY.map((s) => (
              <div key={s.pair} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-green-700 text-sm">{s.pair}</p>
                  <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{s.kcal}</span>
                </div>
                <p className="text-sm text-gray-600">{s.diff}</p>
              </div>
            ))}
          </div>
          <p>
            共通するのは<strong>タンパク質・食物繊維・噛む回数</strong>の3つです。この3つが揃っているほど、同じカロリーでも空腹が来るまでの時間が延びます。
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
        <h2 id="stress" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ストレス食いへの対処
        </h2>
        <div className="space-y-4">
          <p>
            食事を整えても消えないのが、
            <strong>ストレスや疲労からくる食欲</strong>
            です。これは空腹ではないので、栄養で解決しません。別のアプローチが要ります。
          </p>
          <div className="space-y-2">
            {[
              { title: "食べる以外の選択肢を先に用意する", desc: "疲れた夜に「何をするか」を決めておきます。風呂に入る、散歩に出る、シャワーを浴びて寝る。決めていないと、必ず一番手軽な選択肢——食べること——に流れます。" },
              { title: "きっかけを記録する", desc: "食べた内容ではなく、そのとき何があったかを1行メモする。「上司に詰められた」「予定が押した」。2週間分たまると、自分のパターンが見えます。" },
              { title: "家に置かない", desc: "疲れた状態で意志力に頼るのは無理です。手を伸ばせば届くところに置かない。買い物を空腹時にしないだけでも変わります。" },
              { title: "食べると決めたら罪悪感なしで食べる", desc: "「食べてしまった」と落ち込むと、その反動でさらに食べる流れができます。食べたら記録して、翌日から戻す。それだけで十分です。" },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">✓ {item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
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
        <h2 id="clinic" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自分でどうにもならないと感じたら
        </h2>
        <div className="space-y-4">
          <p>
            この記事で扱っているのは、
            <strong>生活習慣の範囲で調整できる食欲</strong>
            です。次のような状態が続いている場合は、工夫や我慢の問題ではありません。医療機関への相談を検討してください。
          </p>
          <div className="space-y-2">
            {[
              "自分では止められないほどの量を、短時間で食べてしまうことが繰り返しある",
              "食べたあとに嘔吐したり、下剤を使ったりしている",
              "食べたことへの罪悪感が強く、気分の落ち込みが続いている",
              "食べ物や体重のことが頭から離れず、日常生活に支障が出ている",
              "極端に食べられない状態が続いている",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            摂食障害は治療が必要な病気であり、意志の強さとは関係ありません。心療内科・精神科などで相談できます。ダイエット情報を読み込むより、専門家に相談するほうが確実に早く楽になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食欲が落ち着いたきっかけ
        </h2>
        <div className="space-y-4">
          <p>
            92kgあった頃、自分は「意志が弱いから食べてしまう」と本気で思っていました。夕方になると必ずコンビニに寄り、夜も何かつまむ。
            <strong>止められない自分が悪い</strong>
            という前提で、ずっと我慢の戦い方をしていました。
          </p>
          <p>
            変わったきっかけは、朝食を変えたことです。トーストとコーヒーだけだったのを、卵と納豆に変えた。
            <strong>それだけで、夕方の空腹が明らかに弱くなりました</strong>
            。タンパク質を1日50gから100gに増やしたのと同じ時期です。
          </p>
          <p>
            もうひとつが睡眠でした。仕事が落ち着いて6時間半眠れるようになった月、食事を変えていないのに間食の回数が減った。あのとき初めて、
            <strong>食欲は自分の性格ではなく条件で決まっている</strong>
            と実感しました。
          </p>
          <p>
            逆に、まったく効かなかったのが「我慢する」です。3日はもちますが、疲れた日に必ず崩れる。そして崩れたあとに自己嫌悪で余計に食べる。
            <strong>意志力を戦力として計算に入れると必ず負けます</strong>
            。買わない、家に置かない、先に決めておく——環境側を変えるほうが確実でした。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>食欲の暴走は<strong>意志ではなく条件</strong>の問題。血糖・タンパク質・睡眠・水分を疑う</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>睡眠不足はグレリンとレプチンの両方</strong>を悪い方向に動かす</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>まず<strong>本物の空腹か</strong>を見分ける。ニセなら5分で消える</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>毎食タンパク質20g＋食物繊維</strong>が土台。とくに朝食を変える</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>間食は<strong>その場で選ばず、先に決めておく</strong>。意志力を戦力にしない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>自分で止められない状態が続くなら<strong>医療機関に相談する</strong></span></li>
          </ol>
          <p>
            「食欲さえ抑えられれば痩せるのに」と感じている人ほど、実は食事の中身に原因があります。サクメシならタンパク質と食物繊維が自動で組み込まれた7日分のプランが作れるので、食欲が落ち着く食事をそのまま実行できます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
