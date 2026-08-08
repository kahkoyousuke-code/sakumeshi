import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/no-exercise-diet" },
  title: "運動なしで痩せる？食事だけダイエットの現実的なやり方 | サクメシ",
  description:
    "運動なしでも体重は落とせます。消費エネルギーの内訳から見た食事優先の理由、削るものの優先順位、NEATで消費を増やす方法、運動なしゆえのデメリットと対策を解説します。",
};

const TOC = [
  { id: "answer", label: "結論：運動なしでも痩せられる" },
  { id: "breakdown", label: "消費エネルギーの内訳を見れば分かる" },
  { id: "why", label: "なぜ運動より食事のほうが効くのか" },
  { id: "how", label: "食事だけダイエットの進め方4ステップ" },
  { id: "cut", label: "何から削るか（優先順位）" },
  { id: "protein", label: "運動しないなら、タンパク質はもっと大事" },
  { id: "neat", label: "「運動」しなくても消費を増やす方法" },
  { id: "risk", label: "運動なしゆえのデメリットと対策" },
  { id: "plateau", label: "止まったときにどうするか" },
  { id: "experience", label: "運動できなかった時期に落とした話" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const CUT_ORDER = [
  { rank: "1", target: "甘い飲み物", detail: "加糖コーヒー・ジュース・スポーツドリンク", kcal: "1日100〜400kcal", why: "液体の糖は満腹感が残らないので、そのまま上乗せになっています。ここを削っても食事の満足度は一切下がりません。最初に手をつけるべき枠。" },
  { rank: "2", target: "レジ横・コンビニの衝動買い", detail: "フライドチキン・菓子パン・スナック", kcal: "1日200〜400kcal", why: "「買わない」と決めるだけで済みます。意志ではなく、店に寄らない・目に入れないという行動の設計で解決します。" },
  { rank: "3", target: "揚げ物の頻度", detail: "唐揚げ・とんかつ・天ぷら", kcal: "1食200〜400kcal", why: "ゼロにする必要はありません。週5回を週2回にするだけで十分効きます。同じ食材でも焼き・蒸しに変えれば済む話。" },
  { rank: "4", target: "お酒と締め", detail: "飲み会での締めのラーメンなど", kcal: "1回500〜1,000kcal", why: "回数が少なくても1回の振れ幅が大きいので、週単位で見ると無視できません。締めに行かないと先に決めておく。" },
  { rank: "5", target: "主食の量", detail: "ごはんを普通盛りから少なめへ", kcal: "1食100〜150kcal", why: "ここまでやってまだ足りないときに。最初から主食を抜くと反動が来るので、順番としては最後です。" },
];

const NEAT = [
  { from: "エレベーター", to: "階段", point: "1日数回でも積み上がります。運動と認識しなくていいのが最大の強み" },
  { from: "最寄り駅で降りる", to: "ひと駅前で降りる", point: "10〜15分の歩行が自動的に生活に組み込まれます" },
  { from: "座りっぱなし", to: "1時間に1回立つ", point: "消費だけでなく、むくみや午後の眠気の対策にもなります" },
  { from: "車で買い物", to: "歩いて買い物", point: "移動そのものを運動にすると、続ける意志力が要りません" },
  { from: "電話は座って", to: "電話中は立って歩く", point: "在宅勤務の人はこれだけで立位時間が大きく変わります" },
];

const FAQS = [
  {
    q: "運動なしだと、どれくらいのペースで落ちる？",
    a: "1日400〜500kcalの赤字なら、月に1.5〜2kg程度です。体脂肪1kgに約7,700kcal必要なので、そこから逆算できます。運動しても消費が劇的に増えるわけではないので、ペース自体は運動ありとそれほど変わりません。",
  },
  {
    q: "運動しないと基礎代謝が落ちない？",
    a: "減量そのもので体重が減れば、それに応じて消費も下がります。運動しない場合、筋肉が落ちるぶん下がり幅が大きくなりやすいので、タンパク質の確保が対策になります。週2回の自重トレを入れられるなら、それがもっとも確実です。",
  },
  {
    q: "食事だけだと見た目が変わらないのでは？",
    a: "体重が大きく減れば見た目も変わります。ただし「引き締まった見た目」を目指すなら、どこかの段階で筋トレは必要です。順番としては、まず体重を落として、そのあと形を整えるほうが挫折しにくい。",
  },
  {
    q: "有酸素と筋トレ、どちらか1つ入れるなら？",
    a: "減量中に「入れられるなら」筋トレです。有酸素は消費を増やしますが、筋肉を守る効果は筋トレのほうが上です。週2回・20分の自重で十分な効果があります。",
  },
  {
    q: "体を動かせない事情がある",
    a: "食事だけで問題ありません。ただし持病やケガでの制限がある場合、食事内容も含めて医師や管理栄養士に相談してください。とくにエネルギーやタンパク質の制限を受けている方は、この記事の一般論を当てはめないでください。",
  },
];

export default function NoExerciseDiet() {
  return (
    <ColumnShell
      slug="no-exercise-diet"
      h1="運動なしで痩せる？食事だけダイエットの現実的なやり方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「ジムに行く時間がない」「運動が続いたためしがない」——それでも痩せたい人は多いはずです。</p>
        <p>
          結論から言うと、
          <strong>運動なしでも体重は落とせます</strong>
          。むしろ体重を減らすという一点だけを見れば、食事のほうが圧倒的に効率がいい。ただし、運動をしないぶん
          <strong>気をつけるべき点がはっきりある</strong>のも事実です。
        </p>
        <p>この記事では、食事だけで痩せる仕組みと具体的な進め方、そして落とし穴を解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="answer" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：運動なしでも痩せられる
        </h2>
        <div className="space-y-4">
          <p>
            体重が減るかどうかを決めるのは
            <strong>摂取カロリーと消費カロリーの差</strong>
            だけです。運動は消費を増やす手段のひとつにすぎず、必須条件ではありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">やること</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">約300kcal</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">かかる労力</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">ランニング</td>
                  <td className="p-2 border border-green-100 text-center">約30〜40分</td>
                  <td className="p-2 border border-green-100">着替え・移動込みで1時間、疲労も残る</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">食事を調整</td>
                  <td className="p-2 border border-green-100 text-center">菓子パン1個ぶん</td>
                  <td className="p-2 border border-green-100">買わない、それだけ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            30分走って稼げるのは、菓子パン1個ぶん程度です。
            <strong>「運動しているから食べていい」が最も太る考え方</strong>
            である理由がここにあります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="breakdown" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          消費エネルギーの内訳を見れば分かる
        </h2>
        <div className="space-y-4">
          <p>1日に消費するエネルギーは、大きく3つに分かれます。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <div className="space-y-1.5 text-sm text-gray-600">
              <div className="flex justify-between"><span>基礎代謝（何もしなくても使う分）</span><span className="font-bold">約60%</span></div>
              <div className="flex justify-between"><span>身体活動（動くことすべて）</span><span className="font-bold">約30%</span></div>
              <div className="flex justify-between"><span>食事誘発性熱産生（食べたときの消費）</span><span className="font-bold">約10%</span></div>
            </div>
          </div>
          <p>
            注目すべきは、身体活動の「約30%」が
            <strong>意識的な運動だけを指しているわけではない</strong>
            ことです。通勤、家事、階段、立ち歩き——日常の動作すべてがここに含まれます。週2回ジムに行く程度では、この30%のうちごく一部にしかなりません。
          </p>
          <p>
            一方で、摂取側は毎日3回、確実に発生します。
            <strong>1食あたり150kcal変えれば1日450kcal</strong>
            。これはランニング45分に相当します。どちらが現実的かは明らかです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜ運動より食事のほうが効くのか
        </h2>
        <div className="space-y-2">
          {[
            { title: "運動の消費カロリーは思ったより小さい", desc: "「1時間運動したから500kcal減った」という感覚は、実際より大きく見積もられていることがほとんどです。体重にもよりますが、ウォーキング1時間で200kcal前後です。" },
            { title: "食事は毎日3回、確実に発生する", desc: "運動には「やらない日」がありますが、食事は必ず毎日あります。実行回数が桁違いなので、小さな変更でも積み上がります。" },
            { title: "運動後は食欲が増えやすい", desc: "運動したご褒美として食べる量が増え、差し引きゼロになるケースは非常に多い。運動そのものより、そのあとの行動が結果を決めてしまいます。" },
            { title: "時間もお金もかからない", desc: "続かない最大の理由は時間です。食事の調整は準備ゼロで始められて、コンビニでも実行できます。" },
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
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食事だけダイエットの進め方4ステップ
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "目標カロリーを決める", desc: "消費カロリー（TDEE）から300〜500kcal引いた値を目安にします。減らしすぎると筋肉が落ちて代謝の土台が下がり、反動でまとめて食べることになります。月1.5〜2kgのペースが現実的です。" },
            { n: "2", title: "タンパク質を先に確保する", desc: "運動しないぶん筋肉は落ちやすくなります。体重1kgあたり1.2〜1.6gを目安に、毎食タンパク源を入れるところから組み立てます。ここを決めてから、残りの枠で主食と脂質を配分します。" },
            { n: "3", title: "削るのは飲み物と間食から", desc: "次の節で優先順位を示します。主食を極端に抜くのは順番として最後です。" },
            { n: "4", title: "週単位で調整する", desc: "1日単位の体重は水分で1〜2kg動きます。判断は週平均で。2週続けて落ちていなければ食事を見直し、落ちすぎているなら少し戻します。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}. {item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="cut" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          何から削るか（優先順位）
        </h2>
        <div className="space-y-4">
          <p>
            闇雲に減らすとつらいだけです。
            <strong>「削っても満足度が下がらないもの」から順に</strong>
            手をつけてください。
          </p>
          <div className="space-y-3">
            {CUT_ORDER.map((c) => (
              <div key={c.rank} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-start gap-3 mb-1">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                    {c.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-green-700 text-sm">{c.target}</p>
                      <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{c.kcal}</span>
                    </div>
                    <p className="text-xs text-gray-500">{c.detail}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{c.why}</p>
              </div>
            ))}
          </div>
          <p>
            多くの人は<strong>1と2だけで目標の赤字に届きます</strong>。食事の中身をいじる前に、まず飲み物と衝動買いを止めてみてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="protein" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          運動しないなら、タンパク質はもっと大事
        </h2>
        <div className="space-y-4">
          <p>
            筋トレをしないということは、
            <strong>筋肉を残すための刺激がない</strong>
            ということです。この状態でカロリーだけ減らすと、脂肪と一緒に筋肉も落ちます。
          </p>
          <p>唯一できる対策が、タンパク質を十分に摂ることです。目安は<strong>体重1kgあたり1.2〜1.6g</strong>。</p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-2">体重70kgなら1日84〜112g。1食あたり30g前後</p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>朝：卵2個＋納豆1パック（約19g）</p>
              <p>昼：サラダチキン＋おにぎり（約26g）</p>
              <p>夜：鮭1切れ＋豆腐半丁（約28g）</p>
              <p>間食：ギリシャヨーグルト（約10g）</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            合計83g。特別なものは何も入っていません。<strong>毎食に1品ずつタンパク源を置く</strong>だけで、この水準には届きます。腎臓に持病がある方は、量について必ず主治医に相談してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="neat" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「運動」しなくても消費を増やす方法
        </h2>
        <div className="space-y-4">
          <p>
            ジムに行かなくても、日常動作の積み上げ（NEAT）は無視できない差になります。肥満の人は、そうでない人より
            <strong>立って過ごす時間が1日で2時間以上少ない</strong>という報告もあります。
          </p>
          <div className="space-y-3">
            {NEAT.map((item) => (
              <div key={item.from} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-gray-500">{item.from}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-green-700">{item.to}</span>
                </p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p>
            ポイントは
            <strong>「運動の時間を作る」のではなく「今ある行動を置き換える」</strong>
            こと。新しい習慣を増やすより、はるかに挫折しにくくなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="risk" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          運動なしゆえのデメリットと対策
        </h2>
        <div className="space-y-4">
          <p>「痩せられる」のと「理想の見た目になる」は別問題です。ここは正直に押さえておきます。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">起きやすいこと</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・筋肉も一緒に落ちて消費の土台が下がる</li>
                <li>・体重は減ったのにたるんで見える</li>
                <li>・停滞したときに打つ手が少ない</li>
                <li>・維持期に戻したときリバウンドしやすい</li>
                <li>・体力が落ちる（減量とは別の問題）</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">対策</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・タンパク質を多めに確保する</li>
                <li>・減量ペースを緩やかにする</li>
                <li>・日常動作で消費を増やす</li>
                <li>・自重トレを週2回だけ入れる</li>
                <li>・落としたあとに形を整える段階を作る</li>
              </ul>
            </div>
          </div>
          <p>
            とはいえ、
            <strong>まずは体重を落とすことに集中していい</strong>
            と思います。全部を同時にやろうとして挫折するより、10kg落としてから見た目を整えるほうが、結果的にずっと早い。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="plateau" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          止まったときにどうするか
        </h2>
        <div className="space-y-4">
          <p>食事だけで進めていると、必ずどこかで止まります。運動という手札がないぶん、順番を決めておくことが重要です。</p>
          <div className="space-y-2">
            {[
              { step: "1", label: "まず2週間待つ", desc: "1週間の停滞は誤差の範囲です。水分の増減で簡単に隠れます。慌てて減らすと逆効果になります。" },
              { step: "2", label: "記録を見直す", desc: "止まった原因の大半は、無自覚のカロリー増です。ドレッシング、飲み物、人からもらったお菓子。3日でいいので正確に書き出してみてください。" },
              { step: "3", label: "体重が減ったぶん目標を下げる", desc: "5kg落ちれば必要カロリーも下がります。開始時の目標のままだと、赤字が消えていることがあります。計算し直してください。" },
              { step: "4", label: "NEATを増やす", desc: "減らすより増やすほうが体はつらくありません。1駅歩く、階段を使う。ここが運動なしダイエットの最後の伸びしろです。" },
              { step: "5", label: "それでも動かないなら維持期を挟む", desc: "2〜3週間、維持カロリーに戻します。ずっと赤字を続けるより、いったん戻したほうが再開後に落ちやすくなります。" },
            ].map((s) => (
              <div key={s.step} className="flex gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <p className="font-bold text-green-700 text-sm">{s.label}</p>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          運動できなかった時期に落とした話
        </h2>
        <div className="space-y-4">
          <p>
            仕事が忙しく、ジムに一度も行けない月が続いた時期がありました。それでも体重は落ちました。やったのは
            <strong>甘い飲み物をやめたことと、レジ横で買わないと決めたこと</strong>
            の2つだけです。
          </p>
          <p>
            当時、毎日ペットボトルの加糖コーヒーを2本飲んでいました。計算したら1日300kcal超。ここを無糖に変えただけで、食事は何も変えていないのに1ヶ月で動き始めました。
            <strong>自分が何にカロリーを使っているか把握していなかった</strong>
            、それだけの話でした。
          </p>
          <p>
            うまくいかなかったのは、その前にやっていた「毎朝走る」です。3週間続きましたが、走ったあとに「今日は運動したから」と食べる量が増え、体重はまったく動きませんでした。
            <strong>運動そのものより、そのあとの行動が結果を決めていた</strong>
            わけです。
          </p>
          <p>
            ただ、運動なしで落とした時期は、体重は減ったのに見た目がぼんやりしていました。あとから筋トレを入れて、そこでようやく形が変わった。
            <strong>体重を落とすのは食事、形を作るのは運動</strong>
            ——役割が違うというのが、両方やってみた結論です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="faq" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          よくある質問
        </h2>
        <div className="space-y-3">
          {FAQS.map((item) => (
            <div key={item.q} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">Q. {item.q}</p>
              <p className="text-sm text-gray-600">A. {item.a}</p>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>運動なしでも痩せられる</strong>。体重を決めるのはカロリー収支</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>運動で稼げる消費は小さい。<strong>食事のほうが確実で回数が多い</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>削る順番は<strong>飲み物 → 衝動買い → 揚げ物 → 酒 → 主食</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>運動しないぶん<strong>タンパク質を多めに、ペースは緩やかに</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>階段・徒歩など<strong>日常動作の置き換え</strong>で消費は増やせる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span><strong>体重を落とすのは食事、形を作るのは運動</strong>。役割が違う</span></li>
          </ol>
          <p>
            食事だけで進めるなら、目標カロリーとPFCの設計が結果を左右します。まずは自分のTDEEを知って、そこから300〜500kcal引いた数字を決めてください。
          </p>
          <p>
            サクメシは質問に答えるだけで、体格と目標に合わせた必要カロリーと7日分の献立を作れます。運動する時間がなくても始められます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
