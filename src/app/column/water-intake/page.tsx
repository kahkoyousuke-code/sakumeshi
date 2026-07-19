import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "ダイエット中の水分補給｜水は1日どれくらい飲めばいい？ | サクメシ",
  description:
    "水を飲むと痩せるは本当か？水分摂取が代謝・食欲・むくみに与える影響と、1日に必要な量、無理なく飲む量を増やすコツを解説します。",
};

const TOC = [
  { id: "why", label: "水分がダイエットに効く4つの理由" },
  { id: "how-much", label: "1日どれくらい飲めばいい？" },
  { id: "drinks", label: "何を飲む？飲み物の選び方" },
  { id: "tips", label: "無理なく水を飲む量を増やすコツ" },
  { id: "summary", label: "まとめ" },
];

export default function WaterIntake() {
  return (
    <ColumnShell
      slug="water-intake"
      h1="ダイエット中の水分補給｜水は1日どれくらい飲めばいい？"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「水を飲むと痩せる」って聞いたことありませんか？</p>
        <p>
          半分本当で、半分誤解です。水自体に脂肪を燃やす魔法の効果はありません。でも、<strong>正しく水分を摂ると「痩せやすい状態」が作れる</strong>のは事実。逆に、飲み物の選び方を間違えると、それだけでダイエットが台無しになります。
        </p>
        <p>この記事では、水分とダイエットの関係を冷静に整理して、実践しやすい形で解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          水分がダイエットに効く4つの理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "食欲と空腹の混同を防ぐ", desc: "「喉の渇き」を「空腹」と勘違いして食べてしまうことは意外と多い。食前にコップ1杯の水を飲むと食べすぎ防止になる。" },
              { title: "代謝の土台になる", desc: "脂肪の分解も栄養の運搬も、すべて水の中で行われる。水分不足の体は代謝が効率よく回らない。" },
              { title: "むくみの解消", desc: "「水を飲むとむくむ」は逆。水分不足になると体は水を溜め込もうとする。しっかり飲んだほうが余分な水分は排出される。" },
              { title: "便通の改善", desc: "食物繊維を摂っても水分が足りないと便は硬くなる。ダイエット中の便秘の一因は単純な水分不足。" },
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
          <p>
            さらに見逃せないのが、<strong>「飲み物のカロリーをゼロにできる」</strong>こと。ジュースや甘いカフェラテを水・お茶に置き換えるだけで、1日200〜400kcal減らせる人はかなり多いです。食事を我慢するより、はるかに簡単なカロリーカットです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how-much" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          1日どれくらい飲めばいい？
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">飲み水としての目安</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">1.5〜2L</p>
                <p className="text-xs text-gray-500">/ 日</p>
              </div>
              <p className="text-sm text-gray-500">（食事からの水分とは別。運動する日・夏場はさらにプラス）</p>
            </div>
          </div>
          <p>
            体格によっても変わり、目安は<strong>体重×約35ml</strong>（食事分含む）。体重70kgなら約2.5Lで、食事から約1Lは摂れるので、飲み水は1.5L前後という計算です。
          </p>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 一度に大量に飲んでも吸収しきれず、体に負担がかかるだけです。<strong>コップ1杯（200ml）を1日7〜8回</strong>に分けるのが基本。腎臓や心臓に持病がある方は医師の指示に従ってください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="drinks" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          何を飲む？飲み物の選び方
        </h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">評価</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">飲み物</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ポイント</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 text-center">◎</td>
                  <td className="p-2 border border-green-100 font-medium">水・炭酸水（無糖）</td>
                  <td className="p-2 border border-green-100">基本はこれ。炭酸水は満腹感も得られて間食対策に優秀</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 text-center">◎</td>
                  <td className="p-2 border border-green-100 font-medium">お茶（緑茶・麦茶・ウーロン茶）</td>
                  <td className="p-2 border border-green-100">0kcal。緑茶のカテキンには脂肪燃焼サポートの報告も。カフェイン入りは夕方以降控えめに</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 text-center">○</td>
                  <td className="p-2 border border-green-100 font-medium">ブラックコーヒー</td>
                  <td className="p-2 border border-green-100">0kcalでOK。ただし砂糖・ミルクを入れた瞬間に別物になる</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 text-center">△</td>
                  <td className="p-2 border border-green-100 font-medium">ゼロカロリー飲料</td>
                  <td className="p-2 border border-green-100">緊急避難としてはアリ。ただし甘味への依存が残るので常用は非推奨</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 text-center">❌</td>
                  <td className="p-2 border border-green-100 font-medium">ジュース・加糖コーヒー・スポドリ</td>
                  <td className="p-2 border border-green-100">液体の糖は血糖値を急上昇させ、満腹感もない。ダイエット中は最優先でカット</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            特に注意したいのが「健康そうに見える飲み物」。野菜ジュース、飲むヨーグルト、スムージー、スポーツドリンクは、<strong>実は砂糖がたっぷり</strong>入っているものが多い。成分表示の「炭水化物」を見る癖をつけましょう。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          無理なく水を飲む量を増やすコツ
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 「タイミング固定」で仕組み化する</p>
              <p>
                起床後・各食事の前・入浴前後・就寝前。この6回にコップ1杯ずつ飲むだけで約1.2L。<strong>「喉が渇いたら飲む」ではなく「決まったら飲む」</strong>にするのが続くコツです。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 常に手の届く場所に水を置く</p>
              <p>デスクに1Lボトルを置いて「夕方までに飲み切る」とルール化すると、進み具合が見えて達成しやすくなります。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 冷たすぎない水にする</p>
              <p>キンキンに冷えた水は量を飲みにくく、胃腸も冷えます。常温か白湯のほうがゴクゴク飲めて、体も冷やしません。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>飲み水の目安は1日1.5〜2L</strong>。コップ1杯×7〜8回に分ける</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>食前の1杯</strong>で食べすぎを防ぐ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>甘い飲み物を水・お茶に置き換える</strong>のが最も簡単なカロリーカット</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>タイミングを固定して仕組み化</strong>する</span></li>
          </ol>
          <p>
            水分補給は、今日から・お金をかけずに・我慢なしで始められる数少ないダイエット習慣です。食事プランと組み合わせれば効果はさらに安定します。まだの方はサクメシで自分に合った食事プランも作ってみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
