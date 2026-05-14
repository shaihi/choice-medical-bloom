import { useInView } from "@/hooks/use-in-view";

const signals = [
  { icon: "🏛️", label: "IP from Paris Saclay University" },
  { icon: "🇫🇷", label: "Backed by France 2030" },
  { icon: "📋", label: "Patent Pending" },
  { icon: "🔬", label: "Lab-validated prototype" },
];

const CredibilityStrip = () => {
  const { ref, inView } = useInView();

  return (
    <section
      className="py-12 bg-[#0A1C33]"
      role="region"
      aria-label="Institutional backing and credibility"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {signals.map((signal, idx) => (
            <div key={signal.label} className="flex items-center gap-3">
              {idx > 0 && (
                <span className="hidden md:block w-px h-6 bg-white/20" aria-hidden="true" />
              )}
              <span className="text-xl" aria-hidden="true">{signal.icon}</span>
              <span className="text-white/80 text-sm font-medium">{signal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
