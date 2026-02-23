"use client";

import { useState } from "react";
import { DayPlan } from "@/lib/types";
import MealCard from "@/components/MealCard";

interface ResultTabsProps {
  dayPlan: DayPlan;
}

const TABS = [
  { id: "breakfast", label: "朝食" },
  { id: "lunch", label: "昼食" },
  { id: "dinner", label: "夕食" },
  { id: "snack", label: "間食" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ResultTabs({ dayPlan }: ResultTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("breakfast");

  const mealMap = {
    breakfast: { meal: dayPlan.breakfast, label: "朝食" },
    lunch: { meal: dayPlan.lunch, label: "昼食" },
    dinner: { meal: dayPlan.dinner, label: "夕食" },
    snack: dayPlan.snack ? { meal: dayPlan.snack, label: "間食" } : null,
  };

  const activeMeal = mealMap[activeTab];

  return (
    <div className="space-y-4">
      {/* タブナビゲーション */}
      <div className="flex gap-1 bg-pink-50 rounded-xl p-1">
        {TABS.map((tab) => {
          if (tab.id === "snack" && !dayPlan.snack) return null;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "text-gray-500 hover:text-[var(--primary)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* コンテンツ */}
      {activeMeal && (
        <MealCard meal={activeMeal.meal} label={activeMeal.label} />
      )}
    </div>
  );
}
