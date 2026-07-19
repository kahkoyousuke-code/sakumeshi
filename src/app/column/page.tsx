import type { Metadata } from "next";
import Link from "next/link";
import { columnsByDateDesc } from "@/lib/columns";

export const metadata: Metadata = {
  title: "コラム | サクメシ",
  description:
    "ダイエットの食事に関するコラム一覧。PFCバランス・コンビニ飯・外食・停滞期・睡眠など、無理なく続けるための知識を紹介します。",
};

export default function ColumnListPage() {
  const columns = columnsByDateDesc();
  const latestDate = columns[0]?.date;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-3">
        コラム
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        無理なく痩せるための食事の知識を、実体験ベースでまとめています。
      </p>

      <div className="space-y-4">
        {columns.map((col) => (
          <Link
            key={col.slug}
            href={`/column/${col.slug}`}
            className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-green-100 p-5 hover:shadow-md transition-shadow"
          >
            <span className="text-4xl leading-none mt-1 shrink-0">{col.emoji}</span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 mb-1 flex items-center gap-2">
                {col.date}
                {col.date === latestDate && (
                  <span className="inline-block bg-[var(--primary)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    NEW
                  </span>
                )}
              </p>
              <h2 className="text-base font-bold text-gray-800 leading-snug mb-1">
                {col.title}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">{col.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/form"
          className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-md"
        >
          サクメシで自分に合った食事プランを作る →
        </Link>
        <p className="text-xs text-gray-400 mt-3">
          無料・登録不要。質問に答えるだけで7日分の食事プランが完成します。
        </p>
      </div>
    </div>
  );
}
