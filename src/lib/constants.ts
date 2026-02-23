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

// フォームのステップ定義
export const FORM_STEPS: FormStep[] = [
  {
    id: "gender",
    question: "性別を教えてください",
    type: "radio",
    options: [
      { value: "male", label: "男性" },
      { value: "female", label: "女性" },
      { value: "other", label: "その他" },
    ],
  },
  {
    id: "age",
    question: "年齢を教えてください",
    type: "number",
    placeholder: "例：25",
    unit: "歳",
  },
  {
    id: "height",
    question: "身長を教えてください",
    type: "number",
    placeholder: "例：165",
    unit: "cm",
  },
  {
    id: "weight",
    question: "体重を教えてください",
    type: "number",
    placeholder: "例：60",
    unit: "kg",
  },
  {
    id: "activityLevel",
    question: "普段の活動レベルは？",
    type: "select",
    options: [
      { value: "sedentary", label: "ほぼ座り仕事（運動なし）" },
      { value: "light", label: "軽い運動（週1〜3回）" },
      { value: "moderate", label: "中程度の運動（週3〜5回）" },
      { value: "active", label: "ハードな運動（週6〜7回）" },
      { value: "very_active", label: "非常にハード（肉体労働など）" },
    ],
  },
  {
    id: "goal",
    question: "目標は何ですか？",
    type: "radio",
    options: [
      { value: "lose", label: "体重を減らしたい" },
      { value: "maintain", label: "現状維持したい" },
      { value: "gain", label: "筋肉をつけたい" },
    ],
  },
  {
    id: "dietaryRestrictions",
    question: "食事制限はありますか？",
    type: "multiselect",
    options: DIETARY_RESTRICTIONS,
  },
  {
    id: "allergies",
    question: "アレルギーはありますか？",
    type: "multiselect",
    options: ALLERGENS,
  },
];

export const TOTAL_STEPS = FORM_STEPS.length;
