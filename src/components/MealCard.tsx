"use client";

import { useState } from "react";
import { MealItem } from "@/lib/types";

interface MealCardProps {
  meal: MealItem;
  onRegenerate?: () => Promise<void>;
}

const TIME_LABEL: Record<MealItem["time"], string> = {
  朝: "朝食",
  昼: "昼食",
  夕: "夕食",
};

export default function MealCard({ meal, onRegenerate }: MealCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRegenerate() {
    if (!onRegenerate || isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      await onRegenerate();
    } catch {
      setError("再生成に失敗しました");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`bg-white border border-green-100 rounded-2xl p-5 shadow-sm space-y-3 transition-opacity duration-200 ${isLoading ? "opacity-50" : ""}`}>
      {/* ヘッダー：食事区分 + カロリー + 差し替えボタン */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full">
          {TIME_LABEL[meal.time]}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-500">{meal.calories} kcal</span>
          {onRegenerate && (
            <button
              onClick={handleRegenerate}
              disabled={isLoading}
              title="この食事を差し替える"
              className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-[var(--primary)] hover:bg-green-50 transition-colors disabled:cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* 料理名 */}
      <h4 className="text-lg font-bold text-gray-800">{meal.name}</h4>

      {/* PFC */}
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="text-[var(--primary)] font-semibold">P {meal.protein}g</span>
        <span className="text-[var(--accent)] font-semibold">F {meal.fat}g</span>
        <span className="text-[var(--secondary)] font-semibold">C {meal.carbs}g</span>
        {meal.fiber != null && (
          <span className="text-emerald-600 font-semibold">食物繊維 {meal.fiber}g</span>
        )}
      </div>

      {/* 自炊レシピ */}
      {meal.recipe && (
        <details className="text-sm">
          <summary className="cursor-pointer text-[var(--primary)] font-medium text-xs">
            作り方を見る
          </summary>
          <p className="mt-2 text-gray-600 leading-relaxed text-xs">{meal.recipe}</p>
        </details>
      )}

      {/* コンビニ代替 */}
      {meal.convenienceAlt && (
        <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500">
          <span className="font-semibold text-gray-600">コンビニ代替：</span>
          {meal.convenienceAlt}
        </div>
      )}

      {/* エラー表示 */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
