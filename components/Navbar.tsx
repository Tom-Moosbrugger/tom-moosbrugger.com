import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="text-xs sm:text-base flex flex-row justify-between items-center pl-2 pr-6 py-4">
      <NavLink hRef="/" linkText="TomMoosbrugger" />

      <div className="flex flex-row items-center gap-2 sm:gap-6">
        <NavLink hRef="/" linkText="Projects" />
        <NavLink hRef="/" linkText="Resume" />
        <NavLink hRef="/" linkText="Contact" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
