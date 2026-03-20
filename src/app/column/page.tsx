import type { Metadata } from "next";
import Link from "next/link";
import { COLUMNS } from "@/lib/columns";

export const metadata: Metadata = {
  title: "コラム | サクメシ",
  description: "ダイエットや食事に関するコラムを掲載しています。",
};

export default function ColumnListPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
        コラム
      </h1>

      <div className="space-y-4">
        {COLUMNS.map((col) => (
          <Link
            key={col.slug}
            href={`/column/${col.slug}`}
            className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-green-100 p-5 hover:shadow-md transition-shadow"
          >
            <span className="text-4xl leading-none mt-1 shrink-0">{col.emoji}</span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 mb-1">{col.date}</p>
              <h2 className="text-base font-bold text-gray-800 leading-snug mb-1">
                {col.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">{col.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
