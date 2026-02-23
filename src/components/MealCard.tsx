import { Meal } from "@/lib/types";

interface MealCardProps {
  meal: Meal;
  label: string;
}

export default function MealCard({ meal, label }: MealCardProps) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-500">{meal.calories} kcal</span>
      </div>

      <h4 className="text-lg font-bold text-gray-800">{meal.name}</h4>
      <p className="text-sm text-gray-500">{meal.description}</p>

      {/* PFC */}
      <div className="flex gap-4 text-xs text-gray-500">
        <span className="text-[var(--primary)] font-semibold">P {meal.pfc.protein}g</span>
        <span className="text-[var(--accent)] font-semibold">F {meal.pfc.fat}g</span>
        <span className="text-[var(--secondary)] font-semibold">C {meal.pfc.carbs}g</span>
      </div>

      {/* 食材 */}
      {meal.ingredients.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-1">食材</p>
          <div className="flex flex-wrap gap-1">
            {meal.ingredients.map((ing) => (
              <span
                key={ing}
                className="text-xs bg-pink-50 text-pink-600 px-2 py-0.5 rounded-full border border-pink-100"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* レシピ */}
      {meal.recipe && (
        <details className="text-sm">
          <summary className="cursor-pointer text-[var(--primary)] font-medium text-xs">
            作り方を見る
          </summary>
          <p className="mt-2 text-gray-600 leading-relaxed text-xs">{meal.recipe}</p>
        </details>
      )}
    </div>
  );
}
