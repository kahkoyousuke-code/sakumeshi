import Link from "next/link";
import { SAKU_TRAINING_URL, SAKU_SUPPU_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-green-100 py-6 text-center text-sm text-gray-400">
      <p className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
        <span>
          💪{" "}
          <Link
            href={SAKU_TRAINING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] font-medium hover:underline"
          >
            サクトレ
          </Link>
        </span>
        <span className="text-gray-200">|</span>
        <span>
          💊{" "}
          <Link
            href={SAKU_SUPPU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
            style={{ color: "#3B82F6" }}
          >
            サクサプ
          </Link>
        </span>
      </p>
      <p className="mt-2 text-xs text-gray-300">
        © {new Date().getFullYear()} sakumeshi. All rights reserved.
      </p>
    </footer>
  );
}
