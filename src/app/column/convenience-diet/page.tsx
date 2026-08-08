import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/convenience-diet" },
  title: "コンビニで買えるダイエット飯の選び方｜セブン・ファミマ・ローソン別おすすめ | サクメシ",
  description:
    "コンビニ食でダイエットを続ける方法を解説。栄養成分表示の読み方、朝昼夜・間食別の組み合わせ例、チェーン別のおすすめ商品、ヘルシーに見えて実は高カロリーな商品まで紹介します。",
};

const TOC = [
  { id: "basics", label: "コンビニで見るべき3つの基準" },
  { id: "label", label: "栄養成分表示の読み方" },
  { id: "combo", label: "シーン別・組み合わせパターン" },
  { id: "seven", label: "セブン-イレブン" },
  { id: "famima", label: "ファミリーマート" },
  { id: "lawson", label: "ローソン" },
  { id: "trap", label: "ヘルシーに見えて実は高カロリーなもの" },
  { id: "avoid", label: "避けたい商品" },
  { id: "experience", label: "コンビニ昼食を1年続けた話" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const COMBOS = [
  {
    scene: "朝食（約350kcal・P約28g）",
    icon: "🌅",
    items: ["ギリシャヨーグルト（無糖）", "ゆで卵1個", "バナナ1本", "ブラックコーヒー"],
    note: "朝にタンパク質を入れておくと、昼と夕方の食欲が落ち着きます。忙しい朝でもレジ前で完結します。",
  },
  {
    scene: "昼食A（約350kcal・P約30g）",
    icon: "🍙",
    items: ["サラダチキン（プレーン）", "おにぎり1個（鮭・昆布など）", "海藻サラダ", "お茶"],
    note: "コンビニ昼食の基本形。サラダ→チキン→おにぎりの順に食べると、午後の眠気が軽くなります。",
  },
  {
    scene: "昼食B（約420kcal・P約25g）",
    icon: "🥗",
    items: ["蒸し鶏と野菜のサラダ", "おにぎり1個", "インスタント味噌汁"],
    note: "サラダ主体にしたいとき用。汁物を足すと満足感が上がり、午後の間食が減ります。",
  },
  {
    scene: "夕食（約400kcal・P約35g）",
    icon: "🌙",
    items: ["豆腐（小パック）", "サラダチキンまたは焼き魚パック", "カットキャベツ", "納豆1パック"],
    note: "帰宅が遅い日向け。主食を抜くのではなく、量を半分にして残す方が翌朝の食欲が安定します。",
  },
  {
    scene: "間食（100〜150kcal）",
    icon: "🥜",
    items: ["ゆで卵1個（約75kcal）", "ギリシャヨーグルト（約65kcal）", "素焼きアーモンド小袋（約120kcal）", "するめ・あたりめ"],
    note: "菓子パンを1個買う代わりにこのどれかにするだけで、1日あたり200〜300kcal変わります。",
  },
];

const TRAPS = [
  { name: "野菜たっぷりサラダ＋ドレッシング全量", why: "サラダ自体は30kcal前後でも、シーザーやごまドレッシングを1袋かけると+100〜150kcal。半分だけかける、ノンオイルを選ぶ、で解決します。" },
  { name: "グラノーラ・シリアルバー", why: "健康食品の見た目ですが、砂糖と油脂で固めてあるものが多く1本200kcal前後。原材料の最初のほうに砂糖が来ていたら間食用と割り切ります。" },
  { name: "スムージー・野菜ジュース", why: "果汁が主体だと糖質が20〜30g入ります。飲み物で糖質を摂ると満腹感が残らないので、同じカロリーなら食べ物に回すほうが有利です。" },
  { name: "春雨スープ・カップスープ", why: "低カロリーですが、タンパク質がほぼゼロ。これ1つを昼食にすると2時間後に空腹が来ます。必ずタンパク質と組み合わせてください。" },
  { name: "サラダパスタ・サンドイッチ", why: "野菜が乗っていても土台は炭水化物と脂質です。マヨネーズ系の具材だと1個で400kcalを超えることもあります。" },
];

const FAQS = [
  {
    q: "コンビニ食だけで栄養は足りる？",
    a: "カロリーとPFCは十分に組めますが、ビタミン・ミネラル・食物繊維は不足しがちです。サラダ・海藻・果物・納豆のどれかを毎食1品足すことで、かなり補えます。",
  },
  {
    q: "サラダチキンは毎日食べても大丈夫？",
    a: "問題ありませんが、塩分がやや高めの商品が多いので、ほかの食事の塩分と合わせて考えてください。同じものばかりだと飽きるので、ゆで卵・豆腐・魚の缶詰などとローテーションするほうが続きます。",
  },
  {
    q: "おにぎりは食べないほうがいい？",
    a: "食べて問題ありません。むしろ主食を完全に抜くと、夕方以降の食欲が跳ね上がります。1食1個を基準にして、揚げ物や甘い飲み物のほうを削るほうが効率的です。",
  },
  {
    q: "コンビニは自炊より高くつく？",
    a: "1食あたりの金額は高くなります。ただ、自炊が続かずに結局買い食いするより、コンビニで安定して選べるほうが結果は出ます。続けられる方を選んでください。",
  },
];

function ProductList({ items }: { items: { name: string; kcal: string; point: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.name} className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-1">
            <p className="text-sm font-bold text-gray-800">{item.name}</p>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{item.kcal}</span>
          </div>
          <p className="text-xs text-gray-500">{item.point}</p>
        </div>
      ))}
    </div>
  );
}

