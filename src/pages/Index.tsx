
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import BenefitsSection from "@/components/BenefitsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import SupportedBySection from "@/components/SupportedBySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navigation />
        <DisclaimerBanner />
      </header>
      <main>
        <HeroSection />
        <BenefitsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <footer>
        <SupportedBySection />
      </footer>
    </div>
  );
};

export default Index;
