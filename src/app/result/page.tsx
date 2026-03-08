"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DietPlan } from "@/lib/types";
import DonutChart from "@/components/DonutChart";
import ResultTabs from "@/components/ResultTabs";

const SNACK_SUGGESTIONS = {
  lose: [
    { emoji: "🥚", name: "ゆで卵", detail: "1個 約80kcal / P:6g" },
    { emoji: "🥛", name: "ギリシャヨーグルト", detail: "100g 約60kcal / P:10g" },
    { emoji: "🍗", name: "サラダチキンバー", detail: "1本 約60kcal / P:13g" },
    { emoji: "🌰", name: "素焼きアーモンド10粒", detail: "約60kcal / 良質な脂質" },
  ],
  maintain: [
    { emoji: "🍫", name: "プロテインバー", detail: "約180kcal / P:15g" },
    { emoji: "🍌", name: "バナナ1本", detail: "約90kcal / 手軽なエネルギー補給" },
    { emoji: "🧀", name: "チーズ2個", detail: "約100kcal / P:6g" },
    { emoji: "🍠", name: "干し芋", detail: "50g 約150kcal / 腹持ち◎" },
  ],
  gain: [
    { emoji: "🍙", name: "おにぎり＋サラダチキン", detail: "約350kcal / P:20g" },
    { emoji: "🥤", name: "プロテイン＋バナナ", detail: "約250kcal / P:25g" },
    { emoji: "🍞", name: "あんぱん", detail: "約280kcal / トレ後の糖質補給に" },
    { emoji: "🥜", name: "ミックスナッツ＋ドライフルーツ", detail: "約200kcal / 手軽にカロリーアップ" },
  ],
} as const;

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<DietPlan | null>(null);

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

  const goal = result.weeklyChange < 0 ? "lose" : result.weeklyChange > 0 ? "gain" : "maintain";
  const snacks = SNACK_SUGGESTIONS[goal];

  // DonutChart 用に PFCBalance 形式に変換
  const pfc = {
    protein: result.protein,
    fat: result.fat,
    carbs: result.carbs,
    calories: result.targetCalories,
  };

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

      {/* 目標カロリーと PFC チャート */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          目標栄養バランス（{result.targetCalories}kcal/日）
        </h3>
        <DonutChart pfc={pfc} />
      </section>

      {/* BMR / TDEE / 週間変化 */}
      <section className="bg-white rounded-2xl shadow-md p-5">
        <div className="grid grid-cols-3 divide-x text-center">
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">基礎代謝 BMR</p>
            <p className="text-lg font-bold text-gray-700">
              {result.bmr}
              <span className="text-xs font-normal text-gray-400">kcal</span>
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">消費カロリー TDEE</p>
            <p className="text-lg font-bold text-gray-700">
              {result.tdee}
              <span className="text-xs font-normal text-gray-400">kcal</span>
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs text-gray-400 mb-1">週間変化</p>
            <p className="text-lg font-bold text-[var(--primary)]">
              {result.weeklyChange > 0 ? "+" : ""}
              {result.weeklyChange}
              <span className="text-xs font-normal">kg</span>
            </p>
          </div>
        </div>
      </section>

      {/* AI アドバイス */}
      <section className="bg-[var(--primary-light)] rounded-2xl p-5 space-y-2">
        <p className="font-bold text-[var(--primary)] text-sm">AIアドバイス</p>
        <ul className="list-disc list-inside space-y-1">
          {result.advice.map((item, i) => (
            <li key={i} className="text-sm text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 7日間の食事メニュー */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          7日間の食事メニュー
        </h3>
        <ResultTabs menus={result.menus} />
      </section>

      {/* おすすめ間食 */}
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">🥗 おすすめ間食</h3>
        <div className="grid grid-cols-2 gap-3">
          {snacks.map((snack) => (
            <div
              key={snack.name}
              className="flex items-start gap-3 bg-green-50 rounded-xl p-3 border border-green-100"
            >
              <span className="text-2xl leading-none mt-0.5">{snack.emoji}</span>
              <div>
                <p className="text-sm font-semibold text-green-800">{snack.name}</p>
                <p className="text-xs text-green-600 mt-0.5">{snack.detail}</p>
              </div>
            </div>
          ))}
        </div>
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
