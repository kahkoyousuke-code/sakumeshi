import { describe, it, expect } from "vitest";
import { getRecommendedItem, pickRecommendedItems, type RecommendationContext } from "./recommendedItems";
import { COLUMN_AFFILIATES } from "./columnAffiliates";

const base: RecommendationContext = {
  goal: "lose",
  exercise: "none",
  preference: "none",
  dislikes: ["none"],
};

const ids = (ctx: RecommendationContext, limit?: number) =>
  pickRecommendedItems(ctx, limit).map((item) => item.id);

describe("pickRecommendedItems", () => {
  it("既定で6件返す", () => {
    expect(ids(base)).toHaveLength(6);
  });

  it("目標に合わないアイテムを出さない", () => {
    expect(ids({ ...base, goal: "gain" }, 99)).not.toContain("konjac-noodles");
    expect(ids({ ...base, goal: "gain" }, 99)).not.toContain("body-scale");
    expect(ids({ ...base, goal: "lose" }, 99)).not.toContain("protein-bar");
  });

  it("アレルギー・苦手な食材を含むアイテムを出さない", () => {
    const result = ids({ ...base, dislikes: ["乳製品"] }, 99);
    expect(result).not.toContain("whey-protein");
    expect(result).toContain("soy-protein");
    expect(ids({ ...base, dislikes: ["大豆"] }, 99)).not.toContain("soy-protein");
  });

  it("ホエイが出せるときはソイを重ねて出さない", () => {
    expect(ids(base, 99)).toContain("whey-protein");
    expect(ids(base, 99)).not.toContain("soy-protein");
  });

  it("減量なら体組成計を6件に入れる", () => {
    expect(ids(base)).toContain("body-scale");
  });

  it("食事スタイルが合うアイテムを上位にする", () => {
    expect(ids({ ...base, preference: "lowcarb" }).slice(0, 2)).toEqual(
      expect.arrayContaining(["konjac-noodles", "salad-chicken"])
    );
  });

  it("運動している人にはプロテインバーを上位にする", () => {
    const gain: RecommendationContext = { ...base, goal: "gain" };
    const noExercise = ids(gain, 99).indexOf("protein-bar");
    const active = ids({ ...gain, exercise: "active" }, 99).indexOf("protein-bar");
    expect(active).toBeLessThan(noExercise);
  });
});

describe("COLUMN_AFFILIATES", () => {
  it("存在するアイテムだけを参照し、1記事2つまで", () => {
    for (const [slug, affiliate] of Object.entries(COLUMN_AFFILIATES)) {
      const items = affiliate.items;
      expect(items.length, slug).toBeGreaterThan(0);
      expect(items.length, slug).toBeLessThanOrEqual(2);
      for (const id of items) expect(getRecommendedItem(id), `${slug}: ${id}`).toBeDefined();
    }
  });
});
