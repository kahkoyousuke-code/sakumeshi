import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "サクメシ - AIでサクッとダイエット計画を作成",
  description:
    "6つの質問に答えるだけ！AIがあなた専用のカロリー計算と1週間の食事メニューを作成します。",
  keywords: ["食事管理", "ダイエット", "栄養", "AI", "メニュー提案"],
  metadataBase: new URL("https://sakumeshi.vercel.app"),
  openGraph: {
    title: "サクメシ - AIでサクッとダイエット計画を作成",
    description:
      "6つの質問に答えるだけ！AIがあなた専用のカロリー計算と1週間の食事メニューを作成します。",
    url: "https://sakumeshi.vercel.app",
    images: [
      {
        url: "/og_sakumeshi.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "サクメシ - AIでサクッとダイエット計画を作成",
    description:
      "6つの質問に答えるだけ！AIがあなた専用のカロリー計算と1週間の食事メニューを作成します。",
    images: ["/og_sakumeshi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
