"use client";

import { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // callback function to listen for clicks outside the dropdown menu
  const handleOutsideClick = (event: MouseEvent) => {
    // if the event target (i.e. area clicked) is not a child of the menuRef we created, close the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  };

  // add event listener to listen for clicks outside the dropdown menu
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="sm:hidden relative flex gap-2" ref={menuRef}>
      <Bars3Icon
        className="size-7 border-1 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      <ThemeToggle />
      {showMenu && (
        <div className="absolute top-8 right-12 flex flex-col items-center border-1 p-2 gap-2 min-w-42">
          <div className="w-full border-b-1 text-center pb-2">
            <NavLink hRef="/" linkText="Projects" />
          </div>
          <div className="w-full border-b-1 text-center pb-2">
            <NavLink hRef="/" linkText="Resume" />
          </div>
          <div>
            <NavLink hRef="/" linkText="Contact" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
