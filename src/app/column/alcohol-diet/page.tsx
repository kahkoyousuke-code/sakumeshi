import type { Metadata } from "next";
import Link from "next/link";
import ColumnFooter from "@/components/column/ColumnFooter";

export const metadata: Metadata = {
  title: "お酒とダイエットの両立｜太りにくいお酒の選び方と飲み方ルール | サクメシ",
  description:
    "ダイエット中でもお酒を楽しむための選び方と飲み方を解説。太りにくいお酒の種類、避けるべき飲み物、おつまみの選び方まで紹介します。",
};

const TOC = [
  { id: "alcohol-diet-relation", label: "アルコールとダイエットの関係" },
  { id: "good-drinks", label: "太りにくいお酒の種類" },
  { id: "bad-drinks", label: "太りやすいお酒" },
  { id: "rules", label: "飲み方ルール" },
  { id: "snacks", label: "おつまみの選び方" },
  { id: "summary", label: "まとめ" },
];

export default function AlcoholDiet() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/column" className="text-sm text-green-600 hover:underline mb-6 inline-block">
        ← コラム一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <p className="text-xs text-gray-400 mb-2">2026-05-09</p>
          <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
            お酒とダイエットの両立｜太りにくいお酒の選び方と飲み方ルール
          </h1>
        </header>

        <nav className="bg-green-50 rounded-xl p-5 border border-green-100 mb-10">
          <p className="text-sm font-bold text-green-700 mb-3">目次</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-green-700 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">

          <div className="space-y-4">
            <p>「お酒が好きでやめられない。でもダイエットもしたい…」</p>
            <p>完全に断酒しなくても、<strong>選び方と飲み方を工夫する</strong>だけでダイエットとお酒は十分に両立できます。</p>
          </div>

          <hr className="border-green-100" />

          <section>
            <h2 id="alcohol-diet-relation" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              アルコールとダイエットの関係
            </h2>
            <div className="space-y-4">
              <p>アルコール自体は1gあたり7kcal（糖質は4kcal、脂質は9kcal）。糖質や脂質に比べてカロリーが高く、しかも<strong>「エンプティカロリー」</strong>といって栄養がほぼゼロです。</p>
              <p>さらに問題なのが、飲酒によって起きるこれらの変化です：</p>
              <div className="space-y-2">
                {[
                  "肝臓がアルコール代謝を優先するため、脂肪燃焼が一時的に止まる",
                  "食欲増進ホルモンが分泌されて食べ過ぎやすくなる",
                  "判断力が落ちてつまみや〆を頼みがちになる",
                  "睡眠の質が下がり、翌日の代謝・活動量が低下する",
                ].map((item) => (
                  <div key={item} className="flex gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                    <span className="text-red-500 shrink-0">!</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p>ただしこれらは<strong>「飲み方次第」</strong>で影響を大幅に減らせます。</p>
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="good-drinks" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              太りにくいお酒の種類
            </h2>
            <div className="space-y-3">
              {[
                { name: "蒸留酒（ウイスキー・焼酎・ジン・ウォッカ）", kcal: "糖質ほぼ0g", desc: "糖質がほぼ含まれない。ハイボールや水割り・ソーダ割りで飲むのが最もダイエット向き。" },
                { name: "辛口ワイン（赤・白）", kcal: "糖質 約2〜4g/杯", desc: "甘口より糖質が少ない。赤ワインはポリフェノールで抗酸化作用も期待できる。" },
                { name: "糖質ゼロビール", kcal: "糖質 0g", desc: "通常のビールより糖質が大幅に少ない。ただしアルコールカロリーはある。" },
              ].map((item) => (
                <div key={item.name} className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-green-700">◎ {item.name}</p>
                    <span className="text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full">{item.kcal}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="bad-drinks" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              太りやすいお酒
            </h2>
            <div className="space-y-3">
              {[
                { name: "甘いチューハイ・カクテル", kcal: "糖質 20〜40g/缶", desc: "果汁入りや甘いフレーバーは砂糖がたっぷり。ジュース感覚で飲めてしまうのが危険。" },
                { name: "日本酒・紹興酒", kcal: "糖質 約8〜15g/杯", desc: "醸造酒は糖質が高め。美味しいが飲みすぎに注意。" },
                { name: "梅酒・みりん系", kcal: "糖質 20g以上/杯", desc: "砂糖を大量に使っており糖質が非常に高い。" },
                { name: "通常のビール（大ジョッキ）", kcal: "糖質 約25〜30g", desc: "1杯で糖質が多い。飲むなら1〜2杯までに抑える。" },
              ].map((item) => (
                <div key={item.name} className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-red-700">❌ {item.name}</p>
                    <span className="text-xs bg-red-200 text-red-800 font-bold px-2 py-0.5 rounded-full">{item.kcal}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-green-100" />

          <section>
            <h2 id="rules" className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">
              飲み方ルール
            </h2>
            <div className="space-y-3">
              {[
                { rule: "飲む前に何か食べる", desc: "空腹で飲むと酔いが回りやすく、食欲増進も激しくなる。飲む前にゆで卵やサラダチキンを1つ食べておく。" },
                { rule: "水と交互に飲む", desc: "アルコールの吸収を緩やかにし、脱水を防ぎ、飲み過ぎを防止できる。「チェイサー」として水を頼む習慣を。" },
                { rule: "週2日は休肝日を作る", desc: "肝臓の回復時間を与えるだけでなく、アルコールへの依存を防ぎ、基礎代謝の低下も抑えられる。" },
                { rule: "〆の炭水化物を断る", desc: "居酒屋の〆ラーメン・お茶漬けは最大のNG。飲んだ後の糖質は脂肪に直結する。帰宅後は何も食べない。" },
              ].map((item) => (
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
                  <p className="text-sm font-bold text-green-700 mb-2">◎ おすすめおつまみ</p>
                  <ul className="space-y-1">
                    {["枝豆（タンパク質・食物繊維が豊富）", "刺身・焼き魚（高タンパク・低糖質）", "焼き鳥 塩（糖質が少ない）", "冷奴・だし巻き卵", "野菜スティック・サラダ"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-green-500">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">❌ 避けたいおつまみ</p>
                  <ul className="space-y-1">
                    {["唐揚げ・フライドポテト（脂質+糖質）", "ピザ・グラタン（高カロリー）", "甘いタレの焼き鳥（糖質多め）", "ポテトサラダ（意外と糖質高い）"].map((m) => (
                      <li key={m} className="text-sm flex gap-2"><span className="text-red-400">・</span>{m}</li>
                    ))}
                  </ul>
                </div>
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
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">1.</span><span><strong>蒸留酒（ハイボール・焼酎）か糖質ゼロビールを選ぶ</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">2.</span><span><strong>飲む前に何か食べて空腹を避ける</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">3.</span><span><strong>水と交互に飲んで飲みすぎ防止</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">4.</span><span><strong>〆の炭水化物は断固断る</strong></span></li>
                <li className="flex gap-2 text-sm"><span className="font-bold text-green-700 shrink-0">5.</span><span><strong>おつまみはタンパク質系を中心に</strong></span></li>
              </ol>
              <p>完全禁酒よりも「うまく付き合う」ほうがダイエットは長続きします。自分のカロリー消費量を把握してお酒の量の目安を知りたい方は、サクメシで診断してみてください。</p>
            </div>
          </section>

        </div>

        <ColumnFooter slug="alcohol-diet" />
      </article>
    </div>
  );
}
