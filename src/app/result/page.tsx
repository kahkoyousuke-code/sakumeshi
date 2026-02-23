"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MealPlanResult } from "@/lib/types";
import DonutChart from "@/components/DonutChart";
import ResultTabs from "@/components/ResultTabs";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<MealPlanResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("mealPlan");
    if (!stored) {
      router.push("/form");
      return;
    }
    setResult(JSON.parse(stored));
  }, [router]);

  if (!result) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-400 animate-pulse">読み込み中...</p>
      </div>
    );
  }

  const { dayPlan, advice, targetCalories, targetPFC } = result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-10 space-y-8"
    >
      <h2 className="text-3xl font-bold text-center text-[var(--primary)]">
        あなたの食事プラン 🍽️
      </h2>

      {/* 目標カロリーとPFCチャート */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          目標栄養バランス（{targetCalories}kcal）
        </h3>
        <DonutChart pfc={targetPFC} />
      </section>

      {/* アドバイス */}
      <section className="bg-[var(--primary-light)] rounded-2xl p-5">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-bold text-[var(--primary)]">AIアドバイス：</span>
          {advice}
        </p>
      </section>

      {/* 食事タブ */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">食事メニュー</h3>
        <ResultTabs dayPlan={dayPlan} />
      </section>

      {/* 合計 */}
      <section className="bg-white rounded-2xl shadow-md p-5 text-center">
        <p className="text-gray-500 text-sm">1日合計</p>
        <p className="text-2xl font-bold text-[var(--primary)]">
          {dayPlan.totalCalories} kcal
        </p>
        <p className="text-sm text-gray-500 mt-1">
          P: {dayPlan.totalPFC.protein}g / F: {dayPlan.totalPFC.fat}g / C: {dayPlan.totalPFC.carbs}g
        </p>
      </section>

      <div className="text-center">
        <button
          onClick={() => router.push("/form")}
          className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
        >
          もう一度診断する
        </button>
      </div>
    </motion.div>
  );
}
