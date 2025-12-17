import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button className="bg-rose-600 px-3 py-1 rounded-md text-sm text-white hover:bg-gray-500"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
    >
      {language === "en" ? "EN" : "FR"}
    </button>
  );

}