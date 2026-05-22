
import React from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SupportedBySection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-6 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-3 flex-nowrap">
          <p className="text-xs sm:text-sm text-gray-700 text-center leading-snug">
            {t.supported.france2030}
          </p>
          <div className="w-8 h-8 flex-shrink-0 bg-gray-200 flex items-center justify-center rounded">
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
          {t.supported.legal}
        </p>
        <Link
          to="/privacy"
          className="text-xs text-gray-600 underline underline-offset-4 hover:text-[#0A1C33] transition-colors"
        >
          {t.supported.privacy}
        </Link>
      </div>
    </section>
  );
};

export default SupportedBySection;
