import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/alcohol-diet" },
  title: "お酒とダイエットの両立｜太りにくいお酒の選び方と飲み方ルール | サクメシ",
  description:
    "ダイエット中のお酒との付き合い方を解説。お酒別のカロリーと純アルコール量の早見表、飲み会1回のカロリー試算、翌日のリカバリー方法、エンプティカロリーの正しい意味まで紹介します。",
};

const TOC = [
  { id: "relation", label: "アルコールがダイエットに効く仕組み" },
  { id: "empty", label: "「エンプティカロリー」の本当の意味" },
  { id: "table", label: "お酒別カロリー・純アルコール早見表" },
  { id: "amount", label: "どれくらいまでなら飲んでいい？" },
  { id: "simulation", label: "飲み会1回のカロリーを試算してみる" },
  { id: "rules", label: "飲み方の5つのルール" },
  { id: "snacks", label: "おつまみの選び方" },
  { id: "next-day", label: "飲んだ翌日のリカバリー" },
  { id: "experience", label: "減量中の自分がやっていたこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const DRINKS = [
  { name: "ハイボール（ウイスキー30ml）", kcal: "約70kcal", alc: "約10g", sugar: "0g", good: true },
  { name: "焼酎 水割り（25度・100ml）", kcal: "約145kcal", alc: "約20g", sugar: "0g", good: true },
  { name: "辛口ワイン（グラス120ml）", kcal: "約90kcal", alc: "約12g", sugar: "約2g", good: true },
  { name: "糖質ゼロビール（350ml）", kcal: "約95kcal", alc: "約14g", sugar: "0g", good: true },
  { name: "生ビール 中ジョッキ（500ml）", kcal: "約200kcal", alc: "約20g", sugar: "約16g", good: false },
  { name: "日本酒 1合（180ml）", kcal: "約190kcal", alc: "約22g", sugar: "約8g", good: false },
  { name: "甘い缶チューハイ（350ml・7%）", kcal: "約200kcal", alc: "約20g", sugar: "約20g", good: false },
  { name: "梅酒 ロック（60ml）", kcal: "約95kcal", alc: "約6g", sugar: "約12g", good: false },
];

const RULES = [
  { rule: "空腹で飲み始めない", desc: "空腹だと酔いが早く回り、判断力が落ちるタイミングが前倒しになります。行く前にゆで卵1個やプロテイン1杯を入れておくだけで、頼むものがかなり変わります。" },
  { rule: "水と交互に飲む（チェイサー）", desc: "アルコールには利尿作用があり、飲むほど水分が失われます。1杯ごとに水を挟むと、脱水も飲みすぎも同時に抑えられます。翌日の残り方もはっきり違います。" },
  { rule: "最初の1杯を決めておく", desc: "「とりあえず生」を「とりあえずハイボール」に変えるだけで、その日の総カロリーは数百kcal変わります。店に入る前に決めておくのがコツです。" },
  { rule: "〆の炭水化物は最初から予定に入れない", desc: "飲んだあとのラーメン・お茶漬けは、判断力が落ちた状態での追加600kcal前後です。断るのが難しいなら、店を出る時間を先に決めておくほうが確実です。" },
  { rule: "週に2日は飲まない日をつくる", desc: "肝臓を休める意味に加えて、「飲まない日が普通にある」状態を作っておくと、飲む日の量もコントロールしやすくなります。" },
];

const FAQS = [
  {
    q: "ハイボールなら何杯飲んでも太らない？",
    a: "太ります。糖質はゼロでもアルコール自体に約7kcal/gのエネルギーがあり、ハイボール1杯で約70kcalです。5杯なら350kcal——おにぎり2個分に相当します。糖質ゼロ＝カロリーゼロではありません。",
  },
  {
    q: "飲む前にウコンやヘパリーゼを飲めば大丈夫？",
    a: "二日酔いの体感が変わる人はいますが、摂取カロリーが減るわけではありません。ダイエットの観点では、飲む量と締めを管理するほうがはるかに効きます。",
  },
  {
    q: "お酒を飲むと筋トレの効果が消える？",
    a: "「消える」は言いすぎですが、大量の飲酒は筋肉の合成やトレーニング後の回復にとって不利に働きます。トレーニング日の直後に大量に飲むのは避け、飲む日はトレーニングを入れない日に寄せるのが現実的です。",
  },
  {
    q: "毎日少量なら健康にいいと聞いたことがある",
    a: "近年は「少量でも飲まないほうがリスクは低い」という見方が主流になっています。健康のために飲み始める理由はありません。あくまで「飲みたい人がどう付き合うか」という話として読んでください。",
  },
];

export default function AlcoholDiet() {
  return (
    <ColumnShell
      slug="alcohol-diet"
      h1="お酒とダイエットの両立｜太りにくいお酒の選び方と飲み方ルール"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「お酒はやめたくない。でも痩せたい」——ダイエットで一番よく聞く悩みかもしれません。</p>
        <p>
          結論から言うと、
          <strong>断酒しなくても減量はできます</strong>
          。ただし「太りにくいお酒を選ぶ」だけでは足りません。実際にカロリーを押し上げているのは、酒そのものより
          <strong>おつまみと締め</strong>だからです。
        </p>
        <p>この記事では、お酒別のカロリーと純アルコール量、飲み会1回の実際の試算、そして翌日のリカバリーまでを具体的にまとめます。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="relation" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          アルコールがダイエットに効く仕組み
        </h2>
        <div className="space-y-4">
          <p>アルコールは1gあたり約7.1kcal。糖質・タンパク質の4kcalより高く、脂質の9kcalに近い数字です。そのうえで、飲酒には次のような影響があります。</p>
          <div className="space-y-2">
            {[
              "肝臓はアルコールの分解を優先するため、その間ほかの代謝が後回しになる",
              "食欲が増しやすく、普段なら頼まないものを頼んでしまう",
              "判断力が落ちる時間帯に、揚げ物や締めのメニューが目に入る",
              "睡眠が浅くなり、翌日の食欲コントロールと活動量が落ちる",
            ].map((item) => (
              <div key={item} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                <span className="text-red-500 shrink-0">!</span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p>
            注目すべきは、後半の3つが
            <strong>すべて「酒以外を食べすぎる」経路</strong>
            だという点です。だから対策も、酒の種類を変えることより、周辺の行動を設計するほうが効きます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="empty" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「エンプティカロリー」の本当の意味
        </h2>
        <div className="space-y-4">
          <p>
            お酒はよく「エンプティカロリーだから太らない」と言われます。これは
            <strong>誤解を招く言い方</strong>です。
          </p>
          <p>
            エンプティ（空っぽ）が指しているのは、
            <strong>ビタミン・ミネラルなどの栄養がほとんど含まれない</strong>
            こと、そして<strong>アルコールとして体に蓄えておく仕組みがない</strong>ことです。カロリーがゼロという意味ではありません。
          </p>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <p className="font-bold text-amber-800 text-sm mb-1">⚠ 「蓄えられない」＝「太らない」ではない</p>
            <p className="text-sm text-gray-600">
              アルコールのエネルギーが優先的に使われるということは、その間<strong>一緒に食べた脂質や糖質のほうが余りやすくなる</strong>ということでもあります。太る経路は消えておらず、担当が入れ替わっているだけです。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="table" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          お酒別カロリー・純アルコール早見表
        </h2>
        <div className="space-y-4">
          <p>1杯あたりのおおよその数字です。糖質だけでなくカロリーと純アルコール量も並べると、選び方の判断がしやすくなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">お酒（1杯）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">純アルコール</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">糖質</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {DRINKS.map((d) => (
                  <tr key={d.name} className={d.good ? "" : "bg-red-50"}>
                    <td className="p-2 border border-green-100 font-medium">
                      <span className={d.good ? "text-green-700" : "text-red-700"}>{d.good ? "◎ " : "△ "}</span>
                      {d.name}
                    </td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.kcal}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.alc}</td>
                    <td className="p-2 border border-green-100 text-center whitespace-nowrap">{d.sugar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            ※ 商品や注ぎ方で幅があります。純アルコール量は「飲んだ量(ml) × 度数(%) ÷ 100 × 0.8」で計算できます。
          </p>
          <p>
            表を見ると分かるとおり、
            <strong>糖質が少ない＝カロリーが低い、ではありません</strong>
            。焼酎の水割りは糖質ゼロですが、量を飲めばビール並みのカロリーになります。度数が高い酒ほど、同じ量でもカロリーは高くなります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="amount" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          どれくらいまでなら飲んでいい？
        </h2>
        <div className="space-y-4">
          <p>
            健康面の目安として、国内では
            <strong>「節度ある適度な飲酒」＝1日平均で純アルコール約20g程度</strong>
            が示されています。生活習慣病のリスクを高める量としては、男性で1日40g以上、女性で20g以上が挙げられています（女性は男性より少量で影響を受けやすいとされます）。
          </p>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-2">
            <p className="text-sm font-bold text-green-700">純アルコール20gの目安</p>
            {[
              "ビール中ジョッキ 1杯（500ml・5%）",
              "日本酒 1合弱（180ml・15%）",
              "ハイボール 2杯（ウイスキー30ml×2）",
              "ワイン グラス2杯弱（120ml×2）",
            ].map((m) => (
              <p key={m} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">・</span>{m}</p>
            ))}
          </div>
          <p>
            ダイエットの観点で言えば、この20gという線は
            <strong>カロリーで150〜200kcal前後</strong>
            にあたります。1日の目標カロリーの中に収めやすい量なので、「週に何回、1回何杯まで」を先に決めておくと管理がぐっと楽になります。
          </p>
          <p className="text-sm text-gray-500">
            ※ 20歳未満、妊娠中・授乳中の方、体質的にお酒を受けつけない方、服薬中の方は飲酒しないでください。飲酒量に不安がある場合は医療機関にご相談ください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="simulation" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲み会1回のカロリーを試算してみる
        </h2>
        <div className="space-y-4">
          <p>「酒の種類より周辺が問題」という話を、実際の数字で見てみます。同じ2時間の飲み会でも、頼むものでここまで変わります。</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ よくあるパターン</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between"><span>生ビール中 3杯</span><span>約600kcal</span></li>
                <li className="flex justify-between"><span>唐揚げ</span><span>約400kcal</span></li>
                <li className="flex justify-between"><span>フライドポテト</span><span>約300kcal</span></li>
                <li className="flex justify-between"><span>締めのラーメン</span><span>約600kcal</span></li>
              </ul>
              <p className="mt-2 pt-2 border-t border-red-200 text-sm font-bold text-red-700 flex justify-between">
                <span>合計</span><span>約1,900kcal</span>
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ 整えたパターン</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between"><span>ハイボール 3杯</span><span>約210kcal</span></li>
                <li className="flex justify-between"><span>枝豆</span><span>約80kcal</span></li>
                <li className="flex justify-between"><span>刺身盛り合わせ</span><span>約150kcal</span></li>
                <li className="flex justify-between"><span>焼き鳥（塩）3本</span><span>約210kcal</span></li>
              </ul>
              <p className="mt-2 pt-2 border-t border-green-200 text-sm font-bold text-green-700 flex justify-between">
                <span>合計</span><span>約650kcal</span>
              </p>
            </div>
          </div>
          <p>
            差は<strong>約1,250kcal</strong>。飲む回数は同じでも、選ぶものだけでこれだけ動きます。しかも酒の杯数はどちらも3杯です。
            <strong>削るべきは酒より揚げ物と締め</strong>だと分かります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="rules" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲み方の5つのルール
        </h2>
        <div className="space-y-3">
          {RULES.map((item) => (
            <div key={item.rule} className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="font-bold text-green-700 text-sm mb-1">✓ {item.rule}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="snacks" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          おつまみの選び方
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ おすすめ</p>
              <ul className="space-y-1">
                {[
                  "枝豆（タンパク質と食物繊維。最初の1品に最適）",
                  "刺身・カルパッチョ（高タンパク・低脂質）",
                  "焼き鳥は塩（タレは砂糖・みりんで糖質が上がる）",
                  "冷奴・だし巻き卵・湯豆腐",
                  "サラダ・お浸し・キムチ（先に頼んでおく）",
                  "砂肝・ハツ・レバー（低脂質で満足感がある）",
                ].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">❌ 量に気をつけたいもの</p>
              <ul className="space-y-1">
                {[
                  "唐揚げ・フライドポテト（脂質＋衣の糖質）",
                  "ピザ・グラタン・チーズ系（脂質が一気に増える）",
                  "タレの焼き鳥・煮込み（糖質が上乗せされる）",
                  "ポテトサラダ・マカロニサラダ（野菜の顔をした炭水化物）",
                  "締めのラーメン・お茶漬け・デザート",
                ].map((m) => (
                  <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            コツは<strong>最初にタンパク質と野菜を頼んでしまうこと</strong>です。揚げ物が来る頃にはある程度お腹が落ち着いているので、自然と量が減ります。禁止するより、順番で解決するほうが続きます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="next-day" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          飲んだ翌日のリカバリー
        </h2>
        <div className="space-y-4">
          <p>飲んだ翌朝、体重が1〜2kg増えているのはよくあることです。ただしその大半は塩分とアルコールによる水分の増加で、脂肪ではありません。</p>
          <div className="space-y-3">
            {[
              { title: "水をしっかり飲む", desc: "アルコールの利尿作用で失われた水分を戻します。むくみが気になるからと水を控えるのは逆効果です。" },
              { title: "朝食を抜かない", desc: "抜くと昼と夜に反動が来ます。卵・納豆・ヨーグルトなどタンパク質を入れておくほうが1日が安定します。" },
              { title: "カリウムを含む食材を足す", desc: "野菜・果物・海藻・大豆製品など。ナトリウムの排出を助け、むくみが戻りやすくなります。" },
              { title: "1日だけ極端に減らさない", desc: "「昨日食べすぎたから今日は絶食」は反動を生みます。前後2〜3日の合計で調整するくらいがちょうどいいです。" },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">✓ {item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="experience" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          減量中の自分がやっていたこと
        </h2>
        <div className="space-y-4">
          <p>
            減量を始めた当初、自分は「お酒をやめる」ことから入りました。結果はうまくいきませんでした。付き合いの席で飲まないでいるのはストレスが大きく、
            <strong>2ヶ月ほどで反動が来て、逆に前より飲む</strong>という典型的な流れをたどりました。
          </p>
          <p>
            やり方を変えたのは、そのあとです。禁止をやめて、代わりに3つだけ決めました。
            <strong>①1杯目からハイボール ②揚げ物は頼まない（人が頼んだものを1つもらうのはOK） ③締めには行かない</strong>
            。この3つを守るだけで、飲み会があった週でも体重の動きが読めるようになりました。
          </p>
          <p>
            意外だったのが、体感として一番効いたのは締めをやめたことだったという点です。酒の種類を変えるより、
            <strong>22時以降に600kcal追加しないこと</strong>
            のほうが数字にはっきり出ました。翌朝の目覚めも別物になり、翌日の食欲が暴れないぶん二重に効いていたと思います。
          </p>
          <p>
            大会前の絞り込み期だけは完全に飲まない時期を作りましたが、それ以外の期間はずっとこのルールでやっています。長く続けるという意味では、禁止より条件付きのほうが確実でした。
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>アルコールは約<strong>7.1kcal/g</strong>。エンプティカロリー＝ゼロカロリーではない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>糖質ゼロでもカロリーはある</strong>。度数が高いほどカロリーも高い</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>目安は<strong>1日純アルコール20g程度</strong>（ビール中1杯・ハイボール2杯）</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>差がつくのは酒より<strong>揚げ物と締め</strong>。同じ3杯でも1,250kcal変わる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>最初に<strong>タンパク質と野菜</strong>を頼み、水を挟みながら飲む</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>翌日は<strong>水分とタンパク質</strong>。絶食で取り返そうとしない</span></li>
          </ol>
          <p>
            完全にやめるより、条件を決めて付き合うほうが結果的に長続きします。まずは次の飲み会で「1杯目」と「締めに行かない」の2つだけ決めてみてください。
          </p>
          <p>
            自分の1日の目標カロリーが分かっていれば、飲み会にどれだけ使えるかも計算できます。サクメシで今の必要カロリーを出しておくと調整しやすくなります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
