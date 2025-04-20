
import { Card } from "./ui/card";

const teamMembers = [
  {
    name: "Dr. Ouri Rouche",
    role: "Co founder & Chief Medical Officer",
    image: "/placeholder.svg"
  },
  {
    name: "Shai Haim, MBA",
    role: "Co founder & CEO",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Laurence Moine",
    role: "Co founder & Chief Scientist Officer",
    image: "/placeholder.svg"
  },
  {
    name: "Prof. Lambros Tselikas",
    role: "Co founder & advisor",
    image: "/placeholder.svg"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-[#D3E4FD]/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-[#FFDEE2]/20"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
