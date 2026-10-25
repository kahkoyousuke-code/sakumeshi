import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { columnsByDateDesc } from "@/lib/columns";

// Next.js adds `noindex` to 404 responses on its own, so only the title is set.
export const metadata: Metadata = {
  title: "ページが見つかりません | サクメシ",
};

const LATEST_COLUMNS = columnsByDateDesc().slice(0, 4);

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 text-center">
      <Image
        src="/mascot.png"
        alt=""
        width={96}
        height={96}
        className="mx-auto mb-4 opacity-90"
      />
      <p className="text-sm font-bold text-[var(--primary)] mb-1">404</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        ページが見つかりませんでした
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-8">
        URLが間違っているか、ページが移動・削除された可能性があります。
        <br />
        下のリンクから探してみてください。
      </p>

      <div className="flex flex-col gap-3 mb-10">
        <Link
          href="/form"
          className="block w-full py-4 px-8 bg-[var(--primary)] text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
          無料で食事プランを作る
        </Link>
        <Link
          href="/"
          className="block w-full py-3 px-8 rounded-2xl border border-green-200 text-[var(--primary)] font-medium hover:bg-green-50 transition-colors"
        >
          トップページへ戻る
        </Link>
      </div>

      <section className="text-left">
        <h2 className="text-sm font-bold text-gray-500 text-center mb-3">
          新着コラム
        </h2>
        <ul className="space-y-2">
          {LATEST_COLUMNS.map(({ slug, title, emoji }) => (
            <li key={slug}>
              <Link
                href={`/column/${slug}`}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-green-200 hover:bg-green-50/50"
              >
                <span aria-hidden="true">{emoji}</span>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/column"
          className="mt-4 block text-center text-sm font-medium text-[var(--primary)] hover:underline"
        >
          コラム一覧を見る →
        </Link>
      </section>
    </div>
  );
}
