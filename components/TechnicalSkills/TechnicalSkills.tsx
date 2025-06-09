import ComponentElement from "@/components/Elements/ComponentElement";
import Image from "next/image";

const TechnicalSkills = () => {
  return (
    <article className="flex flex-col p-10 mx-10 my-10 border-1 rounded-lg max-w-7xl">
      <header>
        <ComponentElement
          className="text-blue dark:text-green text-4xl mb-4"
          componentName="TechnicalSkills"
        />
      </header>
      <section>
        <Image 
          src="/TechnicalSkills/javascript.svg"
          height={24}
          width={24}
          alt="javascript logo"
        />
      </section>
    </article>
  );
};

export default TechnicalSkills;
