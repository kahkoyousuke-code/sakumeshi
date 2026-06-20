import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報 | サクメシ",
  description:
    "サクメシの運営者情報。サイトの目的・運営者・お問い合わせ方法について説明します。",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
        運営者情報
      </h1>

      <article className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">サクメシについて</h2>
          <p>
            「サクメシ」は、かんたんな質問に答えるだけで AI があなた専用の
            カロリー計算と1週間の食事メニューを作成する、無料のダイエット
            サポートサービスです。ダイエットや健康的な食生活に役立つコラムも
            掲載しています。
          </p>
          <p>
            「ダイエットの食事管理をもっと手軽に」という思いから、難しい栄養計算を
            自動化し、誰でもサクッと続けられることを目指して運営しています。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">運営情報</h2>
          <dl className="space-y-2">
            <div className="flex gap-3">
              <dt className="w-28 shrink-0 text-gray-500">サイト名</dt>
              <dd>サクメシ</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 shrink-0 text-gray-500">運営者</dt>
              <dd>サクメシ運営</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 shrink-0 text-gray-500">お問い合わせ</dt>
              <dd>
                <Link href="/contact" className="text-green-600 hover:underline">
                  お問い合わせページ
                </Link>
                よりご連絡ください
              </dd>
            </div>
          </dl>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">関連ページ</h2>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>
              <Link href="/privacy" className="text-green-600 hover:underline">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-green-600 hover:underline">
                免責事項
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-green-600 hover:underline">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <div className="mt-10 text-center">
        <Link href="/" className="text-sm text-green-600 hover:underline">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
