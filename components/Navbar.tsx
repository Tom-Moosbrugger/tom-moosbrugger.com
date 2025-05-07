"use client";

import Link from "next/link";
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
    <nav className="flex flex-row justify-between bg-white dark:bg-black pl-2 pr-6 py-4">
      <TMLink hRef="/" linkText="TomMoosbrugger" />
      
      <div className="flex flex-row gap-8">
        <TMLink hRef="/projects" linkText="Projects" />
        <TMLink hRef="/TomMoosbrugger_Resume.pdf" linkText="Resume" />
        <TMLink hRef="/contact" linkText="Contact" />
        <div onClick={toggleMode} className="cursor-pointer flex justify-center">
        {!loading ? (
          theme === "dark" ? (
            <button className="border-1 border-bracket rounded-full py-0.5 px-3 cursor-pointer hover:bg-white">
                <SunIcon className="size-5 fill-amber-400 stroke-amber-400" />
            </button>
          ) : (
            <button className="border-1 border-bracket rounded-full py-0.5 px-3 cursor-pointer hover:bg-black">
                <MoonIcon className="size-5  fill-blue-200 stroke-gray-500" />
            </button>
            
          )
        ) : null}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
