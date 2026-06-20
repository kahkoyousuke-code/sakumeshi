import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "お問い合わせ | サクメシ",
  description:
    "サクメシへのお問い合わせはこちら。ご意見・ご要望・不具合のご連絡をお待ちしています。",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
        お問い合わせ
      </h1>

      <article className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
        <p>
          サクメシをご利用いただきありがとうございます。サービスへのご意見・
          ご要望、不具合のご報告、その他のお問い合わせは、以下のフォームより
          お寄せください。内容を確認のうえ、必要に応じてご返信いたします。
        </p>

        {CONTACT_FORM_URL ? (
          <div className="text-center">
            <a
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-8 text-white text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#4CAF50" }}
            >
              お問い合わせフォームを開く
            </a>
          </div>
        ) : (
          <p className="rounded-xl bg-green-50 border border-green-100 p-5 text-sm text-gray-600">
            お問い合わせフォームは現在準備中です。しばらくお待ちください。
          </p>
        )}

        <p className="text-sm text-gray-500">
          ※ いただいた個人情報の取り扱いについては
          <Link href="/privacy" className="text-green-600 hover:underline">
            プライバシーポリシー
          </Link>
          をご確認ください。
        </p>
      </article>

      <div className="mt-10 text-center">
        <Link href="/" className="text-sm text-green-600 hover:underline">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
