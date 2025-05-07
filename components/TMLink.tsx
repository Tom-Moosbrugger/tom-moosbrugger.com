import Link from "next/link";

interface TMLinkProps {
  linkText: string;
  hRef: string;
}

const TMLink = ({ linkText, hRef }: TMLinkProps) => {
  return (
    <Link
      href={hRef}
      className="text-keyword hover:text-black  dark:text-component dark:hover:text-amber-200 font-medium"
    >
      <span className="text-bracket">&lt;</span>
      {linkText}
      <span className="text-bracket"> &#47;&gt;</span>
    </Link>
  );
};

export default TMLink;
