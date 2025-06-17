import Link from 'next/link';

interface NavLinkProps {
  linkText: string;
  hRef: string;
  onClick?: () => void;
}

const NavLink = ({ linkText, hRef, onClick }: NavLinkProps) => {
  return (
    <Link
      href={hRef}
      className="text-blue dark:text-green font-medium hover:text-black dark:hover:text-amber-200"
      onClick={onClick}
    >
      <span className="text-grey">&lt;</span>
      {linkText}
      <span className="text-grey"> &#47;&gt;</span>
    </Link>
  );
};

export default NavLink;

// alternate version that dynamically renders brackets:

// <Link
//  href={hRef}
//  className="relative text-keyword hover:text-black dark:text-component dark:hover:text-amber-200 font-medium group" // Added 'group' for hover targeting
// >
//   <span className="text-bracket opacity-0 group-hover:opacity-100">
//     &lt;
//   </span>
//     {linkText}
//   <span className="text-bracket opacity-0 group-hover:opacity-100">
//     {" "}
//     &#47;&gt;
//   </span>
// </Link>
