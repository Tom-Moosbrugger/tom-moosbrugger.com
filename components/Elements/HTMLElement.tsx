interface HTMLElementProps {
  // name of the HTML element
  elementName: string;
  // is the element an opening tag
  open: boolean;
  // adjust size of the element text
  textSize?: string;
}

const HTMLElement = ({ elementName, open, textSize }: HTMLElementProps) => {
  return (
    <div className={`${textSize ? `text-${textSize}` : ""}`}>
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
