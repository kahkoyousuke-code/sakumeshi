import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ダイエット中の間食おすすめ｜太らないおやつの選び方と目的別リスト | サクメシ",
  description:
    "ダイエット中でも間食はOK！減量・維持・増量の目的別におすすめの間食を紹介。コンビニで買えるダイエットおやつランキングも。",
};

const TOC = [
  { id: "ok-to-snack", label: "そもそもダイエット中に間食していいの？" },
  { id: "rules", label: "ダイエット中の間食、3つのルール" },
  { id: "by-goal", label: "目的別おすすめ間食リスト" },
  { id: "ng-snacks", label: "逆にNGな間食は？" },
  { id: "convenience", label: "コンビニで買えるおすすめ間食トップ5" },
  { id: "summary", label: "まとめ" },
];

export default function DietSnacks() {
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
          <p className="text-xs text-gray-400 mb-2">2026-03-21</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            ダイエット中の間食、何食べていい？太らないおやつの選び方を10年トレーニーが教える
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
            <p>「ダイエット中だけど、お腹が空いてどうしようもない…」</p>
            <p>
              間食＝ダイエットの敵、と思っている人が多いですが、<strong>間食は食べ方さえ間違えなければむしろダイエットの味方</strong>です。
            </p>
            <p>
              僕は10年以上筋トレとダイエットを続けていますが、間食は毎日食べています。90kgから78kgまで落とした期間中も、間食はやめませんでした。
            </p>
            <p>
              この記事では、ダイエット中に食べてもいい間食の選び方と、目的別のおすすめおやつを具体的に紹介します。
            </p>
          </div>

          <hr className="border-green-100" />

          {/* セクション1 */}
          <section>
            <h2
              id="ok-to-snack"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              そもそもダイエット中に間食していいの？
            </h2>
            <div className="space-y-4">
              <p>
                結論から言うと、<strong>していいです。むしろしたほうがいい場合もあります。</strong>
              </p>
              <p>理由は3つ。</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800 mb-1">1. 空腹時間が長すぎると食べすぎる</p>
                  <p>
                    昼12時に食べて、夜7時まで何も食べないと、7時間も空腹の状態が続きます。この状態で夕食を食べると、血糖値が急上昇して脂肪がつきやすくなります。さらに空腹のストレスでドカ食いしやすい。
                  </p>
                  <p>15時頃に軽い間食を入れることで、夕食の食べすぎを防げます。</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">2. タンパク質の補給タイミングが増える</p>
                  <p>
                    筋肉を維持するには、タンパク質を1日複数回に分けて摂るのが効果的です。3食だけだと1回あたりの量が多くなりすぎます。間食でタンパク質を摂ることで、効率よく筋肉を維持できます。
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">3. 血糖値を安定させる</p>
                  <p>
                    食事の間隔が空きすぎると血糖値が乱高下して、集中力が落ちたりイライラしたりします。適度な間食で血糖値を安定させると、仕事のパフォーマンスも上がります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション2 */}
          <section>
            <h2
              id="rules"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              ダイエット中の間食、3つのルール
            </h2>
            <div className="space-y-4">
              <p>ただし、何を食べてもいいわけではありません。3つのルールだけ守ってください。</p>
              <div className="space-y-4">
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">ルール1：200kcal以内に収める</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm">
                      間食は「小腹を満たす」程度に。200kcalを超えると、もはや1食分に近づいてしまいます。200kcal以内なら、1日の総カロリーに大きく影響しません。
                    </p>
                  </div>
                </div>
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">ルール2：タンパク質が入っているものを選ぶ</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm">
                      お菓子やパンは糖質と脂質がメインで、タンパク質がほとんど入っていません。間食でもタンパク質を意識すると、1日のPFCバランスが格段に良くなります。
                    </p>
                  </div>
                </div>
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-green-600 px-4 py-2">
                    <h3 className="text-sm font-bold text-white">ルール3：食べる時間を決める</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-sm">
                      「お腹が空いたらいつでも食べる」だと、ダラダラ食べ続けてしまうリスクがあります。<strong>15時頃に1回</strong>と決めておくのがおすすめです。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション3 */}
          <section>
            <h2
              id="by-goal"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              目的別おすすめ間食リスト
            </h2>
            <div className="space-y-8">
              <p>ここからは、ダイエットの目的別におすすめの間食を紹介します。</p>

              {/* 減量 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-3">減量中の人向け（カロリー重視）</h3>
                <p className="mb-3">減量中は、<strong>低カロリーで満足感が得られるもの</strong>を選びましょう。</p>
                <div className="space-y-3">
                  {[
                    { name: "ゆで卵（1個 約80kcal / P:6g）", desc: "最強のダイエット間食。タンパク質が摂れて、腹持ちもいい。コンビニで手軽に買えるのもポイント。僕は常に冷蔵庫にストックしています。" },
                    { name: "ギリシャヨーグルト（100g 約60kcal / P:10g）", desc: "普通のヨーグルトよりタンパク質が2倍以上。無糖タイプを選んでください。甘さが欲しければ、はちみつを少しだけ垂らすと満足感が上がります。" },
                    { name: "サラダチキンバー（1本 約60kcal / P:13g）", desc: "片手で食べられるので、仕事中の間食にピッタリ。最近はいろんな味があるので飽きにくいです。" },
                    { name: "素焼きアーモンド10粒（約60kcal）", desc: "良質な脂質とビタミンEが摂れます。ただし食べすぎ注意。10粒と決めて袋から出してから食べると、食べすぎを防げます。小袋タイプを買うのもおすすめ。" },
                    { name: "あたりめ（20g 約60kcal / P:14g）", desc: "噛む回数が多いので満腹感が得やすい。タンパク質も優秀。ただし塩分が多いものがあるので、減塩タイプを選ぶのがベター。" },
                  ].map((item) => (
                    <div key={item.name} className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="font-bold text-green-800 text-sm mb-1">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 維持 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-3">維持の人向け（バランス重視）</h3>
                <p className="mb-3">体重を維持したい人は、<strong>栄養バランスと満足感のバランス</strong>がいいものを。</p>
                <div className="space-y-3">
                  {[
                    { name: "プロテインバー（約180kcal / P:15g）", desc: "お菓子感覚で食べられてタンパク質も摂れる。チョコ味やクッキー味など種類が豊富で、甘いもの欲も満たしてくれます。ただしものによっては脂質が10g以上あるので、成分表は必ずチェック。" },
                    { name: "バナナ1本（約90kcal）", desc: "手軽なエネルギー補給。運動前の間食にも最適。カリウムが豊富でむくみ対策にもなります。" },
                    { name: "チーズ2個（約100kcal / P:6g）", desc: "6Pチーズやベビーチーズがおすすめ。脂質はそこそこあるけど、腹持ちがいいので少量で満足できます。" },
                    { name: "干し芋（50g 約150kcal）", desc: "食物繊維が豊富で腹持ち抜群。自然な甘さで満足感が高いです。GI値も低めなので血糖値の急上昇を抑えられます。" },
                  ].map((item) => (
                    <div key={item.name} className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="font-bold text-green-800 text-sm mb-1">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 増量 */}
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-3">増量中の人向け（カロリー効率重視）</h3>
                <p className="mb-3">増量中は、<strong>効率よくカロリーとタンパク質を摂れるもの</strong>を。</p>
                <div className="space-y-3">
                  {[
                    { name: "おにぎり＋サラダチキン（約350kcal / P:20g）", desc: "コンビニで簡単に揃う黄金コンビ。炭水化物とタンパク質を同時に摂れます。筋トレ後の間食にも最適。" },
                    { name: "プロテイン＋バナナ（約250kcal / P:25g）", desc: "シェイカーにプロテインパウダーとバナナを入れてシェイク。タンパク質と糖質を効率よく補給できます。" },
                    { name: "あんぱん（約280kcal）", desc: "意外かもしれませんが、あんぱんは脂質が少なくて糖質が多い和菓子系。トレーニング後の糖質補給にはピッタリです。クリームパンやメロンパンより圧倒的にマシです。" },
                    { name: "ミックスナッツ＋ドライフルーツ（約200kcal）", desc: "良質な脂質、ビタミン、ミネラルが一度に摂れる。持ち運びにも便利。ただしカロリーは高めなので、減量中の人にはおすすめしません。" },
                  ].map((item) => (
                    <div key={item.name} className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="font-bold text-green-800 text-sm mb-1">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション4 */}
          <section>
            <h2
              id="ng-snacks"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              逆にNGな間食は？
            </h2>
            <div className="space-y-4">
              <p>ダイエット中に避けたい間食も知っておきましょう。</p>
              <div className="space-y-3">
                {[
                  { name: "菓子パン（300〜500kcal）", desc: "1個で400kcal超えるものもざら。糖質と脂質のダブルパンチで、ダイエットには最悪の組み合わせ。" },
                  { name: "ポテトチップス（約340kcal / 1袋）", desc: "1袋あっという間に食べてしまうのに、タンパク質はほぼゼロ。脂質と塩分の塊です。" },
                  { name: "ケーキ・ドーナツ（300〜400kcal）", desc: "砂糖と脂質のかたまり。食べた瞬間は幸せですが、血糖値が急上昇→急降下して、すぐにまた甘いものが欲しくなる悪循環に。" },
                  { name: "カフェラテ（砂糖入り）（200〜300kcal）", desc: "飲み物だからと油断しがち。コーヒーチェーンのフラペチーノ系は500kcal超えるものも。ブラックコーヒーかプロテインラテに置き換えましょう。" },
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

          {/* セクション5 */}
          <section>
            <h2
              id="convenience"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              コンビニで買えるおすすめ間食トップ5
            </h2>
            <div className="space-y-4">
              <p>最後に、コンビニですぐ買えるダイエット間食のベスト5をまとめます。</p>
              <ol className="space-y-3">
                {[
                  { rank: "1位", name: "ゆで卵（約80kcal）", desc: "安い・うまい・高タンパク。キング・オブ・ダイエット間食。" },
                  { rank: "2位", name: "サラダチキンバー（約60kcal）", desc: "片手で食べられるタンパク質補給。" },
                  { rank: "3位", name: "ギリシャヨーグルト（約60kcal）", desc: "タンパク質が高く、腹持ちもいい。" },
                  { rank: "4位", name: "素焼きナッツ小袋（約130kcal）", desc: "良質な脂質補給。小袋タイプで食べすぎ防止。" },
                  { rank: "5位", name: "あたりめ（約60kcal）", desc: "噛むことで満腹感。高タンパク・低脂質。" },
                ].map((item) => (
                  <li key={item.rank} className="flex gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                    <span className="font-bold text-green-700 text-sm shrink-0 w-8">{item.rank}</span>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション6 */}
          <section>
            <h2
              id="summary"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              まとめ
            </h2>
            <div className="space-y-4">
              <p>ダイエット中の間食は、3つのルールを守れば味方になります。</p>
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>200kcal以内に収める</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>タンパク質が入っているものを選ぶ</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>食べる時間を決める（15時がおすすめ）</strong></span></li>
              </ol>
              <p>
                自分の目的（減量・維持・増量）に合った間食を選べば、空腹のストレスなくダイエットを続けられます。
              </p>
              <p>
                サクメシでは、あなたの目的に合わせたおすすめ間食も結果ページに表示されます。まだ試していない方は、ぜひ一度食事プランを作ってみてください。
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
        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            もっと詳しく知りたい方は →{" "}
            <a
              href="https://note.com/kahko/n/n011ab3e59a76"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              ダイエット中の間食完全ガイド（note）
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
