import type { Metadata } from "next";

// The page itself is a client component, so canonical is declared here.
// Results are generated per user and hold no search value, so keep them out of the index.
export const metadata: Metadata = {
  alternates: { canonical: "/result" },
  robots: { index: false, follow: true },
};

export default function ResultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
