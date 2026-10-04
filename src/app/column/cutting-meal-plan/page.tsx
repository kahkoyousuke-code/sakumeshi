import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("cutting-meal-plan", {
  title: "減量期の食事メニュー｜会社員が平日続けられる1週間の献立例 | サクメシ",
  description:
    "減量期の食事は「平日は固定・週末でゆるめる」で回すと続けやすくなります。目標カロリーの出し方から、朝・昼・間食・夜の型、飲み会のある1週間の献立例とカロリーの合計、弁当にできない日の代わりまで、会社員向けに具体的にまとめました。",
});

const TOC = [
  { id: "quick", label: "結論：平日は固定、週末でゆるめる" },
  { id: "numbers", label: "まず数字を決める（モデルケース）" },
  { id: "template", label: "減量期の会社員の1日の型" },
  { id: "week", label: "減量期の1週間の献立例（飲み会あり）" },
  { id: "women", label: "女性・小柄な人の調整" },
  { id: "lunch", label: "弁当にできない日・帰りが遅い日" },
  { id: "prep", label: "週末の仕込み" },
  { id: "trouble", label: "崩れやすい場面" },
  { id: "backup", label: "自炊できない週の逃げ道" },
  { id: "mine", label: "自分がやっている部分と、この記事の弱いところ" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

/**
 * The fixed weekday template. kcal / protein are rough values for common
 * portions (check package labels); dinner main dish is listed separately.
 */
const DAY_TEMPLATE = [
  {
    when: "朝",
    menu: "オートミール30g＋牛乳200ml、バナナ1本、ゆで卵1個",
    kcal: "約390kcal",
    protein: "約18g",
  },
  {
    when: "昼",
    menu: "鶏むね肉（皮なし）200g ※生の重さ（作り置き）＋おにぎり1個",
    kcal: "約390kcal",
    protein: "約49g",
  },
  {
    when: "間食",
    menu: "無糖のギリシャヨーグルト1個＋素焼きアーモンド20g",
    kcal: "約210kcal",
    protein: "約14g",
  },
  {
    when: "夜",
    menu: "ご飯200g、主菜（下の表で日替わり）、野菜の副菜、味噌汁",
    kcal: "約570〜650kcal",
    protein: "約25〜45g",
  },
];

/** Dinner main dishes that rotate through the week, with the resulting day total. */
const WEEK = [
  { day: "月", change: "夜：鶏むね肉（皮なし・生）150g（作り置きの残り）", total: "約1,610kcal" },
  { day: "火", change: "夜：鮭の塩焼き1切れ＋冷奴", total: "約1,640kcal" },
  { day: "水", change: "夜：鶏むね肉（皮なし・生）150g（作り置きの残り）", total: "約1,610kcal" },
  { day: "木", change: "夜：豚もも薄切り100gのしゃぶしゃぶ", total: "約1,590kcal" },
  { day: "金", change: "夜：飲み会（〆なし）。間食はなし", total: "約2,200kcal", loose: true },
  { day: "土", change: "昼：外食の定食。自由枠を使う", total: "約1,900kcal", loose: true },
  { day: "日", change: "鶏むねの仕込みの日。夜：まぐろの刺身。自由枠を使う", total: "約1,800kcal", loose: true },
];

const FAQS = [
  {
    q: "毎日ほぼ同じ食事で、栄養は偏りませんか？",
    a: "昼を固定しても、夜の主菜を鶏・魚・豚・大豆製品で回せば、タンパク源の偏りはかなり小さくなります。崩れやすいのは野菜と果物です。夜の副菜を1品必ず入れ、朝の果物を切らさないことだけ決めておくと、固定メニューの弱点を補えます。",
  },
  {
    q: "朝は食べられません。この型は使えませんか？",
    a: "使えます。朝の約390kcalを昼か間食に移せば、1日の合計は変わりません。たとえば昼におにぎりを1個足し、間食にバナナとゆで卵を回すなどです。減量の結果を大きく左右するのは1日・1週間の合計で、食べる時間の影響はそれより小さいと考えてください。",
  },
  {
    q: "昼は外食か社食しかありません",
    a: "主菜が焼き魚・鶏の照り焼き・刺身などの定食を選び、ご飯は普通盛りにすれば600〜700kcal前後に収まることが多いです（揚げ物や生姜焼きの定食は750kcal以上になりやすい）。そのぶん間食をやめるか、夜のご飯を減らして1日の合計を合わせてください。",
  },
  {
    q: "筋トレをしていなくても、この献立で痩せますか？",
    a: "消費より摂取を少なくできていれば、運動なしでも体重は落ちていきます（ペースには個人差があります）。ただし運動しない人は維持カロリーが下がるので、活動係数1.2で計算し直してください。この記事のモデル男性なら目標は約1,560kcalで、間食のナッツをやめればほぼ合います。",
  },
  {
    q: "減量期はどれくらい続ければいいですか？",
    a: "始める前に期限か目標体重を決めておくことをすすめます。区切りがないと、だらだら続けて疲れたところで崩れやすいからです。また体重が3〜5kg落ちたら維持カロリーも下がるので、その時点で目標カロリーを計算し直してください。",
  },
];

export default function CuttingMealPlan() {
  return (
    <ColumnShell slug="cutting-meal-plan" toc={TOC} faqs={FAQS}>
      {/* リード文 */}
      <div className="space-y-4">
        <p>
          減量期の食事メニューを調べると、高たんぱく・低脂質のきれいな献立がたくさん出てきます。ただ、平日は朝から夜まで会社にいる人が、それを毎日3食作れるかというと、たいてい無理です。
        </p>
        <p>
          この記事では、<strong>普通の会社員が平日5日続けられること</strong>を条件にして、減量期の食事を組み立てます。目標カロリーの出し方から、1日の型、飲み会がある週の献立例とカロリーの合計、弁当を作れない日の代わりまで、具体的な数字で書きます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="quick" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          結論：平日は固定、週末でゆるめる
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">減量期の食事を続ける3つのルール</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. <strong>平日の朝・昼・間食は固定する</strong>。毎食「何を食べるか」を考えないことが、いちばん続く</li>
              <li>2. <strong>夜は主菜だけ日替わり</strong>にする。飽きと栄養の偏りはここで防ぐ</li>
              <li>3. <strong>1日ではなく1週間の合計</strong>で見る。平日に少し余らせて、週末の外食や飲み会に回す</li>
            </ol>
          </div>
          <p>
            減量は、目標カロリーを何週間も守り続けた人が勝ちます。完璧な献立を3日やるより、<strong>70点の献立を3ヶ月</strong>続けるほうが、結果につながりやすくなります。そのための仕組みが「固定」です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="numbers" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まず数字を決める（モデルケース）
        </h2>
        <div className="space-y-4">
          <p>
            献立はカロリーの枠に中身を詰めていく作業なので、先に枠を決めます。計算方法の詳細は
            <a href="/column/daily-calories" className="text-green-700 underline hover:no-underline">
              1日の摂取カロリーの目安
            </a>
            に書いたので、ここでは結果だけを使います。この記事では次の人をモデルにします。
          </p>
          <div className="bg-white rounded-xl border border-green-100 p-4 space-y-3">
            <p className="text-sm font-bold text-gray-800">モデル：35歳男性・身長172cm・体重75kg・デスクワーク・筋トレ週1〜2回</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・基礎代謝（ハリス・ベネディクト式）＝ <strong>約1,720kcal</strong></li>
              <li>・維持カロリー ＝ 1,720 × 1.375 ＝ <strong>約2,365kcal</strong></li>
              <li>・減量期の目標 ＝ 2,365 − 500 ＝ <strong>約1,865kcal</strong>（1週間で約13,060kcal）</li>
              <li>・タンパク質 ＝ 体重 × 1.2〜1.6g ＝ <strong>90〜120g</strong></li>
            </ul>
          </div>
          <p>
            −500kcalは、計算上は週に約0.45kgずつ落ちるペースです。サクメシの診断も同じ式・同じ−500kcalで計算しているので、自分の身長・体重を入れれば、この記事の数字を自分用に置き換えられます。
          </p>
          <p className="text-sm text-gray-600">
            タンパク質の「体重×1.2〜1.6g」は、厚生労働省の食事摂取基準にある推奨量よりも多めの、減量中の実務的な目安です。理由は
            <a href="/column/protein-intake" className="text-green-700 underline hover:no-underline">
              タンパク質は1日どれくらい必要？
            </a>
            に書きました。<strong>腎臓に持病がある方は、量について必ず主治医に相談してください。</strong>
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="template" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          減量期の会社員の1日の型
        </h2>
        <div className="space-y-4">
          <p>モデルの1,865kcalに対して、平日はこの型で食べます。朝・昼・間食は毎日同じで、変えるのは夜の主菜だけです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">いつ</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食べるもの</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">タンパク質</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {DAY_TEMPLATE.map((row, i) => (
                  <tr key={row.when} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                    <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.when}</td>
                    <td className="p-2 border border-green-100">{row.menu}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.kcal}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">1日の合計（夜の主菜が鶏むね肉の日）</p>
            <p className="text-sm text-gray-700">
              <strong>約1,610kcal</strong>／タンパク質 約120g・脂質 約45g・炭水化物 約180g
            </p>
            <p className="text-sm text-gray-700">
              目標の1,865kcalまで<strong>約250kcalの余り</strong>があります。これが「自由枠」です。お菓子でもビールでも使っていいですし、使わずに週末に回しても構いません。
            </p>
          </div>
          <p className="text-sm text-gray-600">
            ※ カロリーは一般的な量での目安です（夜の調理油・ドレッシング分として約50kcalを含めています）。市販品はパッケージの栄養成分表示で確認してください。
          </p>

          <div className="space-y-3">
            {[
              {
                title: "朝：5分で終わるものだけにする",
                desc: "オートミールは牛乳をかけてレンジで温めるだけ、ゆで卵は2〜3日分ずつまとめてゆでておく。朝に「作る」工程を入れないのがコツです。",
              },
              {
                title: "昼：作り置きの肉＋主食で固定",
                desc: "鶏むね肉を週1回まとめて火を通しておき、おにぎりと一緒に持っていく。昼をここまで固定すると、平日の食事でいちばん崩れやすいところが消えます。",
              },
              {
                title: "間食：夕方の空腹を先につぶす",
                desc: "帰宅前の16〜17時に食べます。ここで何も食べないと、夜に空腹で食べすぎます。タンパク質が入るものを選ぶと腹持ちがいいです。",
              },
              {
                title: "夜：主食・主菜・副菜・汁物をそろえる",
                desc: "ご飯は量って200g。主菜は日替わり、野菜の副菜と味噌汁は毎日入れる。夜だけは「普通の定食の形」にしておくと、家族がいても別メニューにせずに済みます。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-green-700 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="week" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          減量期の1週間の献立例（飲み会あり）
        </h2>
        <div className="space-y-4">
          <p>
            上の型をベースに、金曜に飲み会、土曜に外食がある、会社員としてごく普通の1週間を組んでみます。表にないところ（朝・昼・間食）は型のままです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">曜日</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">型から変えるところ</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800 whitespace-nowrap">1日の合計</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {WEEK.map((row) => (
                  <tr key={row.day} className={row.loose ? "bg-amber-50" : undefined}>
                    <td className="p-2 border border-green-100 text-center font-medium">{row.day}</td>
                    <td className="p-2 border border-green-100">{row.change}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-green-50 font-bold text-green-800">
                  <td className="p-2 border border-green-100 text-center">計</td>
                  <td className="p-2 border border-green-100">目標は1,865kcal × 7日 ＝ 約13,060kcal</td>
                  <td className="p-2 border border-green-100 text-center whitespace-nowrap">約12,350kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            金曜は目標を<strong>約340kcal超えています</strong>。それでも1週間の合計は目標より約700kcal少なくなっています。月〜木に自由枠を使わずにおいた分が、金曜の飲み会と週末の外食を吸収しているからです。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">この1週間の組み方のポイント</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>飲み会の日は多めに見積もる</strong>。酒とつまみで1,000〜1,400kcalを見込み、2,200kcalで計算しておく</li>
              <li>・<strong>週の合計は目標より少し下</strong>でいい。カロリーの見積もりはどうしても甘くなるので、700kcalくらいの余裕は誤差で消える</li>
              <li>・<strong>飲み会の翌日に抜かない</strong>。土曜も普通に朝を食べ、型に戻る</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            夜の主菜の候補（目安・重さは生）：鶏むね肉（皮なし）150g 約160kcal／鮭1切れ（80g）＋冷奴（絹ごし150g）約185kcal／豚もも薄切り（脂身の少ないもの）100g 約140kcal／まぐろ赤身の刺身100g 約110kcal。どれも主菜としては200kcal以下で、タンパク質は20〜35gとれます。しゃぶしゃぶのたれは、ごまだれよりポン酢のほうが軽く済みます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="women" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          女性・小柄な人の調整
        </h2>
        <div className="space-y-4">
          <p>
            モデルは体格のいい男性なので、そのままでは多すぎる人もいます。たとえば32歳女性・身長158cm・体重58kg・運動なしだと、維持カロリーは約1,600kcalです。ここから−500kcalすると1,200kcalを割り込むため、
            <a href="/column/daily-calories#women" className="text-green-700 underline hover:no-underline">
              −300kcalで約1,300kcal
            </a>
            を目標にします。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">型から減らす4か所（約−310kcal）</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・夜のご飯を200g → <strong>150g</strong>（約−80kcal）</li>
              <li>・間食のアーモンドを<strong>やめる</strong>（約−120kcal）</li>
              <li>・昼の鶏むね肉を200g → <strong>150g</strong>（約−55kcal）</li>
              <li>・夜の鶏むね肉を150g → <strong>100g</strong>（約−55kcal）</li>
            </ul>
            <p className="text-sm text-gray-700">これで1日 約1,300kcal、タンパク質は約95g（体重×1.6gとほぼ同じ）です。</p>
          </div>
          <p>
            朝は変えていません。昼も肉を50g減らすだけで、弁当の形はそのままです。<strong>削るのは夜の主食・間食・肉の量</strong>にすると、朝と昼の段取りを崩さずに済みます。減らした結果が1,200kcalを下回るなら、それ以上は削らず、減量ペースのほうを落としてください。
          </p>
          <p className="text-sm text-gray-600">
            ※ サクメシの診断は、−500kcalで1,200kcalを下回る場合、1,200kcalに合わせて表示します。−300kcalにしたい場合は、表示された維持カロリーから自分で300を引いてください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="lunch" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          弁当にできない日・帰りが遅い日
        </h2>
        <div className="space-y-4">
          <p>型が崩れるのはだいたい昼と夜です。よくある3つの場面の代わりを決めておきます。</p>
          <div className="space-y-3">
            {[
              {
                scene: "弁当を作れなかった日の昼",
                how: "コンビニでサラダチキン＋おにぎり1個＋ゆで卵1個。約370kcal・タンパク質約35gで、弁当とほぼ同じ枠に収まる。",
                link: { href: "/column/convenience-diet", label: "コンビニで買えるダイエット飯の選び方" },
              },
              {
                scene: "昼が外食・社食の日",
                how: "焼き魚・鶏の照り焼き・刺身などの定食を選び、ご飯は普通盛り。600〜700kcal前後になるので、その日は間食をやめて合わせる。",
                link: { href: "/column/eating-out", label: "外食でも太らない食べ方" },
              },
              {
                scene: "帰宅が22時を過ぎる日",
                how: "夜を2回に分ける。夕方に会社でおにぎりを食べておき、帰宅後は主菜・副菜・味噌汁だけにする。夜のご飯の分を夕方に前倒しするだけなので、合計は変わらない。",
                link: { href: "/column/late-night-meal", label: "夜遅い食事で太らない方法" },
              },
            ].map((item) => (
              <div key={item.scene} className="bg-white rounded-xl border border-green-100 p-4 space-y-1">
                <p className="text-sm font-bold text-green-700">{item.scene}</p>
                <p className="text-sm text-gray-600">{item.how}</p>
                <p className="text-sm">
                  →{" "}
                  <a href={item.link.href} className="text-green-700 underline hover:no-underline">
                    {item.link.label}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="prep" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          週末の仕込み
        </h2>
        <div className="space-y-4">
          <p>この型を平日に回すために、週末にやっておくのは次の3つだけです。</p>
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>鶏むね肉をまとめて加熱する</strong>。昼200g×5日＋夜150g×2日で、生の重さで1.3kg前後（自分は夕食分を多めに見て2kgほど仕込んでいます）。月〜水の分は冷蔵、木・金の分は加熱後すぐ1食ずつ冷凍し、前日の夜に冷蔵庫へ移して解凍する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>ゆで卵は2〜3日分ずつゆでる</strong>（週2回）。殻はむかずに冷蔵しておく</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>オートミール・ヨーグルト・アーモンド・バナナを1週間分買う</strong>。朝と間食の材料をそろえておく</span></li>
          </ol>
          <p>
            鶏むね肉は、加熱が不十分だと食中毒の原因になります。中心まで火を通すこと、冷蔵での保存は2〜3日までとし、それ以降の分は冷凍すること。この2つは必ず守ってください。仕込みの手順と保存の注意は
            <a href="/column/meal-prep" className="text-green-700 underline hover:no-underline">
              作り置きダイエット
            </a>
            に、実際に1年続けてみた記録は
            <a href="/column/chicken-bento-1year" className="text-green-700 underline hover:no-underline">
              同じ鶏むね弁当を1年続けている
            </a>
            に書いています。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="trouble" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          崩れやすい場面
        </h2>
        <div className="space-y-3">
          {[
            {
              habit: "飲み会で〆まで行く",
              desc: "酒そのものより、つまみの追加と〆のラーメンが大きい。〆のラーメンはこってり系・トッピングありだと800〜1,100kcalになるので、ここを切れば飲み会は1週間の枠に収まる。",
              link: { href: "/column/alcohol-diet", label: "お酒とダイエットの両立" },
            },
            {
              habit: "体重が増えた翌日に食事を抜く",
              desc: "1日で増えた1kgは脂肪ではなく、ほとんどが水分と、まだ消化中の食べ物の重さ。抜くと夕方に反動で食べて、収支はむしろ悪くなる。判断は週平均で。",
              link: { href: "/column/weight-weekly-average", label: "毎朝の体重に一喜一憂していた話" },
            },
            {
              habit: "数週間、体重が止まって見える",
              desc: "数週間止まって見えるのは、水分の上下であることが多い。判断は2週間の平均で。それでも動かなければ、体重が落ちたぶん維持カロリーも下がっているので、夜のご飯を50g減らすか、歩数を増やす。",
              link: { href: "/column/diet-plateau", label: "停滞期の乗り越え方" },
            },
          ].map((item) => (
            <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100 space-y-1">
              <p className="font-bold text-red-700 text-sm">⚠️ {item.habit}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="text-sm">
                →{" "}
                <a href={item.link.href} className="text-green-700 underline hover:no-underline">
                  {item.link.label}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="backup" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自炊できない週の逃げ道
        </h2>
        <div className="space-y-4">
          <p>
            繁忙期や出張が続くと、週末の仕込みすらできない週があります。そこで型が全部崩れて「今週はもういいや」となるのが、減量期でいちばんもったいないパターンです。
          </p>
          <p>
            対策は、<strong>仕込めなかった週の代わりを先に決めておく</strong>ことです。昼はコンビニの組み合わせ（上の「弁当を作れなかった日」）、夜は冷凍の宅食を何食かストックしておきます。宅食はカロリーとタンパク質が表示されているので、電子レンジで温めるだけで型の「夜」をそのまま置き換えられます。
          </p>
          <p className="text-sm text-gray-600">
            この記事の下に、サクメシが提携している宅食サービスを載せています（PR）。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="mine" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自分がやっている部分と、この記事の弱いところ
        </h2>
        <div className="space-y-4">
          <p>
            この型のうち、<strong>昼の「鶏むね肉200g＋おにぎり」は、自分（運営者）が1年以上続けている実際の弁当</strong>です。週に1回、鶏むね肉を2kgほどまとめて加熱し、平日の弁当と夕食のタンパク源に回しています。
          </p>
          <p>
            92kgあった頃は、朝は食べず、昼はコンビニ弁当や菓子パンで700〜900kcal、帰宅は毎日0時近くでした（
            <a href="/column/eating-out-92kg" className="text-green-700 underline hover:no-underline">
              92kgのとき、外食で何を食べていたか
            </a>
            ）。そのあと、昼を弁当に切り替えて固定しました。昼が決まると、1日の中で「その場で選ぶ」食事が1回減ります。コンビニに寄る用事がなくなり、菓子パンを買う場面も消えました。この記事で「固定」をすすめているのは、そのときの実感からです。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-2">
            <p className="text-sm font-bold text-amber-800">先に断っておくこと</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>朝・間食・夜の献立と1週間の表は、モデルケースに合わせて計算で組んだもの</strong>です。自分が毎日この通りに食べているわけではありません</li>
              <li>・カロリーとタンパク質は一般的な量での目安で、実測ではありません</li>
              <li>・持病がある方、妊娠中・授乳中の方、医師から食事の指示を受けている方は、この型より医師の指示を優先してください</li>
            </ul>
          </div>
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>先に枠を決める。目標は<strong>維持カロリー −500kcal</strong>（1,200kcalは下回らない）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>平日の朝・昼・間食は固定</strong>、夜は主菜だけ日替わり</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>平日の自由枠を残しておけば、<strong>飲み会や外食は1週間の合計で吸収</strong>できる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>弁当にできない日・遅い日・仕込めない週の<strong>代わりを先に決めておく</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>判断は<strong>2週間の体重平均</strong>で。止まったら夜のご飯か歩数で調整する</span></li>
          </ol>
          <p className="text-sm text-gray-600">
            減量が終わって体を大きくしたくなったら、この型に主食を足す形で
            <a href="/column/bulking-meal-plan" className="text-green-700 underline hover:no-underline">
              増量期の食事メニュー
            </a>
            に移れます。
          </p>
          <p>
            この記事の数字はモデルケースのものです。サクメシなら、自分の身長・体重・活動量から目標カロリーを計算し、7日分の献立まで無料で作れます。まずは自分の枠を出してみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
