"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [mode, setMode] = useState("dark");

    useEffect(() => {
      if (typeof window !== undefined) {
        const storedMode = window.localStorage.getItem("mode");

        if (storedMode === "light") {
          setMode("light");
        } else {
          setMode("dark");
          window.localStorage.setItem("mode", "dark");
        }
      }
    }, []);

    const toggleMode = () => {
      const newMode = mode === "dark" ? "light" : "dark";

      window.localStorage.setItem("mode", newMode);

      setMode(newMode);

      document.documentElement.className = newMode === "dark" ? "dark" : "";
    };

  return (
    <nav className="flex flex-row justify-between bg-white dark:bg-black">
      <h1 className="text-keyword dark:text-component">
        <span className="text-bracket">&lt;</span>
        TomMoosbrugger
        <span className="text-bracket"> &#47;&gt;</span>
      </h1>
      <div onClick={toggleMode} className="cursor-pointer">
        {mode === "dark" ? (
          <SunIcon className="size-6 fill-amber-300 stroke-amber-300" />
        ) : (
          <MoonIcon className="size-6  fill-blue-200 stroke-blue-200" />
        )}
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;