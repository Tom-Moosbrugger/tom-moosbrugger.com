interface ComponentElementProps {
  componentName: string;
  textSize?: string;
}

const ComponentElement = ({ componentName, textSize }: ComponentElementProps) => {
  return (
    <div className={`${textSize ? `text-${textSize}` : ""}`}>
      <span className="text-bracket">&lt;</span>
      {componentName}
      <span className="text-bracket">&#47;&gt;</span>
    </div>
  );
};

export default ComponentElement;
