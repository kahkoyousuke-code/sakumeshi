import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "体重が一晩で2kg増えた｜むくみと塩分の関係を正しく理解する | サクメシ",
  description:
    "一晩で体重が増えるのは脂肪ではなく水分です。塩分とむくみの仕組み、翌日のリセット方法、カリウムを含む食材と外食での対策を解説します。",
};

const TOC = [
  { id: "fact", label: "一晩で増えた2kgは脂肪ではない" },
  { id: "salt", label: "塩分でむくむ仕組み" },
  { id: "reset", label: "食べすぎた翌日のリセット方法" },
  { id: "potassium", label: "むくみに効く食材（カリウム）" },
  { id: "hidden", label: "見落としがちな高塩分フード" },
  { id: "ng", label: "やってはいけないむくみ対策" },
  { id: "summary", label: "まとめ" },
];

export default function SaltSwelling() {
  return (
    <ColumnShell
      slug="salt-swelling"
      h1="体重が一晩で2kg増えた｜むくみと塩分の関係を正しく理解する"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「昨日ラーメンを食べたら、朝の体重が2kg増えていた」——ダイエット中に一番心が折れる瞬間かもしれません。</p>
        <p>
          でも安心してください。<strong>一晩で増えた2kgは、ほぼ確実に脂肪ではありません</strong>。脂肪を1kg増やすには約7,200kcalの余剰が必要で、一食で達成できる量ではないからです。
        </p>
        <p>この記事では、増えた体重の正体と、翌日にやるべきことを解説します。</p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="fact" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          一晩で増えた2kgは脂肪ではない
        </h2>
        <div className="space-y-4">
          <p>体重計の数字は、1日のうちでも当たり前に1〜2kg動きます。内訳はこうです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">増減の原因</th>
                  <th className="text-center p-2 border border-green-100 font-semibold text-green-800">変動幅の目安</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">戻るまで</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">塩分による水分保持</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜2kg</td>
                  <td className="p-2 border border-green-100">1〜3日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">糖質の摂取（グリコーゲン）</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜1.5kg</td>
                  <td className="p-2 border border-green-100">1〜2日</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">胃腸の内容物</td>
                  <td className="p-2 border border-green-100 text-center">0.5〜1kg</td>
                  <td className="p-2 border border-green-100">1日</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">脂肪の増加</td>
                  <td className="p-2 border border-green-100 text-center">1日で最大0.2kg程度</td>
                  <td className="p-2 border border-green-100">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            糖質は体内で水分とセットで蓄えられるため、<strong>ラーメンや寿司のように「塩分＋糖質」が重なると一晩で一気に増えます</strong>。逆に言えば、水分が抜ければ数日で戻ります。
          </p>
          <p>
            だからこそ、<strong>判断は1日単位ではなく週平均で</strong>。毎朝一喜一憂するのが一番のストレスです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="salt" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          塩分でむくむ仕組み
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            {[
              { title: "体は塩分濃度を一定に保とうとする", desc: "塩分（ナトリウム）を多く摂ると、濃度を薄めるために体が水分を溜め込む。これがむくみと体重増の正体。" },
              { title: "喉が渇くのは正常な反応", desc: "しょっぱいものを食べた後に水が欲しくなるのは、体が薄めようとしているサイン。水を我慢しても解決しない。" },
              { title: "日本人は元々塩分が多い", desc: "味噌汁・漬物・醤油・麺類の汁と、和食は塩分が積み上がりやすい。目標は1日6〜7g前後だが、平均は10g前後とされる。" },
              { title: "顔と脚に出やすい", desc: "朝は顔、夕方は脚。重力の影響で時間帯によって出る場所が変わる。" },
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
        <h2 id="reset" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          食べすぎた翌日のリセット方法
        </h2>
        <div className="space-y-3">
          {[
            { n: "1", title: "水をしっかり飲む", desc: "むくんでいるときこそ水分を減らさない。体が水を溜め込むのは足りないと感じているから。1.5〜2Lを目安に。" },
            { n: "2", title: "カリウムを含む食材を足す", desc: "カリウムはナトリウムの排出を助ける。バナナ・アボカド・ほうれん草・海藻・きのこなどを1品足す。" },
            { n: "3", title: "翌日の塩分を控える", desc: "絶食する必要はない。味噌汁を1杯にする、麺の汁を残す、加工肉を避ける程度で十分。" },
            { n: "4", title: "普段どおり食べる", desc: "1日抜いて帳尻を合わせようとすると、反動で食欲が暴れる。翌日は「いつもの食事に戻す」が正解。" },
            { n: "5", title: "軽く歩く・湯船に浸かる", desc: "血流が戻るとむくみは抜けやすい。ふくらはぎを動かすのが効果的。" },
          ].map((item) => (
            <div key={item.n} className="bg-white rounded-xl border border-green-100 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">
                <span className="text-green-700">{item.n}. {item.title}</span>
              </p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="potassium" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          むくみに効く食材（カリウム）
        </h2>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">手軽に足せる</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・バナナ・キウイ・アボカド</li>
                <li>・納豆・豆類</li>
                <li>・ヨーグルト・牛乳</li>
                <li>・トマト・きゅうり</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <p className="text-sm font-bold text-green-700 mb-2">食事に組み込む</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>・ほうれん草・小松菜</li>
                <li>・さつまいも・かぼちゃ</li>
                <li>・わかめ・ひじきなど海藻</li>
                <li>・きのこ類</li>
              </ul>
            </div>
          </div>
          <p>
            むくみ対策として特別なサプリは必要ありません。<strong>野菜・海藻・果物を普通に食べていれば足りる</strong>栄養素です。腎臓に持病がある場合はカリウム制限が必要なこともあるので、その場合は主治医の指示を優先してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="hidden" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          見落としがちな高塩分フード
        </h2>
        <div className="space-y-4">
          <p>「しょっぱくないから塩分は少ない」とは限りません。</p>
          <div className="space-y-3">
            {[
              { from: "ラーメン（汁まで）", to: "汁を残す", point: "1杯で1日分の塩分に達することも。汁を残すだけで2〜3g減らせる" },
              { from: "パン・シリアル", to: "量に注意", point: "甘い味でも食パンには塩が入っている。主食から意外と積み上がる" },
              { from: "ハム・ソーセージ・練り物", to: "頻度を下げる", point: "加工肉・練り物は保存のため塩分が高い。毎日の常備菜にはしない" },
              { from: "コンビニ弁当・冷凍食品", to: "栄養成分表示を見る", point: "「食塩相当量」の欄をチェック。1食3g超えが続くと積み上がる" },
              { from: "外食の味噌汁・スープ", to: "1杯まで", point: "おかわり無料は要注意。汁物は最も塩分を摂りやすい形" },
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
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="ng" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          やってはいけないむくみ対策
        </h2>
        <div className="space-y-3">
          {[
            { habit: "水を飲まない", desc: "最も多い勘違い。水分を減らすと体はさらに溜め込もうとする。むくんでいるときこそ普通に飲む。" },
            { habit: "増えた体重ぶんを絶食で取り返す", desc: "増えたのは水分なので、絶食しても脂肪は減らない。むしろ反動のドカ食いを招くだけ。" },
            { habit: "毎朝の体重で一喜一憂する", desc: "日々の変動は水分。落ち込んで自暴自棄になるのが一番の損失。週の平均で見れば流れは分かる。" },
            { habit: "利尿作用のあるサプリに頼る", desc: "一時的に水分は抜けるが脂肪は減らない。数字上の見た目が変わるだけで、ダイエットの進捗ではない。" },
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span>一晩で増えた1〜2kgは<strong>ほぼ水分</strong>。脂肪は1日でそこまで増えない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>塩分＋糖質</strong>が重なると水分を溜め込みやすい。数日で戻る</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span>翌日は<strong>水をしっかり飲み、カリウムを足し、普通に食べる</strong></span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span>体重の判断は<strong>週平均</strong>で。1日単位で落ち込まない</span></li>
          </ol>
          <p>
            体重の増減に振り回されず続けるには、日々の食事の中身を先に決めてしまうのが一番ラクです。サクメシなら7日分の食事プランをまとめて作れるので、「今日何食べよう」で迷わなくなります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
