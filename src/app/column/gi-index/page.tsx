import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "GI値って何？血糖値を意識した食材選びで太りにくく | サクメシ",
  description:
    "GI値の基本と低GI食品の選び方を解説。白米→玄米などの置き換え例、GI値だけに頼ってはいけない注意点も分かりやすく紹介します。",
};

const TOC = [
  { id: "what", label: "GI値とは？" },
  { id: "why", label: "血糖値スパイクが太りやすさにつながる理由" },
  { id: "foods", label: "高GI・低GI食品の早見表" },
  { id: "swap", label: "今日からできる置き換え例" },
  { id: "caution", label: "GI値だけに頼らない【注意点】" },
  { id: "summary", label: "まとめ" },
];

export default function GiIndex() {
  return (
    <ColumnShell
      slug="gi-index"
      h1="GI値って何？血糖値を意識した食材選びで太りにくく"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「低GIパン」「低GIチョコ」——スーパーやコンビニでよく見かけるようになった「GI」という言葉。</p>
        <p>
          なんとなく体に良さそうだけど、実際何なのか説明できる人は少ないと思います。結論から言うと、GI値は<strong>「同じ糖質でも太りやすさに差がある」ことを教えてくれる便利な指標</strong>。ただし、使い方を間違えると逆効果にもなります。
        </p>
        <p>この記事では、GI値の基本と実践的な使い方、そして落とし穴を解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="what" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値とは？
        </h2>
        <div className="space-y-4">
          <p>
            GI値（グリセミック・インデックス）とは、<strong>食品を食べたあとの血糖値の上がりやすさ</strong>を数値化したものです。ブドウ糖を100として、相対的に表します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">分類</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">GI値の目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">イメージ</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">高GI</td>
                  <td className="p-2 border border-green-100 text-center">70以上</td>
                  <td className="p-2 border border-green-100">血糖値が急上昇。白米・食パン・菓子類など</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">中GI</td>
                  <td className="p-2 border border-green-100 text-center">56〜69</td>
                  <td className="p-2 border border-green-100">中間。パスタ・バナナなど</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">低GI</td>
                  <td className="p-2 border border-green-100 text-center">55以下</td>
                  <td className="p-2 border border-green-100">緩やかに上昇。玄米・そば・豆類・葉物野菜など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ざっくり言うと、<strong>精製されて白いもの・柔らかいものほど高GI、精製度が低く食物繊維が残っているものほど低GI</strong>という傾向があります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          血糖値スパイクが太りやすさにつながる理由
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "インスリンが脂肪を溜め込む", desc: "血糖値が急上昇すると、下げるためにインスリンが大量分泌される。インスリンには余った糖を脂肪として蓄える働きがあるため、急上昇→大量分泌の繰り返しは太りやすい。" },
              { title: "急降下で「ニセの空腹」が来る", desc: "急上昇した血糖値は急降下する。この落差で食後2〜3時間なのに強い空腹感や甘いもの欲が出る。間食が止まらない人は血糖値の乱高下が原因のことも。" },
              { title: "食後の眠気・だるさ", desc: "昼食後に猛烈に眠くなるのも血糖値スパイクのサイン。低GIの食事に変えると午後のパフォーマンスが変わる。" },
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
        <h2 id="foods" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          高GI・低GI食品の早見表
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <p className="text-sm font-bold text-red-700 mb-2">高GI（食べすぎ注意）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・白米・餅・食パン・フランスパン</li>
                <li>・うどん・コーンフレーク</li>
                <li>・じゃがいも（特にマッシュ）</li>
                <li>・砂糖・菓子類・菓子パン</li>
                <li>・ジュース・加糖飲料</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">低GI（積極的に選びたい）</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・玄米・大麦ごはん・オートミール</li>
                <li>・そば・全粒粉パン・パスタ（アルデンテ）</li>
                <li>・豆類・大豆製品</li>
                <li>・葉物野菜・きのこ・海藻</li>
                <li>・ヨーグルト・ナッツ・りんご</li>
              </ul>
            </div>
          </div>
          <p>
            肉・魚・卵などのタンパク質と脂質は、糖質をほとんど含まないため基本的に低GIです。<strong>「主食の質」を変えることがGI値対策の中心</strong>になります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="swap" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          今日からできる置き換え例
        </h2>
        <div className="space-y-4">
          <p>完璧を目指さず、よく食べるものから1つずつ置き換えるのが続くコツです。</p>
          <div className="space-y-3">
            {[
              { from: "白米", to: "大麦ごはん・雑穀米・玄米", point: "白米に大麦を混ぜるだけでOK。食物繊維も摂れて一石二鳥" },
              { from: "食パン（朝食）", to: "全粒粉パン・オートミール", point: "オートミールは牛乳＋ヨーグルトと合わせれば腹持ちも良い" },
              { from: "うどん（昼食）", to: "そば", point: "立ち食いでも選べる最強の置き換え。タンパク質もうどんより多い" },
              { from: "ポテトサラダ", to: "豆サラダ・海藻サラダ", point: "じゃがいもは意外と高GI。豆類は低GIでタンパク質も摂れる" },
              { from: "菓子パン（間食）", to: "ナッツ・ヨーグルト・高カカオチョコ", point: "間食こそGI値の差が大きい。血糖値の乱高下による「ニセの空腹」を断ち切る" },
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
          <p>
            また、同じ食品でも<strong>食べる順番と組み合わせでGI値の影響は変わります</strong>。野菜・タンパク質を先に食べる、酢・乳製品と一緒に摂る、といった工夫でも血糖値の上昇は緩やかになります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="caution" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          GI値だけに頼らない【注意点】
        </h2>
        <div className="space-y-3">
          {[
            { habit: "「低GIだから太らない」は誤解", desc: "低GIでもカロリーはある。玄米もナッツも食べすぎれば普通に太る。痩せるかどうかを決めるのはあくまでカロリー収支で、GI値は「質」を整える補助輪。" },
            { habit: "低GI表示のお菓子を免罪符にする", desc: "「低GIチョコだから」と量が増えたら本末転倒。お菓子は低GIでも所詮お菓子、という冷静さは持っておく。" },
            { habit: "数値を厳密に暗記しようとする", desc: "GI値は測定条件で変動するし、実際の食事は組み合わせで食べるもの。「白いものより茶色いもの」「柔らかいものより噛むもの」の大枠で十分実用になる。" },
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>GI値＝血糖値の上がりやすさ</strong>。急上昇はインスリンで脂肪を溜めやすい</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>主食を「白→茶色」に置き換える</strong>のが最も効果的</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>食べる順番・組み合わせ</strong>でも血糖値は緩やかにできる</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>大前提はカロリー収支</strong>。GI値は質を整える補助輪として使う</span></li>
          </ol>
          <p>
            「カロリーは守っているのに間食が止まらない」「午後の眠気がひどい」という人は、GI値を意識するだけで食事のつらさが変わるはずです。サクメシの食事プランと組み合わせて、量も質も整えていきましょう。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
