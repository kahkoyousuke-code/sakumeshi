import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/sleep-diet" },
  title: "睡眠とダイエットの関係｜寝不足だと太るって本当？ | サクメシ",
  description:
    "睡眠不足が食欲ホルモンと代謝に与える影響を解説。必要な睡眠時間、寝つきを良くする習慣、夜勤・育児で寝られない人の現実的な対策、睡眠の質を上げる食事まで紹介します。",
};

const TOC = [
  { id: "why", label: "寝不足だと太る4つの理由" },
  { id: "hormone", label: "食欲ホルモンに何が起きているか" },
  { id: "how-long", label: "何時間寝ればいい？" },
  { id: "quality", label: "時間だけでなく「質」も見る" },
  { id: "habits", label: "今夜からできる睡眠習慣7つ" },
  { id: "food", label: "睡眠の質を上げる食事・下げる食事" },
  { id: "cannot", label: "どうしても寝られない人へ" },
  { id: "experience", label: "睡眠5時間の時期に起きていたこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const REASONS = [
  { title: "食欲ホルモンのバランスが崩れる", desc: "食欲を抑える方向のホルモンが減り、食欲を増やす方向のホルモンが増えます。意志の問題ではなく、体の側で「腹が減る」状態が作られます。" },
  { title: "高カロリーなものを選びたくなる", desc: "寝不足のときは、判断や自制に関わる働きが落ちます。同じ空腹でも、サラダではなく菓子パンやラーメンに手が伸びやすくなります。" },
  { title: "回復と代謝に不利になる", desc: "成長ホルモンは睡眠中に多く分泌され、筋肉の修復に関わります。睡眠が短いと回復が追いつかず、トレーニングの効果も出にくくなります。" },
  { title: "起きている時間＝食べられる時間が増える", desc: "単純ですが、これが一番大きいこともあります。夜更かしすれば夜食の機会が生まれます。寝てしまえば食べません。" },
];

const HABITS = [
  { title: "寝る90〜120分前に入浴する", desc: "湯船で深部体温をいったん上げると、下がる過程で自然な眠気が来ます。シャワーだけの人が湯船に変えるだけで、寝つきが変わることは多いです。" },
  { title: "寝る1時間前からスマホを見ない", desc: "光の刺激だけでなく、情報を処理し続けることが問題です。難しければ、せめて充電器を寝室の外に置いてください。" },
  { title: "カフェインは14〜15時まで", desc: "カフェインの効果は5〜8時間続きます。夕方のコーヒーやエナジードリンクが、自覚のないまま夜の睡眠を削っています。" },
  { title: "朝、起きたら光を浴びる", desc: "体内時計がリセットされ、その約14〜16時間後に自然な眠気が来ます。カーテンを開けるだけでも効果があります。" },
  { title: "起きる時間を固定する", desc: "寝る時間より起きる時間のほうがリズムを作ります。休日も平日との差を2時間以内に収めると、月曜が楽になります。" },
  { title: "寝酒をやめる", desc: "アルコールは寝つきを良くするように感じますが、後半の睡眠を浅くします。夜中に目が覚める人は、まずここを疑ってください。" },
  { title: "寝室を暗く・涼しくする", desc: "光と暑さは睡眠を分断します。遮光カーテンとエアコンの設定を変えるだけで、朝の目覚めが変わることがあります。" },
];

const FAQS = [
  {
    q: "週末に寝だめすれば取り返せる？",
    a: "ある程度は回復しますが、平日の不足を完全には埋められません。それ以上に、起きる時間が大きくずれると体内時計が乱れ、月曜以降の食欲が不安定になります。休日の起床は平日プラス2時間以内に収めるのが現実的です。",
  },
  {
    q: "昼寝は効果ある？",
    a: "有効です。ただし20〜30分以内、15時までに。それ以上寝ると深い睡眠に入ってしまい、目覚めが悪くなるうえ夜の寝つきにも影響します。",
  },
  {
    q: "寝る前にお腹が空いて眠れない",
    a: "我慢して眠れないほうが翌日に響きます。温かい味噌汁、無糖ヨーグルト、ゆで卵1個など、消化の負担が軽くタンパク質のあるものを少量食べてください。ラーメンや揚げ物は逆効果です。",
  },
  {
    q: "睡眠時間を削ってジムに行くのはあり？",
    a: "睡眠が6時間を切っているなら、その日はやめて寝るほうが結果は良くなります。回復が追いつかない状態でのトレーニングは、効果が出にくいうえに翌日の食欲も乱します。",
  },
  {
    q: "何をしても眠れない",
    a: "生活習慣を整えても改善しない不眠が続く場合、睡眠時無呼吸などの睡眠障害が背景にあることがあります。日中の強い眠気やいびきの指摘があるなら、医療機関に相談してください。",
  },
];

export default function SleepDiet() {
  return (
    <ColumnShell
      slug="sleep-diet"
      h1="睡眠とダイエットの関係｜寝不足だと太るって本当？"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「食事も運動も頑張っているのに、なぜか痩せない」</p>
        <p>
          そういうときに最初に確認したいのが睡眠です。
          <strong>睡眠不足は、食事の乱れと同じくらい減量を止めます</strong>
          。自分も、仕事が忙しくて睡眠5時間を切っていた時期は、食事管理をしていても体重がまったく動きませんでした。
        </p>
        <p>この記事では、なぜ寝ないと太るのかという仕組みと、今夜からできる対策、そしてどうしても寝られない人向けの現実的な代替案までまとめます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          寝不足だと太る4つの理由
        </h2>
        <div className="space-y-4">
          <p>睡眠不足と体重増加の関連は、多くの調査で報告されています。仕組みとしては主に4つです。</p>
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
          <p>
            重要なのは、この4つが
            <strong>すべて「食べる量が増える」方向に働く</strong>
            ということです。「睡眠を削って運動する」という発想は、ダイエットにおいては割に合いません。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="hormone" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食欲ホルモンに何が起きているか
        </h2>
        <div className="space-y-4">
          <p>食欲には複数のホルモンが関わっていますが、睡眠との関係でよく挙がるのが次の2つです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ホルモン</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">働き</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">睡眠不足のとき</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">レプチン</td>
                  <td className="p-2 border border-green-100">満腹を知らせ、食欲を抑える</td>
                  <td className="p-2 border border-green-100 text-red-600 font-medium">減る方向に働く</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">グレリン</td>
                  <td className="p-2 border border-green-100">空腹を知らせ、食欲を増やす</td>
                  <td className="p-2 border border-green-100 text-red-600 font-medium">増える方向に働く</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            つまり寝不足の日は、
            <strong>「満腹だと感じにくく、空腹だと感じやすい」状態</strong>
            が同時に起きています。前日と同じ量を食べても足りないと感じるのは、気のせいではありません。
          </p>
          <p className="text-sm text-gray-500">
            補足：ここに書いたのは一般的な傾向で、影響の大きさには個人差があります。ホルモンの数値そのものより、「寝不足の翌日は食べすぎやすい」という前提で予定を組むほうが実用的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="how-long" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          何時間寝ればいい？
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">成人の目安</p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">7時間</p>
                <p className="text-xs text-gray-500">前後 / 日</p>
              </div>
              <p className="text-sm text-gray-500">（6時間未満が続くと食欲の乱れが出やすくなる）</p>
            </div>
          </div>
          <p>
            必要な睡眠時間には個人差があり、年齢によっても変わります。目安は
            <strong>6.5〜8時間</strong>
            ですが、大事なのは時間数そのものより
            <strong>日中に強い眠気がないか</strong>
            です。昼過ぎに耐えがたい眠気が来るなら、足りていないサインと考えてください。
          </p>
          <p>
            忙しくて確保できない人は、まず
            <strong>「今より30分早く寝る」</strong>
            から始めてください。その30分のスマホ時間を睡眠に回すだけで、翌日の食欲が変わることを実感できるはずです。7時間を目標にして挫折するより、30分の前倒しを毎日続けるほうが結果につながります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="quality" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          時間だけでなく「質」も見る
        </h2>
        <div className="space-y-4">
          <p>7時間寝ているのに疲れが取れない、という場合は質のほうに問題があります。次のような項目が目安になります。</p>
          <div className="space-y-2">
            {[
              "布団に入ってから30分以内に眠れているか",
              "夜中に何度も目が覚めないか",
              "朝、目覚まし前後に自然に起きられるか",
              "起きてすぐ「寝た気がしない」と感じないか",
              "日中、座っていると耐えられない眠気が来ないか",
            ].map((item) => (
              <div key={item} className="flex gap-2 bg-white rounded-lg p-3 border border-green-100">
                <span className="text-green-500 shrink-0">□</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            当てはまらない項目が多く、生活習慣を整えても改善しない場合は、睡眠時無呼吸症候群などが背景にあることがあります。いびきや日中の強い眠気を指摘されたことがあるなら、医療機関の受診を検討してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          今夜からできる睡眠習慣7つ
        </h2>
        <div className="space-y-3">
          {HABITS.map((item, i) => (
            <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">{i + 1}. {item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          全部やろうとすると続きません。<strong>まず1つだけ</strong>選んでください。おすすめは「起きる時間を固定する」です。寝る時間はコントロールしづらくても、起きる時間は決められます。
        </p>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="food" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          睡眠の質を上げる食事・下げる食事
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">⭕ 睡眠に良い</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・<strong>夕食は寝る3時間前まで</strong>に済ませる</li>
                <li>・トリプトファンを含む食品（乳製品・大豆製品・バナナ・ナッツ）</li>
                <li>・温かい味噌汁やスープ</li>
                <li>・夕食の糖質を適量摂る（極端に抜くと眠りが浅くなることがある）</li>
                <li>・朝食をしっかり食べる（体内時計のリセットに関わる）</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 睡眠に悪い</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・寝る直前の食事（消化のために眠りが浅くなる）</li>
                <li>・夕方以降のカフェイン</li>
                <li>・アルコール、とくに寝酒</li>
                <li>・脂っこい夜食（ラーメン・揚げ物）</li>
                <li>・寝る前の大量の水分（夜中に目が覚める）</li>
              </ul>
            </div>
          </div>
          <p>
            夜どうしても空腹で眠れないときは、我慢して眠れないより
            <strong>温かい味噌汁・無糖ヨーグルト・ゆで卵など軽いもの</strong>
            を選んで食べたほうが、翌日を含めた合計では有利です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="cannot" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          どうしても寝られない人へ
        </h2>
        <div className="space-y-4">
          <p>
            夜勤、乳児の育児、介護——生活の都合で睡眠時間を確保できない人はいます。その状況で「7時間寝ましょう」と言われても意味がありません。
            <strong>寝られない前提で組み立てる</strong>方法を挙げます。
          </p>
          <div className="space-y-3">
            {[
              { title: "食事を先に決めておく", desc: "寝不足の日は判断力が落ちます。その日に何を食べるかを、寝不足になる前に決めておく。コンビニで悩む状況を作らないのが最大の防御です。" },
              { title: "タンパク質を意識的に増やす", desc: "満腹感が続きやすくなるので、食欲が乱れている日の助けになります。ゆで卵やサラダチキンを常備しておくと選択肢になります。" },
              { title: "20分の仮眠を挟む", desc: "まとまった睡眠が取れなくても、短い仮眠は日中のパフォーマンスを支えます。15時までに20分以内で。" },
              { title: "減量ペースを緩める", desc: "睡眠が確保できない時期に無理な赤字を作ると、食欲が抑えられずに反動が来ます。その期間は維持を目標にして、落とすのは条件が整ってからにするほうが確実です。" },
              { title: "光のタイミングを揃える", desc: "夜勤の場合、起きたい時間に明るく、寝る前は暗く。時刻より光の順序でリズムを作ります。" },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">✓ {item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            寝られない時期に減量が進まないのは、やり方が悪いからではありません。条件が整うまで維持に切り替えるのは、後退ではなく戦略です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          睡眠5時間の時期に起きていたこと
        </h2>
        <div className="space-y-4">
          <p>
            仕事が立て込んで、就寝が毎日2時を回っていた時期があります。食事は記録をつけて管理していたので、数字の上では赤字が出ているはずでした。それでも
            <strong>体重は1ヶ月ほとんど動きませんでした</strong>。
          </p>
          <p>
            記録を見返して分かったのは、<strong>夕方以降の間食が増えていた</strong>ことです。自分では「今日は疲れたから」と思っていたのですが、その「疲れたから」がほぼ毎日でした。管理しているつもりで、管理から漏れているものが積み上がっていた形です。
          </p>
          <p>
            もうひとつが、選ぶものの変化です。同じ空腹でも、寝ている時期はサラダチキンとおにぎりを選んでいたのに、寝不足の時期は明らかに菓子パンとカフェオレに寄っていました。
            <strong>意志で抑えようとしても、判断そのものが変わってしまう</strong>という感覚です。
          </p>
          <p>
            結局、仕事の山を越えて睡眠が6時間半に戻ったとき、食事の内容を特に変えないまま体重が動き出しました。あの1ヶ月で学んだのは、
            <strong>寝られない時期に無理して減らそうとしない</strong>ということです。維持でしのいで、条件が戻ってから落とすほうが、トータルでは早く着きます。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>寝不足は<strong>食欲を増やし、選ぶものまで変える</strong>。意志の問題ではない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>目安は<strong>6.5〜8時間</strong>。判断材料は日中の眠気</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>まずは<strong>「30分早く寝る」「起きる時間を固定する」</strong>の2つから</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>夕食は寝る3時間前まで・カフェインは14時まで・寝酒はやめる</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>寝られない時期は<strong>減量ではなく維持に切り替える</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>改善しない不眠や強い日中の眠気は<strong>医療機関に相談する</strong></span></li>
          </ol>
          <p>
            食事・運動・睡眠のうち、睡眠だけは「頑張る」ことでは解決しません。今夜、スマホを置く時間を30分早めるところから始めてみてください。
          </p>
          <p>
            食事のほうを整えたい場合は、サクメシで自分に必要なカロリーとPFC、1週間分の献立を作れます。寝不足の日に迷わないよう、あらかじめ決めておくのにも使えます。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
