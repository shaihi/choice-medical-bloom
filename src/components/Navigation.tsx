import React, { useState } from 'react';
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="w-full py-4 px-6 bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-[#0A1C33]">Choice Medical</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors">Vision</a>
          <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors">Benefits</a>
          <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors">Team</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors">Contact</a>
          <a href="/privacy" className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors">Privacy</a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-[#0A1C33]"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg py-2 px-4 space-y-2 text-center">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block text-[#0A1C33]/70 hover:text-[#0A1C33]">Vision</a>
          <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="block text-[#0A1C33]/70 hover:text-[#0A1C33]">Benefits</a>
          <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="block text-[#0A1C33]/70 hover:text-[#0A1C33]">Team</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-[#0A1C33]/70 hover:text-[#0A1C33]">Contact</a>
          <a href="/privacy" className="block text-[#0A1C33]/70 hover:text-[#0A1C33]">Privacy</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;