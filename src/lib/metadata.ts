import type { Metadata } from "next";
import { AUTHOR } from "@/lib/author";
import { getColumn } from "@/lib/columns";

/**
 * Single source of truth for per-page metadata (canonical + OGP + Twitter card).
 *
 * Next.js does NOT merge `openGraph` between a layout and its pages: a page
 * that omits it inherits the root layout's object wholesale. Without these
 * helpers every article was shared with the home page's title, description
 * and URL, so anything posted to X or LINE looked like the top page.
 *
 * Whenever a new page is added, build its metadata here instead of writing the
 * object by hand, so canonical and OGP can never drift apart.
 */

export const SITE_NAME = "サクメシ";

/** Shared share image. 1200x630 is the size X and Facebook crop against. */
const OG_IMAGE = { url: "/og_sakumeshi.png", width: 1200, height: 630 } as const;

interface PageMetadataInput {
  /** Root-relative path, resolved against `metadataBase` ("/column" etc.) */
  path: string;
  title: string;
  description: string;
}

export function pageMetadata({
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Column articles. Same as `pageMetadata` but typed as an OGP article, with
 * the publish/update dates and byline taken from `COLUMNS` and `AUTHOR` so
 * they stay in sync with the on-page byline and JSON-LD.
 */
export function columnMetadata(
  slug: string,
  { title, description }: Omit<PageMetadataInput, "path">,
): Metadata {
  const column = getColumn(slug);

  return {
    title,
    description,
    alternates: { canonical: `/column/${slug}` },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url: `/column/${slug}`,
      title,
      description,
      publishedTime: column?.date,
      modifiedTime: column?.updated ?? column?.date,
      authors: [AUTHOR.name],
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
