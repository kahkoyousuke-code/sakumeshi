import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/chicken-bento-1year" },
  title:
    "同じ鶏むね弁当を1年続けている｜飽きなかった理由は味ではなかった | サクメシ",
  description:
    "低温調理した鶏むね肉とおにぎりだけの弁当を、運営者が1年以上続けています。週に何kg仕込み、何時間かかり、いくらかかったのかを実数で公開し、飽きなかった理由と、加熱が足りているか分からなくなった失敗までを書きました。",
};

const TOC = [
  { id: "what", label: "週に1回、鶏むねを2kg仕込むだけ" },
  { id: "numbers", label: "1年ぶんを数字にしてみる" },
  { id: "taste", label: "味は塩と胡椒だけ。それでも飽きなかった" },
  { id: "why", label: "続いた理由は「作らないと昼に困る」から" },
  { id: "heat", label: "一度、加熱が足りているのか分からなくなった" },
  { id: "weak", label: "この運用の弱いところ" },
  { id: "try", label: "同じことを試すなら" },
  { id: "summary", label: "まとめ" },
];

/** 1回の仕込みの実態。すべて自分の運用の実数で、レシピの推奨値ではない。 */
const ONE_BATCH = [
  { item: "仕込む頻度", value: "週1回", note: "5日分をまとめて" },
  { item: "鶏むね肉", value: "2kg前後（生）", note: "業務用サイズをそのまま" },
  { item: "味付け", value: "塩・胡椒のみ", note: "1年間ほぼ変えていない" },
  {
    item: "自分が手を動かす時間",
    value: "30分強",
    note: "低温調理器の放置時間は別。その間は何もしない",
  },
  {
    item: "使い道",
    value: "昼の弁当＋夕食",
    note: "弁当が200g前後、残りは夕食のたんぱく源",
  },
];

/** 1年ぶんに引き伸ばした概算。週1回・年52週として計算している。 */
const ONE_YEAR = [
  { item: "仕込んだ回数", value: "約52回" },
  { item: "鶏むね肉（生の重量）", value: "約104kg" },
  { item: "手を動かした時間", value: "約26時間" },
  { item: "この弁当を食べた回数", value: "約260食" },
];

/** 作り置き記事の定番と、実際に1年やってみた結果のずれ。 */
const GAP = [
  {
    common: "飽きるから、味付けのバリエーションを用意する",
    mine: "塩と胡椒だけ。1年変えていないが飽きなかった",
  },
  {
    common: "手軽だから続く",
    mine: "週に30分は手を動かす。手軽ではないが続いた",
  },
  {
    common: "好きなものを選べば続く",
    mine: "好きだからではなく、作らないと昼に困るから続いた",
  },
  {
    common: "低温調理は温度が低いほどしっとり仕上がる",
    mine: "不安になった時点で温度を上げ、時間を伸ばした",
  },
];

