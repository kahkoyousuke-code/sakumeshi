import { describe, expect, it } from "vitest";
import {
  COLUMNS,
  COLUMN_CATEGORIES,
  columnsByCategory,
  getColumn,
} from "./columns";

describe("COLUMNS", () => {
  it("has unique slugs", () => {
    const slugs = COLUMNS.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("only links to related columns that exist", () => {
    for (const column of COLUMNS) {
      for (const slug of column.related) {
        expect(getColumn(slug), `${column.slug} -> ${slug}`).toBeDefined();
      }
    }
  });
});

describe("columnsByCategory", () => {
  it("places every column in exactly one category, none left empty", () => {
    const groups = columnsByCategory();
    expect(groups.map((g) => g.id)).toEqual(COLUMN_CATEGORIES.map((c) => c.id));
    for (const group of groups) expect(group.columns.length).toBeGreaterThan(0);

    const placed = groups.flatMap((g) => g.columns.map((c) => c.slug));
    expect(placed.sort()).toEqual(COLUMNS.map((c) => c.slug).sort());
  });

  it("sorts each category newest first", () => {
    for (const { columns } of columnsByCategory()) {
      const dates = columns.map((c) => c.date);
      expect(dates).toEqual([...dates].sort().reverse());
    }
  });
});
