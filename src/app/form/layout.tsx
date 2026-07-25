import type { Metadata } from "next";

// The page itself is a client component, so canonical is declared here.
export const metadata: Metadata = {
  alternates: { canonical: "/form" },
};

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
