interface HTMLElementProps {
  // name of the HTML element
  elementName: string;
  // is the element an opening tag
  open: boolean;
  // adjust size of the element text
  className?: string;
}

const HTMLElement = ({ elementName, open, className }: HTMLElementProps) => {
  return (
    <div className={`${className} text-blue`}>
      {open ? (
        <span className="text-grey">&lt;</span>
      ) : (
        <span className="text-grey">&lt;&#47;</span>
      )}
      {elementName}
      <span className="text-grey">&gt;</span>
    </div>
  );
};

export default HTMLElement;
