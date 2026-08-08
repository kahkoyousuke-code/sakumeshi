import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/workout-meal-timing" },
  title: "筋トレ前後の食事タイミング｜何をいつ食べるか完全解説 | サクメシ",
  description:
    "筋トレ前後に何をいつ食べるかを解説。よく言われる「30分以内のゴールデンタイム」の実際、朝トレ・夕方トレ・夜トレ別のタイムテーブル、プロテインの使い分け、減量中の調整まで紹介します。",
};

const TOC = [
  { id: "priority", label: "タイミングの前に決まっていること" },
  { id: "golden", label: "「30分以内」神話をアップデートする" },
  { id: "pre-workout", label: "トレーニング前の食事" },
  { id: "post-workout", label: "トレーニング後の食事" },
  { id: "timetable", label: "時間帯別タイムテーブル3パターン" },
  { id: "protein-timing", label: "プロテインはいつ飲む？" },
  { id: "cut", label: "減量中はどう調整する？" },
  { id: "rest-day", label: "休息日の食事" },
  { id: "experience", label: "10年やって残ったやり方" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const PRE_FOODS = [
  { food: "おにぎり1〜2個", timing: "1〜2時間前", desc: "手軽に糖質を確保できる。具は鮭・昆布などシンプルなもので十分" },
  { food: "バナナ1〜2本", timing: "30分〜1時間前", desc: "消化が早く、直前でも胃が重くなりにくい。時間がない日の定番" },
  { food: "オートミール＋はちみつ", timing: "1〜2時間前", desc: "エネルギーが持続しやすい。朝トレ前にも使いやすい" },
  { food: "全粒粉トースト＋ゆで卵", timing: "1.5〜2時間前", desc: "糖質とタンパク質を同時に。朝食兼トレ前食に" },
  { food: "プロテイン＋和菓子", timing: "30〜45分前", desc: "脂質が低く消化が速い組み合わせ。仕事帰りのジム前に" },
];

const TIMETABLES = [
  {
    title: "朝トレ（7時開始）",
    color: "bg-amber-50 border-amber-100",
    rows: [
      { time: "6:15", what: "バナナ1本＋プロテイン半分（消化の負担を抑える）" },
      { time: "7:00", what: "トレーニング開始" },
      { time: "8:15", what: "朝食：卵・納豆・ごはん・味噌汁（しっかり食べる）" },
      { time: "12:30", what: "昼食：通常どおり" },
    ],
    note: "起床直後は前夜から時間が空いています。何も入れずに高強度をやると力が出にくいので、軽くでも糖質を入れておくと変わります。",
  },
  {
    title: "夕方トレ（18時開始・仕事帰り）",
    color: "bg-blue-50 border-blue-100",
    rows: [
      { time: "12:30", what: "昼食：定食などしっかりめに" },
      { time: "16:30", what: "間食：おにぎり1個 or プロテイン＋和菓子" },
      { time: "18:00", what: "トレーニング開始" },
      { time: "19:30", what: "夕食：肉・魚＋ごはん＋野菜（ここが実質のトレ後食）" },
    ],
    note: "一番組みやすいパターン。昼食から6時間空くので、16時台の間食があるかどうかで後半の粘りが変わります。",
  },
  {
    title: "夜トレ（21時開始）",
    color: "bg-indigo-50 border-indigo-100",
    rows: [
      { time: "19:00", what: "夕食（主食を軽めに、脂質は控えめ）" },
      { time: "21:00", what: "トレーニング開始" },
      { time: "22:15", what: "プロテイン＋おにぎり1個 など軽めに" },
      { time: "23:30", what: "就寝" },
    ],
    note: "寝る直前に重い食事を入れると睡眠の質が落ちます。夕食を先に済ませ、トレ後は消化の軽いもので締めるのが現実的です。",
  },
];

const PROTEIN_TIMING = [
  { time: "トレーニング後", desc: "定番のタイミング。ただし「30分以内でないと無駄」ということはありません。食事がすぐ摂れないときの穴埋めとして使うのが本来の役割です。" },
  { time: "朝食時", desc: "前夜から時間が空いているので、朝にタンパク質を入れると1日の合計を確保しやすくなります。朝食が軽い人ほど効果的です。" },
  { time: "就寝前", desc: "吸収が緩やかなカゼインやミルクプロテインが向きます。夕食のタンパク質が少なかった日の補填に。" },
  { time: "間食として", desc: "夕方の空腹対策にもなります。菓子パンを買う代わりにプロテイン、というだけでカロリーもPFCも改善します。" },
];

const FAQS = [
  {
    q: "空腹で筋トレすると筋肉が減る？",
    a: "短時間のトレーニングで劇的に減るということはありません。ただし力が出にくく、扱える重量が落ちるぶん結果的に効果が下がることはあります。朝トレなら軽く糖質を入れておくほうが無難です。",
  },
  {
    q: "トレ後すぐに食べられないときは？",
    a: "プロテイン1杯でつなげば十分です。それも無理なら、その日の合計タンパク質を確保することを優先してください。1食のタイミングより1日の総量のほうが効きます。",
  },
  {
    q: "有酸素運動の前後も同じ考え方でいい？",
    a: "基本は同じですが、有酸素は筋トレほど糖質を消耗しません。30〜45分程度のウォーキングやジョギングなら、前後で特別な補給は不要です。",
  },
  {
    q: "サプリはBCAAやEAAも必要？",
    a: "1日のタンパク質が足りているなら、優先度は高くありません。まずは食事とプロテインで体重1kgあたり1.5g前後を確保し、それでも足りない・空腹時にトレーニングする、といった条件が揃ってから検討すれば十分です。",
  },
];

export default function WorkoutMealTiming() {
  return (
    <ColumnShell
      slug="workout-meal-timing"
      h1="筋トレ前後の食事タイミング｜何をいつ食べるか10年筋トレ民が完全解説"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「筋トレはしているのに、なかなか変わらない」</p>
        <p>
          原因が食事タイミングにあることはあります。ただし
          <strong>タイミングは、優先順位でいうと3番目以降</strong>
          です。ここを取り違えると、細かい時間を気にしているのに結果が出ない、という状態になります。
        </p>
        <p>この記事では、まず優先順位を整理したうえで、前後に何をいつ食べるか、時間帯別の具体的なタイムテーブルまで落とし込みます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="priority" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          タイミングの前に決まっていること
        </h2>
        <div className="space-y-4">
          <p>筋肉をつける・減量する、どちらの目的でも、影響の大きさはこの順番です。</p>
          <div className="space-y-2">
            {[
              { rank: "1", label: "1日の総カロリー", desc: "増やすのか減らすのか。ここが合っていないと他は効かない" },
              { rank: "2", label: "1日の総タンパク質", desc: "体重1kgあたり1.5〜2gが目安。ここまでで結果の8割が決まる" },
              { rank: "3", label: "タンパク質の分配", desc: "1食に偏らせず、3〜4回に分ける" },
              { rank: "4", label: "トレ前後のタイミング", desc: "ここが今回のテーマ。上の3つができてから効いてくる" },
            ].map((item) => (
              <div key={item.rank} className="flex gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.rank}
                </span>
                <div>
                  <p className="font-bold text-green-700 text-sm">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            つまり、
            <strong>タンパク質が1日60gしか摂れていない人がトレ後30分を死守しても、あまり意味がありません</strong>
            。まず総量、それから配分、最後にタイミングです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="golden" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「30分以内」神話をアップデートする
        </h2>
        <div className="space-y-4">
          <p>
            長く「トレーニング後30分以内のゴールデンタイムを逃すと効果が落ちる」と言われてきました。近年はこの考え方が見直され、
            <strong>栄養を受け取れる時間帯はもっと長い</strong>と理解されています。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-2">
            <p className="font-bold text-amber-800 text-sm">実際のところ</p>
            <p className="text-sm text-gray-600">
              トレーニング前に食事を済ませていれば、その栄養はトレーニング後もまだ吸収の途中です。この場合、直後に急いで何かを入れる必要性は下がります。
            </p>
            <p className="text-sm text-gray-600">
              逆に、<strong>空腹の状態でトレーニングしたとき</strong>は、終わってから食事までの時間が空くほど不利になります。急ぐべきなのはこちらのケースです。
            </p>
          </div>
          <p>
            現実的な結論はシンプルです。
            <strong>トレーニング後1〜2時間以内に、タンパク質を含む食事を1回入れる</strong>
            。ストップウォッチを見る必要はありません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="pre-workout" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          トレーニング前の食事
        </h2>
        <div className="space-y-4">
          <p>目的は<strong>エネルギー切れを防ぐこと</strong>です。主役は糖質。脂質は消化に時間がかかるので前は控えます。</p>
          <div className="space-y-2">
            {PRE_FOODS.map((item) => (
              <div key={item.food} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-green-700 text-sm">{item.food}</p>
                  <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{item.timing}</span>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="text-sm font-bold text-red-700 mb-1">❌ 直前に避けたいもの</p>
            <p className="text-sm text-gray-600">
              揚げ物・ラーメン・生クリーム系など脂質の多いもの。消化に時間がかかり、トレーニング中に胃が重くなります。食物繊維の多い生野菜を大量に食べるのも、同じ理由で直前には向きません。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="post-workout" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          トレーニング後の食事
        </h2>
        <div className="space-y-4">
          <p>目的は<strong>修復の材料を入れることと、使ったエネルギーを戻すこと</strong>です。タンパク質と糖質をセットにします。</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 text-center">
              <p className="text-xs font-bold text-blue-700 mb-1">タンパク質</p>
              <p className="text-lg font-bold text-blue-800">20〜40g</p>
              <p className="text-xs text-gray-500">1食あたりの目安</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-100 text-center">
              <p className="text-xs font-bold text-orange-700 mb-1">糖質</p>
              <p className="text-lg font-bold text-orange-800">30〜60g</p>
              <p className="text-xs text-gray-500">減量中は下限寄りに</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { food: "プロテイン＋バナナ", desc: "移動中でも摂れる。食事までのつなぎとして最適" },
              { food: "鶏むね肉＋白米＋味噌汁", desc: "自炊できるならこれが基本形" },
              { food: "サラダチキン＋おにぎり", desc: "コンビニで完結する組み合わせ" },
              { food: "卵かけごはん＋納豆", desc: "帰宅が遅い日でもすぐ用意できる" },
              { food: "鮭の塩焼き＋ごはん", desc: "脂質の質もよく、飽きにくい" },
            ].map((item) => (
              <div key={item.food} className="bg-green-50 rounded-lg p-3 border border-green-100">
                <p className="text-sm"><strong className="text-green-700">{item.food}</strong>　{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            タンパク質20〜40gの目安：鶏むね肉100g＝約22g、卵1個＝約6g、納豆1パック＝約7g、プロテイン1杯＝約20g。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="timetable" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          時間帯別タイムテーブル3パターン
        </h2>
        <div className="space-y-4">
          <p>生活時間によって組み方は変わります。自分に近いものを土台にしてください。</p>
          <div className="space-y-4">
            {TIMETABLES.map((tt) => (
              <div key={tt.title} className={`rounded-xl p-4 border ${tt.color}`}>
                <p className="font-bold text-gray-800 text-sm mb-3">{tt.title}</p>
                <div className="space-y-1.5 mb-3">
                  {tt.rows.map((r) => (
                    <div key={r.time} className="flex gap-3 bg-white rounded-lg px-3 py-2 border border-gray-100">
                      <span className="text-xs font-bold text-gray-500 w-12 shrink-0 pt-0.5">{r.time}</span>
                      <span className="text-sm text-gray-700">{r.what}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{tt.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="protein-timing" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          プロテインはいつ飲む？
        </h2>
        <div className="space-y-4">
          <p>
            プロテインは薬ではなく食品です。
            <strong>「食事でタンパク質が足りない場所を埋める道具」</strong>
            と考えると、飲むべきタイミングは自然に決まります。
          </p>
          <div className="space-y-3">
            {PROTEIN_TIMING.map((item) => (
              <div key={item.time} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">🕐 {item.time}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-yellow-800">
            <strong>大前提：</strong>体重1kgあたり1.5〜2gのタンパク質を1日で確保することが最優先です。タイミングを最適化しても、総量が足りていなければ結果は変わりません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="cut" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          減量中はどう調整する？
        </h2>
        <div className="space-y-4">
          <p>減量中は総カロリーに上限があるので、限られた枠をどこに置くかという問題になります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">項目</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">増量中</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">減量中</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">トレ前の糖質</td>
                  <td className="p-2 border border-green-100">しっかり摂る</td>
                  <td className="p-2 border border-green-100">量は減らすが<strong>ゼロにしない</strong></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">トレ後の糖質</td>
                  <td className="p-2 border border-green-100">60g前後</td>
                  <td className="p-2 border border-green-100">30g前後に抑える</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">タンパク質</td>
                  <td className="p-2 border border-green-100">体重×1.5〜2g</td>
                  <td className="p-2 border border-green-100"><strong>減らさない</strong>（むしろ上限寄り）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">脂質</td>
                  <td className="p-2 border border-green-100">気にしすぎない</td>
                  <td className="p-2 border border-green-100">ここで調整枠を作る</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            減量中に最もやってはいけないのが、
            <strong>トレーニング日の糖質を大幅に削ること</strong>
            です。挙げられる重量が落ち、その状態が続くと筋肉量も守りにくくなります。削るなら、トレーニングのない日と脂質から削ります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="rest-day" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          休息日の食事
        </h2>
        <div className="space-y-4">
          <p>「休息日はカロリーを落とすべき？」——答えは<strong>「少し落とすが、大幅には下げない」</strong>です。筋肉が回復・成長するのは、トレーニング中ではなく休んでいる間だからです。</p>
          <div className="space-y-3">
            {[
              { label: "タンパク質は同じ量をキープ", desc: "修復が進むのは休息日です。ここで減らすと、せっかくのトレーニングが回収できません。" },
              { label: "糖質はやや控えめに", desc: "エネルギー需要が下がるぶん、主食を1食分だけ軽くする程度で十分です。" },
              { label: "カロリーは100〜200kcal減らす程度", desc: "大きく削ると回復が遅れ、次のトレーニングの質が落ちます。" },
              { label: "水分と睡眠を優先する", desc: "休息日の目的は回復です。食事の微調整より、寝る時間を確保するほうが効果があります。" },
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
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          10年やって残ったやり方
        </h2>
        <div className="space-y-4">
          <p>
            始めた頃は、トレーニング後にロッカールームで急いでプロテインを飲んでいました。30分以内を逃すと台無しになると思っていたからです。今は
            <strong>家に帰ってから夕食と一緒に摂る</strong>
            日も普通にあります。それで結果が悪くなったと感じたことはありません。
          </p>
          <p>
            逆に、明確に差が出たのは<strong>トレ前です</strong>。仕事帰りに何も食べずにジムへ行っていた頃は、後半のセットで明らかに粘れませんでした。16時台におにぎり1個を挟むようにしてから、最後まで同じ重量を扱えるようになり、そのぶん進み方が変わりました。
          </p>
          <p>
            減量中に一度、トレーニング日の糖質まで削ったことがあります。結果は最悪で、扱える重量がみるみる落ち、体重は減っているのに体つきが痩せこけていくだけでした。
            <strong>減らすなら脂質から、トレ日の糖質は守る</strong>
            というのは、そのときの失敗から得た結論です。
          </p>
          <p>
            10年やって残ったのは、結局3つだけでした。1日のタンパク質を確保する、トレ前に糖質を入れる、トレ後1〜2時間以内に食事を1回入れる。細かい秒単位の話は、この3つができてからで十分です。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>優先順位は<strong>総カロリー ＞ 総タンパク質 ＞ 配分 ＞ タイミング</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>トレ<strong>1〜2時間前に糖質</strong>。脂質の多いものは避ける</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>トレ後は<strong>1〜2時間以内に1食</strong>。30分を過ぎても台無しにはならない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>空腹でトレーニングした日だけは<strong>早めに補給する</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>減量中も<strong>トレ日の糖質は守る</strong>。削るのは脂質と休息日から</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>休息日も<strong>タンパク質は同量</strong>。回復するのは休んでいる間</span></li>
          </ol>
          <p>
            タイミングを詰めるより先に、1日のカロリーとPFCが自分の目標に合っているかを確認してください。サクメシなら、体格と活動量から必要な数字と1週間分の献立をまとめて出せます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
