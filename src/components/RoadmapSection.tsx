
import { Card } from "./ui/card";

const RoadmapSection = () => {
  const milestones = [
    {
      phase: "Q4 2024",
      title: "Prototype Development",
      description: "Bench testing and initial validation completed",
      status: "completed"
    },
    {
      phase: "Q1-Q3 2025",
      title: "Pre-Clinical Studies",
      description: "Safety and efficacy validation in laboratory settings",
      status: "in-progress"
    },
    {
      phase: "Q4 2025",
      title: "Regulatory Submission",
      description: "FDA submission for investigational device approval",
      status: "upcoming"
    },
    {
      phase: "Q4 2026",
      title: "First-in-Human",
      description: "Initial clinical trials with human subjects",
      status: "planned"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          Development Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <Card key={index} className="p-6 bg-white border border-gray-200 rounded-sm shadow-lg">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                milestone.status === 'in-progress' ? 'bg-[#1CC5DC]/10 text-[#1CC5DC]' :
                milestone.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-600'
              }`}>
                {milestone.phase}
              </div>
              <h3 className="text-lg font-semibold text-[#0A1C33] mb-3">{milestone.title}</h3>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
