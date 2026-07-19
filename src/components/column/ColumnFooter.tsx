import Link from "next/link";
import { getColumn, getRelatedColumns } from "@/lib/columns";

const BASE_URL = "https://sakumeshi.app";

const NOTE_LINKS = [
  {
    href: "https://note.com/kahko/n/n011ab3e59a76",
    emoji: "📖",
    label: "PFCの基本と食材選びガイド",
  },
  {
    href: "https://note.com/kahko/n/n8a6fc450e6e2",
    emoji: "🏆",
    label: "92kgから大会入賞までのリアル食事記録",
  },
  {
    href: "https://note.com/kahko/n/n33722e8526e5",
    emoji: "🍺",
    label: "お酒とダイエットを両立する飲み方ルール",
  },
  {
    href: "https://note.com/kahko/n/nc1b31d5e0f60",
    emoji: "📊",
    label: "糖質ジグザグダイエット（カーボサイクリング）の教科書",
  },
];

interface ColumnFooterProps {
  slug: string;
  ctaLabel?: string;
}

export default function ColumnFooter({ slug, ctaLabel }: ColumnFooterProps) {
  const column = getColumn(slug);
  const related = getRelatedColumns(slug);

  const jsonLd = column
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: column.title,
        description: column.description,
        datePublished: column.date,
        mainEntityOfPage: `${BASE_URL}/column/${column.slug}`,
        author: { "@type": "Organization", name: "サクメシ" },
        publisher: { "@type": "Organization", name: "サクメシ", url: BASE_URL },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/form"
          className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
        >
          {ctaLabel ?? "サクメシで自分に合った食事プランを作る →"}
        </Link>
        <p className="text-xs text-gray-400 mt-3">
          無料・登録不要。質問に答えるだけで7日分の食事プランが完成します。
        </p>
      </div>

      {/* 関連コラム */}
      {related.length > 0 && (
        <div className="mt-12">
          <p className="text-sm font-bold text-gray-600 mb-3">あわせて読みたい</p>
          <div className="space-y-3">
            {related.map((col) => (
              <Link
                key={col.slug}
                href={`/column/${col.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-green-100 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl shrink-0">{col.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-800 leading-snug">
                    {col.title}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                    {col.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* note誘導 */}
      <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-100">
        <p className="text-sm font-bold text-gray-600 mb-3">
          もっと詳しく知りたい方はこちら（note）
        </p>
        <div className="space-y-3">
          {NOTE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors"
            >
              <span className="text-2xl">{link.emoji}</span>
              <span className="text-sm text-green-700 font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
