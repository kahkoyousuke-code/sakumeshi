import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";
import { columnMetadata } from "@/lib/metadata";

export const metadata: Metadata = columnMetadata("eating-out-92kg", {
  title:
    "92kgのとき、外食で何を食べていたか｜メニューより回数が変わった話 | サクメシ",
  description:
    "運営者が92kgだった頃の外食メニューを実際に書き出し、カロリーを積み上げてみました。ヘルシーなメニューを選ぶ努力より、外食する場面そのものが減ったことのほうが効いた、という実体験を数字で検証します。",
});

const TOC = [
  { id: "menu", label: "92kgの頃、外食で食べていたもの" },
  { id: "stack", label: "1日ぶんを積み上げてみる" },
  { id: "choose", label: "「選び方」で削れる量には上限がある" },
  { id: "scene", label: "実際に効いたのは、場面が消えたこと" },
  { id: "lunch", label: "昼を弁当に置き換えた（胸肉とおにぎり）" },
  { id: "honest", label: "この弁当を勧めない理由" },
  { id: "still", label: "それでも外食するときにやっていること" },
  { id: "try", label: "同じことを試すなら" },
  { id: "summary", label: "まとめ" },
];

/** 当時よく食べていたものの、おおよそのエネルギー。商品・店で幅があるため上下を併記する。 */
const OLD_MENU = [
  {
    scene: "昼",
    item: "コンビニの弁当（唐揚げ弁当など）",
    kcal: "700〜900kcal",
    note: "ご飯の量が多く、揚げ物が主菜のもの",
  },
  {
    scene: "昼",
    item: "カップ麺 ＋ おにぎり1個",
    kcal: "約530kcal",
    note: "カップ麺約350kcal、おにぎり約180kcal",
  },
  {
    scene: "昼",
    item: "菓子パン・惣菜パンを2個",
    kcal: "600〜800kcal",
    note: "1個300〜400kcalのものが多い",
  },
  {
    scene: "定食屋",
    item: "ご飯を大盛りにする",
    kcal: "＋約150kcal",
    note: "普通盛り150g→大盛り250gの差ぶん",
  },
  {
    scene: "夜",
    item: "居酒屋で数杯（ビール中ジョッキ換算）",
    kcal: "600〜900kcal",
    note: "酒だけで。つまみは別",
  },
  {
    scene: "深夜0時すぎ",
    item: "〆のラーメン（こってり系・トッピングあり）",
    kcal: "800〜1,100kcal",
    note: "スープを飲み干すかどうかでも変わる",
  },
];

/** メニュー選びで削れる量と、回数そのものを削ったときの量の比較。 */
const REDUCTION = [
  { how: "ラーメンをこってり系からあっさり系に変える", cut: "−100〜200kcal" },
  { how: "ラーメンの替え玉・トッピングをやめる", cut: "−150〜300kcal" },
  { how: "ご飯を大盛りから普通盛りに戻す", cut: "−約150kcal" },
  { how: "揚げ物の弁当を焼き魚の弁当に変える", cut: "−200〜300kcal" },
  { how: "深夜のラーメンに行かない", cut: "−800〜1,100kcal", strong: true },
  { how: "飲みに行く回数が週2回から月1回になる", cut: "−月10,000kcal前後", strong: true },
];

