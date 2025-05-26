import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex flex-row items-center gap-2 sm:gap-6">
      <NavLink hRef="/projects" linkText="Projects" />
      <NavLink hRef="/TomMoosbrugger_Resume.pdf" linkText="Resume" />
      <NavLink hRef="/contact" linkText="Contact" />
      <ThemeToggle />
    </div>
  );
};

export default DesktopMenu;
