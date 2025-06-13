import NavLink from '@/components/Navbar/NavLink';

const DesktopMenu = () => {
  return (
    <div className="hidden flex-row items-center gap-6 sm:flex">
      <NavLink hRef="/projects" linkText="Projects" />
      <NavLink hRef="/TomMoosbrugger_Resume.pdf" linkText="Resume" />
      <NavLink hRef="/contact" linkText="Contact" />
    </div>
  );
};

export default DesktopMenu;
