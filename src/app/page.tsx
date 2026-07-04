"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SAKU_TRAINING_URL, SAKU_SUPPU_URL, TOTAL_STEPS } from "@/lib/constants";

const FEATURES = [
  { icon: "📊", label: "カロリー・PFC計算" },
  { icon: "🗓️", label: "1週間メニュー" },
  { icon: "🏪", label: "コンビニ食も対応" },
  { icon: "👨‍🍳", label: "自炊レシピ付き" },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "質問に答える",
    detail: `年齢・体重・目標など${TOTAL_STEPS}つの質問に回答（約1分）`,
  },
  {
    step: "2",
    title: "AIが自動計算",
    detail: "あなた専用の目標カロリーとPFCバランスを算出",
  },
  {
    step: "3",
    title: "プラン完成",
    detail: "7日分の献立・レシピ・買い物リストが手に入る",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center px-4 py-10 bg-white">
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
          <h1 className="text-4xl font-bold text-[var(--primary)]">サクメシ</h1>
          <p className="text-lg font-semibold text-gray-700">
            サクッとダイエット計画を作成
          </p>
        </div>

        {/* 説明文 */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {TOTAL_STEPS}つの質問に答えるだけで、あなたにぴったりの食事メニューをサクッと作成します！
        </p>

        {/* CTAボタン */}
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="w-full"
        >
          <Link
            href="/form"
            className="block w-full py-4 px-8 bg-[var(--primary)] text-white text-lg font-bold rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            無料で食事プランを作る
          </Link>
        </motion.div>

        {/* 所要時間 */}
        <p className="text-xs text-gray-400">所要時間：約1分／登録不要</p>

        {/* 特徴タグ */}
        <div className="flex flex-wrap justify-center gap-2">
          {FEATURES.map(({ icon, label }) => (
            <span
              key={label}
              className="text-sm font-medium px-3 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)]"
            >
              {icon} {label}
            </span>
          ))}
        </div>

        {/* かんたん3ステップ */}
        <section className="w-full text-left">
          <h2 className="text-sm font-bold text-gray-500 text-center mb-3">
            かんたん3ステップ
          </h2>
          <ol className="space-y-2">
            {HOW_IT_WORKS.map(({ step, title, detail }) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50/50 px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-700">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 姉妹サービス バナー */}
        <Link
          href={SAKU_TRAINING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-75 text-[var(--primary)]"
          style={{
            background: "rgba(76, 175, 80, 0.07)",
            border: "1px solid rgba(76, 175, 80, 0.25)",
          }}
        >
          💪 サクトレ姉妹サービス → 運動メニューはこちら
        </Link>
        <Link
          href={SAKU_SUPPU_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition-opacity duration-200 hover:opacity-75"
          style={{
            background: "rgba(59, 130, 246, 0.07)",
            border: "1px solid rgba(59, 130, 246, 0.25)",
            color: "#3B82F6",
          }}
        >
          💊 サプリも選ぼう → サクサプ
        </Link>
      </motion.div>
    </div>
  );
}
