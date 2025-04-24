
import { Card } from "./ui/card";

const teamMembers = [
  {
    name: "Dr. Ouri Rouche",
    role: "Co founder & Chief Medical Officer",
    image: "/lovable-uploads/56f27ab2-b5d2-450b-9702-7abbd7b7a9cf.png"
  },
  {
    name: "Shai Haim, MBA",
    role: "Co founder & CEO",
    image: "/lovable-uploads/b0e2ffda-8a09-4248-be5c-9112cf7eccda.png"
  },
  {
    name: "Dr. Laurence Moine",
    role: "Co founder & Chief Scientist Officer",
    image: "/lovable-uploads/Laurence Moine_b_small.jpg"
  },
  {
    name: "Prof. Lambros Tselikas",
    role: "Co founder & advisor",
    image: "/lovable-uploads/Lambros_tselikas_small.jpeg"
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
                className="w-32 h-32 rounded-full mx-auto mb-4 bg-[#FFDEE2]/20 object-cover grayscale"
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
