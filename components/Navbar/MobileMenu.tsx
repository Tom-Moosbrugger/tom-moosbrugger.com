'use client';

import { useState, useEffect, useRef } from 'react';
import NavLink from '@/components/Navbar/NavLink';
import { Bars3Icon } from '@heroicons/react/24/solid';

// dropdown menu component for mobile devices
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

  // callback function to close the dropdown menu
  const closeMenu = () => setShowMenu(false);

  // add event listener to listen for clicks outside the dropdown menu
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="relative sm:hidden" ref={menuRef}>
      <Bars3Icon
        className="size-7 cursor-pointer border-1"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="absolute top-8 right-0 z-1 flex min-w-42 flex-col items-center gap-2 border bg-white p-2 dark:bg-black">
          <div className="w-full border-b-1 pb-2 text-center">
            <NavLink hRef="/projects" linkText="Projects" onClick={closeMenu} />
          </div>
          <div className="w-full border-b-1 pb-2 text-center">
            <NavLink
              hRef="/TomMoosbrugger_Resume.pdf"
              linkText="Resume"
              onClick={closeMenu}
            />
          </div>
          <div>
            <NavLink hRef="/contact" linkText="Contact" onClick={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
