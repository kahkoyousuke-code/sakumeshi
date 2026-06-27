import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { UserAnswers } from "@/lib/types";
import { calcNutrition } from "@/lib/nutrition";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const maxDuration = 60;

// Anthropic クライアント（Vercel 環境変数から API キーを取得）
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// 苦手・アレルギー食材を読みやすい文言に変換（"none" は除外）
function formatDislikes(dislikes: string[] | undefined): string {
  const list = (dislikes ?? []).filter((d) => d && d !== "none");
  return list.length > 0 ? list.join("、") : "なし";
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

  const genderLabel = { male: "男性", female: "女性", other: "その他" }[answers.gender];
  const dislikesLabel = formatDislikes(answers.dislikes);

  return `あなたは管理栄養士です。以下のユーザー情報をもとに、実用的な7日間の食事プランを提案してください。

【ユーザー情報】
- 性別：${genderLabel}
- 年齢：${answers.age}歳
- 身長：${answers.height}cm
- 現在の体重：${answers.currentWeight}kg
- 目標体重：${answers.targetWeight}kg
- 目標期間：${periodLabel}
- 目標：${goalLabel}
- 運動頻度：${exerciseLabel}
- 食事の好み：${preferenceLabel}
- 避ける食材（アレルギー・苦手）：${dislikesLabel}

【計算値（ハリス・ベネディクト式）】
- 基礎代謝（BMR）：${bmr}kcal
- 総エネルギー消費量（TDEE）：${tdee}kcal
- 1日目標カロリー：${targetCalories}kcal
- 目標タンパク質：${protein}g / 脂質：${fat}g / 炭水化物：${carbs}g
- 推定週間体重変化：${weeklyChange > 0 ? "+" : ""}${weeklyChange}kg/週

【要件】
- 日本の一般的な食材を使用すること
- 朝・昼・夕の3食を7日分（月〜日）提案すること
- 各食事にカロリー・PFC・食物繊維・自炊レシピ・コンビニ代替を含めること
- 極端なカロリー制限や偏った食事は避けること
- 実際に作りやすい現実的なメニューにすること
- 食物繊維は1日合計20g以上を目標とすること（野菜・豆類・海藻・きのこを積極的に使用）
- 食材の使い回しを重視すること：1週間で使う主菜の食材（肉・魚）は3〜4種類程度に絞り、複数の日・食事で使い回すこと。野菜も同じものを数日にわたって使い、買い物量と食品ロスを抑えること。スーパーで売られている一般的な量（鶏むね肉なら1〜2枚パック、野菜なら1個・1袋単位）で買い切れる構成にすること
- ただし毎日まったく同じ料理にはせず、同じ食材でも調理法・味付けを変えて飽きないようにすること
${dislikesLabel !== "なし" ? `- 「${dislikesLabel}」は使用しないこと（アレルギー・苦手食材のため、加工品の原材料にも含めないこと）` : ""}

以下の JSON 形式のみで回答してください（マークダウン・コードブロック厳禁）：

{
  "targetCalories": ${targetCalories},
  "protein": ${protein},
  "fat": ${fat},
  "carbs": ${carbs},
  "totalFiber": 数値（1日の目標食物繊維量g、目安20以上）,
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
          "fiber": 数値（食物繊維g）,
          "recipe": "レシピ（50文字以内）",
          "convenienceAlt": "コンビニ代替品（30文字以内）"
        },
        { "time": "昼", ... },
        { "time": "夕", ... }
      ]
    }
  ],
  "advice": ["アドバイス1", "アドバイス2", "アドバイス3"]
}

【出力制約】recipe は50文字以内、convenienceAlt は30文字以内、advice は3つまで。余分な説明は不要。`;
}

// 入力バリデーション（フォームと API の型ズレを早期検出）
function validateAnswers(body: unknown): body is UserAnswers {
  if (!body || typeof body !== "object") return false;
  const a = body as Record<string, unknown>;
  return (
    ["male", "female", "other"].includes(a.gender as string) &&
    typeof a.age === "number" && a.age > 0 &&
    typeof a.height === "number" && a.height > 0 &&
    ["lose", "maintain", "gain"].includes(a.goal as string) &&
    typeof a.currentWeight === "number" &&
    typeof a.targetWeight === "number" &&
    ["1month", "3months", "6months"].includes(a.period as string) &&
    ["none", "light", "active"].includes(a.exercise as string) &&
    ["none", "lowcarb", "lowfat"].includes(a.preference as string) &&
    (a.dislikes === undefined || Array.isArray(a.dislikes))
  );
}

export async function POST(req: NextRequest) {
  try {
    // レート制限チェック（最も高コストな sonnet 生成。1時間5回）
    const ip = getClientIp(req);

    if (!(await checkRateLimit(ip, { max: 5, prefix: "gen" }))) {
      console.warn("[generate] rate limit exceeded:", ip);
      return new Response(
        JSON.stringify({ error: "しばらく時間をおいてお試しください" }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const body: unknown = await req.json();

    // 受信データをログ出力（Vercel ログで確認可能）
    console.log("[generate] received:", JSON.stringify(body));

    if (!validateAnswers(body)) {
      console.error("[generate] validation failed. received:", JSON.stringify(body));
      console.error("[generate] expected fields: gender, age, height, goal, currentWeight, targetWeight, period, exercise, preference");
      return new Response(
        JSON.stringify({
          error: "入力データが不正です",
          received: body,
          expected: "gender, age, height, goal, currentWeight, targetWeight, period, exercise, preference",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const answers = body;
    const prompt = buildPrompt(answers);

    // Anthropic ストリーミングリクエスト
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 16000,
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
