import type { Metadata } from "next";
import Link from "next/link";
import { AUTHOR, MEDICAL_DISCLAIMER_SITE } from "@/lib/author";
import { SAKU_SUPPU_URL, SAKU_TRAINING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "運営者情報 | サクメシ",
  description:
    "サクメシの運営者情報。運営者のプロフィール・執筆方針・お問い合わせ方法について説明します。",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR.name,
  description: AUTHOR.shortBio,
  jobTitle: AUTHOR.title,
  url: AUTHOR.url,
  sameAs: AUTHOR.sameAs,
  worksFor: {
    "@type": "Organization",
    name: "サクメシ",
    url: "https://sakumeshi.app",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

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

        <section id="author" className="space-y-3 scroll-mt-20">
          <h2 className="text-lg font-bold text-gray-800">運営者・執筆者プロフィール</h2>
          <div className="rounded-xl bg-green-50 border border-green-100 p-5">
            <p className="font-bold text-green-700">{AUTHOR.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{AUTHOR.title}</p>
          </div>
          {AUTHOR.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="space-y-1.5 pt-1">
            <p className="text-sm font-bold text-gray-700">発信・関連サービス</p>
            <ul className="space-y-1.5 list-disc list-inside text-sm">
              <li>
                <a
                  href="https://note.com/kahko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  note（motsu）
                </a>
                — 食事記録やトレーニングの詳しい内容
              </li>
              <li>
                <a
                  href="https://x.com/MotMotsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  X（@MotMotsu）
                </a>
              </li>
              <li>
                <a
                  href={SAKU_TRAINING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  サクトレ
                </a>
                — トレーニングメニューの提案
              </li>
              <li>
                <a
                  href={SAKU_SUPPU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  サクサプ
                </a>
                — サプリメントの提案
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">記事の書き方（編集方針）</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              カロリー・PFC・栄養素の数値は「日本人の食事摂取基準」や厚生労働省
              e-ヘルスネットなどの公的資料を確認したうえで書き、各記事の末尾に
              参考・出典として掲載しています。
            </li>
            <li>
              体感や実践のコツについては、運営者自身が試したことをもとに書いています。
              うまくいかなかったことも省かずに書くようにしています。
            </li>
            <li>
              運営者は医師・管理栄養士ではありません。診断・治療にあたる内容や、
              特定の商品で痩せると断定するような表現は扱いません。
            </li>
            <li>
              内容に誤りを見つけた場合は、お問い合わせよりご指摘ください。確認のうえ
              修正し、記事に更新日を表示します。
            </li>
          </ul>
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
              <dd>{AUTHOR.name}</dd>
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
          <h2 className="text-lg font-bold text-gray-800">健康情報についての注意</h2>
          <p className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600">
            {MEDICAL_DISCLAIMER_SITE}
          </p>
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
