import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import BenefitsSection from "@/components/BenefitsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import SupportedBySection from "@/components/SupportedBySection";
import AccessibilityButton from "@/components/AccessibilityButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link - visible only on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1CC5DC] focus:text-[#0A1C33] focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:no-underline"
      >
        Skip to main content
      </a>
      
      <header>
        <Navigation />
        <DisclaimerBanner />
      </header>
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <footer>
        <SupportedBySection />
      </footer>
      
      <AccessibilityButton />
    </div>
  );
};

export default Index;
