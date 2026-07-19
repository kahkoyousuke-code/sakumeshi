import type { Metadata } from "next";
import ColumnShell from "@/components/column/ColumnShell";

export const metadata: Metadata = {
  title: "生理周期とダイエット｜痩せやすい時期・停滞する時期を知る | サクメシ",
  description:
    "生理周期によって体重や食欲が変動する仕組みを解説。時期ごとの食事のコツと、生理前の食欲・むくみとの付き合い方を紹介します。",
};

const TOC = [
  { id: "why", label: "生理周期で体重が動く仕組み" },
  { id: "phases", label: "4つの時期と体の変化" },
  { id: "luteal", label: "生理前の食欲・むくみとの付き合い方" },
  { id: "tips", label: "周期に合わせた食事のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function FemaleCycleDiet() {
  return (
    <ColumnShell
      slug="female-cycle-diet"
      h1="生理周期とダイエット｜痩せやすい時期・停滞する時期を知る"
      toc={TOC}
    >
      {/* リード文 */}
      <div className="space-y-4">
        <p>「生理前になると食欲が止まらない」「体重が急に1〜2kg増えて落ち込む」</p>
        <p>
          女性のダイエットには、男性にはない大きな要素があります。それが<strong>生理周期によるホルモンの波</strong>です。この波を知らずに毎日体重計の数字と戦うと、必要のない自己嫌悪でダイエットを挫折しがちです。
        </p>
        <p>
          この記事では、周期ごとの体の変化と、それに合わせた「無理しない食事管理」の考え方を解説します。
        </p>
      </div>

      <hr className="border-green-100" />

      <section>
        <h2 id="why" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          生理周期で体重が動く仕組み
        </h2>
        <div className="space-y-4">
          <p>
            鍵になるのは2つの女性ホルモン、<strong>エストロゲン（卵胞ホルモン）</strong>と<strong>プロゲステロン（黄体ホルモン）</strong>です。
          </p>
          <div className="space-y-2">
            {[
              { title: "エストロゲンが優位な時期（生理後〜排卵）", desc: "心身が安定し、代謝も比較的スムーズ。食欲が落ち着き、ダイエットの成果が出やすい。" },
              { title: "プロゲステロンが優位な時期（排卵後〜生理前）", desc: "体が水分と栄養を溜め込むモードに。むくみで体重が1〜3kg増えることもあるが、その大半は水分で脂肪ではない。" },
              { title: "生理前の食欲増加は生理現象", desc: "血糖値が不安定になり、甘いものへの欲求が強くなる。意志が弱いのではなく、ホルモンの仕業。" },
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
            ⚠️ 一番大事なこと：<strong>生理前〜生理中の体重増は「太った」ではありません</strong>。ここで焦って絶食したり、諦めてヤケ食いしたりするのが一番もったいないパターンです。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="phases" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          4つの時期と体の変化
        </h2>
        <div className="space-y-4">
          <p>28日周期の場合の目安です（個人差があります）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">時期</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">体の状態</th>
                  <th className="text-left p-2 border border-green-100 font-semibold text-green-800">ダイエットとの相性</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="p-2 border border-green-100 font-medium">月経期（1〜7日目）</td>
                  <td className="p-2 border border-green-100">体温低め・貧血気味・だるさ</td>
                  <td className="p-2 border border-green-100">無理しない。鉄分・タンパク質の補給を優先</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">卵胞期（8〜14日目）</td>
                  <td className="p-2 border border-green-100">心身が最も安定・代謝スムーズ</td>
                  <td className="p-2 border border-green-100">◎ 成果が出やすい「ボーナス期間」。新しい習慣を始めるならここ</td>
                </tr>
                <tr>
                  <td className="p-2 border border-green-100 font-medium">排卵期（14日目前後）</td>
                  <td className="p-2 border border-green-100">切り替わりのタイミング</td>
                  <td className="p-2 border border-green-100">○ 卵胞期の流れを維持</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-green-100 font-medium">黄体期（15〜28日目）</td>
                  <td className="p-2 border border-green-100">むくみ・食欲増・イライラ（PMS）</td>
                  <td className="p-2 border border-green-100">△ 体重は動かなくて当然。「現状維持できれば勝ち」の期間</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ポイントは、<strong>1ヶ月を「常に全力」で戦わないこと</strong>。卵胞期に整えて、黄体期は維持できれば十分。この強弱をつけるだけで、精神的な消耗が大きく減ります。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="luteal" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          生理前の食欲・むくみとの付き合い方
        </h2>
        <div className="space-y-4">
          <p>一番つらい黄体期を乗り切る、現実的なコツを紹介します。</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">1. 「我慢ゼロ」を目指さず、置き換える</p>
              <p>
                甘いものへの欲求を根性で抑え込むのは逆効果になりがち。<strong>高カカオチョコ2〜3枚、ギリシャヨーグルト＋はちみつ少量、干し芋、ホットココア</strong>など「満足感のある逃げ道」を用意しておきましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">2. 血糖値を安定させる食べ方にする</p>
              <p>
                空腹時間が長いと反動のドカ食いが起きやすくなります。3食＋計画的な間食で血糖値の乱高下を防ぐと、食欲の暴走がかなり抑えられます。食べる順番（野菜→タンパク質→炭水化物）も有効です。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">3. むくみ対策は「塩分控えめ＋カリウム＋水分」</p>
              <p>
                むくむからと水分を控えるのは逆効果。水はしっかり飲みつつ、塩分の濃い食事を控え、カリウムを含む食品（バナナ・アボカド・ほうれん草・海藻）を意識しましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-1">4. 体重測定は「週平均」か「周期の同じ日」で比べる</p>
              <p>
                毎日の数字に一喜一憂せず、<strong>先月の同じ時期と比べる</strong>のが正解。黄体期の+2kgは評価対象外です。
              </p>
            </div>
          </div>
          <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
            ⚠️ PMS や生理痛が日常生活に支障をきたすレベルの場合は、ダイエットの工夫で解決しようとせず、婦人科の受診を検討してください。
          </p>
        </div>
      </section>

      <hr className="border-green-100" />

      <section>
        <h2 id="tips" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
          周期に合わせた食事のコツ
        </h2>
        <div className="space-y-4">
          <div className="space-y-3">
            {[
              { meal: "月経期", example: "鉄分＋タンパク質をしっかり", point: "赤身肉・あさり・小松菜・レバーなど。経血で失われる鉄分を補い、だるさを軽減。カロリーを攻めて減らす時期ではない" },
              { meal: "卵胞期", example: "計画通りのダイエット食", point: "食欲が安定しているうちに、目標カロリー・PFC通りの食事を淡々と。運動を強化するのもこの時期が最適" },
              { meal: "黄体期", example: "維持カロリー寄り＋間食を計画に組み込む", point: "無理な赤字を狙わず、たんぱく質と食物繊維で満腹感を確保。間食は「食べていいもの」を先に決めておく" },
            ].map((item) => (
              <div key={item.meal} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">{item.meal}：{item.example}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.point}</p>
                </div>
              </div>
            ))}
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
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>生理前の体重増はほぼ水分</strong>。「太った」と混同しない</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>卵胞期に頑張り、黄体期は維持で勝ち</strong>と強弱をつける</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>生理前の食欲は置き換え＋血糖値の安定</strong>で対処する</span></li>
            <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>体重は周期の同じ日で比較</strong>する。つらい症状は婦人科へ</span></li>
          </ol>
          <p>
            ホルモンの波は避けられませんが、知っていれば戦い方を変えられます。サクメシで自分に合ったベースの食事プランを作っておけば、「卵胞期はプラン通り・黄体期はゆるめに」という運用がしやすくなります。
          </p>
        </div>
      </section>
    </ColumnShell>
  );
}
