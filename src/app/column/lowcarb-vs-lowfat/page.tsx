import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "低糖質と低脂質どっちがいい？違いとおすすめの選び方 | サクメシ",
  description:
    "低糖質ダイエットと低脂質ダイエット、どちらが自分に合うか分からない方へ。10年以上のダイエット経験をもとに、それぞれのメリット・デメリットと選び方を解説します。",
};

const TOC = [
  { id: "basics", label: "そもそも「低糖質」「低脂質」って何？" },
  { id: "lowcarb", label: "低糖質のメリット・デメリット" },
  { id: "lowfat", label: "低脂質のメリット・デメリット" },
  { id: "which", label: "結局どっちを選べばいいの？" },
  { id: "important", label: "どっちにしても大事なこと" },
  { id: "summary", label: "まとめ" },
];

export default function LowcarbVsLowfat() {
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
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-03-20</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            低糖質と低脂質、結局どっちがいいの？10年ダイエットしてきた40代サラリーマンが本音で解説
          </h1>
        </header>

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
            <p>ダイエットを始めようとすると、必ずぶつかるのがこの問題。</p>
            <p className="font-bold text-gray-800">「低糖質と低脂質、どっちが痩せるの？」</p>
            <p>ネットで調べるとどっちの情報もあって、正直よく分からないですよね。</p>
            <p>
              結論から言うと、<strong>どっちでも痩せます。大事なのは「自分に合うほう」を選ぶこと。</strong>
            </p>
            <p>
              この記事では、10年以上筋トレとダイエットを続けてきた僕が、低糖質と低脂質それぞれのメリット・デメリットを正直に解説します。読み終わる頃には、自分がどっちを選ぶべきか分かるはずです。
            </p>
          </div>

          <hr className="border-green-100" />

          {/* セクション1 */}
          <section>
            <h2
              id="basics"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              そもそも「低糖質」「低脂質」って何？
            </h2>
            <div className="space-y-4">
              <p>まず言葉の意味をはっきりさせておきましょう。</p>
              <p>
                <strong>低糖質ダイエット</strong>は、ごはん・パン・麺・砂糖など糖質（炭水化物）を控えめにする方法です。その分、肉や魚、卵、チーズなどタンパク質と脂質をしっかり食べます。
              </p>
              <p>
                <strong>低脂質ダイエット</strong>は、揚げ物・バター・油・脂身など脂質を控えめにする方法です。その分、ごはんやパンなど炭水化物はわりと普通に食べられます。
              </p>
              <p>
                どちらも<strong>総カロリーが消費カロリーを下回れば痩せる</strong>という原則は同じ。違うのは「何を減らすか」だけです。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション2 */}
          <section>
            <h2
              id="lowcarb"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              低糖質のメリット・デメリット
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-700 mb-3">メリット</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">体重が早く落ちやすい</p>
                    <p>
                      低糖質を始めると、最初の1〜2週間で一気に体重が落ちることが多いです。これは体内のグリコーゲン（糖質の貯蔵分）と一緒に水分が抜けるから。実際の脂肪が急に減ったわけではないんですが、数字が動くとモチベーションが上がりますよね。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">お肉やチーズが食べられる</p>
                    <p>
                      脂質を制限しないので、ステーキやチーズ、バターなど「ダイエット中に食べちゃダメそうなもの」が食べられます。食事の満足感が高いのは大きなメリットです。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">血糖値の乱高下が減る</p>
                    <p>
                      糖質を控えると食後に眠くなりにくくなる人が多いです。午後の仕事のパフォーマンスが上がったと感じる人もいます。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-700 mb-3">デメリット</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">ごはん・パン・麺が食べられない</p>
                    <p>
                      日本人にとってこれはかなりキツいです。定食屋でごはん抜き、ラーメン禁止、うどん禁止。付き合いの食事でも困る場面が多いです。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">長期間続けにくい</p>
                    <p>
                      最初は新鮮でも、1〜2ヶ月するとストレスが溜まってくる人が多いです。「もうごはん食べたい…」となって爆食い→リバウンドというパターンは本当によく聞きます。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">筋トレのパフォーマンスが落ちる</p>
                    <p>
                      糖質は筋トレのエネルギー源です。糖質が足りないと力が出なくて、トレーニングの質が下がります。運動習慣がある人は要注意。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">便秘になりやすい</p>
                    <p>
                      ごはんやパンには食物繊維も含まれているので、これを減らすとお腹の調子が悪くなることがあります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション3 */}
          <section>
            <h2
              id="lowfat"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              低脂質のメリット・デメリット
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-700 mb-3">メリット</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">ごはんが食べられる</p>
                    <p>
                      これが最大のメリット。ごはん、パスタ、うどん、パン。日本人が大好きな主食を普通に食べられます。外食でも困りにくいです。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">カロリーカットの効率がいい</p>
                    <p>
                      脂質は1gあたり9kcal。タンパク質や炭水化物は4kcal。つまり脂質を減らすと少量でも大きなカロリーカットになります。揚げ物をやめるだけで1食あたり200〜300kcal減ることも。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">長期間続けやすい</p>
                    <p>
                      食事の選択肢が広いので、ストレスが溜まりにくいです。「ごはんは食べていい」というだけで、精神的にかなり楽になります。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">筋トレとの相性がいい</p>
                    <p>
                      糖質をしっかり摂れるので、トレーニングのエネルギーが確保できます。筋肉を維持しながら脂肪を落としたい人にはこちらが向いています。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-700 mb-3">デメリット</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">体重の落ちが最初はゆっくり</p>
                    <p>
                      低糖質のように最初にドンと落ちることは少ないです。でもこれは逆に言えば「脂肪がじわじわ落ちている」ということなので、実質的な効果は同じかそれ以上です。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">調理方法に制限がある</p>
                    <p>
                      揚げ物、炒め物の油、バター、マヨネーズ、ドレッシング…脂質の多い調理法や調味料を避ける必要があります。鶏むね肉は食べていいけど唐揚げはNG、みたいな感じです。
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">お肉の部位を選ぶ必要がある</p>
                    <p>
                      牛バラやカルビは脂質が高いのでNG。鶏むね肉、ささみ、豚ヒレ肉、白身魚など、脂質の少ない部位を選ぶ必要があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション4 */}
          <section>
            <h2
              id="which"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              結局どっちを選べばいいの？
            </h2>
            <div className="space-y-5">
              <p>ここが一番知りたいところですよね。僕の経験では、こういう選び方がおすすめです。</p>

              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <h3 className="text-base font-bold text-green-800 mb-2">低糖質が向いている人</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>ごはんよりお肉が好きな人</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>短期間で結果を出したい人（1〜2ヶ月以内）</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>運動をほとんどしない人</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>デスクワーク中心で食後の眠気が気になる人</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <h3 className="text-base font-bold text-green-800 mb-2">低脂質が向いている人</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>ごはんが大好きな人（これが一番大事）</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>3ヶ月以上かけてじっくり痩せたい人</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>筋トレや運動をしている人</li>
                  <li className="flex gap-2"><span className="text-green-500 shrink-0">•</span>長く続けられる方法がいい人</li>
                </ul>
              </div>

              <p>
                <strong>迷ったら低脂質をおすすめします。</strong>
              </p>
              <p>
                理由はシンプルで、<strong>続けやすいから</strong>です。ダイエットは結局「続けた人が勝つ」ゲームなので、ストレスが少ない方法を選ぶのが正解です。
              </p>
              <p>
                僕自身も90kgから78kgまで落としたときは低脂質ベースでした。ごはんは毎食食べていたし、お酒も週末は飲んでいました。それでも半年で12kg落とせたのは、ストレスなく続けられたからです。
              </p>
            </div>
          </section>

          <hr className="border-green-100" />

          {/* セクション5 */}
          <section>
            <h2
              id="important"
              className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100"
            >
              どっちにしても大事なこと
            </h2>
            <div className="space-y-5">
              <p>低糖質でも低脂質でも、共通して大事なのはこの3つ。</p>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800 mb-1">1. タンパク質はしっかり摂る</p>
                  <p>
                    どちらの方法を選んでも、タンパク質だけは減らさないでください。体重×1.5〜2gが目安。これを守らないと筋肉が落ちて、リバウンドしやすい体になります。
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">2. 極端にやらない</p>
                  <p>
                    低糖質でも完全に糖質ゼロにする必要はないし、低脂質でも脂質ゼロにしてはいけません。「控えめにする」くらいでちょうどいいです。
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">3. カロリーの総量を意識する</p>
                  <p>
                    どちらの方法も、結局は「摂取カロリー＜消費カロリー」が前提です。低糖質だからといって脂質を無限に食べていいわけではないし、低脂質だからといってごはんを3杯食べていいわけではありません。
                  </p>
                </div>
              </div>
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
              <p>
                低糖質と低脂質、どちらが優れているということはありません。<strong>自分の食の好みとライフスタイルに合うほう</strong>を選ぶのが正解です。
              </p>
              <p>
                迷ったら、まずはサクメシで食事プランを作ってみてください。質問の中で「低糖質」「低脂質」を選ぶだけで、それぞれに最適化されたPFCバランスと1週間の食事メニューをAIが自動で作ってくれます。
              </p>
              <p>
                両方試してみて、「こっちのメニューのほうが自分に合いそう」と感じたほうを選ぶのが一番確実です。
              </p>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/form"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
          >
            サクメシで食事プランを作る →
          </Link>
        </div>

        {/* note誘導 */}
        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            もっと詳しく知りたい方は →{" "}
            <a
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              PFCの基本と食材選びガイド（note）
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
