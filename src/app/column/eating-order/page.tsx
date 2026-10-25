import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import ColumnFigure from "@/components/column/ColumnFigure";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("eating-order", {
  title: "食べる順番ダイエット｜血糖値を抑えて太りにくい食べ方 | サクメシ",
  description:
    "食べる順番（ベジファースト）で血糖値の上がり方を緩やかにする方法を解説。野菜→タンパク質→炭水化物の順が効く仕組み、「最初の1品」の選び方、丼・麺・コンビニでのやり方、効果が出ないときの原因まで。",
});

const TOC = [
  { id: "quick", label: "結論：今日の食事からできること" },
  { id: "why", label: "食べる順番で何が変わるのか" },
  { id: "order", label: "基本の順番と、それぞれの役割" },
  { id: "first-dish", label: "「最初の1品」に向くもの・向かないもの" },
  { id: "interval", label: "どれくらい間隔をあければいい？" },
  { id: "blood-sugar", label: "血糖値スパイクとは？" },
  { id: "scenes", label: "シーン別の実践方法" },
  { id: "pitfalls", label: "効果が出ないときの3つの原因" },
  { id: "experience", label: "期待の置きどころ" },
  { id: "my-way", label: "運営者はどうしていたか" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const STEPS = [
  {
    step: "① 最初：野菜・きのこ・海藻",
    icon: "🥗",
    time: "3〜5分かける",
    desc: "食物繊維（とくに海藻・きのこなどに多い水溶性食物繊維）には、あとから入ってくる糖の吸収を緩やかにする働きがあるとされています。サラダ・具だくさんの味噌汁・もずく酢・きのこのソテーなど。生野菜でなくてもかまいません。",
    color: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    step: "② 次：タンパク質（肉・魚・卵・大豆製品）",
    icon: "🍗",
    time: "5分程度かける",
    desc: "タンパク質と脂質が胃に入ると、胃から小腸へ食べ物を送り出すスピード（胃排出）が遅くなります。その結果、あとから食べる炭水化物の糖もゆっくり吸収されます。満腹感も出るので、主食を食べすぎにくくなります。",
    color: "bg-blue-50 border-blue-100",
    textColor: "text-blue-700",
  },
  {
    step: "③ 最後：炭水化物（ごはん・パン・麺）",
    icon: "🍚",
    time: "残りをゆっくり",
    desc: "野菜とタンパク質が先に入った状態なら、同じ量のごはんでも血糖の上がり方は緩やかになります。最後に回すことで「思ったより少なくて足りた」となりやすいのもポイントです。",
    color: "bg-orange-50 border-orange-100",
    textColor: "text-orange-700",
  },
];

const FIRST_DISHES = [
  {
    label: "向いている",
    mark: "◎",
    items: "葉物のサラダ、具だくさんの味噌汁・スープ、もずく酢・わかめ、きのこのソテー、おひたし、冷奴、キムチ・漬物（少量）",
    note: "食物繊維が主体のもの。野菜が用意できなければ、冷奴のようなタンパク質のおかずから始めてもよい",
    color: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    label: "条件つきでOK",
    mark: "○",
    items: "ドレッシングをたっぷりかけたサラダ、ごまあえ、きんぴらごぼう、ひじきの煮物",
    note: "食物繊維はとれるが、油や砂糖でカロリーが上がりやすい。量を控えめにすれば問題ない",
    color: "bg-blue-50 border-blue-100",
    textColor: "text-blue-700",
  },
  {
    label: "最初の1品には向かない",
    mark: "△",
    items: "ポテトサラダ、かぼちゃサラダ、コーン、マカロニサラダ、春雨サラダ、野菜ジュース",
    note: "見た目は野菜でも、糖質が多いもの（かぼちゃは食物繊維もとれるが糖質も多い）。野菜ジュースは製法によっては食物繊維が少なく、商品によっては糖質も多い",
    color: "bg-amber-50 border-amber-100",
    textColor: "text-amber-800",
  },
];

const SCENES = [
  {
    scene: "定食（一番やりやすい）",
    icon: "🍱",
    how: "小鉢・サラダ・味噌汁 → 主菜（焼き魚・生姜焼きなど） → ごはん。おかずとごはんを交互に食べる「三角食べ」をやめるだけで形になります。",
  },
  {
    scene: "丼もの・カレー（混ざっている）",
    icon: "🍛",
    how: "順番を作れないので、先に食べるものを1品足します。サラダ・味噌汁・冷奴などを単品で頼み、それを食べきってから丼に入る。ミニサラダ1つ足すだけで十分です。",
  },
  {
    scene: "ラーメン・パスタ（麺類）",
    icon: "🍜",
    how: "麺そのものが炭水化物なので、順番より「先に何か入れる」が主眼。ラーメンのサイドは餃子よりサラダ、パスタならスープかサラダを先に。ラーメンなら、まずチャーシューともやし・メンマを食べてから麺に取りかかります。",
  },
  {
    scene: "コンビニ",
    icon: "🏪",
    how: "サラダ（またはカット野菜・海藻サラダ） → サラダチキン・ゆで卵 → おにぎり。デスクで食べるときは袋から出す順番を決めておくだけで守れます。",
  },
  {
    scene: "居酒屋",
    icon: "🍺",
    how: "枝豆・冷奴・おひたし・キムチ → 焼き鳥・刺身 → 締めのごはんもの。もともと順番に運ばれてくるので、締めを最後にするという当たり前を守るだけで成立します。",
  },
];

const PITFALLS = [
  {
    title: "総カロリーが変わっていない",
    desc: "順番はあくまで血糖の上がり方の話で、食べた量そのものは減りません。順番を守っても摂取カロリーが消費を上回っていれば体重は落ちません。まず必要カロリーを把握したうえで、その中で順番を整えるのが正しい順序です。",
  },
  {
    title: "「野菜」がポテトサラダやコーンサラダ",
    desc: "ポテトサラダ・かぼちゃサラダ・コーンは、野菜の見た目をした炭水化物です。最初の1品に何を選べばいいかは、前半の「向くもの・向かないもの」の一覧を参考にしてください。",
  },
  {
    title: "早食いで全部10分以内に終わっている",
    desc: "順番を守っても、5分で完食していれば胃の中ではほぼ同時です。血糖の上がり方も変わりません。順番と同じくらい「時間をかける」ことがセットで必要になります。",
  },
];

const FAQS = [
  {
    q: "汁物は最初と最後、どっち？",
    a: "最初で問題ありません。具だくさんの味噌汁やスープは食物繊維と水分でお腹が落ち着き、そのあとの食欲を抑えてくれます。ただし塩分は多くなりがちなので、汁を毎食全部飲み干すのは避けたいところです。",
  },
  {
    q: "果物はいつ食べればいい？",
    a: "果物は糖質を含むので、食後のデザートより食間に単体で食べるほうが扱いやすいです。食後に食べる場合は量を決めて（りんごなら1/2個など）、なんとなく食べ続けないようにします。",
  },
  {
    q: "順番を守れば糖質は減らさなくていい？",
    a: "「減らさなくていい」ではなく「同じ量でも上がり方は緩やかにできる」です。目標カロリーを超えるほど食べれば、順番に関係なく体脂肪は増えます。",
  },
  {
    q: "1日3食すべてやる必要はある？",
    a: "全部できるならそれがベストですが、続かないなら夕食だけでもかまいません。夕食は量が多くなりやすく、そのあと寝るだけで活動量も少ないため、1食選ぶなら効果を感じやすいのは夕食です。",
  },
  {
    q: "野菜ジュースを先に飲めば代わりになる？",
    a: "代わりにはなりにくいです。製法によっては食物繊維が少なく、果汁入りなど糖質の多い商品もあります。飲むなら成分表示で食物繊維と糖質を確認し、できればサラダや味噌汁など噛んで食べるものを1品用意するほうが安心です。",
  },
  {
    q: "朝はパンとコーヒーだけ。どうすればいい？",
    a: "パンの前に1品足すだけで十分です。ゆで卵・ヨーグルト（無糖）・チーズ・野菜スープなど、手間のかからないものを先に食べてからパンに進みます。何も足せない日は、パンをゆっくり食べるだけでもかまいません。",
  },
];

export default function EatingOrder() {
  return (
    <ColumnShell
      slug="eating-order"
      h1="食べる順番ダイエット｜血糖値を抑えて太りにくい体を作る食べ方"
      toc={TOC}
      faqs={FAQS}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「食べる量は変えていないのに、食べる順番を変えただけで調子が良くなった」——ダイエットの話題でよく出てくる方法です。</p>
        <p>
          これは根拠のない話ではありません。ただし
          <strong>「順番さえ守れば何を食べても痩せる」という意味ではない</strong>
          ので、そこを勘違いすると効果が出ずに終わります。
        </p>
        <p>この記事では、順番が効く仕組みと、丼もの・麺類・コンビニなど順番を作りにくい場面での実践方法、そして効果が出ないときに疑うべきポイントまで解説します。時間のない方は、まず次の結論だけでも読んでみてください。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：今日の食事からできること
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">食べる順番ダイエットの基本ルール</p>
            <p className="text-sm text-gray-700">
              <strong>野菜・きのこ・海藻 → 肉・魚・卵・大豆製品 → ごはん・パン・麺</strong>
              の順に食べ、食事全体で<strong>15〜20分</strong>かける。
            </p>
            <p className="text-sm text-gray-700">
              3段階に分けられない食事（丼・麺・パン1個など）は、<strong>炭水化物の前に何か1品を食べきる</strong>だけでよい。
            </p>
          </div>
          <p className="text-sm text-gray-600">
            野菜から先に食べるこの方法は「ベジファースト」とも呼ばれます。ただし、順番で変わるのは血糖の上がり方と食べすぎにくさであって、<strong>摂取カロリーそのものは減りません</strong>。体重を落としたいなら、
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">1日の摂取カロリーの目安</a>
            を把握したうえで、その中で順番を整えるのが近道です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食べる順番で何が変わるのか
        </h2>
        <div className="space-y-4">
          <p>
            食事をすると血液中のブドウ糖（血糖）が増え、それに応じてすい臓から
            <strong>インスリン</strong>が分泌されます。インスリンは血糖を下げる唯一のホルモンで、細胞に糖を取り込ませたうえで、余った分をグリコーゲンや中性脂肪として蓄える働きも持っています。
          </p>
          <p>
            つまり、血糖が急に大きく上がるほどインスリンも多く出て、余ったエネルギーが蓄えに回りやすくなるという関係です。食べる順番を工夫する目的は、
            <strong>同じ食事内容でも、この血糖の立ち上がりを緩やかにすること</strong>にあります。
          </p>
          <p>仕組みは大きく2つです。</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">① 食物繊維が糖の吸収を遅らせる</p>
              <p className="text-sm text-gray-600">
                食物繊維は人の小腸では消化されない成分です。このうち水に溶ける<strong>水溶性食物繊維</strong>は、水分を含んでゲル状になり、糖の吸収を緩やかにして血糖値の上昇を抑える働きがあるとされています。海藻・きのこ・大麦などに多く含まれます。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">② タンパク質・脂質が胃から送り出すスピードを遅くする</p>
              <p className="text-sm text-gray-600">
                タンパク質や脂質が先に胃に入ると、胃から小腸へ内容物を送り出す速度が落ちます。糖が小腸に到達するタイミングがずれ、血糖の立ち上がりがなだらかになります。
              </p>
            </div>
          </div>
          <ColumnFigure
            caption="先に食べた2品が、主食の糖の届き方をゆっくりにする"
            alt="食べる順番の仕組みの図。①野菜・きのこ・海藻は食物繊維が糖の吸収を緩やかにする。②肉・魚・卵・大豆はタンパク質・脂質が胃から送り出す速度を落とす。この2つが合わさり、③最後に食べるごはん・パン・麺の糖がゆっくり届き、血糖の立ち上がりが緩やかになる。"
            note="仕組みのイメージ図。血糖の反応には個人差があります"
          >
            <EatingOrderDiagram />
          </ColumnFigure>
          <p className="text-sm text-gray-500">
            補足：血糖の上がり方は個人差が大きく、同じ食事でも人によって反応は違います。順番は「誰でも必ず同じだけ効く裏技」ではなく、コストゼロで試せる工夫という位置づけで捉えるのが現実的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="order" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          基本の順番と、それぞれの役割
        </h2>
        <div className="space-y-3">
          {STEPS.map((item) => (
            <div key={item.step} className={`rounded-xl p-4 border ${item.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <p className={`font-bold text-sm ${item.textColor}`}>{item.step}</p>
              </div>
              <p className="text-xs text-gray-500 mb-1">目安：{item.time}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="first-dish" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「最初の1品」に向くもの・向かないもの
        </h2>
        <div className="space-y-4">
          <p>
            食べる順番で一番つまずきやすいのが、最初に食べるものの選び方です。「野菜っぽいもの」ならなんでもいいわけではありません。目安はこうなります。
          </p>
          <div className="space-y-3">
            {FIRST_DISHES.map((item) => (
              <div key={item.label} className={`rounded-xl p-4 border ${item.color}`}>
                <p className={`font-bold text-sm mb-1 ${item.textColor}`}>
                  {item.mark} {item.label}
                </p>
                <p className="text-sm text-gray-700 mb-1">{item.items}</p>
                <p className="text-xs text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p>
            迷ったときの基準は<strong>「噛みごたえがあって、甘くないもの」</strong>
            です。噛みごたえのあるものは食べるのに時間がかかりやすいので、食事時間を延ばすという意味でも順番と相性がいいです。食物繊維をとる意味や、多く含む食材については
            <a href="/column/gut-health-diet" className="text-green-700 underline hover:no-underline">腸活×ダイエット（食物繊維・発酵食品のとり方）</a>
            でまとめています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="interval" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          どれくらい間隔をあければいい？
        </h2>
        <div className="space-y-4">
          <p>
            「野菜を食べてから何分待てばいいのか」とよく聞かれますが、
            <strong>わざわざ時間を測って待つ必要はありません</strong>
            。大事なのは待ち時間ではなく、野菜・タンパク質を食べきるまでに実際に時間がかかっていることです。
          </p>
          <p>目安としてはこうなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">全体の食事時間</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">評価</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">10分未満</td>
                  <td className="p-2 border border-green-100">順番を守っても効果は出にくい。まず食べる速さから直す</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">15〜20分</td>
                  <td className="p-2 border border-green-100">現実的な目標ライン。満腹のサインも間に合いやすい</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">20分以上</td>
                  <td className="p-2 border border-green-100">理想的。ただし昼休みの都合もあるので毎食は求めなくてよい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            満腹を感じる仕組みは、食べ始めてから働き出すまでに時間差があります。早食いだと満腹に気づく前に食べ終わってしまうため、順番以前に食べすぎが起きます。
            <strong>まず箸を置く回数を増やす</strong>ほうが、順番を厳密に守るより効果が大きい人は多いです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="blood-sugar" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          血糖値スパイクとは？
        </h2>
        <div className="space-y-4">
          <p>食後に血糖が急激に上がり、そのあと急降下する動きを「血糖値スパイク」と呼びます。起きると、こういうことにつながります。</p>
          <div className="space-y-2">
            {[
              "食後に強い眠気やだるさが来る（午後の仕事が進まない原因になりやすい）",
              "インスリンが多く分泌され、余ったエネルギーが蓄えに回りやすくなる",
              "血糖が下がりすぎて、食べたばかりなのにまた空腹を感じる",
              "高血糖の状態が習慣的に続くと、糖尿病のリスク要因になる",
            ].map((item) => (
              <div key={item} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p>
            とくに実感しやすいのが3つめの「またすぐお腹が空く」です。昼にうどんや菓子パンだけで済ませた日の15時に猛烈に何か食べたくなるのは、意志が弱いからではなく血糖の動きが原因であることが少なくありません。
          </p>
          <p>
            順番は「どう食べるか」で血糖の上がり方を緩やかにする方法ですが、「何を食べるか」で同じことを狙うのがGI値の考え方です。両方を組み合わせると取り入れやすくなります。詳しくは
            <a href="/column/gi-index" className="text-green-700 underline hover:no-underline">GI値を意識した食材選び</a>
            をどうぞ。
          </p>
          <p className="text-sm text-gray-500">
            ※ ここで挙げているのは一般的な傾向です。すでに血糖値の異常を指摘されている方、治療中の方は、自己判断で食事を変えず主治医の指示に従ってください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="scenes" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          シーン別の実践方法
        </h2>
        <div className="space-y-4">
          <p>順番を守れる食事ばかりではありません。実際に困るのは「混ざっているもの」と「単品もの」です。場面ごとの現実的なやり方はこうなります。</p>
          <div className="space-y-3">
            {SCENES.map((item) => (
              <div key={item.scene} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-bold text-green-700 text-sm">{item.scene}</p>
                </div>
                <p className="text-sm text-gray-600">{item.how}</p>
              </div>
            ))}
          </div>
          <p>
            共通しているのは<strong>「先に食べるものを1品つくる」</strong>という考え方です。順番を完璧に3段階へ分けることより、炭水化物の前に何か入れる習慣のほうが、外食でも崩れにくく続きます。
          </p>
          <p>
            メニューの選び方そのものは
            <a href="/column/eating-out" className="text-green-700 underline hover:no-underline">外食でも太らない食べ方</a>
            、コンビニで何を買うかは
            <a href="/column/convenience-diet" className="text-green-700 underline hover:no-underline">コンビニで買えるダイエット飯の選び方</a>
            で詳しく書いています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="pitfalls" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          効果が出ないときの3つの原因
        </h2>
        <div className="space-y-3">
          {PITFALLS.map((item) => (
            <div key={item.title} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-bold text-amber-800 text-sm mb-1">⚠ {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          期待の置きどころ
        </h2>
        <div className="space-y-4">
          <p>
            冒頭でも触れたとおり、体重が落ちるかどうかを決めるのは、1日の摂取カロリーと消費カロリーのバランスです。順番を変えても、食べた量の合計は変わりません。
          </p>
          <p>
            それでも取り入れる価値があるのは、
            <strong>食べすぎを防ぐ側から効いてくる</strong>
            からです。野菜から食べ始めると食事に時間がかかり、主食に行き着く頃には満腹感が出てきます。結果として主食や間食の量が自然に減る、というのが現実的な効き方です。
          </p>
          <p>
            そのため期待の置きどころとしては、「これだけで痩せる方法」ではなく「カロリー管理を続けやすくするための補助」が正確です。コストはかからないので、試してみる価値はあります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="my-way" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          運営者はどうしていたか
        </h2>
        <div className="space-y-4">
          <p>
            正直に書くと、私（motsu）は92kgから減量していた頃、食べる順番を厳密に守っていたわけではありません。やっていたのは、
            <strong>外食で定食を食べるときに、ごはんより先におかずや汁物に手をつける</strong>
            という程度です。毎食ではなく、思い出したときにゆるくやっていました。
          </p>
          <p>
            体重が落ちた理由を振り返ると、大きかったのは外食の回数そのものが減ったことです。順番がどれくらい効いていたのかは、自分では分かりません（当時の外食の中身は
            <a href="/column/eating-out-92kg" className="text-green-700 underline hover:no-underline">92kgのとき、外食で何を食べていたか</a>
            に書き出しています）。
          </p>
          <p>
            定食ならメニューを変えずに、手をつける順番を変えるだけで済みます。この記事で「先に1品つくる」を勧めているのも、3段階を厳密に守るより、そのくらいの手軽さで続けるほうが現実的だと考えているからです。
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
          <p>食べる順番ダイエットのポイントを整理します。</p>
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>野菜・きのこ・海藻</strong>を最初に、3〜5分かけて食べる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>次に<strong>肉・魚・卵・大豆製品</strong>。胃から送り出すスピードが遅くなり満腹感も出る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>最後に<strong>ごはん・パン・麺</strong>。同じ量でも血糖の上がり方が緩やかになる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>ポテトサラダ・コーンは「野菜の見た目をした炭水化物」。野菜ジュースも商品によっては<strong>「最初の1品」の代わりになりにくい</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>丼・麺など混ざっているものは、<strong>先に食べる1品を足す</strong>だけでよい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>全体で<strong>15〜20分</strong>かける。早食いのままでは順番の効果は出にくい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">7.</span><span>順番は<strong>カロリー管理の代わりにはならない</strong>。あくまで補助として使う</span></li>
          </ol>
          <p>
            食べる量を変えなくても、順番と食べる速さを整えるだけで、食後の眠気や余計な間食は減らしやすくなります。まずは今日の夕食で、ごはんに手をつける前にサラダか味噌汁を食べきるところから始めてみてください。
          </p>
          <p>
            そのうえで「自分は1日どれくらい食べていいのか」が分かっていないなら、そちらを先に把握したほうが早いです。サクメシなら質問に答えるだけで必要カロリーとPFC、1週間分の献立まで出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}

/** Two mechanisms (fiber first, protein second) converging on a slower rise in blood sugar. */
function EatingOrderDiagram() {
  const lanes = [
    { x: 20, food: "① 野菜・きのこ・海藻", line1: "食物繊維が", line2: "糖の吸収を緩やかに" },
    { x: 330, food: "② 肉・魚・卵・大豆", line1: "タンパク質・脂質が", line2: "胃から送る速度を落とす" },
  ];
  return (
    <svg viewBox="0 0 640 390" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <marker id="eo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#4CAF50" />
        </marker>
      </defs>
      {lanes.map((l) => (
        <g key={l.food}>
          <rect x={l.x} y="16" width="290" height="56" rx="10" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="2" />
          <text x={l.x + 145} y="51" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#2E7D32">{l.food}</text>
          <line x1={l.x + 145} y1="72" x2={l.x + 145} y2="96" stroke="#4CAF50" strokeWidth="3" markerEnd="url(#eo-arrow)" />
          <rect x={l.x} y="100" width="290" height="80" rx="10" fill="#FFFFFF" stroke="#4CAF50" strokeWidth="2" />
          <text x={l.x + 145} y="133" textAnchor="middle" fontSize="18" fill="#374151">{l.line1}</text>
          <text x={l.x + 145} y="161" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#374151">{l.line2}</text>
          <line x1={l.x + 145} y1="180" x2={l.x + 145} y2="216" stroke="#4CAF50" strokeWidth="3" markerEnd="url(#eo-arrow)" />
        </g>
      ))}
      <rect x="20" y="220" width="600" height="60" rx="10" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
      <text x="320" y="258" textAnchor="middle" fontSize="19" fill="#374151">
        ③ 最後のごはん・パン・麺の糖が ゆっくり届く
      </text>
      <line x1="320" y1="280" x2="320" y2="304" stroke="#4CAF50" strokeWidth="3" markerEnd="url(#eo-arrow)" />
      <rect x="20" y="308" width="600" height="64" rx="12" fill="#2E7D32" />
      <text x="320" y="348" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#FFFFFF">血糖の立ち上がりが緩やかに</text>
    </svg>
  );
}
