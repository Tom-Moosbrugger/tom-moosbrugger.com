"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

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
      <Link href='/' className="text-keyword dark:text-component">
        <span className="text-bracket">&lt;</span>
        TomMoosbrugger
        <span className="text-bracket"> &#47;&gt;</span>
      </Link>
      <div onClick={toggleMode} className="cursor-pointer flex justify-center">
        {!loading ? (
          theme === "dark" ? (
            <SunIcon className="size-6 fill-amber-300 stroke-amber-300" />
          ) : (
            <MoonIcon className="size-6  fill-blue-200 stroke-blue-200" />
          )
        ) : null}
      </div>
      <div className="flex flex-row gap-8">
        <Link href="/projects" className="text-keyword dark:text-component link-with-brackets">Projects</Link>
        <Link href="/TomMoosbrugger_Resume.pdf" className="text-keyword dark:text-component link-with-brackets">Resume</Link>
        <Link href="/contact" className="text-keyword dark:text-component link-with-brackets">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
