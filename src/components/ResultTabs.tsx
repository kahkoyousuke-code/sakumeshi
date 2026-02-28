"use client";

import { useState } from "react";
import { DayMenu } from "@/lib/types";
import MealCard from "@/components/MealCard";

interface ResultTabsProps {
  menus: DayMenu[];
}

export default function ResultTabs({ menus }: ResultTabsProps) {
  const [activeDay, setActiveDay] = useState(0);

  const currentDay = menus[activeDay];

  return (
    <div className="space-y-4">
      {/* 曜日タブ（月〜日） */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {menus.map((menu, i) => (
          <button
            key={menu.day}
            onClick={() => setActiveDay(i)}
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
          {currentDay.meals.map((meal) => (
            <MealCard key={meal.time} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
