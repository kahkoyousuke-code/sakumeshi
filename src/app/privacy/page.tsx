import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | サクメシ",
  description:
    "サクメシのプライバシーポリシー。広告配信（Google AdSense）・アクセス解析・Cookie の利用、個人情報の取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">
        プライバシーポリシー
      </h1>

      <article className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
        <p>
          サクメシ（以下「当サイト」）は、利用者の個人情報の保護を重要なものと考え、
          以下の方針に基づき適切に取り扱います。
        </p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">個人情報の利用目的</h2>
          <p>
            当サイトでは、食事プラン作成のために性別・年齢・身長・体重・目標などの
            入力情報を利用します。これらの情報は食事メニューの生成にのみ使用し、
            利用者の端末（sessionStorage / localStorage）に保存されるもので、
            当サイトのサーバーに永続的に保存・蓄積することはありません。
          </p>
          <p>
            お問い合わせの際にいただいた情報は、ご返信や必要な連絡のためにのみ
            利用します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">
            広告配信について（Google AdSense）
          </h2>
          <p>
            当サイトは、第三者配信の広告サービス「Google AdSense」を利用しています。
            広告配信事業者は、利用者の興味に応じた広告を表示するために Cookie を
            使用することがあります。Cookie を無効にする設定およびその他の詳細は、
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Google の広告に関するポリシー
            </a>
            をご確認ください。
          </p>
          <p>
            利用者は{" "}
            <a
              href="https://myadcenter.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Google 広告設定
            </a>
            から、パーソナライズ広告を無効にできます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">アクセス解析について</h2>
          <p>
            当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを
            利用する場合があります。これらは Cookie を使用して匿名のトラフィック
            データを収集しますが、個人を特定する情報は含みません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">アフィリエイトについて</h2>
          <p>
            当サイトは、Amazon アソシエイト・楽天アフィリエイトなどの
            アフィリエイトプログラムに参加しています。これらのプログラムにより
            商品を紹介し、当サイトが収益を得る場合があります。リンク先での購入時に
            Cookie が使用されることがあります。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">Cookie の無効化</h2>
          <p>
            利用者はブラウザの設定により Cookie を無効にすることができます。
            ただし、その場合、当サイトの一部機能が正常に利用できなくなる
            可能性があります。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">免責事項</h2>
          <p>
            当サイトの内容については
            <Link href="/disclaimer" className="text-green-600 hover:underline">
              免責事項
            </Link>
            をご確認ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じて本ポリシーを変更することがあります。変更後の
            内容は本ページに掲載した時点で効力を生じるものとします。
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
