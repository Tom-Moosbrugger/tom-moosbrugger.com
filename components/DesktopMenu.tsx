import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex flex-row items-center gap-2 sm:gap-6">
      <NavLink hRef="/" linkText="Projects" />
      <NavLink hRef="/" linkText="Resume" />
      <NavLink hRef="/" linkText="Contact" />
      <ThemeToggle />
    </div>
  );
};

export default DesktopMenu;
