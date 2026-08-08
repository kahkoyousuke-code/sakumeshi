import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/no-rebound" },
  title: "リバウンドしない食習慣｜落とした体重を維持する食事の考え方 | サクメシ",
  description:
    "リバウンドが起きる仕組みと、維持期の食事の作り方を解説。カロリーを段階的に戻すスケジュール、体重が戻り始めたときの対処、維持期に何をやめて何を残すかまで紹介します。",
};

const TOC = [
  { id: "why-rebound", label: "なぜリバウンドするのか" },
  { id: "adaptation", label: "体は「減った状態」に抵抗する" },
  { id: "mindset", label: "維持期という考え方に切り替える" },
  { id: "maintenance-calories", label: "維持期の目標カロリー" },
  { id: "schedule", label: "カロリーを戻す12週間のスケジュール" },
  { id: "rule", label: "戻り始めたときの「+2kgルール」" },
  { id: "habits", label: "維持できている人がやっていること" },
  { id: "experience", label: "自分がリバウンドしたときの話" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const CAUSES = [
  {
    title: "① 消費カロリーが落ちた状態で元の食事に戻した",
    desc: "体重が減れば、体を維持するのに必要なエネルギーも減ります。10kg落ちた体は、10kg重かった頃より消費が少ない。ここに減量前と同じ食事を戻せば、当然また増えます。",
  },
  {
    title: "② 筋肉を削りながら減量してしまった",
    desc: "タンパク質不足のまま極端にカロリーを削ると、脂肪と一緒に筋肉も落ちます。除脂肪量が減った分だけ消費カロリーの土台が下がり、同じ食事でも太りやすい状態になります。",
  },
  {
    title: "③ 「終わったら好きに食べる」前提でやっていた",
    desc: "期限を区切ったガマンとして減量を組み立てると、達成した瞬間に反動が来ます。減量中に一度も食べなかったものほど、解禁後の反動は大きくなります。",
  },
];

const SCHEDULE = [
  { week: "1〜2週目", cal: "減量期 +100kcal", note: "まずは主食を少し戻す。体重は0.5〜1kg増えることがあるが、大半は水分とグリコーゲン" },
  { week: "3〜4週目", cal: "さらに +100kcal", note: "体重が横ばいなら次へ進む。増え続けているなら1段階前で止める" },
  { week: "5〜8週目", cal: "さらに +100〜200kcal", note: "このあたりでTDEE−100〜200kcalに到達する人が多い" },
  { week: "9〜12週目", cal: "TDEEと同等まで", note: "体重が2週間動かなければ、そこが今の維持カロリー" },
];

const HABITS = [
  { habit: "定番の「維持食」を3〜5パターン持つ", desc: "毎回考えると疲れます。作り慣れた組み合わせを決めておけば、忙しい日でも大きく崩れません。鶏むね×ブロッコリー×ごはん、鮭×味噌汁×納豆、といった程度でかまいません。" },
  { habit: "週1回、決まった曜日・時間に体重を量る", desc: "毎日量ると水分の増減に振り回されます。朝・トイレ後・同じ服装、を週1で固定するほうが傾向を掴めます。" },
  { habit: "タンパク質だけは減量期と同じ量を維持する", desc: "維持期に真っ先に減りがちなのがタンパク質です。減量期に確保していた量（体重1kgあたり1.2〜1.5g程度）はそのまま続けます。" },
  { habit: "筋トレを週2〜3回続ける", desc: "回数を増やす必要はありません。維持期の目的は伸ばすことではなく、落とさないこと。自重でも十分です。" },
  { habit: "食べる日を「予定に入れる」", desc: "外食も飲み会も、あらかじめ予定として組み込んでおけば前後で調整できます。突発的に食べるのが一番コントロールを失います。" },
];

const FAQS = [
  {
    q: "リバウンドしてしまったら、また同じ減量をやり直せばいい？",
    a: "同じやり方で戻ったのなら、同じやり方を繰り返しても同じ結果になりやすいです。落とした幅より「どうやって落としたか」を見直してください。極端な制限だったなら、次はペースを落として、日常生活に混ぜられる範囲でやるほうが結果的に早くなります。",
  },
  {
    q: "維持期でも体重は毎日変動する。どこから「リバウンド」？",
    a: "1〜2kgの日内変動はむくみや腸の内容物で普通に起きます。判断材料にするのは週の平均です。週平均が2週続けて上がっているなら対処のサインと考えてください。",
  },
  {
    q: "チートデイは維持期にも必要？",
    a: "維持期は減量期ほど赤字を作らないので、意図的なチートデイの必要性は下がります。むしろ「食べたいものを週の予算の中に組み込む」ほうが管理しやすいです。",
  },
  {
    q: "何年も維持している人は、ずっと計算し続けているの？",
    a: "毎食計算している人は少数派です。多くは最初の数ヶ月で自分の定番メニューのカロリー感覚を身につけて、そのあとは体重の傾向だけを見ています。計算はずっと続けるものではなく、感覚を作るための期間限定の作業と考えるとよいです。",
  },
];

export default function NoRebound() {
  return (
    <ColumnShell
      slug="no-rebound"
      h1="リバウンドしない食習慣｜落とした体重を維持する食事の考え方"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「頑張って5kg落としたのに、3ヶ月でまた元に戻った」</p>
        <p>
          これはよくある話で、意志が弱かったからではありません。
          <strong>減量が終わった瞬間から始まる「維持期」を設計していなかった</strong>
          、というだけです。
        </p>
        <p>
          リバウンドには体の側の理由と、やり方の側の理由の両方があります。この記事では仕組みを押さえたうえで、カロリーを戻していく具体的なスケジュールと、戻り始めたときの対処までまとめます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why-rebound" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          なぜリバウンドするのか
        </h2>
        <div className="space-y-4">
          <p>原因は大きく3つに整理できます。</p>
          <div className="space-y-3">
            {CAUSES.map((item) => (
              <div key={item.title} className="bg-red-50 rounded-xl p-4 border border-red-100">
                <p className="font-bold text-red-700 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            ①がとくに見落とされます。減量前に2,400kcalで維持できていた人が10kg落とすと、維持カロリーはそれより低い水準に移動します。
            <strong>ゴールは「元の食事に戻すこと」ではなく「新しい体重に合った食事に移ること」</strong>
            です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="adaptation" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          体は「減った状態」に抵抗する
        </h2>
        <div className="space-y-4">
          <p>
            体重が減ると、体重相応に消費が下がるだけでなく、
            <strong>予測される以上に消費が下がったり、食欲が強まったりする</strong>
            ことが知られています。体脂肪が減ると食欲を抑える方向のホルモンが減り、無意識の動き（そわそわ動く、姿勢を保つ）も省エネ寄りになります。
          </p>
          <p>
            つまり減量直後というのは、<strong>もっとも食欲が強く、もっとも消費が低い</strong>時期にあたります。ここで一気に食事を戻すのが最悪の組み合わせで、リバウンドが「終わった直後」に集中するのはこのためです。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="font-bold text-amber-800 text-sm mb-1">⚠ 減量終了直後こそ一番危ない</p>
            <p className="text-sm text-gray-600">
              「目標達成のごほうび」を1日で終わらせず1〜2週間続けてしまうと、そこから元のペースに戻すのがかなり難しくなります。ごほうびを設けるなら、日を決めて1食にしてください。
            </p>
          </div>
          <p className="text-sm text-gray-500">
            なお、この適応は永久ではなく、体重が安定した状態を保つことで徐々に落ち着いていきます。維持期を「早く終わらせたい期間」ではなく「体を慣らす期間」と捉えるのが現実的です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="mindset" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          維持期という考え方に切り替える
        </h2>
        <div className="space-y-4">
          <p>
            まず「ダイエット終了」という言葉を捨てます。目標体重に達したあとにやるのは、管理をやめることではなく
            <strong>「減らす」から「維持する」へのモード変更</strong>です。
          </p>
          <p>ただし維持期は減量期よりずっと楽です。減量期に必要だったもののうち、維持期でも残すもの・やめていいものを整理するとこうなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">項目</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">維持期</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">理由</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">タンパク質の確保</td>
                  <td className="p-2 border border-green-100 text-center font-bold text-green-700">残す</td>
                  <td className="p-2 border border-green-100">筋肉量＝消費カロリーの土台を守るため</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">筋トレ</td>
                  <td className="p-2 border border-green-100 text-center font-bold text-green-700">残す</td>
                  <td className="p-2 border border-green-100">同上。週2〜3回で十分</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">体重の記録</td>
                  <td className="p-2 border border-green-100 text-center font-bold text-green-700">残す（頻度は落とす）</td>
                  <td className="p-2 border border-green-100">戻り始めに早く気づくため</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">毎食のカロリー計算</td>
                  <td className="p-2 border border-green-100 text-center text-gray-500">やめてよい</td>
                  <td className="p-2 border border-green-100">定番メニューの感覚ができていれば不要</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">外食・飲み会を避ける</td>
                  <td className="p-2 border border-green-100 text-center text-gray-500">やめてよい</td>
                  <td className="p-2 border border-green-100">前後で調整できれば問題にならない</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="maintenance-calories" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          維持期の目標カロリー
        </h2>
        <div className="space-y-4">
          <p>維持期の目標は<strong>TDEE（1日の総消費カロリー）とほぼ同等</strong>です。減量期のように赤字を作る必要はありません。</p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">フェーズ別のカロリー設定</p>
            <div className="space-y-2">
              {[
                { phase: "減量期", cal: "TDEE − 300〜500kcal", color: "text-red-600" },
                { phase: "移行期（数週間〜3ヶ月）", cal: "TDEE − 100〜200kcal", color: "text-orange-600" },
                { phase: "完全維持期", cal: "TDEE と同等", color: "text-green-600" },
              ].map((item) => (
                <div key={item.phase} className="flex items-center justify-between bg-white rounded-lg p-3 border border-green-100">
                  <span className="text-sm font-medium">{item.phase}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.cal}</span>
                </div>
              ))}
            </div>
          </div>
          <p>
            注意点として、
            <strong>減量後のTDEEは減量前より低い</strong>
            ので、必ず今の体重で計算し直してください。減量前の数字のまま維持期に入るのが、よくある失敗です。
          </p>
          <p className="text-sm text-gray-500">※ TDEEはサクメシの診断で、今の体重・活動量から自動計算されます。</p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="schedule" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          カロリーを戻す12週間のスケジュール
        </h2>
        <div className="space-y-4">
          <p>いきなりTDEEまで戻すと、体が対応する前に余剰が出ます。2週間ごとに100kcal程度ずつ増やしていくのが安全です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">時期</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">増やす量</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">見るポイント</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {SCHEDULE.map((row, i) => (
                  <tr key={row.week} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="p-2 border border-green-100 font-medium whitespace-nowrap">{row.week}</td>
                    <td className="p-2 border border-green-100 whitespace-nowrap">{row.cal}</td>
                    <td className="p-2 border border-green-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            増やす100kcalは、おにぎり半分・食パン半枚・卵1個半くらいの量です。
            <strong>増やす先は主食かタンパク質にして、お菓子や飲み物で増やさない</strong>
            のがコツです。同じ100kcalでも満足感と栄養が違います。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="font-bold text-green-700 text-sm mb-1">増やしたのに体重が動かないとき</p>
            <p className="text-sm text-gray-600">
              それは順調です。維持カロリーがまだ上にあるということなので、そのまま次の段階に進んでください。むしろ「増やしても増えない」状態を作れるのが、この進め方の目的です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="rule" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          戻り始めたときの「+2kgルール」
        </h2>
        <div className="space-y-4">
          <p>
            維持期でいちばん効くのは、
            <strong>戻ったときに何をするかをあらかじめ決めておくこと</strong>
            です。おすすめはシンプルな1本の線を引く方法です。
          </p>
          <div className="bg-white rounded-xl p-5 border border-green-100 space-y-3">
            <p className="text-sm font-bold text-green-700">やり方</p>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">1.</span><span>維持したい体重を決める（例：68kg）</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">2.</span><span>そこに +2kg のライン（70kg）を引く</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">3.</span><span>週平均がラインを超えたら、2〜3週間だけ減量期の食事に戻す</span></li>
              <li className="flex gap-2"><span className="font-bold text-green-700 shrink-0">4.</span><span>戻ったら、また維持カロリーに戻す</span></li>
            </ol>
          </div>
          <p>
            2kgならほとんど生活を変えずに戻せます。これが5kg、8kgと積み上がってから動こうとすると、また本格的な減量が必要になり、心理的なハードルが跳ね上がります。
            <strong>小さいうちに小さく戻す</strong>——これがリバウンドしない人がやっていることです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="habits" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          維持できている人がやっていること
        </h2>
        <div className="space-y-3">
          {HABITS.map((item) => (
            <div key={item.habit} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">✓ {item.habit}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          自分がリバウンドしたときの話
        </h2>
        <div className="space-y-4">
          <p>
            減量を始めた頃、自分は何度もこれをやりました。パターンはいつも同じで、
            <strong>目標体重に届いた翌週から、記録をつけるのをやめる</strong>
            。それだけです。食事を派手に変えたつもりはないのに、2〜3ヶ月後には元の位置に戻っていました。
          </p>
          <p>
            あとから振り返ると、原因は「戻した量」ではなく「見なくなったこと」でした。体重を量らない期間が続くと、2kg増えても気づきません。気づいたときには5kg以上増えていて、そこからまた一からやり直しになります。
          </p>
          <p>
            最終的にうまく維持できるようになったきっかけは、目標を「◯kgまで落とす」から
            <strong>「◯kg以下で1年過ごす」</strong>
            に書き換えたことでした。ゴールが期間になった瞬間、終わりがなくなるので、続けられるやり方しか選べなくなります。結果的に、極端な制限を自分から外すようになりました。
          </p>
          <p>
            もうひとつ効いたのが、上で書いた+2kgラインです。数字を先に決めておくと、超えたときに「どうしよう」と悩まずに済みます。悩む時間がないぶん、動き出しが早くなります。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>減量後は<strong>「元の食事」ではなく「新しい体重に合った食事」</strong>に移る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>減量直後は食欲が強く消費が低い。<strong>ごほうびは1食で終わらせる</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>カロリーは<strong>2週ごとに100kcalずつ</strong>戻し、3ヶ月かけてTDEEへ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>タンパク質と筋トレは維持期も残す</strong>。ここが消費カロリーの土台</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>+2kgのラインを先に引く</strong>。超えたら2〜3週だけ減量食に戻す</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>毎食の計算はやめてよい。ただし<strong>体重を見るのはやめない</strong></span></li>
          </ol>
          <p>
            リバウンドを防ぐのに特別な方法は要りません。今の体重に合ったカロリーを知り、そこから大きく外れていないかを時々確認する。やることはそれだけです。
          </p>
          <p>
            サクメシでは「現状維持」を目標に設定してプランを作ることもできます。減量が終わったタイミングで、今の体重で作り直してみてください。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
