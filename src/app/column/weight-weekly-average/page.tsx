import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("weight-weekly-average", {
  title:
    "体重が毎日増えたり減ったりする｜昼を抜いて反動で食べていた頃の話 | サクメシ",
  description:
    "運営者が92kgから落とし始めた頃、毎朝の体重が増えているとその日の昼を抜き、夕方に反動で食べていました。1日で増えた1kgが脂肪ではありえないことを当時の実数で計算し、体重を週平均で見るようにして何が変わったかを書きます。",
});

const TOC = [
  { id: "morning", label: "毎朝、体重計に乗って落ち込んでいた" },
  { id: "fat", label: "1日で増えた1kgは、脂肪なのか" },
  { id: "skip", label: "昼を抜くと、収支はどうなっていたか" },
  { id: "noise", label: "見ていたのは進捗ではなく、ノイズだった" },
  { id: "weekly", label: "週平均に変えて、変わったのは行動のほうだった" },
  { id: "keep", label: "落としている最中は、毎日測っていた" },
  { id: "weak", label: "この記事の弱いところ" },
  { id: "summary", label: "まとめ" },
];

/** 当時、毎朝くり返していた流れ。記録は残っていないので行動だけを書いている。 */
const LOOP = [
  {
    when: "起きてすぐ",
    doing: "体重計に乗る",
    thought: "前日にラーメンを食べた日は、だいたい増えている",
  },
  {
    when: "その日の午前中",
    doing: "ずっと気分が悪い",
    thought: "「昨日のあれが効いた」と思っている",
  },
  {
    when: "昼",
    doing: "食事を抜く",
    thought: "「取り返さないと」",
  },
  {
    when: "夕方",
    doing: "コンビニに寄って食べる",
    thought: "空腹で、選ぶ余裕がない",
  },
  {
    when: "翌朝",
    doing: "また体重計に乗る",
    thought: "最初に戻る",
  },
];

/** 体脂肪1kgぶんの黒字が、当時の自分の食事で何日分にあたるか。 */
const FAT_MATH = [
  { item: "体脂肪1kgに相当するエネルギー", value: "約7,700kcal" },
  {
    item: "92kgの頃の1日の摂取（あとから積み上げた概算）",
    value: "2,400〜2,900kcal",
  },
  { item: "1kg増やすのに必要な「余分な」食事", value: "いつもの約2.7〜3.2日分" },
  { item: "前夜のラーメン1杯", value: "800〜1,100kcal" },
];

/** 昼を抜いた日の収支。夕方に食べた量は記録がないため推定。 */
const SKIP_MATH = [
  { item: "昼を抜いて浮いた分", value: "−約800kcal", saved: true },
  { item: "菓子パン1個", value: "＋300〜400kcal", saved: false },
  { item: "菓子パン2個＋飲み物", value: "＋700〜900kcal", saved: false },
  { item: "差し引き", value: "ほぼゼロ、または黒字", saved: false },
];

/** 毎朝の上下と、実際に進んでいた速度の比較。 */
const NOISE = [
  { item: "1日の体重の振れ幅", value: "1〜2kg" },
  { item: "実際に落ちていた速度（4kg／2ヶ月で計算）", value: "1週間で約0.5kg" },
  { item: "振れ幅は進捗の何倍か", value: "約2〜4倍" },
];

/** 朝の数字が増えていた日に、何をしていたか。 */
const BEHAVIOR = [
  {
    scene: "朝、前日より増えていた",
    before: "昼を抜く",
    after: "いつもどおり食べる。週平均を見るまで判断しない",
  },
  {
    scene: "朝、前日より減っていた",
    before: "気がゆるんで夜に食べる",
    after: "同じく、いつもどおり食べる",
  },
  {
    scene: "外食や飲みの翌日",
    before: "増えた数字を見て1日引きずる",
    after: "水分とみなして、水をしっかり飲む",
  },
  {
    scene: "判断するタイミング",
    before: "毎朝",
    after: "週に1回、前の週の平均と比べる",
  },
];

