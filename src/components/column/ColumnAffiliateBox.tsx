import AffiliateItemCard from "@/components/AffiliateItemCard";
import { getColumnAffiliate } from "@/lib/columnAffiliates";
import { getRecommendedItem, type RecommendedItem } from "@/lib/recommendedItems";

export default function ColumnAffiliateBox({ slug }: { slug: string }) {
  const affiliate = getColumnAffiliate(slug);
  if (!affiliate) return null;

  const items = affiliate.items
    .map(getRecommendedItem)
    .filter((item): item is RecommendedItem => !!item)
    .slice(0, 2);
  if (items.length === 0) return null;

  return (
    <aside className="mt-12 rounded-xl border border-amber-200 bg-white p-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-300 text-gray-500">
          PR
        </span>
        <p className="text-sm font-bold text-gray-700">続けやすくするアイテム</p>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        {affiliate.lead}
        <span className="whitespace-nowrap">※広告リンクを含みます</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <AffiliateItemCard key={item.id} item={item} placement="column" />
        ))}
      </div>
    </aside>
  );
}
