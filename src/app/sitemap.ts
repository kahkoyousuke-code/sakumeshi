import type { MetadataRoute } from "next";
import { COLUMNS } from "@/lib/columns";

const BASE_URL = "https://sakumeshi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/form`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/column`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const columnRoutes: MetadataRoute.Sitemap = COLUMNS.map((column) => ({
    url: `${BASE_URL}/column/${column.slug}`,
    lastModified: new Date(column.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...columnRoutes];
}
