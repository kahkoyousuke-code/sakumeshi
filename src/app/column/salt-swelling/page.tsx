import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/salt-swelling" },
  title: "体重が一晩で2kg増えた｜むくみと塩分の関係を正しく理解する | サクメシ",
  description:
    "一晩で体重が増えるのは脂肪ではなく水分です。塩分とむくみの仕組み、翌日のリセット方法、カリウムを含む食材と外食での対策を解説します。",
};

const TOC = [
  { id: "fact", label: "一晩で増えた2kgは脂肪ではない" },
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
  { name: "食パン 6枚切1枚", salt: "約0.8g" },
  { name: "ハム2枚・ウインナー2本", salt: "約1g" },
  { name: "梅干し 1個", salt: "約2g" },
];

const FAQS = [
  {
    q: "むくみを取るサプリやお茶は効く？",
    a: "利尿作用で一時的に水分が抜けることはありますが、脂肪は減りません。数字が動いても中身は変わっていないので、ダイエットの進捗としては意味がありません。まずは水分・カリウム・塩分の3点で対処してください。",
  },
  {
    q: "減量中なのに体重が停滞している。むくみのせい？",
    a: "可能性はあります。とくに食事制限が続いている時期は、脂肪が減っていても水分が置き換わって数字が動かないことがあります。判断は2週間の平均で。腹囲やベルトの穴など、体重以外の指標も見てください。",
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
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「昨日ラーメンを食べたら、朝の体重が2kg増えていた」——ダイエット中に一番心が折れる瞬間かもしれません。</p>
        <p>
          でも安心してください。<strong>一晩で増えた2kgは、ほぼ確実に脂肪ではありません</strong>。脂肪を1kg増やすには約7,700kcalの余剰が必要で、一食で達成できる量ではないからです。
        </p>
        <p>この記事では、増えた体重の正体と、翌日にやるべきことを解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="fact" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          一晩で増えた2kgは脂肪ではない
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
                  <td className="p-2 border border-green-100 text-center">1日で最大0.2kg程度</td>
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
        <h2 id="salt" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          塩分でむくむ仕組み
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "体は塩分濃度を一定に保とうとする", desc: "塩分（ナトリウム）を多く摂ると、濃度を薄めるために体が水分を溜め込む。これがむくみと体重増の正体。" },
              { title: "喉が渇くのは正常な反応", desc: "しょっぱいものを食べた後に水が欲しくなるのは、体が薄めようとしているサイン。水を我慢しても解決しない。" },
              { title: "日本人は元々塩分が多い", desc: "味噌汁・漬物・醤油・麺類の汁と、和食は塩分が積み上がりやすい。目標は1日6〜7g前後だが、平均は10g前後とされる。" },
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
                  <td className="p-2 border border-green-100 text-center">1〜2日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">飲み会（酒＋締め）</td>
                  <td className="p-2 border border-green-100 text-center">1〜2kg</td>
                  <td className="p-2 border border-green-100 text-center">2〜3日</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">旅行・連休（数日続く）</td>
                  <td className="p-2 border border-green-100 text-center">2〜3kg</td>
                  <td className="p-2 border border-green-100 text-center">3〜5日</td>
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
            最後の行が意外に思われるかもしれません。糖質を制限すると、糖と一緒に蓄えられていた水分が抜けて一気に体重が落ちます。制限をやめれば、その水分が戻るだけです。
            <strong>これは「リバウンド」ではなく、元の正常な状態に戻っただけ</strong>
            です。
          </p>
          <p>
            逆に言えば、
            <strong>1週間経っても戻らない増加は、水分ではない可能性がある</strong>
            ということ。そのときは食事の記録を見直してください。
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
          <p>数字にすると分かりにくいので、実際のメニューで見てみます。</p>
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
            <strong>ラーメンを汁まで飲むと、それ1杯で1日分に達します</strong>
            。逆に、汁を残すだけで2〜3g減らせる。ここが最も費用対効果の高い対策です。
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
            { n: "1", title: "水をしっかり飲む", desc: "むくんでいるときこそ水分を減らさない。体が水を溜め込むのは足りないと感じているから。1.5〜2Lを目安に。" },
            { n: "2", title: "カリウムを含む食材を足す", desc: "カリウムはナトリウムの排出を助ける。バナナ・アボカド・ほうれん草・海藻・きのこなどを1品足す。" },
            { n: "3", title: "翌日の塩分を控える", desc: "絶食する必要はない。味噌汁を1杯にする、麺の汁を残す、加工肉を避ける程度で十分。" },
            { n: "4", title: "普段どおり食べる", desc: "1日抜いて帳尻を合わせようとすると、反動で食欲が暴れる。翌日は「いつもの食事に戻す」が正解。" },
            { n: "5", title: "軽く歩く・湯船に浸かる", desc: "血流が戻るとむくみは抜けやすい。ふくらはぎを動かすのが効果的。" },
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
            むくみ対策として特別なサプリは必要ありません。<strong>野菜・海藻・果物を普通に食べていれば足りる</strong>栄養素です。腎臓に持病がある場合はカリウム制限が必要なこともあるので、その場合は主治医の指示を優先してください。
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
              { from: "パン・シリアル", to: "量に注意", point: "甘い味でも食パンには塩が入っている。主食から意外と積み上がる" },
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
            体重の変動が精神的につらい人は、測る頻度を週2回に落とすのも手です。記録の目的は落ち込むことではなく、傾向を掴むことです。
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
            { habit: "水を飲まない", desc: "最も多い勘違い。水分を減らすと体はさらに溜め込もうとする。むくんでいるときこそ普通に飲む。" },
            { habit: "増えた体重ぶんを絶食で取り返す", desc: "増えたのは水分なので、絶食しても脂肪は減らない。むしろ反動のドカ食いを招くだけ。" },
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
              "数日〜1週間経っても、まったく引かない",
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
            減量を始めた頃、自分は毎朝の体重に一喜一憂していました。前日にラーメンを食べて+1.5kgになっていると、
            <strong>その日1日ずっと気分が悪い</strong>
            。そして「取り返さないと」と思って昼を抜き、夕方に反動で食べる。この繰り返しでした。
          </p>
          <p>
            変わったのは、記録を週平均で見るようにしてからです。日々の増減は上下しているのに、
            <strong>週の平均は毎週きれいに下がっていた</strong>
            。それを見て、自分が落ち込んでいたのは「進捗」ではなく「ノイズ」だったと分かりました。
          </p>
          <p>
            もうひとつ効いたのが、外食した翌日に絶食するのをやめたことです。増えたのが水分なら、絶食しても抜けるのは同じ水分だけ。むしろ反動でその日の夜に食べすぎて、
            <strong>結果的にマイナスになっていた</strong>
            のが実際でした。今は「翌日はいつもどおり食べて、水をしっかり飲む」だけにしています。
          </p>
          <p>
            大会前の絞り込み期には、体重の変動幅がさらに大きくなります。そのときも見ていたのは体重ではなく、鏡と腹囲でした。
            <strong>数字は1つだけ見ていると必ず判断を誤ります</strong>。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>塩分＋糖質</strong>が重なると水分を溜め込みやすい。1〜3日で戻る</span></li>
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
