import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/gi-index" },
  title: "GI値って何？血糖値を意識した食材選びで太りにくく | サクメシ",
  description:
    "GI値の基本と主要食品の目安値、GI値の弱点を補うGL（グリセミック・ロード）の考え方、調理法で値が変わる仕組み、今日からできる置き換え例と注意点まで解説します。",
};

const TOC = [
  { id: "what", label: "GI値とは？" },
  { id: "why", label: "血糖値の急上昇が太りやすさにつながる理由" },
  { id: "table", label: "主要食品のGI値の目安" },
  { id: "gl", label: "GI値の弱点を補う「GL」という考え方" },
  { id: "change", label: "同じ食品でもGI値は変わる" },
  { id: "swap", label: "今日からできる置き換え例" },
  { id: "order", label: "食べ方でも血糖の上がり方は変わる" },
  { id: "caution", label: "GI値だけに頼らない" },
  { id: "experience", label: "実際に置き換えて変わったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const GI_TABLE = [
  { cat: "主食（穀類）", items: [
    { name: "フランスパン", gi: "90前後", level: "high" },
    { name: "食パン", gi: "70〜90", level: "high" },
    { name: "白米", gi: "75〜88", level: "high" },
    { name: "餅", gi: "80前後", level: "high" },
    { name: "うどん", gi: "60〜80", level: "high" },
    { name: "玄米", gi: "55〜68", level: "mid" },
    { name: "そば", gi: "54〜59", level: "low" },
    { name: "パスタ（アルデンテ）", gi: "45〜65", level: "low" },
    { name: "オートミール", gi: "55前後", level: "low" },
    { name: "大麦（押麦）", gi: "25〜45", level: "low" },
  ]},
  { cat: "いも・野菜", items: [
    { name: "じゃがいも（マッシュ）", gi: "80〜90", level: "high" },
    { name: "さつまいも", gi: "55〜70", level: "mid" },
    { name: "かぼちゃ", gi: "65前後", level: "mid" },
    { name: "葉物野菜・きのこ・海藻", gi: "20前後以下", level: "low" },
  ]},
  { cat: "果物・その他", items: [
    { name: "バナナ", gi: "50前後", level: "low" },
    { name: "りんご", gi: "36前後", level: "low" },
    { name: "牛乳・ヨーグルト", gi: "30前後", level: "low" },
    { name: "大豆・豆類", gi: "20〜30", level: "low" },
  ]},
];

const SWAPS = [
  { from: "白米", to: "大麦入りごはん・雑穀米・玄米", point: "白米に大麦を1〜2割混ぜて炊くだけ。味もほとんど変わらず、食物繊維も増えます。もっとも費用対効果が高い置き換え。" },
  { from: "食パン（朝食）", to: "全粒粉パン・オートミール", point: "オートミールは牛乳やヨーグルトと合わせれば腹持ちも良い。時間がない朝でも作れます。" },
  { from: "うどん（昼食）", to: "そば", point: "立ち食いでも選べます。タンパク質もうどんより多く、午後の眠気が変わります。" },
  { from: "ポテトサラダ", to: "豆サラダ・海藻サラダ", point: "じゃがいもは野菜の見た目をした高GI食品。豆類なら低GIでタンパク質も摂れます。" },
  { from: "菓子パン（間食）", to: "ナッツ・無糖ヨーグルト・高カカオチョコ", point: "間食こそ差が出ます。血糖の乱高下による「ニセの空腹」を断ち切れます。" },
  { from: "スポーツドリンク・ジュース", to: "水・お茶・炭酸水", point: "液体の糖はもっとも速く吸収されます。ここを変えるのが一番早い。" },
];

const CHANGES = [
  { factor: "調理時間", desc: "パスタはアルデンテのほうが、しっかり茹でるよりGI値が低くなります。柔らかいほど消化が速く、血糖も上がりやすい。" },
  { factor: "加工の度合い", desc: "同じじゃがいもでも、マッシュポテト＞茹でたじゃがいも。すりつぶす・粉にするほど値は上がります。ジュースと果物の差も同じ理屈です。" },
  { factor: "冷やす", desc: "ごはんやじゃがいもを冷ますと、一部のでんぷんが消化されにくい形に変化します。おにぎりや冷製パスタが、温かい状態より穏やかになることがあります。" },
  { factor: "熟し具合", desc: "果物は熟すほど糖が増え、GI値も上がります。バナナは青いものより完熟のほうが高くなります。" },
  { factor: "一緒に食べるもの", desc: "脂質・タンパク質・食物繊維・酢と一緒に食べると、単体で食べるより上がり方は緩やかになります。" },
];

const FAQS = [
  {
    q: "低GIなら量を気にしなくていい？",
    a: "気にしてください。GI値は「上がり方」の指標で、カロリーとは別物です。玄米もナッツも食べすぎれば太ります。痩せるかどうかを決めるのはカロリー収支で、GI値はその上に乗せる質の話です。",
  },
  {
    q: "「低GI」と書かれたお菓子は食べてもいい？",
    a: "普通のお菓子よりはマシ、という程度です。低GI表示を免罪符にして量が増えるなら、むしろ逆効果になります。お菓子は低GIでもお菓子、という冷静さは必要です。",
  },
  {
    q: "GI値の数字は覚えたほうがいい？",
    a: "覚える必要はありません。測定条件で値がぶれますし、実際の食事は組み合わせで食べるものです。「白いものより茶色いもの」「柔らかいものより噛むもの」という大枠だけで、実用上は十分です。",
  },
  {
    q: "血糖値を実際に測ってみたい",
    a: "近年は一般向けの血糖測定デバイスもありますが、数値に振り回されて食事が偏る人もいます。健康な人が減量目的で使うなら、まずは食後の眠気や空腹のタイミングという体感を手がかりにするほうが実用的です。",
  },
];

function giClass(level: string) {
  if (level === "low") return "text-green-700";
  if (level === "mid") return "text-amber-700";
  return "text-red-700";
}

export default function GiIndex() {
  return (
    <ColumnShell
      slug="gi-index"
      h1="GI値って何？血糖値を意識した食材選びで太りにくく"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「低GIパン」「低GIチョコ」——スーパーやコンビニでよく見かけるようになった言葉です。</p>
        <p>
          なんとなく体によさそうだけれど、実際に何を指しているのか説明できる人は多くありません。結論から言うと、GI値は
          <strong>「同じ糖質でも血糖の上がり方に差がある」ことを教えてくれる指標</strong>
          。ただし、使い方を間違えると逆効果にもなります。
        </p>
        <p>この記事では、基本と実践的な使い方、そしてGI値だけでは判断できない部分まで解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値とは？
        </h2>
        <div className="space-y-4">
          <p>
            GI値（グリセミック・インデックス）とは、
            <strong>食品を食べたあとの血糖値の上がりやすさ</strong>
            を数値化したものです。ブドウ糖を100として、相対的に表します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">分類</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">GI値の目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">イメージ</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">高GI</td>
                  <td className="p-2 border border-green-100 text-center">70以上</td>
                  <td className="p-2 border border-green-100">血糖が急上昇。白米・食パン・菓子類など</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">中GI</td>
                  <td className="p-2 border border-green-100 text-center">56〜69</td>
                  <td className="p-2 border border-green-100">中間。玄米・さつまいも・かぼちゃなど</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">低GI</td>
                  <td className="p-2 border border-green-100 text-center">55以下</td>
                  <td className="p-2 border border-green-100">緩やかに上昇。そば・大麦・豆類・葉物野菜など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            大まかな傾向として、
            <strong>精製されて白いもの・柔らかいものほど高GI、精製度が低く食物繊維が残っているものほど低GI</strong>
            になります。この一言を覚えておくだけで、店頭での判断はかなりできます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          血糖値の急上昇が太りやすさにつながる理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "インスリンが多く分泌される", desc: "血糖が急に上がると、下げるためにインスリンが多く分泌されます。インスリンは血糖を下げる唯一のホルモンで、余った糖をグリコーゲンや中性脂肪として蓄える働きも持っています。" },
              { title: "急降下で「ニセの空腹」が来る", desc: "急に上がった血糖は、その後急に下がります。この落差で、食後2〜3時間なのに強い空腹や甘いものへの欲求が出ます。間食が止まらない人は、意志ではなくここが原因のことがあります。" },
              { title: "食後の眠気・だるさ", desc: "昼食後に猛烈に眠くなるのも、上がり方が急なときに起きやすい現象です。主食を変えると午後の体感がはっきり変わることがあります。" },
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
          <p className="text-sm text-gray-500">
            ※ ここで扱っているのは健康な人の一般的な傾向です。すでに血糖値の異常を指摘されている方、糖尿病の治療中の方は、自己判断で食事を変えず主治医の指示に従ってください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          主要食品のGI値の目安
        </h2>
        <div className="space-y-4">
          <p>
            数値は測定方法や品種、調理法によってかなり幅が出ます。以下は<strong>おおよその位置関係を掴むための目安</strong>として見てください。
          </p>
          <div className="space-y-4">
            {GI_TABLE.map((group) => (
              <div key={group.cat}>
                <p className="text-sm font-bold text-gray-600 mb-2">{group.cat}</p>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-green-100">
                      <span className="text-sm">{item.name}</span>
                      <span className={`text-sm font-bold whitespace-nowrap ml-3 ${giClass(item.level)}`}>{item.gi}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>
            肉・魚・卵などは糖質をほとんど含まないため、そもそもGI値の対象になりません。つまり
            <strong>GI値を意識するというのは、実質「主食と間食の質を選ぶ」こと</strong>
            です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="gl" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値の弱点を補う「GL」という考え方
        </h2>
        <div className="space-y-4">
          <p>
            GI値には大きな弱点があります。
            <strong>実際に食べる量が考慮されていない</strong>
            ことです。GI値は「その食品から糖質50g分を摂ったとき」を基準に測られているため、普段そんなに食べない食品でも高い値が出ます。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-2">GL（グリセミック・ロード）＝ GI値 × その1食分の糖質量(g) ÷ 100</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>・GL 10以下 … 低</p>
              <p>・GL 11〜19 … 中</p>
              <p>・GL 20以上 … 高</p>
            </div>
          </div>
          <p>
            分かりやすいのが<strong>すいか</strong>です。GI値は70台と高い部類ですが、1切れに含まれる糖質はごくわずか。GLで計算すると1桁になり、実際の影響は小さいことが分かります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食品（1食分）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">GI</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">糖質</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">GL</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">すいか 1切れ</td>
                  <td className="p-2 border border-green-100 text-center">約72</td>
                  <td className="p-2 border border-green-100 text-center">約6g</td>
                  <td className="p-2 border border-green-100 text-center font-bold text-green-700">約4（低）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">白米 茶碗1杯（150g）</td>
                  <td className="p-2 border border-green-100 text-center">約80</td>
                  <td className="p-2 border border-green-100 text-center">約55g</td>
                  <td className="p-2 border border-green-100 text-center font-bold text-red-600">約44（高）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            つまり、
            <strong>「GI値が高い食品を避ける」より「GI値が高くて、しかもたくさん食べるものを見直す」</strong>
            ほうが実用的です。多くの人にとって、それは主食と甘い飲み物です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="change" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          同じ食品でもGI値は変わる
        </h2>
        <div className="space-y-4">
          <p>GI値は食品ごとに固定された数字ではありません。次の要因で変わります。</p>
          <div className="space-y-2">
            {CHANGES.map((c) => (
              <div key={c.factor} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">{c.factor}</p>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            これが「数値を暗記しても意味がない」理由です。表の数字を覚えるより、
            <strong>精製されていないもの・噛む必要があるもの・単体で食べないこと</strong>
            という原則を押さえるほうが実際の食事では役に立ちます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="swap" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          今日からできる置き換え例
        </h2>
        <div className="space-y-4">
          <p>完璧を目指さず、よく食べるものから1つずつ置き換えるのが続くコツです。</p>
          <div className="space-y-3">
            {SWAPS.map((item) => (
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
            全部やる必要はありません。<strong>一番回数の多いものから1つ</strong>——多くの人にとっては昼食の主食です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="order" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食べ方でも血糖の上がり方は変わる
        </h2>
        <div className="space-y-4">
          <p>食材を変えなくてもできることがあります。むしろ、こちらのほうが今日から始められます。</p>
          <div className="space-y-2">
            {[
              "野菜・きのこ・海藻を先に食べる（食物繊維が糖の吸収を遅らせる）",
              "次にタンパク質、最後に主食（胃から送り出される速度が落ちる）",
              "食事全体で15〜20分かける（早食いだと順番の効果も出ない）",
              "食前に酢の物やもずく酢を入れる",
              "主食だけで済ませない（うどん単品・菓子パン単品を避ける）",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="caution" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値だけに頼らない
        </h2>
        <div className="space-y-3">
          {[
            { habit: "「低GIだから太らない」は誤解", desc: "低GIでもカロリーはあります。玄米もナッツも食べすぎれば普通に太ります。痩せるかどうかを決めるのはカロリー収支で、GI値はその上に乗せる補助輪です。" },
            { habit: "低GI表示を免罪符にする", desc: "「低GIチョコだから」と量が増えたら本末転倒です。表示は選ぶときの参考であって、食べる量を増やす理由にはなりません。" },
            { habit: "数値を厳密に暗記しようとする", desc: "測定条件で値がぶれるうえ、実際の食事は組み合わせで食べます。細かい数字より、GLの考え方と食べ方の原則のほうが役に立ちます。" },
            { habit: "脂質の多い食品を「低GIだから良い」と考える", desc: "揚げ物やスナック菓子は脂質のせいでGI値が下がることがあります。低GI＝ヘルシーではありません。" },
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
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          実際に置き換えて変わったこと
        </h2>
        <div className="space-y-4">
          <p>
            自分がやったのは、白米に大麦を混ぜることと、昼のうどんをそばに変えることの2つだけです。
            <strong>体重の落ち方が変わったという実感はありませんでした</strong>
            。落ちるかどうかは、やはりカロリーで決まっていました。
          </p>
          <p>
            はっきり変わったのは<strong>午後の眠気</strong>です。昼にうどんや丼ものを食べていた頃は、14時台に必ず落ちていました。主食を変えてからはそれが減り、
            <strong>夕方に何か食べたくなる回数も減りました</strong>
            。結果として1日の合計カロリーが下がったので、間接的には効いていたことになります。
          </p>
          <p>
            逆に失敗したのが、GI値の表を印刷して細かく管理しようとした時期です。数値がぶれるうえ、実際の食事は組み合わせなので、そもそも計算になりませんでした。3日でやめました。
          </p>
          <p>
            結局、実用になったのは
            <strong>「主食を白から茶色に」と「単品で食べない」の2つだけ</strong>
            です。細かい数字を追うより、この2つを毎日続けるほうが体感の差は大きいと思っています。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>GI値＝血糖の上がりやすさ</strong>。カロリーとは別の指標</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>量を加味した<strong>GL</strong>で見ると、本当に見直すべき食品が分かる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>GI値は<strong>調理法・加工・熟度で変わる</strong>。数字の暗記は不要</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>主食を「白→茶色」に</strong>。回数の多いものから1つずつ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>食材を変えなくても<strong>食べる順番と時間</strong>で上がり方は変えられる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>大前提は<strong>カロリー収支</strong>。低GI＝太らない、ではない</span></li>
          </ol>
          <p>
            「カロリーは守っているのに間食が止まらない」「午後の眠気がひどい」という人は、GI値を意識するだけで食事のつらさが変わるはずです。まずは今日の昼の主食から。
          </p>
          <p>
            量のほうが分かっていない場合は、サクメシで必要カロリーとPFC、1週間分の献立を出しておくと、質と量を同時に整えられます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
