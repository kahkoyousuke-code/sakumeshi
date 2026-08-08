import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/eating-order" },
  title: "食べる順番ダイエット｜血糖値を抑えて太りにくい食べ方 | サクメシ",
  description:
    "食べる順番を変えるだけで血糖値の上昇を抑えられます。野菜→タンパク質→炭水化物の順番が効く仕組み、丼・麺・コンビニ・居酒屋でのやり方、効果が出ないときの原因まで解説します。",
};

const TOC = [
  { id: "why", label: "食べる順番で何が変わるのか" },
  { id: "order", label: "基本の順番と、それぞれの役割" },
  { id: "interval", label: "どれくらい間隔をあければいい？" },
  { id: "blood-sugar", label: "血糖値スパイクとは？" },
  { id: "scenes", label: "シーン別の実践方法" },
  { id: "pitfalls", label: "効果が出ないときの3つの原因" },
  { id: "experience", label: "実際に続けて分かったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const STEPS = [
  {
    step: "① 最初：野菜・きのこ・海藻",
    icon: "🥗",
    time: "3〜5分かける",
    desc: "食物繊維が胃の中で水分を含んでかさを増し、あとから入ってくる糖の吸収スピードを落とします。サラダ・具だくさんの味噌汁・もずく酢・きのこのソテーなど。生野菜でなくてもかまいません。",
    color: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    step: "② 次：タンパク質（肉・魚・卵・大豆製品）",
    icon: "🍗",
    time: "5分程度かける",
    desc: "タンパク質と脂質が胃に入ると、胃から小腸へ食べ物を送り出すスピード（胃排出）が遅くなります。結果、あとから食べる炭水化物の糖もゆっくり吸収されます。満腹感も出るので、主食を食べすぎにくくなります。",
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
    how: "麺そのものが炭水化物なので、順番より「先に何か入れる」が主眼。餃子よりサラダ、パスタならスープかサラダを先に。ラーメンなら、まずチャーシューともやし・メンマを食べてから麺に取りかかります。",
  },
  {
    scene: "コンビニ",
    icon: "🏪",
    how: "サラダ（またはカット野菜・海藻サラダ） → サラダチキン・ゆで卵 → おにぎり。デスクで食べるときは袋から出す順番を決めておくだけで守れます。",
  },
  {
    scene: "居酒屋",
    icon: "🍺",
    how: "枝豆・冷奴・お浸し・キムチ → 焼き鳥・刺身 → 締めのごはんもの。もともと順番に運ばれてくるので、締めを最後にするという当たり前を守るだけで成立します。",
  },
];

const PITFALLS = [
  {
    title: "総カロリーが変わっていない",
    desc: "順番はあくまで血糖の上がり方の話で、食べた量そのものは減りません。順番を守っても摂取カロリーが消費を上回っていれば体重は落ちません。まず必要カロリーを把握したうえで、その中で順番を整えるのが正しい順序です。",
  },
  {
    title: "「野菜」がポテトサラダやコーンサラダ",
    desc: "ポテトサラダ・かぼちゃサラダ・コーンは、野菜の見た目をした炭水化物です。最初に食べる意味がほぼありません。葉物・きのこ・海藻・大根・ブロッコリーなど、食物繊維が主体のものを選びます。",
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
];

export default function EatingOrder() {
  return (
    <ColumnShell
      slug="eating-order"
      h1="食べる順番ダイエット｜血糖値を抑えて太りにくい体を作る食べ方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「食べる量は変えていないのに、食べる順番を変えただけで調子が良くなった」——ダイエットの話題でよく出てくる方法です。</p>
        <p>
          これは根拠のない話ではありません。ただし
          <strong>「順番さえ守れば何を食べても痩せる」という意味ではない</strong>
          ので、そこを勘違いすると効果が出ずに終わります。
        </p>
        <p>この記事では、順番が効く仕組みと、丼もの・麺類・コンビニなど順番を作りにくい場面での実践方法、そして効果が出ないときに疑うべきポイントまで解説します。</p>
      </div>

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
                食物繊維は人の消化酵素では分解されず、胃や腸の中で水分を含んでゲル状になります。この中に糖が取り込まれることで、小腸から吸収されるスピードが落ちます。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">② タンパク質・脂質が胃の出口を遅くする</p>
              <p className="text-sm text-gray-600">
                タンパク質や脂質が先に胃に入ると、胃から小腸へ内容物を送り出す速度が落ちます。糖が小腸に到達するタイミングがずれ、血糖の立ち上がりがなだらかになります。
              </p>
            </div>
          </div>
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
            とくに実感しやすいのが3つめの「またすぐ腹が減る」です。昼にうどんや菓子パンだけで済ませた日の15時に猛烈に何か食べたくなるのは、意志が弱いからではなく血糖の動きが原因であることが少なくありません。
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
          実際に続けて分かったこと
        </h2>
        <div className="space-y-4">
          <p>
            自分が減量を始めたころ、この方法を「順番を変えるだけで痩せる裏技」だと思って飛びつきました。結論から言うと、
            <strong>体重の落ち方そのものが変わったという実感はありませんでした</strong>
            。落ちるかどうかを決めていたのは、やはり摂取カロリーのほうでした。
          </p>
          <p>
            一方で、はっきり変わったことが2つあります。ひとつは<strong>午後の眠気</strong>です。昼に丼ものをかき込んでいた頃と比べて、サラダを先に食べて時間をかけるようにしてからは、14時台に一気に落ちる感覚が減りました。
          </p>
          <p>
            もうひとつは<strong>間食の量</strong>です。夕方に何か食べたくなる頻度が下がり、結果として1日の合計カロリーが自然に減りました。順番そのものが脂肪を減らすというより、
            <strong>食べすぎを防ぐ側から効いてくる</strong>という感覚に近いです。
          </p>
          <p>
            なので期待の置きどころとしては、「これだけで痩せる方法」ではなく「カロリー管理を続けやすくするための補助」が正確だと思っています。コストはゼロなので、やらない理由はありません。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>次に<strong>肉・魚・卵・大豆製品</strong>。胃の出口が遅くなり満腹感も出る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>最後に<strong>ごはん・パン・麺</strong>。同じ量でも血糖の上がり方が緩やかになる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>丼・麺など混ざっているものは、<strong>先に食べる1品を足す</strong>だけでよい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>全体で<strong>15〜20分</strong>かける。早食いのままでは順番の効果は出にくい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>順番は<strong>カロリー管理の代わりにはならない</strong>。あくまで補助として使う</span></li>
          </ol>
          <p>
            食べる量を変えなくても、順番と食べる速さを整えるだけで、食後の眠気や余計な間食は減らせます。まずは今日の夕食で、ごはんに手をつける前にサラダか味噌汁を食べきるところから始めてみてください。
          </p>
          <p>
            そのうえで「自分は1日どれくらい食べていいのか」が分かっていないなら、そちらを先に把握したほうが早いです。サクメシなら質問に答えるだけで必要カロリーとPFC、1週間分の献立まで出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
