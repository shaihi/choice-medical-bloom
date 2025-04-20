
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
    <nav className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">Choice Medical</div>
        <div className="hidden md:flex gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a 
            href="#technology" 
            onClick={(e) => handleNavClick(e, 'technology')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Technology
          </a>
          <a 
            href="#team" 
            onClick={(e) => handleNavClick(e, 'team')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Team
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>
        <Button variant="ghost" className="md:hidden">Menu</Button>
      </div>
    </nav>
  );
};

export default Navigation;
