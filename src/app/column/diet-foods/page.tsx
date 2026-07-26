import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  alternates: { canonical: "/column/diet-foods" },
  title: "痩せる食材リスト｜スーパーで買える定番をカテゴリ別に | サクメシ",
  description:
    "低カロリー高タンパクの主菜食材から、主食・野菜・間食まで。買い物で迷わないための定番食材をカテゴリ別にまとめ、避けたい食材と冷蔵庫の常備リストも紹介します。",
};

const TOC = [
  { id: "rule", label: "「痩せる食材」の正しい意味" },
  { id: "protein", label: "主菜になる食材（タンパク質）" },
  { id: "staple", label: "主食（炭水化物）" },
  { id: "veg", label: "野菜・きのこ・海藻" },
  { id: "fat", label: "油と乳製品" },
  { id: "snack", label: "間食にしていい食材" },
  { id: "avoid", label: "頻度を下げたい食材" },
  { id: "stock", label: "これだけ買えば回る常備リスト" },
  { id: "summary", label: "まとめ" },
];

export default function DietFoods() {
  return (
    <ColumnShell
      slug="diet-foods"
      h1="痩せる食材リスト｜スーパーで買える定番をカテゴリ別に"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>ダイエットが続かない理由の多くは、意志ではなく<strong>買い物カゴの中身</strong>です。家にあるものしか食べられないので、スーパーの時点で勝負はほぼ決まっています。</p>
        <p>
          この記事では、特別な健康食品ではなく<strong>どこのスーパーでも買える定番食材</strong>だけをカテゴリ別にまとめました。買い物メモとしてそのまま使えます。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="rule" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          「痩せる食材」の正しい意味
        </h2>
        <div className="space-y-4">
          <p>
            先に大事なことを。<strong>食べるだけで脂肪が減る食材は存在しません。</strong>「脂肪燃焼スープ」も「食べれば痩せる果物」も、それ自体に脂肪を溶かす力はありません。
          </p>
          <p>この記事で言う「痩せる食材」とは、次の条件を満たすものです。</p>
          <div className="space-y-2">
            {[
              { title: "カロリーの割に満腹感が続く", desc: "タンパク質と食物繊維が多い食材は、同じカロリーでも腹持ちが違う。結果として食べる量が減る。" },
              { title: "タンパク質が確保できる", desc: "減量中に筋肉を守る役割。ここが足りないと、落ちた体重の中身が悪くなる。" },
              { title: "調理と入手がラク", desc: "続かない食材は存在しないのと同じ。週2回のスーパーで買えて、10分で食卓に出せることが条件。" },
              { title: "味に飽きにくい", desc: "同じ食材でも味付けを変えられるものが強い。鶏むね肉が定番なのはここも大きい。" },
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
        <h2 id="protein" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          主菜になる食材（タンパク質）
        </h2>
        <div className="space-y-4">
          <p>ここが一番重要です。100gあたりの目安で比べます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">食材（100g）</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">カロリー</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">タンパク質</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ひとこと</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">鶏むね肉（皮なし）</td>
                  <td className="p-2 border border-green-100 text-center">約110kcal</td>
                  <td className="p-2 border border-green-100 text-center">約23g</td>
                  <td className="p-2 border border-green-100">王道。安い・高タンパク・味付け自在</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">鶏ささみ</td>
                  <td className="p-2 border border-green-100 text-center">約100kcal</td>
                  <td className="p-2 border border-green-100 text-center">約24g</td>
                  <td className="p-2 border border-green-100">最軽量。パサつくのでレンジ蒸し＋タレが正解</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">豚ヒレ肉</td>
                  <td className="p-2 border border-green-100 text-center">約120kcal</td>
                  <td className="p-2 border border-green-100 text-center">約22g</td>
                  <td className="p-2 border border-green-100">鶏に飽きたとき。ビタミンB1が豊富</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">牛もも肉（赤身）</td>
                  <td className="p-2 border border-green-100 text-center">約140kcal</td>
                  <td className="p-2 border border-green-100 text-center">約21g</td>
                  <td className="p-2 border border-green-100">鉄分が摂れる。バラ肉とは別物なので部位で選ぶ</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">白身魚（たら・かれい）</td>
                  <td className="p-2 border border-green-100 text-center">約80kcal</td>
                  <td className="p-2 border border-green-100 text-center">約18g</td>
                  <td className="p-2 border border-green-100">最も軽い。ホイル焼きが手間なし</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">さば・さけ</td>
                  <td className="p-2 border border-green-100 text-center">約200kcal</td>
                  <td className="p-2 border border-green-100 text-center">約20g</td>
                  <td className="p-2 border border-green-100">脂は多いが良質。週2回は入れたい</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">卵（1個）</td>
                  <td className="p-2 border border-green-100 text-center">約75kcal</td>
                  <td className="p-2 border border-green-100 text-center">約6g</td>
                  <td className="p-2 border border-green-100">栄養バランスが優秀。1日1〜2個は問題なし</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">豆腐（木綿）</td>
                  <td className="p-2 border border-green-100 text-center">約73kcal</td>
                  <td className="p-2 border border-green-100 text-center">約7g</td>
                  <td className="p-2 border border-green-100">かさ増しの主力。絹より木綿がタンパク質多め</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">納豆（1パック）</td>
                  <td className="p-2 border border-green-100 text-center">約90kcal</td>
                  <td className="p-2 border border-green-100 text-center">約8g</td>
                  <td className="p-2 border border-green-100">調理ゼロで一品増える。食物繊維も摂れる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">選び方のコツ</strong><br />
              同じ肉でも<strong>部位でカロリーが2〜3倍変わります</strong>。鶏もも（皮つき）は約190kcal、豚バラは約370kcal。「鶏肉だから安心」ではなく、部位で見るのが正解です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="staple" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          主食（炭水化物）
        </h2>
        <div className="space-y-4">
          <p>抜くのではなく、<strong>腹持ちのいいものを選んで量を決める</strong>のが正解です。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">◎ 積極的に</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・オートミール（腹持ち◎・食物繊維）</li>
                <li>・玄米・雑穀米（白米より血糖値が緩やか）</li>
                <li>・さつまいも・かぼちゃ（甘さで満足感）</li>
                <li>・そば（麺類の中では優秀）</li>
                <li>・全粒粉パン・ライ麦パン</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-gray-700 mb-2">○ 量を決めれば問題なし</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・白米（150gで約230kcal）</li>
                <li>・うどん・パスタ</li>
                <li>・食パン（6枚切り1枚で約150kcal）</li>
                <li>・じゃがいも</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            主食を完全に抜くと、その反動で夜の間食が増えるケースが非常に多いです。<strong>朝と昼はしっかり、夜は控えめ</strong>という配分のほうが続きます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="veg" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          野菜・きのこ・海藻
        </h2>
        <div className="space-y-4">
          <p>ここは<strong>ほぼ気にせず食べていい</strong>領域です。かさが増えて満腹感が出るのに、カロリーはほとんどありません。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">かさ増しの主力</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・キャベツ・白菜・もやし</li>
                <li>・ブロッコリー（タンパク質も少し入る）</li>
                <li>・きのこ全般（えのき・しめじ・まいたけ）</li>
                <li>・わかめ・もずく・ひじき</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">栄養を足す</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ほうれん草・小松菜（鉄・カリウム）</li>
                <li>・トマト・ピーマン（ビタミンC）</li>
                <li>・にんじん・玉ねぎ（常備しやすい）</li>
                <li>・冷凍野菜（切る手間ゼロ。強い）</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
            <p className="font-bold text-red-700 text-sm mb-1">⚠️ 落とし穴はドレッシング</p>
            <p className="text-sm text-gray-600">
              サラダ自体は20kcalでも、市販ドレッシングを大さじ2かけると100kcal前後追加されます。ノンオイル、またはポン酢・レモン・粗挽き胡椒で十分おいしくなります。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="fat" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          油と乳製品
        </h2>
        <div className="space-y-4">
          <p>
            脂質は1gあたり9kcalと、タンパク質・糖質（4kcal）の2倍以上。<strong>ここが最もカロリーが暴れる場所</strong>です。ただしゼロにすると肌やホルモンに影響が出るので、質を選んで量を管理します。
          </p>
          <div className="space-y-3">
            {[
              { from: "サラダ油で炒める（大さじ1＝約110kcal）", to: "フッ素樹脂加工のフライパン・スプレーオイル", point: "油を引かないだけで100kcal浮く。最も簡単な削減ポイント" },
              { from: "マヨネーズ（大さじ1＝約80kcal）", to: "ヨーグルト＋マスタード・カロリーハーフ", point: "使う頻度が高い調味料ほど効く" },
              { from: "牛乳（200mlで約135kcal）", to: "低脂肪乳・無調整豆乳", point: "毎日飲むなら差が積み上がる" },
              { from: "加糖ヨーグルト", to: "無糖ヨーグルト＋果物少量", point: "甘さは果物で足す。タンパク質はそのまま確保できる" },
            ].map((item) => (
              <div key={item.from} className="bg-white rounded-xl border border-green-100 p-4">
                <p className="text-sm font-bold text-gray-800 mb-1">
                  <span className="text-red-600">{item.from}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-green-700">{item.to}</span>
                </p>
                <p className="text-sm text-gray-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            一方で、オリーブオイル・青魚の脂・ナッツの脂は積極的に摂りたい種類です。<strong>減らすのは調理油と加工食品の脂</strong>、と覚えると分かりやすいです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="snack" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          間食にしていい食材
        </h2>
        <div className="space-y-4">
          <p>間食は悪ではありません。<strong>次の食事のドカ食いを防ぐ投資</strong>になることも多いです。目安は1回150〜200kcalまで。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">タンパク質が摂れる</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ギリシャヨーグルト</li>
                <li>・ゆで卵</li>
                <li>・チーズ1個（約60kcal）</li>
                <li>・プロテインドリンク</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">満足感が高い</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・素焼きナッツ（20〜25粒まで）</li>
                <li>・高カカオチョコ（2〜3片）</li>
                <li>・果物（りんご・キウイ・ベリー類）</li>
                <li>・するめ・小魚アーモンド</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            ナッツは体にいい食材ですが<strong>100gで約600kcal</strong>と高カロリーです。袋のまま食べず、小皿に出す。これだけで事故が防げます。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="avoid" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          頻度を下げたい食材
        </h2>
        <div className="space-y-4">
          <p>禁止ではなく<strong>頻度の話</strong>です。週に1回なら問題になりません。毎日だと積み上がります。</p>
          <div className="space-y-3">
            {[
              { habit: "甘い飲み物（ジュース・加糖コーヒー）", desc: "液体は満腹感がほぼ出ないのにカロリーだけ入る。最も削りやすく、最も効く。" },
              { habit: "菓子パン・惣菜パン", desc: "1個で400〜500kcalのものが多い。しかも腹持ちが悪く、2時間後にまた空腹になる。" },
              { habit: "揚げ物・天ぷら", desc: "衣が油を吸うので、素材が軽くても結果は重い。同じ食材なら焼く・蒸すへ。" },
              { habit: "ハム・ソーセージ・練り物", desc: "手軽だが脂質と塩分が高い。毎日の常備菜にはしないほうがいい。" },
              { habit: "インスタント麺", desc: "1食あたりの塩分が非常に高く、翌朝のむくみに直結する。汁を残すだけでもかなり違う。" },
            ].map((item) => (
              <div key={item.habit} className="bg-red-50 rounded-xl p-4 border border-red-100">
                <p className="font-bold text-red-700 text-sm mb-1">△ {item.habit}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="stock" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          これだけ買えば回る常備リスト
        </h2>
        <div className="space-y-4">
          <p>迷ったらこれをカゴに入れれば、1週間の食事はほぼ組めます。</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">毎週買う</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>□ 鶏むね肉（2〜3枚）</li>
                <li>□ 卵（1パック）</li>
                <li>□ 納豆・豆腐</li>
                <li>□ 無糖ヨーグルト</li>
                <li>□ キャベツ or 冷凍ブロッコリー</li>
                <li>□ きのこ2種</li>
                <li>□ トマト・玉ねぎ・にんじん</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">切らさない</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>□ 玄米 or オートミール</li>
                <li>□ さば缶・ツナ缶（水煮）</li>
                <li>□ わかめ・海藻</li>
                <li>□ ポン酢・レモン・スパイス類</li>
                <li>□ 素焼きナッツ</li>
                <li>□ 冷凍野菜</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
            <p className="text-sm text-gray-700">
              <strong className="text-green-700">買い物のコツ</strong><br />
              <strong>空腹で買い物に行かない</strong>。これだけで菓子パンとスナックがカゴに入る確率が激減します。買う前に食べるものを決めておくのが最強の対策です。
            </p>
          </div>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="summary" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          まとめ
        </h2>
        <div className="space-y-4">
          <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>食べるだけで痩せる食材はない。<strong>腹持ち・タンパク質・手軽さ</strong>で選ぶ</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span>肉は種類より<strong>部位</strong>。同じ鶏でもカロリーは2倍近く違う</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>野菜・きのこ・海藻は<strong>気にせず食べていい</strong>。ドレッシングだけ注意</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>カロリーが暴れるのは<strong>脂質</strong>。調理油と加工食品の脂から減らす</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>禁止ではなく<strong>頻度</strong>で考える。週1回なら何を食べても崩れない</span></li>
          </ol>
          <p>
            食材が決まっても「で、これで何を作る？」で止まりがちです。サクメシなら、選んだ条件に合わせて<strong>7日分の献立と使う食材をまとめて提示</strong>するので、買い物リストごと決まります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
