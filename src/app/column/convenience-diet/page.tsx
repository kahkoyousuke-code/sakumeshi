import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コンビニで買えるダイエット飯の選び方｜セブン・ファミマ・ローソン別おすすめ | サクメシ",
  description:
    "コンビニでダイエット中に食べられる商品を徹底解説。セブン・ファミマ・ローソン別のおすすめ商品と避けるべき商品を紹介します。",
};

const TOC = [
  { id: "basics", label: "コンビニダイエットの基本戦略" },
  { id: "seven", label: "セブン-イレブン おすすめ商品" },
  { id: "famima", label: "ファミリーマート おすすめ商品" },
  { id: "lawson", label: "ローソン おすすめ商品" },
  { id: "avoid", label: "避けるべき商品" },
  { id: "summary", label: "まとめ" },
];

export default function ConvenienceDiet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            コンビニで買えるダイエット飯の選び方｜セブン・ファミマ・ローソン別おすすめ商品を解説
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
            <p>「忙しくてどうしてもコンビニに頼ってしまう…」</p>
            <p>そんな人でも、選び方さえ知っていればコンビニ飯でしっかりダイエットできます。コンビニには実はダイエットに使える商品が豊富にそろっています。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="basics" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              コンビニダイエットの基本戦略
            </h2>
            <div className="space-y-4">
              <p>コンビニで買うときに意識すべき3つの基準があります。</p>
              <div className="space-y-3">
                {[
                  { label: "① タンパク質を優先する", desc: "サラダチキン、ゆで卵、豆腐、ギリシャヨーグルト。これらを必ず1品入れる習慣をつける。" },
                  { label: "② 糖質の量を確認する", desc: "おにぎりやパンは1個まで。麺類・スイーツは糖質が多いので要注意。パッケージ裏の栄養成分表示を見る癖をつけよう。" },
                  { label: "③ 野菜を忘れない", desc: "サラダやカットきゅうりをプラスするだけで食物繊維が増え、血糖値の上昇を緩やかにできる。" },
                ].map((item) => (
                  <div key={item.label} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800">
                <strong>目安カロリー：</strong>1食あたり400〜600kcalに収めることを意識しましょう。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="seven" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              セブン-イレブン おすすめ商品
            </h2>
            <div className="space-y-3">
              {[
                { name: "サラダチキン（プレーン）", kcal: "約105kcal", point: "P:22g。コンビニチキンの定番。そのまま食べられて最強のタンパク源。" },
                { name: "7プレミアム ギリシャヨーグルト", kcal: "約65kcal", point: "P:10g。間食にぴったり。脂質ゼロタイプを選ぶとさらに◎。" },
                { name: "ゆで卵（2個パック）", kcal: "約160kcal", point: "P:12g。安くて手軽な完全栄養食。塩を別に買って好みで。" },
                { name: "おでん（大根・こんにゃく・たまご）", kcal: "約100〜150kcal", point: "低カロリーで満足感が高い。冬場の最強ダイエット飯。" },
                { name: "もずく酢", kcal: "約15kcal", point: "食前に食べると血糖値上昇を抑える。食物繊維も豊富。" },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-gray-800">{item.name}</p>
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">{item.kcal}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.point}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="famima" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              ファミリーマート おすすめ商品
            </h2>
            <div className="space-y-3">
              {[
                { name: "ファミマル サラダチキンバー", kcal: "約60〜80kcal", point: "スティックタイプで食べやすい。複数フレーバーあり飽きない。" },
                { name: "豆腐バー（高タンパク）", kcal: "約100kcal", point: "P:10g以上。豆腐由来の植物性タンパク。小腹が空いたときに。" },
                { name: "コールドブリューコーヒー（無糖）", kcal: "0kcal", point: "カフェインが脂肪燃焼を促進。甘いカフェオレとの違いを意識して。" },
                { name: "枝豆スナック", kcal: "約120kcal", point: "スナック菓子の代替に。タンパク質・食物繊維も摂れる。" },
                { name: "蒸し鶏と野菜のサラダ", kcal: "約150kcal", point: "1品でタンパク質と野菜が同時に摂れる。ドレッシングは少なめに。" },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-gray-800">{item.name}</p>
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">{item.kcal}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.point}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="lawson" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              ローソン おすすめ商品
            </h2>
            <div className="space-y-3">
              {[
                { name: "ブランパン", kcal: "約170kcal", point: "糖質約8g。通常のパンと比べて糖質70%オフ。パンが食べたいときの救世主。" },
                { name: "ナチュラルローソン 大豆バー", kcal: "約100kcal", point: "大豆由来タンパク質を手軽に補給。小腹対策に。" },
                { name: "スモークチキンレッグ", kcal: "約170kcal", point: "骨付きで食べごたえあり。P:15g以上で満足感が高い。" },
                { name: "糖質オフのサラダチキンサンド", kcal: "約280kcal", point: "パンの糖質が抑えられており、タンパク質もしっかり。昼食向き。" },
                { name: "カスピ海ヨーグルト（プレーン）", kcal: "約60kcal", point: "乳酸菌が豊富。腸活効果もあり、ダイエットとの相性◎。" },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-green-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-gray-800">{item.name}</p>
                    <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">{item.kcal}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.point}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="avoid" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              避けるべき商品
            </h2>
            <div className="space-y-3">
              {[
                { name: "揚げ物（フライドチキン・コロッケ）", reason: "脂質が高く、衣の糖質も多い。1個で200〜300kcalを超えることも。" },
                { name: "甘いカフェオレ・フラペチーノ系", reason: "砂糖が大量。大きいサイズで40〜60gの糖質が入っていることも。" },
                { name: "菓子パン・クリームパン", reason: "脂質と糖質のダブルパンチ。1個で400kcal超えも普通。" },
                { name: "カップ麺", reason: "高塩分・高糖質・低タンパク。食べても満足感が続かない。" },
              ].map((item) => (
                <div key={item.name} className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="font-bold text-red-700 text-sm mb-1">❌ {item.name}</p>
                  <p className="text-sm text-gray-600">{item.reason}</p>
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
              <p>コンビニでダイエットするためのポイントは3つ。</p>
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>タンパク質を必ず1品入れる</strong>（サラダチキン・ゆで卵・豆腐）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>野菜かもずく酢をプラスする</strong>（血糖値コントロール）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>揚げ物・甘い飲み物・菓子パンを避ける</strong></span></li>
              </ol>
              <p>コンビニは工夫次第でダイエットの強い味方になります。自分のカロリー目標に合った食事プランが気になる方は、サクメシで診断してみてください。</p>
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
