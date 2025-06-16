import NavLink from '@/components/Navbar/NavLink';

const DesktopMenu = () => {
  return (
    <div className="hidden flex-row items-center gap-6 sm:flex">
      <NavLink hRef="/projects" linkText="Projects" />
      {/* <NavLink hRef="/TomMoosbrugger_Resume.pdf" linkText="Resume" /> */}
      <a
        href="/TomMoosbrugger_Resume.pdf"
        className="text-blue dark:text-green font-medium hover:text-black dark:hover:text-amber-200"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <span className="text-grey">&lt;</span>
        Resume
        <span className="text-grey"> &#47;&gt;</span>
      </a>
      <NavLink hRef="/contact" linkText="Contact" />
    </div>
  );
};

export default DesktopMenu;
