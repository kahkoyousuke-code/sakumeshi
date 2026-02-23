import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-pink-100 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-[var(--primary)] tracking-tight hover:opacity-80 transition-opacity"
        >
          🌸 {APP_NAME}
        </Link>
        <nav className="flex gap-4 text-sm text-gray-500">
          <Link href="/form" className="hover:text-[var(--primary)] transition-colors">
            診断する
          </Link>
        </nav>
      </div>
    </header>
  );
}
