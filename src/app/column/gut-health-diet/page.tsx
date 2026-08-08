import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/gut-health-diet" },
  title: "腸活×ダイエット｜食物繊維・発酵食品で痩せやすい体を作る | サクメシ",
  description:
    "腸活とダイエットの関係を、期待できることと分かっていないことに分けて解説。食物繊維の目標量と水溶性・不溶性の使い分け、発酵食品の摂り方、4週間の始め方まで紹介します。",
};

const TOC = [
  { id: "reality", label: "腸活で「痩せる」は本当か" },
  { id: "why", label: "腸活がダイエットに効く4つの経路" },
  { id: "fiber", label: "食物繊維は1日何グラム必要か" },
  { id: "two-types", label: "水溶性と不溶性の使い分け" },
  { id: "fermented", label: "発酵食品の選び方" },
  { id: "combination", label: "組み合わせて食べる（シンバイオティクス）" },
  { id: "start", label: "4週間の始め方" },
  { id: "bad-habits", label: "腸内環境を乱す習慣" },
  { id: "experience", label: "実際にやってみて変わったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const FIBER_FOODS = [
  { food: "オートミール（40g）", amount: "約4g", type: "水溶性が多い" },
  { food: "ごぼう（100g）", amount: "約6g", type: "両方" },
  { food: "納豆（1パック50g）", amount: "約3g", type: "両方" },
  { food: "アボカド（1個）", amount: "約5g", type: "両方" },
  { food: "しめじ・えのき（100g）", amount: "約3〜4g", type: "不溶性が多い" },
  { food: "わかめ・もずく（1食分）", amount: "約2〜3g", type: "水溶性が多い" },
  { food: "ブロッコリー（100g）", amount: "約4g", type: "不溶性が多い" },
  { food: "大麦入りごはん（茶碗1杯）", amount: "約2〜3g", type: "水溶性が多い" },
];

const FERMENTED = [
  { food: "ヨーグルト（無糖）", point: "毎日100〜200gを習慣に。加糖タイプは砂糖が多いので、甘さが欲しければ果物を足します。" },
  { food: "納豆", point: "1パックでたんぱく質約7g・食物繊維約3g。発酵食品と食物繊維を同時に摂れる稀な食材です。" },
  { food: "味噌（味噌汁）", point: "1日1杯を目安に。具をわかめ・きのこ・豆腐にすれば、それだけで食物繊維も乗ります。" },
  { food: "キムチ", point: "そのままでも炒め物にしても。ただし塩分が高いので、1食で食べる量は小皿1つ分まで。" },
  { food: "酢", point: "もずく酢や酢の物として。食事の最初に食べると、血糖の上がり方が緩やかになります。" },
];

const WEEKS = [
  { week: "1週目", task: "朝に納豆かヨーグルトを追加するだけ", why: "まず1品足すことに慣れる。この段階では減らすものはありません。" },
  { week: "2週目", task: "白米を大麦入りごはんに変える", why: "主食を置き換えるだけで、1日あたり3〜5g食物繊維が増えます。手間はゼロ。" },
  { week: "3週目", task: "夕食にきのこか海藻を1品足す", why: "調理が面倒ならカットわかめを味噌汁に入れるだけでも成立します。" },
  { week: "4週目", task: "間食を果物かナッツに置き換える", why: "ここまでで1日20g前後に届きます。菓子パンからの置き換えなのでカロリーも下がります。" },
];

const FAQS = [
  {
    q: "腸活を始めたらお腹が張るようになった",
    a: "食物繊維を急に増やしたときによく起きます。腸内細菌が発酵させる過程でガスが出るためで、多くは体が慣れると落ち着きます。それでもつらい場合は量を半分に戻し、1〜2週間かけて増やし直してください。症状が続くときは医療機関にご相談ください。",
  },
  {
    q: "ヨーグルトは同じ商品を食べ続けたほうがいい？",
    a: "菌の種類によって合う・合わないがあるので、2週間ほど続けて便通や体調の変化を見て、変わらなければ別の商品に変える、という試し方が現実的です。「これが正解」という商品はありません。",
  },
  {
    q: "サプリメントの食物繊維でもいい？",
    a: "不足分を補う手段としては使えます。ただし食品から摂れば、ビタミン・ミネラル・かさによる満腹感も一緒についてきます。まず食事から、足りない分をサプリで、の順番が無駄がありません。",
  },
  {
    q: "どれくらいで効果を感じる？",
    a: "便通の変化は1〜2週間で感じる人が多いです。体重への影響はもっと間接的で、数ヶ月単位の話になります。すぐに体重が動かなくても、途中でやめないことが前提の取り組みです。",
  },
];

export default function GutHealthDiet() {
  return (
    <ColumnShell
      slug="gut-health-diet"
      h1="腸活×ダイエット｜食物繊維・発酵食品で痩せやすい体を作る方法"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「腸活で痩せやすい体になる」——よく見かける言い方です。</p>
        <p>
          ただ、この表現は少し盛られています。最初に正直に書いておくと、
          <strong>腸内環境を整えれば自動的に体脂肪が減る、という関係は確立していません</strong>
          。
        </p>
        <p>
          それでも腸活がダイエットに有効なのは、
          <strong>やることの中身が結果的に減量に効く</strong>
          からです。この記事では、期待できることと分かっていないことを分けたうえで、具体的な進め方をまとめます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="reality" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          腸活で「痩せる」は本当か
        </h2>
        <div className="space-y-4">
          <p>腸内には多種多様な細菌が生息しており、そのバランスが健康と関係することは分かっています。一方で、次の点は整理しておく必要があります。</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">◎ はっきりしていること</p>
              <p className="text-sm text-gray-600">
                食物繊維を十分に摂ると、便通が改善し、食後の血糖の上がり方が緩やかになり、満腹感が続きやすくなる。結果として1日の摂取カロリーが下がりやすい。
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-bold text-amber-800 text-sm mb-1">△ まだ分かっていないこと</p>
              <p className="text-sm text-gray-600">
                特定の菌を増やせば痩せる、といった因果関係。腸内細菌と肥満の関連を示す研究はありますが、「この商品でこの菌を増やせば体脂肪が減る」と言える段階ではありません。
              </p>
            </div>
          </div>
          <p>
            つまり腸活は、
            <strong>魔法のスイッチではなく、食事の質を底上げする作業</strong>
            です。そう捉えたほうが、期待外れで途中でやめることがなくなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          腸活がダイエットに効く4つの経路
        </h2>
        <div className="space-y-2">
          {[
            { title: "満腹感が長持ちする", desc: "食物繊維は水分を含んでかさを増し、胃に留まる時間が長くなります。同じカロリーでも空腹が来るまでの時間が延びます。" },
            { title: "血糖の上がり方が緩やかになる", desc: "糖の吸収スピードが落ちるため、食後の眠気や、その反動で来る強い空腹が減ります。" },
            { title: "便通が整い、数字が読みやすくなる", desc: "便秘が続くと体重が1kg単位でぶれ、食事の効果が判断できなくなります。ここが安定すると調整がしやすくなります。" },
            { title: "食事の中身が自然に変わる", desc: "野菜・きのこ・海藻・発酵食品を足していくと、そのぶん揚げ物や菓子パンの入る余地が減ります。これが実は一番効きます。" },
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
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fiber" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食物繊維は1日何グラム必要か
        </h2>
        <div className="space-y-4">
          <p>
            日本人の食事摂取基準では、成人の食物繊維の目標量として
            <strong>男性21g以上、女性18g以上</strong>
            （18〜64歳）が示されています。一方、実際の平均摂取量は15g前後にとどまり、多くの人が数グラム足りていません。
          </p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">18〜21g</p>
                <p className="text-xs text-gray-500 mt-1">目標量 / 日</p>
              </div>
              <div className="text-2xl text-gray-300">vs</div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">約15g</p>
                <p className="text-xs text-gray-500 mt-1">日本人の平均</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            差は3〜6g。これは<strong>納豆1パック＋わかめの味噌汁1杯</strong>で埋まる量です。数字にすると絶望的に見えますが、実際にやることは1〜2品足すだけです。
          </p>
          <div className="space-y-2">
            <p className="text-sm font-bold text-gray-700">食物繊維が多い食品（1食分あたりの目安）</p>
            {FIBER_FOODS.map((item) => (
              <div key={item.food} className="bg-white rounded-lg border border-green-100 p-3 flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-gray-700">{item.food}</p>
                <div className="text-right shrink-0">
                  <span className="text-sm text-emerald-600 font-bold">{item.amount}</span>
                  <p className="text-xs text-gray-400">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="two-types" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          水溶性と不溶性の使い分け
        </h2>
        <div className="space-y-4">
          <p>食物繊維には2種類あり、働きが違います。どちらか一方に偏ると、かえって不調が出ることがあります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">種類</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">働き</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">多い食品</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">水溶性</td>
                  <td className="p-2 border border-green-100">水に溶けてゲル状になり、糖や脂質の吸収を緩やかにする。腸内細菌のエサになりやすい</td>
                  <td className="p-2 border border-green-100">海藻・大麦・オートミール・果物・こんにゃく</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">不溶性</td>
                  <td className="p-2 border border-green-100">水を吸って膨らみ、便のかさを増やして腸の動きを促す</td>
                  <td className="p-2 border border-green-100">きのこ・豆類・根菜・穀類の外皮・野菜全般</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="font-bold text-amber-800 text-sm mb-1">⚠ 便秘中に不溶性だけ増やすと悪化することがある</p>
            <p className="text-sm text-gray-600">
              便が硬い状態で不溶性ばかり増やすと、かさが増えて余計に出にくくなる場合があります。便秘気味なら
              <strong>水溶性（海藻・大麦・果物）と水分</strong>から先に増やしてください。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fermented" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          発酵食品の選び方
        </h2>
        <div className="space-y-4">
          <p>
            発酵食品で摂った菌の多くは腸に住み着かず、通過していくと考えられています。だからこそ
            <strong>毎日少量を続けること</strong>
            が、まとめて大量に摂るより意味を持ちます。
          </p>
          <div className="space-y-3">
            {FERMENTED.map((item) => (
              <div key={item.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">🦠 {item.food}</p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            注意：発酵食品は塩分が高いものが多いジャンルです（味噌・キムチ・漬物）。腸のためにと増やしすぎると、今度は塩分の摂りすぎになります。1日1〜2品を目安に。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="combination" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          組み合わせて食べる（シンバイオティクス）
        </h2>
        <div className="space-y-4">
          <p>
            腸内細菌のエサになる食物繊維（プレバイオティクス）と、菌そのものを含む発酵食品（プロバイオティクス）を
            <strong>一緒に摂る</strong>
            考え方をシンバイオティクスと呼びます。難しく聞こえますが、実態はごく普通の和食です。
          </p>
          <div className="space-y-3">
            {[
              { meal: "朝食", example: "オートミール＋無糖ヨーグルト＋バナナ", point: "水溶性食物繊維＋乳酸菌。作るのに3分もかかりません" },
              { meal: "昼食", example: "大麦ごはんのおにぎり＋納豆＋わかめの味噌汁", point: "日本の定食がそのまま腸活メニューになっています" },
              { meal: "夕食", example: "鶏むね肉＋きのこ炒め＋キムチ＋豆腐の味噌汁", point: "たんぱく質・食物繊維・発酵食品が1食に揃う形" },
            ].map((item) => (
              <div key={item.meal} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">{item.meal}</h3>
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-sm font-bold text-gray-700">{item.example}</p>
                  <p className="text-xs text-gray-500">{item.point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="start" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          4週間の始め方
        </h2>
        <div className="space-y-4">
          <p>
            一番よくある失敗が、
            <strong>初日から全部やろうとしてお腹を壊すこと</strong>
            です。食物繊維は急に増やすとガスや張りが出ます。1週間ごとに1つずつ足していくのが確実です。
          </p>
          <div className="space-y-2">
            {WEEKS.map((w) => (
              <div key={w.week} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs bg-green-600 text-white font-bold px-2 py-1 rounded">{w.week}</span>
                  <p className="text-sm font-bold text-gray-800">{w.task}</p>
                </div>
                <p className="text-xs text-gray-500">{w.why}</p>
              </div>
            ))}
          </div>
          <p>
            水分も一緒に増やしてください。食物繊維は水を吸って働くので、
            <strong>繊維だけ増やして水が足りないと、かえって便が出にくくなります</strong>。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="bad-habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          腸内環境を乱す習慣
        </h2>
        <div className="space-y-3">
          {[
            { habit: "野菜・きのこ・海藻をほぼ食べない", desc: "腸内細菌のエサが入ってこない状態です。外食中心の生活では起きやすいので、1食1品を目安に足してください。" },
            { habit: "極端な糖質制限を長く続ける", desc: "主食を全部抜くと、穀類由来の食物繊維がまるごと失われます。糖質を減らすなら、大麦や雑穀を少量残すほうが腸には優しくなります。" },
            { habit: "睡眠不足とストレス", desc: "腸の動きは自律神経の影響を受けます。食事だけ整えても、寝ていなければ便通は乱れます。" },
            { habit: "アルコールの飲みすぎ", desc: "腸の粘膜や細菌のバランスに影響します。休肝日を作ることは腸活としても意味があります。" },
          ].map((item) => (
            <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="font-bold text-red-700 text-sm mb-1">❌ {item.habit}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          ※ 抗生物質の服用中・服用後に腸の調子が変わることがありますが、服薬の判断は必ず医師に従ってください。自己判断で中断しないでください。
        </p>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          実際にやってみて変わったこと
        </h2>
        <div className="space-y-4">
          <p>
            減量中、体重が思うように動かない時期に腸活を始めました。正直に言うと、
            <strong>腸活そのもので体重が落ちた実感はありません</strong>
            。落ちたのはやはりカロリーを調整したときでした。
          </p>
          <p>
            ただ、はっきり変わったことがあります。<strong>体重の数字が読めるようになった</strong>ことです。便通が不安定だった頃は、朝の体重が日によって1kg以上ぶれ、食事の調整が効いているのかどうか判断できませんでした。ここが安定してから、増減の原因を切り分けられるようになりました。
          </p>
          <p>
            もうひとつは、夕方の空腹です。昼に大麦ごはんとわかめの味噌汁を足すようにしてから、16時台にコンビニへ行く回数が減りました。
            <strong>結果的にカロリーが下がったのは、この部分だったと思っています</strong>。
          </p>
          <p>
            失敗もしました。最初の週にオートミール・ごぼう・きのこ・納豆を一気に足したら、2日でお腹が張って動けなくなりました。上の4週間プランを段階的に組んでいるのは、その反省からです。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>腸活は<strong>直接痩せる方法ではなく、食事の質を底上げする作業</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>食物繊維の目標は<strong>男性21g・女性18g以上</strong>。平均との差は3〜6g</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>水溶性と不溶性を両方</strong>。便秘気味なら水溶性と水分から</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>発酵食品は<strong>毎日少量</strong>。まとめて摂っても意味が薄い</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>1週間に1つずつ</strong>足す。一気に増やすとお腹が張る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>便通が安定すると<strong>体重の数字が読めるようになる</strong></span></li>
          </ol>
          <p>
            腸活は2〜4週間続けて、ようやく便通や空腹の感じ方に変化が出てくるものです。体重の数字を追うより、続けやすい形にすることを優先してください。
          </p>
          <p>
            サクメシで食事プランを作れば、必要なカロリーとPFCを守ったうえで、きのこ・海藻・発酵食品を含む1週間分の献立が出せます。何を足せばいいか迷ったら使ってみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
