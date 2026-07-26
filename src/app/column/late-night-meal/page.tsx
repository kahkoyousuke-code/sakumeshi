import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/late-night-meal" },
  title: "夜遅い食事で太らない方法｜帰宅が22時以降の人へ | サクメシ",
  description:
    "残業や夜勤で夕食が遅くなる人向けに、夜遅く食べると太る本当の理由と、分食・メニュー選び・翌朝の調整で現実的に対処する方法を解説します。",
};

const TOC = [
  { id: "why", label: "夜遅い食事が太りやすい3つの理由" },
  { id: "myth", label: "「20時以降は食べるな」は現実的でない" },
  { id: "split", label: "最強の対策は「分食」" },
  { id: "menu", label: "夜遅くに食べるならこれ" },
  { id: "conveni", label: "コンビニで組む夜食セット" },
  { id: "morning", label: "翌朝のリセット" },
  { id: "ng", label: "やってはいけない対処" },
  { id: "summary", label: "まとめ" },
];

export default function LateNightMeal() {
  return (
    <ColumnShell
      slug="late-night-meal"
      h1="夜遅い食事で太らない方法｜帰宅が22時以降の人へ"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「夜遅く食べると太る」——分かっています。でも帰宅が22時なら、その時間に食べるしかありません。</p>
        <p>
          ダイエット記事の多くは「20時までに夕食を済ませましょう」で終わりますが、それができる人はそもそも困っていません。この記事は<strong>遅くなる前提で、どうするか</strong>だけを扱います。
        </p>
        <p>結論を先に言うと、鍵は<strong>食べる時間より、1日の総量と夕食の中身</strong>です。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          夜遅い食事が太りやすい3つの理由
        </h2>
        <div className="space-y-4">
          <p>「夜だから脂肪になる」という単純な話ではありません。実際に効いているのはこの3つです。</p>
          <div className="space-y-3">
            {[
              { n: "1", title: "空腹の時間が長すぎて食べすぎる", desc: "昼12時に食べて夜23時なら11時間の空白。ここまで空くと食欲ホルモンが振り切れ、必要以上に食べてしまう。これが最大の要因。" },
              { n: "2", title: "食べたあとすぐ寝るので消費されない", desc: "食後は本来、消化や活動でエネルギーが使われる。食べて1時間で就寝すると、その分がまるごと余りやすい。" },
              { n: "3", title: "疲れているので選ぶものが重くなる", desc: "遅い時間ほど、揚げ物・ラーメン・菓子パンといった高カロリーなものを選びがち。判断力が落ちているので当然の反応。" },
            ].map((item) => (
              <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-green-700">{item.n}. {item.title}</span>
                </p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            並べてみると分かりますが、<strong>3つとも時間そのものが原因ではありません</strong>。空腹の長さ、量、選ぶもの。全部こちらでコントロールできる要素です。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="myth" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「20時以降は食べるな」は現実的でない
        </h2>
        <div className="space-y-4">
          <p>
            このアドバイスに従って夕食を抜くと、多くの場合こうなります。
          </p>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100 space-y-2">
            <p className="text-sm text-gray-700">22時に帰宅 → 我慢して寝る → <strong className="text-red-700">空腹で寝つけない</strong> → 深夜に耐えきれず菓子パン → 罪悪感</p>
            <p className="text-sm text-gray-700">あるいは、翌朝に反動が来て<strong className="text-red-700">朝から食べすぎる</strong>。結局1日の合計は変わらない</p>
          </div>
          <p>
            夕食を抜いて成功するのは、意志が強い人ではなく<strong>そもそも空腹にならない人</strong>だけです。多くの人にとって、抜くのは最も再現性の低い方法です。
          </p>
          <p>
            体重を決めるのは<strong>1日・1週間の合計カロリー</strong>です。同じ1,800kcalなら、20時に食べても23時に食べても、脂肪になる量が劇的に変わるわけではありません。時間帯より、遅い時間に「余計に多く・重いものを」食べてしまうことのほうが問題なのです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="split" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          最強の対策は「分食」
        </h2>
        <div className="space-y-4">
          <p>
            夕食を2回に分ける。これが、遅い帰宅組にとって圧倒的に効く方法です。
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">① 夕方（17〜19時）に主食</p>
              <p className="text-sm text-gray-600 mb-2">
                職場や移動中に、おにぎり1個・サンドイッチ・バナナなど<strong>200〜300kcal</strong>を先に入れる。
              </p>
              <p className="text-sm text-gray-600">狙いは血糖値を落としきらないこと。ここで暴走を防ぐ。</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">② 帰宅後におかず</p>
              <p className="text-sm text-gray-600 mb-2">
                主食は抜くか少量にして、<strong>タンパク質＋野菜・汁物</strong>を中心に。
              </p>
              <p className="text-sm text-gray-600">すでに空腹が和らいでいるので、この量で自然に満足できる。</p>
            </div>
          </div>
          <p>
            重要なのは、<strong>これは食事を増やしているのではなく、分けているだけ</strong>ということ。1日の合計は変わりません。むしろ「ドカ食い分」が消えるので減ります。
          </p>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">夕方に食べるものの候補</strong><br />
              おにぎり1個／バナナ1本／プロテインドリンク／ゆで卵2個／ヨーグルト／素焼きナッツひとつかみ。デスクに置いておけるものが理想です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="menu" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          夜遅くに食べるならこれ
        </h2>
        <div className="space-y-4">
          <p>遅い時間の食事は、<strong>消化に重くない・タンパク質が入る・塩分が高すぎない</strong>の3条件で選びます。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ 向いている</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・湯豆腐・冷奴＋納豆</li>
                <li>・具だくさんの味噌汁・スープ</li>
                <li>・鶏むね肉やささみの蒸し物</li>
                <li>・白身魚のホイル焼き</li>
                <li>・野菜たっぷりの鍋</li>
                <li>・卵料理（オムレツ・茶碗蒸し）</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-red-600 mb-2">△ 避けたい</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ラーメン（塩分・脂質・糖質すべて高い）</li>
                <li>・揚げ物全般（消化に時間がかかる）</li>
                <li>・焼肉・脂の多い肉</li>
                <li>・大盛りの丼もの</li>
                <li>・菓子パン・スナック</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            なお、<strong>就寝の2〜3時間前までに食べ終える</strong>と睡眠の質が保ちやすくなります。難しければ、せめて量を軽くするだけでも寝つきは変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="conveni" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          コンビニで組む夜食セット
        </h2>
        <div className="space-y-4">
          <p>自炊する体力がない日のための、現実的な組み合わせです。</p>
          <div className="space-y-3">
            {[
              { from: "軽めセット（約300kcal）", to: "サラダチキン＋インスタント味噌汁＋カット野菜", point: "タンパク質と汁物で満足感。主食なしでも意外といける" },
              { from: "しっかりセット（約450kcal）", to: "サラダチキン＋おにぎり1個＋野菜スープ", point: "夕方に何も食べられなかった日はこれくらい入れていい" },
              { from: "温まりたい日（約400kcal）", to: "おでん（大根・卵・こんにゃく・厚揚げ）", point: "汁は飲みすぎない。低カロリーで満足感が高い定番" },
              { from: "疲れ果てた日（約350kcal）", to: "冷奴＋納豆＋ゆで卵＋わかめスープ", point: "調理ゼロ。皿すら使わなくていい" },
            ].map((item) => (
              <div key={item.from} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-green-700">{item.from}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-gray-800">{item.to}</span>
                </p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            カップ麺は塩分が非常に高く、翌朝のむくみに直結します。どうしても食べるなら<strong>汁を残す</strong>だけで2〜3g減らせます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="morning" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          翌朝のリセット
        </h2>
        <div className="space-y-4">
          <p>夜に食べすぎた翌朝の正解は、<strong>抜くことではありません</strong>。</p>
          <div className="space-y-2">
            {[
              { title: "朝食は抜かない（軽くていい）", desc: "抜くと昼にまた空腹が振り切れ、同じサイクルを繰り返す。ヨーグルトとバナナ程度で十分。" },
              { title: "水をしっかり飲む", desc: "夜に塩分を摂った翌朝はむくみやすい。水分を減らすとかえって溜め込むので、普通に飲む。" },
              { title: "体重は気にしない", desc: "翌朝の1〜2kg増は水分。脂肪は1日でそこまで増えない。週平均で見れば流れは分かる。" },
              { title: "昼は普通に食べる", desc: "「昨日食べすぎたから昼も抜く」は夜の暴走を確定させる。帳尻は1週間で合わせる。" },
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
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やってはいけない対処
        </h2>
        <div className="space-y-3">
          {[
            { habit: "夕食を完全に抜いて寝る", desc: "空腹で眠りが浅くなり、翌日の食欲が増える。深夜の過食に繋がるケースが最も多いパターン。" },
            { habit: "夜は野菜だけにする", desc: "タンパク質が不足すると筋肉が落ちる。夜こそタンパク質は確保したい。" },
            { habit: "お酒で空腹をごまかす", desc: "アルコール自体にカロリーがあるうえ、判断力が落ちて締めの一杯まで行きやすい。空腹時の飲酒は最も危ない。" },
            { habit: "エナジードリンクで乗り切る", desc: "糖分が多い製品が多く、睡眠の質も落ちる。翌日の食欲コントロールが効かなくなる。" },
            { habit: "夜遅い日だけ完璧を目指す", desc: "疲れている日に厳しいルールを課しても続かない。「重いものを避けて量を控える」程度で十分合格。" },
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
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>太る原因は時間そのものではなく、<strong>長すぎる空腹・量・選ぶもの</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>「20時以降は食べない」は多くの人に<strong>再現性がない</strong>。抜くと反動が来る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>最も効くのは<strong>分食</strong>。夕方に主食、帰宅後におかず</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>夜は<strong>タンパク質＋汁物・野菜</strong>。揚げ物とラーメンだけ避ければ十分</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>翌朝は<strong>抜かない</strong>。帳尻は1日ではなく1週間で合わせる</span></li>
          </ol>
          <p>
            疲れて帰った日に「何を食べるか」を考えるのが、実は一番の負担です。サクメシなら7日分の献立を先にまとめて作れるので、帰宅後は決まったものを用意するだけになります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
