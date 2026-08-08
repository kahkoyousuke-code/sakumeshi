import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/female-cycle-diet" },
  title: "生理周期とダイエット｜痩せやすい時期・停滞する時期を知る | サクメシ",
  description:
    "生理周期で体重や食欲が変動する仕組みと、時期ごとの食事の組み立て方を解説。生理前の食欲・むくみへの対処、周期に合わせた記録のつけ方、受診を検討する目安まで紹介します。",
};

const TOC = [
  { id: "stance", label: "この記事の立場について" },
  { id: "why", label: "生理周期で体重が動く仕組み" },
  { id: "phases", label: "4つの時期と体の変化" },
  { id: "record", label: "体重は「周期の同じ日」で比べる" },
  { id: "luteal", label: "生理前の食欲・むくみとの付き合い方" },
  { id: "snack", label: "黄体期の間食リスト" },
  { id: "iron", label: "月経期は鉄分とタンパク質を優先する" },
  { id: "tips", label: "周期に合わせた食事の組み立て" },
  { id: "clinic", label: "受診を検討したほうがいいとき" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const SNACKS = [
  { food: "高カカオチョコ 2〜3枚", kcal: "約90kcal", why: "甘いものへの欲求を少量で満たせる。カカオ70%以上を選ぶ" },
  { food: "ギリシャヨーグルト（無糖）＋はちみつ少量", kcal: "約100kcal", why: "タンパク質が入るので満足感が続く" },
  { food: "干し芋 30g", kcal: "約90kcal", why: "食物繊維があり、噛む回数も多い" },
  { food: "素焼きアーモンド 15粒", kcal: "約90kcal", why: "噛みごたえがあり、少量で止まりやすい" },
  { food: "ホットココア（無糖ココア＋牛乳）", kcal: "約120kcal", why: "温かい飲み物は満足感が高い。砂糖は控えめに" },
  { food: "ゆで卵1個", kcal: "約75kcal", why: "甘いもの以外の空腹には、これが一番早く収まる" },
];

const FAQS = [
  {
    q: "生理前に2kg増えた。ダイエットは失敗？",
    a: "失敗ではありません。黄体期は体が水分を溜めやすくなるため、体重が1〜3kg増えることは普通に起きます。脂肪が2kg増えるには約15,000kcalの余剰が必要で、数日で達成できる量ではありません。生理が始まって数日で戻ることがほとんどです。",
  },
  {
    q: "生理中に運動していい？",
    a: "体調次第です。だるさや痛みが強い日は休んでかまいません。動けそうならウォーキングや軽いストレッチ程度から。この時期に無理をしても得るものは少なく、卵胞期に回したほうが効率的です。",
  },
  {
    q: "低用量ピルを飲んでいる場合は？",
    a: "服用によって周期や症状の出方が変わります。この記事の時期区分がそのまま当てはまらないことがあるので、体重や体調の変化については処方を受けている医師に相談してください。",
  },
  {
    q: "周期が不規則で時期が分からない",
    a: "無理に当てはめず、まずは体重・食欲・体調を日付とセットで記録してください。数ヶ月分たまると、自分なりのパターンが見えてくることがあります。周期が大きく乱れている場合は婦人科の受診を検討してください。",
  },
  {
    q: "生理前の食欲は我慢するしかない？",
    a: "我慢だけで乗り切ろうとすると、反動でまとめて食べることになりがちです。「食べていいもの」を先に決めておくほうが、結果的に総量は減ります。禁止より置き換えです。",
  },
];

export default function FemaleCycleDiet() {
  return (
    <ColumnShell
      slug="female-cycle-diet"
      h1="生理周期とダイエット｜痩せやすい時期・停滞する時期を知る"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「生理前になると食欲が止まらない」「体重が急に1〜2kg増えて落ち込む」</p>
        <p>
          女性のダイエットには、男性にはない要素があります。
          <strong>生理周期によるホルモンの波</strong>
          です。この波を知らないまま毎日体重計と向き合うと、必要のない自己嫌悪でダイエットそのものをやめてしまいます。
        </p>
        <p>この記事では、周期ごとの体の変化と、それに合わせた無理のない食事管理の考え方を整理します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="stance" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          この記事の立場について
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              最初にお断りしておきます。サクメシの運営者は男性で、
              <strong>生理周期を自分で経験したことはありません</strong>
              。この記事は公的な健康情報と一般に知られている仕組みをもとに、
              <strong>「体重管理をどう組み立てるか」という観点に絞って</strong>
              まとめたものです。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              症状のつらさや個別の体調については、この記事で判断せず、必ず医療機関にご相談ください。医師・管理栄養士ではないため、診断や治療にあたる内容は扱いません。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          生理周期で体重が動く仕組み
        </h2>
        <div className="space-y-4">
          <p>
            鍵になるのは2つの女性ホルモン、
            <strong>エストロゲン（卵胞ホルモン）</strong>と<strong>プロゲステロン（黄体ホルモン）</strong>
            です。この2つの増減で、体重の動き方も食欲の出方も変わります。
          </p>
          <div className="space-y-2">
            {[
              { title: "エストロゲンが優位な時期（生理後〜排卵）", desc: "心身が比較的安定し、食欲も落ち着きます。ダイエットの成果が数字に出やすい時期です。" },
              { title: "プロゲステロンが優位な時期（排卵後〜生理前）", desc: "体が水分を保持しやすくなり、体重が1〜3kg増えることがあります。その大半は水分で、脂肪ではありません。" },
              { title: "生理前の食欲増加は起きて当然のこと", desc: "食欲が強くなったり、甘いものが欲しくなったりするのはよくある変化です。意志が弱いわけではありません。" },
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
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 一番大事なこと：<strong>生理前〜生理中の体重増は「太った」ではありません</strong>。ここで焦って絶食したり、逆に諦めてまとめて食べたりするのが、一番もったいないパターンです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="phases" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          4つの時期と体の変化
        </h2>
        <div className="space-y-4">
          <p>28日周期の場合の目安です。周期の長さには個人差があり、体調の出方も人によって違います。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">時期</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体の状態</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ダイエットとの相性</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">月経期（1〜7日目）</td>
                  <td className="p-2 border border-green-100">だるさ・痛み・貧血気味になることも</td>
                  <td className="p-2 border border-green-100">無理しない。鉄分とタンパク質の補給を優先</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">卵胞期（8〜14日目）</td>
                  <td className="p-2 border border-green-100">心身が比較的安定</td>
                  <td className="p-2 border border-green-100 font-bold text-green-700">◎ 成果が出やすい時期。新しい習慣を始めるならここ</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">排卵期（14日目前後）</td>
                  <td className="p-2 border border-green-100">切り替わりのタイミング</td>
                  <td className="p-2 border border-green-100">○ 卵胞期の流れを維持する</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">黄体期（15〜28日目）</td>
                  <td className="p-2 border border-green-100">むくみ・食欲増・イライラなど（PMS）</td>
                  <td className="p-2 border border-green-100">△ 体重は動かなくて当然。維持できれば十分</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ポイントは、
            <strong>1ヶ月を通して常に全力で戦わないこと</strong>
            です。卵胞期に進めて、黄体期は維持できれば合格。この強弱をつけるだけで、精神的な消耗が大きく減ります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="record" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          体重は「周期の同じ日」で比べる
        </h2>
        <div className="space-y-4">
          <p>
            周期がある以上、
            <strong>昨日と今日を比べても意味がありません</strong>
            。比べるべきは、前の周期の同じ日です。
          </p>
          <div className="bg-white rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">記録のつけ方</p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">1.</span><span>生理の初日を「1日目」として、日付とセットで記録する</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">2.</span><span>毎朝、起床後・トイレ後・同じ服装で体重を量る</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">3.</span><span>体重と一緒に、食欲・むくみ・体調も一言メモする</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">4.</span><span>評価するのは<strong>前の周期の同じ日目と比べたとき</strong>だけ</span></li>
            </ol>
          </div>
          <p>
            2〜3周期分たまると、自分の波が見えてきます。「毎回20日目あたりから1.5kg増える」と分かっていれば、その増加に落ち込まなくなります。
            <strong>予測できる変動は、ストレスになりません</strong>。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="luteal" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          生理前の食欲・むくみとの付き合い方
        </h2>
        <div className="space-y-4">
          <p>一番つらい黄体期を乗り切るための、現実的なやり方です。</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 我慢ゼロを目指さず、置き換える</p>
              <p>
                甘いものへの欲求を根性で抑え込むと、反動でまとめて食べることになりがちです。
                <strong>先に「食べていいもの」を決めておく</strong>
                ほうが、結果的に総量は減ります。次の節に具体的なリストを挙げました。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 空腹の時間を作らない</p>
              <p>
                空腹の時間が長いほど、次に食べるときの反動が大きくなります。3食＋計画的な間食で、血糖の乱高下を避けてください。食べる順番（野菜→タンパク質→炭水化物）も有効です。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. むくみ対策は「塩分控えめ＋カリウム＋水分」</p>
              <p>
                むくむからと水分を控えるのは逆効果です。水はしっかり飲みつつ、塩分の濃い食事を控え、カリウムを含む食品（バナナ・アボカド・ほうれん草・海藻・大豆製品）を意識します。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. この時期の目標を「維持」に書き換える</p>
              <p>
                黄体期に落とそうとすると、うまくいかずに自己嫌悪になります。あらかじめ
                <strong>「この2週間は増やさなければ勝ち」</strong>
                と決めておけば、同じ結果でも受け止め方がまったく違います。
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="snack" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          黄体期の間食リスト
        </h2>
        <div className="space-y-4">
          <p>先に決めておくためのリストです。100kcal前後で満足感が出るものを揃えました。</p>
          <div className="space-y-2">
            {SNACKS.map((s) => (
              <div key={s.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-green-700 text-sm">{s.food}</p>
                  <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{s.kcal}</span>
                </div>
                <p className="text-sm text-gray-600">{s.why}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            コツは<strong>買い置きを1種類に絞ること</strong>です。選択肢が多いと「どれにしよう」で結局全部開けることになります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="iron" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          月経期は鉄分とタンパク質を優先する
        </h2>
        <div className="space-y-4">
          <p>
            月経のある女性は、そうでない場合より鉄を多く必要とするとされています。ダイエット中は食事量そのものが減るため、
            <strong>鉄が不足しやすい条件が重なります</strong>
            。だるさが続く、階段で息切れする、といった場合は、カロリーより先にここを疑ってください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">種類</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食品</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">メモ</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">ヘム鉄（吸収されやすい）</td>
                  <td className="p-2 border border-green-100">レバー・赤身肉・かつお・まぐろ・あさり</td>
                  <td className="p-2 border border-green-100">動物性食品に多い</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">非ヘム鉄</td>
                  <td className="p-2 border border-green-100">小松菜・ほうれん草・大豆製品・ひじき</td>
                  <td className="p-2 border border-green-100">ビタミンCと一緒に摂ると吸収が上がる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            サプリメントで補う場合、鉄は摂りすぎも問題になります。自己判断で高用量を続けず、貧血を指摘されているなら医療機関に相談してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          周期に合わせた食事の組み立て
        </h2>
        <div className="space-y-4">
          <div className="space-y-3">
            {[
              { meal: "月経期", example: "鉄分＋タンパク質をしっかり", point: "赤身肉・あさり・小松菜など。カロリーを攻めて減らす時期ではありません。維持カロリー前後で、栄養の質を優先します。" },
              { meal: "卵胞期", example: "計画どおりのダイエット食", point: "食欲が安定しているうちに、目標カロリーとPFCどおりに淡々と進めます。運動を増やすならこの時期。" },
              { meal: "黄体期", example: "維持カロリー寄り＋間食を計画に入れる", point: "無理な赤字を狙わず、タンパク質と食物繊維で満腹感を確保。間食は「食べていいもの」を先に決めておきます。" },
            ].map((item) => (
              <div key={item.meal} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">{item.meal}：{item.example}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.point}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">1周期の設計イメージ</p>
            <p className="text-sm text-gray-600">
              月経期は維持カロリー → 卵胞期は−500kcalで攻める → 黄体期は−200kcal程度に緩める。
              <strong>1ヶ月の合計で赤字が出ていれば体重は落ちます</strong>
              。毎日同じ数字を守る必要はありません。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="clinic" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          受診を検討したほうがいいとき
        </h2>
        <div className="space-y-4">
          <p>次のような場合は、食事の工夫で解決しようとせず、婦人科などの医療機関に相談してください。</p>
          <div className="space-y-2">
            {[
              "痛みや不調で、仕事や学校を休むことがある",
              "気分の落ち込みやイライラが強く、生活や人間関係に影響が出ている",
              "経血の量が多い、期間が長いなど、以前と明らかに変わった",
              "周期が大きく乱れている、または3ヶ月以上来ていない",
              "ダイエットを始めてから周期が乱れた・止まった",
              "強いだるさや息切れが続いている（貧血の可能性）",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ とくに<strong>「ダイエットを始めてから周期が乱れた」</strong>場合は、エネルギー不足が関係している可能性があります。減量を続ける前に、まず医療機関に相談してください。体重を落とすことより優先度が高い問題です。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>生理前の体重増はほぼ水分</strong>。「太った」と混同しない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>卵胞期に進めて、黄体期は維持</strong>。1ヶ月を通して全力で戦わない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>体重は<strong>前の周期の同じ日</strong>と比べる。予測できる変動は苦にならない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>生理前は<strong>禁止より置き換え</strong>。食べていいものを先に決めておく</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>月経期は<strong>鉄分とタンパク質</strong>を優先。攻めて減らす時期ではない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>つらい症状や<strong>ダイエット後の周期の乱れは医療機関へ</strong></span></li>
          </ol>
          <p>
            ホルモンの波は避けられませんが、知っていれば戦い方を変えられます。まずは1周期、体重と体調を日目とセットで記録するところから始めてみてください。
          </p>
          <p>
            サクメシでベースの食事プランを作っておけば、「卵胞期はプランどおり・黄体期はゆるめに」という運用がしやすくなります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
