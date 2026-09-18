import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("slow-weight-gain", {
  title:
    "気づいたら太っていた理由｜25kg増を1日あたりに割ると53kcalだった | サクメシ",
  description:
    "運営者は就職してから25kg太り、最大92kgになりました。その増加を1日あたりのカロリーに割り戻すと、驚くほど小さい数字になります。じわじわ太る仕組みと、同じ計算が減量にも効く話を、自分の体を例に解説します。",
});

const TOC = [
  { id: "gain", label: "25kg増やすのに必要だったカロリー" },
  { id: "daily", label: "期間で割ると、1日あたり数十kcalしかない" },
  { id: "why", label: "なぜ「たった53kcal」が止められなかったのか" },
  { id: "life", label: "92kgになるまでに何を食べていたか" },
  { id: "body", label: "太っている間、体に起きていたこと" },
  { id: "failures", label: "買っては失敗した6つのもの" },
  { id: "reverse", label: "減らすときも、同じ計算が効く" },
  { id: "now", label: "いま同じ状況にいる人へ" },
  { id: "summary", label: "まとめ" },
];

/**
 * 25kg × 7,700kcal = 192,500kcal を期間で割った値。
 * 7,700kcal/kg は nutrition.ts の換算と揃えている。
 */
const DAILY_SURPLUS = [
  { years: "5年", days: "1,826日", kcal: "約105kcal", example: "缶ビール半分" },
  { years: "8年", days: "2,922日", kcal: "約66kcal", example: "6枚切り食パン1/3枚" },
  { years: "10年", days: "3,653日", kcal: "約53kcal", example: "ポテトチップス9枚" },
  { years: "15年", days: "5,479日", kcal: "約35kcal", example: "角砂糖2個ぶん" },
];

const FAILURES = [
  {
    item: "腹筋マシーン（自力で起き上がるタイプ）",
    why: "腹筋運動そのものの消費カロリーは小さく、しかも部分痩せは起きません。お腹の脂肪はお腹の運動では減りません。",
  },
  {
    item: "ボディブレード",
    why: "振動させて体幹に効かせる器具。運動としては悪くないのですが、週に数分やったところで1日の収支は動きませんでした。",
  },
  {
    item: "ビリーズブートキャンプ",
    why: "これは本当にきついので消費カロリーは出ます。ただし続きませんでした。きついものは、仕事で疲れた日に必ず飛びます。",
  },
  {
    item: "ダイエットに効くとかいうお茶",
    why: "めちゃくちゃ下痢しただけでした。出ていったのは水分で、脂肪ではありません。",
  },
  {
    item: "プッシュアップバー",
    why: "手首は痛くなりにくくなります。ただ、腕立ての回数が増えても食事が同じなら体重は動きません。",
  },
  {
    item: "アブローラー",
    why: "上級者向けの良い種目ですが、当時の自分の体重では膝コロすら満足にできず、そのまま部屋の隅で埃をかぶりました。",
  },
];

