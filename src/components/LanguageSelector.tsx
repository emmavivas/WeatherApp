import React, { useState } from "react";
import {
  initialLanguage,
  useLanguage,
  type Language,
} from "../context/languaje/LanguageContext";

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const { loadTranslations } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as Language;
    setLanguage(selectedLanguage);
    loadTranslations(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;
