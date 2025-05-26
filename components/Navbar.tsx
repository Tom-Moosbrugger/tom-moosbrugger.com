"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null)

  const handleOutsideClick = (event: MouseEvent) => {
    // if the event target is not a child of the menuRef we created, close the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick)
  }, []);

  return (
    <nav className="flex flex-row justify-between items-center pl-2 pr-6 py-4">
      <NavLink hRef="/" linkText="TomMoosbrugger" />
      {/* dropdown menu for mobile */}
      <div className="sm:hidden relative flex gap-2" ref={menuRef}>
        <Bars3Icon
          className="size-7 border-1 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ThemeToggle />
        {showMenu && (
          <div className="absolute top-8 right-12 flex flex-col items-center border-1 p-2 gap-2 min-w-42">
            <div className="w-full border-b-1 text-center pb-2">
              {/* <Link href="/">Projects</Link> */}
              <NavLink hRef="/" linkText="Projects" />
            </div>
            <div className="w-full border-b-1 text-center pb-2">
              {/* <Link href="/">Resume</Link> */}
              <NavLink hRef="/" linkText="Resume" />
            </div>
            <div>
              {/* <Link href="/">Contact</Link> */}
              <NavLink hRef="/" linkText="Contact" />
            </div>
          </div>
        )}
      </div>
      {/* menu for all other screens */}
      <div className="hidden sm:flex flex-row items-center gap-2 sm:gap-6">
        <NavLink hRef="/" linkText="Projects" />
        <NavLink hRef="/" linkText="Resume" />
        <NavLink hRef="/" linkText="Contact" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

/* 

we need a dropdown menu to show on smaller screens:

goal is to have an icon that, when clicked, displays the NavLinks and ThemeToggle in a dropdown
when a link is clicked, it should navigate to the link and also close the menu
when the themetoggle is clicked, it should toggle the theme and close the menu
also, the menu should close if anywhere else on the page is clicked

first, we need a div that holds all the links and the toggle
second, we need a slice of state to determine if menu is shown
third, we need a useEffect to create an event listener that listens for clicks elsewhere on the screen


*/
