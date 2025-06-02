import HTMLElement from "@/components/Elements/HTMLElement";

interface HTMLWrapperProps {
  child: React.ReactNode;
  elementName: string;
  // adjust size of the element text
  className?: string;
}

const HTMLWrapper = ({ child, elementName, className }: HTMLWrapperProps) => {
    return (
        <div>
            <HTMLElement elementName={elementName} open={true} />
              {child}  
            <HTMLElement elementName={elementName} open={false} className={className} />
        </div>
    )
};

export default HTMLWrapper;
