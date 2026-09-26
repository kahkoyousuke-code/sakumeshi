import { amazonUrl, rakutenSearchUrl, type AffiliatePlacement } from "@/lib/affiliate";
import type { RecommendedItem } from "@/lib/recommendedItems";

interface AffiliateItemCardProps {
  item: RecommendedItem;
  placement: AffiliatePlacement;
}

export default function AffiliateItemCard({ item, placement }: AffiliateItemCardProps) {
  return (
    <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100">
      <span className="text-2xl leading-none mt-0.5">{item.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-amber-900">{item.name}</p>
        <p className="text-xs text-amber-700 mt-0.5">{item.detail}</p>
        <div className="flex gap-1.5 mt-2">
          <a
            href={rakutenSearchUrl(item.keyword)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs font-bold px-2 py-1 rounded text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            楽天で見る
          </a>
          <a
            href={amazonUrl(item, placement)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs font-bold px-2 py-1 rounded text-white bg-orange-400 hover:bg-orange-500 transition-colors"
          >
            Amazonで見る
          </a>
        </div>
      </div>
    </div>
  );
}