export default function SlowWeightGain() {
  return (
    <ColumnShell
      slug="slow-weight-gain"
      h1="太るのは、一晩ではない。──25kg増えた自分の体を、1日あたりで割ってみた"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          学生時代の私は67kgでした。それが就職してから増え続け、最大で
          <strong>92kg</strong>になりました。身長は174cmなので、かなりの体型です。
          <strong>25kgの増加</strong>です。
        </p>
        <p>
          当時の感覚を正直に書くと、
          <strong>「太った瞬間」がまったく記憶にありません</strong>
          。暴飲暴食の日々だったという自覚もありませんでした。健康診断でも「軽肥満」と書かれる程度で、深刻な数字は出ていませんでした。
        </p>
        <p>
          あとから自分の体を数字で割り戻してみて、ようやく腑に落ちました。じわじわ太るというのは、
          <strong>1日あたりで見ると本当に小さな話</strong>だったのです。この記事では、その計算を実際にやってみます。
        </p>
      </div>

      <hr className="border-green-100" />

      {/* 1. 総カロリー */}
      <section>
        <h2
          id="gain"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          25kg増やすのに必要だったカロリー
        </h2>
        <div className="space-y-4">
          <p>
            体脂肪1kgを増やす（あるいは減らす）のに必要なエネルギーは、およそ
            <strong>7,700kcal</strong>とされています。ここから逆算します。
          </p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 text-center">
            <p className="text-sm text-gray-600 mb-1">25kg × 7,700kcal ＝</p>
            <p className="text-3xl font-bold text-green-700">192,500kcal</p>
            <p className="text-sm text-gray-600 mt-1">
              これが、私が余分に食べた合計です
            </p>
          </div>
          <p>
            19万kcal。数字だけ見ると、とんでもない量を食べたように見えます。実際、成人が1日に必要とするエネルギーがおよそ2,000〜2,500kcalですから、
            <strong>約80日ぶんの食事を「余分に」食べた</strong>計算になります。
          </p>
          <p className="text-sm text-gray-500">
            ※ 増えた体重のすべてが体脂肪というわけではなく、筋肉や水分も含まれます。また7,700kcalという数字自体も目安で、個人差があります。ここでは「ざっくり全体像を掴む」ための計算として扱ってください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 日割り */}
      <section>
        <h2
          id="daily"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          期間で割ると、1日あたり数十kcalしかない
        </h2>
        <div className="space-y-4">
          <p>
            ここからが本題です。19万kcalを<strong>期間で割ります</strong>。
            私の場合、正確に何年かけて増えたのかは記録が残っていません。20代前半で就職して、30代のどこかで92kgに到達した、というくらいの解像度です。
          </p>
          <p>
            なので、期間ごとにいくつか計算してみます。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    かけた期間
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    日数
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    1日あたりの余剰
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    だいたい何に相当するか
                  </th>
                </tr>
              </thead>
              <tbody>
                {DAILY_SURPLUS.map(({ years, days, kcal, example }) => (
                  <tr key={years}>
                    <td className="border border-green-100 px-3 py-2 font-medium">
                      {years}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {days}
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700">
                      {kcal}
                    </td>
                    <td className="border border-green-100 px-3 py-2 text-gray-600">
                      {example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            10年かけて増えたとすると、<strong>1日あたり約53kcal</strong>。
            ポテトチップスなら9枚ぶんです。角砂糖に換算すれば3個ちょっと。
          </p>
          <p>
            この数字を最初に出したとき、私は少し呆然としました。
            <strong>
              毎日ポテチを9枚多く食べるだけで、10年後に25kg太る
            </strong>
            。逆に言えば、私が92kgになるまでにやっていた「余分なこと」は、1日単位で見ればその程度のことでしかなかったわけです。
          </p>
          <p className="text-sm text-gray-500">
            ※ 実際には体重が増えるほど基礎代謝も上がるため、同じペースで増え続けることはありません。体重の増加は途中で緩やかになり、どこかで釣り合います。この計算はあくまで「増えた総量を平均で均したらどうなるか」を見るためのものです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. なぜ止められないか */}
      <section>
        <h2
          id="why"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          なぜ「たった53kcal」が止められなかったのか
        </h2>
        <div className="space-y-4">
          <p>
            1日53kcalなら簡単に止められそうに思えます。でも実際には止まりませんでした。理由ははっきりしています。
            <strong>53kcalは、体感できないから</strong>です。
          </p>
          <p>
            体重計に毎日乗っていたとしても、1日53kcalの余剰は体重にすると約7gです。7gは、その日の水分量や食事の残り具合に完全に埋もれます。
            <strong>
              自分の体は「今日も少し増えている」というシグナルを、一度も出してくれなかった
            </strong>
            わけです。
          </p>
          <p>
            気づくのは、久しぶりに会った人に言われたときか、去年のズボンが入らなくなったときか、健康診断の数字を見たときです。私の場合は、鏡と写真でした。当時の写真は、いま見返すと見ていられません。
          </p>
          <p>
            つまり、じわじわ太るというのは<strong>意志の問題ではなく、検知の問題</strong>だと思っています。感じ取れない量が、感じ取れないまま積み上がる。だから止めようがない。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. 何を食べていたか */}
      <section>
        <h2
          id="life"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          92kgになるまでに何を食べていたか
        </h2>
        <div className="space-y-4">
          <p>
            最初に就職した会社は、かなりブラックな環境でした。休みは日曜だけ、家に着くのは毎日12時近く。終電がなくなって帰れない日もありました。
          </p>
          <p>その頃の食生活は、こんな感じです。</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>仕事終わりに酒を飲む</li>
            <li>その流れで夜中にラーメンを食べる</li>
            <li>運動はまったくしていない</li>
          </ul>
          <p>
            書き出すと典型的です。ただ、当時の自分にとってこれは「ごほうび」でも「暴食」でもなく、
            <strong>ただの日常</strong>でした。深夜のラーメンは、その日を終わらせるための儀式みたいなものです。
          </p>
          <p>
            重要なのは、
            <strong>この生活で毎日大量に食べ過ぎていたわけではない</strong>
            ということです。前の章の計算どおり、必要だったのは1日あたり数十kcalの上振れだけです。週に何回かの深夜ラーメンと酒があれば、それは軽く達成されます。
          </p>
          <p>
            サクメシで食事プランを作ると、まず<strong>自分に必要なカロリー</strong>が数字で出ます。私が20代のときにこの数字を知っていたら、と思うことがあります。知っていたところで深夜ラーメンをやめられたかは分かりませんが、少なくとも「何をしているか」は分かったはずです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. 体に起きていたこと */}
      <section>
        <h2
          id="body"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          太っている間、体に起きていたこと
        </h2>
        <div className="space-y-4">
          <p>
            健康診断では、特記事項に「軽肥満」「生活習慣病に注意しましょう」と書かれる程度で、はっきり悪い数値は出ていませんでした。若かったからだと思います。
          </p>
          <p>
            ただ、数値に出ないところでは、はっきり調子が悪かったです。具体的には次のようなものです。
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>基本的にダルい</li>
            <li>すぐに疲れる</li>
            <li>肩こり</li>
            <li>腰痛</li>
            <li>偏頭痛</li>
          </ul>
          <p>
            <strong>「今日は絶好調だ」という日が一度もない</strong>
            、という状態でした。そして体調が悪いから休みたくなり、休むから動かず、動かないからまた太る。分かりやすい悪循環です。
          </p>
          <p>
            見た目の面でも影響がありました。どんな髪型にしても、どんな服を着てもイマイチになる。
            <strong>着たい服ではなく、着られる服を選ぶ</strong>
            ようになります。体に自信がないから姿勢が悪くなり、姿勢が悪いから余計にかっこ悪く見える。ここも循環です。
          </p>
          <p className="text-sm text-gray-500">
            ※ ここに挙げた不調は私個人の記録であり、すべてが体重によるものだと医学的に証明できるわけではありません。慢性的な頭痛・腰痛・強い倦怠感が続く場合は、体重とは別に医療機関で相談してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. 失敗した投資 */}
      <section>
        <h2
          id="failures"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          買っては失敗した6つのもの
        </h2>
        <div className="space-y-4">
          <p>
            早々に諦めていたわけではありません。「さすがにまずい」と思って、いろいろ買いました。実際に買って、実際に失敗したものを並べます。
          </p>

          <div className="space-y-3">
            {FAILURES.map(({ item, why }) => (
              <div
                key={item}
                className="rounded-xl border border-red-100 bg-red-50/50 p-4"
              >
                <p className="font-bold text-red-700 mb-1">✗ {item}</p>
                <p className="text-sm text-gray-700">{why}</p>
              </div>
            ))}
          </div>

          <p>
            他にもあった気がしますが、捨てたので忘れました。
          </p>
          <p>
            並べてみると、失敗の理由は1つに集約されます。
            <strong>全部「運動側」への投資で、食事を1ミリも変えていない</strong>
            ことです。
          </p>
          <p>
            前の計算に戻ります。25kg増やしたのは、1日あたり数十kcalの余剰でした。その余剰を運動で相殺しようとすると、たとえば53kcalは体重70kgの人が10分ちょっと歩いてやっと消える量です。それを<strong>毎日、10年間</strong>やり続けて、ようやく増加が止まる。
          </p>
          <p>
            一方、深夜のラーメンをやめれば、1回で数百kcal単位が動きます。どちらが現実的かは明らかでした。私が変わり始めたのは、器具を買うのをやめて食事を見るようになってからです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. 逆算 */}
      <section>
        <h2
          id="reverse"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          減らすときも、同じ計算が効く
        </h2>
        <div className="space-y-4">
          <p>
            私は最終的に92kgから18kg落とし、いまは72〜78kgのあたりで動いています。その過程で分かったのは、
            <strong>増やすときの計算は、そのまま減らすときにも使える</strong>ということです。
          </p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-2">
            <p className="text-sm text-gray-600">18kgを減らすのに必要な赤字</p>
            <p className="text-2xl font-bold text-green-700">
              18kg × 7,700kcal ＝ 138,600kcal
            </p>
            <p className="text-sm text-gray-600">
              2年（730日）で割ると <strong>1日あたり約190kcal</strong>
            </p>
          </div>
          <p>
            1日190kcalの赤字。おにぎり1個ぶんくらいです。極端な断食も、単品ダイエットも要りません。
            <strong>
              必要なのは「毎日ちょっとだけマイナス」を、長く続けられる形にすること
            </strong>
            でした。
          </p>
          <p>
            そして増やすときと決定的に違うのは、
            <strong>減らすときは自然には起きない</strong>という点です。53kcalの余剰は放っておいても積み上がりますが、190kcalの赤字は意識しないと1日も作れません。だから、数字を把握することが最初の一歩になります。
          </p>
          <p className="text-sm text-gray-500">
            ※ 減量が進むと体重に応じて必要カロリーも下がるため、同じ食事量では途中でペースが鈍ります。停滞は失敗ではなく、計算どおりに起きる現象です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 8. いま同じ状況の人へ */}
      <section>
        <h2
          id="now"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          いま同じ状況にいる人へ
        </h2>
        <div className="space-y-4">
          <p>
            もし「気づいたら太っていた」という状態にいるなら、まずやるべきは食事制限ではないと思っています。
            <strong>自分がいまどのくらいずれているかを数字にすること</strong>です。
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>増えた量と、かかった年数を書き出す</strong>
              ：何kg増えたか、何年かかったか。この2つだけで、1日あたりのずれが出せます。多くの場合、想像よりずっと小さい数字になります
            </li>
            <li>
              <strong>自分に必要なカロリーを知る</strong>
              ：身長・体重・年齢・活動量から計算します。「1日1,500kcal」のような一般論ではなく、自分の数字を出します
            </li>
            <li>
              <strong>減らす量を、1日あたりで決める</strong>
              ：いきなり半分にしない。200〜300kcalの赤字を続けられる形にできれば、1年で10kg前後が視野に入ります
            </li>
          </ol>
          <p>
            サクメシは、この2番目と3番目を自動でやるために作りました。質問に答えると必要カロリーとPFCが出て、その範囲に収まる1週間ぶんの食事メニューが生成されます。当時の自分がほしかったものを、そのまま形にしたサービスです。
          </p>
          <p className="text-sm text-gray-600">
            なお、92kgから大会に出るまでの全プロセス（トレーニング内容や当時の減量メニューの詳細）は、note の
            <a
              href="https://note.com/kahko/n/n54473a156288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline hover:no-underline"
            >
              「デブだった私が18kg減量してフィジーク大会で入賞するまで」
            </a>
            に書いています（有料記事）。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* まとめ */}
      <section>
        <h2
          id="summary"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          まとめ
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            私は就職後に25kg増えて92kgになった。総量にすると約192,500kcalの余剰
          </li>
          <li>
            10年かけて増えたとすると、<strong>1日あたり約53kcal</strong>
            。ポテトチップス9枚ぶんでしかない
          </li>
          <li>
            53kcalは体重にすると約7g。<strong>体感でも体重計でも検知できない</strong>ので、意志では止まらない
          </li>
          <li>
            当時買った6つの器具はすべて失敗した。理由は全部が運動側で、食事を変えていなかったから
          </li>
          <li>
            18kg減らすのに必要だったのは、1日あたり約190kcalの赤字。おにぎり1個ぶん
          </li>
          <li>
            増えるのは放っておいても進むが、減るのは意識しないと1日も進まない。だから最初に数字を知る
          </li>
        </ul>
      </section>
    </ColumnShell>
  );
}
