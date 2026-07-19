import type { Metadata } from "next";
import Link from "next/link";
import ColumnFooter from "@/components/column/ColumnFooter";

export const metadata: Metadata = {
  title: "リバウンドしない食習慣｜落とした体重を維持する食事の考え方 | サクメシ",
  description:
    "ダイエット後にリバウンドしないための食習慣を解説。なぜリバウンドが起きるのか、維持期の食事の考え方と習慣化のポイントを紹介します。",
};

const TOC = [
  { id: "why-rebound", label: "なぜリバウンドするのか" },
  { id: "mindset", label: "リバウンドしない食事の考え方" },
  { id: "maintenance-calories", label: "維持期の目標カロリー" },
  { id: "habits", label: "習慣化のポイント" },
  { id: "summary", label: "まとめ" },
];

export default function NoRebound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            リバウンドしない食習慣｜落とした体重を維持する食事の考え方
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
            <p>「頑張って5kg落としたのに、3ヶ月でまた元に戻った…」</p>
            <p>これはダイエットの失敗ではなく、<strong>維持期の戦略が足りなかった</strong>だけです。リバウンドには明確な原因があり、正しく対処すれば防げます。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="why-rebound" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              なぜリバウンドするのか
            </h2>
            <div className="space-y-4">
              <p>リバウンドの主な原因は3つあります。</p>
              <div className="space-y-3">
                {[
                  {
                    title: "① 急激な食事制限で基礎代謝が下がった",
                    desc: "極端な食事制限をすると、体は省エネモードに入り基礎代謝を落とします。ダイエット終了後に元の食事量に戻すと、消費できずに脂肪として蓄積される。",
                  },
                  {
                    title: "② 筋肉量が落ちていた",
                    desc: "タンパク質不足や有酸素運動だけのダイエットは筋肉を削る。筋肉が減ると消費カロリーが落ち、太りやすい体になる。",
                  },
                  {
                    title: "③ 目標達成後に「解放感」で食べ過ぎた",
                    desc: "「やっと終わった！」と制限を一気に解除してしまうパターン。維持期の意識がなければ当然元に戻る。",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="font-bold text-red-700 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="mindset" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              リバウンドしない食事の考え方
            </h2>
            <div className="space-y-4">
              <p>「ダイエット終了」という概念を捨てることが最重要です。目標体重に達したあとは「減らす」から「維持する」フェーズに移行するだけで、食事管理は続けます。</p>
              <div className="space-y-3">
                {[
                  { point: "カロリーを「少しずつ」増やす", desc: "ダイエット期の食事からいきなり元に戻さず、毎週100〜150kcalずつ増やしていく。体が新しいカロリー水準に慣れる時間を作る。" },
                  { point: "タンパク質の摂取量はキープする", desc: "維持期でも体重×1.5gのタンパク質は摂り続ける。筋肉量を落とさないことが最重要。" },
                  { point: "週に1回は体重を量る", desc: "毎日は精神的に辛いが、週1回の計測は維持の実感になる。2週連続で増えたら食事を見直すサイン。" },
                ].map((item) => (
                  <div key={item.point} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">✓ {item.point}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="maintenance-calories" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              維持期の目標カロリー
            </h2>
            <div className="space-y-4">
              <p>維持期の目標カロリーは<strong>TDEE（1日の総消費カロリー）とほぼ同等</strong>です。ダイエット期と違い、赤字を作る必要はありません。</p>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
                <p className="text-sm font-bold text-green-700">維持期のカロリー設定の目安</p>
                <div className="space-y-2">
                  {[
                    { phase: "ダイエット期", cal: "TDEE − 300〜500kcal", color: "text-red-600" },
                    { phase: "維持期（移行期）", cal: "TDEE − 100〜200kcal", color: "text-orange-600" },
                    { phase: "完全維持期", cal: "TDEE ≒ 同等", color: "text-green-600" },
                  ].map((item) => (
                    <div key={item.phase} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-100">
                      <span className="text-sm font-medium">{item.phase}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.cal}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">※ TDEEはサクメシの診断で自動計算されます。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              習慣化のポイント
            </h2>
            <div className="space-y-4">
              <p>リバウンドしない人の共通点は「食事管理が習慣になっている」ことです。</p>
              <div className="space-y-3">
                {[
                  { habit: "毎朝同じ時間に体重を計る", desc: "日々の変化に敏感になれる。食べ過ぎた翌日に気付ける。" },
                  { habit: "お気に入りの「維持食」を持つ", desc: "毎日考えなくていい定番メニューを3〜5品決めておく。鶏むね肉×ブロッコリー×白米など。" },
                  { habit: "チートデイを計画的に取り入れる", desc: "週1回程度、好きなものを食べる日を設ける。制限のストレスを解消して長期継続しやすくなる。" },
                  { habit: "筋トレを継続する", desc: "筋肉量を維持することが基礎代謝を守る。週2〜3回でOK。ジムでも自重でも。" },
                ].map((item) => (
                  <div key={item.habit} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">✓ {item.habit}</p>
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
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>目標達成後も食事管理を「維持モード」で続ける</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>カロリーは少しずつ増やして体を慣らす</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>タンパク質と筋トレを継続して筋肉量を守る</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>週1回の体重チェックで変化を見逃さない</strong></span></li>
              </ol>
              <p>サクメシでは「現状維持」を目標に設定することもできます。ダイエット後の維持プランもぜひ作ってみてください。</p>
            </div>
          </section>

        </div>

        <ColumnFooter slug="no-rebound" />
      </article>
    </div>
  );
}
