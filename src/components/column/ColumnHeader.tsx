import Link from "next/link";
import { AUTHOR } from "@/lib/author";
import { getColumn } from "@/lib/columns";

interface ColumnHeaderProps {
  slug: string;
  /** H1 shown on the page; defaults to the title in COLUMNS */
  h1?: string;
}

/**
 * Article header with the author byline. Every column renders this so readers
 * (and reviewers) can see who wrote the health advice before reading it.
 */
export default function ColumnHeader({ slug, h1 }: ColumnHeaderProps) {
  const column = getColumn(slug);

  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold text-gray-800 leading-relaxed">
        {h1 ?? column?.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
        <Link href="/about#author" className="font-bold text-green-700 hover:underline">
          {AUTHOR.name}
        </Link>
        <span className="text-gray-400">{AUTHOR.title}</span>
        {column && (
          <span className="text-gray-400">
            公開 {column.date}
            {column.updated && column.updated !== column.date
              ? ` / 更新 ${column.updated}`
              : ""}
          </span>
        )}
      </div>
    </header>
  );
}
