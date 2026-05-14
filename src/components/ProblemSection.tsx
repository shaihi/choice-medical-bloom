import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: "1.7M", label: "biopsy procedures per year", region: "United States" },
  { value: "1.3M", label: "biopsy procedures per year", region: "Europe" },
  { value: "~100%", label: "of markers today", region: "contain metal" },
];

const problems = [
  {
    icon: "🔩",
    title: "Permanent metal clips",
    description:
      "Conventional markers use metal clips that stay in the body indefinitely — long after clinical need has passed.",
  },
  {
    icon: "🧲",
    title: "MRI interference",
    description:
      "Metal clips create imaging artifacts that can obscure follow-up scans and complicate future diagnoses.",
  },
  {
    icon: "😰",
    title: "Patient anxiety",
    description:
      "Being permanently marked causes documented psychological distress, especially for patients who receive a benign result.",
  },
];

const ProblemSection = () => {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: problemsRef, inView: problemsInView } = useInView();

  return (
    <section id="problem" className="py-24 bg-[#0A1C33]" role="region" aria-label="Market Problem">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1CC5DC] text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Millions of patients. <br className="hidden md:block" />
            A decades-old solution.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Breast biopsy markers have not fundamentally changed in over 30 years. Every year, millions of patients are permanently marked with metal clips — whether they need to be or not.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-700 ${
            statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.region}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center backdrop-blur-sm"
            >
              <p className="text-5xl font-bold text-[#1CC5DC] mb-2">{stat.value}</p>
              <p className="text-white font-medium mb-1">{stat.label}</p>
              <p className="text-white/50 text-sm">{stat.region}</p>
            </div>
          ))}
        </div>

        {/* Problem cards */}
        <div
          ref={problemsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-150 ${
            problemsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#1CC5DC]/40 transition-colors"
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
