import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "16時間断食は痩せる？メリット・デメリットと正しいやり方 | サクメシ",
  description:
    "流行りの16時間断食（リーンゲインズ・8時間ダイエット）は本当に痩せるのか。仕組み・メリット・デメリット・向いている人を冷静に解説します。",
};

const TOC = [
  { id: "what", label: "16時間断食とは？" },
  { id: "truth", label: "痩せる仕組みの「本当のところ」" },
  { id: "merit", label: "メリットとデメリット" },
  { id: "who", label: "向いている人・向かない人" },
  { id: "how", label: "やるなら正しいやり方で" },
  { id: "summary", label: "まとめ" },
];

export default function IntermittentFasting() {
  return (
    <ColumnShell
      slug="intermittent-fasting"
      h1="16時間断食は痩せる？メリット・デメリットと正しいやり方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「16時間食べなければ痩せる」「オートファジーで若返る」——一度は聞いたことがあると思います。</p>
        <p>
          結論から言うと、16時間断食は<strong>「合う人には便利な食事法。でも魔法ではない」</strong>です。僕も試したことがありますが、良い面とキツい面の両方がありました。
        </p>
        <p>流行りに乗る前に、仕組みと注意点を冷静に押さえておきましょう。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          16時間断食とは？
        </h2>
        <div className="space-y-4">
          <p>
            1日のうち<strong>食べる時間を8時間以内に収め、残りの16時間は食べない</strong>という食事法です。「リーンゲインズ」「8時間ダイエット」とも呼ばれます。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">例：12時〜20時に食べるパターン</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>🕗 朝：水・お茶・ブラックコーヒーのみ（朝食は抜く）</p>
              <p>🕛 12時：1食目（昼食）</p>
              <p>🕓 16時前後：間食OK</p>
              <p>🕗 20時：2食目を食べ終える</p>
              <p>🌙 20時以降〜翌12時：固形物は摂らない</p>
            </div>
          </div>
          <p>睡眠時間を挟むので、実質「朝食を抜いて夜食をやめる」だけ、という人も多いです。</p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="truth" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          痩せる仕組みの「本当のところ」
        </h2>
        <div className="space-y-4">
          <p>
            よく語られる「オートファジー（細胞の自食作用）で痩せる」は、正直なところ<strong>ヒトのダイエット効果としてはまだ研究途上</strong>です。過度な期待は禁物。
          </p>
          <p>実際に痩せる理由は、もっとシンプルです。</p>
          <div className="space-y-2">
            {[
              { title: "食べる時間が短い＝総カロリーが減りやすい", desc: "食べられる時間が8時間しかなければ、物理的に食べる量が減る人が多い。結局はカロリー収支。" },
              { title: "夜遅い食事・夜食がなくなる", desc: "太る原因の代表「寝る前の食事」が仕組みとして消える。これだけで改善する人は多い。" },
              { title: "ルールが1つだけで分かりやすい", desc: "「カロリー計算は苦手だけど、時間を守るだけならできる」という人には続けやすい。" },
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
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 逆に言うと、<strong>8時間の間に食べすぎれば普通に太ります</strong>。「時間さえ守ればカロリーは自由」は誤解です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="merit" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          メリットとデメリット
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">⭕ メリット</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・カロリー計算なしで摂取量が減りやすい</li>
                <li>・夜食・ダラダラ食いが仕組みで消える</li>
                <li>・朝の準備が減って時間に余裕ができる</li>
                <li>・ルールがシンプルで迷わない</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ デメリット</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・タンパク質が不足しやすい（2食で必要量を摂るのは大変）</li>
                <li>・筋肉が落ちやすくなるリスク</li>
                <li>・空腹でのドカ食い・反動が起きやすい</li>
                <li>・昼の付き合い・家族の食事と合わせにくい</li>
                <li>・午前中の集中力が落ちる人もいる</li>
              </ul>
            </div>
          </div>
          <p>
            最大の落とし穴は<strong>タンパク質不足</strong>です。体重70kgの人が必要な約84g〜を2食で摂るには、1食42g以上。かなり意識しないと届きません。筋肉が落ちれば基礎代謝も下がり、長期的には痩せにくい体になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="who" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          向いている人・向かない人
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">向いている人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・もともと朝食を食べる習慣がない</li>
                <li>・夜遅くに食べる癖を断ち切りたい</li>
                <li>・カロリー計算がどうしても続かない</li>
                <li>・生活リズムが安定している</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">向かない人・やめておくべき人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・筋トレで筋肉を増やしたい人</li>
                <li>・朝食を抜くと仕事に支障が出る人</li>
                <li>・過食の傾向がある人（反動が出やすい）</li>
                <li>・妊娠中・授乳中・成長期・持病治療中の人（医師に相談を）</li>
              </ul>
            </div>
          </div>
          <p>
            僕の感覚では、<strong>「朝から食欲がない人が、無理に朝食を食べるのをやめる」</strong>くらいの入り方が一番自然です。逆に朝食をしっかり食べたい人が無理に合わせる必要はまったくありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やるなら正しいやり方で
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 食べる8時間は「質」を最優先</p>
              <p>2食＋間食で、タンパク質を体重×1.2g以上確保する。1食目・2食目の両方に肉・魚・卵・大豆を必ず入れましょう。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 断食中の水分はしっかり摂る</p>
              <p>水・お茶・ブラックコーヒーはOK。空腹感の多くは水分で紛れます。逆にジュースや砂糖入りコーヒーは断食が台無しに。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. いきなり16時間にしない</p>
              <p>まずは12時間（夜食をやめるだけ）から始めて、14時間→16時間と1〜2週間かけて延ばすと反動が出にくいです。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 体調が悪ければすぐやめる</p>
              <p>めまい・強い倦怠感・仕事に支障が出るレベルの空腹感が続くなら、あなたには合っていません。撤退も立派な判断です。</p>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>痩せる理由は結局カロリー収支</strong>。時間を守っても食べすぎれば太る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>最大の弱点はタンパク質不足</strong>。2食で体重×1.2g以上を意識</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>向き不向きがはっきり分かれる</strong>。朝食好きは無理に合わせない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>始めるなら12時間から段階的に</strong>。合わなければ撤退</span></li>
          </ol>
          <p>
            16時間断食をやるにしても、8時間の中で「何を食べるか」がすべてです。サクメシなら、あなたの体格・目標に合わせたカロリー・PFCで食事プランを作れるので、断食スタイルの人は昼・夜の2食に配分して活用してみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
