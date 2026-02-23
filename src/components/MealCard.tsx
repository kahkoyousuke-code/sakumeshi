import { MealItem } from "@/lib/types";

interface MealCardProps {
  meal: MealItem;
}

const TIME_LABEL: Record<MealItem["time"], string> = {
  朝: "朝食",
  昼: "昼食",
  夕: "夕食",
};

export default function MealCard({ meal }: MealCardProps) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm space-y-3">
      {/* ヘッダー：食事区分 + カロリー */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full">
          {TIME_LABEL[meal.time]}
        </span>
        <span className="text-sm font-bold text-gray-500">{meal.calories} kcal</span>
      </div>

      {/* 料理名 */}
      <h4 className="text-lg font-bold text-gray-800">{meal.name}</h4>

      {/* PFC */}
      <div className="flex gap-4 text-xs">
        <span className="text-[var(--primary)] font-semibold">P {meal.protein}g</span>
        <span className="text-[var(--accent)] font-semibold">F {meal.fat}g</span>
        <span className="text-[var(--secondary)] font-semibold">C {meal.carbs}g</span>
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
    </div>
  );
}