export default function ChickenBento1Year() {
  return (
    <ColumnShell
      slug="chicken-bento-1year"
      h1="同じ鶏むね弁当を1年続けている。──飽きなかったのは、味を工夫したからではない"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          作り置き弁当の記事は、だいたい「手軽」「時短」「飽きない味付けのコツ」で書かれています。私も一般論としては同じことを書きました（
          <a
            href="/column/meal-prep"
            className="text-green-700 underline hover:no-underline"
          >
            作り置きダイエットの始め方
          </a>
          ）。
        </p>
        <p>
          ただ、自分が実際に<strong>1年以上続けている弁当</strong>
          を振り返ると、続いた理由はそのどれでもありませんでした。手軽でもないし、味も工夫していません。中身は
          <strong>低温調理した鶏むね肉とおにぎりだけ</strong>で、1年間ほとんど変わっていません。
        </p>
        <p>
          この記事は、その1年を数字にして書き出したものです。週に何kg買い、何時間かかり、どこで失敗したか。うまくいった話だけでは意味がないので、
          <strong>加熱が足りているのか分からなくなって怖くなった話</strong>
          も書きます。よそで読める一般論ではなく、自分の運用の記録です。
        </p>
      </div>

      <hr className="border-green-100" />

      {/* 1. 何をしているか */}
      <section>
        <h2
          id="what"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          週に1回、鶏むねを2kg仕込むだけ
        </h2>
        <div className="space-y-4">
          <p>
            やっていることは単純です。週に1回、鶏むね肉を2kgほど買ってきて、低温調理器でまとめて火を通す。それを平日の弁当に200gずつ入れ、余りは夕食のたんぱく源に回す。おかずはそれだけで、あとはおにぎりです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    実際の運用
                  </th>
                </tr>
              </thead>
              <tbody>
                {ONE_BATCH.map(({ item, value, note }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2">
                      <span className="font-bold text-green-700">{value}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">
                        {note}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            肉は業務用サイズで買います。スーパーの少量パックを何個も買うより、業務スーパーやコストコのような大きい単位のほうが単価が下がるからです。買う量を「2kg」と決めてしまうと、店で悩む時間も消えます。
          </p>
          <p>
            そして、ここが自分でも意外だったのですが、
            <strong>手を動かす時間は30分では収まりません</strong>
            。低温調理は「放り込んで放置」と言われますし、確かに加熱中は何もしませんが、その前後があります。パックを開けて水気を拭き、塩と胡椒をして袋に入れ、加熱が終わったら粗熱を取って小分けし、洗い物をする。全部で30分強はかかっています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 1年ぶんの数字 */}
      <section>
        <h2
          id="numbers"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          1年ぶんを数字にしてみる
        </h2>
        <div className="space-y-4">
          <p>
            週1回を1年続けると、こうなります。年52週として計算した概算です。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    1年ぶん
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    概算
                  </th>
                </tr>
              </thead>
              <tbody>
                {ONE_YEAR.map(({ item, value }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2">
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
            書き出してみて一番ひっかかったのは
            <strong>「約26時間」</strong>
            のほうでした。丸一日以上を鶏肉の仕込みに使っている計算になります。ダイエットのために毎日1時間のランニングをしろと言われたら、多くの人は無理だと答えると思います。それに比べれば年26時間は軽いのですが、
            <strong>ゼロではない</strong>
            。ここを「手軽です」と書いてしまうと、読んだ人が実際にやったときに話が違うことになります。
          </p>

          <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">
            弁当1食の中身
          </h3>
          <p>
            弁当の中身は、鶏むね肉200gとおにぎり1個です。皮なしの鶏むね肉は食品成分表でおおよそ100gあたり105kcal・たんぱく質23g前後なので、200gで
            <strong>およそ210kcal・たんぱく質46g前後</strong>
            。おにぎりを180kcalほどとすると、昼食は合計400kcal弱になります。
          </p>
          <p>
            以前の昼食はコンビニ弁当や菓子パンで、700〜900kcalは食べていました（
            <a
              href="/column/eating-out-92kg"
              className="text-green-700 underline hover:no-underline"
            >
              92kgのとき、外食で何を食べていたか
            </a>
            ）。カロリーが半分以下になって、たんぱく質は倍以上になっています。狙って設計したというより、
            <strong>肉とおにぎりしか入れなかった結果</strong>
            そうなりました。
          </p>

          <h3 className="text-base font-bold text-gray-800 mt-6 mb-2">
            お金の話（おまけ）
          </h3>
          <p>
            業務用サイズの鶏むね肉は、私が買っている範囲では100gあたり60〜80円程度です。弁当に使うぶん（週1kg前後）だけで見ると週600〜800円、年間で3〜4万円台。同じ260食をコンビニ弁当（1食500〜600円）にすると14万円前後になるので、差は年10万円近くつきます。
          </p>
          <p className="text-sm text-gray-500">
            ※ 肉の価格は店や時期で大きく動きます。ここに書いたのは私の買い物の実感で、どこでもこの単価で買えるという意味ではありません。カロリーとたんぱく質も、部位・皮の有無・調理法で変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. 味 */}
      <section>
        <h2
          id="taste"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          味は塩と胡椒だけ。それでも飽きなかった
        </h2>
        <div className="space-y-4">
          <p>
            作り置きの記事はほぼ必ず「飽きないように味付けを変えましょう」と書きます。カレー風味、ハーブ、麹、といった具合です。私も一般論としてはそう書きました。
          </p>
          <p>
            ところが自分の運用では、<strong>1年間ずっと塩と胡椒だけ</strong>
            です。カレー粉すら使っていません。それで飽きなかったのかというと、飽きませんでした。
          </p>
          <p>
            理由を後から考えると、<strong>主役として食べていないから</strong>
            だと思います。味わうために開ける弁当ではなく、昼にたんぱく質を入れるために開ける弁当です。おいしいかどうかを毎回評価していないので、飽きるという判断自体が発生しません。
          </p>
          <p>
            そして味を増やさないことには、実務的な利点もありました。味付けを4種類に増やすと、仕込みのときに「今週はどれを何袋作るか」を決める必要が出ます。袋も洗い物も増えます。
            <strong>選択肢を増やすほど、週1回の作業が重くなる</strong>
            。重くなれば、いつかサボります。
          </p>
          <p className="text-sm text-gray-500">
            ※ これは私の場合の話です。同じものを続けるのが苦痛な人は普通にいますし、その場合に無理をする理由はありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. 続いた理由 */}
      <section>
        <h2
          id="why"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          続いた理由は「作らないと昼に困る」から
        </h2>
        <div className="space-y-4">
          <p>
            では、なぜ1年も続いたのか。自分では答えははっきりしていて、
            <strong>作らないと昼ご飯に困るから</strong>
            です。健康意識でも、効果を実感したからでもありません。
          </p>
          <p>
            仕込まなかった週は、昼に何も持っていない状態で会社に行くことになります。そうなれば買いに行くしかなく、それは以前の生活に戻るということです。それが分かっているので、週に一度、肉を茹でます。
            <strong>やる気の問題ではなく、やらなかったときに困るかどうかの問題</strong>
            でした。
          </p>
          <p>
            このサイトで書いてきた自分の話は、結局そこに集まります。太っていた頃は毎日の増加が小さすぎて気づけなかった（
            <a
              href="/column/slow-weight-gain"
              className="text-green-700 underline hover:no-underline"
            >
              1日30gずつ太る
            </a>
            ）。外食は選び方より、場面そのものが消えたことが効いた（
            <a
              href="/column/eating-out-92kg"
              className="text-green-700 underline hover:no-underline"
            >
              外食で何を食べていたか
            </a>
            ）。そして弁当は、続ける意志ではなく、
            <strong>作らないと困るという既定の状態</strong>
            が支えていました。三つとも、意志の量の話ではありません。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    よく言われること
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    実際にやってみた1年
                  </th>
                </tr>
              </thead>
              <tbody>
                {GAP.map(({ common, mine }) => (
                  <tr key={common}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {common}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-medium">
                      {mine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. 加熱の失敗 */}
      <section>
        <h2
          id="heat"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          一度、加熱が足りているのか分からなくなった
        </h2>
        <div className="space-y-4">
          <p>
            この1年で一番まずかったのは、味でも継続でもなく、
            <strong>加熱の不安</strong>
            です。低温調理は名前のとおり低い温度で長く火を入れる方法なので、切ったときの見た目が、しっかり焼いた鶏肉とは違います。中心が白くなりきっていないように見えて、これは本当に食べていいのかと分からなくなりました。
          </p>
          <p>
            調べると、厚生労働省が家庭向けに出している目安ははっきりしています。食中毒を防ぐ加熱の条件は
            <strong>「中心部の温度が75℃で1分間以上」</strong>
            。冷蔵庫は10℃以下に保つこと、菌は室温でも短時間で増えること（O157は室温で15〜20分で2倍に増える、と書かれています）も併記されています。
          </p>
          <p>
            低温調理の世界では、これより低い温度でも十分な時間を保てば同等の効果が得られる、という考え方が使われます。ただしそれは
            <strong>温度と時間の両方が正確に管理できていることが前提</strong>
            の話で、肉の厚みや量、器具の性能で条件は変わります。素人が「もう少し低いほうがしっとりするから」と自己流で下げていい場所ではありません。
          </p>
          <p>
            私がやったのは単純で、<strong>温度を上げ、時間を伸ばしました</strong>
            。仕上がりのしっとり感は多少落ちます。それでも、昼に食べるものに不安を残すよりはましだと判断しました。今も設定はそのままです。
          </p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <p className="text-sm font-bold text-green-700 mb-2">
              低温調理をやるなら、ここは守る
            </p>
            <ul className="text-sm space-y-1.5 list-disc list-inside text-gray-700">
              <li>加熱の温度と時間は、使っている器具のメーカーが公開している条件に従う</li>
              <li>しっとりさせたいからという理由で、自分の判断で温度を下げない</li>
              <li>加熱が終わったら早く冷やし、冷蔵庫（10℃以下）で保存して早めに食べ切る</li>
              <li>少しでも不安が残るなら、切ってから火を通し直す</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500">
            ※ 体調に不安のある方、妊娠中の方、小さな子ども・高齢者が食べる場合は、低温調理ではなく通常の加熱を選んでください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. 弱点 */}
      <section>
        <h2
          id="weak"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          この運用の弱いところ
        </h2>
        <div className="space-y-4">
          <p>
            1年続いたと書きましたが、この弁当を人に勧められるかというと、そのままでは勧められません。弱点がはっきりしています。
          </p>
          <ul className="space-y-3">
            <li>
              <strong className="text-green-700">野菜がゼロ。</strong>
              鶏肉とおにぎりだけなので、食物繊維もビタミンも入っていません。昼だけを見れば明らかに偏った内容で、朝と夜で補う前提の弁当です。カット野菜やミニトマトを足すだけでもだいぶ違います。
            </li>
            <li>
              <strong className="text-green-700">脂質が少なすぎる。</strong>
              皮なしの鶏むね肉ばかり食べていると、脂質が不足しがちです。脂質は減らせば減らすほどいいものではありません。
            </li>
            <li>
              <strong className="text-green-700">たんぱく質は多めになる。</strong>
              昼だけで46g前後、夕食のぶんも合わせるとかなりの量です。厚生労働省の食事摂取基準が示す推奨量（成人男性65g／女性50g・1日あたり）から見れば多い部類なので、腎機能などに不安がある方は自己判断で真似せず、医師に相談してください（
              <a
                href="/column/protein-intake"
                className="text-green-700 underline hover:no-underline"
              >
                たんぱく質の必要量
              </a>
              ）。
            </li>
            <li>
              <strong className="text-green-700">
                仕込めない週は普通にある。
              </strong>
              予定が入れば仕込む時間は取れません。1年続いたというのは、1度も欠けなかったという意味ではなく、抜けた週は外で買うだけです。抜けた週に自分を責めない前提でやらないと、1回の失敗でやめることになります。
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. 試すなら */}
      <section>
        <h2
          id="try"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          同じことを試すなら
        </h2>
        <div className="space-y-4">
          <p>
            同じ形を試すなら、私がやってしまった遠回りは省けます。始めるならこの順番を勧めます。
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>週5日を目標にしない。</strong>
              まず週2日から。5日ぶん作ると、失敗したときの損失も5日ぶんになります。
            </li>
            <li>
              <strong>味付けを増やさない。</strong>
              最初から複数の味を作ると、仕込みが重くなって続きません。飽きてから考えれば間に合います。
            </li>
            <li>
              <strong>買う量を先に決める。</strong>
              「2kg」のように固定してしまうと、店で悩む時間と、余らせる不安が消えます。
            </li>
            <li>
              <strong>加熱条件は公式の数値をそのまま使う。</strong>
              ここだけは自己流にしない。しっとり感より安全を優先してください。
            </li>
            <li>
              <strong>作らないと困る状態にする。</strong>
              私の場合は「弁当がなければ昼に買いに行くしかない」という当たり前の状況が、そのまま続ける力になりました。意志で続けようとすると、忙しい週に負けます。
            </li>
          </ol>
          <p>
            なお、1日に必要なカロリーやたんぱく質の目安が分からないまま量を決めると、多すぎたり少なすぎたりします。自分の数字を先に出しておくと、弁当に何をどれだけ入れればいいかが決まります（
            <a
              href="/column/daily-calories"
              className="text-green-700 underline hover:no-underline"
            >
              1日に必要なカロリーの計算方法
            </a>
            ）。
          </p>
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
              低温調理した鶏むね肉とおにぎりだけの弁当を1年以上続けている。週1回・生2kgを仕込み、年にすると肉104kg・作業26時間ほど
            </li>
            <li>
              味付けは1年間ずっと塩と胡椒だけ。それでも飽きなかったのは、主役として味わっていないから
            </li>
            <li>
              続いた理由は手軽さでも好みでもなく、
              <strong>作らないと昼に困るという状態にしたから</strong>
            </li>
            <li>
              低温調理は加熱条件がすべて。不安になった時点で温度を上げ時間を伸ばした。厚生労働省の目安は中心部75℃で1分間以上
            </li>
            <li>
              野菜ゼロ・脂質不足という弱点があるので、そのまま真似せず足すものを足してほしい
            </li>
          </ul>
          <p>
            1年続けて分かったのは、続く仕組みは<strong>好きになることではなく、やめたときに困る形にすること</strong>
            だという一点でした。手軽さを売りにした方法ほど、忙しい週に簡単に飛ばせてしまいます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
