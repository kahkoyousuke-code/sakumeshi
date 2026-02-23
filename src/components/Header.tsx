import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header
      className="w-full bg-white shadow-sm"
      style={{ borderBottom: "1px solid rgba(255, 107, 53, 0.2)" }}
    >
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: "#FF6B35" }}
        >
          🍽️ {APP_NAME}
        </Link>
        <nav className="flex gap-4 text-sm text-gray-500">
          <Link
            href="/form"
            className="hover:opacity-80 transition-opacity font-medium"
            style={{ color: "#FF6B35" }}
          >
            診断する
          </Link>
        </nav>
      </div>
    </header>
  );
}
