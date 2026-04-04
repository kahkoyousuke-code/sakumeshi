import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "基礎代謝を上げる食事｜痩せやすい体を作る5つの食べ方 | サクメシ",
  description:
    "基礎代謝を上げる食事のポイントを解説。タンパク質の摂り方、食事回数、体を温める食材など、痩せやすい体を作る具体的な方法を紹介します。",
};

const TOC = [
  { id: "what-happens", label: "基礎代謝が下がるとどうなる？" },
  { id: "five-points", label: "基礎代謝を上げる食事の5つのポイント" },
  { id: "ng-diet", label: "やってはいけない食事法" },
  { id: "training", label: "基礎代謝を上げるのに筋トレも必須" },
  { id: "summary", label: "まとめ" },
];

export default function BoostMetabolism() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        href="/column"
        className="text-sm text-green-600 hover:underline mb-6 inline-block"
      >
        ← コラム一覧に戻る
      </Link>

      <article>
        {/* ヘッダー */}
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-03-29</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            基礎代謝を上げる食事とは？痩せやすい体を作る食べ方を10年筋トレ民が解説
          </h1>
        </header>

        {/* 目次 */}
        <nav className="bg-green-50 rounded-xl p-5 border border-green-100 mb-10">
          <p className="text-sm font-bold text-green-700 mb-3">目次</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-green-700 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 本文 */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">

          {/* リード文 */}
          <div className="space-y-4">
            <p>「食べる量を減らしているのに痩せない…」</p>
            <p>
              こういう人は<strong>基礎代謝が落ちている</strong>可能性があります。
            </p>
            <p>
              基礎代謝とは、何もしなくても体が消費するカロリーのこと。心臓を動かしたり、体温を維持したり、呼吸したりするだけで使われるエネルギーです。
            </p>
            <p>
              実はこの基礎代謝、<strong>食事の内容や食べ方で上げることができます。</strong>
            </p>
            <p>
              逆に間違った食事制限をすると基礎代謝は下がって、どんどん痩せにくい体になっていく。これがダイエットで一番怖いパターンです。
            </p>
            <p>
              この記事では、基礎代謝を上げる食事のポイントを、10年以上のダイエット・筋トレ経験をもとに解説します。
            </p>
          </div>

          <hr className="border-green-100" />

          {/* セクション1 */}
          <section>
            <h2
              id="what-happens"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              基礎代謝が下がるとどうなる？
            </h2>
            <div className="space-y-4">
              <p>まず、基礎代謝が下がるとどうなるかを知っておきましょう。</p>
              <p><strong>同じ量を食べても太りやすくなります。</strong></p>
              <p>
                基礎代謝が1500kcalの人と1200kcalの人が、同じ1800kcalの食事をした場合、前者は300kcalのオーバーですが、後者は600kcalのオーバー。この差が毎日積み重なると、1ヶ月で2kg以上の差になります。
              </p>
              <p>基礎代謝が下がる主な原因は：</p>
              <div className="space-y-2">
                {[
                  { label: "筋肉量の減少", desc: "運動不足や極端な食事制限で筋肉が落ちる" },
                  { label: "加齢", desc: "年齢とともに自然に下がる" },
                  { label: "食事量が少なすぎる", desc: "体が省エネモードに入る" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                    <span className="font-bold text-green-700 text-sm shrink-0">・</span>
                    <p className="text-sm"><strong>{item.label}</strong>（{item.desc}）</p>
                  </div>
                ))}
              </div>
              <p>
                つまり「食べないダイエット」は基礎代謝を下げて、<strong>痩せにくい体を自分で作ってしまう</strong>最悪の方法なんです。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション2 */}
          <section>
            <h2
              id="five-points"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              基礎代謝を上げる食事の5つのポイント
            </h2>
            <div className="space-y-8">

              {/* ポイント1 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ポイント1：タンパク質をしっかり摂る</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">
                    基礎代謝を上げるために一番大事なのは<strong>筋肉量を維持・増やすこと</strong>です。そして筋肉の材料はタンパク質。
                  </p>
                  <p className="text-sm">
                    タンパク質が不足すると、体は筋肉を分解してエネルギーに変えてしまいます。ダイエット中に体重が落ちても見た目が締まらない人は、脂肪ではなく筋肉が落ちている可能性が高いです。
                  </p>
                  <p className="text-sm font-bold text-green-700">1日の目安：体重×1.5〜2g</p>
                  <p className="text-sm">体重60kgの人なら90〜120g。これを3食＋間食で分けて摂るのがベストです。</p>
                  <p className="text-sm font-bold text-gray-700">おすすめのタンパク質源：</p>
                  <ul className="text-sm space-y-1">
                    {[
                      "鶏むね肉、ささみ（低脂肪高タンパクの王道）",
                      "卵（1個でタンパク質6g、完全栄養食）",
                      "魚（鮭、サバ、ツナ缶）",
                      "納豆、豆腐（植物性タンパク質）",
                      "プロテイン（食事で足りない分を補う）",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-green-600 shrink-0">・</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ポイント2 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ポイント2：食事回数を増やす</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">
                    「1日3食より5食のほうが痩せる」という話を聞いたことがあるかもしれません。
                  </p>
                  <p className="text-sm">
                    これは食事回数を増やすこと自体で痩せるわけではなく、<strong>食事誘発性熱産生（DIT）を活用する</strong>という考え方です。
                  </p>
                  <p className="text-sm">
                    食事誘発性熱産生とは、食べ物を消化・吸収するときに使われるエネルギーのこと。食事をするたびに体がカロリーを消費するんです。
                  </p>
                  <p className="text-sm">
                    特にタンパク質は消化にエネルギーを多く使います。タンパク質のDITは約30%。つまり100kcal分のタンパク質を食べると、消化するだけで30kcalを消費する計算です。
                  </p>
                  <p className="text-sm">
                    1日のカロリーは変えずに、<strong>食事回数を3回から5回に分ける</strong>だけで、DITによるカロリー消費が少し増えます。しかも空腹時間が短くなるので、ドカ食い防止にもなります。
                  </p>
                </div>
              </div>

              {/* ポイント3 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ポイント3：朝食を抜かない</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">
                    朝食を抜く人は多いですが、基礎代謝を上げたいなら<strong>朝食は必ず食べましょう。</strong>
                  </p>
                  <p className="text-sm">
                    睡眠中は体が省エネモードになっています。朝食を食べることで体にスイッチが入り、代謝が活発になります。
                  </p>
                  <p className="text-sm">
                    逆に朝食を抜くと、体は「まだ寝ている時間だ」と勘違いして、省エネモードのまま午前中を過ごすことに。
                  </p>
                  <p className="text-sm font-bold text-gray-700">おすすめの朝食：</p>
                  <ul className="text-sm space-y-1">
                    {[
                      "卵かけごはん＋味噌汁＋納豆",
                      "オートミール＋プロテイン＋バナナ",
                      "全粒粉トースト＋スクランブルエッグ",
                      "ギリシャヨーグルト＋グラノーラ＋フルーツ",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-green-600 shrink-0">・</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">
                    忙しい朝でもプロテイン1杯＋バナナ1本だけでもいいので、何かしら口に入れる習慣をつけましょう。
                  </p>
                </div>
              </div>

              {/* ポイント4 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ポイント4：体を温める食材を選ぶ</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">
                    体温が1℃上がると、基礎代謝は約13%アップすると言われています。
                  </p>
                  <p className="text-sm">
                    冷たいものばかり食べていると体が冷えて代謝が落ちます。特に夏場にアイスやかき氷、冷たい飲み物ばかり摂っている人は要注意。
                  </p>
                  <p className="text-sm font-bold text-gray-700">体を温める食材：</p>
                  <div className="space-y-2">
                    {[
                      { name: "生姜", desc: "最強の温め食材。味噌汁やスープに入れるだけ" },
                      { name: "にんにく", desc: "血行促進。炒め物に" },
                      { name: "唐辛子", desc: "カプサイシンが代謝をアップ。ただし胃が弱い人は注意" },
                      { name: "ネギ、玉ねぎ", desc: "血流改善。毎日の味噌汁に" },
                      { name: "シナモン", desc: "コーヒーやオートミールに振りかけるだけ" },
                    ].map((item) => (
                      <div key={item.name} className="bg-green-50 rounded-lg p-3 border border-green-100">
                        <p className="text-sm"><strong className="text-green-700">{item.name}</strong>　{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm">
                    飲み物も冷たいものより<strong>温かいもの</strong>を。白湯、温かいお茶、ブラックコーヒーがおすすめです。
                  </p>
                </div>
              </div>

              {/* ポイント5 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ポイント5：水をしっかり飲む</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">
                    水分不足は代謝を下げます。体内の化学反応にはすべて水が必要だからです。
                  </p>
                  <p className="text-sm font-bold text-green-700">1日1.5〜2リットルを目安に飲みましょう。</p>
                  <p className="text-sm">
                    一気に大量に飲むのではなく、こまめに少しずつ飲むのがコツ。デスクに水筒を置いておく、朝起きたらまずコップ1杯の水を飲む、といった習慣を作るといいです。
                  </p>
                  <p className="text-sm">
                    冷水より<strong>常温か白湯</strong>のほうが体を冷やさないのでベター。朝一番の白湯は内臓を温めて代謝を上げる効果があります。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション3 */}
          <section>
            <h2
              id="ng-diet"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              やってはいけない食事法
            </h2>
            <div className="space-y-4">
              <p>基礎代謝を上げたいなら、以下の食事法は避けてください。</p>
              <div className="space-y-3">
                {[
                  {
                    name: "1日1食ダイエット",
                    desc: "空腹時間が長すぎると、体が省エネモードに入ります。1食で大量に食べても、余ったエネルギーは脂肪として蓄積されやすい。基礎代謝は下がるし脂肪はつくし、最悪の方法です。",
                  },
                  {
                    name: "極端な糖質制限",
                    desc: "糖質を完全にカットすると、体はエネルギー不足を補うために筋肉を分解します。筋肉が減ると基礎代謝が落ちて、リバウンドしやすい体に。糖質は「減らす」のはいいけど「ゼロ」にしてはダメです。",
                  },
                  {
                    name: "サラダだけ生活",
                    desc: "カロリーは低いですが、タンパク質も脂質もほとんど摂れません。筋肉は落ちるし、ホルモンバランスも崩れる。「ヘルシーに見えて実は不健康」の代表例です。",
                  },
                ].map((item) => (
                  <div key={item.name} className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="font-bold text-red-700 text-sm mb-1">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション4 */}
          <section>
            <h2
              id="training"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              基礎代謝を上げるのに筋トレも必須
            </h2>
            <div className="space-y-4">
              <p>
                食事だけでも基礎代謝を維持・改善することはできますが、<strong>本気で基礎代謝を上げたいなら筋トレは欠かせません。</strong>
              </p>
              <p>
                筋肉1kgあたりの基礎代謝は約13kcal。「たった13kcal？」と思うかもしれませんが、筋トレによる効果はそれだけではありません。
              </p>
              <p>筋トレをすると：</p>
              <div className="space-y-2">
                {[
                  "筋肉量が増えて基礎代謝が上がる",
                  "トレーニング後も数時間〜24時間、代謝が高い状態が続く（EPOC効果）",
                  "成長ホルモンが分泌されて脂肪燃焼が促進される",
                ].map((item) => (
                  <div key={item} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                    <span className="text-green-600 shrink-0">✓</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p>食事×筋トレの組み合わせが、基礎代謝を上げる最強の方法です。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション5 */}
          <section>
            <h2
              id="summary"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              まとめ
            </h2>
            <div className="space-y-4">
              <p>基礎代謝を上げる食事のポイントは5つ。</p>
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>タンパク質をしっかり摂る</strong>（体重×1.5〜2g）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>食事回数を増やす</strong>（3回→5回に分ける）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>朝食を抜かない</strong>（タンパク質＋炭水化物）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>体を温める食材を選ぶ</strong>（生姜、にんにく、ネギ）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>水をしっかり飲む</strong>（1日1.5〜2リットル）</span></li>
              </ol>
              <p>
                そして「食べないダイエット」は基礎代謝を下げる最悪の方法。しっかり食べて、正しい食事で痩せやすい体を作りましょう。
              </p>
              <p>
                自分に必要なカロリーやPFCバランスが分からない方は、サクメシで食事プランを作ってみてください。6つの質問に答えるだけで、あなた専用のダイエット計画をAIが作成します。
              </p>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/form"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
          >
            サクメシで自分に合った食事プランを作る →
          </Link>
        </div>

        {/* note誘導 */}
        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-sm font-bold text-gray-600 mb-3">もっと詳しく知りたい方はこちら（note）</p>
          <div className="space-y-3">
            <a
              href="https://note.com/kahko/n/n011ab3e59a76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors"
            >
              <span className="text-2xl">📖</span>
              <span className="text-sm text-green-700 font-medium">PFCの基本と食材選びガイド</span>
            </a>
            <a
              href="https://note.com/kahko/n/n8a6fc450e6e2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors"
            >
              <span className="text-2xl">🏆</span>
              <span className="text-sm text-green-700 font-medium">92kgから大会入賞までのリアル食事記録</span>
            </a>
            <a
              href="https://note.com/kahko/n/n33722e8526e5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors"
            >
              <span className="text-2xl">🍺</span>
              <span className="text-sm text-green-700 font-medium">お酒とダイエットを両立する飲み方ルール</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
