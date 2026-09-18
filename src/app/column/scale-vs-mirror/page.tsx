import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("scale-vs-mirror", {
  title:
    "運動なしで痩せるのか｜体重は落ちたが鏡は変わらなかった話 | サクメシ",
  description:
    "運営者が92kgから落とし始めた最初の1〜3ヶ月は運動ゼロでした。それでも3〜5kg落ちています。ただし見た目はまったく変わらず、ジムを週2回で始めてから鏡が変わったと感じるまでにさらに半年以上かかりました。その順番を実体験で書きます。",
});

const TOC = [
  { id: "no-exercise", label: "最初の1〜3ヶ月、運動はしていない" },
  { id: "ratio", label: "落ちた量を、体重に対する割合に直す" },
  { id: "mirror", label: "体重計は動いたのに、鏡は動かなかった" },
  { id: "gym", label: "それでジムに行った。週2回から" },
  { id: "halfyear", label: "見た目が変わるまで、半年以上かかった" },
  { id: "gap", label: "「運動なしで痩せる」とのずれ" },
  { id: "answer", label: "質問を2つに割ると、答えが出る" },
  { id: "weak", label: "この記事の弱いところ" },
  { id: "summary", label: "まとめ" },
];

/** 自分がやった順番。記録が残っていないため、数字はすべて概数で幅がある。 */
const TIMELINE = [
  {
    phase: "開始時",
    doing: "食事だけ。ジムにも行っていないし、走ってもいない",
    result: "92kg",
  },
  {
    phase: "開始から1〜3ヶ月",
    doing: "食事だけのまま",
    result: "3〜5kg 落ちた",
  },
  {
    phase: "そのあと",
    doing: "ジムでの筋トレを追加（週2回）",
    result: "体重は落ちていた。見た目が変わらなかったので始めた",
  },
  {
    phase: "ジム開始から半年以上",
    doing: "筋トレを継続",
    result: "ここで初めて「見た目が変わった」と感じた",
  },
  {
    phase: "現在",
    doing: "週5回以上",
    result: "継続中",
  },
];

/** 92kg に対して 3〜5kg がどれくらいかを割り戻したもの。 */
const RATIO = [
  { item: "開始時の体重", value: "92kg" },
  { item: "運動なしで落ちた量", value: "3〜5kg" },
  { item: "体重に対する割合", value: "約3〜5%" },
  { item: "落ちたあとの体重", value: "87〜89kg" },
];

/** よく言われることと、自分の実際のずれ。 */
const GAP = [
  {
    common: "運動なしでも痩せられる",
    mine: "体重については本当だった。運動ゼロで3〜5kg落ちている",
  },
  {
    common: "消費の内訳では身体活動は約30%。運動で削るより食事を変えるほうが速い",
    mine: "体重を落とす話としては、実感と一致していた",
  },
  {
    common: "まずは体重を落とすところから",
    mine: "落ちた。それでも鏡はまったく変わらなかった",
  },
  {
    common: "見た目を変えたいなら筋トレ",
    mine: "正しかった。ただし自分が変化を感じるまで半年以上かかった",
  },
];

