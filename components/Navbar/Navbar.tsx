import NavLink from '@/components/Navbar/NavLink';
import DesktopMenu from '@/components/Navbar/DesktopMenu';
import MobileMenu from '@/components/Navbar/MobileMenu';
import ThemeToggle from '@/components/Navbar/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border-b-[.5px] py-3 pr-4 pl-4 md:text-xl fixed w-full dark:bg-black bg-white z-1000 top-0 left-0">
      <NavLink hRef="/" linkText="TomMoosbrugger" />
      <div className="flex gap-2 sm:gap-6">
        {/* dropdown menu for mobile */}
        <MobileMenu />
        {/* menu for all other screens */}
        <DesktopMenu />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
