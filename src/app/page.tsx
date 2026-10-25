import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SAKU_TRAINING_URL, SAKU_SUPPU_URL, TOTAL_STEPS } from "@/lib/constants";
import { columnsByDateDesc } from "@/lib/columns";
import { pageMetadata, SITE_NAME } from "@/lib/metadata";
import { AUTHOR } from "@/lib/author";

const SITE_URL = "https://sakumeshi.app/";

const HOME_TITLE = "無料で1週間のダイエット食事メニューを自動作成｜サクメシ";
const HOME_DESCRIPTION = `年齢・体重・目標など${TOTAL_STEPS}の質問に答えるだけ。AIが目標カロリーとPFCバランスを計算し、7日分の献立・レシピ・買い物リストを無料で作成します。登録不要・約1分。`;

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
});

/**
 * WebSite tells Google the site name shown above the result;
 * WebApplication describes what the tool does and that it is free.
 */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ja",
    },
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}#app`,
      name: SITE_NAME,
      url: SITE_URL,
      description: HOME_DESCRIPTION,
      applicationCategory: "HealthApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ja",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
        sameAs: AUTHOR.sameAs,
      },
    },
  ],
};

const COLUMNS_BY_DATE = columnsByDateDesc();
const LATEST_COLUMNS = COLUMNS_BY_DATE.slice(0, 6);
/** the rest, linked as a compact list so every article has a link from the top page */
const OTHER_COLUMNS = COLUMNS_BY_DATE.slice(6);

const FEATURES = [
  { icon: "📊", label: "カロリー・PFC計算" },
  { icon: "🗓️", label: "1週間メニュー" },
  { icon: "🏪", label: "コンビニ食も対応" },
  { icon: "👨‍🍳", label: "自炊レシピ付き" },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "質問に答える",
    detail: `年齢・体重・目標など${TOTAL_STEPS}つの質問に回答（約1分）`,
  },
  {
    step: "2",
    title: "AIが自動計算",
    detail: "あなた専用の目標カロリーとPFCバランスを算出",
  },
  {
    step: "3",
    title: "プラン完成",
    detail: "7日分の献立・レシピ・買い物リストが手に入る",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center px-4 py-10 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* No fade-in on load: content must be visible in the server HTML (LCP). */}
      <div className="flex flex-col items-center gap-6 max-w-md w-full text-center">
        {/* マスコット */}
        <div className="mascot-float">
          <Image
            src="/mascot.png"
            alt="サクメシ マスコット"
            width={150}
            height={150}
            className="drop-shadow-md"
            priority
          />
        </div>

        {/* タイトル */}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-[var(--primary)]">サクメシ</h1>
          <p className="text-lg font-semibold text-gray-700">
            サクッとダイエット計画を作成
          </p>
        </div>

        {/* 説明文 */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {TOTAL_STEPS}つの質問に答えるだけで、あなたにぴったりの食事メニューをサクッと作成します！
        </p>

        {/* CTAボタン */}
        <Link
          href="/form"
          className="block w-full py-4 px-8 bg-[var(--primary)] text-white text-lg font-bold rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97]"
        >
          無料で食事プランを作る
        </Link>

        {/* 所要時間 */}
        <p className="text-xs text-gray-400">所要時間：約1分／登録不要</p>

        {/* 特徴タグ */}
        <div className="flex flex-wrap justify-center gap-2">
          {FEATURES.map(({ icon, label }) => (
            <span
              key={label}
              className="text-sm font-medium px-3 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)]"
            >
              {icon} {label}
            </span>
          ))}
        </div>

        {/* かんたん3ステップ */}
        <section className="w-full text-left">
          <h2 className="text-sm font-bold text-gray-500 text-center mb-3">
            かんたん3ステップ
          </h2>
          <ol className="space-y-2">
            {HOW_IT_WORKS.map(({ step, title, detail }) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50/50 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-700">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 新着コラム（内部リンク） */}
        <section className="w-full text-left">
          <h2 className="text-sm font-bold text-gray-500 text-center mb-3">
            ダイエットコラム
          </h2>
          <ul className="space-y-2">
            {LATEST_COLUMNS.map(({ slug, title, emoji, description }) => (
              <li key={slug}>
                <Link
                  href={`/column/${slug}`}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 transition-colors duration-200 hover:border-green-200 hover:bg-green-50/50"
                >
                  <span className="text-lg leading-6" aria-hidden="true">
                    {emoji}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-5 mb-2 text-xs font-semibold text-gray-400">
            そのほかのコラム
          </p>
          <ul className="space-y-1.5">
            {OTHER_COLUMNS.map(({ slug, title, emoji }) => (
              <li key={slug}>
                <Link
                  href={`/column/${slug}`}
                  className="block text-xs leading-relaxed text-gray-600 transition-colors duration-200 hover:text-[var(--primary)] hover:underline"
                >
                  <span className="mr-1" aria-hidden="true">
                    {emoji}
                  </span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/column"
            className="mt-4 block text-center text-sm font-medium text-[var(--primary)] hover:underline"
          >
            コラムをもっと見る →
          </Link>
        </section>

        {/* 姉妹サービス バナー */}
        <Link
          href={SAKU_TRAINING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-75 text-[var(--primary)]"
          style={{
            background: "rgba(76, 175, 80, 0.07)",
            border: "1px solid rgba(76, 175, 80, 0.25)",
          }}
        >
          💪 サクトレ姉妹サービス → 運動メニューはこちら
        </Link>
        <Link
          href={SAKU_SUPPU_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-75"
          style={{
            background: "rgba(59, 130, 246, 0.07)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            color: "#3B82F6",
          }}
        >
          💊 サプリも選ぼう → サクサプ
        </Link>
      </div>
    </div>
  );
}
