import { UserInput, PFCBalance } from "./types";
import { ACTIVITY_MULTIPLIERS, GOAL_ADJUSTMENTS } from "./constants";

// 基礎代謝量（BMR）を計算（ハリス・ベネディクト方程式）
function calcBMR(input: UserInput): number {
  const { gender, age, height, weight } = input;
  if (gender === "female") {
    return 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }
  return 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
}

// 目標カロリーを計算
export function calcTargetCalories(input: UserInput): number {
  const bmr = calcBMR(input);
  const tdee = bmr * ACTIVITY_MULTIPLIERS[input.activityLevel];
  return Math.round(tdee + GOAL_ADJUSTMENTS[input.goal]);
}

// 目標PFCを計算
export function calcTargetPFC(calories: number, goal: UserInput["goal"]): PFCBalance {
  const proteinRatio = goal === "gain" ? 0.3 : 0.25;
  const fatRatio = 0.25;
  const carbRatio = 1 - proteinRatio - fatRatio;

  const protein = Math.round((calories * proteinRatio) / 4);
  const fat = Math.round((calories * fatRatio) / 9);
  const carbs = Math.round((calories * carbRatio) / 4);

  return { protein, fat, carbs, calories };
}

// Claude APIに送るプロンプトを生成
export function buildPrompt(input: UserInput): string {
  const targetCalories = calcTargetCalories(input);
  const targetPFC = calcTargetPFC(targetCalories, input.goal);

  const restrictions =
    input.dietaryRestrictions.length > 0 && !input.dietaryRestrictions.includes("none")
      ? input.dietaryRestrictions.join("、")
      : "なし";

  const allergies =
    input.allergies.length > 0 && !input.allergies.includes("none")
      ? input.allergies.join("、")
      : "なし";

  const goalLabel = { lose: "減量", maintain: "現状維持", gain: "増量・筋肥大" }[input.goal];
  const activityLabel = {
    sedentary: "ほぼ座り仕事",
    light: "軽い運動",
    moderate: "中程度の運動",
    active: "ハードな運動",
    very_active: "非常にハードな活動",
  }[input.activityLevel];

  return `あなたは管理栄養士AIです。以下のユーザー情報をもとに、1日分の食事プランを提案してください。

【ユーザー情報】
- 性別：${input.gender === "male" ? "男性" : input.gender === "female" ? "女性" : "その他"}
- 年齢：${input.age}歳
- 身長：${input.height}cm
- 体重：${input.weight}kg
- 活動レベル：${activityLabel}
- 目標：${goalLabel}
- 食事制限：${restrictions}
- アレルギー：${allergies}

【目標栄養素】
- カロリー：${targetCalories}kcal
- タンパク質：${targetPFC.protein}g
- 脂質：${targetPFC.fat}g
- 炭水化物：${targetPFC.carbs}g

以下のJSON形式で回答してください（コードブロックなし、JSONのみ）：

{
  "dayPlan": {
    "breakfast": {
      "name": "料理名",
      "description": "一言説明",
      "calories": 数値,
      "pfc": { "protein": 数値, "fat": 数値, "carbs": 数値, "calories": 数値 },
      "ingredients": ["食材1", "食材2"],
      "recipe": "簡単な作り方"
    },
    "lunch": { ... },
    "dinner": { ... },
    "snack": { ... },
    "totalCalories": 数値,
    "totalPFC": { "protein": 数値, "fat": 数値, "carbs": 数値, "calories": 数値 }
  },
  "advice": "栄養アドバイス（2〜3文）",
  "targetCalories": ${targetCalories},
  "targetPFC": ${JSON.stringify(targetPFC)}
}`;
}
