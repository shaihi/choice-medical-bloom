
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
