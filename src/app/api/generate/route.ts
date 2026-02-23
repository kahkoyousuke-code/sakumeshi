import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// UserAnswers 型定義（types.ts と同期）
type Goal = "lose" | "maintain" | "gain";
type Exercise = "none" | "light" | "active";
type Preference = "none" | "lowcarb" | "lowfat";

interface UserAnswers {
  goal: Goal;
  currentWeight: number;
  targetWeight: number;
  period: "1month" | "3months" | "6months";
  exercise: Exercise;
  preference: Preference;
}

// Anthropic クライアント（Vercel 環境変数から API キーを取得）
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// 活動係数（ほぼなし / 週1〜2回 / 週3回以上）
const ACTIVITY_MULTIPLIER: Record<Exercise, number> = {
  none: 1.2,
  light: 1.375,
  active: 1.55,
};

// PFC 比率 [タンパク質, 脂質, 炭水化物]
const PFC_RATIO: Record<Preference, [number, number, number]> = {
  none: [0.3, 0.25, 0.45],
  lowcarb: [0.35, 0.35, 0.3],
  lowfat: [0.35, 0.15, 0.5],
};

// ハリス・ベネディクト式でカロリー・PFC を計算（男性・35歳・170cm 仮定）
function calcNutrition(answers: UserAnswers) {
  const AGE = 35;
  const HEIGHT = 170;

  // BMR（ハリス・ベネディクト / 男性）
  const bmr = Math.round(
    66.47 + 13.75 * answers.currentWeight + 5.003 * HEIGHT - 6.755 * AGE
  );

  // TDEE
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIER[answers.exercise]);

  // 目標カロリー
  let targetCalories: number;
  if (answers.goal === "lose") {
    targetCalories = Math.max(tdee - 500, 1200); // 最低 1200kcal
  } else if (answers.goal === "gain") {
    targetCalories = tdee + 300;
  } else {
    targetCalories = tdee;
  }

  // PFC グラム計算（P: 4kcal/g, F: 9kcal/g, C: 4kcal/g）
  const [pr, fr, cr] = PFC_RATIO[answers.preference];
  const protein = Math.round((targetCalories * pr) / 4);
  const fat = Math.round((targetCalories * fr) / 9);
  const carbs = Math.round((targetCalories * cr) / 4);

  // 週あたりの体重変化（1kg ≈ 7700kcal）
  const dailyDiff =
    answers.goal === "lose" ? -500 : answers.goal === "gain" ? 300 : 0;
  const weeklyChange = parseFloat(((dailyDiff * 7) / 7700).toFixed(2));

  return { bmr, tdee, targetCalories, protein, fat, carbs, weeklyChange };
}

function buildPrompt(answers: UserAnswers): string {
  const { bmr, tdee, targetCalories, protein, fat, carbs, weeklyChange } =
    calcNutrition(answers);

  const goalLabel = { lose: "減量", maintain: "現状維持", gain: "増量" }[
    answers.goal
  ];
  const exerciseLabel = {
    none: "ほぼなし",
    light: "週1〜2回",
    active: "週3回以上",
  }[answers.exercise];
  const preferenceLabel = {
    none: "制限なし",
    lowcarb: "低糖質",
    lowfat: "低脂質",
  }[answers.preference];
  const periodLabel = {
    "1month": "1ヶ月",
    "3months": "3ヶ月",
    "6months": "6ヶ月",
  }[answers.period];

  return `あなたは管理栄養士です。以下のユーザー情報をもとに、実用的な7日間の食事プランを提案してください。

【ユーザー情報】
- 現在の体重：${answers.currentWeight}kg
- 目標体重：${answers.targetWeight}kg
- 目標期間：${periodLabel}
- 目標：${goalLabel}
- 運動頻度：${exerciseLabel}
- 食事の好み：${preferenceLabel}

【計算値（ハリス・ベネディクト式・男性・35歳・170cm 想定）】
- 基礎代謝（BMR）：${bmr}kcal
- 総エネルギー消費量（TDEE）：${tdee}kcal
- 1日目標カロリー：${targetCalories}kcal
- 目標タンパク質：${protein}g / 脂質：${fat}g / 炭水化物：${carbs}g
- 推定週間体重変化：${weeklyChange > 0 ? "+" : ""}${weeklyChange}kg/週

【要件】
- 日本の一般的な食材を使用すること
- 朝・昼・夕の3食を7日分（月〜日）提案すること
- 各食事にカロリー・PFC・自炊レシピ・コンビニ代替を含めること
- 極端なカロリー制限や偏った食事は避けること
- 実際に作りやすい現実的なメニューにすること

以下の JSON 形式のみで回答してください（マークダウン・コードブロック厳禁）：

{
  "targetCalories": ${targetCalories},
  "protein": ${protein},
  "fat": ${fat},
  "carbs": ${carbs},
  "bmr": ${bmr},
  "tdee": ${tdee},
  "weeklyChange": ${weeklyChange},
  "menus": [
    {
      "day": "月",
      "meals": [
        {
          "time": "朝",
          "name": "料理名",
          "calories": 数値,
          "protein": 数値,
          "fat": 数値,
          "carbs": 数値,
          "recipe": "自炊レシピの手順（2〜3文）",
          "convenienceAlt": "コンビニで買える代替品名"
        },
        { "time": "昼", ... },
        { "time": "夕", ... }
      ]
    }
  ],
  "advice": ["アドバイス1", "アドバイス2", "アドバイス3"]
}`;
}

// 入力バリデーション（フォームと API の型ズレを早期検出）
function validateAnswers(body: unknown): body is UserAnswers {
  if (!body || typeof body !== "object") return false;
  const a = body as Record<string, unknown>;
  return (
    ["lose", "maintain", "gain"].includes(a.goal as string) &&
    typeof a.currentWeight === "number" &&
    typeof a.targetWeight === "number" &&
    ["1month", "3months", "6months"].includes(a.period as string) &&
    ["none", "light", "active"].includes(a.exercise as string) &&
    ["none", "lowcarb", "lowfat"].includes(a.preference as string)
  );
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();

    // 受信データをログ出力（Vercel ログで確認可能）
    console.log("[generate] received:", JSON.stringify(body));

    if (!validateAnswers(body)) {
      console.error("[generate] validation failed. received:", JSON.stringify(body));
      console.error("[generate] expected fields: goal, currentWeight, targetWeight, period, exercise, preference");
      return new Response(
        JSON.stringify({
          error: "入力データが不正です",
          received: body,
          expected: "goal, currentWeight, targetWeight, period, exercise, preference",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const answers = body;
    const prompt = buildPrompt(answers);

    // Anthropic ストリーミングリクエスト
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      system:
        "あなたは管理栄養士です。指定された JSON 形式のみで回答してください。マークダウンやコードブロックは使用しないでください。",
      messages: [{ role: "user", content: prompt }],
    });

    const encoder = new TextEncoder();

    // Claude のストリームをそのままクライアントに流す
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[generate] stream error:", msg);
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error("[generate] API Error:", message);
    if (stack) console.error("[generate] Stack:", stack);
    return new Response(
      JSON.stringify({ error: "食事プランの生成に失敗しました", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
