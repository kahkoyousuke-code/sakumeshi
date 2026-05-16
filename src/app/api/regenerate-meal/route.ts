import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { MealItem } from "@/lib/types";

export const maxDuration = 30;

type Goal = "lose" | "maintain" | "gain";
type Exercise = "none" | "light" | "active";
type Preference = "none" | "lowcarb" | "lowfat";
type Gender = "male" | "female" | "other";

interface RegenerateRequest {
  answers: {
    gender: Gender;
    age: number;
    height: number;
    goal: Goal;
    exercise: Exercise;
    preference: Preference;
  };
  day: string;
  time: MealItem["time"];
  targetCalories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// 食事区分ごとのカロリー比率
const MEAL_RATIO: Record<MealItem["time"], number> = {
  朝: 0.28,
  昼: 0.38,
  夕: 0.34,
};

function buildRegeneratePrompt(req: RegenerateRequest): string {
  const genderLabel = { male: "男性", female: "女性", other: "その他" }[req.answers.gender];
  const goalLabel = { lose: "減量", maintain: "現状維持", gain: "増量" }[req.answers.goal];
  const exerciseLabel = { none: "ほぼなし", light: "週1〜2回", active: "週3回以上" }[req.answers.exercise];
  const preferenceLabel = { none: "制限なし", lowcarb: "低糖質", lowfat: "低脂質" }[req.answers.preference];

  const mealCalories = Math.round(req.targetCalories * MEAL_RATIO[req.time]);

  return `あなたは管理栄養士です。以下の条件で${req.day}曜日の${req.time}食を1食だけ提案してください。前回とは違う料理にしてください。

【ユーザー情報】
- 性別：${genderLabel}
- 年齢：${req.answers.age}歳
- 身長：${req.answers.height}cm
- 目標：${goalLabel}
- 運動頻度：${exerciseLabel}
- 食事の好み：${preferenceLabel}

【この食事のカロリー目安】
- ${req.time}食：約${mealCalories}kcal（1日${req.targetCalories}kcalの${Math.round(MEAL_RATIO[req.time] * 100)}%）
- 1日目標PFC：P${req.protein}g / F${req.fat}g / C${req.carbs}g

【要件】
- 日本の一般的な食材を使うこと
- 実際に作りやすい現実的なメニューにすること
- 食物繊維を意識した食材選びをすること

以下のJSON形式のみで回答してください（マークダウン・コードブロック厳禁）：

{"time":"${req.time}","name":"料理名","calories":数値,"protein":数値,"fat":数値,"carbs":数値,"fiber":数値,"recipe":"レシピ（50文字以内）","convenienceAlt":"コンビニ代替品（30文字以内）"}`;
}

export async function POST(req: NextRequest) {
  try {
    const body: RegenerateRequest = await req.json();

    if (!body.answers || !body.day || !body.time || !body.targetCalories) {
      return new Response(JSON.stringify({ error: "入力データが不正です" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prompt = buildRegeneratePrompt(body);

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: "あなたは管理栄養士です。指定されたJSON形式のみで回答してください。",
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const meal: MealItem = JSON.parse(text.substring(jsonStart, jsonEnd + 1));

    return new Response(JSON.stringify(meal), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[regenerate-meal] error:", message);
    return new Response(JSON.stringify({ error: "再生成に失敗しました" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
