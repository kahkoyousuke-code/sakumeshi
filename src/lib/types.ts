// ==================== フォーム用型 ====================

export interface FormOption {
  value: string;
  label: string;
  description?: string;
}

export interface FormStep {
  id: string;
  question: string;
  type: "radio" | "select" | "number" | "multiselect";
  options?: FormOption[];
  placeholder?: string;
  unit?: string;
}

export interface UserInput {
  gender: "male" | "female" | "other";
  age: number;
  height: number;
  weight: number;
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active";
  goal: "lose" | "maintain" | "gain";
  dietaryRestrictions: string[];
  allergies: string[];
}

// ==================== 結果表示用型 ====================

export interface PFCBalance {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
}

export interface Meal {
  name: string;
  description: string;
  calories: number;
  pfc: PFCBalance;
  ingredients: string[];
  recipe?: string;
}

export interface DayPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snack?: Meal;
  totalCalories: number;
  totalPFC: PFCBalance;
}

export interface MealPlanResult {
  dayPlan: DayPlan;
  advice: string;
  targetCalories: number;
  targetPFC: PFCBalance;
}

// ==================== API用型（UserAnswers → DietPlan） ====================

export type Goal = "lose" | "maintain" | "gain";
export type Exercise = "none" | "light" | "active";
export type Preference = "none" | "lowcarb" | "lowfat";

export interface UserAnswers {
  goal: Goal;
  currentWeight: number;
  targetWeight: number;
  period: "1month" | "3months" | "6months";
  exercise: Exercise;
  preference: Preference;
}

export interface MealItem {
  time: "朝" | "昼" | "夕";
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
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
  bmr: number;
  tdee: number;
  weeklyChange: number;
  menus: DayMenu[];
  advice: string[];
}
