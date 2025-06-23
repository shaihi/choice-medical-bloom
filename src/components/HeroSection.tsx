
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/hero-medical-guidance.webp" 
          alt="Professional medical setting showing Choice Medical's innovative approach to breast biopsy marking" 
          className="w-full h-full object-cover" 
          loading="eager" 
          width={1600} 
          height={900} 
        />
        <div className="absolute inset-0 bg-[#0A1C33]/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          No trace in the breast
        </h1>
        <p className="text-3xl md:text-4xl font-semibold text-white mb-6">
          The only marker that does not "mark patients for life"
        </p>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-white md:text-2xl">Early-stage prototype, progressing toward trials</p>
        <button
          id="cta-primary"
          onClick={() => {
            window.location.href = "mailto:shai@choicemedical.health?subject=I'd%20like%20to%20hear%20more%20about%20Choice%20Medical";
          }}
          className="bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-semibold px-8 py-4 rounded-lg text-lg transition-colors focus:ring-2 focus:ring-[#1CC5DC] focus:ring-offset-2"
          aria-label="Request investor deck via email"
        >
          Request Investor Deck
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
