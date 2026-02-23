import Link from "next/link";
import { SAKU_TRAINING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-pink-100 py-6 text-center text-sm text-gray-400">
      <p>
        トレーニングもはじめよう →{" "}
        <Link
          href={SAKU_TRAINING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] font-medium hover:underline"
        >
          サクトレ
        </Link>
      </p>
      <p className="mt-2 text-xs text-gray-300">
        © {new Date().getFullYear()} sakumeshi. All rights reserved.
      </p>
    </footer>
  );
}
