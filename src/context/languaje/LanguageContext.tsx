import { createContext, useState, useContext, type ReactNode } from "react";
import { LOCALE_STRINGS } from "./constants";

export type Language = "en" | "es";
export const initialLanguage = "es";

export interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  loadTranslations: (lang: Language) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [translations, setTranslations] = useState(
    LOCALE_STRINGS[initialLanguage]
  );

  const loadTranslations = (language: Language) =>
    setTranslations(LOCALE_STRINGS[language]);

  return (
    <LanguageContext.Provider value={{ translations, loadTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};
