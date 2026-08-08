import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/eating-out" },
  title: "外食でも太らない食べ方｜定食・ラーメン・居酒屋シーン別ガイド | サクメシ",
  description:
    "外食を続けながら痩せるための選び方を解説。主要メニューのカロリー早見表、1食で使える予算の考え方、定食・麺類・中華・焼肉・ファストフードのシーン別の頼み方まで紹介します。",
};

const TOC = [
  { id: "budget", label: "まず「1食の予算」を決める" },
  { id: "calorie-table", label: "外食メニューのカロリー早見表" },
  { id: "basics", label: "どの店でも使える4つのルール" },
  { id: "teishoku", label: "定食・和食" },
  { id: "ramen", label: "ラーメン・麺類" },
  { id: "chinese", label: "中華・イタリアン" },
  { id: "yakiniku", label: "焼肉・食べ放題" },
  { id: "izakaya", label: "居酒屋" },
  { id: "fastfood", label: "ファミレス・ファストフード" },
  { id: "experience", label: "外食続きでも落ちた時期の話" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const CALORIE_ROWS = [
  { genre: "定食", items: [
    { name: "焼き魚定食", kcal: "約600kcal", level: "ok" },
    { name: "生姜焼き定食", kcal: "約750kcal", level: "mid" },
    { name: "とんかつ定食", kcal: "約1,000kcal", level: "ng" },
  ]},
  { genre: "丼・カレー", items: [
    { name: "牛丼（並）", kcal: "約650kcal", level: "mid" },
    { name: "親子丼", kcal: "約700kcal", level: "mid" },
    { name: "カツ丼", kcal: "約900kcal", level: "ng" },
    { name: "カレーライス", kcal: "約700kcal", level: "mid" },
  ]},
  { genre: "麺類", items: [
    { name: "ざるそば", kcal: "約300kcal", level: "ok" },
    { name: "醤油ラーメン", kcal: "約500kcal", level: "ok" },
    { name: "味噌・豚骨ラーメン", kcal: "約550〜650kcal", level: "mid" },
    { name: "ペペロンチーノ", kcal: "約600kcal", level: "mid" },
    { name: "カルボナーラ", kcal: "約850kcal", level: "ng" },
  ]},
  { genre: "中華", items: [
    { name: "餃子（6個）", kcal: "約350kcal", level: "mid" },
    { name: "麻婆豆腐定食", kcal: "約800kcal", level: "ng" },
    { name: "炒飯", kcal: "約700kcal", level: "ng" },
  ]},
  { genre: "その他", items: [
    { name: "ハンバーガーセット（ポテト・ドリンク付）", kcal: "約900kcal", level: "ng" },
    { name: "マルゲリータピザ（1枚）", kcal: "約700kcal", level: "ng" },
  ]},
];

const BASICS = [
  { rule: "タンパク質が入っているメニューを選ぶ", desc: "肉・魚・卵・豆腐が主役になっているか。麺類やカレー単品はタンパク質が不足しがちで、満足感が続かず数時間後に間食が来ます。" },
  { rule: "揚げ物は1食1品まで", desc: "衣は油を吸うため、同じ食材でも揚げると一気に脂質が増えます。とんかつと唐揚げを同じ食事で頼まない、という程度の基準で十分です。" },
  { rule: "ごはんは「少なめ」で頼む", desc: "多くの店で無料で対応してくれます。ごはん普通盛り（150g）を半分にすれば約120kcal減。毎日の昼食でこれをやるだけで月に数千kcal変わります。" },
  { rule: "野菜のサイドを1品足す", desc: "サラダ・おひたし・冷奴を先に食べると、主菜と主食の量が自然に落ち着きます。追加で頼むのに抵抗があるなら、味噌汁つきのセットを選ぶだけでも違います。" },
];

const FAQS = [
  {
    q: "毎日外食でも痩せられる？",
    a: "痩せられます。自炊が有利なのは量とカロリーを把握しやすいからで、外食でも把握できていれば同じことです。ただし味付けが濃く塩分は多くなりがちなので、体重の日々の変動は自炊より大きく出ます。週平均で見てください。",
  },
  {
    q: "接待や付き合いで選べないときは？",
    a: "選べない日は諦めて、前後の日で調整します。1日の数字より1週間の合計のほうが体重には効きます。翌日に絶食するのではなく、翌日の主食を少し減らす程度で十分です。",
  },
  {
    q: "カロリー表示がない店はどうすれば？",
    a: "「調理法」で判断します。揚げる＞炒める＞焼く＞蒸す・茹でるの順に脂質が下がるので、迷ったら焼き物か蒸し物を選べば大きく外しません。",
  },
  {
    q: "ランチとディナー、どちらで調整すべき？",
    a: "調整しやすいのはランチです。夜は外食や付き合いが入りやすく、コントロールが効かない日が出ます。昼を安定させておくと、夜が崩れた日でも週の合計が守れます。",
  },
];

function levelClass(level: string) {
  if (level === "ok") return "text-green-700";
  if (level === "mid") return "text-amber-700";
  return "text-red-700";
}

export default function EatingOut() {
  return (
    <ColumnShell
      slug="eating-out"
      h1="外食でも太らない食べ方｜定食・ラーメン・居酒屋シーン別ガイド"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「ダイエット中だから外食できない」と思っていませんか。</p>
        <p>
          仕事で昼は外食、夜も付き合いがある——そういう生活でも体重は落とせます。必要なのは我慢ではなく、
          <strong>頼む前の数秒で判断できる基準を持っておくこと</strong>です。
        </p>
        <p>この記事では、主要メニューのカロリー早見表と、ジャンル別の具体的な頼み方をまとめます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="budget" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まず「1食の予算」を決める
        </h2>
        <div className="space-y-4">
          <p>
            外食で失敗する最大の原因は、
            <strong>1食にいくら使っていいのか知らないまま選んでいること</strong>
            です。予算が分かっていれば、メニュー選びは引き算になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">1日の目標カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1食の目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">外食の選び方</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">1,500kcal</td>
                  <td className="p-2 border border-green-100 text-center">約450〜500kcal</td>
                  <td className="p-2 border border-green-100">そば・焼き魚定食（ごはん半分）が基本線</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">1,800kcal</td>
                  <td className="p-2 border border-green-100 text-center">約550〜600kcal</td>
                  <td className="p-2 border border-green-100">定食もラーメンも選べる。丼ものは少なめで</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">2,200kcal</td>
                  <td className="p-2 border border-green-100 text-center">約700kcal</td>
                  <td className="p-2 border border-green-100">ほぼ普通に食べられる。揚げ物と大盛りだけ注意</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            1食あたりは「1日の目標 ÷ 3」よりやや少なめに置き、余りを間食や夜の付き合いに回すと現実的に回ります。自分の目標カロリーが分からない場合は、まずそこから出してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="calorie-table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          外食メニューのカロリー早見表
        </h2>
        <div className="space-y-4">
          <p>よくあるメニューのおおよその値です。店や量でかなり幅があるので、正確な数字というより「桁の感覚」を掴む目的で見てください。</p>
          <div className="space-y-4">
            {CALORIE_ROWS.map((group) => (
              <div key={group.genre}>
                <p className="text-sm font-bold text-gray-600 mb-2">{group.genre}</p>
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-green-100">
                      <span className="text-sm">{item.name}</span>
                      <span className={`text-sm font-bold whitespace-nowrap ml-3 ${levelClass(item.level)}`}>{item.kcal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p>
            見比べると分かるのは、<strong>ジャンルより調理法で決まる</strong>ということです。同じ豚肉でも、生姜焼き定食ととんかつ定食では250kcal以上違います。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="basics" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          どの店でも使える4つのルール
        </h2>
        <div className="space-y-3">
          {BASICS.map((item) => (
            <div key={item.rule} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">✓ {item.rule}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="teishoku" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          定食・和食
        </h2>
        <div className="space-y-4">
          <p>外食で<strong>最も扱いやすいのが定食</strong>です。主菜・副菜・汁物・主食が分かれているので、量の調整も食べる順番の調整もしやすくなります。</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ おすすめ</p>
              <ul className="space-y-1">
                {[
                  "焼き魚定食（さば・さんま・鮭。青魚は脂質も質がいい）",
                  "鶏の照り焼き・蒸し鶏の定食",
                  "刺身定食（脂質が低くタンパク質が多い）",
                  "納豆定食・豚汁定食（副菜で満足感を出す）",
                ].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 頻度を減らしたい</p>
              <ul className="space-y-1">
                {[
                  "カツ丼・天丼（揚げ物と主食が一体化していて調整できない）",
                  "大盛り無料の誘惑（無料でもカロリーは無料ではない）",
                  "うな丼（タレの糖質も含めて高カロリー）",
                ].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            ポイント：定食で一番手軽な調整は「ごはん少なめ」です。頼むのが気まずければ、残す前提で最初に半分よけておくだけでも同じ効果があります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ramen" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ラーメン・麺類
        </h2>
        <div className="space-y-4">
          <p>麺類は敵扱いされがちですが、実は<strong>ラーメン1杯そのものは500kcal前後</strong>で、定食より低いことすらあります。問題は替え玉・チャーハンセット・餃子との組み合わせです。</p>
          <div className="space-y-3">
            {[
              { label: "スープを飲み干さない", desc: "スープには脂質と塩分が集中しています。残すだけで100〜200kcalとかなりの塩分をカットできます。翌朝のむくみも軽くなります。" },
              { label: "セットではなく単品で頼む", desc: "半チャーハンセットは、それだけで+350kcal前後。麺類はセットにした瞬間に別の食べ物になります。" },
              { label: "トッピングはチャーシューか味玉", desc: "麺類はタンパク質が不足しがちです。バターやコーンより、タンパク質を足すほうが満足感が続きます。" },
              { label: "そば・うどんならそばを選ぶ", desc: "そばのほうが血糖の上がり方が緩やかで、タンパク質も多めです。つゆは飲み干さないこと。" },
            ].map((item) => (
              <div key={item.label} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">✓ {item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="chinese" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          中華・イタリアン
        </h2>
        <div className="space-y-4">
          <p>どちらも<strong>油の量が読みにくい</strong>ジャンルです。同じ見た目でも店によって倍近く変わることがあります。</p>
          <div className="space-y-3">
            <div className="border border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 px-4 py-2">
                <h3 className="text-sm font-bold text-white">中華</h3>
              </div>
              <div className="p-4 space-y-2">
                {[
                  "蒸し物・煮込み系（シュウマイ・水餃子・八宝菜）を選ぶ",
                  "青椒肉絲・回鍋肉は野菜が多く、炒め物の中では比較的マシ",
                  "炒飯・焼きそば・天津飯は主食＋油。単品で頼み、セットにしない",
                  "取り分け式なら、自分の皿に取ってから食べる（大皿から直接は量が読めない）",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    <p className="text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 px-4 py-2">
                <h3 className="text-sm font-bold text-white">イタリアン</h3>
              </div>
              <div className="p-4 space-y-2">
                {[
                  "トマト系 ＜ オイル系 ＜ クリーム系 の順にカロリーが上がる",
                  "パスタよりグリル料理（鶏・魚）＋サラダのほうが調整しやすい",
                  "前菜にサラダかスープを入れて、パスタを食べる前にお腹を落ち着かせる",
                  "パンとオリーブオイルの食べ放題は、気づかないうちに数百kcal積み上がる",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    <p className="text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="yakiniku" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          焼肉・食べ放題
        </h2>
        <div className="space-y-4">
          <p>
            焼肉自体は<strong>タンパク質が摂れるので悪くない選択</strong>です。問題になるのは部位・タレ・ごはんの3つです。
          </p>
          <div className="space-y-3">
            {[
              { label: "赤身を軸にする", desc: "ハラミ・ロース・モモ・センマイ・ホルモンの赤身寄り。カルビ・トントロ・上ミノなど脂の多い部位は、1〜2枚を味わう程度に。" },
              { label: "タレより塩・レモン", desc: "焼肉のタレは砂糖とみりんが入っており、つけるほど糖質が乗ります。塩とレモンにするだけで数十kcal単位で変わります。" },
              { label: "最初にサラダとナムル", desc: "焼き始める前に野菜を入れておくと、後半の追加注文が減ります。キムチ・ナムル・わかめスープは低カロリーで満足感が高い。" },
              { label: "ごはんと締めの冷麺を決めておく", desc: "焼肉で総カロリーを跳ね上げるのは、実は肉よりごはんと締めです。最初に「ごはんは1杯」と決めておきます。" },
            ].map((item) => (
              <div key={item.label} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">✓ {item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            食べ放題は、時間内に食べる量を最大化する仕組みになっています。減量中に行くなら「今日は予算を使い切る日」と割り切り、前後で調整するほうが健全です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="izakaya" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          居酒屋
        </h2>
        <div className="space-y-4">
          <p>居酒屋は<strong>単品で頼めるぶん、実はコントロールしやすい</strong>店です。最初の3品で流れが決まります。</p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ 最初に頼む</p>
              <ul className="space-y-1">
                {["枝豆・冷奴・お浸し・キムチ", "刺身盛り合わせ", "焼き鳥（塩）・砂肝・ハツ", "焼き魚・湯豆腐・茶碗蒸し"].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 後半に頼みたくなるもの</p>
              <ul className="space-y-1">
                {["唐揚げ・フライドポテト", "締めのラーメン・チャーハン・おにぎり", "甘いサワー・カクテル", "ポテトサラダ・マカロニサラダ"].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fastfood" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          ファミレス・ファストフード
        </h2>
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="border border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 px-4 py-2">
                <h3 className="text-sm font-bold text-white">ファミレス</h3>
              </div>
              <div className="p-4 space-y-2">
                {[
                  "メニューにカロリー表示がある店が多い。表示を見て選ぶだけで大きく外さない",
                  "グリルチキン・魚のムニエルなど焼き物を軸にする",
                  "ハンバーグはソースを別添えにしてもらう（かける量を自分で決められる）",
                  "サラダバーがあれば先に野菜を一皿。ドレッシングはノンオイルか少量",
                  "ドリンクバーはブラックコーヒー・無糖茶・炭酸水",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    <p className="text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-600 px-4 py-2">
                <h3 className="text-sm font-bold text-white">ファストフード</h3>
              </div>
              <div className="p-4 space-y-2">
                {[
                  "セットではなく単品で頼む。ポテトとドリンクだけで400kcal前後変わる",
                  "グリルチキン系バーガーを選ぶ（フライ系より脂質が低い）",
                  "サイドはサラダかコーン、飲み物は無糖かゼロカロリー",
                  "牛丼チェーンなら、丼よりサラダ・味噌汁・冷奴のついた定食メニュー",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    <p className="text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          外食続きでも落ちた時期の話
        </h2>
        <div className="space-y-4">
          <p>
            自分が減量を進めていた時期、昼はほぼ毎日外食でした。自炊できるのは夜だけという条件です。それでも体重は落ちました。
            <strong>やったのは、昼のメニューを4つに固定したことだけ</strong>です。
          </p>
          <p>
            焼き魚定食（ごはん少なめ）、そば＋卵、鶏の照り焼き定食、刺身定食。この4つをローテーションして、それ以外は原則選ばない。毎日カロリーを調べる必要がなくなり、
            <strong>考える回数がゼロになったのが一番大きかった</strong>と思っています。
          </p>
          <p>
            逆に、うまくいかなかったのが「毎回その場で一番マシなものを選ぶ」というやり方でした。疲れている日ほど判断がゆるくなり、気づけば週の半分がカツ丼になっていました。
            <strong>意志で選ぶのではなく、選択肢そのものを減らす</strong>ほうが確実です。
          </p>
          <p>
            もうひとつ、外食中心の期間ではっきり感じたのが塩分の影響です。体重の日々の上下が自炊のときより明らかに大きく、朝の数字に一喜一憂しがちでした。途中から週平均だけを見るようにしたら、精神的にかなり楽になりました。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>まず<strong>1食の予算（kcal）</strong>を決める。選ぶのが引き算になる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>ジャンルより<strong>調理法</strong>で判断。揚げる＞炒める＞焼く＞蒸す</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>ごはん少なめ＋野菜1品</strong>。この2つだけで大半の外食は成立する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>麺類は<strong>単品で・スープは残す</strong>。セットにした瞬間に別物になる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>定番メニューを3〜4つ決めて固定する</strong>。毎回選ばない仕組みが最強</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>外食中心の時期は塩分で体重が振れる。<strong>週平均で判断する</strong></span></li>
          </ol>
          <p>
            外食はゼロにするものではなく、選び方を決めておくものです。まずは自分の1日の目標カロリーを把握して、そこから1食の予算を割り出してみてください。サクメシなら質問に答えるだけで出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
