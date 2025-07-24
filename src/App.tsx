import LanguageSelector from "./components/LanguageSelector";
import { useLanguage } from "./context/languaje/LanguageContext";

function App() {
  const { translations } = useLanguage();

  return (
    <div>
      <LanguageSelector />
      <h1>{translations.heading}</h1>
      <h2>{translations.body_text}</h2>
      {/* RUTAS */}
    </div>
  );
}

export default App;
