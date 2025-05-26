"use client";

import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  // initialize theme to dark mode
  const [theme, setTheme] = useState("dark");
  // initialize a loading variable to true
  const [loading, setLoading] = useState(true);

  // check local storage for a stored theme
  useEffect(() => {
    // check if window is defined before attempting to access its properties
    if (typeof window !== undefined) {
      const storedTheme = window.localStorage.getItem("theme");

      if (storedTheme === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
      }

      setLoading(false);
    }
  }, []);

  // change theme
  const toggleTheme = () => {
    // determine if theme is light or dark
    const newTheme = theme === "dark" ? "light" : "dark";

    // set localStorage theme variable to new theme
    window.localStorage.setItem("theme", newTheme);

    // set slice of state to new theme
    setTheme(newTheme);

    // grab the html element and set a class name of "dark" or "" depending on the theme
    document.documentElement.className = newTheme === "dark" ? "dark" : "";
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer flex justify-center min-w-10"
    >
      <button
        className={`flex items-center justify-center border-1 border-bracket rounded-full py-0.5 min-w-8 min-h-7 cursor-pointer hover:bg-${
          theme === "dark" ? "white" : "black"
        }`}
      >
        {theme === "dark"
          ? !loading && (
              <SunIcon className="size-5 fill-amber-300 stroke-amber-300" />
            )
          : !loading && (
              <MoonIcon className="size-5  fill-blue-200 stroke-gray-500" />
            )}
      </button>
    </div>
  );
};

export default ThemeToggle;