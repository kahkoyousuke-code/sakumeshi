import type { ReactNode } from "react";

interface ColumnFigureProps {
  /** One-line takeaway shown under the diagram (the figure's message) */
  caption: string;
  /** Short description for screen readers; the SVG inside should not repeat it */
  alt: string;
  /** Optional note under the caption, e.g. the source of the numbers */
  note?: string;
  children: ReactNode;
}

/**
 * Wrapper for an inline SVG diagram inside a column article.
 * The SVG should use viewBox and width="100%" so it scales on phones.
 */
export default function ColumnFigure({
  caption,
  alt,
  note,
  children,
}: ColumnFigureProps) {
  return (
    <figure className="my-6 rounded-xl border border-green-100 bg-white p-3 sm:p-4">
      <div role="img" aria-label={alt} className="w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full">
        {children}
      </div>
      <figcaption className="mt-3 text-center text-sm font-bold text-green-700">
        {caption}
      </figcaption>
      {note && (
        <p className="mt-1 text-center text-xs text-gray-500">{note}</p>
      )}
    </figure>
  );
}
