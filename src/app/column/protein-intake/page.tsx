import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "タンパク質は1日どれくらい必要？体重別の目安とプロテインの活用法 | サクメシ",
  description:
    "ダイエット中に必要なタンパク質量を体重別に解説。タンパク質が摂れる食品ランキング、プロテインが必要な人・不要な人の判断基準も紹介します。",
};

const TOC = [
  { id: "why", label: "なぜダイエット中こそタンパク質なのか" },
  { id: "how-much", label: "1日どれくらい必要？【体重別早見表】" },
  { id: "foods", label: "タンパク質が摂れる食品ランキング" },
  { id: "protein-powder", label: "プロテインは必要？不要？" },
  { id: "tips", label: "無理なくタンパク質を増やすコツ" },
  { id: "summary", label: "まとめ" },
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
        <p>「タンパク質が大事なのは分かってるけど、結局何をどれだけ食べればいいの？」</p>
        <p>
          ダイエットの相談を受けると、ほぼ全員がタンパク質不足です。僕自身、92kgから減量を始めた頃は1日50gも摂れていませんでした。タンパク質を意識しはじめてから、体の変わり方が明らかに違ってきた実感があります。
        </p>
        <p>
          この記事では、<strong>自分に必要なタンパク質量の出し方</strong>と、それを現実的に達成する方法を解説します。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜダイエット中こそタンパク質なのか
        </h2>
        <div className="space-y-4">
          <p>カロリーを減らすと、体は脂肪だけでなく筋肉も分解してエネルギーにしようとします。タンパク質が足りないと、この筋肉の分解が加速します。</p>
          <div className="space-y-2">
            {[
              { title: "筋肉を守る", desc: "筋肉が減ると基礎代謝が下がり、「食べてないのに痩せない体」になる。タンパク質は減量中の筋肉の材料。" },
              { title: "腹持ちが良い", desc: "三大栄養素の中で最も満腹感が持続する。間食が減り、結果的に総カロリーが下がる。" },
              { title: "食事誘発性熱産生（DIT）が高い", desc: "タンパク質は消化するだけで摂取カロリーの約30%を消費する（糖質は約6%、脂質は約4%）。食べるだけで代謝が上がる唯一の栄養素。" },
              { title: "髪・肌・爪の材料", desc: "不足すると痩せても「やつれた」印象になりがち。キレイに痩せるにはタンパク質が必須。" },
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
        <h2 id="how-much" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日どれくらい必要？【体重別早見表】
        </h2>
        <div className="space-y-4">
          <p>
            ダイエット中の目安は<strong>体重1kgあたり1.2〜1.6g</strong>。筋トレをしている人は1.6〜2.0gまで増やしてOKです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体重</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">運動なし（×1.2）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">筋トレあり（×1.6）</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  { w: "50kg", a: "60g", b: "80g" },
                  { w: "60kg", a: "72g", b: "96g" },
                  { w: "70kg", a: "84g", b: "112g" },
                  { w: "80kg", a: "96g", b: "128g" },
                  { w: "90kg", a: "108g", b: "144g" },
                ].map((row, i) => (
                  <tr key={row.w} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-2 border border-green-100 font-medium">{row.w}</td>
                    <td className="p-2 border border-green-100 text-center">{row.a}</td>
                    <td className="p-2 border border-green-100 text-center">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ ここでいう「タンパク質○g」は<strong>肉の重さではありません</strong>。鶏むね肉100gに含まれるタンパク質は約23g。「タンパク質70g＝鶏むね肉300g程度」というイメージです。
          </p>
          <p>
            例えば体重70kgで運動なしなら1日84g。1食に均等に割ると<strong>1食あたり約28g</strong>。実はこれ、意識しないとまず届かない量です。朝食がトーストとコーヒーだけだと、タンパク質はほぼゼロですから。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="foods" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          タンパク質が摂れる食品ランキング
        </h2>
        <div className="space-y-4">
          <p>「高タンパク・低脂質」の優秀な食品を、コスパも含めて紹介します。</p>
          <div className="space-y-3">
            {[
              { food: "鶏むね肉（皮なし）", detail: "100gでP23g・F2g。減量食の王様。安くて量も食べられる。" },
              { food: "卵", detail: "1個でP6g。ビタミン・ミネラルも豊富な完全栄養食。1日2〜3個が目安。" },
              { food: "サバ缶・ツナ缶（水煮）", detail: "1缶でP15〜25g。調理不要でストック可能。魚の良質な脂も摂れる。" },
              { food: "納豆・豆腐", detail: "納豆1パックでP8g、木綿豆腐半丁でP10g。植物性タンパク質で腸にも優しい。" },
              { food: "ギリシャヨーグルト", detail: "1個でP10g前後。間食やデザート代わりに最適。" },
              { food: "サラダチキン", detail: "1個でP20g前後。コンビニで買える手軽さが最大の武器。" },
            ].map((item, i) => (
              <div key={item.food} className="flex items-start gap-3 bg-white rounded-lg border border-green-100 p-3">
                <span className="font-bold text-green-600 shrink-0 w-6 text-center">{i + 1}</span>
                <div>
                  <p className="text-sm font-bold text-gray-700">{item.food}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            ポイントは<strong>「調理せずに食べられるもの」を常備しておく</strong>こと。疲れて自炊できない日でも、卵・サバ缶・ギリシャヨーグルトがあればタンパク質は確保できます。
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
            結論：<strong>食事で目標量を摂れるなら不要。摂れないなら便利な補助食品</strong>。それ以上でも以下でもありません。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">プロテインが向いている人</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・朝食を食べる習慣がない</li>
                <li>・昼が麺類・丼もの中心になりがち</li>
                <li>・筋トレしていて必要量が多い</li>
                <li>・間食でお菓子を食べてしまう</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">勘違いに注意</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>・飲むだけで痩せる魔法の粉ではない</li>
                <li>・飲むだけで筋肉がつくわけでもない</li>
                <li>・カロリーはある（1杯約100kcal）</li>
                <li>・食事の代わりにするのは非推奨</li>
              </ul>
            </div>
          </div>
          <p>
            選ぶなら定番の<strong>ホエイプロテイン</strong>でOK。牛乳でお腹を壊しやすい人はWPI製法か、大豆由来のソイプロテインを。1杯で約20gのタンパク質が100kcal前後で摂れるので、「あと20g足りない」を埋める道具としては非常に優秀です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          無理なくタンパク質を増やすコツ
        </h2>
        <div className="space-y-5">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 朝食に必ずタンパク質を入れる</p>
              <p>
                一番不足しやすいのが朝。卵かけごはん、納豆ごはん、ヨーグルト＋プロテインなど、<strong>朝に20g摂れると1日がとてもラク</strong>になります。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 「メインのおかず＝タンパク質源」で考える</p>
              <p>
                献立を考えるとき、まず「今日のタンパク質は何か（肉・魚・卵・大豆）」から決める。主食から決めると麺類・丼ものに流れてタンパク質が不足しがちです。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 一気に増やさない</p>
              <p>
                今まで50gだった人がいきなり120gを目指すと、胃腸がびっくりしてお腹を壊すことも。<strong>1日+20gずつ段階的に</strong>増やしていくのがおすすめです。
              </p>
            </div>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>目安は体重×1.2〜1.6g</strong>（筋トレするなら〜2.0g）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>3食に分けて摂る</strong>（特に朝食が重要）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>鶏むね・卵・サバ缶・大豆製品を常備</strong>する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>プロテインは「足りない分を埋める道具」</strong>として使う</span></li>
          </ol>
          <p>
            サクメシで食事プランを作ると、あなたの体格・目標に合わせたタンパク質量を自動計算して、それを満たす1週間分のメニューまで提案します。「何をどれだけ食べればいいか」を考えるのが面倒な方は、ぜひ試してみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
