import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

type Translation = (typeof translations)[Lang];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLang = (value: string | null): value is Lang => value === "en" || value === "fr";

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";

  try {
    const storedLang = window.localStorage.getItem("site-language");
    return isLang(storedLang) ? storedLang : "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) => {
  const [lang, setLangState] = useState<Lang>(() => initialLang ?? getStoredLang());
  const t = translations[lang];
  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);

    try {
      window.localStorage.setItem("site-language", nextLang);
    } catch {
      // Language still changes for the current session if storage is unavailable.
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
