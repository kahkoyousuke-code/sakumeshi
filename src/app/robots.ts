import type { MetadataRoute } from "next";

const BASE_URL = "https://sakumeshi.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /result is a per-user generated page (noindex) and /api/* is not content.
      disallow: ["/api/", "/result"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
