import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/intermittent-fasting" },
  title: "16時間断食は痩せる？メリット・デメリットと正しいやり方 | サクメシ",
  description:
    "16時間断食が痩せる仕組みを冷静に検証。オートファジーの実際、最大の弱点であるタンパク質不足の対処、生活パターン別の時間割、段階的な始め方、やめるべきサインまで解説します。",
};

const TOC = [
  { id: "what", label: "16時間断食とは？" },
  { id: "truth", label: "痩せる仕組みの「本当のところ」" },
  { id: "autophagy", label: "オートファジーはどこまで期待できるか" },
  { id: "merit", label: "メリットとデメリット" },
  { id: "protein", label: "最大の弱点：タンパク質をどう確保するか" },
  { id: "patterns", label: "生活パターン別の時間割" },
  { id: "who", label: "向いている人・向かない人" },
  { id: "how", label: "始め方（4週間の段階プラン）" },
  { id: "stop", label: "やめたほうがいいサイン" },
  { id: "experience", label: "自分で試して分かったこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const PATTERNS = [
  {
    title: "12〜20時（もっとも一般的）",
    color: "bg-blue-50 border-blue-100",
    rows: ["朝：水・お茶・ブラックコーヒー", "12:00 1食目（昼食）", "16:00 間食", "20:00 2食目を食べ終える"],
    note: "朝食を食べる習慣がない人向け。夕食が20時までに終わる生活なら無理なく回ります。",
  },
  {
    title: "10〜18時（早めに切り上げる）",
    color: "bg-amber-50 border-amber-100",
    rows: ["8:00 起床・水分のみ", "10:00 1食目（遅い朝食）", "14:00 昼食", "18:00 夕食を食べ終える"],
    note: "夜が早い生活の人向け。就寝までの時間が空くので睡眠の質は上がりやすい反面、夜の付き合いには弱い。",
  },
  {
    title: "14〜22時（帰宅が遅い人）",
    color: "bg-indigo-50 border-indigo-100",
    rows: ["朝・昼前半は水分のみ", "14:00 1食目（遅い昼食）", "18:00 間食", "22:00 夕食を食べ終える"],
    note: "帰宅が遅い人向けですが、就寝直前の食事になりやすく睡眠の質が落ちます。優先度は低め。",
  },
];

const PROTEIN_PLAN = [
  { meal: "1食目（12:00）", menu: "鶏むね肉150g＋ごはん＋味噌汁＋サラダ", p: "約35g" },
  { meal: "間食（16:00）", menu: "プロテイン1杯＋ゆで卵1個", p: "約26g" },
  { meal: "2食目（19:30）", menu: "鮭1切れ＋豆腐半丁＋納豆＋ごはん", p: "約35g" },
];

const FAQS = [
  {
    q: "断食中にコーヒーやお茶は飲んでいい？",
    a: "無糖であれば問題ありません。むしろ水分をしっかり摂ったほうが空腹感は紛れます。砂糖・ミルク入りは避けてください。カロリーゼロの甘味料入り飲料は、甘さへの欲求が残るので常用は勧めません。",
  },
  {
    q: "16時間の間にプロテインは飲んでいい？",
    a: "厳密に言えば食事なので、断食時間中は避けるのが原則です。ただし目的が減量であれば、タンパク質不足のほうが問題です。守れないくらいならタンパク質を優先してください。",
  },
  {
    q: "筋トレしている人には向かない？",
    a: "筋肉を増やしたい時期には不向きです。食べられる時間が短いとカロリーもタンパク質も確保しづらいためです。減量期に体重を落としたいだけなら、タンパク質さえ確保できれば選択肢になります。",
  },
  {
    q: "土日だけやるのは意味ある？",
    a: "週2日だけでは体重への影響はほぼありません。ただし「夜遅く食べる習慣を断つ練習」としては意味があります。まずはそこから始めて、平日に広げていく形が現実的です。",
  },
  {
    q: "毎日やらないとダメ？",
    a: "そんなことはありません。週5日できていれば十分です。飲み会や家族の予定がある日は普通に食べて、翌日から戻せば問題ありません。完璧を目指すとやめる理由になります。",
  },
];

export default function IntermittentFasting() {
  return (
    <ColumnShell
      slug="intermittent-fasting"
      h1="16時間断食は痩せる？メリット・デメリットと正しいやり方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「16時間食べなければ痩せる」「オートファジーで若返る」——一度は聞いたことがあると思います。</p>
        <p>
          結論から言うと、16時間断食は
          <strong>合う人には便利な食事法だが、魔法ではない</strong>
          です。自分でも試しましたが、良い面ときつい面の両方がありました。
        </p>
        <p>流行りに乗る前に、何が起きているのかと、失敗しやすいポイントを押さえておきましょう。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          16時間断食とは？
        </h2>
        <div className="space-y-4">
          <p>
            1日のうち<strong>食べる時間を8時間以内に収め、残りの16時間は食べない</strong>という食事法です。「リーンゲインズ」「8時間ダイエット」とも呼ばれます。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">例：12時〜20時に食べるパターン</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>🕗 朝：水・お茶・ブラックコーヒーのみ（朝食は抜く）</p>
              <p>🕛 12時：1食目（昼食）</p>
              <p>🕓 16時前後：間食OK</p>
              <p>🕗 20時：2食目を食べ終える</p>
              <p>🌙 20時以降〜翌12時：固形物は摂らない</p>
            </div>
          </div>
          <p>
            睡眠時間を挟むので、実質的には
            <strong>「朝食を抜いて夜食をやめる」だけ</strong>
            という人も多くいます。16時間と聞くと大変そうですが、そのうち7〜8時間は寝ている計算です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="truth" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          痩せる仕組みの「本当のところ」
        </h2>
        <div className="space-y-4">
          <p>痩せる理由は、特別なものではありません。</p>
          <div className="space-y-2">
            {[
              { title: "食べる時間が短い＝総カロリーが減りやすい", desc: "食べられる時間が8時間しかなければ、物理的に入る量が減る人が多い。結局はカロリー収支の話です。" },
              { title: "夜遅い食事・夜食がなくなる", desc: "太る原因になりやすい「寝る前の食事」が、仕組みとして消えます。これだけで改善する人はかなりいます。" },
              { title: "ルールが1つしかないので迷わない", desc: "カロリー計算が続かない人でも、時間を守るだけなら実行できる。判断の回数が減るのが最大の利点です。" },
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
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 逆に言えば、<strong>8時間の間に食べすぎれば普通に太ります</strong>。「時間さえ守ればカロリーは自由」は誤解です。ラーメンと丼ものを詰め込めば、16時間空けても収支は黒字になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="autophagy" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          オートファジーはどこまで期待できるか
        </h2>
        <div className="space-y-4">
          <p>
            16時間断食が広まったきっかけのひとつが「オートファジー（細胞が自らの成分を分解・再利用する仕組み）」です。ただ、この話は
            <strong>期待と実際にかなり距離があります</strong>。
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">◎ 分かっていること</p>
              <p className="text-sm text-gray-600">
                オートファジーという細胞の仕組み自体は存在し、栄養が入ってこない状態で活発になることが知られています。
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-bold text-amber-800 text-sm mb-1">△ 分かっていないこと</p>
              <p className="text-sm text-gray-600">
                「人間が16時間食べないでいると、どの程度オートファジーが起き、それが体脂肪の減少や健康にどれだけ寄与するか」。ここは研究途上で、
                <strong>「16時間で若返る」と断言できる段階ではありません</strong>。
              </p>
            </div>
          </div>
          <p>
            減量目的でやるのなら、オートファジーは考えなくてかまいません。
            <strong>「食べる時間を区切ることで食べすぎを防ぐ道具」</strong>
            として使うのが、期待外れにならない捉え方です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="merit" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          メリットとデメリット
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">⭕ メリット</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・カロリー計算なしで摂取量が減りやすい</li>
                <li>・夜食・ダラダラ食いが仕組みで消える</li>
                <li>・朝の準備が減り、時間に余裕ができる</li>
                <li>・ルールがシンプルで判断疲れが少ない</li>
                <li>・外食が多い人でも「時間」だけは守りやすい</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ デメリット</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・タンパク質が不足しやすい</li>
                <li>・筋肉が落ちやすくなる</li>
                <li>・空腹の反動でまとめて食べてしまう</li>
                <li>・昼の付き合いや家族の食事に合わせにくい</li>
                <li>・午前中の集中力が落ちる人がいる</li>
                <li>・食事が2回だとビタミン・ミネラルも不足しがち</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="protein" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          最大の弱点：タンパク質をどう確保するか
        </h2>
        <div className="space-y-4">
          <p>
            16時間断食で最も失敗しやすいのがここです。体重70kgの人が必要な
            <strong>1日84g以上を2食で摂ろうとすると、1食42g</strong>
            。鶏むね肉なら約190g分です。意識しないとまず届きません。
          </p>
          <p>現実的なのは、間食を「タンパク質を入れる枠」として使う組み立てです。</p>
          <div className="space-y-2">
            {PROTEIN_PLAN.map((row) => (
              <div key={row.meal} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-green-700 text-sm">{row.meal}</p>
                  <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{row.p}</span>
                </div>
                <p className="text-sm text-gray-600">{row.menu}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">合計 約96g</p>
            <p className="text-sm text-gray-600">
              間食にプロテインとゆで卵を入れるだけで、2食の負担がかなり減ります。
              <strong>「1日2食」ではなく「8時間で3回に分ける」</strong>
              と考えたほうがうまくいきます。
            </p>
          </div>
          <p className="text-sm text-gray-500">
            タンパク質が確保できないまま続けると、体重は落ちても筋肉が減り、代謝の土台が下がります。数ヶ月後に「同じ食事で太るようになった」という結果になりがちです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="patterns" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          生活パターン別の時間割
        </h2>
        <div className="space-y-4">
          <p>8時間の枠をどこに置くかで、続けやすさがまったく変わります。</p>
          <div className="space-y-4">
            {PATTERNS.map((p) => (
              <div key={p.title} className={`rounded-xl p-4 border ${p.color}`}>
                <p className="font-bold text-gray-800 text-sm mb-3">{p.title}</p>
                <div className="space-y-1.5 mb-3">
                  {p.rows.map((r) => (
                    <p key={r} className="text-sm text-gray-700 bg-white rounded-lg px-3 py-2 border border-gray-100">{r}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            選ぶ基準はシンプルで、<strong>「自分が抜きやすい食事はどれか」</strong>です。朝食に思い入れがないなら12〜20時、夜が早いなら10〜18時。無理に流行のパターンに合わせる必要はありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="who" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          向いている人・向かない人
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">向いている人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・もともと朝食を食べる習慣がない</li>
                <li>・夜遅くに食べる癖を断ち切りたい</li>
                <li>・カロリー計算がどうしても続かない</li>
                <li>・生活リズムが安定している</li>
                <li>・ルールは少ないほうが守れるタイプ</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">向かない人・やめておくべき人</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・筋トレで筋肉を増やしたい時期の人</li>
                <li>・朝食を抜くと仕事に支障が出る人</li>
                <li>・過食の傾向がある人（反動が出やすい）</li>
                <li>・成長期の方</li>
                <li>・妊娠中・授乳中の方</li>
                <li>・糖尿病などで服薬中の方（低血糖のリスク）</li>
              </ul>
            </div>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ 持病がある方、服薬中の方、摂食障害の既往がある方は、自己判断で始めず必ず主治医に相談してください。とくに血糖降下薬やインスリンを使用している場合、食事を抜くことは危険を伴います。
          </p>
          <p>
            体感としては、
            <strong>「朝から食欲がない人が、無理に朝食を食べるのをやめる」</strong>
            くらいの入り方が一番自然です。朝食をしっかり食べたい人が、流行だからと合わせる必要はまったくありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          始め方（4週間の段階プラン）
        </h2>
        <div className="space-y-4">
          <p>いきなり16時間にすると、反動でまとめて食べて終わります。少しずつ延ばしてください。</p>
          <div className="space-y-2">
            {[
              { week: "1週目", task: "12時間（例：20時〜翌8時）", why: "実質「夜食をやめる」だけ。これでも効果が出る人はいます" },
              { week: "2週目", task: "14時間（例：20時〜翌10時）", why: "朝食を少し後ろにずらす感覚。空腹に慣れる期間" },
              { week: "3週目", task: "16時間（例：20時〜翌12時）", why: "目標の形へ。ここでタンパク質の組み立ても固める" },
              { week: "4週目", task: "16時間を平日5日で運用", why: "週末は普通に食べてよい。完璧を目指さない" },
            ].map((w) => (
              <div key={w.week} className="bg-white rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs bg-green-600 text-white font-bold px-2 py-1 rounded">{w.week}</span>
                  <p className="text-sm font-bold text-gray-800">{w.task}</p>
                </div>
                <p className="text-xs text-gray-500">{w.why}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 pt-2">
            <div>
              <p className="font-bold text-gray-800 mb-1">断食中の水分はしっかり摂る</p>
              <p>水・お茶・ブラックコーヒーはかまいません。空腹感の一部は水分で紛れます。ジュースや砂糖入りコーヒーを飲んでしまうと、断食の意味がなくなります。</p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">1食目に食べすぎない工夫をする</p>
              <p>空腹の状態で食べ始めるので、勢いで量が増えます。最初にサラダか汁物を食べる、主食は先によそって追加しない、といった手を打っておくと安定します。</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="stop" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やめたほうがいいサイン
        </h2>
        <div className="space-y-4">
          <p>合わない人には合いません。次のような状態が続くなら、撤退も立派な判断です。</p>
          <div className="space-y-2">
            {[
              "めまい・ふらつき・冷や汗が出る",
              "午前中の仕事や勉強にはっきり支障が出ている",
              "1食目でどうしても食べすぎてしまう日が続く",
              "食べ物のことばかり考えてしまう",
              "体重は落ちているが、明らかに力が出なくなった",
              "生理周期が乱れた（女性の場合）",
            ].map((t) => (
              <div key={t} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm text-gray-600">{t}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            食事法は目的ではなく手段です。合わないものを我慢して続けても、続かないので結果は出ません。3食に戻してカロリーとPFCを管理するほうが、確実な人のほうが多いくらいです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自分で試して分かったこと
        </h2>
        <div className="space-y-4">
          <p>
            流行り始めた頃に試しました。結論としては、
            <strong>体重は落ちましたが、その理由は断食そのものではありませんでした</strong>
            。朝食を抜いたぶん、単純に1日の摂取カロリーが400〜500kcal減っていただけです。
          </p>
          <p>
            良かったのは、夜の習慣が変わったことです。それまで帰宅後にだらだら食べていたのが、「20時で終わり」と決まっているだけできれいに消えました。
            <strong>時間で区切るルールは、意志で我慢するより強い</strong>
            というのは実感としてあります。
          </p>
          <p>
            きつかったのはタンパク質です。2食では明らかに足りず、最初の2週間で扱える重量が落ちました。間食にプロテインとゆで卵を入れるようにしてから戻りましたが、
            <strong>ここに気づかずに続けていたら筋肉を削っていたと思います</strong>。
          </p>
          <p>
            最終的にはやめました。理由は昼の会食が入る仕事で、時間を守れない日が多かったからです。今は3食に戻して、代わりに「20時以降は食べない」というルールだけ残しています。
            <strong>効いていた部分だけ残す</strong>
            というのが、自分にとっての落としどころでした。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>痩せる理由は結局<strong>カロリー収支</strong>。時間を守っても食べすぎれば太る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>オートファジーは<strong>減量目的では考えなくてよい</strong>。研究途上の話</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>最大の弱点は<strong>タンパク質不足</strong>。間食を「入れる枠」として使う</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>12時間 → 14時間 → 16時間</strong>と段階的に。いきなりやらない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>持病・服薬中・妊娠中・成長期の方は<strong>自己判断で始めない</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>合わなければ<strong>やめる。効いていた部分だけ残す</strong></span></li>
          </ol>
          <p>
            16時間断食をやるにしても、8時間の中で何を食べるかがすべてです。時間を区切っただけでは、栄養バランスは良くなりません。
          </p>
          <p>
            サクメシなら、体格と目標に合わせたカロリーとPFCで献立を作れます。断食スタイルの人は、出てきた1日分を昼・間食・夜の3回に配分して使ってみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
