import type { Metadata } from "next";
import Link from "next/link";
import ColumnFooter from "@/components/column/ColumnFooter";
import ColumnHeader from "@/components/column/ColumnHeader";

export const metadata: Metadata = {
  alternates: { canonical: "/column/pfc-calculation" },
  title: "PFCバランスの計算方法｜初心者でも5分で分かるダイエットの基本 | サクメシ",
  description:
    "PFCバランスの計算方法を4ステップで解説。基礎代謝・TDEE・目標カロリー・PFC内訳の出し方を、ダイエット初心者にも分かりやすく説明します。",
};

const TOC = [
  { id: "what-is-pfc", label: "PFCバランスって何？" },
  { id: "why-important", label: "なぜPFCバランスが大事なの？" },
  { id: "calculation", label: "PFCバランスの計算方法【4ステップ】" },
  { id: "standard", label: "公的な基準の範囲とどう違う？" },
  { id: "menu", label: "計算した数字を献立に落とす" },
  { id: "mistake", label: "よくある計算ミス5つ" },
  { id: "record", label: "記録はどこまでやればいい？" },
  { id: "sakumeshi", label: "正直、自分で計算するのは面倒" },
  { id: "tips", label: "PFC管理のコツ" },
  { id: "experience", label: "計算してみて一番驚いたこと" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const MISTAKES = [
  { title: "食材の重さとタンパク質量を混同する", desc: "「タンパク質132g」は肉132gではありません。鶏むね肉100gに含まれるタンパク質は約23gなので、132gを肉だけで摂るなら約570g必要です。実際は複数の食材から分けて摂ります。" },
  { title: "炭水化物と糖質を同じものとして扱う", desc: "炭水化物＝糖質＋食物繊維です。計算上は炭水化物で扱いますが、食物繊維の枠も意識しておかないと、糖質ばかりになります。" },
  { title: "体重が減っても目標を更新しない", desc: "5kg落ちればBMRもTDEEも下がります。開始時の数字のまま続けると、いつか赤字が消えて止まります。1ヶ月に1回は計算し直してください。" },
  { title: "活動係数を高く見積もる", desc: "「週3回ジムに行くから1.55」と考えがちですが、それ以外の時間がデスクワークなら1.375が実態に近いことも。迷ったら低いほうを選ぶと安全です。" },
  { title: "調味料と飲み物を計算に入れない", desc: "ドレッシング・マヨネーズ・油・加糖飲料。ここだけで1日200〜400kcalになります。PFCで言えば、ほぼ全部が脂質か炭水化物です。" },
];

const FAQS = [
  {
    q: "PFCを毎日きっちり守らないとダメ？",
    a: "必要ありません。1日単位で完璧に合わせるより、1週間の平均で近ければ十分です。とくにタンパク質だけ確保して、あとは大きく外れなければ結果は出ます。",
  },
  {
    q: "低糖質と低脂質、どちらの比率を選ぶべき？",
    a: "続けられるほうです。どちらが優れているという結論は出ていません。米が好きなら低脂質、揚げ物や肉が好きなら低糖質、という選び方で問題ありません。",
  },
  {
    q: "脂質はどこまで減らしていい？",
    a: "極端に減らすとホルモンや肌に影響が出ます。目安として、総カロリーの15%は下回らないようにしてください。1,800kcalなら約30gが下限です。",
  },
  {
    q: "計算結果のカロリーだと明らかに足りない",
    a: "赤字が大きすぎる可能性があります。TDEE−500kcalがきついなら、−300kcalに緩めてください。ペースは落ちますが、続く設定のほうが最終的に早く着きます。",
  },
  {
    q: "身長・体重を入れるだけのアプリと数字が違う",
    a: "使っている計算式が違うためです。ハリス・ベネディクト式、国立健康・栄養研究所の式など複数あり、数百kcal差が出ることもあります。どれが正解というより、1つ選んで固定し、体重の動きで補正するのが実用的です。",
  },
];

export default function PfcCalculation() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        href="/column"
        className="text-sm text-green-600 hover:underline mb-6 inline-block"
      >
        ← コラム一覧に戻る
      </Link>

      <article>
        {/* ヘッダー */}
        <ColumnHeader slug="pfc-calculation" h1="PFCバランスの計算方法を分かりやすく解説！ダイエット初心者でも5分で分かる" />

        {/* 目次 */}
        <nav className="bg-green-50 rounded-xl p-5 border border-green-100 mb-10">
          <p className="text-sm font-bold text-green-700 mb-3">目次</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-green-700 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 本文 */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">

          {/* リード文 */}
          <div className="space-y-4">
            <p>
              「PFCバランスが大事」ってよく聞くけど、<strong>具体的にどう計算すればいいの？</strong>
            </p>
            <p>
              僕もダイエットを始めた頃、PFCと言われても正直ピンと来ませんでした。でも一度理解してしまえばめちゃくちゃシンプルだし、ダイエットの成功率がグッと上がります。
            </p>
            <p>
              この記事では、PFCバランスの基本から、自分に合った数値の出し方まで、計算が苦手な人でも分かるように解説します。
            </p>
          </div>

          <hr className="border-green-100" />

          {/* セクション1 */}
          <section>
            <h2
              id="what-is-pfc"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              PFCバランスって何？
            </h2>
            <div className="space-y-4">
              <p>PFCとは、3つの栄養素の頭文字です。</p>
              <ul className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm">
                  <span className="font-bold text-green-700 w-36 shrink-0">P（Protein）</span>
                  <span>タンパク質</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="font-bold text-green-700 w-36 shrink-0">F（Fat）</span>
                  <span>脂質</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="font-bold text-green-700 w-36 shrink-0">C（Carbohydrate）</span>
                  <span>炭水化物</span>
                </li>
              </ul>
              <p>
                この3つを「三大栄養素」と呼びます。僕たちが食べるもののカロリーは、ほぼ全てこの3つからできています。
              </p>
              <p>
                PFCバランスとは、<strong>1日の食事の中でこの3つをどんな割合で摂るか</strong>ということ。このバランスが崩れると、カロリーを減らしても思うように痩せなかったり、筋肉が落ちたり、体調を崩したりします。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション2 */}
          <section>
            <h2
              id="why-important"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              なぜPFCバランスが大事なの？
            </h2>
            <div className="space-y-4">
              <p>「カロリーだけ気にすればいいんじゃないの？」と思うかもしれません。でも同じ1500kcalでも、中身が全然違えば結果も変わります。</p>
              <p>たとえば、こんな2パターンを比べてみてください。</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">パターンA：カロリーだけ気にした食事</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>朝：菓子パン1個（400kcal）</li>
                    <li>昼：カップ麺（450kcal）</li>
                    <li>夜：おにぎり2個（400kcal）</li>
                    <li>間食：チョコレート（250kcal）</li>
                  </ul>
                  <p className="text-sm font-bold text-red-600 mt-2">合計：1500kcal（P:35g / F:50g / C:230g）</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-sm font-bold text-green-700 mb-2">パターンB：PFCバランスを意識した食事</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>朝：卵2個＋ごはん＋味噌汁（400kcal）</li>
                    <li>昼：鶏むね肉＋サラダ＋玄米（500kcal）</li>
                    <li>夜：鮭＋豆腐＋野菜＋ごはん少なめ（450kcal）</li>
                    <li>間食：ゆで卵＋ナッツ（150kcal）</li>
                  </ul>
                  <p className="text-sm font-bold text-green-600 mt-2">合計：1500kcal（P:110g / F:40g / C:160g）</p>
                </div>
              </div>

              <p>
                どちらも1500kcalですが、パターンAはタンパク質が全然足りません。これだと筋肉が落ちて、基礎代謝が下がって、リバウンドしやすい体になります。
              </p>
              <p>
                パターンBはタンパク質がしっかり摂れているので、筋肉を維持しながら脂肪を落とせます。<strong>同じカロリーでも「何で摂るか」で体の変わり方は全然違う</strong>んです。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション3 */}
          <section>
            <h2
              id="calculation"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              PFCバランスの計算方法【4ステップ】
            </h2>
            <div className="space-y-8">
              <p>自分に合ったPFCバランスを計算する方法を、ステップごとに説明します。電卓（スマホの計算機でOK）があれば5分でできます。</p>

              {/* ステップ1 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 id="step1" className="text-sm font-bold text-white">ステップ1：基礎代謝（BMR）を計算する</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">基礎代謝とは、何もしなくても体が消費するカロリーのことです。呼吸、心臓の動き、体温維持などに使われます。</p>
                  <p className="text-sm font-medium text-gray-700">計算式（ハリス・ベネディクトの式）：</p>
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2 text-sm">
                    <p><strong>男性：</strong> 88.4 + (13.4 × 体重kg) + (4.8 × 身長cm) - (5.7 × 年齢)</p>
                    <p><strong>女性：</strong> 447.6 + (9.2 × 体重kg) + (3.1 × 身長cm) - (4.3 × 年齢)</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-sm border border-green-100">
                    <p className="font-medium text-green-800 mb-1">例：35歳男性、体重70kg、身長170cmの場合</p>
                    <p className="text-gray-600">88.4 + (13.4 × 70) + (4.8 × 170) - (5.7 × 35)</p>
                    <p className="text-gray-600">= 88.4 + 938 + 816 - 199.5</p>
                    <p className="font-bold text-green-700">= 約1643kcal</p>
                  </div>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ステップ2：消費カロリー（TDEE）を計算する</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">基礎代謝に「どれくらい動いているか」の係数をかけます。</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">活動レベル</th>
                          <th className="text-center p-2 border border-green-100 font-semibold text-green-800">係数</th>
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">どんな人？</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr>
                          <td className="p-2 border border-green-100">ほぼ運動しない</td>
                          <td className="p-2 border border-green-100 text-center font-medium">1.2</td>
                          <td className="p-2 border border-green-100">デスクワーク中心、運動習慣なし</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-green-100">軽い運動（週1〜2回）</td>
                          <td className="p-2 border border-green-100 text-center font-medium">1.375</td>
                          <td className="p-2 border border-green-100">たまにウォーキングや軽い筋トレ</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-green-100">中程度の運動（週3〜5回）</td>
                          <td className="p-2 border border-green-100 text-center font-medium">1.55</td>
                          <td className="p-2 border border-green-100">定期的に筋トレやジョギング</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-green-100">激しい運動（週6〜7回）</td>
                          <td className="p-2 border border-green-100 text-center font-medium">1.725</td>
                          <td className="p-2 border border-green-100">ほぼ毎日しっかりトレーニング</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-sm border border-green-100">
                    <p className="font-medium text-green-800 mb-1">例：週1〜2回運動する場合</p>
                    <p className="text-gray-600">1643 × 1.375</p>
                    <p className="font-bold text-green-700">= 約2259kcal</p>
                    <p className="text-gray-500 text-xs mt-1">これが1日に消費するカロリーの目安です。</p>
                  </div>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ステップ3：目標カロリーを決める</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">目的によって、TDEEからの調整幅が変わります。</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">目的</th>
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">計算方法</th>
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">例（TDEE 2259kcal）</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr>
                          <td className="p-2 border border-green-100">減量</td>
                          <td className="p-2 border border-green-100">TDEE - 500kcal</td>
                          <td className="p-2 border border-green-100 font-medium">約1759kcal</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-green-100">維持</td>
                          <td className="p-2 border border-green-100">TDEEのまま</td>
                          <td className="p-2 border border-green-100 font-medium">約2259kcal</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-green-100">増量</td>
                          <td className="p-2 border border-green-100">TDEE + 300kcal</td>
                          <td className="p-2 border border-green-100 font-medium">約2559kcal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm">減量の場合、TDEEから500kcal引くのが定番です。これで週に約0.45kgのペースで脂肪が落ちます。</p>
                  <p className="text-sm bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-yellow-800">
                    ⚠️ <strong>最低でも1200kcal以下にはしないでください。</strong>極端なカロリー制限は体調を崩す原因になります。
                  </p>
                </div>
              </div>

              {/* ステップ4 */}
              <div className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-600 px-4 py-2">
                  <h3 className="text-sm font-bold text-white">ステップ4：PFCの内訳を計算する</h3>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-sm">目標カロリーが決まったら、それをP・F・Cに振り分けます。</p>
                  <p className="text-sm font-medium text-gray-700">おすすめのPFC比率</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="text-left p-2 border border-green-100 font-semibold text-green-800">タイプ</th>
                          <th className="text-center p-2 border border-green-100 font-semibold text-green-800">P</th>
                          <th className="text-center p-2 border border-green-100 font-semibold text-green-800">F</th>
                          <th className="text-center p-2 border border-green-100 font-semibold text-green-800">C</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="bg-green-50">
                          <td className="p-2 border border-green-100 font-medium text-green-800">バランス型（迷ったらこれ）</td>
                          <td className="p-2 border border-green-100 text-center">30%</td>
                          <td className="p-2 border border-green-100 text-center">25%</td>
                          <td className="p-2 border border-green-100 text-center">45%</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-green-100">低糖質寄り</td>
                          <td className="p-2 border border-green-100 text-center">35%</td>
                          <td className="p-2 border border-green-100 text-center">35%</td>
                          <td className="p-2 border border-green-100 text-center">30%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-2 border border-green-100">低脂質寄り</td>
                          <td className="p-2 border border-green-100 text-center">35%</td>
                          <td className="p-2 border border-green-100 text-center">15%</td>
                          <td className="p-2 border border-green-100 text-center">50%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-sm border border-green-100 space-y-2">
                    <p className="font-medium text-green-800">例：減量目的、1759kcal、バランス型の場合</p>
                    <div className="space-y-1 text-gray-600">
                      <p><strong>タンパク質（30%）</strong>：1759 × 0.30 = 528kcal ÷ 4 = <strong className="text-green-700">約132g</strong></p>
                      <p><strong>脂質（25%）</strong>：1759 × 0.25 = 440kcal ÷ 9 = <strong className="text-green-700">約49g</strong></p>
                      <p><strong>炭水化物（45%）</strong>：1759 × 0.45 = 792kcal ÷ 4 = <strong className="text-green-700">約198g</strong></p>
                    </div>
                    <p className="text-gray-700 pt-1">
                      つまり、この人は1日に<strong>タンパク質132g、脂質49g、炭水化物198g</strong>を目安に食べれば、無理なく減量できるということです。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <hr className="border-green-100" />

          {/* 公的基準との関係 */}
          <section>
            <h2
              id="standard"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              公的な基準の範囲とどう違う？
            </h2>
            <div className="space-y-4">
              <p>
                ここで正直に書いておきます。上で紹介した比率は、
                <strong>公的な食事摂取基準に示されている範囲とは少しずれています</strong>
                。
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="text-left p-2 border border-green-100 font-semibold text-green-800">区分</th>
                      <th className="text-center p-2 border border-green-100 font-semibold text-green-800">P</th>
                      <th className="text-center p-2 border border-green-100 font-semibold text-green-800">F</th>
                      <th className="text-center p-2 border border-green-100 font-semibold text-green-800">C</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr>
                      <td className="p-2 border border-green-100 font-medium">食事摂取基準の目標範囲（成人）</td>
                      <td className="p-2 border border-green-100 text-center">13〜20%</td>
                      <td className="p-2 border border-green-100 text-center">20〜30%</td>
                      <td className="p-2 border border-green-100 text-center">50〜65%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2 border border-green-100 font-medium">この記事のバランス型</td>
                      <td className="p-2 border border-green-100 text-center font-bold text-green-700">30%</td>
                      <td className="p-2 border border-green-100 text-center">25%</td>
                      <td className="p-2 border border-green-100 text-center">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                ずれているのはタンパク質です。理由ははっきりしていて、
                <strong>公的基準は「カロリーが足りている健康な状態」を前提にしている</strong>
                から。減量中はカロリーが不足しているので、そのままだと筋肉が削られます。そのぶんを見込んで、タンパク質の比率を高く設定しています。
              </p>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                <p className="font-bold text-amber-800 text-sm mb-1">⚠ そのため、次の方には当てはまりません</p>
                <p className="text-sm text-gray-600">
                  腎臓に持病がある方、たんぱく質・脂質・エネルギーの制限を受けている方、妊娠中・授乳中の方、成長期の方。該当する場合は、必ず主治医または管理栄養士の指示に従ってください。
                </p>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* 献立に落とす */}
          <section>
            <h2
              id="menu"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              計算した数字を献立に落とす
            </h2>
            <div className="space-y-4">
              <p>
                計算で挫折する人の多くは、
                <strong>「で、何を食べればいいの？」で止まります</strong>
                。先ほどの例（1,759kcal / P132g / F49g / C198g）を、実際の食事にするとこうなります。
              </p>
              <div className="space-y-3">
                {[
                  { meal: "朝食", menu: "卵2個＋納豆1パック＋ごはん150g＋味噌汁", pfc: "P24g / F14g / C60g", kcal: "約450kcal" },
                  { meal: "昼食", menu: "鶏むね肉150g＋大麦ごはん150g＋サラダ＋味噌汁", pfc: "P38g / F6g / C60g", kcal: "約450kcal" },
                  { meal: "間食", menu: "プロテイン1杯＋ギリシャヨーグルト", pfc: "P30g / F2g / C10g", kcal: "約200kcal" },
                  { meal: "夕食", menu: "鮭1切れ＋木綿豆腐半丁＋野菜炒め＋ごはん120g", pfc: "P40g / F20g / C65g", kcal: "約650kcal" },
                ].map((row) => (
                  <div key={row.meal} className="bg-white rounded-xl p-4 border border-green-100">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="font-bold text-green-700 text-sm">{row.meal}</p>
                      <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{row.kcal}</span>
                    </div>
                    <p className="text-sm text-gray-600">{row.menu}</p>
                    <p className="text-xs text-gray-500 mt-1">{row.pfc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-green-700 text-sm mb-1">合計 約1,750kcal / P132g・F42g・C195g</p>
                <p className="text-sm text-gray-600">
                  目標にほぼ一致しました。ポイントは
                  <strong>タンパク質から先に埋めて、残りの枠に主食と脂質を入れる</strong>
                  という順番です。逆にやると、必ずタンパク質が足りなくなります。
                </p>
              </div>
              <p className="text-sm text-gray-500">
                ※ 数値は食材や商品によって変動します。1食ごとにぴったり合わせる必要はなく、1日の合計で近ければ十分です。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* よくある計算ミス */}
          <section>
            <h2
              id="mistake"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              よくある計算ミス5つ
            </h2>
            <div className="space-y-3">
              {MISTAKES.map((m) => (
                <div key={m.title} className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="font-bold text-red-700 text-sm mb-1">❌ {m.title}</p>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          {/* 記録 */}
          <section>
            <h2
              id="record"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              記録はどこまでやればいい？
            </h2>
            <div className="space-y-4">
              <p>
                「毎食すべて記録し続けないといけないのか」と聞かれますが、
                <strong>答えはノーです</strong>
                。記録は目的ではなく、感覚を作るための道具です。
              </p>
              <div className="space-y-2">
                {[
                  { phase: "最初の2週間", task: "口に入れたものを全部記録する", why: "自分がふだん何をどれだけ食べているかを知るため。ここは省略できません" },
                  { phase: "1〜2ヶ月目", task: "主食とタンパク源だけ記録する", why: "定番メニューの数字を覚える期間。細かい調味料まで追わなくてよくなります" },
                  { phase: "3ヶ月目以降", task: "体重の推移だけ見る", why: "自分の定番の組み合わせが頭に入っていれば、計算しなくても大きく外れません" },
                  { phase: "止まったとき", task: "3日だけ全部記録し直す", why: "隠れカロリーを見つけるための一時的な作業。ずっと続ける必要はありません" },
                ].map((r) => (
                  <div key={r.phase} className="bg-white rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs bg-green-600 text-white font-bold px-2 py-1 rounded whitespace-nowrap">{r.phase}</span>
                      <p className="text-sm font-bold text-gray-800">{r.task}</p>
                    </div>
                    <p className="text-xs text-gray-500">{r.why}</p>
                  </div>
                ))}
              </div>
              <p>
                記録を一生続ける前提だと、始める前に嫌になります。
                <strong>最初の2週間だけ本気でやる</strong>
                と決めれば、そのあとはかなり楽になります。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション4 */}
          <section>
            <h2
              id="sakumeshi"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              正直、自分で計算するのは面倒
            </h2>
            <div className="space-y-4">
              <p>ここまで読んで「計算めんどくさ…」と思った方、正直な気持ちだと思います。</p>
              <p>基礎代謝の計算、活動係数の選択、PFC比率の計算…。理屈は分かっても、毎回自分でやるのは大変です。</p>
              <p>
                <strong>そこでサクメシを作りました。</strong>
              </p>
              <p>
                サクメシはかんたんな質問に答えるだけで、今やった計算を全部AIが自動でやってくれます。しかもカロリーとPFCだけじゃなく、<strong>1週間分の具体的な食事メニュー</strong>まで提案してくれます。
              </p>
              <p>自炊レシピもコンビニ代替も付いているので、計算結果をどう食事に落とし込めばいいか迷いません。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション5 */}
          <section>
            <h2
              id="tips"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              PFC管理のコツ
            </h2>
            <div className="space-y-5">
              <p>最後に、PFCバランスを日常で管理するコツを3つ紹介します。</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800 mb-1">1. 完璧を目指さない</p>
                  <p>
                    PFCバランスはあくまで「目安」です。毎食ぴったり合わせる必要はありません。1日トータルでだいたい合っていればOK。<strong>8割守れていれば十分</strong>です。
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">2. タンパク質を最優先で考える</p>
                  <p>
                    3つの中で一番意識すべきはタンパク質です。意識しないと確実に不足します。まずは毎食「タンパク質は何で摂るか？」から考えると、自然とバランスが整いやすくなります。
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">3. 脂質は「見えない脂」に注意</p>
                  <p>
                    調理油、ドレッシング、マヨネーズ、お菓子に含まれる脂質は気づきにくいです。目に見える脂（ステーキの脂身など）より、こういった「見えない脂」のほうが摂りすぎの原因になります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* 実体験 */}
          <section>
            <h2
              id="experience"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              計算してみて一番驚いたこと
            </h2>
            <div className="space-y-4">
              <p>
                92kgあった頃、初めてこの計算をやって驚いたのは
                <strong>タンパク質の目標値でした</strong>
                。出てきた数字は130g前後。当時の自分は、記録してみたら1日50gしか摂れていませんでした。<strong>目標の4割です</strong>。
              </p>
              <p>
                もうひとつ驚いたのが、脂質です。目標は約50gだったのに、記録すると100gを軽く超えていました。揚げ物を毎日食べていたわけでもないのに、です。内訳を見ると、
                <strong>ドレッシング・炒め油・マヨネーズ・菓子パン</strong>
                で積み上がっていました。自覚のある脂質より、無自覚な脂質のほうがはるかに多かった。
              </p>
              <p>
                この2つが分かった時点で、やることが決まりました。タンパク質を倍にして、見えない脂を削る。
                <strong>「痩せるために何をすればいいか」が、精神論から具体的な作業に変わった瞬間</strong>
                です。
              </p>
              <p>
                逆に失敗したのは、最初の頃にPFCを1食ごとにぴったり合わせようとしたことです。3日で疲れてやめました。今は1日の合計で見て、タンパク質だけ死守、あとはだいたい。それでも結果は出ます。
                <strong>厳密さより継続性のほうが効きます</strong>。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* FAQ */}
          <section>
            <h2
              id="faq"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
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

          {/* セクション6 */}
          <section>
            <h2
              id="summary"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              まとめ
            </h2>
            <div className="space-y-4">
              <p>PFCバランスの計算は4ステップです。</p>
              <ol className="space-y-2 bg-green-50 rounded-xl p-4 border border-green-100">
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>基礎代謝（BMR）を計算する</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>消費カロリー（TDEE）を出す</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>目標カロリーを決める</strong>（減量ならTDEE−500kcal、下限1,200kcal）</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>PFC比率で内訳を計算する</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span>献立は<strong>タンパク質から先に埋める</strong>。逆にやると必ず不足する</span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">6.</span><span>体重が変わったら<strong>1ヶ月に1回は計算し直す</strong></span></li>
              </ol>
              <p>
                理屈はシンプルですが、自分でやるのは面倒。だからこそサクメシのようなツールを活用して、<strong>考える時間を減らして行動する時間を増やす</strong>のがおすすめです。
              </p>
              <p>まだ自分のPFCバランスを知らない方は、ぜひ一度試してみてください。</p>
            </div>
          </section>

        </div>

        <ColumnFooter slug="pfc-calculation" ctaLabel="サクメシで自分のPFCバランスを計算する →" />
      </article>
    </div>
  );
}
