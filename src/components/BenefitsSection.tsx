import { useInView } from "@/hooks/use-in-view";

const benefits = [
  {
    image: "/uploads/no_metal.png",
    alt: "No entrance to metal image depicting no metal inside",
    title: "No Metal",
    description: "Same marking capabilities without any metals inside",
    conventional: "Metal clip — permanent implant",
    choiceMedical: "Fully metal-free composition",
  },
  {
    image: "/uploads/patient_safety.png",
    alt: "Image of a woman with breast cancer ribbon depicting safety",
    title: "Patient Comfort",
    description: "Innovative solutions designed to reduce patient anxiety",
    conventional: "Permanent mark regardless of diagnosis",
    choiceMedical: "No trace after clinical need ends",
  },
  {
    image: "/uploads/degrade_right.png",
    alt: "Hand holding material depicting degradation",
    title: "Controlled Degradation",
    description: "Built to degrade for the amount of time necessary for clinical needs",
    conventional: "Stays in body indefinitely",
    choiceMedical: "Degrades on a clinically tuned timeline",
  },
];

const BenefitsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="benefits" className="py-24 bg-white" role="region" aria-label="Product Benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1CC5DC] text-sm font-semibold uppercase tracking-widest mb-3">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1C33] mb-4">
            Built for patients. <br className="hidden md:block" />
            Designed for progress.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Choice Medical's marker delivers every clinical capability of metal — with none of the permanence.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="bg-gray-50 p-8 flex items-center justify-center">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-20 h-20 object-cover rounded-full"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1C33] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{benefit.description}</p>

                {/* Comparison */}
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center font-bold">✕</span>
                    <p className="text-sm text-gray-400">{benefit.conventional}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-[#1CC5DC]/15 text-[#1CC5DC] text-xs flex items-center justify-center font-bold">✓</span>
                    <p className="text-sm text-[#0A1C33] font-medium">{benefit.choiceMedical}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
