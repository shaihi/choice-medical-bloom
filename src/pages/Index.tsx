import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import ContrastSection from "@/components/ContrastSection";
import ScienceSection from "@/components/ScienceSection";
import MarketSection from "@/components/MarketSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import SupportedBySection from "@/components/SupportedBySection";
import AccessibilityButton from "@/components/AccessibilityButton";

const Index = () => {
  return (
    <div className="min-h-screen">
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
        <ContrastSection />
        <ScienceSection />
        <MarketSection />
        <TeamSection />
        <CTASection />
      </main>

      <footer>
        <SupportedBySection />
      </footer>

      <AccessibilityButton />
    </div>
  );
};

export default Index;
