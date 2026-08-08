import type { MetadataRoute } from "next";
import { COLUMNS } from "@/lib/columns";

const BASE_URL = "https://sakumeshi.app";

/**
 * lastModified must reflect real content changes, not build time.
 * Using `new Date()` here would mark every page as updated on each deploy,
 * which makes Google stop trusting the sitemap's dates. Bump these by hand
 * when the corresponding page's content actually changes.
 */
const LAST_MODIFIED = {
  home: "2026-08-01",
  form: "2026-07-20",
  legal: "2026-06-20",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // The column index changes whenever a new column ships.
  const latestColumnDate = COLUMNS.reduce<string>((latest, column) => {
    const modified = column.updated ?? column.date;
    return modified > latest ? modified : latest;
  }, LAST_MODIFIED.home);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(LAST_MODIFIED.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/form`,
      lastModified: new Date(LAST_MODIFIED.form),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/column`,
      lastModified: new Date(latestColumnDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...["about", "privacy", "disclaimer", "contact"].map((path) => ({
      url: `${BASE_URL}/${path}`,
      lastModified: new Date(LAST_MODIFIED.legal),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  const columnRoutes: MetadataRoute.Sitemap = COLUMNS.map((column) => ({
    url: `${BASE_URL}/column/${column.slug}`,
    lastModified: new Date(column.updated ?? column.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...columnRoutes];
}
