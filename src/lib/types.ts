// ==================== フォーム用型 ====================

export interface FormOption {
  value: string;
  label: string;
  description?: string;
}

export interface FormStep {
  id: string;
  question: string;
  description?: string;
  type: "radio" | "select" | "number" | "multiselect";
  options?: FormOption[];
  placeholder?: string;
  unit?: string;
}

// ==================== 結果表示用型 ====================

// DonutChart で使用する PFC バランス
export interface PFCBalance {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
}

// ==================== API用型（UserAnswers → DietPlan） ====================

export type Goal = "lose" | "maintain" | "gain";
export type Exercise = "none" | "light" | "active";
export type Preference = "none" | "lowcarb" | "lowfat";

export interface UserAnswers {
  gender: "male" | "female" | "other";
  age: number;
  height: number;
  goal: Goal;
  currentWeight: number;
  targetWeight: number;
  period: "1month" | "3months" | "6months";
  exercise: Exercise;
  preference: Preference;
  dislikes: string[]; // アレルギー・苦手な食材（"none" のみで「特になし」）
}

export interface MealItem {
  time: "朝" | "昼" | "夕";
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  recipe: string;
  convenienceAlt: string;
}

export interface DayMenu {
  day: string;
  meals: MealItem[];
}

export interface DietPlan {
  targetCalories: number;
  protein: number;
  fat: number;
  carbs: number;
  totalFiber: number;
  bmr: number;
  tdee: number;
  weeklyChange: number;
  menus: DayMenu[];
  advice: string[];
}

// ==================== 買い物リスト用型 ====================

export interface ShoppingItem {
  name: string;
  amount: string;
  checked?: boolean;
}

export interface ShoppingCategory {
  name: string;
  emoji: string;
  items: ShoppingItem[];
}

export interface ShoppingList {
  categories: ShoppingCategory[];
}
