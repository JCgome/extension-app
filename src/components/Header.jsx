import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import LightIcon from "../assets/images/icon-sun.svg";
import DarkIcon from "../assets/images/icon-moon.svg";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex justify-between items-center h-[66px] px-3 py-2 bg-Neutral-0 dark:bg-Neutral-800 rounded-[10px] mb-6">
      <img src={theme === "light" ? Logo : LogoDark} alt="Logo" />
      <button
        className="bg-Neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200
    dark:bg-gray-700
    dark:hover:bg-gray-600"
        onClick={toggleTheme}>
        <img src={theme === "light" ? DarkIcon : LightIcon} alt="theme icon" />
      </button>
    </div>
  );
};
