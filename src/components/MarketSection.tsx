import { useInView } from "@/hooks/use-in-view";
import { useLanguage } from "@/contexts/LanguageContext";

const MarketSection = () => {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  return (
    <section
      id="market"
      className="min-h-screen flex flex-col justify-center bg-white py-24"
      role="region"
      aria-label="Market Scale"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <p className="text-gray-300 text-xs uppercase tracking-[0.2em] mb-16">{t.market.eyebrow}</p>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Giant numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16">
            <div className="py-12 md:pr-16 md:border-r border-gray-100">
              <p
                className="text-[clamp(5rem,15vw,9rem)] font-bold text-[#0A1C33] leading-none mb-4"
                aria-label="1.7 million"
              >
                1.7<span className="text-[#1CC5DC]">M</span>
              </p>
              <p className="text-lg text-gray-400 font-medium">{t.market.proceduresLabel}</p>
              <p className="text-sm text-gray-300 mt-1">{t.market.us}</p>
            </div>

            <div className="py-12 md:pl-16 border-t md:border-t-0 border-gray-100">
              <p
                className="text-[clamp(5rem,15vw,9rem)] font-bold text-[#0A1C33] leading-none mb-4"
                aria-label="1.3 million"
              >
                1.3<span className="text-[#1CC5DC]">M</span>
              </p>
              <p className="text-lg text-gray-400 font-medium">{t.market.proceduresLabel}</p>
              <p className="text-sm text-gray-300 mt-1">{t.market.eu}</p>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-bold text-[#0A1C33] leading-snug">
              {t.market.statement}
            </p>
            <p className="text-gray-400 mt-4 text-lg">
              {t.market.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
