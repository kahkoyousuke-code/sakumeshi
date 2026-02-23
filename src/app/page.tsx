"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { SAKU_TRAINING_URL } from "@/lib/constants";

// 浮遊させる食べ物絵文字の配置
const FOOD_EMOJIS: Array<{
  emoji: string;
  style: CSSProperties;
  delay: number;
}> = [
  { emoji: "🥗", style: { top: "8%",  left: "4%" },  delay: 0   },
  { emoji: "🍱", style: { top: "18%", right: "6%" }, delay: 1.5 },
  { emoji: "🥩", style: { top: "62%", left: "3%" },  delay: 0.8 },
  { emoji: "🥑", style: { top: "72%", right: "4%" }, delay: 2.2 },
];

const FEATURES = [
  { icon: "📊", label: "カロリー・PFC計算" },
  { icon: "🗓️", label: "1週間メニュー" },
  { icon: "🏪", label: "コンビニ食も対応" },
  { icon: "👨‍🍳", label: "自炊レシピ付き" },
];

export default function HomePage() {
  return (
    <div
      className="relative min-h-[88vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFF8F0 0%, #FFF3E0 55%, #FFE0B2 100%)",
      }}
    >
      {/* 浮遊する食べ物絵文字（装飾） */}
      {FOOD_EMOJIS.map(({ emoji, style, delay }) => (
        <motion.div
          key={emoji}
          className="absolute text-5xl pointer-events-none select-none"
          style={{ ...style, opacity: 0.13 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* メインコンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-lg w-full"
      >
        {/* マスコット（ゆらゆらアニメーション） */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/mascot.png"
            alt="サクメシ マスコット"
            width={150}
            height={150}
            className="drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* ロゴ */}
        <div className="space-y-1">
          <h1
            className="text-5xl font-black tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, #FF6B35, #F7931E, #FFB347)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SAKUMESHI
          </h1>
          <p className="text-xl font-bold" style={{ color: "#F7931E" }}>
            サクメシ
          </p>
        </div>

        {/* キャッチコピー */}
        <div className="space-y-2">
          <p className="text-2xl font-bold" style={{ color: "#333" }}>
            6つの質問に答えるだけ！
          </p>
          <p className="text-base" style={{ color: "#666" }}>
            AIがあなた専用のダイエット計画を作成します
          </p>
        </div>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/form"
            className="inline-block px-10 py-4 text-white text-lg font-bold shadow-lg transition-shadow duration-300 hover:shadow-xl"
            style={{
              background: "linear-gradient(90deg, #FF6B35, #F7931E)",
              borderRadius: "50px",
            }}
          >
            🍽️ 無料で始める
          </Link>
        </motion.div>

        {/* 特徴タグ */}
        <div className="flex flex-wrap justify-center gap-2">
          {FEATURES.map(({ icon, label }) => (
            <span
              key={label}
              className="text-sm font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255, 107, 53, 0.1)",
                color: "#FF6B35",
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
            background: "rgba(255, 107, 53, 0.07)",
            border: "1px solid rgba(255, 107, 53, 0.25)",
            color: "#FF6B35",
          }}
        >
          💪 サクトレ姉妹サービス → 運動メニューはこちら
        </Link>
      </motion.div>
    </div>
  );
}
