import NavLink from '@/components/Navbar/NavLink';
import DesktopMenu from '@/components/Navbar/DesktopMenu';
import MobileMenu from '@/components/Navbar/MobileMenu';
import ThemeToggle from '@/components/Navbar/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-1000 flex w-full flex-row items-center justify-between border-b-[.5px] bg-white py-3 pr-4 pl-4 md:text-xl dark:bg-black">
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
