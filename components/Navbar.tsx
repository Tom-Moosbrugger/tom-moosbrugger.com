"use client";

import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import TMLink from "./TMLink";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const toggleMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    window.localStorage.setItem("theme", newTheme);

    setTheme(newTheme);

    document.documentElement.className = newTheme === "dark" ? "dark" : "";
  };

  return (
    <nav className="text-xs sm:text-base flex flex-row justify-between items-center pl-2 pr-6 py-4">
      <TMLink hRef="/" linkText="TomMoosbrugger" />

      <div className="flex flex-row items-center gap-2 sm:gap-6">
        <TMLink hRef="/" linkText="Projects" />
        <TMLink hRef="/" linkText="Resume" />
        <TMLink hRef="/" linkText="Contact" />
        <div
          onClick={toggleMode}
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
      </div>
    </nav>
  );
};

export default Navbar;