export default function WeightWeeklyAverage() {
  return (
    <ColumnShell
      slug="weight-weekly-average"
      h1="毎朝の体重に一喜一憂して、昼を抜いていた。──その1kgは、脂肪ではなかった"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          体重の日々の上下については、一般論として「
          <a
            href="/column/salt-swelling"
            className="text-green-700 underline hover:no-underline"
          >
            判断は1日単位ではなく週平均で
          </a>
          」と書きました。いま読み返しても、そのとおりだと思います。
        </p>
        <p>
          ただ、自分は<strong>長いあいだそれができていませんでした</strong>
          。92kgから落とし始めた頃、毎朝体重計に乗って、増えていればその日1日ずっと気分が悪く、「取り返さないと」と思って昼を抜き、夕方に反動で食べる。これをくり返していました。
        </p>
        <p>
          この記事は、そのときの行動を書き出して、
          <strong>当時の自分の食事の数字で計算し直したもの</strong>
          です。結論を先に書くと、朝に増えていた1kgは脂肪ではありえず、昼を抜いて浮かせた分は夕方の菓子パン2個で消えていました。
        </p>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-gray-700">
            <strong className="text-amber-800">先に断っておきます。</strong>
            当時、体重も食事もほとんど記録していませんでした。なので「何月何日に何kg」という表は出せません。この記事で使う数字は、
            <a
              href="/column/eating-out-92kg"
              className="text-green-700 underline hover:no-underline"
            >
              92kgの頃に食べていたものを書き出した記事
            </a>
            で積み上げたカロリーと、一般的な換算です。夕方に食べた量については記録がなく、
            <strong>推定だとはっきり書きます</strong>。
          </p>
        </div>
      </div>

      <hr className="border-green-100" />

      {/* 1. 毎朝のループ */}
      <section>
        <h2
          id="morning"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          毎朝、体重計に乗って落ち込んでいた
        </h2>
        <div className="space-y-4">
          <p>まず、当時くり返していた流れをそのまま並べます。</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    タイミング
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    やっていたこと
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    そのときの考え
                  </th>
                </tr>
              </thead>
              <tbody>
                {LOOP.map(({ when, doing, thought }) => (
                  <tr key={when}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {when}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700">
                      {doing}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {thought}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            自分では「真面目にやっている」つもりでした。毎日測っているし、増えた日には対策もしている。
            <strong>測っているのだから管理できている</strong>
            、と思っていたわけです。
          </p>
          <p>
            いま数字にしてみると、この流れのどこにも減量に効いている部分がありませんでした。順番に見ていきます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 1kgは脂肪か */}
      <section>
        <h2
          id="fat"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          1日で増えた1kgは、脂肪なのか
        </h2>
        <div className="space-y-4">
          <p>
            体脂肪を1kg増やす（あるいは減らす）のに必要なエネルギーは、およそ
            <strong>7,700kcal</strong>
            とされています。この記事の計算はすべてこの数字を使います（増えた体重のすべてが体脂肪とは限らず、7,700kcalという数字自体も目安です）。
          </p>
          <p>
            これを、当時の自分が1日に食べていた量と並べます。92kgの頃の食事は別記事で書き出していて、飲んだ日は1日で約2,900kcal、平均しても2,400〜2,600kcalありました。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    数字
                  </th>
                </tr>
              </thead>
              <tbody>
                {FAT_MATH.map(({ item, value }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700 whitespace-nowrap">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            つまり、1日で体脂肪を1kg増やそうと思ったら、
            <strong>いつもの食事に加えて、さらに3日分ほどを余分に食べる</strong>
            必要があります。前の晩にラーメンを1杯（800〜1,100kcal）食べたくらいでは、まったく届きません。
          </p>
          <p>
            それでも朝の数字は1kg増えています。増えていたのは、
            <strong>
              食べたものと飲んだものの重さ、塩分で抱え込んだ水分、腸の中に残っているもの
            </strong>
            です。脂肪はその速さでは増えません。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              念のために書くと、逆も同じです。1日で1kg減っていても、それは脂肪が1kg減ったことにはなりません。減っているのも、たいていは同じ水分です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. 昼を抜く */}
      <section>
        <h2
          id="skip"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          昼を抜くと、収支はどうなっていたか
        </h2>
        <div className="space-y-4">
          <p>
            当時の昼は、うどんやパスタの単品で
            <strong>約800kcal</strong>
            でした。抜けばその分が浮きます。問題はそのあとです。92kgの頃の自分は、
            <strong>夕方に必ずコンビニに寄っていました</strong>
            。昼を抜いた日は、そこに空腹が上乗せされます。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    増減
                  </th>
                </tr>
              </thead>
              <tbody>
                {SKIP_MATH.map(({ item, value, saved }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td
                      className={`border border-green-100 px-3 py-2 font-bold whitespace-nowrap ${
                        saved ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            当時よく買っていた菓子パンは1個300〜400kcalのものが多いので、
            <strong>2個と飲み物で、抜いた800kcalはほぼ埋まります</strong>
            。昼を我慢した意味は、計算上ほとんど残りません。
          </p>
          <p>
            さらに良くないのは、抜いたことで減るものと、朝に増えていたものが
            <strong>そもそも別物だった</strong>
            点です。前日に増えていたのが水分なら、昼を抜いて減るのも水分と胃の中身です。脂肪には触れていません。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-700">
              <strong className="text-amber-800">推定だと明記します。</strong>
              昼を抜いた日に夕方いくら食べたかの記録は残っていません。ここで使った「菓子パン2個＋飲み物」は、当時よく買っていたものからの見積もりです。実際にはもっと食べていた日も、そうでない日もあったはずです。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. ノイズ */}
      <section>
        <h2
          id="noise"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          見ていたのは進捗ではなく、ノイズだった
        </h2>
        <div className="space-y-4">
          <p>
            自分にとって一番こたえたのは、この計算でした。当時、
            <a
              href="/column/scale-vs-mirror"
              className="text-green-700 underline hover:no-underline"
            >
              最初の1〜3ヶ月で3〜5kg
            </a>
            落ちています。仮に2ヶ月で4kgとすると、1週間あたり約0.5kgのペースです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    数字
                  </th>
                </tr>
              </thead>
              <tbody>
                {NOISE.map(({ item, value }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700 whitespace-nowrap">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong>1日の振れ幅のほうが、1週間ぶんの進捗より大きい</strong>
            のです。順調に落ちている最中でも、朝の数字は普通に増えます。増えたという事実は、うまくいっていない証拠には
            <strong>まったくなりません</strong>。
          </p>
          <p>
            92kgに対して1.5kgは約1.6%です。自分は毎朝それを見て1日の気分を決め、食事の内容まで変えていました。言い換えると、
            <strong>ノイズのほうが信号より大きい数字を判断材料にしていた</strong>
            ということです。使える精度ではありませんでした。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. 週平均 */}
      <section>
        <h2
          id="weekly"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          週平均に変えて、変わったのは行動のほうだった
        </h2>
        <div className="space-y-4">
          <p>
            落ち着いたのは、体重を<strong>週平均で見るようにしてから</strong>
            です。7日ぶんを足して7で割り、前の週の平均と比べる。日々の上下は平均に吸収されて、流れだけが残ります。
          </p>
          <p>
            ただ、自分に効いたのは「気持ちが楽になった」ことよりも、
            <strong>毎朝の判断そのものが発生しなくなった</strong>
            ことでした。朝の数字では行動を変えないと決めたので、昼を抜くかどうかを考える場面が消えたわけです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    場面
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    週平均にする前
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    したあと
                  </th>
                </tr>
              </thead>
              <tbody>
                {BEHAVIOR.map(({ scene, before, after }) => (
                  <tr key={scene}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {scene}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-red-700">
                      {before}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-800">
                      {after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            測る条件も固定していました。
            <strong>起床直後・トイレのあと・同じ服装</strong>
            で測る。条件がばらつくと、それ自体が振れ幅を増やすので、平均を取る意味が薄くなります。
          </p>
          <p>
            週平均が2週続けて落ちていなければ、そこで初めて食事を見直す。
            <a
              href="/column/diet-plateau"
              className="text-green-700 underline hover:no-underline"
            >
              停滞期かどうかの判断
            </a>
            も、この単位でないと区別がつきませんでした。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. 測るのはやめない */}
      <section>
        <h2
          id="keep"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          落としている最中は、毎日測っていた
        </h2>
        <div className="space-y-4">
          <p>
            「一喜一憂するなら測らないほうがいい」という考え方もあります。ただ自分がやったのは、
            <strong>測るのをやめることではありませんでした</strong>。
          </p>
          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-2">
            <p className="text-sm text-gray-700">
              落としている最中の測る頻度：
              <strong className="text-green-700">毎日</strong>
            </p>
            <p className="text-sm text-gray-700">
              判断する頻度：<strong className="text-green-700">週1回</strong>
            </p>
          </div>
          <p>
            <strong>
              測るのをやめるのではなく、測った数字で毎日判断するのをやめる
            </strong>
            。減量中の落としどころはここでした。
          </p>
          <p>
            正直に書くと、<strong>いまは日常的に体重を測っていません</strong>
            。ただしこれは「測らなくていい」という結論ではありません。自分は過去に何度か、
            <strong>目標体重に届いた時点で記録をやめて、そのたびにリバウンドしています</strong>
            。測らなくなると、戻り始めたことに気づくのが数kg遅れるからです。
          </p>
          <p>
            戻らなくなったのは、目標を「◯kgまで落とす」から
            <strong>「◯kg以下で1年過ごす」</strong>
            に変えてからでした（
            <a
              href="/column/no-rebound"
              className="text-green-700 underline hover:no-underline"
            >
              リバウンドしない食べ方
            </a>
            ）。測るのをやめて平気になったのは、その基準が先にあったからで、順番が逆だと以前と同じことになります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. 弱いところ */}
      <section>
        <h2
          id="weak"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          この記事の弱いところ
        </h2>
        <div className="space-y-4">
          <p>都合の悪い点も書いておきます。</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>当時の記録がない。</strong>
              体重も食事も測っていなかったので、「週平均がこう動いた」というグラフは出せません。残っているのは行動と、あとから積み上げた数字だけです
            </li>
            <li>
              <strong>夕方に食べた量は推定。</strong>
              昼を抜いた日に何をどれだけ食べたかは覚えていません。菓子パン2個は当時の常食からの見積もりです
            </li>
            <li>
              <strong>週平均にしたから落ちた、とは言えない。</strong>
              同じ時期に食事の中身も変えています。どちらがどれだけ効いたかは分けられません
            </li>
            <li>
              <strong>1人の1例。</strong>
              身長174cm・開始92kgの成人男性の話です。振れ幅の大きさは体格や食事内容でも変わります
            </li>
          </ul>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-700">
              短期間に体重が大きく増減する、むくみが続くといった場合は、食事や水分だけの問題ではないことがあります。心当たりがあるときは医療機関に相談してください。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 8. まとめ */}
      <section>
        <h2
          id="summary"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          まとめ
        </h2>
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li>
              92kgから落とし始めた頃、毎朝の体重が増えていると昼を抜き、夕方に反動で食べていた
            </li>
            <li>
              体脂肪1kgは約7,700kcal。当時の食事で
              <strong>3日分ほどを余分に食べる</strong>
              計算になるので、前夜のラーメンで増えた1kgは脂肪ではない
            </li>
            <li>
              昼を抜いて浮く約800kcalは、
              <strong>夕方の菓子パン2個と飲み物でほぼ埋まる</strong>
            </li>
            <li>
              1日の振れ幅1〜2kgは、当時の
              <strong>1週間ぶんの進捗（約0.5kg）より大きい</strong>
              。毎朝の数字は判断材料にならない
            </li>
            <li>
              週平均に変えて効いたのは気分よりも、
              <strong>昼を抜くという判断が発生しなくなったこと</strong>
            </li>
            <li>
              落としている最中は<strong>毎日測って、判断は週1回</strong>
              。いまは日常的に測っていないが、過去に記録をやめた時点でリバウンドを繰り返しているので、やめる順番には注意がいる
            </li>
          </ul>
        </div>
      </section>
    </ColumnShell>
  );
}
