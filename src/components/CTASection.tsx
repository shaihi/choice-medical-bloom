import { useInView } from "@/hooks/use-in-view";

const CTASection = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0A1C33] py-24 relative overflow-hidden"
      role="region"
      aria-label="Contact and investment inquiry"
    >
      {/* Teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1CC5DC]/8 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[#1CC5DC] text-xs uppercase tracking-[0.2em] mb-10">Seed Round</p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8">
          We're building the future
          <br />
          of breast care.
          <br />
          <span className="text-white/40">Join us.</span>
        </h2>

        <p className="text-white/50 text-lg md:text-xl max-w-lg mx-auto mb-14 leading-relaxed">
          If you see the opportunity we see, we'd love to connect. Request our investor deck or reach out directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              window.location.href =
                "mailto:shai@choicemedical.health?subject=I'd%20like%20to%20hear%20more%20about%20Choice%20Medical";
            }}
            className="bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-bold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 focus:ring-2 focus:ring-[#1CC5DC] focus:ring-offset-2 focus:ring-offset-[#0A1C33] shadow-2xl shadow-[#1CC5DC]/20"
            aria-label="Request investor deck via email"
          >
            Request Investor Deck
          </button>
          <a
            href="mailto:contactus@choicemedical.health"
            className="text-white/50 hover:text-white transition-colors text-sm font-medium px-4 py-5"
            aria-label="Send a general inquiry to Choice Medical"
          >
            contactus@choicemedical.health
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
