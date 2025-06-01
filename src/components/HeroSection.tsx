
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/hero-medical-guidance.webp"
          alt="Advanced ultrasound-guided biopsy procedure showing precise needle placement"
          className="w-full h-full object-cover"
          loading="eager"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-[#0A1C33]/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Guiding Biopsies, Protecting Patients
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
          Prototype bench-tested — first-in-human Q4 2026
        </p>
        <button 
          id="cta-primary" 
          className="bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Request Investor Deck
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
