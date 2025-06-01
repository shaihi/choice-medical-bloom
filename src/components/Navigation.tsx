
import React from 'react';
import { Button } from "./ui/button";

const Navigation = () => {
  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="w-full py-4 px-6 bg-white/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-[#0A1C33]">Choice Medical</div>
        <div className="hidden md:flex gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors"
          >
            Vision
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => handleNavClick(e, 'benefits')} 
            className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors"
          >
            Benefits
          </a>
          <a 
            href="#team" 
            onClick={(e) => handleNavClick(e, 'team')} 
            className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors"
          >
            Team
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="text-[#0A1C33]/70 hover:text-[#0A1C33] transition-colors"
          >
            Contact
          </a>
        </div>
        <Button variant="ghost" className="md:hidden text-[#0A1C33]">Menu</Button>
      </div>
    </nav>
  );
};

export default Navigation;
