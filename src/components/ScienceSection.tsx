import React from "react";
import { useInView, useIsVisible } from "@/hooks/use-in-view";
import DissolveAnimation from "./DissolveAnimation";

const credentials = [
  "Patent Filed",
  "Paris Saclay University",
  "France 2030",
];

const ScienceSection = () => {
  const { ref: headRef, inView: headInView } = useInView();
  const { ref: credRef, inView: credInView } = useInView();
  const { ref: sectionRef, visible } = useIsVisible();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="science"
      className="min-h-screen flex flex-col justify-center bg-[#0A1C33] py-24 relative overflow-hidden"
      role="region"
      aria-label="Our Technology"
    >
      {/* Subtle teal glow bottom right */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1CC5DC]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Animation — centred above the text, plays on loop */}
        <div className="flex justify-start mb-6">
          <DissolveAnimation playing={visible} />
        </div>

        <div
          ref={headRef}
          className={`transition-all duration-1000 ${
            headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#1CC5DC] text-xs uppercase tracking-[0.2em] mb-10">The technology</p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 max-w-4xl">
            The first breast biopsy marker designed to{" "}
            <span className="text-[#1CC5DC]">fully biodegrade</span>
            {" "}— leaving nothing behind after clinical need ends.
          </h2>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-20">
            Developed from breakthrough biomaterial research, our marker gives clinicians full imaging visibility during the diagnostic window — then disappears completely. No permanent implant. No long-term consequences.
          </p>
        </div>

        {/* Credentials strip */}
        <div
          ref={credRef}
          className={`flex flex-wrap gap-6 transition-all duration-700 delay-300 ${
            credInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {credentials.map((cred, idx) => (
            <div key={cred} className="flex items-center gap-6">
              {idx > 0 && <span className="w-px h-5 bg-white/20" aria-hidden="true" />}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1CC5DC]" aria-hidden="true" />
                <span className="text-white/70 text-sm font-medium">{cred}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
