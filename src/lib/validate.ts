import type { UserAnswers } from "@/lib/types";

/**
 * API に届いたリクエストボディが `UserAnswers` として使える形かを判定する。
 *
 * クライアントは誰でも作れるので、Claude を呼ぶ前にここで弾く。数値フィールド
 * はフォーム側で文字列として扱われており（`/form/page.tsx` の `handleNext` で
 * `Number()` 変換）、変換漏れが一番起きやすいため型を厳密に見る。
 */
export function validateAnswers(body: unknown): body is UserAnswers {
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
