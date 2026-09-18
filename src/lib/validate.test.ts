import { describe, it, expect } from "vitest";
import { validateAnswers } from "./validate";
import type { UserAnswers } from "./types";

// フォームから送られてくる正常な形。各テストで1項目だけ壊して確認する。
const valid: UserAnswers = {
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

describe("validateAnswers", () => {
  it("正常な回答を通す", () => {
    expect(validateAnswers(valid)).toBe(true);
  });

  it("dislikes が無くても通す（任意項目）", () => {
    const withoutDislikes: Partial<UserAnswers> = { ...valid };
    delete withoutDislikes.dislikes;
    expect(validateAnswers(withoutDislikes)).toBe(true);
  });

  it("オブジェクト以外は弾く", () => {
    expect(validateAnswers(null)).toBe(false);
    expect(validateAnswers(undefined)).toBe(false);
    expect(validateAnswers("{}")).toBe(false);
    expect(validateAnswers(42)).toBe(false);
    expect(validateAnswers([])).toBe(false);
  });

  it("数値が文字列で来たら弾く（Number 変換漏れの検出）", () => {
    expect(validateAnswers({ ...valid, age: "30" })).toBe(false);
    expect(validateAnswers({ ...valid, height: "170" })).toBe(false);
    expect(validateAnswers({ ...valid, currentWeight: "70" })).toBe(false);
    expect(validateAnswers({ ...valid, targetWeight: "65" })).toBe(false);
  });

  it("年齢・身長が 0 以下なら弾く（ゼロ除算・非現実的な計算を防ぐ）", () => {
    expect(validateAnswers({ ...valid, age: 0 })).toBe(false);
    expect(validateAnswers({ ...valid, age: -1 })).toBe(false);
    expect(validateAnswers({ ...valid, height: 0 })).toBe(false);
    expect(validateAnswers({ ...valid, height: -170 })).toBe(false);
  });

  it("選択肢にない値は弾く", () => {
    expect(validateAnswers({ ...valid, gender: "unknown" })).toBe(false);
    expect(validateAnswers({ ...valid, goal: "bulk" })).toBe(false);
    expect(validateAnswers({ ...valid, period: "2months" })).toBe(false);
    expect(validateAnswers({ ...valid, exercise: "hard" })).toBe(false);
    expect(validateAnswers({ ...valid, preference: "keto" })).toBe(false);
  });

  it("必須項目が欠けていたら弾く", () => {
    for (const key of Object.keys(valid) as (keyof UserAnswers)[]) {
      if (key === "dislikes") continue; // dislikes だけは任意
      const broken = { ...valid };
      delete broken[key];
      expect(validateAnswers(broken), `${key} が無い場合`).toBe(false);
    }
  });

  it("dislikes が配列でなければ弾く", () => {
    expect(validateAnswers({ ...valid, dislikes: "卵" })).toBe(false);
    expect(validateAnswers({ ...valid, dislikes: { egg: true } })).toBe(false);
  });
});
