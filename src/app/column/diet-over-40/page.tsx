import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "40代からのダイエット｜若い頃と同じやり方が通用しない理由 | サクメシ",
  description:
    "40代になると痩せにくくなる理由と、代謝が落ちた体で無理なく痩せる食事戦略を解説。極端な食事制限がNGな理由も実体験ベースで紹介します。",
};

const TOC = [
  { id: "why", label: "40代が痩せにくくなる3つの理由" },
  { id: "ng", label: "若い頃のやり方がNGな理由" },
  { id: "strategy", label: "40代の食事戦略5つ" },
  { id: "health", label: "健診の数字も一緒に良くする" },
  { id: "summary", label: "まとめ" },
];

export default function DietOver40() {
  return (
    <ColumnShell
      slug="diet-over-40"
      h1="40代からのダイエット｜若い頃と同じやり方が通用しない理由"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「20代の頃は1週間で戻せたのに、今は全然落ちない…」</p>
        <p>
          僕自身、40代のサラリーマンです。92kgまで太って減量した経験から断言できるのは、<strong>40代のダイエットは若い頃と「別競技」</strong>だということ。同じやり方をすると、痩せないどころか体調を崩します。
        </p>
        <p>
          でも悲観する必要はありません。仕組みを理解して戦略を変えれば、40代でもちゃんと痩せられます。この記事ではその戦略を解説します。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          40代が痩せにくくなる3つの理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "筋肉量の減少で基礎代謝が下がる", desc: "筋肉量は20代をピークに年1%前後ずつ減っていく。40代の基礎代謝は20代より1日100〜200kcal低いことも。「同じ食事量なのに太る」の正体はこれ。" },
              { title: "ホルモンの変化", desc: "男性はテストステロン、女性はエストロゲンが減少。筋肉がつきにくく、内臓脂肪がつきやすい体質に変わっていく。" },
              { title: "回復力の低下と生活の制約", desc: "無理な食事制限や激しい運動のダメージが抜けにくい。仕事・家庭の付き合いも多く、若い頃のような「一気に追い込む」が構造的にできない。" },
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
            つまり40代のダイエットは、<strong>「短期決戦」ではなく「省エネ運転の体と長く付き合う設計」</strong>に切り替える必要があるんです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          若い頃のやり方がNGな理由
        </h2>
        <div className="space-y-3">
          {[
            { habit: "極端なカロリー制限（1日1食・断食系）", desc: "ただでさえ減っている筋肉がさらに分解され、代謝が落ちて「痩せない・リバウンドする」体に。40代の筋肉は一度落とすと取り戻すのが本当に大変。" },
            { habit: "「運動だけ」で痩せようとする", desc: "ランニング30分の消費は約300kcal。ビール1本と唐揚げで帳消しになる。40代の関節・腰への負担も大きく、まず食事を整えるほうが効率が圧倒的に良い。" },
            { habit: "短期間で一気に落とす", desc: "月に体重の5%を超えるペースは筋肉・体調・肌に跳ね返る。40代は月2〜3kg以内の緩やかなペースが結局一番速い。" },
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
        <h2 id="strategy" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          40代の食事戦略5つ
        </h2>
        <div className="space-y-5">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 「今の自分」の必要カロリーを知る</p>
              <p>
                20代の頃の感覚は捨てましょう。40代の体格・活動量で計算し直した目標カロリーからのスタートが全ての土台です。<strong>マイナス300〜500kcalの控えめな赤字</strong>で十分落ちます。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. タンパク質は若い頃より「多め」に</p>
              <p>
                加齢とともにタンパク質の利用効率が下がるため、必要量はむしろ増えます。目安は<strong>体重×1.2〜1.6g</strong>。筋肉を守ることが、40代ダイエットの生命線です。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. 飲み会は「なくす」ではなく「設計する」</p>
              <p>
                40代に付き合いはつきもの。週の飲み会が決まっているなら、前後の食事を軽くして週単位で帳尻を合わせる。焼き鳥・刺身・ハイボールなど選び方を決めておけば、参加しながら痩せられます。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 睡眠を削らない</p>
              <p>
                40代は仕事のストレスと寝不足で食欲が乱れがち。睡眠6時間未満が続くと、どんな食事プランも守れなくなります。<strong>睡眠はダイエットの一部</strong>と考えてください。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">5. 「続けられる仕組み」に投資する</p>
              <p>
                意志力は加齢とともに温存すべき資源。作り置き・コンビニの定番化・食事プランの自動化など、<strong>考えなくても痩せる食事になる仕組み</strong>を作るのが40代の勝ち筋です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="health" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          健診の数字も一緒に良くする
        </h2>
        <div className="space-y-4">
          <p>
            40代のダイエットには、見た目以上に大きなご褒美があります。<strong>健康診断の数字</strong>です。
          </p>
          <div className="space-y-2">
            {[
              { title: "内臓脂肪は先に落ちる", desc: "皮下脂肪より内臓脂肪のほうが食事改善への反応が早い。腹囲・中性脂肪・肝機能（γ-GTP）は数ヶ月で変わることが多い。" },
              { title: "血圧・血糖値の改善", desc: "減量と減塩・糖質の質の改善で、血圧や HbA1c が下がるケースは多い。服薬中の人は自己判断で薬をやめず、必ず医師に相談を。" },
              { title: "「痩せる」より「戻さない」が資産になる", desc: "40代からの10年は生活習慣病リスクが一気に上がる時期。ここで作った食習慣は、50代・60代の自分への最高の投資になる。" },
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
            僕も92kgの頃は健診が憂鬱でしたが、今は結果を見るのがちょっと楽しみなくらいです。体重計より健診結果のほうが、40代のモチベーションは続きます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>40代は代謝もホルモンも変わっている</strong>。若い頃の成功体験は一度忘れる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>極端な制限より控えめな赤字</strong>（-300〜500kcal）で緩やかに落とす</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>タンパク質多め＋睡眠確保</strong>で筋肉と食欲を守る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>意志力に頼らず仕組み化</strong>する。飲み会は設計して乗り切る</span></li>
          </ol>
          <p>
            サクメシは年齢・体格・生活スタイルを踏まえて「今のあなた」に合ったカロリーと食事プランを作ります。若い頃の感覚をアップデートする第一歩として、ぜひ使ってみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
