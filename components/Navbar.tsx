import NavLink from "./NavLink";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center pl-2 pr-6 py-4">
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