export default function EatingOut92kg() {
  return (
    <ColumnShell
      slug="eating-out-92kg"
      h1="92kgのとき、外食で何を食べていたか。──メニューより先に、回数が変わった"
      toc={TOC}
    >
      {/* リード */}
      <div className="space-y-4">
        <p>
          外食とダイエットの記事は、たいてい「何を選ぶか」の話になります。私も書いています（
          <a
            href="/column/eating-out"
            className="text-green-700 underline hover:no-underline"
          >
            外食でも太らない選び方
          </a>
          ）。実際、選び方は効きます。
        </p>
        <p>
          ただ、自分が<strong>92kgから18kg落としたときに何が起きたか</strong>
          を正直に振り返ると、順番が違いました。ヘルシーなメニューを選べるようになったから痩せたのではなく、
          <strong>外食する場面そのものが減った</strong>のが先です。
        </p>
        <p>
          この記事では、当時実際に食べていたものを書き出し、カロリーを積み上げ、「選び方で削れる量」と「回数で削れる量」を並べて比べます。自分の記録なので、どこにでもある一般論ではありません。
        </p>
      </div>

      <hr className="border-green-100" />

      {/* 1. 当時のメニュー */}
      <section>
        <h2
          id="menu"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          92kgの頃、外食で食べていたもの
        </h2>
        <div className="space-y-4">
          <p>
            当時は休みが日曜だけ、帰宅は毎日0時近くという働き方でした。自炊という選択肢が、そもそも生活の中にありません。食べていたのは、だいたい次のようなものです。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    場面
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    食べていたもの
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    おおよそ
                  </th>
                </tr>
              </thead>
              <tbody>
                {OLD_MENU.map(({ scene, item, kcal, note }) => (
                  <tr key={item}>
                    <td className="border border-green-100 px-3 py-2 text-gray-600 whitespace-nowrap">
                      {scene}
                    </td>
                    <td className="border border-green-100 px-3 py-2">
                      <span className="font-medium">{item}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">
                        {note}
                      </span>
                    </td>
                    <td className="border border-green-100 px-3 py-2 font-bold text-green-700 whitespace-nowrap">
                      {kcal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            改めて並べると、<strong>共通点が2つ</strong>あります。ひとつは、
            <strong>ご飯や麺の量が多く、たんぱく質が少ない</strong>こと。もうひとつは、
            <strong>どれも「選んだ」というより、そこにあったから食べていた</strong>ことです。
          </p>
          <p>
            特にご飯は、聞かれれば大盛りにしていました。同じ値段なら多いほうが得だ、くらいの感覚です。深夜のラーメンも同じで、飲んだあとの流れで自動的に発生していました。決断していないので、我慢のしようもありません。
          </p>
          <p className="text-sm text-gray-500">
            ※ カロリーは商品や店によって大きく変わります。ここに書いた数字は一般的な目安で、私が当時測ったものではありません。実際の値はパッケージの栄養成分表示や、店が公開している数値で確認してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 2. 積み上げ */}
      <section>
        <h2
          id="stack"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          1日ぶんを積み上げてみる
        </h2>
        <div className="space-y-4">
          <p>
            飲みに行った日の1日を、上の表から組み立ててみます。朝は食べていなかったので、昼から数えます。
          </p>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-2">
            <div className="flex justify-between text-sm">
              <span>昼：コンビニの唐揚げ弁当</span>
              <span className="font-medium">約800kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>夜：居酒屋（酒＋つまみ）</span>
              <span className="font-medium">約1,200kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>0時すぎ：〆のラーメン</span>
              <span className="font-medium">約900kcal</span>
            </div>
            <div className="border-t border-green-200 pt-2 flex justify-between font-bold text-green-700">
              <span>合計</span>
              <span>約2,900kcal</span>
            </div>
          </div>

          <p>
            当時の私（30歳前後・身長174cm・体重92kg・デスクワーク）の1日の消費量は、おおよそ
            <strong>2,400〜2,600kcal</strong>
            程度と見積もられます。体重が重いぶん基礎代謝は高いのですが、それでも
            <strong>1日で300〜500kcalの黒字</strong>です。
          </p>
          <p>
            ここで注意したいのは、
            <strong>この日が「暴食した日」ではない</strong>ということです。ラーメン2杯食べたわけでも、大盛りを頼み倒したわけでもありません。当時の普通の1日です。そして飲みに行かない日は、もう少し少ない。
          </p>
          <p>
            別の記事（
            <a
              href="/column/slow-weight-gain"
              className="text-green-700 underline hover:no-underline"
            >
              太るのは、一晩ではない
            </a>
            ）で、私が25kg増えるのに必要だったのは
            <strong>1日あたり50〜100kcal程度の上振れ</strong>
            だった、という計算をしました。上の1日は、それをはるかに超えています。つまり
            <strong>この生活を毎日やる必要すらなかった</strong>
            。週に何回かで十分だったわけです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 3. 選び方の限界 */}
      <section>
        <h2
          id="choose"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          「選び方」で削れる量には上限がある
        </h2>
        <div className="space-y-4">
          <p>
            痩せようと思ったとき、最初にやったのは「選び方を変える」ことでした。あっさり系のラーメンにする、揚げ物を避ける、といったやつです。効果はありました。ただ、
            <strong>削れる量には天井があります</strong>。
          </p>
          <p>並べて比べると、これがはっきりします。</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    やったこと
                  </th>
                  <th className="border border-green-100 px-3 py-2 text-left font-bold text-green-700">
                    削れる量
                  </th>
                </tr>
              </thead>
              <tbody>
                {REDUCTION.map(({ how, cut, strong }) => (
                  <tr key={how} className={strong ? "bg-green-50/60" : undefined}>
                    <td className="border border-green-100 px-3 py-2">
                      {strong ? <strong>{how}</strong> : how}
                    </td>
                    <td
                      className={`border border-green-100 px-3 py-2 whitespace-nowrap ${
                        strong
                          ? "font-bold text-green-700"
                          : "text-gray-600"
                      }`}
                    >
                      {cut}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            メニューを工夫して削れるのは、1回あたり<strong>100〜300kcal</strong>
            です。対して、その場面に行かなければ<strong>800〜1,100kcal</strong>
            がまるごと消えます。桁がひとつ違います。
          </p>
          <p>
            しかも選び方の工夫は、<strong>行くたびに毎回やらないといけない</strong>
            。疲れている日、飲んだあと、締め切り前。私が判断力を失っている場面ほど、外食は発生していました。
            <strong>一番判断できないタイミングで、一番判断を求められる</strong>
            のが、選び方だけで戦う方法の弱点です。
          </p>
          <p className="text-sm text-gray-500">
            ※ 選び方が無意味という意味ではありません。外食の頻度を落とせない人にとっては、選び方が唯一の打ち手になります。順番の話として読んでください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 4. 場面が消えた */}
      <section>
        <h2
          id="scene"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          実際に効いたのは、場面が消えたこと
        </h2>
        <div className="space-y-4">
          <p>
            正直に書くと、私は「意志で深夜ラーメンをやめた」わけではありません。実際に起きたのは、次の3つが重なったことです。
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>意識して減らした</strong>
              ：痩せると決めてから、飲みの誘いに全部乗るのをやめました。ここは自分の判断です
            </li>
            <li>
              <strong>環境が変わった</strong>
              ：コロナ禍で、そもそも飲みに行く機会が激減しました。私の意志とは関係なく、場面のほうが消えました
            </li>
            <li>
              <strong>昼を弁当に切り替えた</strong>
              ：コンビニに行く用事がなくなり、結果として菓子パンやカップ麺を買う機会も消えました
            </li>
          </ol>
          <p>
            この3つのうち、自分の努力と言えるのは1と3だけです。2は運です。ただ、
            <strong>
              運で空いた穴を、元に戻さないように埋めたこと
            </strong>
            は自分でやったことだと思っています。飲みの機会が戻ってきたときに、以前と同じ頻度には戻しませんでした。
          </p>
          <p>
            いまは、飲みに行くこと自体があまりありません。ラーメンもめったに食べません。我慢しているというより、
            <strong>その場面が生活から抜けた</strong>という感覚に近いです。抜けてしまえば、我慢する対象が存在しなくなります。
          </p>
          <p>
            前の記事で「じわじわ太るのは意志の問題ではなく検知の問題だ」と書きました。外食についても似ていて、
            <strong>意志の問題ではなく、場面の問題</strong>
            だと思っています。意志は疲れると落ちますが、場面は一度なくなればそのままです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 5. 弁当 */}
      <section>
        <h2
          id="lunch"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          昼を弁当に置き換えた（胸肉とおにぎり）
        </h2>
        <div className="space-y-4">
          <p>
            場面をなくすと決めたとき、一番手をつけやすかったのが昼食でした。毎日必ず発生して、しかも自分だけで完結するからです。飲み会と違って、相手がいません。
          </p>
          <p>
            いま私が持っていく弁当の中身は、これだけです。
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>低温調理した鶏むね肉</strong>（BONIQなどの低温調理器でまとめて仕込む）
            </li>
            <li>
              <strong>おにぎり</strong>
            </li>
          </ul>
          <p>
            以上です。おかずを何品も詰めるタイプの弁当ではありません。当時のコンビニ弁当と比べると、こうなります。
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
              <p className="font-bold text-red-700 mb-2">
                以前：コンビニの唐揚げ弁当
              </p>
              <p className="text-sm text-gray-700">
                おおよそ<strong>800kcal</strong>
                前後。たんぱく質は20〜25g程度で、その多くが揚げ物由来。ご飯の量が多い
              </p>
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 p-4">
              <p className="font-bold text-green-700 mb-2">
                いま：胸肉200g ＋ おにぎり1個
              </p>
              <p className="text-sm text-gray-700">
                おおよそ<strong>390kcal</strong>
                前後（皮なし胸肉200gで約210kcal、おにぎり1個で約180kcal）。たんぱく質は<strong>約50g</strong>
              </p>
            </div>
          </div>

          <p>
            1食で<strong>約400kcal減って、たんぱく質は倍以上</strong>
            になりました。しかも毎日食べるものなので、月20日で計算すると
            <strong>8,000kcal</strong>ぶんの差になります。体脂肪に換算すれば1kg強です。
          </p>
          <p>
            低温調理器を使っているのは、<strong>まとめて仕込めるから</strong>
            です。パサつきにくく、下味をつけて袋ごと入れておけば放っておける。私は数日ぶんをまとめて作って、朝は詰めるだけにしています。毎朝料理をする方式だったら、まず続きませんでした。
          </p>
          <p className="text-sm text-gray-500">
            ※ カロリー・たんぱく質は日本食品標準成分表に基づく一般的な値からの概算です。実際の値は使う部位・調味料・おにぎりの具で変わります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 6. 勧めない理由 */}
      <section>
        <h2
          id="honest"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          この弁当を勧めない理由
        </h2>
        <div className="space-y-4">
          <p>
            ここまで書いておいて何ですが、
            <strong>胸肉とおにぎりだけの弁当を、そのまま真似することは勧めません</strong>
            。理由は3つあります。
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>野菜がゼロ</strong>
              ：食物繊維・ビタミン・ミネラルがこの1食からはほとんど取れません。私は朝と夜で補っていますが、昼だけ見れば明確に不足しています
            </li>
            <li>
              <strong>脂質が少なすぎる</strong>
              ：皮なしの胸肉は脂質がほとんどありません。脂質は減らしすぎてもよくない栄養素なので、1日を通してある程度は必要です
            </li>
            <li>
              <strong>味に飽きる</strong>
              ：私は同じものを食べ続けるのが苦にならないタイプですが、これは体質ではなく性格の問題です。多くの人は続きません
            </li>
          </ul>
          <p>
            仕組みとして真似する価値があるのは、中身そのものではなく
            <strong>「昼食を、毎朝考えなくていい形にした」という部分</strong>
            だと思っています。中身は各自が続けられるものでいい。私の場合、ミニトマトやカット野菜、ゆで卵を足すだけでも欠点はかなり埋まります。
          </p>
          <p>
            もし同じ方向で作るなら、次のように足すのが現実的です。
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>洗うだけの野菜（ミニトマト・カット野菜・冷凍ブロッコリー）を1つ</li>
            <li>脂質の供給源としてゆで卵1個、またはナッツを少量</li>
            <li>味変用に、ドレッシングやスパイスを数種類ローテーション</li>
          </ul>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 7. それでも外食するとき */}
      <section>
        <h2
          id="still"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          それでも外食するときにやっていること
        </h2>
        <div className="space-y-4">
          <p>
            外食がゼロになったわけではありません。行く機会は当然あります。そのときにやっているのは、たった2つです。
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>ご飯を少なめにする</strong>
              ：大盛りにしていた頃から180度変わった部分です。多くの店は言えば減らしてくれますし、断られても残せばいい。ここだけで150〜200kcal動きます
            </li>
            <li>
              <strong>その日の中で帳尻を合わせる</strong>
              ：夜に外食が入ると分かっている日は、昼の主食を減らします。1食単位ではなく1日単位で見ると、外食1回は十分吸収できます
            </li>
          </ol>
          <p>
            逆に、やらなくなったことがあります。
            <strong>外食した翌日に断食したり、極端に減らしたりすること</strong>
            です。反動で余計に食べることが多く、私の場合はうまくいきませんでした。1日単位で軽く調整するくらいが、続く範囲でした。
          </p>
          <p>
            そして、めったに行かなくなったぶん、行くときのラーメンは普通に食べます。頻度が落ちていれば、1回のカロリーは全体にほとんど影響しません。
            <strong>回数を減らしたことの利点は、1回を我慢しなくてよくなること</strong>
            でもあります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* 8. 試すなら */}
      <section>
        <h2
          id="try"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          同じことを試すなら
        </h2>
        <div className="space-y-4">
          <p>
            「外食を減らせ」と言われても、仕事の付き合いも生活のリズムもあります。私が実際にやった順番は、こうでした。
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>回数を数える</strong>
              ：まず、1週間に外食と中食（弁当・惣菜）が何回あるかを数えます。減らす前に、いま何回あるのかを知る。私の場合はほぼ全食でした
            </li>
            <li>
              <strong>一番簡単な1食から置き換える</strong>
              ：相手のいない食事＝多くの人にとっては昼食です。夜の付き合いから手をつけると難易度が高すぎます
            </li>
            <li>
              <strong>置き換え先を、考えなくていい形にする</strong>
              ：毎朝メニューを決める方式は続きません。まとめて仕込む、同じものにする、買う店を固定する。判断の回数を減らします
            </li>
            <li>
              <strong>残った外食は、選び方で対応する</strong>
              ：ここでようやく「ご飯少なめ」「揚げ物より焼き物」が効いてきます。回数が減ったあとなら、負担も小さい
            </li>
          </ol>
          <p>
            置き換えるときに、
            <strong>1食をどのくらいのカロリーに収めればいいか</strong>
            が分からないと手が止まります。サクメシは、身長・体重・年齢・活動量・目標から必要カロリーとPFCを計算して、その範囲に収まる1週間ぶんのメニューを作ります。作り置きしやすい構成で出るので、私のように「まとめて仕込んで詰めるだけ」にしたい人にも使えます。
          </p>
          <p className="text-sm text-gray-600">
            92kgから18kg落として大会に出るまでの全体の流れは、note の
            <a
              href="https://note.com/kahko/n/n54473a156288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline hover:no-underline"
            >
              「デブだった私が18kg減量してフィジーク大会で入賞するまで」
            </a>
            に書いています（有料記事）。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      {/* まとめ */}
      <section>
        <h2
          id="summary"
          className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
        >
          まとめ
        </h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            92kgの頃の外食は、コンビニ弁当・カップ麺＋おにぎり・菓子パン・ご飯大盛り・深夜0時すぎのラーメン。飲んだ日は1日で約2,900kcalになっていた
          </li>
          <li>
            メニューの選び方で削れるのは1回100〜300kcal。
            <strong>その場面に行かなければ800〜1,100kcalがまるごと消える</strong>
          </li>
          <li>
            選び方の工夫は、疲れている日ほど必要になるのに、疲れている日ほど実行できない
          </li>
          <li>
            実際に効いたのは、意識して減らしたこと・コロナで機会が消えたこと・昼を弁当にしたことの3つ
          </li>
          <li>
            昼の置き換えは低温調理の鶏むね肉＋おにぎり。約800kcal→約390kcalで、たんぱく質は約50gに増えた
          </li>
          <li>
            ただしこの弁当は野菜も脂質も足りない。真似するなら中身ではなく
            <strong>「毎朝考えなくていい形にする」という仕組みのほう</strong>
          </li>
          <li>
            回数が減ると、たまに行く1回を我慢しなくてよくなる
          </li>
        </ul>
      </section>
    </ColumnShell>
  );
}
