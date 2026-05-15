import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.problem, id: "contrast" },
    { label: t.nav.technology, id: "science" },
    { label: t.nav.market, id: "market" },
    { label: t.nav.team, id: "team" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setIsOpen(false);
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const handleRequestDeck = () => {
    window.location.href =
      "mailto:shai@choicemedical.health?subject=I'd%20like%20to%20hear%20more%20about%20Choice%20Medical";
  };

  return (
    <nav
      className={`w-full py-4 px-6 fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1C33]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={(e) => handleNavClick(e as unknown as React.MouseEvent, "home")}
          className="hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label={t.nav.ariaLabel}
        >
          <img
            src="/choice-medical-logo.svg"
            alt="Choice Medical"
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            {t.nav.contact}
          </a>
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="text-white/40 hover:text-white/80 transition-colors text-xs font-semibold tracking-widest px-1"
            aria-label={lang === "en" ? "Switch to French" : "Passer en anglais"}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={handleRequestDeck}
            className="bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-semibold px-5 py-2 rounded-lg text-sm transition-all hover:scale-105 focus:ring-2 focus:ring-[#1CC5DC] focus:ring-offset-2 focus:ring-offset-[#0A1C33]"
            aria-label="Request investor deck"
          >
            {t.nav.requestDeck}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-[#0A1C33] border border-white/10 rounded-xl py-4 px-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="block py-2.5 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block py-2.5 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            {t.nav.contact}
          </a>
          <div className="pt-3 flex items-center gap-3">
            <button
              onClick={() => { handleRequestDeck(); setIsOpen(false); }}
              className="flex-1 bg-[#1CC5DC] hover:bg-[#1CC5DC]/90 text-[#0A1C33] font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
            >
              {t.nav.requestDeck}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="text-white/40 hover:text-white/80 transition-colors text-xs font-semibold tracking-widest px-3 py-3 border border-white/10 rounded-lg"
              aria-label={lang === "en" ? "Switch to French" : "Passer en anglais"}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
