import { useState, useEffect } from "react";

export default function ThemeToggle() {

    const [dark, setDark] = useState(false);

    useEffect(() => {

        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

    }, [dark]);

    return (

        <button
            onClick={() => setDark(!dark)}
            className="text-gray-600 hover:text-gray-800 transition text-lg"
        >

            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>

        </button>

    );
}