import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import ColumnFigure from "@/components/column/ColumnFigure";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("gi-index", {
  title: "GI値一覧表｜主食・果物・お菓子・飲み物の目安と太りにくい選び方 | サクメシ",
  description:
    "主食・パン・麺・いも・果物・お菓子・飲み物など約45品目のGI値一覧表。高GI（70以上）・低GI（55以下）の区分、量を加味したGLの考え方、サイトごとに数値が違う理由、今日からできる置き換え例まで解説します。",
});

const TOC = [
  { id: "quick", label: "結論：GI値一覧の使い方" },
  { id: "what", label: "GI値とは？" },
  { id: "table", label: "GI値一覧表（食品別の目安）" },
  { id: "why", label: "血糖値の急上昇が太りやすさにつながる理由" },
  { id: "gl", label: "GI値の弱点を補う「GL」という考え方" },
  { id: "change", label: "同じ食品でもGI値は変わる" },
  { id: "swap", label: "今日からできる置き換え例" },
  { id: "order", label: "食べ方でも血糖の上がり方は変わる" },
  { id: "caution", label: "GI値だけに頼らない" },
  { id: "experience", label: "細かい数値より、続けられる2つのルール" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

type GiLevel = "low" | "mid" | "high";

const GI_TABLE: { cat: string; items: { name: string; gi: string; level: GiLevel }[] }[] = [
  { cat: "ごはん・穀類", items: [
    { name: "白米", gi: "75〜88", level: "high" },
    { name: "餅", gi: "80前後", level: "high" },
    { name: "コーンフレーク", gi: "80前後", level: "high" },
    { name: "玄米", gi: "55〜68", level: "mid" },
    { name: "オートミール（ロールドオーツ）", gi: "55前後", level: "low" },
    { name: "大麦（押麦）", gi: "25〜45", level: "low" },
  ]},
  { cat: "パン", items: [
    { name: "フランスパン", gi: "90前後", level: "high" },
    { name: "食パン", gi: "70〜90", level: "high" },
    { name: "全粒粉パン", gi: "70前後", level: "high" },
    { name: "クロワッサン", gi: "65〜70", level: "mid" },
    { name: "ライ麦パン（ライ麦の多いもの）", gi: "50〜60", level: "mid" },
  ]},
  { cat: "麺", items: [
    { name: "うどん（報告で差が大きい）", gi: "55〜85", level: "mid" },
    { name: "そば（そば粉の多いもの。小麦粉が多いほど中GI寄り）", gi: "45〜60", level: "low" },
    { name: "パスタ（アルデンテ）", gi: "40〜55", level: "low" },
  ]},
  { cat: "いも・野菜", items: [
    { name: "じゃがいも（マッシュ）", gi: "80〜90", level: "high" },
    { name: "じゃがいも（ゆで）", gi: "70〜80", level: "high" },
    { name: "フライドポテト", gi: "60〜75", level: "mid" },
    { name: "さつまいも", gi: "55〜70", level: "mid" },
    { name: "かぼちゃ", gi: "65前後", level: "mid" },
    { name: "とうもろこし", gi: "50〜60", level: "low" },
    { name: "にんじん（ゆで）", gi: "40前後", level: "low" },
  ]},
  { cat: "果物", items: [
    { name: "すいか", gi: "70台", level: "high" },
    { name: "パイナップル", gi: "55〜65", level: "mid" },
    { name: "レーズン", gi: "60前後", level: "mid" },
    { name: "ぶどう", gi: "45〜60", level: "mid" },
    { name: "バナナ", gi: "50前後", level: "low" },
    { name: "キウイ", gi: "50前後", level: "low" },
    { name: "オレンジ", gi: "40前後", level: "low" },
    { name: "いちご", gi: "40前後", level: "low" },
    { name: "りんご", gi: "36前後", level: "low" },
  ]},
  { cat: "乳製品・豆・ナッツ", items: [
    { name: "牛乳", gi: "30〜40", level: "low" },
    { name: "ヨーグルト（無糖）", gi: "30〜40", level: "low" },
    { name: "ひよこ豆・レンズ豆", gi: "25〜35", level: "low" },
    { name: "大豆", gi: "15〜20", level: "low" },
    { name: "ナッツ類", gi: "15〜25", level: "low" },
  ]},
  { cat: "お菓子・甘いもの", items: [
    { name: "せんべい", gi: "80以上", level: "high" },
    { name: "ドーナツ", gi: "75前後", level: "high" },
    { name: "砂糖", gi: "65前後", level: "mid" },
    { name: "はちみつ", gi: "55〜65", level: "mid" },
    { name: "ポテトチップス", gi: "55〜60", level: "mid" },
    { name: "アイスクリーム", gi: "50前後", level: "low" },
    { name: "ミルクチョコレート", gi: "40前後", level: "low" },
  ]},
  { cat: "飲み物", items: [
    { name: "スポーツドリンク", gi: "75前後", level: "high" },
    { name: "炭酸飲料（加糖）", gi: "55〜65", level: "mid" },
    { name: "オレンジジュース", gi: "50前後", level: "low" },
    { name: "トマトジュース", gi: "30〜40", level: "low" },
  ]},
];

const GI_LEVEL_LABEL: Record<GiLevel, string> = { low: "低", mid: "中", high: "高" };

const SWAPS = [
  { from: "白米", to: "大麦入りごはん・雑穀米・玄米", point: "白米に大麦を1〜2割混ぜて炊くだけ。味もほとんど変わらず、食物繊維も増えます。大麦単体は低GIですが、1〜2割混ぜた麦ごはんは白米よりGI値が少し下がる程度です。それでも毎日食べる主食なので、効果が積み上がります。" },
  { from: "食パン（朝食）", to: "オートミール・ライ麦パン", point: "オートミールは牛乳やヨーグルトと合わせれば腹持ちも良く、時間がない朝でも作れます。細かく砕いたインスタントタイプはGI値が高めになりやすいので、粒の形が残るロールドオーツがおすすめ。全粒粉パンは食物繊維こそ多いものの、GI値は食パンと大差ないという報告が多い点には注意が必要です。" },
  { from: "うどん（昼食）", to: "そば", point: "立ち食いでも選べます。GI値の差は報告によって小さいこともありますが、そばはタンパク質と食物繊維もうどんより多めです。午後の眠気が軽くなる人もいます。" },
  { from: "ポテトサラダ", to: "豆サラダ・海藻サラダ", point: "じゃがいもは野菜に見えますが、主食並みの糖質源です。冷めたポテトサラダは血糖の上がり方が多少穏やかになるものの、マヨネーズを使うぶんカロリーは高め。豆類なら低GIでタンパク質も摂れます。" },
  { from: "菓子パン（間食）", to: "ナッツ・無糖ヨーグルト・高カカオチョコ", point: "間食こそ差が出ます。血糖の乱高下が小さくなるぶん、食後数時間で来る強い空腹がやわらぐ人もいます。" },
  { from: "スポーツドリンク・ジュース", to: "水・お茶・炭酸水", point: "スポーツドリンクは高GIです。オレンジジュースは表では低GIですが、コップ1杯で果物2〜3個分の糖を一気に摂れてしまい、噛まないぶん満腹感も残りません。GI値より「量を飲みやすい」ことが問題です。" },
];

const CHANGES = [
  { factor: "調理時間", desc: "パスタはアルデンテのほうが、しっかりゆでるよりGI値が低くなります。柔らかいほど消化が速く、血糖も上がりやすくなります。" },
  { factor: "加工の度合い", desc: "同じじゃがいもでも、マッシュポテト＞ゆでたじゃがいも。すりつぶす・粉にするほど値は上がります。ジュースと果物の差も同じ理屈です。" },
  { factor: "冷やす", desc: "ごはんやじゃがいもを冷ますと、一部のでんぷんが消化されにくい形に変化します。おにぎりや冷製パスタは、温かい状態より血糖の上がり方が穏やかになることがあります。" },
  { factor: "熟し具合", desc: "果物は熟すほど糖が増え、GI値も上がります。バナナは青いものより完熟のほうが高くなります。" },
  { factor: "一緒に食べるもの", desc: "脂質・タンパク質・食物繊維・酢と一緒に食べると、単体で食べるより上がり方は緩やかになります。" },
];

const FAQS = [
  {
    q: "低GIなら量を気にしなくていい？",
    a: "量は気にしてください。GI値は「上がり方」の指標で、カロリーとは別物です。玄米もナッツも食べすぎれば太ります。痩せるかどうかを決めるのはカロリー収支で、GI値はその上に乗せる質の話です。",
  },
  {
    q: "「低GI」と書かれたお菓子は食べてもいい？",
    a: "普通のお菓子よりはマシ、という程度です。低GI表示を免罪符にして量が増えるなら、むしろ逆効果になります。お菓子は低GIでもお菓子、という冷静さは必要です。",
  },
  {
    q: "GI値一覧の数字がサイトや本によって違うのはなぜ？数字は覚えるべき？",
    a: "測定に使った品種・産地・調理法・食べた人の数がそれぞれ違うからです。同じ白米でも、品種や炊き方で10以上ずれることは珍しくありません。数字を覚える必要はなく、「高・中・低のどこに入るか」と、「粒が残っているもの」「よく噛むもの」という大枠で見るのが現実的です。",
  },
  {
    q: "全粒粉パンや玄米なら低GI？",
    a: "玄米は白米より低めですが、多くは「中GI」です。全粒粉パンは食物繊維が多い一方、GI値は食パンと大差ないという報告が多く、低GIとは言いにくい食品です。パンでGI値を下げたいなら、ライ麦の多いパンやオートミールのほうが向いています。",
  },
  {
    q: "低GIの果物なら好きなだけ食べていい？",
    a: "りんごやいちごは低GIですが、糖質もカロリーもあります。1回に食べるのは片手に乗る程度（りんごなら半分ほど）を目安にしてください。ジュースやドライフルーツにすると量を食べやすくなるので、果物はなるべく生のまま食べるのがおすすめです。",
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
      h1="GI値一覧表｜主食・果物・お菓子・飲み物の目安と、太りにくい選び方"
      toc={TOC}
      faqs={FAQS}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「低GIパン」「低GIチョコ」——スーパーやコンビニでよく見かけるようになった言葉です。</p>
        <p>
          なんとなく体によさそうだけれど、実際に何を指しているのか説明できる人は多くありません。結論から言うと、GI値は
          <strong>「同じ糖質でも血糖の上がり方に差がある」ことを教えてくれる指標</strong>
          です。ただし、使い方を間違えると逆効果になることもあります。
        </p>
        <p>
          この記事では、主食・果物・お菓子・飲み物など約45品目の
          <a href="#table" className="text-green-700 underline hover:no-underline">GI値一覧表</a>
          と、実践的な使い方、そしてGI値だけでは判断できない部分まで解説します。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：GI値一覧の使い方
        </h2>
        <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span><strong>高GI（70以上）の代表は白米・食パン・餅・じゃがいも・せんべい・スポーツドリンク</strong>。低GI（55以下）の代表は大麦・オートミール・豆類・乳製品・りんご</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>数値は測定条件で大きくぶれるので、<strong>1の位ではなく「高・中・低」の区分で見る</strong></span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span>見直す価値が大きいのは、<strong>高GIで、しかも毎日たくさん食べるもの</strong>。多くの人にとっては主食と甘い飲み物</span></li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0">✓</span><span><strong>低GIでもカロリーはある</strong>。痩せるかどうかを決めるのは1日の総カロリーで、GI値はその補助</span></li>
          </ul>
          <p className="text-sm text-gray-700">
            食品ごとの数値は<a href="#table" className="text-green-700 underline hover:no-underline">GI値一覧表</a>、何から変えるかは<a href="#swap" className="text-green-700 underline hover:no-underline">置き換え例</a>をご覧ください。
          </p>
        </div>
      </section>

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
                  <td className="p-2 border border-green-100">血糖が急上昇。白米・食パン・せんべい・菓子パンなど</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">中GI</td>
                  <td className="p-2 border border-green-100 text-center">56〜69</td>
                  <td className="p-2 border border-green-100">中間。玄米・さつまいも・かぼちゃなど</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">低GI</td>
                  <td className="p-2 border border-green-100 text-center">55以下</td>
                  <td className="p-2 border border-green-100">緩やかに上昇。そば・大麦・豆類・乳製品・りんごなど</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            大まかな傾向として、
            <strong>精製されて白いもの・柔らかいものほど高GI、精製度が低く食物繊維が残っているものほど低GI</strong>
            になります。この一言を覚えておくだけで、店頭でもかなり判断しやすくなります。ただし例外もあり、全粒粉パンのように粉にしてしまうと、精製度が低くてもGI値はあまり下がりません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値一覧表（食品別の目安）
        </h2>
        <div className="space-y-4">
          <p>
            よく食べる食品を8つのグループに分けて、GI値の目安をまとめました。数値は国際GI表（Atkinson ら, 2008・2021）やシドニー大学のGIデータベースなどの報告値をもとに丸めたもので、
            <strong>品種・調理法・測定条件によってかなり幅が出ます</strong>
            。1の位の差は気にせず、「高・中・低のどこに入るか」を見てください。
          </p>
          <p className="text-sm text-gray-600">
            区分：<span className="font-bold text-green-700">低</span>＝55以下／
            <span className="font-bold text-amber-700">中</span>＝56〜69／
            <span className="font-bold text-red-700">高</span>＝70以上（ブドウ糖＝100。幅が境界をまたぐ食品は、代表的な報告値で区分しています）
          </p>
          <div className="space-y-5">
            {GI_TABLE.map((group) => (
              <div key={group.cat}>
                <h3 className="text-base font-bold text-gray-700 mb-2">{group.cat}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="w-[58%] text-left p-2 border border-green-100 font-semibold text-green-800">食品</th>
                        <th className="w-[27%] text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">GI値の目安</th>
                        <th className="w-[15%] text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">区分</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {group.items.map((item, i) => (
                        <tr key={item.name} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                          <td className="p-2 border border-green-100">{item.name}</td>
                          <td className={`p-2 border border-green-100 text-center font-bold whitespace-nowrap ${giClass(item.level)}`}>{item.gi}</td>
                          <td className={`p-2 border border-green-100 text-center font-bold ${giClass(item.level)}`}>{GI_LEVEL_LABEL[item.level]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <p>
            表を見て気づくのは、<strong>「体によさそう」と「低GI」は一致しない</strong>ことです。全粒粉パンは食パンとほぼ同じ高GIで、すいかも高GI。逆にアイスクリームやチョコレートは脂質のおかげで低GIに入り、ポテトチップスも白米より低めです。GI値はあくまで血糖の上がり方の指標で、ヘルシーかどうかの判定ではありません。
          </p>
          <p>
            また、肉・魚・卵や、葉物野菜・きのこ・海藻は糖質がごく少ないため、そもそもGI値の測定対象になりません（表にも載せていません）。つまり
            <strong>GI値を意識するというのは、実質「主食と間食の質を選ぶ」こと</strong>
            です。
          </p>
          <p className="text-xs text-gray-500">
            ※ 主な参考：Atkinson FS, et al. International tables of glycemic index and glycemic load values（2008年版 Diabetes Care／2021年版 American Journal of Clinical Nutrition）ほか。日本の食品は国内の報告値も参考にしています。
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
              { title: "急降下で「ニセの空腹」が来る", desc: "急に上がった血糖は、その後急に下がります。この落差で、食後2〜3時間なのに強い空腹や甘いものへの欲求が出ることがあります。間食が止まらない人は、意志の弱さではなく、ここに原因があることもあります。" },
              { title: "食後の眠気・だるさ", desc: "昼食後の強い眠気は、血糖が急に上がりやすい食事のあとに出やすいと感じる人が多いようです。主食を変えたら午後の体感が変わった、という人もいます。" },
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
          <ColumnFigure
            caption="高GIは「急に上がって急に下がる」。低GIはなだらか"
            alt="食後の血糖値の変化を表したイメージ図。高GIの食品は血糖が急上昇したあと急降下し、食前の水準より下がってニセの空腹が来る。低GIの食品はなだらかに上がってなだらかに戻る。"
            note="イメージ図（実測データではなく、縦軸に数値はありません）"
          >
            <GiCurveDiagram />
          </ColumnFigure>
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
            ことです。GI値は「その食品から糖質を50g摂ったとき」を基準に比べた数字なので、すいかのように1回に摂る糖質が少ない食品でも、高GIに分類されることがあります。
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
            分かりやすいのが<strong>すいか</strong>です。GI値は70台と高い部類ですが、1回に食べる量に含まれる糖質は多くありません。GLで計算すると小さめ1切れで1桁、大きめでも10前後で、茶碗1杯のごはん（約44）とは比べものになりません。
          </p>
          <ColumnFigure
            caption="GI値が近くても、食べる量を掛けたGLでは大きな差がつく"
            alt="すいかと白米の比較グラフ。GI値はすいか約72、白米約80とほぼ同じ高さ。GLにするとすいか小さめ1切れは約4、白米茶碗1杯は約44と大きく差がつく。"
            note="GL＝GI値×1食分の糖質量(g)÷100。数値は下の表と同じ目安"
          >
            <GlCompareDiagram />
          </ColumnFigure>
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
                  <td className="p-2 border border-green-100 font-medium">すいか 小さめ1切れ（約120g）</td>
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
              "食事全体で15〜20分かける（早食いだと順番の効果も出にくい）",
              "食前に酢の物やもずく酢を取り入れる",
              "主食だけで済ませない（うどん単品・菓子パン単品を避ける）",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            順番の効果と、期待しすぎないほうがいい点は
            <a href="/column/eating-order" className="text-green-700 underline hover:no-underline">食べる順番（ベジファースト）の記事</a>
            で詳しくまとめています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="caution" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値だけに頼らない
        </h2>
        <div className="space-y-3">
          {[
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
          細かい数値より、続けられる2つのルール
        </h2>
        <div className="space-y-4">
          <p>
            GI値を意識し始めると、表を見ながら1品ずつ管理したくなります。ただ、GI値は同じ食品でも調理法や食べ合わせで変わるうえ、実際の食事は単品ではなく組み合わせで食べるものです。
            <strong>表で細かく追おうとしても、計算としては成り立ちにくい</strong>
            のが実際のところです。
          </p>
          <p>実用になるのは、次の2つに絞ったルールです。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">主食を「白くて柔らかい」から「粒が残っているもの」に。</strong>
              白米に大麦を混ぜる、うどんをそばにする、朝の食パンをオートミールにする（全粒粉パンは色が茶色でもGI値はあまり変わりません）
            </p>
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">単品で食べない。</strong>
              丼もの・麺類だけで済ませず、タンパク質か野菜のおかずを1品つける
            </p>
          </div>
          <p>
            そのうえで、体重を決めるのはあくまで1日の総カロリーです。
            <strong>GI値はそれを置き換えるものではなく、食べすぎにくくするための補助</strong>
            として使うのが現実的です。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>主食は<strong>粒が残っているもの</strong>に。回数の多いものから1つずつ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>食材を変えなくても<strong>食べる順番と時間</strong>で上がり方は変えられる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>大前提は<strong>カロリー収支</strong>。低GI＝太らない、ではない</span></li>
          </ol>
          <p>
            「カロリーは守っているのに間食が止まらない」「午後の眠気がひどい」という人は、GI値を意識するだけで食事のつらさが変わるかもしれません。まずは今日の昼の主食から。
          </p>
          <p>
            適量がまだ分からない場合は、サクメシで必要カロリーとPFC、1週間分の献立を出しておくと、質と量を同時に整えられます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}

/** Conceptual blood-sugar curves after eating: high GI vs low GI. No numeric axis on purpose. */
function GiCurveDiagram() {
  return (
    <svg viewBox="0 0 640 385" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* axes */}
      <line x1="70" y1="40" x2="70" y2="340" stroke="#9CA3AF" strokeWidth="2" />
      <line x1="70" y1="340" x2="610" y2="340" stroke="#9CA3AF" strokeWidth="2" />
      <text x="80" y="36" fontSize="18" fill="#374151">血糖値</text>
      <text x="610" y="370" textAnchor="end" fontSize="18" fill="#374151">食後の時間 →</text>
      {/* fasting level */}
      <line x1="70" y1="240" x2="610" y2="240" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 6" />
      <text x="606" y="232" textAnchor="end" fontSize="16" fill="#9CA3AF">食前の水準</text>
      {/* high GI: spike then dip below fasting level */}
      <path
        d="M70 240 C 120 240, 140 70, 190 70 C 240 70, 260 296, 320 290 C 370 284, 420 242, 610 240"
        fill="none"
        stroke="#F57C00"
        strokeWidth="4"
        strokeDasharray="10 6"
      />
      {/* low GI: gentle rise and fall */}
      <path
        d="M70 240 C 140 240, 200 160, 280 160 C 360 160, 440 236, 610 240"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="5"
      />
      <text x="190" y="58" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#F57C00">急上昇</text>
      <text x="330" y="322" fontSize="18" fontWeight="bold" fill="#F57C00">急降下 → ニセの空腹</text>
      <text x="290" y="150" fontSize="18" fontWeight="bold" fill="#2E7D32">なだらか</text>
      {/* legend */}
      <line x1="370" y1="62" x2="410" y2="62" stroke="#F57C00" strokeWidth="4" strokeDasharray="10 6" />
      <text x="418" y="68" fontSize="18" fill="#374151">高GI（白米・食パンなど）</text>
      <line x1="370" y1="96" x2="410" y2="96" stroke="#4CAF50" strokeWidth="5" />
      <text x="418" y="102" fontSize="18" fill="#374151">低GI（そば・大麦など）</text>
    </svg>
  );
}

/** GI vs GL for watermelon and white rice (2 px per unit, baseline y=300). */
function GlCompareDiagram() {
  const bar = (x: number, value: number, fill: string, label: string, color: string) => (
    <g>
      <rect x={x} y={300 - value * 2} width="80" height={value * 2} rx="4" fill={fill} />
      <text x={x + 40} y={290 - value * 2} textAnchor="middle" fontSize="20" fontWeight="bold" fill={color}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="170" y="64" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#374151">GI値</text>
      <text x="470" y="64" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#374151">GL（量を加味）</text>
      <line x1="320" y1="40" x2="320" y2="360" stroke="#F3F4F6" strokeWidth="2" />
      <line x1="40" y1="300" x2="300" y2="300" stroke="#9CA3AF" strokeWidth="2" />
      <line x1="340" y1="300" x2="600" y2="300" stroke="#9CA3AF" strokeWidth="2" />
      {bar(70, 72, "#9CA3AF", "約72", "#374151")}
      {bar(190, 80, "#9CA3AF", "約80", "#374151")}
      {bar(370, 4, "#4CAF50", "約4", "#2E7D32")}
      {bar(490, 44, "#F57C00", "約44", "#F57C00")}
      {[
        { x: 110, name: "すいか", unit: "小さめ1切れ" },
        { x: 230, name: "白米", unit: "茶碗1杯" },
        { x: 410, name: "すいか", unit: "小さめ1切れ" },
        { x: 530, name: "白米", unit: "茶碗1杯" },
      ].map((l) => (
        <g key={l.x}>
          <text x={l.x} y="326" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#374151">{l.name}</text>
          <text x={l.x} y="350" textAnchor="middle" fontSize="16" fill="#9CA3AF">{l.unit}</text>
        </g>
      ))}
    </svg>
  );
}
