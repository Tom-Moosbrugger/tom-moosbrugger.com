import NavLink from "./NavLink";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center pl-2 pr-6 py-4">
      <NavLink hRef="/" linkText="TomMoosbrugger" />
      {/* dropdown menu for mobile */}
      <MobileMenu />
      {/* menu for all other screens */}
      <DesktopMenu />
    </nav>
  );
};

export default Navbar;