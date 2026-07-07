import { useState, useEffect } from "react";
import { translations, type Language, type TranslationKeys } from "./translations";

let currentLang: Language = "es";

function getInitialLang(): Language {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "es" || stored === "en") return stored;
  }
  return "es";
}

currentLang = getInitialLang();

const listeners = new Set<(lang: Language) => void>();

export function getLang(): Language {
  return currentLang;
}

export function setLang(lang: Language) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dispatchEvent(new CustomEvent("languagechange", { detail: lang }));
  listeners.forEach((fn) => fn(lang));
}

export function subscribe(fn: (lang: Language) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(currentLang);

  useEffect(() => {
    const stored = getInitialLang();
    setLangState(stored);
    return subscribe(setLangState);
  }, []);

  const updateLang = (l: Language) => {
    setLang(l);
    setLangState(l);
  };

  const t: TranslationKeys = translations[lang];

  return { lang, t, setLang: updateLang };
}
