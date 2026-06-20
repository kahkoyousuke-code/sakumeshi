import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "免責事項 | サクメシ",
  description:
    "サクメシの免責事項。掲載情報・AIによる食事プラン・外部リンク・アフィリエイトに関する免責について説明します。",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
        免責事項
      </h1>

      <article className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">掲載情報について</h2>
          <p>
            当サイト「サクメシ」に掲載している情報・食事プラン・コラム記事は、
            一般的な情報提供を目的としたものであり、その正確性や完全性を保証する
            ものではありません。当サイトの情報を利用したことによって生じた
            いかなる損害についても、当サイトは一切の責任を負いません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">
            健康・医療に関する注意
          </h2>
          <p>
            当サイトが提供する食事プランや栄養に関する情報は、医療行為や専門家の
            指導に代わるものではありません。持病・アレルギー・妊娠中などで食事制限が
            必要な方、体調に不安のある方は、必ず医師・管理栄養士などの専門家に
            ご相談のうえご利用ください。当サイトの情報に基づく食事や行動の結果に
            ついて、当サイトは責任を負いかねます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">
            AI による生成内容について
          </h2>
          <p>
            当サイトの食事プランは AI によって自動生成されます。内容に誤りや
            不適切な提案が含まれる可能性があるため、利用者ご自身の判断でご活用
            ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">外部リンクについて</h2>
          <p>
            当サイトからリンクする外部サイトの内容については、当サイトは責任を
            負いません。リンク先の情報やサービスのご利用は、利用者ご自身の責任で
            行ってください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">著作権について</h2>
          <p>
            当サイトに掲載されている文章・画像などの著作権は、当サイトまたは
            正当な権利者に帰属します。無断での転載・複製を禁じます。
          </p>
        </section>

        <p className="text-sm text-gray-400">制定日：2026年6月20日</p>
      </article>

      <div className="mt-10 text-center">
        <Link href="/" className="text-sm text-green-600 hover:underline">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