export default function ConvenienceDiet() {
  return (
    <ColumnShell
      slug="convenience-diet"
      h1="コンビニで買えるダイエット飯の選び方｜セブン・ファミマ・ローソン別おすすめ商品を解説"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「忙しくて、どうしてもコンビニに頼ってしまう」</p>
        <p>
          結論から言うと、
          <strong>コンビニ食だけでも体重は落とせます</strong>
          。むしろ全商品に栄養成分表示があるぶん、外食よりカロリー管理はしやすいくらいです。
        </p>
        <p>この記事では、商品名を覚えなくても使える判断基準と、シーン別の組み合わせ例、そして「ヘルシーそうで実は」という落とし穴をまとめます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="basics" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          コンビニで見るべき3つの基準
        </h2>
        <div className="space-y-4">
          <p>商品は入れ替わりますが、選ぶ基準は変わりません。この3つだけ覚えておけば十分です。</p>
          <div className="space-y-3">
            {[
              { label: "① タンパク質を必ず1品入れる", desc: "サラダチキン・ゆで卵・豆腐・納豆・ギリシャヨーグルト・魚の缶詰。1食あたり20g以上を目安にします。ここが抜けると、2〜3時間後に必ず空腹が来ます。" },
              { label: "② 主食は1つまで", desc: "おにぎり1個・パン1個・麺1つのいずれか。おにぎり＋パスタのような重ね方をしなければ、糖質は自然に収まります。" },
              { label: "③ 野菜・海藻を1品足す", desc: "サラダ・カット野菜・もずく酢・海藻サラダ。食物繊維が入ると血糖の上がり方が緩やかになり、満足感も続きます。" },
            ].map((item) => (
              <div key={item.label} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800">
            <strong>目安：</strong>1食あたり400〜600kcal、タンパク質20g以上。この2つの数字を守るだけで、コンビニ食の質は大きく変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="label" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          栄養成分表示の読み方
        </h2>
        <div className="space-y-4">
          <p>コンビニ食の最大の利点は、全商品に栄養成分表示がついていることです。見るべき順番はこうです。</p>
          <div className="space-y-2">
            {[
              { step: "1", label: "まず「単位」を確認する", desc: "「1個あたり」なのか「100gあたり」なのか。100g表示の商品は、内容量を見て実際の量に換算する必要があります。ここを見落とすと計算が倍近くずれます。" },
              { step: "2", label: "たんぱく質を見る", desc: "1食で20g以上あるか。10g未満なら、ゆで卵やサラダチキンを足す判断になります。" },
              { step: "3", label: "脂質を見る", desc: "同じカロリーでも脂質が20gを超えていたら、揚げ物かマヨネーズ系です。腹持ちのわりにカロリーが高くなります。" },
              { step: "4", label: "炭水化物のうち糖質を見る", desc: "食物繊維が別記されている商品なら、糖質＝炭水化物−食物繊維。主食1つ分でだいたい40g前後が目安です。" },
              { step: "5", label: "食塩相当量も確認する", desc: "1食で3gを超えると、翌朝のむくみに出やすくなります。汁物やスープを足す日はとくに注意。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <p className="font-bold text-green-700 text-sm">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            慣れると3秒で判断できるようになります。最初の1週間だけ意識して見れば、自分がよく買う商品の数字は覚えてしまうので、以降は確認する必要すらなくなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="combo" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          シーン別・組み合わせパターン
        </h2>
        <div className="space-y-4">
          <p>迷わないように、そのままレジに持っていける組み合わせを用意しました。カロリーは目安です。</p>
          <div className="space-y-3">
            {COMBOS.map((combo) => (
              <div key={combo.scene} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{combo.icon}</span>
                  <p className="font-bold text-green-700 text-sm">{combo.scene}</p>
                </div>
                <ul className="space-y-1 mb-2">
                  {combo.items.map((it) => (
                    <li key={it} className="text-sm flex gap-2 text-gray-700"><span className="text-green-500">・</span>{it}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">{combo.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="seven" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          セブン-イレブン
        </h2>
        <div className="space-y-3">
          <ProductList
            items={[
              { name: "サラダチキン（プレーン）", kcal: "約105kcal", point: "たんぱく質約22g。コンビニダイエットの主役。ハーブ・レモンなど味の種類が多く飽きにくい。" },
              { name: "ギリシャヨーグルト（無糖）", kcal: "約65kcal", point: "たんぱく質約10g。間食の第一候補。加糖タイプは糖質が上がるので無糖を選ぶ。" },
              { name: "ゆで卵（2個パック）", kcal: "約160kcal", point: "たんぱく質約12g。安く、日持ちし、どの店にもある。迷ったらこれ。" },
              { name: "おでん（大根・こんにゃく・たまご）", kcal: "約100〜150kcal", point: "低カロリーで満足感が高い。ただし汁は塩分が多いので飲み干さない。" },
              { name: "もずく酢", kcal: "約15kcal", point: "食事の最初に食べる用。食物繊維と酢の組み合わせで血糖の上がり方が緩やかになる。" },
            ]}
          />
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="famima" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ファミリーマート
        </h2>
        <div className="space-y-3">
          <ProductList
            items={[
              { name: "サラダチキンバー", kcal: "約60〜80kcal", point: "スティック型で片手で食べられる。デスクでの間食や、トレーニング前の補給に。" },
              { name: "豆腐バー", kcal: "約100kcal", point: "たんぱく質10g前後。常温で持ち歩けるので、外回りの多い人に向く。" },
              { name: "蒸し鶏と野菜のサラダ", kcal: "約150kcal", point: "1品でたんぱく質と野菜が同時に摂れる。ドレッシングは半分だけかける。" },
              { name: "枝豆（冷凍・チルド）", kcal: "約120kcal", point: "スナック菓子の代替として優秀。たんぱく質と食物繊維が同時に入る。" },
              { name: "無糖コーヒー・炭酸水", kcal: "0kcal", point: "甘いカフェオレを1本置き換えるだけで1日100〜150kcal減る。" },
            ]}
          />
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="lawson" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ローソン
        </h2>
        <div className="space-y-3">
          <ProductList
            items={[
              { name: "ブランパン", kcal: "約170kcal（2個）", point: "糖質が大幅に抑えられている。パンが食べたいときの逃げ道として持っておくと楽。" },
              { name: "大豆バー・ソイプロテインバー", kcal: "約100〜200kcal", point: "小腹対策。ただし商品によって糖質量に差があるので、必ず表示を見る。" },
              { name: "スモークチキンレッグ", kcal: "約170kcal", point: "たんぱく質15g以上。骨付きで食べごたえがあり、満足感が高い。" },
              { name: "サラダチキンサンド系", kcal: "約280kcal", point: "パンと肉が一体化していて昼食に使いやすい。マヨネーズ多めの商品は避ける。" },
              { name: "プレーンヨーグルト", kcal: "約60kcal", point: "無糖を選び、甘さが欲しければ果物を足す。砂糖入りより満足感が長い。" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          ※ 商品構成やカロリーは改定・終売で変わります。数字は目安として見て、購入時は必ずパッケージの栄養成分表示を確認してください。
        </p>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="trap" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ヘルシーに見えて実は高カロリーなもの
        </h2>
        <div className="space-y-3">
          {TRAPS.map((item) => (
            <div key={item.name} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-bold text-amber-800 text-sm mb-1">⚠ {item.name}</p>
              <p className="text-sm text-gray-600">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="avoid" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          避けたい商品
        </h2>
        <div className="space-y-3">
          {[
            { name: "レジ横の揚げ物（フライドチキン・コロッケ）", reason: "1個で200〜300kcal。会計のついでに買えてしまうのが最大の問題です。買わないと決めておくのが唯一の対策。" },
            { name: "甘いカフェオレ・フラッペ系", reason: "1本で糖質20〜40g。飲み物の糖質は満腹感が残らないため、そのまま上乗せになります。" },
            { name: "菓子パン・デニッシュ", reason: "脂質と糖質の組み合わせで1個400kcal超えも普通。同じカロリーならおにぎり2個のほうが腹持ちします。" },
            { name: "カップ麺（単品で済ませる）", reason: "たんぱく質が少なく塩分が多い。どうしても食べるなら、ゆで卵とサラダを足して1食として成立させます。" },
          ].map((item) => (
            <div key={item.name} className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="font-bold text-red-700 text-sm mb-1">❌ {item.name}</p>
              <p className="text-sm text-gray-600">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          コンビニ昼食を1年続けた話
        </h2>
        <div className="space-y-4">
          <p>
            仕事の都合で昼を作れない時期が1年ほどありました。毎日コンビニです。それでも減量は進みました。
            <strong>やったのは、買うものを固定したことだけ</strong>です。
          </p>
          <p>
            サラダチキン、おにぎり1個、海藻サラダ。この3点をほぼ毎日。飽きたらチキンの味を変えるか、豆腐と納豆に差し替える。棚の前で悩む時間がゼロになり、
            <strong>疲れている日ほど効いた</strong>のを覚えています。悩む余地があると、疲れた日に揚げ物に手が伸びるからです。
          </p>
          <p>
            うまくいかなかったのは、逆に「毎日その日の気分で選ぶ」やり方でした。栄養成分表示を見て選んでいるつもりでも、金曜の夕方にはパスタとチキンとレジ横のからあげを持ってレジに並んでいました。
          </p>
          <p>
            もうひとつ実感したのが、レジ横の揚げ物と甘い飲み物です。この2つを買わないと決めただけで、1日あたり300〜400kcal違いました。
            <strong>選ぶものより、買わないものを先に決めるほうが早い</strong>というのが、1年やって出た結論です。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>タンパク質1品・主食1つ・野菜1品</strong>。この形を守れば商品名は覚えなくていい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>栄養成分表示は<strong>単位 → たんぱく質 → 脂質 → 糖質 → 食塩</strong>の順に見る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>1食<strong>400〜600kcal・たんぱく質20g以上</strong>が目安</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>サラダ・グラノーラ・スムージーは<strong>ヘルシーとは限らない</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>買うものを固定する</strong>。疲れている日に判断させない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span><strong>レジ横の揚げ物と甘い飲み物</strong>をやめるだけで1日300kcal変わる</span></li>
          </ol>
          <p>
            コンビニは、使い方さえ決めればダイエットの強い味方になります。まずは自分の1食あたりの目安カロリーを知るところから始めてください。サクメシなら質問に答えるだけで、必要カロリーとPFC、1週間分の献立まで出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