export default function ScaleVsMirror() {
  return (
    <ColumnShell
      slug="scale-vs-mirror"
      h1="運動なしで体重は落ちた。──鏡が変わったのは、そこから半年以上あとだった"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          「運動なしで痩せられますか」という質問に、一般論としては「痩せられます」と書きました（
          <a
            href="/column/no-exercise-diet"
            className="text-green-700 underline hover:no-underline"
          >
            運動なしで痩せる方法
          </a>
          ）。消費エネルギーの内訳を見れば、食事を変えるほうが速いのは計算上そのとおりです。
        </p>
        <p>
          実際、自分が92kgから落とし始めた<strong>最初の1〜3ヶ月は運動をしていません</strong>
          。ジムにも行っていないし、走ってもいない。それでも体重は
          <strong>3〜5kg落ちました</strong>。ここまでは一般論と同じ結論です。
        </p>
        <p>
          ただ、あの記事に書いていないことがあります。
          <strong>体重は落ちたのに、鏡はまったく変わらなかった</strong>
          。それでジムに行きました。そして、見た目が変わったと感じるまでに、そこから
          <strong>さらに半年以上</strong>かかっています。
        </p>
        <p>
          この記事は、その順番をそのまま書いたものです。一般論の補足ではなく、自分がどの時点で何をして、何が変わらなかったかの記録です。
        </p>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
          <p className="text-sm text-gray-700">
            <strong className="text-amber-800">先に断っておきます。</strong>
            当時、体重も食事もほとんど記録していませんでした。なのでこの記事の数字は
            <strong>すべて概数で、幅で書いています</strong>
            。週ごとの推移表のようなものは出せません。残っていないものを表にすると、それは記録ではなく創作になるので。
          </p>
        </div>
      </div>

      <hr className="border-green-100" />

      {/* 1. 運動なしの期間 */}
      <section>
        <h2
          id="no-exercise"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          最初の1〜3ヶ月、運動はしていない
        </h2>
        <div className="space-y-4">
          <p>
            やった順番を並べると、こうなります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    時期
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    やっていたこと
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    結果
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map(({ phase, doing, result }) => (
                  <tr key={phase}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {phase}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {doing}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700">
                      {result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            最初の期間にやったのは食事だけです。運動を「あとで足そう」と思っていたわけでもなく、単純にやっていませんでした。それでも体重は動いています。
          </p>
          <p>
            なので、<strong>「運動なしで体重が落ちるか」への答えは、自分の場合は落ちた</strong>
            です。ここは一般論のとおりで、疑っていません。問題はこの先にありました。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 割合に直す */}
      <section>
        <h2
          id="ratio"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          落ちた量を、体重に対する割合に直す
        </h2>
        <div className="space-y-4">
          <p>
            「3〜5kg落ちた」と書くと、それなりの成果に見えます。ただ、開始時の体重で割り戻すと印象が変わります。
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
                {RATIO.map(({ item, value }) => (
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
            <strong>約3〜5%</strong>
            です。体重計の数字としては大きく見えても、体全体に薄く広がった3〜5%が、鏡の中で分かるかというと別の話でした。
          </p>
          <p>
            以前、
            <a
              href="/column/slow-weight-gain"
              className="text-green-700 underline hover:no-underline"
            >
              25kg増えるまでを1日あたりに割った記事
            </a>
            を書きましたが、割り算をすると印象がひっくり返るのは、増やすときも減らすときも同じでした。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. 鏡が変わらない */}
      <section>
        <h2
          id="mirror"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          体重計は動いたのに、鏡は動かなかった
        </h2>
        <div className="space-y-4">
          <p>
            この時期の状態を正直に書くと、こうです。
          </p>
          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-2">
            <p className="text-sm text-gray-700">
              体重計の数字：<strong className="text-green-700">動いている</strong>
            </p>
            <p className="text-sm text-gray-700">
              鏡に映る自分：<strong className="text-red-700">変わっていない</strong>
            </p>
          </div>
          <p>
            数字が動いているのだから間違ってはいないはずなのに、見た目は何も変わらない。
            <strong>
              このとき自分が出した結論は「食事だけでは足りない」でした
            </strong>
            。それがジムに行った理由です。
          </p>
          <p>
            いま振り返ると、この結論が正しかったかどうかは分かりません（後半でその話を書きます）。ただ、事実として自分はそう判断して、次の行動を決めました。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. ジム */}
      <section>
        <h2
          id="gym"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          それでジムに行った。週2回から
        </h2>
        <div className="space-y-4">
          <p>
            始めたのはジムでの筋トレで、頻度は<strong>週2回</strong>
            でした。今は週5回以上行っていますが、入口はそこではありません。
          </p>
          <p>
            体重を落とす局面で筋トレを足す意味は、消費を増やすこと以上に、落ちていく過程で筋肉まで一緒に減らさないことにあります。1日の消費エネルギーのうち身体活動が占めるのは
            <strong>約30%</strong>
            で、しかもそれは通勤や家事を含んだ数字です。週2回のジムがそこに足せる分は、正直わずかです。
          </p>
          <p>
            つまり、
            <strong>
              週2回のジムは「消費を増やす手段」としてはほとんど効いていなかった
            </strong>
            はずです。効いたとすれば、落としている最中に体の中身を保つ側でした。減量中にたんぱく質を意識する話は
            <a
              href="/column/protein-intake"
              className="text-green-700 underline hover:no-underline"
            >
              別記事
            </a>
            に書いています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. 半年以上 */}
      <section>
        <h2
          id="halfyear"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          見た目が変わるまで、半年以上かかった
        </h2>
        <div className="space-y-4">
          <p>
            ここが、自分が一番書いておきたかったところです。ジムを始めて、見た目が変わったと感じるまでに
            <strong>半年以上</strong>かかりました。
          </p>
          <p>回数に直すと、こうなります。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-1">
            <p className="text-sm text-gray-700">
              週2回 × 半年（約26週）＝{" "}
              <strong className="text-green-700">約50回</strong>
            </p>
            <p className="text-sm text-gray-700">
              食事だけの1〜3ヶ月 ＋ 半年以上 ＝ 開始から{" "}
              <strong className="text-green-700">少なくとも8〜9ヶ月</strong>
            </p>
          </div>
          <p>
            <strong>約50回やって、ようやく</strong>
            です。1回や2回で何かが起きるという話ではまったくなく、10回でも20回でもありませんでした。
          </p>
          <p>
            そして、92kgから数えると、見た目が変わったと感じるまでに8〜9ヶ月以上かかっている計算になります。ダイエットの記事でよく見る「1ヶ月で」「2週間で」という単位とは、桁が違いました。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. ずれ */}
      <section>
        <h2
          id="gap"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          「運動なしで痩せる」とのずれ
        </h2>
        <div className="space-y-4">
          <p>
            一般論として書かれていることと、自分の実際を並べます。矛盾しているわけではなく、
            <strong>答えている質問が違った</strong>という話です。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    よく言われること
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    自分の場合
                  </th>
                </tr>
              </thead>
              <tbody>
                {GAP.map(({ common, mine }) => (
                  <tr key={common}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {common}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-800">
                      {mine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            一般論はどれも間違っていません。ただ、全部
            <strong>「体重の数字」についての答え</strong>
            でした。自分が困ったのは、数字が動いているのに見た目が変わらない期間のほうです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. 質問を割る */}
      <section>
        <h2
          id="answer"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          質問を2つに割ると、答えが出る
        </h2>
        <div className="space-y-4">
          <p>
            「運動なしで痩せられますか」という問いには、2つの質問が混ざっています。分けると、自分の経験からはそれぞれこう答えられます。
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-green-700 mb-1">
                Q. 体重の数字を下げたい
              </p>
              <p className="text-sm text-gray-600">
                運動なしで下がりました。自分は1〜3ヶ月で3〜5kg。ここは食事だけで動きます。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-green-700 mb-1">
                Q. 見た目を変えたい
              </p>
              <p className="text-sm text-gray-600">
                自分の場合、3〜5kg落ちても変わりませんでした。変わったと感じたのは、筋トレを約50回積んだあとです。
              </p>
            </div>
          </div>
          <p>
            どちらを目的にしているかで、「運動をやらない」という選択の意味が変わります。体重が目的なら合理的な省略です。見た目が目的なら、
            <strong>そこを省いた分だけ時間がかかる</strong>
            、というのが自分の通った道でした。
          </p>
          <p>
            もうひとつ、実用的なことを書いておきます。体重が落ちているのに鏡が変わらない時期は、
            <strong>失敗ではありません</strong>
            。自分はその時期に「効いていない」と判断しましたが、数字のほうは確かに動いていました。落ち続けているかどうかは体重で確認して、見た目は別の時間軸で待つ。分けて見るほうが、途中でやめずに済むはずです。
          </p>
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
          <p>都合の悪い点も書いておきます。</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>記録がない。</strong>
              当時は体重も食事もほとんど測っていませんでした。この記事の数字が全部「3〜5kg」「1〜3ヶ月」「半年以上」と幅なのはそのためです
            </li>
            <li>
              <strong>「見た目が変わった」は主観。</strong>
              写真も体脂肪率の記録も残っていません。誰かに測ってもらった数字ではなく、自分がそう感じたという以上のものではない
            </li>
            <li>
              <strong>1人の1例。</strong>
              開始体重92kgの成人男性の話です。年齢・性別・開始時の体重が違えば、同じ順番で同じ時間がかかるとは限らない
            </li>
            <li>
              <strong>因果は証明できていない。</strong>
              3〜5kg（約3〜5%）で見た目が変わらなかったのは、運動をしていなかったからではなく、単に
              <strong>落ちた量がまだ少なかっただけ</strong>
              かもしれません。食事だけをもっと長く続けていれば見た目も変わった可能性はあります。自分はそれを試していないので、分かりません
            </li>
          </ul>
          <p>
            最後の点は特に正直に書いておきたいところです。自分がやったのは「食事だけ→途中で筋トレを追加」の1本道で、
            <strong>比較対象がありません</strong>
            。なのでこの記事は「運動を足したから見た目が変わった」の証明ではなく、
            <strong>そういう順番で進めた人間が、何にどれだけ時間がかかったかの記録</strong>
            として読んでください。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="text-sm text-gray-700">
              運動を新しく始めるときは、持病がある人、関節や腰に不安がある人、長く運動から離れていた人ほど、いきなり強度を上げないでください。気になることがあれば先に医療機関に相談してください。自分は週2回から始めています。
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
              92kgから落とし始めた最初の1〜3ヶ月は運動ゼロ。それでも3〜5kg落ちた。
              <strong>「運動なしで体重は落ちるか」への答えは、落ちる</strong>
            </li>
            <li>
              ただし92kgに対する3〜5kgは<strong>約3〜5%</strong>
              。体重計は動いたが、鏡はまったく変わらなかった
            </li>
            <li>
              それで週2回の筋トレを足した。見た目が変わったと感じたのは、そこから
              <strong>半年以上あと＝約50回</strong>積んだ時点
            </li>
            <li>
              開始から数えると<strong>少なくとも8〜9ヶ月</strong>
              。「1ヶ月で」「2週間で」とは桁が違った
            </li>
            <li>
              「運動なしで痩せられますか」は、
              <strong>体重の話か見た目の話かで答えが変わる</strong>
              。体重なら省略していい。見た目なら、省いた分だけ時間がかかる
            </li>
            <li>
              当時の記録が残っていないので数字はすべて概数。比較対象もない1例であって、証明ではない
            </li>
          </ul>
          <p>
            体重が落ちているのに鏡が変わらない時期は、たぶん多くの人が通ります。自分はそこで「食事だけでは足りない」と判断しましたが、少なくとも
            <strong>数字が動いているうちは、何も失敗していません</strong>
            。見た目のほうは、こちらが思っているよりずっと遅れてついてきます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
