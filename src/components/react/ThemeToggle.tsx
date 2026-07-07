import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="
        relative w-9 h-9 flex items-center justify-center
        text-gray-500 dark:text-gray-400
        hover:text-gray-800 dark:hover:text-gray-200
        hover:bg-gray-100 dark:hover:bg-gray-800
        rounded-lg transition text-lg
      "
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"} transition-transform duration-300 ${dark ? "rotate-90" : "rotate-0"}`} />
    </button>
  );
}
