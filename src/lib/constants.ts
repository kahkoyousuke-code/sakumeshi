import { FormStep } from "./types";

export const APP_NAME = "sakumeshi";
export const APP_DESCRIPTION = "あなたにぴったりの食事メニューをAIが提案します";

export const SAKU_TRAINING_URL =
  process.env.NEXT_PUBLIC_SAKUTORE_URL ?? "https://sakutraining.jp";

// 活動レベルの係数（ハリス・ベネディクト方程式）
export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
} as const;

// 目標別カロリー調整
export const GOAL_ADJUSTMENTS = {
  lose: -500,
  maintain: 0,
  gain: 300,
} as const;

// 食事制限の選択肢
export const DIETARY_RESTRICTIONS = [
  { value: "vegetarian", label: "ベジタリアン" },
  { value: "vegan", label: "ヴィーガン" },
  { value: "gluten_free", label: "グルテンフリー" },
  { value: "low_carb", label: "低糖質" },
  { value: "low_fat", label: "低脂質" },
  { value: "none", label: "制限なし" },
];

// アレルギーの選択肢
export const ALLERGENS = [
  { value: "egg", label: "卵" },
  { value: "milk", label: "乳製品" },
  { value: "wheat", label: "小麦" },
  { value: "shrimp", label: "えび" },
  { value: "crab", label: "かに" },
  { value: "peanut", label: "ピーナッツ" },
  { value: "soba", label: "そば" },
  { value: "none", label: "なし" },
];

// フォームのステップ定義（UserAnswers の6フィールドに対応）
export const FORM_STEPS: FormStep[] = [
  {
    id: "goal",
    question: "目標を教えてください",
    type: "radio",
    options: [
      { value: "lose", label: "体重を減らしたい" },
      { value: "maintain", label: "現状維持したい" },
      { value: "gain", label: "筋肉・体重を増やしたい" },
    ],
  },
  {
    id: "currentWeight",
    question: "現在の体重を教えてください",
    type: "number",
    placeholder: "例：70",
    unit: "kg",
  },
  {
    id: "targetWeight",
    question: "目標体重を教えてください",
    type: "number",
    placeholder: "例：65",
    unit: "kg",
  },
  {
    id: "period",
    question: "目標達成までの期間は？",
    type: "radio",
    options: [
      { value: "1month", label: "1ヶ月" },
      { value: "3months", label: "3ヶ月" },
      { value: "6months", label: "6ヶ月" },
    ],
  },
  {
    id: "exercise",
    question: "運動習慣はありますか？",
    type: "radio",
    options: [
      { value: "none", label: "ほぼなし" },
      { value: "light", label: "週1〜2回" },
      { value: "active", label: "週3回以上" },
    ],
  },
  {
    id: "preference",
    question: "食事の好みを教えてください",
    type: "radio",
    options: [
      { value: "none", label: "制限なし" },
      { value: "lowcarb", label: "低糖質（炭水化物を控えめに）" },
      { value: "lowfat", label: "低脂質（脂質を控えめに）" },
    ],
  },
];

export const TOTAL_STEPS = FORM_STEPS.length;
