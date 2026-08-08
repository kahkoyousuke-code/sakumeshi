import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/meal-prep" },
  title: "作り置きダイエット｜週末2時間で平日5日を乗り切る方法 | サクメシ",
  description:
    "週末2時間の作り置きで平日をラクにする方法を解説。2時間の実際の段取り、食材の買い物リスト、日持ちの目安、飽きない味付けローテーション、衛生管理の注意点まで紹介します。",
};

const TOC = [
  { id: "why", label: "なぜ作り置きがダイエットに効くのか" },
  { id: "start", label: "挫折しない始め方（4ステップ）" },
  { id: "shopping", label: "買い物リストの作り方" },
  { id: "schedule", label: "2時間の段取り（タイムテーブル）" },
  { id: "recipes", label: "定番おすすめ作り置きおかず" },
  { id: "rotation", label: "飽きないための味付けローテーション" },
  { id: "storage", label: "保存のコツと日持ちの目安" },
  { id: "hygiene", label: "衛生面で守るべきこと" },
  { id: "experience", label: "3回挫折して分かったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const SCHEDULE = [
  { time: "0:00", task: "米を炊き始める / 鶏むね肉に下味をつける", why: "炊飯と漬け込みは放置時間なので最初に着手する" },
  { time: "0:10", task: "鶏むね肉をオーブンまたはフライパンへ", why: "一番時間がかかるものを先に火にかける" },
  { time: "0:20", task: "その間にゆで卵を茹でる / 野菜を切る", why: "コンロが空いている時間を使う" },
  { time: "0:40", task: "野菜をレンジ加熱してマリネ・ナムルに", why: "レンジとコンロを同時に回す" },
  { time: "1:00", task: "ひじき煮など和の副菜を煮る", why: "煮ている間に容器と粗熱取りの準備" },
  { time: "1:20", task: "スープの素を作る（野菜ときのこを煮る）", why: "冷凍前提なので多めに作る" },
  { time: "1:40", task: "粗熱を取りながら1食分ずつ小分け", why: "熱いままフタをしない。ここを焦らない" },
  { time: "2:00", task: "冷蔵・冷凍に振り分けて終了", why: "週前半は冷蔵、後半は最初から冷凍" },
];

const SHOPPING = [
  { cat: "主菜（タンパク質）", items: "鶏むね肉 2枚 / 鮭または鯖 3〜4切れ / 卵 1パック / 豆腐 2丁 / 納豆" },
  { cat: "野菜", items: "ブロッコリー 1株 / にんじん 2本 / ほうれん草 1束 / 玉ねぎ 2個 / キャベツ 1/2玉" },
  { cat: "きのこ・海藻", items: "しめじ・えのき 各1パック / 乾燥ひじき / カットわかめ" },
  { cat: "主食", items: "米（1食150gずつ小分け冷凍用） / 大麦（混ぜて炊く）" },
  { cat: "常備", items: "塩麹 / めんつゆ / 酢 / オリーブオイル / 冷凍野菜（保険用）" },
];

const ROTATION = [
  { base: "鶏むね肉", flavors: "塩麹 / 照り焼き / カレー粉 / 味噌マヨ / ハーブソルト" },
  { base: "白身魚・鮭", flavors: "塩焼き / 味噌漬け / レモンバター / ホイル蒸し" },
  { base: "ゆで野菜", flavors: "ナムル（ごま油） / マリネ（酢） / おかか和え / ポン酢" },
  { base: "ゆで卵", flavors: "そのまま / めんつゆ味玉 / カレー味玉" },
];

const FAQS = [
  {
    q: "作り置きは何日分作ればいい？",
    a: "最初は3日分から始めてください。5日分作って余らせると、次の週にやる気がなくなります。3日で回せるようになってから増やすほうが定着します。",
  },
  {
    q: "毎日同じおかずで飽きない？",
    a: "飽きます。だからこそ味付けを変えるローテーションを組んでおきます。同じ鶏むね肉でも、塩麹とカレー粉では別の料理として食べられます。食材を変えるより味を変えるほうが手間が少なくて済みます。",
  },
  {
    q: "一人暮らしでもやる意味ある？",
    a: "むしろ一人暮らしのほうが効果が大きいです。少量ずつ作るほうが食材が余りやすく、結局買い足しが増えます。まとめて作って小分けにするほうが、食費も手間も下がります。",
  },
  {
    q: "作り置きだと栄養が偏らない？",
    a: "主菜だけ作り置きして、野菜と汁物は日々足すという形にすれば偏りません。全部を作り置きで完結させようとしないのがコツです。",
  },
  {
    q: "冷凍したごはんはまずくならない？",
    a: "炊きたてを熱いうちにラップで包み、粗熱を取ってから冷凍すると、味の落ち方はかなり抑えられます。冷めてから冷凍すると水分が抜けてぱさつきます。",
  },
];

export default function MealPrep() {
  return (
    <ColumnShell
      slug="meal-prep"
      h1="作り置きダイエット｜週末2時間で平日5日を乗り切る方法"
      toc={TOC}
      ctaLabel="サクメシで1週間分の献立を作る →"
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「今日は疲れたから、もうコンビニ弁当でいいや」</p>
        <p>
          ダイエットが崩れるのは、だいたい
          <strong>疲れて考えたくない夜</strong>
          です。意志が弱いのではなく、疲れた状態から毎日ヘルシーな食事を用意するという設計そのものに無理があります。
        </p>
        <p>
          解決策が<strong>作り置き（ミールプレップ）</strong>です。週末に2時間だけ確保すれば、平日は温めるだけ。判断力が落ちた夜でも、目の前にある食事を食べるだけになります。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜ作り置きがダイエットに効くのか
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "「決断疲れ」をなくせる", desc: "毎日「何を食べよう」と考えるのは想像以上に消耗します。決めるのは週1回だけにして、平日は考えずに食べる形にします。" },
              { title: "空腹時の衝動買いを防げる", desc: "空腹でスーパーやコンビニに行くと、高カロリーなものに手が伸びます。家に食事があれば、そもそも店に寄りません。" },
              { title: "量とカロリーが自動で決まる", desc: "1食分ずつ容器に分けておけば、食べる量が固定されます。「あとちょっと」のおかわりが物理的に発生しません。" },
              { title: "食費が下がる", desc: "食材をまとめ買いして使い切れるので無駄が減ります。外食・中食が減る効果と合わせると、月単位でははっきり差が出ます。" },
              { title: "タンパク質が確保できる", desc: "疲れた日ほど不足するのがタンパク質です。作り置きの主菜があるだけで、1日の合計が安定します。" },
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
        <h2 id="start" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          挫折しない始め方（4ステップ）
        </h2>
        <div className="space-y-4">
          <p>失敗パターンはいつも同じです。<strong>最初に張り切りすぎて、2週目にやめる</strong>。続けるための順番はこうなります。</p>
          <div className="space-y-3">
            {[
              { step: "STEP 1", title: "まずは主菜2品だけ作る", desc: "いきなり10品作らない。鶏むね肉の料理を1品、魚か豆腐の料理を1品。副菜は冷凍野菜やカット野菜で十分です。" },
              { step: "STEP 2", title: "献立を先に決めてから買い物する", desc: "スーパーで「何を作ろう」と悩むのが一番疲れます。献立 → 買い物リスト → 買い物 → 調理、の順番を固定してください。" },
              { step: "STEP 3", title: "同時進行で時短する", desc: "炊飯器で米を炊きながら、オーブンで1品、コンロで1品、レンジで1品。待ち時間に次の準備をすれば2時間に収まります。" },
              { step: "STEP 4", title: "1食分ずつ容器に分ける", desc: "大皿にまとめると食べる量が曖昧になります。ごはんも1食150gずつ小分け冷凍が基本です。" },
            ].map((item) => (
              <div key={item.step} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">{item.step}：{item.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            サクメシで7日分の食事プランを作ると<strong>買い物リストまで自動生成できる</strong>ので、STEP 2の手間がほぼゼロになります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="shopping" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          買い物リストの作り方
        </h2>
        <div className="space-y-4">
          <p>1人分・3〜4日分を想定した基本の買い物リストです。これをベースに、好みで入れ替えてください。</p>
          <div className="space-y-2">
            {SHOPPING.map((row) => (
              <div key={row.cat} className="bg-white rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">{row.cat}</p>
                <p className="text-sm text-gray-600">{row.items}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">コツ：食材の種類を絞る</p>
            <p className="text-sm text-gray-600">
              主菜の肉と魚は<strong>3〜4種類まで</strong>に絞り、複数日で使い回します。種類を増やすと買い物も調理も倍になり、しかも使い切れずに余ります。同じ食材でも味付けと切り方を変えれば別の料理になります。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="schedule" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          2時間の段取り（タイムテーブル）
        </h2>
        <div className="space-y-4">
          <p>
            「2時間で終わる」は段取り次第です。ポイントは
            <strong>放置できるものから先に始める</strong>
            こと。以下は実際の流れの一例です。
          </p>
          <div className="space-y-1.5">
            {SCHEDULE.map((row) => (
              <div key={row.time} className="flex gap-3 bg-white rounded-lg px-4 py-3 border border-green-100">
                <span className="text-xs font-bold text-green-700 w-12 shrink-0 pt-0.5">{row.time}</span>
                <div className="min-w-0">
                  <p className="text-sm text-gray-800">{row.task}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.why}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            最初は3時間かかると思ってください。慣れると2時間、さらに慣れると90分程度に落ち着きます。初回で時間がかかっても、それが普通です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="recipes" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          定番おすすめ作り置きおかず
        </h2>
        <div className="space-y-4">
          <p>高タンパク・低〜中脂質で、保存に向く定番です。味付けを変えれば飽きずに回せます。</p>
          <div className="space-y-3">
            {[
              { food: "鶏むね肉のしっとり茹で（サラダチキン）", point: "塩と砂糖を少量もみ込み、沸騰させて火を止めた湯に放置するだけ。スライスしてサラダ・スープ・丼に展開できます。" },
              { food: "鶏むね肉の照り焼き・塩麹焼き", point: "そのまま主菜に。塩麹に一晩漬けておくとパサつきません。1枚ずつ焼いて小分けにします。" },
              { food: "ゆで卵・味玉", point: "間食にも主菜の付け合わせにもなります。めんつゆに漬けるだけで味玉に。1週間分まとめて作れます。" },
              { food: "ひじき煮・切り干し大根", point: "食物繊維とミネラルの補給に。和の副菜は比較的日持ちし、弁当にも使えます。" },
              { food: "ゆで野菜のマリネ・ナムル", point: "ブロッコリー・にんじん・ほうれん草をレンジ加熱して和えるだけ。彩りが揃うと満足感が上がります。" },
              { food: "具だくさんスープの素", point: "野菜ときのこを煮て小分け冷凍。夜に温めれば「あと1品」が数十秒で完成します。" },
              { food: "鮭・鯖の切り身（下味冷凍）", point: "味噌や塩麹をまぶして生のまま冷凍。焼くだけなので、平日でも魚が食べられます。" },
            ].map((item) => (
              <div key={item.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">🍳 {item.food}</p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="rotation" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飽きないための味付けローテーション
        </h2>
        <div className="space-y-4">
          <p>
            作り置きをやめる理由の1位は<strong>飽き</strong>です。食材を増やすのではなく、
            <strong>味を変える</strong>
            ほうが手間もコストもかかりません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食材</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">味付けのバリエーション</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {ROTATION.map((row, i) => (
                  <tr key={row.base} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.base}</td>
                    <td className="p-2 border border-green-100">{row.flavors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            調味料を数種類そろえておくだけで、同じ買い物リストのまま1ヶ月回せます。マヨネーズやドレッシングを多用すると脂質が増えるので、酢・出汁・スパイス系を軸にすると調整しやすくなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="storage" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          保存のコツと日持ちの目安
        </h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">保存方法</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">日持ちの目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">向いているもの</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">冷蔵</td>
                  <td className="p-2 border border-green-100">2〜3日</td>
                  <td className="p-2 border border-green-100">週前半に食べる主菜・副菜・味玉</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">冷凍</td>
                  <td className="p-2 border border-green-100">2〜3週間</td>
                  <td className="p-2 border border-green-100">週後半の主菜・ごはん小分け・スープの素・下味冷凍</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2">
            {[
              "週後半に食べる分は最初から冷凍へ。「冷蔵で5日持たせる」は狙わない",
              "作った日をマスキングテープに書いて貼る。迷いも食べ忘れもなくなる",
              "冷凍は平らにして薄く。解凍が早くなり、味の落ち方も小さい",
              "冷凍向きでないもの（生野菜・じゃがいも・豆腐・こんにゃく）は冷蔵で早めに食べる",
            ].map((tip, i) => (
              <div key={i} className="flex gap-2 bg-white rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">💡</span>
                <p className="text-sm text-gray-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="hygiene" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          衛生面で守るべきこと
        </h2>
        <div className="space-y-4">
          <p>作り置きで唯一、妥協してはいけないのがここです。まとめて作るぶん、失敗したときの影響も大きくなります。</p>
          <div className="space-y-2">
            {[
              "調理前・調理中はこまめに手を洗う。生肉を触った手で他の食材に触らない",
              "容器は清潔なものを使い、しっかり乾かしてから詰める",
              "中心部までしっかり加熱する。半生の状態で保存しない",
              "粗熱を取ってからフタをする。熱いままフタをすると水滴がたまって傷みやすい",
              "取り分けには清潔な箸を使う。食べかけの箸を容器に戻さない",
              "食べるときは再加熱する。冷蔵のものも温め直したほうが安全",
              "夏場や梅雨時は日持ちを1日短く見積もる",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="font-bold text-red-700 text-sm mb-1">❌ 少しでも怪しいと感じたら食べない</p>
            <p className="text-sm text-gray-600">
              いつもと違う臭い、ぬめり、糸を引く、味に違和感——ひとつでもあれば処分してください。もったいないという理由で食べる価値はありません。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          3回挫折して分かったこと
        </h2>
        <div className="space-y-4">
          <p>
            作り置きは今でこそ習慣になっていますが、定着するまでに3回やめています。毎回、原因は同じでした。
            <strong>最初の週に張り切りすぎる</strong>
            ことです。
          </p>
          <p>
            1回目は日曜に4時間かけて8品作りました。週の後半には見るのも嫌になり、木曜には全部残っていました。2回目は品数を減らしたものの、全部同じ味付けにしてしまい、水曜で飽きました。
          </p>
          <p>
            続くようになったのは3回目以降、
            <strong>主菜2品＋ゆで卵＋スープの素、それだけ</strong>
            に絞ってからです。副菜は冷凍ブロッコリーとカット野菜で妥協しました。品数は減りましたが、
            <strong>「作らなかった週がゼロになった」ほうが結果には効きました</strong>。
          </p>
          <p>
            もうひとつ効果があったのが、ごはんの小分け冷凍です。1食150gずつラップで包んでおくと、疲れた日でも量が勝手に決まります。以前は炊飯器から適当によそっていて、疲れている日ほど多くなっていました。
            <strong>意志で量を決めない仕組み</strong>
            という点では、これが一番大きかったと思います。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>ダイエットの敵は<strong>疲れた夜の判断</strong>。作り置きで判断を不要にする</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>最初は<strong>主菜2品と3日分</strong>から。張り切ると2週目でやめる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>食材は<strong>3〜4種類に絞り、味付けで変化をつける</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>放置できるものから着手</strong>すれば2時間に収まる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>週前半は冷蔵・後半は冷凍</strong>。ごはんも1食分ずつ小分けに</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>衛生管理だけは妥協しない。<strong>怪しいと感じたら食べない</strong></span></li>
          </ol>
          <p>
            「献立を考える → 買い物リストを作る」の部分は、サクメシに任せるのが一番ラクです。7日分のメニューと買い物リストを自動で作れるので、週末の作り置きにそのまま使えます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
