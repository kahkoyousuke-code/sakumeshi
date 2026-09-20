import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("quit-drinking-diet", {
  title:
    "禁酒でダイエットは進むのか｜2〜3ヶ月やめて分かったこと・いまは週4回飲んでいる | サクメシ",
  description:
    "運営者が大会準備で2〜3ヶ月だけ完全に断酒した実体験。やめて一番はっきり変わったのは体重の落ち方ではなく、食事が崩れなくなったことでした。維持期のいまは週4回飲んでいて戻っていない理由を、当時の実数で計算します。",
});

const TOC = [
  { id: "quit", label: "大会前に、2〜3ヶ月だけ完全にやめた" },
  { id: "change", label: "一番はっきり変わったのは、体重の落ち方ではなかった" },
  { id: "chain", label: "酒そのものより、酒が連れてきていたもの" },
  { id: "math", label: "数字にすると、酒より〆のほうが大きい" },
  { id: "now", label: "いまは週4回飲んでいる" },
  { id: "compare", label: "回数は倍に増えたのに、量は減っている" },
  { id: "honest", label: "ただし「飲まない日」は、当時より減っている" },
  { id: "weak", label: "この記事の弱いところ" },
  { id: "summary", label: "まとめ" },
];

/** 92kgの頃、飲んだ日に自動的に発生していた流れ。記録はなく、行動だけを書いている。 */
const CHAIN = [
  { step: "飲みに行くと決まる", happened: "その日の食事の計画が消える" },
  { step: "空腹のまま店に着く", happened: "最初の1杯と一緒に、揚げ物から頼む" },
  { step: "酒が進む", happened: "つまみを追加する。量は決めていない" },
  { step: "店を出る", happened: "判断力が落ちている" },
  { step: "深夜0時すぎ", happened: "〆のラーメン。決断した覚えがない" },
  { step: "翌朝", happened: "体重が増えている。気分が悪い" },
];

/** 92kgの頃、飲んだ日の酒まわりの内訳（別記事で積み上げた数字）。 */
const THEN = [
  {
    item: "居酒屋の酒（ビール中ジョッキ換算で数杯）",
    value: "600〜900kcal",
    note: "つまみは別",
  },
  {
    item: "〆のラーメン（こってり系・トッピングあり）",
    value: "800〜1,100kcal",
    note: "深夜0時すぎ",
  },
  {
    item: "飲んだ日の1日の合計",
    value: "約2,900kcal",
    note: "暴食した日ではなく、当時の普通の1日",
  },
  { item: "飲みに行く頻度", value: "週2回", note: "記録ではなく記憶" },
];

/** いまの家飲み1回の内訳。 */
const NOW = [
  { item: "飲むもの", value: "ハイボール系を2〜3杯" },
  { item: "酒のカロリー", value: "約140〜210kcal" },
  { item: "純アルコール量", value: "約20〜29g" },
  { item: "つまみ", value: "特に決めていない。夕食と一緒に飲む" },
  { item: "〆", value: "しない" },
  { item: "頻度", value: "週4回・ほぼ家飲み" },
];

/** 92kg期と維持期の、酒まわりの週あたり比較。 */
const COMPARE = [
  { item: "飲む回数", then: "週2回", now: "週4回", better: false },
  {
    item: "酒のカロリー",
    then: "週1,200〜1,800kcal",
    now: "週560〜840kcal",
    better: true,
  },
  {
    item: "〆のラーメン",
    then: "週1,600〜2,200kcal",
    now: "0kcal",
    better: true,
  },
  {
    item: "酒まわりの合計",
    then: "週2,800〜4,000kcal",
    now: "週560〜840kcal",
    better: true,
  },
  {
    item: "純アルコール量",
    then: "週120〜160g",
    now: "週80〜116g",
    better: true,
  },
  { item: "飲まない日", then: "週5日", now: "週3日", better: false },
];

