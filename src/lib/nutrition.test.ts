import { describe, it, expect } from "vitest";
import { calcNutrition, assessPace } from "./nutrition";
import type { UserAnswers } from "./types";

// テスト用のベース回答（必要なフィールドだけ上書きして使う）
const base: UserAnswers = {
  gender: "male",
  age: 30,
  height: 170,
  goal: "lose",
  currentWeight: 70,
  targetWeight: 65,
  period: "3months",
  exercise: "none",
  preference: "none",
  dislikes: ["none"],
};

describe("calcNutrition", () => {
  it("男性のBMRを改訂ハリス・ベネディクト式で計算する", () => {
    // 88.362 + 13.397*70 + 4.799*170 - 5.677*30 = 1671.67 → 1672
    const { bmr } = calcNutrition({ ...base, exercise: "none" });
    expect(bmr).toBe(1672);
  });

  it("女性は男性と異なるBMRになる", () => {
    const male = calcNutrition({ ...base, gender: "male" }).bmr;
    const female = calcNutrition({ ...base, gender: "female" }).bmr;
    expect(female).not.toBe(male);
    // 447.593 + 9.247*70 + 3.098*170 - 4.33*30 = 1491.64 → 1492
    expect(female).toBe(1492);
  });

  it("TDEEは運動頻度の係数を反映する", () => {
    const none = calcNutrition({ ...base, exercise: "none" }).tdee;
    const active = calcNutrition({ ...base, exercise: "active" }).tdee;
    expect(active).toBeGreaterThan(none);
  });

  it("減量時は最低1200kcalを下回らない", () => {
    // 小柄・高齢・低活動で目標カロリーが低くなるケース
    const { targetCalories } = calcNutrition({
      ...base,
      gender: "female",
      age: 60,
      height: 150,
      currentWeight: 45,
      goal: "lose",
      exercise: "none",
    });
    expect(targetCalories).toBeGreaterThanOrEqual(1200);
  });

  it("PFCのカロリー合計が目標カロリーにほぼ一致する", () => {
    const { targetCalories, protein, fat, carbs } = calcNutrition(base);
    const pfcCalories = protein * 4 + fat * 9 + carbs * 4;
    // 端数の丸めがあるため誤差は数十kcal以内
    expect(Math.abs(pfcCalories - targetCalories)).toBeLessThan(30);
  });

  it("現状維持では週間体重変化が0になる", () => {
    const { weeklyChange } = calcNutrition({ ...base, goal: "maintain" });
    expect(weeklyChange).toBe(0);
  });

  it("不正な体重では例外を投げる", () => {
    expect(() =>
      calcNutrition({ ...base, currentWeight: 0 })
    ).toThrow();
  });
});

describe("assessPace", () => {
  it("現状維持ではnullを返す", () => {
    expect(assessPace(70, 65, "3months", "maintain")).toBeNull();
  });

  it("無理なペース（1ヶ月で-10kg）はisAggressive=trueになる", () => {
    const pace = assessPace(70, 60, "1month", "lose");
    expect(pace).not.toBeNull();
    expect(pace!.isAggressive).toBe(true);
  });

  it("ゆるやかなペース（6ヶ月で-3kg）はisAggressive=falseになる", () => {
    const pace = assessPace(70, 67, "6months", "lose");
    expect(pace!.isAggressive).toBe(false);
  });

  it("目標体重が同じ場合はnullを返す", () => {
    expect(assessPace(70, 70, "3months", "lose")).toBeNull();
  });
});
