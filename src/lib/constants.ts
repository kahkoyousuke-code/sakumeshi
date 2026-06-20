import { FormStep } from "./types";

export const APP_NAME = "サクメシ";
export const APP_DESCRIPTION = "あなたにぴったりの食事メニューをAIが提案します";

export const SAKU_TRAINING_URL =
  process.env.NEXT_PUBLIC_SAKUTORE_URL ?? "https://sakutore.vercel.app/";

export const SAKU_SUPPU_URL =
  process.env.NEXT_PUBLIC_SAKUSUPPU_URL ?? "https://sakusuppu.vercel.app/";

// お問い合わせ用 Google フォームの URL（未設定なら準備中表示）
export const CONTACT_FORM_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? "";

// フォームのステップ定義（UserAnswers の各フィールドに対応）
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
    placeholder: "例：30",
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
      { value: "none", label: "制限なし", description: "バランスよく食べたい人向け・迷ったらコレ！" },
      { value: "lowcarb", label: "低糖質", description: "ごはん・パン・麺を控えめに。お肉好きな人向け" },
      { value: "lowfat", label: "低脂質", description: "揚げ物・油を控えめに。ごはんはしっかり食べたい人向け" },
    ],
  },
  {
    id: "dislikes",
    question: "アレルギー・苦手な食材はありますか？",
    type: "multiselect",
    description: "選んだ食材はメニューから除外します（複数選択可）",
    options: [
      { value: "卵", label: "卵" },
      { value: "乳製品", label: "乳製品" },
      { value: "小麦", label: "小麦" },
      { value: "そば", label: "そば" },
      { value: "えび・かに", label: "えび・かに" },
      { value: "ピーナッツ・ナッツ類", label: "ナッツ類" },
      { value: "魚介類", label: "魚介類" },
      { value: "大豆", label: "大豆" },
      { value: "none", label: "特になし" },
    ],
  },
];

export const TOTAL_STEPS = FORM_STEPS.length;
