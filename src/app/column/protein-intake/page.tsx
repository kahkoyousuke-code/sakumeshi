import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/protein-intake" },
  title: "タンパク質は1日どれくらい必要？体重別の目安とプロテインの活用法 | サクメシ",
  description:
    "ダイエット中に必要なタンパク質量を体重別に解説。食品100gあたりの含有量一覧、1日の組み立て例、朝食で不足しやすい理由、プロテインの選び方、摂りすぎの注意点まで紹介します。",
};

const TOC = [
  { id: "why", label: "なぜダイエット中こそタンパク質なのか" },
  { id: "standard", label: "「推奨量」と「減量中の目安」は別物" },
  { id: "how-much", label: "1日どれくらい必要？【体重別早見表】" },
  { id: "content", label: "食品に含まれるタンパク質量の一覧" },
  { id: "plan", label: "1日の組み立て例" },
  { id: "morning", label: "不足の原因はだいたい朝食" },
  { id: "protein-powder", label: "プロテインは必要？不要？" },
  { id: "toomuch", label: "摂りすぎるとどうなる？" },
  { id: "tips", label: "無理なく増やすコツ" },
  { id: "experience", label: "1日50gから100gに増やして変わったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const FOODS = [
  { cat: "肉", items: [
    { name: "鶏むね肉（皮なし）100g", p: "約23g", note: "脂質2g前後。減量食の主役" },
    { name: "鶏ささみ 100g", p: "約24g", note: "さらに低脂質。パサつくので調理に工夫を" },
    { name: "豚ヒレ 100g", p: "約22g", note: "豚肉の中では最も低脂質" },
    { name: "牛もも赤身 100g", p: "約21g", note: "鉄分も同時に摂れる" },
  ]},
  { cat: "魚", items: [
    { name: "まぐろ赤身 100g", p: "約26g", note: "刺身でそのまま食べられる" },
    { name: "鮭 1切れ（80g）", p: "約18g", note: "焼くだけ。冷凍ストックしやすい" },
    { name: "さば水煮缶 1缶（190g）", p: "約26g", note: "調理不要。良質な脂も摂れる" },
    { name: "ツナ水煮缶 1缶（70g）", p: "約12g", note: "オイル漬けでなく水煮を選ぶ" },
  ]},
  { cat: "卵・大豆・乳", items: [
    { name: "卵 1個", p: "約6g", note: "ゆで卵を常備しておくと足しやすい" },
    { name: "納豆 1パック（50g）", p: "約8g", note: "食物繊維も同時に摂れる" },
    { name: "木綿豆腐 1/2丁（150g）", p: "約10g", note: "主食を減らしたときの穴埋めに" },
    { name: "ギリシャヨーグルト 1個（100g）", p: "約10g", note: "間食の枠として優秀" },
    { name: "牛乳 200ml", p: "約7g", note: "プロテインを溶かせば合計27g" },
  ]},
  { cat: "参考：主食", items: [
    { name: "ごはん 茶碗1杯（150g）", p: "約4g", note: "主食からはほとんど摂れない" },
    { name: "食パン 6枚切1枚", p: "約6g", note: "同上。おかずで確保する必要がある" },
  ]},
];

const FAQS = [
  {
    q: "1食で40g以上摂っても意味がない、と聞いた",
    a: "1回に使える量には上限があるという考え方はありますが、上限を超えた分がまったく無駄になるわけではありません。それよりも1日の合計を確保するほうが重要です。そのうえで、3〜4回に分けたほうが摂りやすいので、結果的に分散を勧めています。",
  },
  {
    q: "植物性と動物性、どちらがいい？",
    a: "動物性のほうが必要なアミノ酸を揃えやすいのは事実ですが、大豆製品も優秀です。どちらか一方に決める必要はなく、両方から摂るほうが脂質の質や食物繊維の面でもバランスが取れます。",
  },
  {
    q: "プロテインを飲むと腎臓に悪い？",
    a: "健康な人が一般的な範囲で摂る分には、腎機能を悪化させるという明確な根拠はないとされています。ただし腎臓に病気がある方は制限が必要なので、必ず主治医の指示に従ってください。",
  },
  {
    q: "高齢の親にも同じ量が必要？",
    a: "高齢になると、同じ量のタンパク質から筋肉を作る効率が落ちるとされ、むしろ意識して摂る必要があります。ただし腎機能などの個別事情があるため、量については医師・管理栄養士に相談してください。",
  },
  {
    q: "サラダチキンばかりで飽きた",
    a: "同じ食材でも味付けを変えるほうが手間がかかりません。塩麹・カレー粉・ハーブソルト・味噌など。あるいは魚の缶詰・卵・豆腐とローテーションを組むと続きます。",
  },
];

export default function ProteinIntake() {
  return (
    <ColumnShell
      slug="protein-intake"
      h1="タンパク質は1日どれくらい必要？体重別の目安とプロテインの活用法"
      toc={TOC}
      ctaLabel="サクメシで高タンパクな食事プランを作る →"
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「タンパク質が大事なのは分かっているけれど、結局何をどれだけ食べればいいのか」</p>
        <p>
          ダイエットの相談を受けると、ほぼ全員がタンパク質不足です。自分も92kgから減量を始めた頃は、1日50gも摂れていませんでした。ここを意識してから、
          <strong>同じカロリーでも空腹のつらさがまったく違った</strong>
          のを覚えています。
        </p>
        <p>この記事では、必要量の出し方と、それを現実的に達成する方法を具体的にまとめます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜダイエット中こそタンパク質なのか
        </h2>
        <div className="space-y-4">
          <p>カロリーを減らすと、体は脂肪だけでなく筋肉も分解してエネルギーに回そうとします。タンパク質が足りないと、この分解が進みやすくなります。</p>
          <div className="space-y-2">
            {[
              { title: "筋肉を守る", desc: "筋肉が減ると消費エネルギーの土台が下がり、「食べていないのに落ちない」状態になります。タンパク質は減量中の筋肉の材料です。" },
              { title: "腹持ちが良い", desc: "三大栄養素の中で最も満腹感が続きます。間食が減り、結果的に1日の合計カロリーが下がります。" },
              { title: "食事誘発性熱産生が高い", desc: "食べたものを消化・吸収するときにもエネルギーを使います。タンパク質はこの割合が約30%と高く、糖質の約6%、脂質の約4%と比べて突出しています。" },
              { title: "髪・肌・爪の材料でもある", desc: "不足すると、痩せても「やつれた」印象になりがちです。体重だけでなく見え方にも関わります。" },
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
        <h2 id="standard" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「推奨量」と「減量中の目安」は別物
        </h2>
        <div className="space-y-4">
          <p>
            ここを混同している人がとても多いので、先に整理します。公的な食事摂取基準に示されている
            <strong>推奨量は、健康を維持するために必要な量</strong>
            であって、減量中に筋肉を守るための量ではありません。
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">公的基準の推奨量</p>
              <p className="text-sm text-gray-600">
                健康な人が普通に生活するうえで不足しないための水準。カロリーが足りている前提で設定されています。
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">減量中の実務的な目安</p>
              <p className="text-sm text-gray-600">
                カロリーが不足している状態では、体はタンパク質もエネルギー源に回します。そのぶんを見込んで、
                <strong>推奨量より多めに設定する</strong>のが一般的です。
              </p>
            </div>
          </div>
          <p>
            この記事で挙げる「体重×1.2〜1.6g」は、後者の実務的な目安です。
            <strong>公的基準を超える設定なので、腎臓に持病がある方は必ず主治医に相談してください</strong>
            。制限を受けている方には当てはまりません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how-much" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日どれくらい必要？【体重別早見表】
        </h2>
        <div className="space-y-4">
          <p>
            ダイエット中の目安は<strong>体重1kgあたり1.2〜1.6g</strong>。筋トレをしている場合は1.6〜2.0gまで増やしてかまいません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体重</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">運動なし（×1.2）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">筋トレあり（×1.6）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1食あたり（×1.2の場合）</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  { w: "50kg", a: "60g", b: "80g", c: "20g" },
                  { w: "60kg", a: "72g", b: "96g", c: "24g" },
                  { w: "70kg", a: "84g", b: "112g", c: "28g" },
                  { w: "80kg", a: "96g", b: "128g", c: "32g" },
                  { w: "90kg", a: "108g", b: "144g", c: "36g" },
                ].map((row, i) => (
                  <tr key={row.w} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-2 border border-green-100 font-medium">{row.w}</td>
                    <td className="p-2 border border-green-100 text-center">{row.a}</td>
                    <td className="p-2 border border-green-100 text-center">{row.b}</td>
                    <td className="p-2 border border-green-100 text-center">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ ここでいう「タンパク質○g」は<strong>肉の重さではありません</strong>。鶏むね肉100gに含まれるタンパク質は約23g。「タンパク質70g＝鶏むね肉300g程度」というイメージです。
          </p>
          <p>
            体重が大きく重い方の場合、現体重で計算すると相当な量になります。その場合は
            <strong>目標体重や標準体重で計算する</strong>
            ほうが現実的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="content" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食品に含まれるタンパク質量の一覧
        </h2>
        <div className="space-y-4">
          <p>よく使う食品のおおよその含有量です。数字を持っておくと、その場で足し算ができるようになります。</p>
          <div className="space-y-4">
            {FOODS.map((group) => (
              <div key={group.cat}>
                <p className="text-sm font-bold text-gray-600 mb-2">{group.cat}</p>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-2.5 border border-green-100">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.note}</p>
                      </div>
                      <span className="text-sm font-bold text-green-700 whitespace-nowrap">{item.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>
            最後の「参考：主食」を見ると分かるとおり、
            <strong>ごはんやパンからはほとんど摂れません</strong>
            。麺類や丼もので済ませた食事は、カロリーは十分でもタンパク質は10g前後、ということが普通に起きます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="plan" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日の組み立て例
        </h2>
        <div className="space-y-4">
          <p>体重70kg・目標84gの場合の、現実的な組み立てです。</p>
          <div className="space-y-3">
            {[
              { meal: "朝食", menu: "卵2個＋納豆1パック＋ごはん", p: "約24g" },
              { meal: "昼食", menu: "サラダチキン＋おにぎり＋海藻サラダ", p: "約27g" },
              { meal: "間食", menu: "ギリシャヨーグルト（無糖）", p: "約10g" },
              { meal: "夕食", menu: "鮭1切れ＋木綿豆腐半丁＋味噌汁＋ごはん", p: "約31g" },
            ].map((row) => (
              <div key={row.meal} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-green-700 text-sm">{row.meal}</p>
                  <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{row.p}</span>
                </div>
                <p className="text-sm text-gray-600">{row.menu}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm">合計 約92g</p>
            <p className="text-sm text-gray-600 mt-1">
              特別なものは何も入っていません。プロテインすら使っていない構成です。
              <strong>毎食に1〜2品タンパク源を置く</strong>だけで、この水準には届きます。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="morning" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          不足の原因はだいたい朝食
        </h2>
        <div className="space-y-4">
          <p>タンパク質が足りない人の食事を見ると、ほぼ例外なく朝が薄い。よくあるパターンを並べます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">朝食の内容</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">タンパク質</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100">トースト＋コーヒー</td>
                  <td className="p-2 border border-green-100 text-center text-red-600 font-bold">約6g</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100">菓子パン1個</td>
                  <td className="p-2 border border-green-100 text-center text-red-600 font-bold">約7g</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100">グラノーラ＋牛乳</td>
                  <td className="p-2 border border-green-100 text-center text-amber-600 font-bold">約12g</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100">卵かけごはん＋納豆＋味噌汁</td>
                  <td className="p-2 border border-green-100 text-center text-green-700 font-bold">約22g</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100">ギリシャヨーグルト＋ゆで卵＋バナナ</td>
                  <td className="p-2 border border-green-100 text-center text-green-700 font-bold">約22g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            差は<strong>1食で15g以上</strong>。ここが埋まるだけで、昼と夜の負担が大きく減ります。朝に20g摂れると、その日1日がとても楽になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="protein-powder" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          プロテインは必要？不要？
        </h2>
        <div className="space-y-4">
          <p>
            結論は<strong>「食事で目標量を摂れるなら不要。摂れないなら便利な補助食品」</strong>。それ以上でも以下でもありません。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">向いている人</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・朝食を食べる習慣がない</li>
                <li>・昼が麺類・丼もの中心になりがち</li>
                <li>・筋トレしていて必要量が多い</li>
                <li>・間食でお菓子を食べてしまう</li>
                <li>・自炊する時間がない</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">勘違いに注意</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・飲むだけで痩せる粉ではない</li>
                <li>・飲むだけで筋肉がつくわけでもない</li>
                <li>・カロリーはある（1杯約100kcal）</li>
                <li>・食事の代わりにするのは非推奨</li>
                <li>・味付きは糖質が入っている商品もある</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-gray-700">種類の選び方</p>
            {[
              { type: "ホエイ（WPC）", desc: "定番。価格が手ごろで吸収も速い。まずはこれで問題ありません" },
              { type: "ホエイ（WPI）", desc: "乳糖を減らした製法。牛乳でお腹を壊しやすい人はこちら" },
              { type: "カゼイン", desc: "吸収が緩やか。就寝前に使う人向け" },
              { type: "ソイ（大豆）", desc: "植物性。乳製品を避けたい人に。腹持ちは良い" },
            ].map((t) => (
              <div key={t.type} className="bg-white rounded-lg px-4 py-3 border border-green-100">
                <p className="text-sm"><strong className="text-green-700">{t.type}</strong>　<span className="text-gray-600">{t.desc}</span></p>
              </div>
            ))}
          </div>
          <p>
            1杯で約20gのタンパク質が100kcal前後で摂れるので、
            <strong>「あと20g足りない」を埋める道具</strong>
            としては非常に優秀です。逆に言えば、それ以上の役割はありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="toomuch" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          摂りすぎるとどうなる？
        </h2>
        <div className="space-y-4">
          <p>「多ければ多いほどいい」ではありません。増やすときに知っておきたい点です。</p>
          <div className="space-y-2">
            {[
              { title: "カロリーオーバーになる", desc: "タンパク質にも1gあたり4kcalあります。他を減らさずに増やせば、当然総カロリーが増えて太ります。増やすなら、脂質か糖質の枠を減らしてください。" },
              { title: "お腹が張る・ゆるくなる", desc: "急に増やすと胃腸が対応しきれないことがあります。1日20gずつ段階的に増やしてください。" },
              { title: "他の栄養が入らなくなる", desc: "肉と卵ばかりになると、食物繊維やビタミンが不足します。野菜・きのこ・海藻の枠は必ず残してください。" },
              { title: "腎臓に持病がある場合は制限が必要", desc: "健康な人が一般的な範囲で摂る分には問題ないとされていますが、腎機能に問題がある場合は話が別です。必ず主治医の指示に従ってください。" },
            ].map((item) => (
              <div key={item.title} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-bold text-amber-800 text-sm mb-1">⚠ {item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          無理なく増やすコツ
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 朝食に必ず入れる</p>
              <p>一番不足しやすいのが朝です。卵かけごはん、納豆ごはん、ヨーグルト＋ゆで卵など。<strong>朝に20g摂れると1日が楽になります</strong>。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 「今日の主菜は何か」から献立を決める</p>
              <p>主食から決めると、麺類・丼ものに流れてタンパク質が不足します。肉・魚・卵・大豆のどれにするかを先に決めてください。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 調理せずに食べられるものを常備する</p>
              <p>ゆで卵・サバ缶・納豆・ギリシャヨーグルト・豆腐。疲れて自炊できない日でも、これらがあれば確保できます。<strong>できない日の底上げが合計を変えます</strong>。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 一気に増やさない</p>
              <p>50gだった人がいきなり120gを目指すと、胃腸が対応しきれずお腹を壊すことがあります。1日+20gずつ、1〜2週間かけて増やしてください。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日50gから100gに増やして変わったこと
        </h2>
        <div className="space-y-4">
          <p>
            減量を始めた当初、記録をつけてみたら
            <strong>1日のタンパク質が50g前後しかありませんでした</strong>
            。朝はトーストとコーヒー、昼はうどんかパスタ、夜だけまともに肉を食べる。これで足りているつもりでいました。
          </p>
          <p>
            まず朝を卵と納豆に変えました。それだけで+18g。次に昼の主食単品をやめて、サラダチキンかゆで卵を足すようにして+20g。
            <strong>特別なことは何もしていないのに、2週間で100g前後に届きました</strong>。
          </p>
          <p>
            変わったのは体重の落ち方より
            <strong>空腹のつらさ</strong>
            です。同じカロリーなのに、夕方に猛烈に何か食べたくなる感じが明らかに減りました。減量が続くようになったのは、間違いなくここからです。
          </p>
          <p>
            失敗もあります。効果を感じて一気に150gまで増やした時期があり、お腹が張って苦しくなりました。あと、肉と卵ばかりになって野菜が減り、便通が悪化した。
            <strong>増やすときは、何かを減らす前提で組み直す</strong>
            必要があります。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>減量中の目安は<strong>体重×1.2〜1.6g</strong>（筋トレするなら〜2.0g）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>公的な<strong>推奨量とは別の設定</strong>。腎臓に持病がある方は医師に相談</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>主食からはほとんど摂れない</strong>。麺・丼の単品は10g前後にしかならない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>不足の原因は<strong>だいたい朝食</strong>。ここで20g摂れると1日が楽になる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>調理不要のもの</strong>（卵・缶詰・納豆・ヨーグルト）を常備する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>プロテインは<strong>足りない分を埋める道具</strong>。1日20gずつ段階的に増やす</span></li>
          </ol>
          <p>
            まずは3日でいいので、今のタンパク質量を記録してみてください。ほとんどの人が、思っているより30〜40g少ないはずです。
          </p>
          <p>
            サクメシで食事プランを作ると、体格と目標に合わせたタンパク質量を計算して、それを満たす1週間分のメニューまで提案します。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
