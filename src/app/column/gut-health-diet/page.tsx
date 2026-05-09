import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "腸活×ダイエット｜食物繊維・発酵食品で痩せやすい体を作る | サクメシ",
  description:
    "腸活がダイエットに効く理由と実践方法を解説。食物繊維・発酵食品の摂り方、腸内環境を整える食事習慣を紹介します。",
};

const TOC = [
  { id: "why", label: "腸活がダイエットに効く理由" },
  { id: "fiber", label: "食物繊維の重要性" },
  { id: "fermented", label: "発酵食品のすすめ" },
  { id: "good-foods", label: "腸活に良い食事" },
  { id: "bad-habits", label: "腸内環境を悪化させる食習慣" },
  { id: "summary", label: "まとめ" },
];

export default function GutHealthDiet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            腸活×ダイエット｜食物繊維・発酵食品で痩せやすい体を作る方法
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
            <p>「食事に気をつけているのに体重が落ちにくい…」</p>
            <p>その原因のひとつが<strong>腸内環境の乱れ</strong>かもしれません。腸活はダイエットの土台を作る上で非常に重要です。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              腸活がダイエットに効く理由
            </h2>
            <div className="space-y-4">
              <p>腸内には約100兆個の腸内細菌が住んでいます。これらの細菌のバランスが崩れると、ダイエットに悪影響が出ることが研究で分かっています。</p>
              <div className="space-y-2">
                {[
                  { title: "エネルギー代謝の向上", desc: "善玉菌が多い腸は短鎖脂肪酸を産生し、エネルギー消費を促進する。" },
                  { title: "脂肪の吸収抑制", desc: "食物繊維が脂質の吸収を緩やかにし、余分な脂肪が蓄積されにくくなる。" },
                  { title: "食欲コントロール", desc: "腸は「第2の脳」とも呼ばれ、満腹ホルモン（GLP-1など）の分泌に関与する。腸内環境が整うと食欲が安定する。" },
                  { title: "むくみ・便秘の改善", desc: "便秘が解消されると体重・見た目の変化が出やすく、モチベーション維持に直結する。" },
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
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="fiber" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              食物繊維の重要性
            </h2>
            <div className="space-y-4">
              <p>食物繊維は善玉菌のエサになります。腸内細菌を増やすには、まず食物繊維を充実させることが基本です。</p>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
                <p className="text-sm font-bold text-green-700">1日の目標摂取量</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">20g</p>
                    <p className="text-xs text-gray-500">以上 / 日</p>
                  </div>
                  <p className="text-sm text-gray-500">（日本人の平均は約15g。5g以上の不足が多い）</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-700">食物繊維が多い食品</p>
                {[
                  { food: "きのこ類（しめじ・えのき・まいたけ）", amount: "100g で約3〜4g" },
                  { food: "海藻（わかめ・めかぶ・もずく）", amount: "低カロリーで食物繊維豊富" },
                  { food: "オートミール", amount: "100g で約10g" },
                  { food: "ごぼう", amount: "100g で約6g" },
                  { food: "アボカド", amount: "1個で約5g。良質な脂質も含む" },
                  { food: "大麦・雑穀米", amount: "白米に混ぜるだけでOK" },
                ].map((item) => (
                  <div key={item.food} className="bg-white rounded-lg border border-green-100 p-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700">{item.food}</p>
                    <span className="text-xs text-emerald-600 font-bold shrink-0 ml-2">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="fermented" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              発酵食品のすすめ
            </h2>
            <div className="space-y-4">
              <p>発酵食品には生きた乳酸菌や酵素が豊富に含まれており、腸内の善玉菌を増やします。毎日少量ずつ摂り続けることが大切です。</p>
              <div className="space-y-3">
                {[
                  { food: "ヨーグルト（無糖）", point: "乳酸菌・ビフィズス菌が豊富。毎朝100〜200g習慣に。" },
                  { food: "味噌", point: "日本の伝統発酵食品。味噌汁1杯を毎日の習慣に。加熱しても腸に嬉しい効果がある。" },
                  { food: "納豆", point: "納豆菌が腸内環境を整える。ネバネバ成分も食物繊維の一種。" },
                  { food: "キムチ", point: "乳酸菌が豊富。辛み成分カプサイシンに代謝促進効果も。" },
                  { food: "酢", point: "酢酸が腸内環境を改善。食前に大さじ1杯の酢を水で薄めて飲む習慣が効果的。" },
                ].map((item) => (
                  <div key={item.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <p className="font-bold text-green-700 text-sm mb-1">🦠 {item.food}</p>
                    <p className="text-sm text-gray-600">{item.point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="good-foods" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              腸活に良い食事の組み合わせ
            </h2>
            <div className="space-y-4">
              <p>食物繊維（プレバイオティクス）と発酵食品（プロバイオティクス）を合わせて摂る「シンバイオティクス」が最も効果的です。</p>
              <div className="space-y-3">
                {[
                  { meal: "朝食", example: "オートミール＋無糖ヨーグルト＋バナナ", point: "食物繊維＋乳酸菌＋果糖の組み合わせで腸が活性化" },
                  { meal: "昼食", example: "玄米おにぎり＋納豆＋わかめ味噌汁", point: "日本食の定番が実は最強の腸活メニュー" },
                  { meal: "夕食", example: "鶏むね肉＋きのこ炒め＋キムチ", point: "タンパク質＋食物繊維＋発酵食品で腸に理想的" },
                ].map((item) => (
                  <div key={item.meal} className="border border-green-200 rounded-xl overflow-hidden">
                    <div className="bg-green-600 px-4 py-2">
                      <h3 className="text-sm font-bold text-white">{item.meal}</h3>
                    </div>
                    <div className="p-4 space-y-1">
                      <p className="text-sm font-bold text-gray-700">{item.example}</p>
                      <p className="text-xs text-gray-500">{item.point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="bad-habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              腸内環境を悪化させる食習慣
            </h2>
            <div className="space-y-3">
              {[
                { habit: "食物繊維不足（野菜・きのこを食べない）", desc: "善玉菌のエサがなくなり腸内環境が乱れる。野菜抜きの食事が続くと悪玉菌が増える。" },
                { habit: "加工食品・ジャンクフードの食べすぎ", desc: "添加物や人工甘味料が腸内細菌のバランスを崩す。ゼロカロリー飲料の飲みすぎにも注意。" },
                { habit: "ストレス・睡眠不足", desc: "腸と脳は「腸脳相関」でつながっている。ストレスや睡眠不足が腸の動きを悪化させる。" },
                { habit: "抗生物質の乱用", desc: "必要な場合は仕方ないが、服用後は特に発酵食品を意識的に摂って腸内細菌を補う。" },
              ].map((item) => (
                <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="font-bold text-red-700 text-sm mb-1">❌ {item.habit}</p>
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
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>食物繊維を1日20g以上摂る</strong>（きのこ・海藻・雑穀）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>発酵食品を毎日取り入れる</strong>（ヨーグルト・味噌・納豆・キムチ）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>食物繊維と発酵食品を組み合わせる</strong>（シンバイオティクス）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>加工食品・ジャンクフードを減らす</strong></span></li>
              </ol>
              <p>腸活はすぐに効果が出るわけではありませんが、2〜4週間続けると便通の改善・肌の変化・体重の落ちやすさに変化が出てきます。サクメシで食事プランを作って、腸活食材を取り入れたメニューを実践してみてください。</p>
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
