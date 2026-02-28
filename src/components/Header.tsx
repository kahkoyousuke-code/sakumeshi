import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header
      className="w-full bg-white shadow-sm"
      style={{ borderBottom: "1px solid rgba(76, 175, 80, 0.2)" }}
    >
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/mascot.png"
            alt="サクメシ"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight" style={{ color: "#4CAF50" }}>
            {APP_NAME}
          </span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link
            href="/form"
            className="hover:opacity-80 transition-opacity font-medium"
            style={{ color: "#4CAF50" }}
          >
            診断する
          </Link>
        </nav>
      </div>
    </header>
  );
}
