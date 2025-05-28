import NavLink from "@/components/Navbar/NavLink";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex flex-row items-center gap-6">
      <NavLink hRef="/projects" linkText="Projects" />
      <NavLink hRef="/TomMoosbrugger_Resume.pdf" linkText="Resume" />
      <NavLink hRef="/contact" linkText="Contact" />
    </div>
  );
};

export default DesktopMenu;
