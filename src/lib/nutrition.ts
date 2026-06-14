import type { UserAnswers, Exercise, Preference, Goal } from "./types";

// 活動係数（ほぼなし / 週1〜2回 / 週3回以上）
export const ACTIVITY_MULTIPLIER: Record<Exercise, number> = {
  none: 1.2,
  light: 1.375,
  active: 1.55,
};

// PFC 比率 [タンパク質, 脂質, 炭水化物]
export const PFC_RATIO: Record<Preference, [number, number, number]> = {
  none: [0.3, 0.25, 0.45],
  lowcarb: [0.35, 0.35, 0.3],
  lowfat: [0.35, 0.15, 0.5],
};

// 目標別の1日カロリー調整
const GOAL_DAILY_DIFF: Record<Goal, number> = {
  lose: -500,
  maintain: 0,
  gain: 300,
};

export interface Nutrition {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  fat: number;
  carbs: number;
  weeklyChange: number;
}

// ハリス・ベネディクト式でカロリー・PFC を計算
export function calcNutrition(answers: UserAnswers): Nutrition {
  const weight = Number(answers.currentWeight);
  const height = Number(answers.height);
  const age = Number(answers.age);

  if (isNaN(weight) || weight <= 0) {
    throw new Error(`体重の値が不正です: ${answers.currentWeight}`);
  }
  if (isNaN(height) || height <= 0) {
    throw new Error(`身長の値が不正です: ${answers.height}`);
  }
  if (isNaN(age) || age <= 0) {
    throw new Error(`年齢の値が不正です: ${answers.age}`);
  }

  // BMR（改訂ハリス・ベネディクト）
  // 男性: 88.362 + (13.397 × 体重kg) + (4.799 × 身長cm) - (5.677 × 年齢)
  // 女性: 447.593 + (9.247 × 体重kg) + (3.098 × 身長cm) - (4.330 × 年齢)
  let bmr: number;
  if (answers.gender === "female") {
    bmr = Math.round(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age);
  } else if (answers.gender === "male") {
    bmr = Math.round(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age);
  } else {
    // other: 男女の平均
    const male = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    const female = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    bmr = Math.round((male + female) / 2);
  }

  // BMR 異常値チェック（成人の現実的な範囲: 800〜4000kcal）
  if (bmr < 800 || bmr > 4000) {
    throw new Error(`BMR値が異常です（${bmr}kcal）。入力値を確認してください`);
  }

  // TDEE
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIER[answers.exercise]);

  // 目標カロリー
  const dailyDiff = GOAL_DAILY_DIFF[answers.goal];
  let targetCalories = tdee + dailyDiff;
  if (answers.goal === "lose") {
    targetCalories = Math.max(targetCalories, 1200); // 最低 1200kcal
  }

  // PFC グラム計算（P: 4kcal/g, F: 9kcal/g, C: 4kcal/g）
  const [pr, fr, cr] = PFC_RATIO[answers.preference];
  const protein = Math.round((targetCalories * pr) / 4);
  const fat = Math.round((targetCalories * fr) / 9);
  const carbs = Math.round((targetCalories * cr) / 4);

  // 週あたりの体重変化（1kg ≈ 7700kcal）
  const weeklyChange = parseFloat(((dailyDiff * 7) / 7700).toFixed(2));

  return { bmr, tdee, targetCalories, protein, fat, carbs, weeklyChange };
}

const PERIOD_WEEKS: Record<UserAnswers["period"], number> = {
  "1month": 4,
  "3months": 13,
  "6months": 26,
};

export interface PaceAssessment {
  needWeekly: number; // この期間で達成するのに必要な週あたり変化量(kg、絶対値)
  safeWeekly: number; // 健康的に推奨される週あたり上限(kg)
  isAggressive: boolean; // 推奨ペースを超えているか
  weeks: number;
}

// 目標体重・期間が現実的かを判定する（減量/増量時のみ意味を持つ）
export function assessPace(
  currentWeight: number,
  targetWeight: number,
  period: UserAnswers["period"],
  goal: Goal
): PaceAssessment | null {
  if (goal === "maintain") return null;
  const cw = Number(currentWeight);
  const tw = Number(targetWeight);
  const weeks = PERIOD_WEEKS[period];
  if (!cw || !tw || !weeks) return null;

  const diff = Math.abs(cw - tw);
  if (diff === 0) return null;

  const needWeekly = parseFloat((diff / weeks).toFixed(2));
  // 健康的な上限：体重の約1%/週（減量・増量とも）、最低でも0.5kg/週は許容
  const safeWeekly = parseFloat(Math.max(cw * 0.01, 0.5).toFixed(2));

  return {
    needWeekly,
    safeWeekly,
    isAggressive: needWeekly > safeWeekly,
    weeks,
  };
}
