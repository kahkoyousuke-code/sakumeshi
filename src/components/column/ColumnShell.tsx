import Link from "next/link";
import type { ReactNode } from "react";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";

export interface TocItem {
  id: string;
  label: string;
}

interface ColumnShellProps {
  slug: string;
  /** H1 shown on the page; defaults to the title in COLUMNS */
  h1?: string;
  toc: TocItem[];
  ctaLabel?: string;
  children: ReactNode;
}

export default function ColumnShell({
  slug,
  h1,
  toc,
  ctaLabel,
  children,
}: ColumnShellProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        href="/column"
        className="text-sm text-green-600 hover:underline mb-6 inline-block"
      >
        ← コラム一覧に戻る
      </Link>

      <article>
        <ColumnHeader slug={slug} h1={h1} />

        <nav className="bg-green-50 rounded-xl p-5 border border-green-100 mb-10">
          <p className="text-sm font-bold text-green-700 mb-3">目次</p>
          <ol className="space-y-1.5 list-decimal list-inside">
            {toc.map((item) => (
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

        <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">
          {children}
        </div>

        <ColumnFooter slug={slug} ctaLabel={ctaLabel} />
      </article>
    </div>
  );
}
