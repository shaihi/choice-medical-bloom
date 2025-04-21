
import React from 'react';

const SupportedBySection = () => {
  return (
    <section className="bg-white/80 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center space-x-4">
        <p className="text-sm text-gray-700 text-center">
          Ce projet a été financé par l'Etat dans le cadre de France 2030
        </p>
        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
          <img
            src="/france2030-logo.png"
            alt="France 2030 logo"
            className="w-8 h-8 object-contain"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  );
};

export default SupportedBySection;

