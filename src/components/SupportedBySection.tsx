
import React from 'react';

const SupportedBySection = () => {
  return (
    <section className="bg-white py-6 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-700 text-center">
            Ce projet a été financé par l'Etat dans le cadre de France 2030
          </p>
          <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
            <img
              src="/france2030-logo.png"
              alt="France 2030 government funding program logo"
              className="w-8 h-8 object-contain"
              width={32}
              height={32}
              loading="lazy"
            />
          </div>
        </div>
        <p className="text-xs text-gray-700 text-center mt-4 max-w-4xl">
          The products and solutions described on this website are currently under development and have not been cleared or approved by the U.S. Food and Drug Administration (FDA). They are not available for sale or distribution. The information provided is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </section>
  );
};

export default SupportedBySection;
