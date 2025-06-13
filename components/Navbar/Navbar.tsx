import NavLink from '@/components/Navbar/NavLink';
import DesktopMenu from '@/components/Navbar/DesktopMenu';
import MobileMenu from '@/components/Navbar/MobileMenu';
import ThemeToggle from '@/components/Navbar/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between border-b-[.5px] py-4 pr-4 pl-4 md:text-xl">
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
