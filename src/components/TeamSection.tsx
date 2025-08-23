
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
  },
  {
    name: "Remi Marces",
    role: "PhD Candidate",
    image: "/lovable-uploads/bc0d1e30-b1dd-4aa4-b547-1f9fd83e33e2.png"
  }
];

const advisors = [
  {
    name: "Alexander Preker, MD, PhD",
    role: "Advisor",
    image: "/lovable-uploads/bef6d498-ab09-4994-8842-e6e9de726b91.png",
    profileUrl: "https://www.publichealth.columbia.edu/profile/alexander-preker-md"
  },
  {
    name: "Dr. Julia Arfi Rouche",
    role: "Advisor",
    image: "/lovable-uploads/julia_arfi_small.jpeg",
    profileUrl: "https://www.linkedin.com/in/julia-arfi-rouche-31908219b/"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-white" role="region" aria-label="Our Team">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A1C33]">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className={`p-6 text-center bg-white border border-gray-200 rounded-sm shadow-lg ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at Choice Medical`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all"
                loading="lazy"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold text-[#0A1C33] mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </Card>
          ))}
        </div>
        
        {/* Advisors Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#0A1C33]">
            Our Advisors
          </h3>

          {/* Auto-centering, responsive grid: fits any number of advisors */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-stretch">
            {advisors.map((advisor) => (
              <Card
                key={advisor.name}
                className="w-full max-w-sm p-6 text-center bg-white border border-gray-200 rounded-sm shadow-lg"
              >
                <a
                  href={advisor.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={advisor.image}
                    alt={`${advisor.name}, ${advisor.role} at Choice Medical`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                    width={128}
                    height={128}
                  />
                  <h3 className="text-xl font-semibold text-[#0A1C33] mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-gray-600">{advisor.role}</p>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
