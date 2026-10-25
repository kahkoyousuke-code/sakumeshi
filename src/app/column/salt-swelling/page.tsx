import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import ColumnFigure from "@/components/column/ColumnFigure";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("salt-swelling", {
  title: "体重が一晩で2kg増えた｜むくみと塩分の関係を正しく理解する | サクメシ",
  description:
    "一晩・1日で体重が2kg増えるのは脂肪ではなく水分です。食べすぎた分が脂肪で何kgになるかの早見表、塩分でむくむ仕組み、戻るまでの日数と翌日のリセット方法を解説します。",
});

const TOC = [
  { id: "quick", label: "結論：増えた2kgはどうすれば戻る？" },
  { id: "fact", label: "一晩（1日）で増えた2kgは脂肪ではない" },
  { id: "fat-math", label: "食べすぎた分は脂肪で何kg？早見表" },
  { id: "salt", label: "塩分でむくむ仕組み" },
  { id: "timeline", label: "増えた水分が戻るまでの日数" },
  { id: "amount", label: "塩分は1日どれくらいまで？" },
  { id: "reset", label: "食べすぎた翌日のリセット方法" },
  { id: "potassium", label: "むくみに効く食材（カリウム）" },
  { id: "hidden", label: "見落としがちな高塩分フード" },
  { id: "weigh", label: "体重の正しい測り方" },
  { id: "ng", label: "やってはいけないむくみ対策" },
  { id: "clinic", label: "むくみが続くときは受診も検討する" },
  { id: "experience", label: "毎朝の数字に振り回されていた頃の話" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const SALT_TABLE = [
  { name: "ラーメン（汁まで飲む）", salt: "5〜7g" },
  { name: "ラーメン（汁を残す）", salt: "3〜4g" },
  { name: "カップ麺（汁まで）", salt: "5〜6g" },
  { name: "コンビニ弁当", salt: "3〜5g" },
  { name: "うどん・そば（つゆを飲む）", salt: "4〜6g" },
  { name: "味噌汁 1杯", salt: "1.2〜1.5g" },
  { name: "食パン 6枚切り1枚", salt: "約0.8g" },
  { name: "ハム2枚・ウインナー2本", salt: "約1g" },
  { name: "梅干し 1個", salt: "約2g" },
];

const FAT_TABLE = [
  { surplus: "+500kcal", example: "ラーメンを1杯追加した日", fat: "約0.06kg" },
  { surplus: "+1,000kcal", example: "いつもの夕食をラーメン＋餃子＋ビール2杯にした日", fat: "約0.13kg" },
  { surplus: "+2,000kcal", example: "飲み会で飲んで食べて締めのラーメンまで", fat: "約0.26kg" },
  { surplus: "+3,000kcal", example: "食べ放題・旅行先で朝から晩まで食べた", fat: "約0.39kg" },
  { surplus: "+15,400kcal", example: "（一晩で2kgを脂肪で増やすのに必要な量。ラーメン約20杯分）", fat: "2kg" },
];

const FAQS = [
  {
    q: "1日で2キロ増えた。脂肪が増えたの？",
    a: "ほぼ確実に脂肪ではありません。体脂肪を2kg増やすには約15,400kcalの食べすぎが必要で、1日で食べられる量ではないからです。正体は塩分と糖質で溜め込んだ水分と、胃腸の中身です。いつもどおり食べて水を飲んでいれば、1〜3日でおおむね戻ります。",
  },
  {
    q: "何日たっても体重が戻らない",
    a: "外食1回分の水分なら1〜3日、旅行や連休で数日続いた場合でも1週間ほどで戻ります。1週間たっても戻らない場合は、水分ではなく食べる量そのものが増えている可能性があります。直近1週間の食事を書き出して見直してください。むくみ自体が引かない場合は、後述の受診の目安も確認してください。",
  },
  {
    q: "むくみを取るサプリやお茶は効く？",
    a: "利尿作用で一時的に水分が抜けることはありますが、脂肪は減りません。数字が動いても中身は変わっていないので、ダイエットの進捗としては意味がありません。まずは水分・カリウム・塩分の3点で対処してください。",
  },
  {
    q: "減量中なのに体重が停滞している。むくみのせい？",
    a: "可能性はあります。とくに食事制限が続いている時期は、脂肪が減っていても水分が置き換わって数字が動かないことがあります。2週間の平均で判断し、腹囲やベルトの穴など、体重以外の指標も見てください。",
  },
  {
    q: "生理前のむくみも同じ対策でいい？",
    a: "基本の対策（水分・カリウム・塩分控えめ）は同じです。ただしホルモンの影響によるものなので、完全には防げません。周期の同じ時期どうしで比べるほうが判断しやすくなります。",
  },
  {
    q: "夕方になると脚がパンパンになる",
    a: "重力で下半身に水分が溜まるためで、日中同じ姿勢が続く人に多い現象です。1時間に1回立つ、ふくらはぎを動かす、就寝時に脚を少し高くする、といった対処が有効です。",
  },
];

export default function SaltSwelling() {
  return (
    <ColumnShell
      slug="salt-swelling"
      h1="体重が一晩で2kg増えた｜むくみと塩分の関係を正しく理解する"
      toc={TOC}
      faqs={FAQS}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「昨日ラーメンを食べたら、朝の体重が2kg増えていた」——1日で2キロ増えた数字を見た瞬間は、ダイエット中で一番心が折れるときかもしれません。</p>
        <p>
          でも安心してください。<strong>一晩で増えた2kgは、ほぼ確実に脂肪ではありません</strong>。脂肪を1kg増やすには約7,700kcalの余剰が必要で、1食で達成できる量ではないからです。
        </p>
        <p>この記事では、増えた体重の正体と、翌日にやるべきことを解説します。急ぐ方は次の結論だけ読んでください。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：増えた2kgはどうすれば戻る？
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">一晩で1〜2kg増えたときにやること</p>
            <ol className="space-y-1.5 text-sm text-gray-700">
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>食事は抜かず、いつもどおり食べる</strong>（取り返そうとしない）</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>水はむしろしっかり飲む</strong>（1.5〜2Lが目安。心臓・腎臓の病気で水分制限がある人は主治医の指示を優先）</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">3.</span><span>汁物・麺の汁・加工肉を控えて、<strong>野菜や海藻を1品足す</strong></span></li>
            </ol>
            <p className="text-sm text-gray-700">
              これで<strong>外食1回なら1〜3日、旅行や連休明けでも1週間ほど</strong>で戻るのが普通です。1週間たっても1kg以上残っているなら、水分ではなく食べる量を見直すサインです。顔や脚の腫れそのものが引かない場合は、
              <a href="#clinic" className="text-green-700 underline hover:no-underline">受診の目安</a>
              を確認してください。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fact" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          一晩（1日）で増えた2kgは脂肪ではない
        </h2>
        <div className="space-y-4">
          <p>体重計の数字は、1日のうちでも当たり前に1〜2kg動きます。内訳はこうです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">増減の原因</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">変動幅の目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">戻るまで</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">塩分による水分保持</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜2kg</td>
                  <td className="p-2 border border-green-100">1〜3日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">糖質の摂取（グリコーゲン）</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜1.5kg</td>
                  <td className="p-2 border border-green-100">1〜2日</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">胃腸の内容物</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜1kg</td>
                  <td className="p-2 border border-green-100">1日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">脂肪の増加</td>
                  <td className="p-2 border border-green-100 text-center">多くても0.4kg程度（早見表参照）</td>
                  <td className="p-2 border border-green-100">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            糖質は体内で水分とセットで蓄えられるため、<strong>ラーメンや寿司のように「塩分＋糖質」が重なると一晩で一気に増えます</strong>。逆に言えば、水分が抜ければ数日で戻ります。
          </p>
          <p>
            だからこそ、<strong>判断は1日単位ではなく週平均で</strong>。毎朝一喜一憂するのが一番のストレスです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fat-math" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食べすぎた分は脂肪で何kg？早見表
        </h2>
        <div className="space-y-4">
          <p>
            「脂肪じゃないと言われても信じられない」という人のために、計算で確かめてみます。体脂肪1kgはおよそ7,700kcal（目安の値です）。食べた総カロリーではなく、
            <strong>その日の消費を上回った分（余剰カロリー）÷ 7,700</strong>
            が、脂肪として増えうる量の上限の目安です。余剰の一部はグリコーゲンや熱になるので、実際にはこれより少なくなります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食べすぎた量</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">イメージ</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">脂肪に換算</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {FAT_TABLE.map((row, i) => (
                  <tr key={row.surplus} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.surplus}</td>
                    <td className="p-2 border border-green-100">{row.example}</td>
                    <td className="p-2 border border-green-100 text-center font-bold text-green-700 whitespace-nowrap">{row.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            ※ 余剰カロリーは「その日の摂取 − その日の消費」。メニューの例は量や店によって大きく変わるので、あくまでイメージです。
          </p>
          <p>
            飲み会で思いきり食べた日でも、脂肪として増えるのは<strong>数百グラム</strong>
            です。翌朝に1.5kg増えていたら、残りの1kg以上は水分と胃腸の中身ということになります。
          </p>
          <ColumnFigure
            caption="翌朝の+1.5kgのうち、脂肪は多くても約0.26kg"
            alt="翌朝に1.5kg増えたときの内訳を表す横棒。飲み会で約2,000kcal食べすぎた場合、脂肪は多くても約0.26kgで、残りの1kg以上は水分と胃腸の中身。"
            note="飲み会 約+2,000kcalの例。2,000kcal÷7,700で計算した上限の目安"
          >
            <OvernightGainDiagram />
          </ColumnFigure>
          <p>
            一方で、この数百グラムは水分と違って勝手には消えません。ただ、翌日に食事を抜いて取り返す必要はありません。たとえば飲み会1回分（約2,000kcal）なら、減量中のいつもの食事（1日300〜500kcal控えめ）を4〜7日続ければ相殺できる量です。自分の1日の消費カロリー（維持カロリー）は
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">1日の摂取カロリーの目安</a>
            で計算できます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="salt" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          塩分でむくむ仕組み
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "体は塩分濃度を一定に保とうとする", desc: "塩分（ナトリウム）を多く摂ると、濃度を薄めるために体が水分を溜め込む。これがむくみと体重増の正体。" },
              { title: "喉が渇くのは正常な反応", desc: "しょっぱいものを食べた後に水が欲しくなるのは、体が薄めようとしているサイン。水を我慢しても解決しない。" },
              { title: "日本人は元々塩分が多い", desc: "味噌汁・漬物・醤油・麺類の汁と、和食は塩分が積み上がりやすい。目標は男性7.5g未満・女性6.5g未満だが、平均は10g前後とされる。" },
              { title: "顔と脚に出やすい", desc: "朝は顔、夕方は脚。重力の影響で時間帯によって出る場所が変わる。" },
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
          <ColumnFigure
            caption="塩分で溜めた水は、水を飲んでカリウムを足せば抜けていく"
            alt="むくみが起きて戻るまでの流れ図。塩分を多くとると、体が濃度を薄めようと水を溜め、むくみや体重増になる。水を控えても解決しない。水をしっかり飲みカリウムを足すと、余分な塩分が尿として出て、外食1回なら1〜3日で戻る。"
            note="食事による一時的なむくみの場合。引かないむくみは下の「受診の目安」へ"
          >
            <SaltFlowDiagram />
          </ColumnFigure>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="timeline" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          増えた水分が戻るまでの日数
        </h2>
        <div className="space-y-4">
          <p>
            一番知りたいのは「いつ戻るのか」だと思います。原因によって、戻るまでの時間はだいたい決まっています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">きっかけ</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">増える幅</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">戻るまで</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">ラーメン・外食1食</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜1.5kg</td>
                  <td className="p-2 border border-green-100 text-center">1〜3日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">飲み会（酒＋締め）</td>
                  <td className="p-2 border border-green-100 text-center">1〜2kg</td>
                  <td className="p-2 border border-green-100 text-center">2〜3日</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">旅行・連休（数日続く）</td>
                  <td className="p-2 border border-green-100 text-center">2〜3kg</td>
                  <td className="p-2 border border-green-100 text-center">3日〜1週間</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">糖質制限をやめて主食を戻した</td>
                  <td className="p-2 border border-green-100 text-center">1〜2kg</td>
                  <td className="p-2 border border-green-100 text-center">戻らない（正常な状態）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            最後の行が意外に思われるかもしれません。糖質を制限すると、糖と一緒に蓄えられていた水分が抜けて一気に体重が落ちます。制限をやめれば、その水分が戻ってきます。
            <strong>これは「リバウンド」ではなく、元の正常な状態に戻っただけ</strong>
            です。
          </p>
          <p>
            逆に言えば、
            <strong>1週間たっても戻らない増加は、水分ではない可能性がある</strong>
            ということです。そのときは食事の記録を見直してください。減量中に体重が何週間も動かない場合は、
            <a href="/column/diet-plateau" className="text-green-700 underline hover:no-underline">停滞期の乗り越え方</a>
            も参考になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="amount" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          塩分は1日どれくらいまで？
        </h2>
        <div className="space-y-4">
          <p>
            食事摂取基準では、生活習慣病予防の観点から成人の食塩相当量の目標量が
            <strong>おおむね男性7.5g未満・女性6.5g未満</strong>
            に設定されています。一方、日本人の平均摂取量は10g前後とされ、多くの人が超えています。
          </p>
          <p>数字だけでは分かりにくいので、実際のメニューで見てみます。</p>
          <div className="space-y-1.5">
            {SALT_TABLE.map((row) => (
              <div key={row.name} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-green-100">
                <span className="text-sm">{row.name}</span>
                <span className="text-sm font-bold text-green-700 whitespace-nowrap ml-3">{row.salt}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">※ 商品・店舗によって幅があります。パッケージの「食塩相当量」で確認してください。</p>
          <p>
            <strong>ラーメンを汁まで飲むと、それ1杯で1日の目標量にほぼ届きます</strong>
            。一方、汁を残すだけで2〜3g減らせます。ここが最も費用対効果の高い対策です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="reset" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食べすぎた翌日のリセット方法
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "水をしっかり飲む", desc: "むくんでいるときこそ水分を減らさない。水を控えても、体は塩分濃度を保つために水を抱えたままなので解決しない。普通に飲んだほうが、余分な塩分は尿として出やすい。1.5〜2Lを目安に。" },
            { n: "2", title: "カリウムを含む食材を足す", desc: "カリウムはナトリウムの排出を助ける。バナナ・アボカド・ほうれん草・海藻・きのこなどを1品足す。" },
            { n: "3", title: "翌日の塩分を控える", desc: "絶食する必要はない。味噌汁を1杯にする、麺の汁を残す、加工肉を避ける程度で十分。" },
            { n: "4", title: "普段どおり食べる", desc: "食事を抜いて帳尻を合わせようとすると、反動で食欲が暴れる。翌日は「いつもの食事に戻す」が正解。" },
            { n: "5", title: "軽く歩く・湯船に浸かる", desc: "血流がよくなるとむくみは抜けやすい。ふくらはぎを動かすのが効果的。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}. {item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="potassium" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          むくみに効く食材（カリウム）
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">手軽に足せる</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・バナナ・キウイ・アボカド</li>
                <li>・納豆・豆類</li>
                <li>・ヨーグルト・牛乳</li>
                <li>・トマト・きゅうり</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">食事に組み込む</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ほうれん草・小松菜</li>
                <li>・さつまいも・かぼちゃ</li>
                <li>・わかめ・ひじきなど海藻</li>
                <li>・きのこ類</li>
              </ul>
            </div>
          </div>
          <p>
            カリウムは<strong>野菜・海藻・果物を普通に食べていれば足りる</strong>栄養素で、むくみ対策として特別なサプリは必要ありません。腎臓に持病がある場合はカリウム制限が必要なこともあるので、その場合は主治医の指示を優先してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="hidden" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          見落としがちな高塩分フード
        </h2>
        <div className="space-y-4">
          <p>「しょっぱくないから塩分は少ない」とは限りません。</p>
          <div className="space-y-3">
            {[
              { from: "ラーメン（汁まで）", to: "汁を残す", point: "1杯で1日分の塩分に達することも。汁を残すだけで2〜3g減らせる" },
              { from: "パン・シリアル", to: "量に注意", point: "しょっぱくなくても食パンには塩が入っている。主食から意外と積み上がる" },
              { from: "ハム・ソーセージ・練り物", to: "頻度を下げる", point: "加工肉・練り物は保存のため塩分が高い。毎日の常備菜にはしない" },
              { from: "コンビニ弁当・冷凍食品", to: "栄養成分表示を見る", point: "「食塩相当量」の欄をチェック。1食3g超えが続くと積み上がる" },
              { from: "外食の味噌汁・スープ", to: "1杯まで", point: "おかわり無料は要注意。汁物は最も塩分を摂りやすい形" },
            ].map((item) => (
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
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="weigh" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          体重の正しい測り方
        </h2>
        <div className="space-y-4">
          <p>
            むくみに振り回されないためには、
            <strong>測り方と見方を先に決めておくこと</strong>
            が効きます。条件を揃えないと、そもそも比較になりません。
          </p>
          <div className="bg-white rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">条件を固定する</p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>起床後・トイレを済ませた直後</strong>に測る</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">2.</span><span>服装を固定する（下着だけ、など）</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">3.</span><span>同じ体重計を、同じ床の場所で使う</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">4.</span><span>毎日記録するが、<strong>評価するのは週の平均だけ</strong></span></li>
            </ol>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">週平均で見ると何が変わるか</p>
            <p className="text-sm text-gray-600">
              たとえば先週の平均が70.4kg、今週が70.0kgなら、途中で+1.5kgの日があっても
              <strong>順調に落ちている</strong>と判断できます。日々の数字は情報量が少なく、判断材料にはなりません。
            </p>
          </div>
          <p className="text-sm text-gray-500">
            体重の変動が精神的につらい人は、測る頻度を週2回に落とすのも手です。記録の目的は落ち込むことではなく、傾向を掴むことです。水分をどれくらい飲めばいいかは
            <a href="/column/water-intake" className="text-green-700 underline hover:no-underline">ダイエット中の水分補給</a>
            で詳しく書いています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やってはいけないむくみ対策
        </h2>
        <div className="space-y-3">
          {[
            { habit: "水を飲まない", desc: "最も多い勘違い。水を控えても、体は塩分濃度を保つために水を抱えたままなので解決しない。むくんでいるときこそ普通に飲む。" },
            { habit: "増えた体重分を絶食で取り返す", desc: "増えたのは水分なので、絶食しても脂肪は減らない。むしろ反動のドカ食いを招くだけ。" },
            { habit: "毎朝の体重で一喜一憂する", desc: "日々の変動は水分。落ち込んで自暴自棄になるのが一番の損失。週の平均で見れば流れは分かる。" },
            { habit: "利尿作用のあるサプリに頼る", desc: "一時的に水分は抜けるが脂肪は減らない。数字上の見た目が変わるだけで、ダイエットの進捗ではない。" },
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
        <h2 id="clinic" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          むくみが続くときは受診も検討する
        </h2>
        <div className="space-y-4">
          <p>
            この記事で扱っているのは、
            <strong>食事や生活習慣に由来する一時的なむくみ</strong>
            です。次のような場合は、食事の工夫で解決しようとせず医療機関に相談してください。
          </p>
          <div className="space-y-2">
            {[
              "数日〜1週間たっても、まったく引かない",
              "片脚だけ、片腕だけなど左右差がある",
              "指で押すとへこんだまま戻らない",
              "息切れ・動悸を伴う",
              "急に体重が増え続けている",
              "尿の量が明らかに減った",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            むくみは、腎臓・心臓・肝臓・甲状腺などの状態が背景にあることもあります。減量の話とは別の問題なので、当てはまるものがあれば早めに受診してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          毎朝の数字に振り回されていた頃の話
        </h2>
        <div className="space-y-4">
          <p>
            減量を始めた頃、自分は毎朝の体重に一喜一憂していました。前日にラーメンを食べて体重が増えていると、
            <strong>その日1日ずっと気分が悪い</strong>
            。そして「取り返さないと」と思って昼を抜き、夕方に反動で食べる。この繰り返しでした。
          </p>
          <p>
            落ち着いたのは、体重を週平均で見るようにしてからです。日々の数字が上下していても、
            <strong>週の平均で見れば流れが分かる</strong>
            。自分が落ち込んでいたのは「進捗」ではなく「ノイズ」だったと気づきました。
          </p>
          <p>
            振り返ると、昼を抜いたのも逆効果でした。前日に増えたのが水分なら、食事を抜いても減るのは同じ水分です。
            <strong>反動で食べすぎれば、そちらのほうが本物の増加になります</strong>
            。外食の翌日は、いつもどおり食べて水をしっかり飲むだけで十分です。
          </p>
          <p>
            この頃のことと、週平均に切り替えた具体的なやり方は
            <a href="/column/weight-weekly-average" className="text-green-700 underline hover:no-underline">毎朝の体重に一喜一憂して、昼を抜いていた｜週平均に変えるまで</a>
            にまとめています。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>一晩で増えた1〜2kgは<strong>ほぼ水分</strong>。脂肪は1日でそこまで増えない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>塩分＋糖質</strong>が重なると水分を溜め込みやすい。1〜3日（数日続いた食べすぎでも1週間以内）で戻る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>ラーメンの汁を残すだけで<strong>2〜3gの減塩</strong>になる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>翌日は<strong>水をしっかり飲み、カリウムを足し、普通に食べる</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>測る条件を固定し、<strong>評価は週平均だけ</strong>で行う</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>引かないむくみ・左右差・息切れがあれば<strong>医療機関へ</strong></span></li>
          </ol>
          <p>
            体重の増減に振り回されず続けるには、日々の食事の中身を先に決めてしまうのが一番ラクです。サクメシなら7日分の食事プランをまとめて作れるので、「今日何食べよう」で迷わなくなります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}

/** Breakdown of an overnight +1.5 kg after a ~2,000 kcal surplus (373 px per kg). */
function OvernightGainDiagram() {
  return (
    <svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="40" y="34" fontSize="18" fill="#374151">翌朝 +1.5kg の内訳（飲み会のあと）</text>
      <rect x="40" y="52" width="97" height="72" fill="#F57C00" />
      <rect x="137" y="52" width="463" height="72" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
      <text x="368" y="85" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#374151">水分・胃腸の中身</text>
      <text x="368" y="112" textAnchor="middle" fontSize="18" fill="#374151">1kg以上</text>
      <line x1="88" y1="124" x2="88" y2="152" stroke="#F57C00" strokeWidth="2" />
      <text x="40" y="180" fontSize="20" fontWeight="bold" fill="#F57C00">脂肪：多くても約0.26kg</text>
      <text x="40" y="210" fontSize="16" fill="#9CA3AF">2,000kcal ÷ 7,700kcal ≒ 0.26kg</text>
    </svg>
  );
}

/** How salt causes water retention and how it clears (U-shaped flow). */
function SaltFlowDiagram() {
  const top = [
    { x: 16, l1: "塩分を", l2: "多くとる" },
    { x: 228, l1: "濃度を薄めようと", l2: "水を溜める" },
    { x: 440, l1: "むくみ・", l2: "体重が増える" },
  ];
  const bottom = [
    { x: 440, l1: "水をしっかり飲む", l2: "カリウムを足す" },
    { x: 228, l1: "余分な塩分が", l2: "尿として出る" },
  ];
  return (
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <marker id="salt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#9CA3AF" />
        </marker>
      </defs>
      {top.map((b) => (
        <g key={b.l1}>
          <rect x={b.x} y="20" width="184" height="80" rx="10" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
          <text x={b.x + 92} y="54" textAnchor="middle" fontSize="18" fill="#374151">{b.l1}</text>
          <text x={b.x + 92} y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#374151">{b.l2}</text>
        </g>
      ))}
      <line x1="200" y1="60" x2="224" y2="60" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#salt-arrow)" />
      <line x1="412" y1="60" x2="436" y2="60" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#salt-arrow)" />
      <line x1="532" y1="100" x2="532" y2="176" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#salt-arrow)" />
      <text x="518" y="136" textAnchor="end" fontSize="16" fontWeight="bold" fill="#F57C00">✕ 水を控えても</text>
      <text x="518" y="158" textAnchor="end" fontSize="16" fontWeight="bold" fill="#F57C00">解決しない</text>
      {bottom.map((b) => (
        <g key={b.l1}>
          <rect x={b.x} y="180" width="184" height="80" rx="10" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="2" />
          <text x={b.x + 92} y="214" textAnchor="middle" fontSize="18" fill="#2E7D32">{b.l1}</text>
          <text x={b.x + 92} y="240" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2E7D32">{b.l2}</text>
        </g>
      ))}
      <line x1="440" y1="220" x2="416" y2="220" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#salt-arrow)" />
      <line x1="228" y1="220" x2="204" y2="220" stroke="#9CA3AF" strokeWidth="3" markerEnd="url(#salt-arrow)" />
      <rect x="16" y="180" width="184" height="80" rx="10" fill="#2E7D32" />
      <text x="108" y="214" textAnchor="middle" fontSize="18" fill="#FFFFFF">外食1回なら</text>
      <text x="108" y="240" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#FFFFFF">1〜3日で戻る</text>
    </svg>
  );
}
