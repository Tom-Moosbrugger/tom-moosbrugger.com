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
    <div className={className}>
      {open ? (
        <span className="text-bracket">&lt;</span>
      ) : (
        <span className="text-bracket">&lt;&#47;</span>
      )}
      {elementName}
      <span className="text-bracket">&gt;</span>
    </div>
  );
};

export default HTMLElement;
