import { useInView } from "@/hooks/use-in-view";

const rows = [
  { before: "Permanent implant", after: "Fully biodegrades" },
  { before: "Marked for life", after: "No trace remains" },
  { before: "MRI interference", after: "Clean imaging, always" },
  { before: "Patient anxiety", after: "Patient peace of mind" },
];

const ContrastSection = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="contrast"
      className="min-h-screen flex flex-col justify-center bg-white py-24"
      role="region"
      aria-label="Conventional vs Choice Medical"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-gray-300 text-xs uppercase tracking-[0.2em] mb-4">
            The problem with today's markers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1C33] leading-tight max-w-xl">
            The standard hasn't changed in 30 years.
          </h2>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-4 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            Conventional marker
          </p>
          <div className="w-16 md:w-24" />
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1CC5DC]">
            Choice Medical
          </p>
        </div>

        {/* Divider row line */}
        <div className="grid grid-cols-[1fr_auto_1fr] mb-2">
          <div className="h-px bg-gray-100" />
          <div className="w-16 md:w-24" />
          <div className="h-px bg-[#1CC5DC]/30" />
        </div>

        {/* Rows */}
        <div ref={ref} className="divide-y divide-gray-50">
          {rows.map((row, idx) => (
            <div
              key={row.before}
              className={`grid grid-cols-[1fr_auto_1fr] items-center py-6 md:py-8 gap-4 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Before */}
              <div className="relative">
                <span className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 line-through decoration-gray-300 decoration-2">
                  {row.before}
                </span>
              </div>

              {/* Arrow divider */}
              <div className="flex flex-col items-center gap-1 w-16 md:w-24 flex-shrink-0">
                <div className="w-px flex-1 bg-gray-100 min-h-[1rem]" />
                <div className="flex items-center gap-1 text-[#1CC5DC]">
                  <div className="w-6 md:w-10 h-px bg-[#1CC5DC]" />
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="#1CC5DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-px flex-1 bg-gray-100 min-h-[1rem]" />
              </div>

              {/* After */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 md:h-10 rounded-full bg-[#1CC5DC] flex-shrink-0" aria-hidden="true" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A1C33]">
                  {row.after}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
