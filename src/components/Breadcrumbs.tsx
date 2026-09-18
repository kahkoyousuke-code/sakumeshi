import Link from "next/link";

const BASE_URL = "https://sakumeshi.app";

export interface Crumb {
  label: string;
  /** Root-relative path. Omit on the current page (the last crumb). */
  href?: string;
}

/**
 * Visible breadcrumb trail plus its BreadcrumbList JSON-LD.
 *
 * Search results show the hierarchy ("ホーム > コラム > 記事名") instead of a
 * bare URL. Google expects the markup to match what the reader sees, so the
 * visible trail and the JSON-LD are always built from the same list here.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      // The current page needs no URL (Google's own recommendation).
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="パンくずリスト" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-gray-500">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-x-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-300">
                  ›
                </span>
              )}
              {item.href ? (
                <Link href={item.href} className="text-green-700 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
