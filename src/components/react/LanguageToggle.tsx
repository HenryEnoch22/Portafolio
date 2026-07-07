import { useLanguage } from "../../i18n/store";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
