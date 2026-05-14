import { useInView } from "@/hooks/use-in-view";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const teamMembers = [
  {
    name: "Dr. Ouri Rouche",
    role: "Co-founder & CEO",
    image: "/uploads/56f27ab2-b5d2-450b-9702-7abbd7b7a9cf.png",
    linkedin: "https://www.linkedin.com/in/ouri-rouche-146671a4/",
  },
  {
    name: "Shai Haim, MBA",
    role: "Co-founder & COO",
    image: "/uploads/b0e2ffda-8a09-4248-be5c-9112cf7eccda.png",
    linkedin: "https://linkedin.com/in/shaihi",
  },
  {
    name: "Dr. Laurence Moine",
    role: "Co-founder & Chief Science Officer",
    image: "/uploads/Laurence Moine_b_small.jpg",
    linkedin: "https://www.linkedin.com/in/laurence-moine-0938161a8/",
  },
  {
    name: "Prof. Lambros Tselikas",
    role: "Co-founder & Advisor",
    image: "/uploads/Lambros_tselikas_small.jpeg",
    linkedin: "https://www.linkedin.com/in/tselikaslambros/",
  },
  {
    name: "Remi Marces",
    role: "PhD Candidate",
    image: "/uploads/bc0d1e30-b1dd-4aa4-b547-1f9fd83e33e2.png",
    linkedin: "https://www.linkedin.com/in/rémi-m-517305226/",
  },
];

const advisors = [
  {
    name: "Alexander Preker",
    credentials: "MD, PhD",
    role: "Advisor",
    image: "/uploads/bef6d498-ab09-4994-8842-e6e9de726b91.png",
    linkedin: "https://www.publichealth.columbia.edu/profile/alexander-preker-md",
    bio: "Global health economist. Faculty at Columbia University.",
  },
  {
    name: "Dr. Julia Arfi Rouche",
    credentials: "",
    role: "Advisor",
    image: "/uploads/julia_arfi_small.jpeg",
    linkedin: "https://www.linkedin.com/in/julia-arfi-rouche-31908219b/",
    bio: "Radiologist specializing in breast imaging and interventional procedures.",
  },
];

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const MemberCard = ({ name, role, image, linkedin }: MemberCardProps) => (
  <div className="group">
    <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-white/5">
      <img
        src={image}
        alt={`${name}, ${role}`}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-white font-semibold text-sm leading-tight mb-0.5">{name}</p>
        <p className="text-white/40 text-xs leading-snug">{role}</p>
      </div>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-[#1CC5DC] transition-colors flex-shrink-0 mt-0.5"
          aria-label={`${name} on LinkedIn`}
        >
          <LinkedInIcon />
        </a>
      )}
    </div>
  </div>
);

const TeamSection = () => {
  const { ref: teamRef, inView: teamInView } = useInView();
  const { ref: advisorRef, inView: advisorInView } = useInView();

  return (
    <section
      id="team"
      className="bg-[#0A1C33] py-24"
      role="region"
      aria-label="Our Team"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#1CC5DC] text-xs uppercase tracking-[0.2em] mb-4">The people</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Science, medicine,
            <br />
            and execution — combined.
          </h2>
        </div>

        {/* Team grid */}
        <div
          ref={teamRef}
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-20 transition-all duration-700 ${
            teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {teamMembers.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16" />

        {/* Advisors — larger cards in a 2-col grid */}
        <div
          ref={advisorRef}
          className={`transition-all duration-700 delay-150 ${
            advisorInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-10">Advisors</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#1CC5DC]/30 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
                    <img
                      src={advisor.image}
                      alt={`${advisor.name}${advisor.credentials ? `, ${advisor.credentials}` : ""}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight mb-0.5">
                      {advisor.name}
                      {advisor.credentials && (
                        <span className="text-white/40 font-normal"> {advisor.credentials}</span>
                      )}
                    </p>
                    <p className="text-[#1CC5DC] text-xs mb-3">{advisor.role}</p>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/30 hover:text-[#1CC5DC] transition-colors text-xs"
                        aria-label={`${advisor.name} on LinkedIn`}
                      >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/40 text-xs leading-relaxed border-t border-white/10 pt-4">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
