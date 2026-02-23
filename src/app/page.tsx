"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SakuraCat from "@/components/SakuraCat";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <SakuraCat className="w-40 h-40" />

        <h1 className="text-5xl font-bold text-[var(--primary)] tracking-tight">
          {APP_NAME}
        </h1>

        <p className="text-lg text-gray-600 max-w-md">{APP_DESCRIPTION}</p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Link
            href="/form"
            className="inline-block px-8 py-4 bg-[var(--primary)] text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            食事プランを作る 🍱
          </Link>
        </motion.div>

        <p className="text-sm text-gray-400 mt-2">
          所要時間：約2分 | 完全無料
        </p>
      </motion.div>
    </div>
  );
}
