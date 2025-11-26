import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n"

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "fr";
  });

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    language === 'fr'? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

