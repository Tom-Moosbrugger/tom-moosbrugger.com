interface ComponentElementProps {
  componentName: string;
  className?: string;
}

const ComponentElement = ({ componentName, className }: ComponentElementProps) => {
  return (
    <div className={className}>
      <span className="text-bracket">&lt;</span>
      {componentName + " "}
      <span className="text-bracket">&#47;&gt;</span>
    </div>
  );
};

export default ComponentElement;
