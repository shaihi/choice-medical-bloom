import { useInView } from "@/hooks/use-in-view";

const milestones = [
  {
    status: "done",
    label: "IP Filed",
    detail: "Foundational technology developed at Paris Saclay University",
  },
  {
    status: "done",
    label: "France 2030 Grant",
    detail: "State-backed funding secured — national recognition of innovation",
  },
  {
    status: "done",
    label: "Prototype Complete",
    detail: "Working early-stage prototype validated in lab conditions",
  },
  {
    status: "active",
    label: "Seed Round",
    detail: "Raising now to fund pre-clinical and regulatory milestones",
  },
  {
    status: "upcoming",
    label: "Clinical Trials",
    detail: "First-in-human study planned following seed funding",
  },
  {
    status: "upcoming",
    label: "Market Entry",
    detail: "Regulatory clearance and commercial launch",
  },
];

const statusStyles: Record<string, string> = {
  done: "bg-[#1CC5DC] border-[#1CC5DC] text-white",
  active: "bg-[#0A1C33] border-[#1CC5DC] text-[#1CC5DC] ring-4 ring-[#1CC5DC]/20",
  upcoming: "bg-white border-gray-300 text-gray-400",
};

const connectorStyles: Record<string, string> = {
  done: "bg-[#1CC5DC]",
  active: "bg-gradient-to-r from-[#1CC5DC] to-gray-200",
  upcoming: "bg-gray-200",
};

const MilestonesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="milestones" className="py-24 bg-gray-50" role="region" aria-label="Development Milestones">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#1CC5DC] text-sm font-semibold uppercase tracking-widest mb-3">Progress</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1C33] mb-4">Our roadmap</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From university IP to clinical trials — a clear, de-risked path forward.
          </p>
        </div>

        {/* Desktop timeline */}
        <div
          ref={ref}
          className={`hidden md:flex items-start gap-0 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {milestones.map((milestone, idx) => (
            <div key={milestone.label} className="flex items-start flex-1 min-w-0">
              <div className="flex flex-col items-center flex-1 min-w-0">
                {/* Dot */}
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 font-bold text-sm transition-all ${statusStyles[milestone.status]}`}
                >
                  {milestone.status === "done" ? "✓" : idx + 1}
                </div>
                {/* Label */}
                <div className="mt-4 text-center px-2">
                  <p
                    className={`font-semibold text-sm mb-1 ${
                      milestone.status === "upcoming" ? "text-gray-400" : "text-[#0A1C33]"
                    }`}
                  >
                    {milestone.label}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{milestone.detail}</p>
                </div>
              </div>
              {/* Connector */}
              {idx < milestones.length - 1 && (
                <div className={`h-0.5 w-full mt-5 flex-shrink-0 ${connectorStyles[milestone.status]}`} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden space-y-0">
          {milestones.map((milestone, idx) => (
            <div key={milestone.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm ${statusStyles[milestone.status]}`}
                >
                  {milestone.status === "done" ? "✓" : idx + 1}
                </div>
                {idx < milestones.length - 1 && (
                  <div className={`w-0.5 flex-1 min-h-[2rem] mt-1 ${connectorStyles[milestone.status]}`} />
                )}
              </div>
              <div className="pb-8 pt-2">
                <p
                  className={`font-semibold text-sm mb-1 ${
                    milestone.status === "upcoming" ? "text-gray-400" : "text-[#0A1C33]"
                  }`}
                >
                  {milestone.label}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">{milestone.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
