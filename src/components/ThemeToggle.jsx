"use client"
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        };
    }, [darkMode]);

    return (
        <button className="flex justify-center items-center w-6 h-6" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaMoon size={15} className="dark:text-white dark:hover:text-gray-400"/> : <FiSun size={15} className="text-gray-500 hover:text-black"/> }
        </button>
    )
}

export default ThemeToggle;