export default function QuitDrinkingDiet() {
  return (
    <ColumnShell
      slug="quit-drinking-diet"
      h1="酒を2〜3ヶ月やめた。効いたのは酒のカロリーではなく、酒が連れてくる食事だった"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          お酒については、一般論として「
          <a
            href="/column/alcohol-diet"
            className="text-green-700 underline hover:no-underline"
          >
            断酒しなくても減量はできる。効いているのは酒そのものより、つまみと〆
          </a>
          」と書きました。
        </p>
        <p>
          この記事は、その裏づけになる実体験です。自分は
          <strong>
            大会に出ると決めてから、2〜3ヶ月だけ完全に酒をやめました
          </strong>
          。そして、<strong>いまは週4回飲んでいます</strong>
          。それでも体重は戻っていません。
        </p>
        <p>
          やめてみて一番はっきり変わったのは、体重の落ちる速さではありませんでした。
          <strong>食事が崩れなくなったこと</strong>
          です。この記事では、やめていた間に何が起きたかと、飲む回数が当時の倍になっているのに戻っていない理由を、数字で並べます。
        </p>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-gray-700">
            <strong className="text-amber-800">先に断っておきます。</strong>
            当時、飲んだ量を記録していたわけではありません。この記事のカロリーは、
            <a
              href="/column/eating-out-92kg"
              className="text-green-700 underline hover:no-underline"
            >
              92kgの頃に食べていたものを書き出した記事
            </a>
            で積み上げた数字と、一般的な換算によるものです。「週2回」「週4回」といった頻度は、
            <strong>記録ではなく自分の記憶</strong>です。
          </p>
        </div>
      </div>

      <hr className="border-green-100" />

      {/* 1. やめた */}
      <section>
        <h2
          id="quit"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          大会前に、2〜3ヶ月だけ完全にやめた
        </h2>
        <div className="space-y-4">
          <p>
            92kgから落とし始めた頃、酒をやめてはいません。
            <a
              href="/column/eating-out-92kg"
              className="text-green-700 underline hover:no-underline"
            >
              飲みに行く回数を減らした
            </a>
            だけです。完全にやめたのは、
            <strong>大会に出ると決めてからの2〜3ヶ月</strong>だけでした。
          </p>
          <p>
            順番としては、<strong>減量の最後のほう</strong>
            です。「酒をやめたから痩せた」という話ではありません。落ちるところまで落ちたあと、仕上げの時期に絞り込むためにやめた、というのが正確なところです。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              なので、この記事は「禁酒すれば痩せます」という記事ではありません。むしろ逆で、
              <strong className="text-green-700">
                やめてみて初めて、酒の何が問題だったのかが分かった
              </strong>
              という話です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 変わったこと */}
      <section>
        <h2
          id="change"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          一番はっきり変わったのは、体重の落ち方ではなかった
        </h2>
        <div className="space-y-4">
          <p>
            やめる前に期待していたのは、正直に言えば体重の落ちが速くなることでした。酒のカロリーが丸ごと消えるわけですから、当然そうなると思っていました。
          </p>
          <p>
            実際にやめてみて、一番はっきり変わったのは別のところでした。
            <strong>食事が崩れなくなった</strong>ことです。
          </p>
          <p>
            それまでは、順調に管理できている週でも、飲んだ日にまとめて崩れていました。しかも飲んだ日だけでは終わりません。
            <strong>翌日も戻りません</strong>
            。酒が残っている日に用意していたものを食べる気にならず、結局コンビニで済ませる、という形で影響が続きます。
          </p>
          <p>
            酒をやめたら、その「崩れる日」が週から消えました。自分にとって効いたのは、抜いたぶんの酒のカロリーではなく、
            <strong>崩れる日がゼロになったこと</strong>のほうでした。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. 連鎖 */}
      <section>
        <h2
          id="chain"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          酒そのものより、酒が連れてきていたもの
        </h2>
        <div className="space-y-4">
          <p>
            なぜ飲んだ日に崩れていたのか。当時の流れをそのまま書き出すと、
            <strong>飲むと決めた時点で、そのあとが自動的に決まっていた</strong>
            ことが分かります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    場面
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    起きていたこと
                  </th>
                </tr>
              </thead>
              <tbody>
                {CHAIN.map(({ step, happened }) => (
                  <tr key={step}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {step}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-800">
                      {happened}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            この中で、<strong>自分が選んでいるのは最初の1行だけ</strong>
            です。あとは全部そのあとについてきます。特に〆のラーメンは、別記事にも書いたとおり
            <strong>決断した記憶がありません</strong>
            。流れで発生していたので、我慢のしようもなかった、というのが実感に近いです。
          </p>
          <p>
            厚生労働省の飲酒ガイドラインには、健康に配慮した飲み方として「
            <strong>あらかじめ量を決めて飲酒をする</strong>」「
            <strong>飲酒前又は飲酒中に食事をとる</strong>
            」が挙げられています。当時の自分は、どちらもやっていませんでした。量を決めずに飲み、空腹のまま飲み始めていたわけです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. 計算 */}
      <section>
        <h2
          id="math"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          数字にすると、酒より〆のほうが大きい
        </h2>
        <div className="space-y-4">
          <p>92kgの頃、飲んだ日の酒まわりを並べます。</p>

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
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                {THEN.map(({ item, value, note }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700 whitespace-nowrap">
                      {value}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-500 text-xs">
                      {note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            注目したいのは、
            <strong>
              酒そのもの（600〜900kcal）より、〆のラーメン1杯（800〜1,100kcal）のほうが大きい
            </strong>
            という点です。つまみを足せば差はもっと開きます。
          </p>
          <p>
            言い換えると、酒をハイボールに変えて数百kcal削っても、そのあとにラーメンが控えているなら、削った分は
            <strong>その1杯で消えます</strong>
            。当時の自分が「太らない酒」を調べていたのは、一番小さいところを見ていたということです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. いま */}
      <section>
        <h2
          id="now"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          いまは週4回飲んでいる
        </h2>
        <div className="space-y-4">
          <p>
            大会が終わったあと、酒は戻しました。ただし戻ったのは
            <strong>飲むこと</strong>であって、
            <strong>飲み方ではありません</strong>。いまの1回はこうなっています。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    いま
                  </th>
                </tr>
              </thead>
              <tbody>
                {NOW.map(({ item, value }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            意識して決めているのは、実質<strong>2つだけ</strong>です。
            <strong>家で飲むこと</strong>と、<strong>〆をしないこと</strong>
            。つまみの中身はその日によってバラバラで、細かいルールは持っていません。
          </p>
          <p>
            この2つで、さきほどの連鎖がほぼ丸ごと切れます。家なら深夜のラーメン屋に寄る場面が発生しません。夕食と一緒に飲むので、空腹のまま飲み始めることもありません。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              ハイボール1杯（ウイスキー30ml）は約70kcal・純アルコール約10gです。純アルコール量は
              <strong className="text-green-700">
                「摂取量(ml) × 度数/100 × 0.8」
              </strong>
              で計算できます（厚生労働省の飲酒ガイドラインに示されている式）。濃さや量で変わるので、自分の1杯で一度計算しておくと目安になります。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. 比較 */}
      <section>
        <h2
          id="compare"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          回数は倍に増えたのに、量は減っている
        </h2>
        <div className="space-y-4">
          <p>92kgの頃と、いまを週あたりで並べます。</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    項目
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    92kgの頃
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    いま
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(({ item, then, now, better }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {item}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {then}
                    </td>
                    <td
                      className={`border border-green-100 px-3 py-2 font-bold whitespace-nowrap ${
                        better ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {now}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            <strong>飲む回数は週2回から週4回に増えています</strong>
            。それでも酒まわりのカロリーは週2,800〜4,000kcalから週560〜840kcalになり、
            <strong>4分の1以下</strong>です。
          </p>
          <p>
            差は週あたり約2,200〜3,200kcal。体脂肪1kgぶんのエネルギーがおよそ7,700kcalなので、
            <strong>月あたりにすると体脂肪1〜1.8kg分に相当します</strong>
            。減ったのは酒を飲む回数ではなく、
            <strong>酒についてきていたもの</strong>のほうです。
          </p>
          <p>
            これが、自分が「
            <a
              href="/column/no-rebound"
              className="text-green-700 underline hover:no-underline"
            >
              禁止より条件付きのほうが続く
            </a>
            」と書いている根拠でもあります。酒を禁止にしていたら、たぶんどこかで元の飲み方ごと戻していました。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. 正直なところ */}
      <section>
        <h2
          id="honest"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          ただし「飲まない日」は、当時より減っている
        </h2>
        <div className="space-y-4">
          <p>
            都合のいい話だけ書くわけにいかないので、はっきり書きます。
            <strong>
              健康という観点では、いまの飲み方は当時より悪くなっている部分があります
            </strong>
            。
          </p>
          <p>
            92kgの頃は週2回でした。つまり<strong>飲まない日が週5日</strong>
            あったことになります。いまは週4回なので、
            <strong>飲まない日は週3日</strong>です。回数そのものは増えています。
          </p>
          <p>
            厚生労働省の飲酒ガイドラインには、健康に配慮した飲み方として「
            <strong>
              一週間のうち、飲酒をしない日を設ける（毎日飲み続けるといった継続しての飲酒を避ける）
            </strong>
            」が挙げられています。毎日ではないとはいえ、週4回は
            <strong>褒められた頻度ではありません</strong>。
          </p>
          <p>
            量についても書いておきます。ハイボール2〜3杯は純アルコールで約20〜29gです。健康日本21（第三次）では「生活習慣病のリスクを高める量」を
            <strong>1日あたり純アルコール男性40g以上・女性20g以上</strong>
            としています。男性の自分は40gを下回っていますが、
            <strong>女性の基準なら普通に超えている量</strong>です。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-700">
              <strong className="text-amber-800">整理すると。</strong>
              この記事で「うまくいった」と言えるのは
              <strong>減量と体重維持の話だけ</strong>
              です。飲酒そのものの健康リスクは体重とは別の話で、そこは改善していません。飲まない日を増やすほうがいいのは分かっていて、実行できていない、というのが現状です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 8. 弱いところ */}
      <section>
        <h2
          id="weak"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          この記事の弱いところ
        </h2>
        <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>飲んだ量の記録がない。</strong>
              「週2回」「中ジョッキ数杯」は記憶です。当時の伝票が残っているわけではありません
            </li>
            <li>
              <strong>断酒中のデータもない。</strong>
              2〜3ヶ月やめていた間に体重がどう動いたかのグラフは出せません。書けるのは「食事が崩れなくなった」という体感までです
            </li>
            <li>
              <strong>断酒だけの効果ではない。</strong>
              大会準備の時期なので、同時に食事もトレーニングも変えています。どれがどれだけ効いたかは分けられません
            </li>
            <li>
              <strong>いまの数字も概算。</strong>
              ハイボールの濃さを毎回測ってはいないので、1杯約70kcal・純アルコール約10gはウイスキー30ml換算の目安です
            </li>
            <li>
              <strong>1人の1例。</strong>
              身長174cm・開始92kgの成人男性の話です。アルコールの分解能力には個人差が大きく、同じ量でも影響は変わります
            </li>
          </ul>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-700">
              飲酒量を自分でコントロールできない、やめようとしてもやめられないといった場合は、体重とは別の問題です。健康診断の数値に指摘があるときも含め、医療機関や専門の相談窓口に相談してください。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 9. まとめ */}
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
              完全に酒をやめたのは、大会準備の<strong>2〜3ヶ月だけ</strong>
              。減量の最後の仕上げの時期で、「やめたから痩せた」という順番ではない
            </li>
            <li>
              やめて一番はっきり変わったのは体重の落ち方ではなく、
              <strong>食事が崩れる日が週から消えたこと</strong>
            </li>
            <li>
              92kgの頃、自分で選んでいたのは「飲みに行く」という最初の1行だけで、
              <strong>つまみも〆も自動でついてきていた</strong>
            </li>
            <li>
              数字で見ると、酒そのもの（600〜900kcal）より
              <strong>〆のラーメン1杯（800〜1,100kcal）のほうが大きい</strong>
            </li>
            <li>
              いまは
              <strong>週4回・ほぼ家飲み・ハイボール系2〜3杯・〆なし</strong>
              。回数は当時の倍だが、酒まわりの週あたりカロリーは
              <strong>4分の1以下</strong>
            </li>
            <li>
              ただし<strong>飲まない日は週5日から週3日に減っている</strong>
              。体重は維持できているが、飲酒頻度という意味では改善していない
            </li>
          </ul>
        </div>
      </section>
    </ColumnShell>
  );
}
