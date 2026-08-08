import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/diet-over-40" },
  title: "40代からのダイエット｜若い頃と同じやり方が通用しない理由 | サクメシ",
  description:
    "40代が痩せにくくなる理由を代謝の内訳から解説。20代との必要カロリーの差を実際に計算し、控えめな赤字で落とす手順、飲み会の設計、健診の数字の変化まで実体験ベースで紹介します。",
};

const TOC = [
  { id: "why", label: "40代が痩せにくくなる3つの理由" },
  { id: "numbers", label: "20代と40代で必要カロリーはどれだけ違うか" },
  { id: "ng", label: "若い頃のやり方が通用しない理由" },
  { id: "pace", label: "40代の適正ペースを計算する" },
  { id: "strategy", label: "40代の食事戦略6つ" },
  { id: "protein", label: "タンパク質はどう確保するか" },
  { id: "drinking", label: "飲み会を「設計」する" },
  { id: "health", label: "健診の数字も一緒に良くする" },
  { id: "experience", label: "92kgから落としたときにやったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const REASONS = [
  { title: "筋肉量が減り、基礎代謝が下がる", desc: "筋肉量は20代をピークに少しずつ減っていきます。総エネルギー消費のうち基礎代謝は約6割を占めるため、ここが下がると「同じ食事量なのに太る」状態になります。" },
  { title: "ホルモンの変化", desc: "男性はテストステロン、女性はエストロゲンが減少していきます。筋肉がつきにくく、内臓脂肪が増えやすい方向に体質が変わります。" },
  { title: "日常の活動量が落ちている", desc: "総エネルギー消費のうち身体活動は約3割。管理職になって座っている時間が増えた、通勤が変わった、といった変化が積み重なります。運動していないつもりでも、若い頃は動いていたのです。" },
];

const STRATEGY = [
  { title: "「今の自分」の必要カロリーを計算し直す", desc: "20代の頃の感覚は捨てます。今の年齢・体重・活動量で計算した数字からスタートするのが土台です。ここを飛ばして「なんとなく減らす」から始めると、必ずどこかで破綻します。" },
  { title: "赤字は控えめに（1日300〜500kcal）", desc: "40代で大きな赤字を作ると、筋肉が落ちて代謝の土台がさらに下がります。ゆっくり落としたほうが、結果的に早く着きます。" },
  { title: "タンパク質は若い頃より多めに", desc: "加齢とともに、同じ量のタンパク質から筋肉を作る効率が落ちるとされています。減量中はとくに、意識して増やす必要があります。" },
  { title: "筋トレを週2回だけ入れる", desc: "増やすためではなく、落とさないためです。有酸素より優先度が高く、週2回・自重でもかまいません。" },
  { title: "睡眠を削らない", desc: "睡眠6時間未満が続くと食欲が乱れ、どんな食事プランも守れなくなります。睡眠はダイエットの一部です。" },
  { title: "意志力ではなく仕組みに投資する", desc: "40代は仕事も家庭も判断することが多く、意志力は貴重な資源です。作り置き・コンビニの定番化・献立の自動化など、考えなくても成立する形を作ります。" },
];

const PROTEIN_SOURCES = [
  { food: "鶏むね肉 100g", p: "約22g", note: "コスパ・脂質ともに優秀。まとめて茹でて小分け" },
  { food: "鮭 1切れ（80g）", p: "約18g", note: "焼くだけ。脂質の質もよい" },
  { food: "卵 1個", p: "約6g", note: "ゆで卵を常備しておくと足しやすい" },
  { food: "納豆 1パック", p: "約7g", note: "食物繊維も同時に摂れる" },
  { food: "木綿豆腐 1/2丁", p: "約10g", note: "夜の主食を減らしたときの穴埋めに" },
  { food: "ギリシャヨーグルト 1個", p: "約10g", note: "間食を置き換える枠として" },
  { food: "プロテイン 1杯", p: "約20g", note: "食事で届かない日の補助" },
];

const FAQS = [
  {
    q: "40代でも筋肉は増える？",
    a: "増えます。若い頃よりスピードは遅くなりますが、トレーニングと十分なタンパク質があれば筋肉量は増やせます。むしろ減量中に「落とさない」ことのほうが重要で、そのためには週2回程度の筋トレで十分です。",
  },
  {
    q: "健診で数値を指摘されている。食事制限していい？",
    a: "自己判断で極端なことをせず、必ず主治医か管理栄養士に相談してください。とくに血糖・血圧・脂質で服薬している場合、食事を大きく変えると薬の効き方が変わることがあります。",
  },
  {
    q: "1ヶ月で何kgを目標にすればいい？",
    a: "体重の1%/週が上限の目安なので、70kgの人なら週0.7kg・月2〜3kg程度です。40代はこの上限より少し下、月1.5〜2kgくらいに置いたほうが、体調も筋肉も守りやすくなります。",
  },
  {
    q: "お腹だけ落ちない",
    a: "部分痩せはできません。ただし内臓脂肪は皮下脂肪より食事改善への反応が早いので、腹囲は比較的変化が見えやすい部位です。体重より腹囲を測るほうがモチベーションになる人は多いです。",
  },
  {
    q: "運動する時間がまったくない",
    a: "食事だけでも落ちます。ただし筋肉を守るため、タンパク質は必ず確保してください。そのうえで、通勤で1駅歩く・階段を使うなど、日常の活動量を戻すほうが、ジムに行けない日に落ち込むより現実的です。",
  },
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
        <p>「20代の頃は1週間で戻せたのに、今はまったく落ちない」</p>
        <p>
          自分も40代です。92kgまで太ってから減量した経験から言えるのは、
          <strong>40代のダイエットは若い頃と別競技だ</strong>
          ということ。同じやり方をすると、痩せないどころか体調を崩します。
        </p>
        <p>
          ただ、悲観する必要はありません。何が変わったのかを数字で理解して、やり方を変えれば落とせます。この記事では、その具体的な設計を解説します。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          40代が痩せにくくなる3つの理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {REASONS.map((item) => (
              <div key={item.title} className="flex gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                <span className="text-green-600 shrink-0">✓</span>
                <div>
                  <p className="text-sm font-bold text-green-700">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-2">1日の消費エネルギーの内訳</p>
            <div className="space-y-1.5 text-sm text-gray-600">
              <div className="flex justify-between"><span>基礎代謝</span><span className="font-bold">約60%</span></div>
              <div className="flex justify-between"><span>身体活動</span><span className="font-bold">約30%</span></div>
              <div className="flex justify-between"><span>食事誘発性熱産生（食べたときの消費）</span><span className="font-bold">約10%</span></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              基礎代謝と身体活動で9割。40代で下がるのはこの両方なので、影響がはっきり出ます。
            </p>
          </div>
          <p>
            つまり40代のダイエットは、
            <strong>短期決戦ではなく「省エネになった体と長く付き合う設計」</strong>
            に切り替える必要があります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="numbers" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          20代と40代で必要カロリーはどれだけ違うか
        </h2>
        <div className="space-y-4">
          <p>
            感覚の話にしないために、実際に計算してみます。
            <strong>身長170cm・体重70kg・運動は週1〜2回</strong>
            の男性が、25歳のときと45歳のときでどれだけ違うか（改訂ハリス・ベネディクト式）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">条件</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">25歳</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">45歳</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">基礎代謝（BMR）</td>
                  <td className="p-2 border border-green-100 text-center">約1,700kcal</td>
                  <td className="p-2 border border-green-100 text-center">約1,587kcal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">TDEE（活動係数1.375）</td>
                  <td className="p-2 border border-green-100 text-center">約2,338kcal</td>
                  <td className="p-2 border border-green-100 text-center">約2,181kcal</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">差</td>
                  <td className="p-2 border border-green-100 text-center" colSpan={2}>
                    <span className="font-bold text-red-600">1日あたり約157kcal</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            1日157kcal——おにぎり1個弱です。小さく見えますが、
            <strong>1年で約57,000kcal、脂肪に換算すると約7kg分</strong>
            にあたります。「食べる量は変えていないのに、じわじわ増えた」の正体はここです。
          </p>
          <p className="text-sm text-gray-500">
            ※ この計算は年齢の項だけを変えたものです。実際にはこれに加えて筋肉量の減少と活動量の低下が乗るので、差はもっと大きくなることが普通です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          若い頃のやり方が通用しない理由
        </h2>
        <div className="space-y-3">
          {[
            { habit: "極端なカロリー制限（1日1食・断食系）", desc: "ただでさえ減っている筋肉がさらに分解され、代謝の土台が下がります。40代の筋肉は、一度落とすと取り戻すのに若い頃の何倍も時間がかかります。" },
            { habit: "運動だけで痩せようとする", desc: "ランニング30分の消費は約250〜300kcal。ビール1杯と唐揚げ数個で帳消しです。膝や腰への負担も考えると、まず食事から整えるほうが圧倒的に効率がいい。" },
            { habit: "短期間で一気に落とす", desc: "月に体重の5%を超えるペースは、筋肉・体調・肌に跳ね返ります。40代は月1.5〜2kg程度の緩やかなペースが、結局いちばん速い。" },
            { habit: "「とりあえず糖質を抜く」", desc: "落ちる初速は速いですが、その大半はグリコーゲンと水分です。仕事のパフォーマンスも落ちるので、40代の平日にやると別のところで代償が出ます。" },
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
        <h2 id="pace" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          40代の適正ペースを計算する
        </h2>
        <div className="space-y-4">
          <p>
            体脂肪1kgを減らすのに必要な赤字は<strong>約7,700kcal</strong>。ここから逆算すると、ペースと必要な赤字はこうなります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ペース</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">1日の赤字</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">40代での評価</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">月1kg（週0.25kg）</td>
                  <td className="p-2 border border-green-100 text-center">約250kcal</td>
                  <td className="p-2 border border-green-100">忙しい時期でも続く。維持しながら少し落としたい人に</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">月2kg（週0.5kg）</td>
                  <td className="p-2 border border-green-100 text-center">約500kcal</td>
                  <td className="p-2 border border-green-100 font-bold text-green-700">推奨ライン。体調も筋肉も守りやすい</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">月3kg（週0.75kg）</td>
                  <td className="p-2 border border-green-100 text-center">約770kcal</td>
                  <td className="p-2 border border-green-100">体重70kg以上ならぎりぎり許容範囲。付き合いが多い時期はきつい</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">月4kg以上</td>
                  <td className="p-2 border border-green-100 text-center">1,000kcal超</td>
                  <td className="p-2 border border-green-100 text-red-600">筋肉が落ちる。40代では推奨しない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            安全な上限の目安は
            <strong>週あたり体重の1%</strong>
            です。70kgなら週0.7kgまで。ただしこれは上限であって目標ではありません。40代は上限の7割程度に置いておくと、飲み会が入った週でも崩れずに済みます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="strategy" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          40代の食事戦略6つ
        </h2>
        <div className="space-y-3">
          {STRATEGY.map((item, i) => (
            <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="protein" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          タンパク質はどう確保するか
        </h2>
        <div className="space-y-4">
          <p>
            減量中の目安は<strong>体重1kgあたり1.2〜1.6g</strong>。体重70kgなら1日84〜112gです。数字だけ見ると多く感じますが、内訳にすると現実的な量です。
          </p>
          <div className="space-y-1.5">
            {PROTEIN_SOURCES.map((s) => (
              <div key={s.food} className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-2.5 border border-green-100">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800">{s.food}</p>
                  <p className="text-xs text-gray-500">{s.note}</p>
                </div>
                <span className="text-sm font-bold text-green-700 whitespace-nowrap">{s.p}</span>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">1日の組み立て例（約95g）</p>
            <p className="text-sm text-gray-600">
              朝：卵2個＋納豆（約19g） / 昼：鶏むね肉100g＋ごはん（約22g） / 夜：鮭1切れ＋豆腐半丁（約28g） / 間食：ギリシャヨーグルト＋プロテイン（約30g）
            </p>
          </div>
          <p className="text-sm text-gray-500">
            ポイントは<strong>3〜4回に分けること</strong>です。夜に一気にまとめて摂るより、毎食に入れるほうが筋肉を守りやすくなります。腎臓に持病がある方はタンパク質量について必ず主治医に相談してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="drinking" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲み会を「設計」する
        </h2>
        <div className="space-y-4">
          <p>
            40代で付き合いをゼロにするのは現実的ではありません。なくすのではなく、
            <strong>予定として組み込んで前後で調整する</strong>のが正解です。
          </p>
          <div className="space-y-2">
            {[
              { title: "週の予算で考える", desc: "1日2,000kcalなら週14,000kcal。飲み会で1,500kcal使うなら、前後3日で500kcalずつ引けば収まります。1日単位で完璧を目指さないこと。" },
              { title: "頼むものを先に決めておく", desc: "1杯目はハイボール、揚げ物は頼まない、締めには行かない。この3つだけ決めておけば、その場で悩まずに済みます。" },
              { title: "翌日に絶食しない", desc: "「昨日食べすぎたから今日は抜く」は反動を生みます。翌日は主食を少し減らす程度にして、水分とタンパク質をしっかり摂るほうが立て直しは早い。" },
              { title: "続く週は諦めて維持に切り替える", desc: "歓送迎会シーズンなど飲み会が続く時期は、落とすのを諦めて維持を目標にします。増やさなければ十分な成果です。" },
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
        <h2 id="health" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          健診の数字も一緒に良くする
        </h2>
        <div className="space-y-4">
          <p>40代のダイエットには、見た目以上に大きな見返りがあります。<strong>健康診断の数字</strong>です。</p>
          <div className="space-y-2">
            {[
              { title: "内臓脂肪は先に落ちる", desc: "皮下脂肪より内臓脂肪のほうが食事改善への反応が早いとされます。腹囲・中性脂肪・肝機能の数値は、体重より先に動くことがあります。" },
              { title: "血圧・血糖の指標も変わりうる", desc: "減量と減塩で改善するケースは多くあります。ただし服薬中の方は自己判断で薬を調整せず、必ず医師に相談してください。" },
              { title: "「戻さないこと」が資産になる", desc: "40代からの10年は生活習慣病リスクが上がる時期です。ここで作った食習慣は、そのまま50代・60代の自分への投資になります。" },
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
            体重計の数字より、健診結果のほうが40代のモチベーションは続きます。年に1回しか出ない数字ですが、そのぶん重みがあります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          92kgから落としたときにやったこと
        </h2>
        <div className="space-y-4">
          <p>
            最初にやったのは、20代の成功体験を捨てることでした。若い頃は「1週間食べる量を減らせば戻る」で通用していたので、同じ感覚で始めて、
            <strong>最初の1ヶ月はまったく落ちませんでした</strong>
            。落ちないので、さらに減らして、体調を崩して終わりです。
          </p>
          <p>
            やり方を変えたのは、必要カロリーを計算し直してからです。自分が思っていたより
            <strong>200kcal以上低かった</strong>
            。それまでの「これくらいなら大丈夫」がそもそも赤字になっていなかったわけです。数字を出した時点で、話が精神論から作業に変わりました。
          </p>
          <p>
            次に効いたのがタンパク質です。それまで1日60g程度しか摂れていなかったのを100g前後まで上げたら、同じカロリーでも空腹が明らかに楽になりました。体重の落ち方より、
            <strong>続けやすさが変わった</strong>という感覚です。
          </p>
          <p>
            逆に、うまくいかなかったのが「飲み会を断る」でした。仕事上どうしても限界があり、断れなかった週に自己嫌悪でリセットしてしまう。途中から週単位の予算で考えるようにしてから、崩れなくなりました。
            <strong>40代は完璧を目指した瞬間に破綻します</strong>。
          </p>
          <p>
            最終的にはボディメイクの大会にも出ましたが、そこまでやらなくても、この3つ——数字を出す、タンパク質を確保する、週単位で管理する——だけで健診の数値は変わります。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>同じ体格でも<strong>20代と40代でTDEEは約157kcal違う</strong>。感覚を捨てて計算し直す</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>赤字は<strong>1日300〜500kcal</strong>。月1.5〜2kgが40代の推奨ライン</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>タンパク質は<strong>体重×1.2〜1.6g</strong>を3〜4回に分けて摂る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>筋トレ週2回</strong>で筋肉を守る。増やすためではなく落とさないため</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>飲み会は断るのではなく<strong>週単位の予算で設計する</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>体重より<strong>腹囲と健診の数字</strong>を見るほうがモチベーションが続く</span></li>
          </ol>
          <p>
            40代のダイエットは、根性ではなく設計の問題です。まずは今の年齢・体格・活動量で必要カロリーを出すところから始めてください。
          </p>
          <p>
            サクメシなら質問に答えるだけで、今のあなたの必要カロリーとPFC、1週間分の献立まで出せます。若い頃の感覚をアップデートする第一歩に使ってみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
