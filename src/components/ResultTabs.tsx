"use client";

import { useState } from "react";
import { DayMenu, MealItem } from "@/lib/types";
import MealCard from "@/components/MealCard";

interface ResultTabsProps {
  menus: DayMenu[];
  onRegenerate?: (dayIndex: number, time: MealItem["time"]) => Promise<void>;
  onRegenerateDay?: (dayIndex: number) => Promise<void>;
}

export default function ResultTabs({
  menus,
  onRegenerate,
  onRegenerateDay,
}: ResultTabsProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [dayLoading, setDayLoading] = useState(false);
  const [dayError, setDayError] = useState<string | null>(null);

  const currentDay = menus[activeDay];

  async function handleDayRegenerate() {
    if (!onRegenerateDay) return;
    setDayLoading(true);
    setDayError(null);
    try {
      await onRegenerateDay(activeDay);
    } catch (err) {
      setDayError(err instanceof Error ? err.message : "再生成に失敗しました");
    } finally {
      setDayLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* 曜日タブ（月〜日） */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {menus.map((menu, i) => (
          <button
            key={menu.day}
            onClick={() => {
              setActiveDay(i);
              setDayError(null);
            }}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeDay === i
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-green-50 text-gray-500 hover:text-[var(--primary)]"
            }`}
          >
            {menu.day}
          </button>
        ))}
      </div>

      {/* 選択中の日の食事（朝・昼・夕） */}
      {currentDay && (
        <div className="space-y-3">
          {onRegenerateDay && (
            <div className="flex justify-end">
              <button
                onClick={handleDayRegenerate}
                disabled={dayLoading}
                className="text-xs font-medium text-[var(--primary)] border border-[var(--primary)] rounded-full px-3 py-1.5 hover:bg-[var(--primary)] hover:text-white transition-all disabled:opacity-50"
              >
                {dayLoading ? "生成中..." : "🔄 この日をまるごと変える"}
              </button>
            </div>
          )}
          {dayError && (
            <p className="text-xs text-red-500 text-right">{dayError}</p>
          )}
          {currentDay.meals.map((meal) => (
            <MealCard
              key={meal.time}
              meal={meal}
              onRegenerate={
                onRegenerate
                  ? () => onRegenerate(activeDay, meal.time)
                  : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
