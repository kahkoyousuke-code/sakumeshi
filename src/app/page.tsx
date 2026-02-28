"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SAKU_TRAINING_URL } from "@/lib/constants";

const FEATURES = [
  { icon: "📊", label: "カロリー・PFC計算" },
  { icon: "🗓️", label: "1週間メニュー" },
  { icon: "🏪", label: "コンビニ食も対応" },
  { icon: "👨‍🍳", label: "自炊レシピ付き" },
];

export default function HomePage() {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 max-w-md w-full text-center"
      >
        {/* マスコット */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/mascot.png"
            alt="サクメシ マスコット"
            width={150}
            height={150}
            className="drop-shadow-md"
            priority
          />
        </motion.div>

        {/* タイトル */}
        <div className="space-y-1">
          <h1
            className="text-4xl font-bold"
            style={{ color: "#4CAF50" }}
          >
            サクメシ
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            サクッとダイエット計画を作成
          </p>
        </div>

        {/* 説明文 */}
        <p className="text-sm text-gray-500 leading-relaxed">
          6つの質問に答えるだけで、あなたにぴったりの食事メニューをサクッと作成します！
        </p>

        {/* CTAボタン */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full"
        >
          <Link
            href="/form"
            className="block w-full py-4 px-8 text-white text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "#4CAF50" }}
          >
            食事プランを作る
          </Link>
        </motion.div>

        {/* 所要時間 */}
        <p className="text-xs text-gray-400">所要時間：約1分</p>

        {/* 特徴タグ */}
        <div className="flex flex-wrap justify-center gap-2">
          {FEATURES.map(({ icon, label }) => (
            <span
              key={label}
              className="text-sm font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(76, 175, 80, 0.1)",
                color: "#4CAF50",
              }}
            >
              {icon} {label}
            </span>
          ))}
        </div>

        {/* サクトレ バナー */}
        <Link
          href={SAKU_TRAINING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-75"
          style={{
            background: "rgba(76, 175, 80, 0.07)",
            border: "1px solid rgba(76, 175, 80, 0.25)",
            color: "#4CAF50",
          }}
        >
          💪 サクトレ姉妹サービス → 運動メニューはこちら
        </Link>
      </motion.div>
    </div>
  );
}
