import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "食べる順番ダイエット｜血糖値を抑えて太りにくい食べ方 | サクメシ",
  description:
    "食べる順番を変えるだけで血糖値の上昇を抑えてダイエットに効果的。野菜→タンパク質→炭水化物の順番と実践のコツを解説します。",
};

const TOC = [
  { id: "why", label: "食べる順番がダイエットに効く理由" },
  { id: "order", label: "正しい食べる順番" },
  { id: "blood-sugar", label: "血糖値スパイクとは？" },
  { id: "tips", label: "実践のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function EatingOrder() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            食べる順番ダイエット｜血糖値を抑えて太りにくい体を作る食べ方
          </h1>
        </header>

        <nav className="bg-green-50 rounded-xl p-5 border border-green-100 mb-10">
          <p className="text-sm font-bold text-green-700 mb-3">目次</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-green-700 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">

          <div className="space-y-4">
            <p>「食べる量を変えていないのに、食べる順番を変えただけで体重が落ちた」という話を聞いたことがあるでしょうか。</p>
            <p>これは単なる話題でなく、科学的に根拠のある方法です。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              食べる順番がダイエットに効く理由
            </h2>
            <div className="space-y-4">
              <p>太る最大の原因のひとつは<strong>血糖値の急上昇</strong>です。食事で血糖値が急激に上がると、インスリンが大量に分泌されます。インスリンは「脂肪を蓄積するホルモン」とも呼ばれ、余ったエネルギーを体脂肪として蓄えてしまいます。</p>
              <p>食べる順番を工夫することで、この血糖値の急上昇を緩やかにし、脂肪がつきにくくなります。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="order" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              正しい食べる順番
            </h2>
            <div className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    step: "① 最初：野菜・きのこ・海藻",
                    icon: "🥗",
                    desc: "食物繊維が糖の吸収を遅らせる。サラダ・味噌汁・もずく酢がおすすめ。最低でも3〜5分かけて食べる。",
                    color: "bg-emerald-50 border-emerald-100",
                    textColor: "text-emerald-700",
                  },
                  {
                    step: "② 次：タンパク質（肉・魚・卵・豆腐）",
                    icon: "🍗",
                    desc: "胃の中に食物繊維のクッションができた後にタンパク質を入れる。満腹感も出てきて、次の炭水化物を食べ過ぎにくくなる。",
                    color: "bg-blue-50 border-blue-100",
                    textColor: "text-blue-700",
                  },
                  {
                    step: "③ 最後：炭水化物（ごはん・パン・麺）",
                    icon: "🍚",
                    desc: "野菜とタンパク質が先に入っているため、糖の吸収が緩やかになる。最後に食べることで食べ過ぎも防ぎやすい。",
                    color: "bg-orange-50 border-orange-100",
                    textColor: "text-orange-700",
                  },
                ].map((item) => (
                  <div key={item.step} className={`rounded-xl p-4 border ${item.color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <p className={`font-bold text-sm ${item.textColor}`}>{item.step}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="blood-sugar" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              血糖値スパイクとは？
            </h2>
            <div className="space-y-4">
              <p>食後に血糖値が急激に上昇・急降下する現象を「血糖値スパイク」と呼びます。これが起きると：</p>
              <div className="space-y-2">
                {[
                  "食後に強い眠気や倦怠感が来る",
                  "インスリンが大量分泌されて脂肪がつきやすくなる",
                  "血糖値が下がるとすぐにまた空腹になる",
                  "繰り返すと糖尿病リスクが上がる",
                ].map((item) => (
                  <div key={item} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                    <span className="text-red-500 shrink-0">!</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p>食べる順番を守るだけで、これらのリスクを大幅に下げられます。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              実践のコツ
            </h2>
            <div className="space-y-3">
              {[
                { title: "よく噛んでゆっくり食べる", desc: "早食いは血糖値を急上昇させる。1口30回が理想だが、まずは意識的にゆっくり食べるだけでOK。" },
                { title: "食前に酢やもずく酢を摂る", desc: "酢酸が血糖値上昇を抑える効果がある。食前のもずく酢やサラダのドレッシングにお酢を使うのが手軽。" },
                { title: "白米より玄米・雑穀米を選ぶ", desc: "食物繊維が多く、糖の吸収が緩やか。白米に混ぜて炊くだけでOK。" },
                { title: "コンビニでもできる", desc: "サラダ→サラダチキン→おにぎりの順に食べるだけ。難しいことは何もない。" },
              ].map((item) => (
                <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="font-bold text-green-700 text-sm mb-1">✓ {item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
              <p>食べる順番ダイエットのポイントを整理します。</p>
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>野菜・きのこ・海藻を最初に食べる</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>次に肉・魚・卵などタンパク質</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>最後にごはん・パン・麺を食べる</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>よく噛んでゆっくり食べる習慣をつける</strong></span></li>
              </ol>
              <p>食べる量を変えなくても、順番を変えるだけで体脂肪のつきやすさが変わります。今日の次の食事からすぐ実践できます。</p>
            </div>
          </section>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/form"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
          >
            サクメシで自分に合った食事プランを作る →
          </Link>
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-sm font-bold text-gray-600 mb-3">もっと詳しく知りたい方はこちら（note）</p>
          <div className="space-y-3">
            <a href="https://note.com/kahko/n/n011ab3e59a76" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors">
              <span className="text-2xl">📖</span>
              <span className="text-sm text-green-700 font-medium">PFCの基本と食材選びガイド</span>
            </a>
            <a href="https://note.com/kahko/n/n8a6fc450e6e2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors">
              <span className="text-2xl">🏆</span>
              <span className="text-sm text-green-700 font-medium">92kgから大会入賞までのリアル食事記録</span>
            </a>
            <a href="https://note.com/kahko/n/n33722e8526e5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors">
              <span className="text-2xl">🍺</span>
              <span className="text-sm text-green-700 font-medium">お酒とダイエットを両立する飲み方ルール</span>
            </a>
            <a href="https://note.com/kahko/n/nc1b31d5e0f60" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors">
              <span className="text-2xl">📊</span>
              <span className="text-sm text-green-700 font-medium">糖質ジグザグダイエット（カーボサイクリング）の教科書</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
