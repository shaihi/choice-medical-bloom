import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0A1C33] relative overflow-hidden pt-20"
      role="banner"
    >
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/hero-medical-guidance.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
          width={1600}
          height={900}
        />
      </div>

      {/* Faint teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1CC5DC]/5 blur-3xl pointer-events-none z-0" />

      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-[#1CC5DC] text-sm font-semibold uppercase tracking-[0.2em] mb-10">
          Choice Medical
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-10">
          3 million women a year
          <br />
          <span className="text-[#1CC5DC]">are permanently marked.</span>
          <br />
          Most don't need to be.
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-16">
          We're changing that.
        </p>

        <button
          onClick={() => document.getElementById("contrast")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 mx-auto text-white/40 hover:text-white/70 transition-colors group"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent group-hover:from-white/70 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
