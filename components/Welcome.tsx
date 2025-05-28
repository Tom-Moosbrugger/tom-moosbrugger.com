import Image from "next/image";
import ComponentElement from "@/components/Elements/ComponentElement";
import HTMLElement from "@/components/Elements/HTMLElement";

const Welcome = () => {
  return (
    <article className="flex flex-col md:flex-row gap-6 p-10 mx-10 my-10 border-1 rounded-lg">
      <section className="flex flex-col">
        <ComponentElement
          className="text-keyword dark:text-component text-4xl mb-4"
          componentName="Welcome"
        />
        <div>
          <HTMLElement elementName="h1" open={true} />
            <h1 className="pl-5 text-2xl py-1">
                Hi, my name is Tom Moosbrugger.
            </h1>
          <HTMLElement elementName="h1" open={false} className="mb-4"/>
          <HTMLElement elementName="p" open={true} />
          <p className="pl-5 py-1">
            I&#39;m a full-stack software developer. I thrive on building applications and websites that users love.
          </p>
          <HTMLElement elementName="p" open={false} className="mb-4"/>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <Image
          src="/Headshot.jpg"
          alt="Picture of the author"
          width={250}
          height={250}
          className="rounded-lg object-cover min-w-[250px] min-h-[px] shadow-light dark:shadow-dark"
        />
      </section>
    </article>
  );
};

export default Welcome;
