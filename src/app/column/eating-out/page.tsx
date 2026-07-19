import type { Metadata } from "next";
import Link from "next/link";
import ColumnFooter from "@/components/column/ColumnFooter";

export const metadata: Metadata = {
  title: "外食でも太らない食べ方｜定食・ラーメン・居酒屋シーン別ガイド | サクメシ",
  description:
    "外食中でもダイエットを続けるための選び方を解説。定食・ラーメン・居酒屋・ファストフードなどシーン別に太りにくいメニューの選び方を紹介します。",
};

const TOC = [
  { id: "basics", label: "外食ダイエットの基本ルール" },
  { id: "teishoku", label: "定食・和食" },
  { id: "ramen", label: "ラーメン・麺類" },
  { id: "izakaya", label: "居酒屋" },
  { id: "fastfood", label: "ファミレス・ファストフード" },
  { id: "summary", label: "まとめ" },
];

export default function EatingOut() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            外食でも太らない食べ方｜定食・ラーメン・居酒屋シーン別ガイド
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
            <p>「ダイエット中だから外食できない…」と思っていませんか？</p>
            <p>そんなことはありません。選び方のルールを覚えるだけで、外食しながらでも体重を落とせます。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="basics" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              外食ダイエットの基本ルール
            </h2>
            <div className="space-y-3">
              {[
                { rule: "タンパク質を必ず含むメニューを選ぶ", desc: "肉・魚・卵・豆腐が入っているか確認する。タンパク質なしの食事は筋肉を落とすリスクがある。" },
                { rule: "揚げ物は1品まで", desc: "唐揚げ・天ぷら・フライは脂質が高い。食べるなら1品だけにして、ほかは焼きや蒸しにする。" },
                { rule: "ごはんは「少なめ」か「半分」で頼む", desc: "多くの店で対応してもらえる。糖質を100〜150kcal分は簡単にカットできる。" },
                { rule: "野菜系サイドを1品追加する", desc: "サラダ・おひたし・野菜炒めを1品プラスするだけで栄養バランスが格段に改善。" },
              ].map((item) => (
                <div key={item.rule} className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="font-bold text-green-700 text-sm mb-1">✓ {item.rule}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="teishoku" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              定食・和食
            </h2>
            <div className="space-y-4">
              <p>実は外食の中で<strong>最もダイエット向き</strong>なのが和食・定食系です。</p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm font-bold text-green-700 mb-2">◎ おすすめメニュー</p>
                  <ul className="space-y-1">
                    {["焼き魚定食（ご飯少なめ）", "鶏の照り焼き定食（揚げないもの）", "納豆定食", "豚汁定食", "湯豆腐・茶碗蒸しなどの副菜つき定食"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ 避けたいメニュー</p>
                  <ul className="space-y-1">
                    {["カツ丼・天丼（揚げ物＋糖質の二重攻撃）", "親子丼の大盛り", "うな丼（高カロリー）"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="ramen" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              ラーメン・麺類
            </h2>
            <div className="space-y-4">
              <p>麺類はダイエットの敵と思われがちですが、<strong>選び方と食べ方</strong>次第で影響を最小限にできます。</p>
              <div className="space-y-3">
                {[
                  { label: "スープを飲み干さない", desc: "ラーメンのスープは塩分・脂質のかたまり。具と麺を食べてスープは残す。それだけでカロリーを100〜200kcal減らせる。" },
                  { label: "塩・醤油ラーメンを選ぶ", desc: "豚骨・味噌に比べてカロリーが低め。背脂や追い脂は不要。" },
                  { label: "蕎麦はGI値が低くてダイエット向き", desc: "うどんより血糖値の上昇が緩やか。ただしつゆの塩分は多いので飲み干さない。" },
                  { label: "チャーシューを追加でタンパク質補強", desc: "麺類はタンパク質が少ない。チャーシューや味玉を追加してPFCバランスを補正。" },
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
            <h2 id="izakaya" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              居酒屋
            </h2>
            <div className="space-y-4">
              <p>居酒屋はダイエット中でも工夫次第でうまく付き合えます。</p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm font-bold text-green-700 mb-2">◎ 積極的に選ぶメニュー</p>
                  <ul className="space-y-1">
                    {["枝豆（タンパク質・食物繊維が豊富）", "焼き鳥（塩）", "刺身盛り合わせ", "冷奴・やっこ", "野菜スティック", "鶏の塩焼き・焼き魚", "茶碗蒸し"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ 注意が必要なメニュー</p>
                  <ul className="space-y-1">
                    {["唐揚げ（高脂質）", "ポテトフライ・フライドポテト", "〆のラーメン・チャーハン（深夜の高糖質）", "甘いカクテル・サワー（糖質が高い）"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="fastfood" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              ファミレス・ファストフード
            </h2>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">ファミレスでの選び方</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {["ハンバーグ定食はソースを別添えで（カロリーカット）", "グリルチキン・魚のムニエルなど焼き物を選ぶ", "サラダバーがあれば先に野菜を取り皿いっぱい食べる", "ドリンクバーはブラックコーヒーか無糖茶"].map((t) => (
                      <div key={t} className="flex gap-2">
                        <span className="text-green-500 shrink-0">✓</span>
                        <p className="text-sm">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">ファストフードでの選び方</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {["バーガーはポテトなしで単品注文", "グリルチキン系バーガーを選ぶ（フライよりマシ）", "サイドはサラダかコーンに変更", "飲み物は必ず無糖・ゼロカロリーに"].map((t) => (
                      <div key={t} className="flex gap-2">
                        <span className="text-green-500 shrink-0">✓</span>
                        <p className="text-sm">{t}</p>
                      </div>
                    ))}
                  </div>
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
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>タンパク質が入っているメニューを選ぶ</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>ごはんは少なめで頼む習慣をつける</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>揚げ物は1品まで</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>飲み物は無糖一択</strong></span></li>
              </ol>
              <p>外食は「ゼロにする」のではなく「うまく選ぶ」のがダイエット継続のコツ。自分に合った食事プランをサクメシで作って、外食時の目標カロリーを把握しておきましょう。</p>
            </div>
          </section>

        </div>

        <ColumnFooter slug="eating-out" />
      </article>
    </div>
  );
}
