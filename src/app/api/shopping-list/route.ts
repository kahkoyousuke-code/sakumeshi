import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { DayMenu } from "@/lib/types";

export const maxDuration = 60;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();

    if (
      !body ||
      typeof body !== "object" ||
      !Array.isArray((body as Record<string, unknown>).menus)
    ) {
      return new Response(
        JSON.stringify({ error: "menus配列が必要です" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { menus } = body as { menus: DayMenu[] };

    const menuText = menus
      .map((day) =>
        `【${day.day}曜日】\n` +
        day.meals
          .map((m) => `  ${m.time}食: ${m.name}`)
          .join("\n")
      )
      .join("\n");

    const prompt = `以下の1週間分の食事メニューから、必要な食材を抽出して買い物リストを作ってください。
同じ食材はまとめて合計量を出してください。
カテゴリ別にJSON形式で出力してください。

【1週間の食事メニュー】
${menuText}

以下のJSON形式のみで回答してください（マークダウン・コードブロック厳禁）：

{
  "categories": [
    {
      "name": "肉類",
      "emoji": "🥩",
      "items": [
        { "name": "鶏むね肉", "amount": "1kg" }
      ]
    },
    {
      "name": "魚介類",
      "emoji": "🐟",
      "items": []
    },
    {
      "name": "野菜",
      "emoji": "🥬",
      "items": []
    },
    {
      "name": "卵・大豆製品",
      "emoji": "🥚",
      "items": []
    },
    {
      "name": "米・穀物",
      "emoji": "🍚",
      "items": []
    },
    {
      "name": "調味料・その他",
      "emoji": "🧂",
      "items": []
    }
  ]
}`;

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system:
        "あなたは管理栄養士です。指定されたJSON形式のみで回答してください。マークダウンやコードブロックは使用しないでください。",
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    // JSON部分を抽出してパース
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("[shopping-list] JSON not found in response:", text);
      return new Response(
        JSON.stringify({ error: "買い物リストの生成に失敗しました" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const shoppingList = JSON.parse(jsonMatch[0]);

    return new Response(JSON.stringify(shoppingList), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[shopping-list] error:", message);
    return new Response(
      JSON.stringify({ error: "買い物リストの生成に失敗しました", detail: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
