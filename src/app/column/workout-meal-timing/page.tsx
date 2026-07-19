import type { Metadata } from "next";
import Link from "next/link";
import ColumnFooter from "@/components/column/ColumnFooter";

export const metadata: Metadata = {
  title: "筋トレ前後の食事タイミング｜何をいつ食べるか完全解説 | サクメシ",
  description:
    "筋トレ前後の食事タイミングを徹底解説。トレーニング前・後に何をいつ食べればいいか、プロテインのタイミングも含めて紹介します。",
};

const TOC = [
  { id: "why", label: "なぜ食事タイミングが重要か" },
  { id: "pre-workout", label: "トレーニング前の食事" },
  { id: "post-workout", label: "トレーニング後の食事" },
  { id: "protein-timing", label: "プロテインはいつ飲む？" },
  { id: "rest-day", label: "休息日の食事はどうする？" },
  { id: "summary", label: "まとめ" },
];

export default function WorkoutMealTiming() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            筋トレ前後の食事タイミング｜何をいつ食べるか10年筋トレ民が完全解説
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
            <p>「筋トレはしているのに筋肉がなかなかつかない…」</p>
            <p>その原因、食事タイミングにあるかもしれません。トレーニングの効果を最大化するには、何を食べるかだけでなく「いつ食べるか」が非常に重要です。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              なぜ食事タイミングが重要か
            </h2>
            <div className="space-y-4">
              <p>筋肉の合成・分解は24時間絶えず行われています。食事タイミングを意識することで、合成を促進・分解を抑制する時間帯を作れます。</p>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
                <p className="text-sm font-bold text-green-700">タイミングが筋肉に影響する主な理由</p>
                {[
                  "運動後30〜60分は筋肉がアミノ酸を吸収しやすい（アナボリックウィンドウ）",
                  "トレーニング前の糖質がエネルギー不足を防ぎパフォーマンスを維持する",
                  "空腹状態でのトレーニングは筋分解（カタボリック）を招く",
                ].map((t) => (
                  <div key={t} className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    <p className="text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="pre-workout" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              トレーニング前の食事
            </h2>
            <div className="space-y-4">
              <p>トレーニングの<strong>1〜2時間前</strong>に食事を済ませるのが理想です。</p>
              <div className="space-y-3">
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">何を食べる？</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-sm">メインは<strong>糖質（炭水化物）</strong>。筋トレのエネルギー源はグリコーゲン（糖質）なので、事前に補充しておく必要があります。</p>
                    <div className="space-y-2">
                      {[
                        { food: "おにぎり1〜2個", desc: "手軽に糖質補給。具はシンプルなものが◎" },
                        { food: "バナナ1〜2本", desc: "消化が早く、トレ直前でもOK" },
                        { food: "オートミール＋はちみつ", desc: "GI値が中程度で持続的なエネルギー供給" },
                        { food: "全粒粉トースト＋ゆで卵", desc: "糖質＋タンパク質のバランス食" },
                      ].map((item) => (
                        <div key={item.food} className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <p className="text-sm"><strong className="text-green-700">{item.food}</strong>　{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-1">❌ 避けるべきもの</p>
                  <p className="text-sm">揚げ物・生クリーム系など脂質が多いもの。消化に時間がかかり、トレ中に胃もたれする原因に。</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="post-workout" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              トレーニング後の食事
            </h2>
            <div className="space-y-4">
              <p>トレーニング後<strong>30〜60分以内</strong>が最重要タイミング。筋肉の修復・合成を最大化する黄金の時間です。</p>
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ゴールデンタイムに摂るべき栄養</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 text-center">
                      <p className="text-xs font-bold text-blue-700 mb-1">タンパク質</p>
                      <p className="text-lg font-bold text-blue-800">20〜40g</p>
                      <p className="text-xs text-gray-500">筋合成に必須</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-100 text-center">
                      <p className="text-xs font-bold text-orange-700 mb-1">糖質</p>
                      <p className="text-lg font-bold text-orange-800">30〜60g</p>
                      <p className="text-xs text-gray-500">グリコーゲン補充</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { food: "プロテイン＋バナナ", desc: "最も手軽。外出先でもすぐ飲める" },
                      { food: "鶏むね肉＋白米", desc: "理想の組み合わせ。自炊勢の定番" },
                      { food: "サラダチキン＋おにぎり", desc: "コンビニで即対応できる" },
                      { food: "卵かけごはん＋豆腐", desc: "低コストで高タンパク" },
                    ].map((item) => (
                      <div key={item.food} className="bg-green-50 rounded-lg p-3 border border-green-100">
                        <p className="text-sm"><strong className="text-green-700">{item.food}</strong>　{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="protein-timing" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              プロテインはいつ飲む？
            </h2>
            <div className="space-y-4">
              <p>プロテインのベストタイミングは<strong>トレーニング後30分以内</strong>が基本ですが、実はそれより「1日のタンパク質総量」のほうが重要です。</p>
              <div className="space-y-3">
                {[
                  { time: "トレーニング後（最重要）", desc: "筋合成のゴールデンタイムを逃さない。水か牛乳で素早く溶かして飲む。" },
                  { time: "朝食時", desc: "起床後は筋分解が起きやすい。朝プロテインで筋肉を守る。" },
                  { time: "就寝前", desc: "カゼインプロテインなら吸収がゆっくりで睡眠中の筋合成をサポート。" },
                  { time: "間食として", desc: "食事だけでタンパク質が足りないときの補助として。" },
                ].map((item) => (
                  <div key={item.time} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">🕐 {item.time}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800">
                <strong>目安：</strong>体重1kgあたり1.5〜2gのタンパク質を1日で摂ることが最優先。タイミングはその次。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="rest-day" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              休息日の食事はどうする？
            </h2>
            <div className="space-y-4">
              <p>「休息日はカロリーを落とすべき？」という疑問をよく聞きます。答えは<strong>「少し落とすが、大幅には下げない」</strong>です。</p>
              <div className="space-y-3">
                {[
                  { label: "タンパク質は同量をキープ", desc: "休息日こそ筋肉の修復が進む。タンパク質を減らすと筋合成が落ちる。" },
                  { label: "糖質はやや控えめに", desc: "運動量が少ない分、エネルギー需要が下がる。ごはんを少し減らす程度でOK。" },
                  { label: "カロリーは100〜200kcal減らす程度", desc: "大幅カットは逆効果。回復に必要な栄養素まで削ってしまう。" },
                ].map((item) => (
                  <div key={item.label} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">✓ {item.label}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
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
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>トレ1〜2時間前</strong>に糖質を摂っておく</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>トレ後30〜60分以内</strong>にタンパク質＋糖質を補給する</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>プロテインはトレ後が最優先</strong>、朝・就寝前も有効</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>休息日もタンパク質は落とさない</strong>、糖質を少し減らす程度</span></li>
              </ol>
              <p>自分の目標に合ったカロリー・PFCバランスを知りたい方は、サクメシで食事プランを作ってみてください。</p>
            </div>
          </section>

        </div>

        <ColumnFooter slug="workout-meal-timing" />
      </article>
    </div>
  );
}
