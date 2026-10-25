import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COLUMNS, columnsByCategory, columnsByDateDesc } from "@/lib/columns";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/column",
  title: "コラム | サクメシ",
  description:
    "ダイエットの食事に関するコラム一覧。カロリー・PFCの基本、献立、外食・コンビニ、食べ方の習慣、停滞期の悩みまで、テーマ別に無理なく続けるための知識を紹介します。",
});

export default function ColumnListPage() {
  const groups = columnsByCategory();
  const latestDate = columnsByDateDesc()[0]?.date;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "コラム" }]} />

      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-3">
        コラム
      </h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        無理なく痩せるための食事の知識を、実体験ベースでまとめています。
        <br />
        全{COLUMNS.length}本をテーマ別に並べました。
      </p>

      {/* Jump links to each category */}
      <nav aria-label="テーマから探す" className="mb-10">
        <ul className="flex flex-wrap justify-center gap-2">
          {groups.map(({ id, label, emoji, columns }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex items-center gap-1 rounded-full bg-[var(--primary-light)] px-3 py-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-green-100"
              >
                <span aria-hidden="true">{emoji}</span>
                {label}
                <span className="text-xs text-gray-500">（{columns.length}）</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-12">
        {groups.map(({ id, label, emoji, description, columns }) => (
          <section key={id} id={id} className="scroll-mt-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-1">
              <span aria-hidden="true">{emoji}</span>
              {label}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{description}</p>

            <div className="space-y-3">
              {columns.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="flex items-start gap-4 bg-white rounded-2xl shadow-sm border border-green-100 p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl leading-none mt-1 shrink-0" aria-hidden="true">
                    {col.emoji}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1 flex items-center gap-2">
                      {col.updated ? `${col.updated} 更新` : col.date}
                      {col.date === latestDate && (
                        <span className="inline-block bg-[var(--primary)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                    </p>
                    <h3 className="text-base font-bold text-gray-800 leading-snug mb-1">
                      {col.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{col.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
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
