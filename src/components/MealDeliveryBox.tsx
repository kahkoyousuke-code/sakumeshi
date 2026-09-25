import { activeMealDeliveryServices } from "@/lib/mealDelivery";

// 宅食（ASP アフィリエイト）の広告枠。結果ページとコラム記事末尾で共通。
// 提携済みの案件が無ければ何も描画しない。ステマ規制のため「PR」表記は外さないこと。
export default function MealDeliveryBox({ className = "" }: { className?: string }) {
  const services = activeMealDeliveryServices();
  if (services.length === 0) return null;

  return (
    <section className={className}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-300 text-gray-500">
          PR
        </span>
        <h3 className="text-lg font-semibold text-gray-700">🍱 作れない日は宅食に頼る</h3>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        忙しい日は、届いた冷凍弁当を温めるだけでも大丈夫です。
        <span className="whitespace-nowrap">※広告リンクを含みます</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="relative flex items-start gap-3 bg-amber-50 rounded-xl p-3 border border-amber-100 hover:border-amber-300 transition-colors"
          >
            <span className="text-2xl leading-none mt-0.5">{service.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-amber-900">{service.name}</p>
              <p className="text-xs text-amber-700 mt-0.5">{service.detail}</p>
              <p className="text-xs font-bold text-amber-800 mt-2">公式サイトを見る →</p>
            </div>
            {service.pixel && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={service.pixel} width={1} height={1} alt="" className="absolute w-px h-px opacity-0" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
