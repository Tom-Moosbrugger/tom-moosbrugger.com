import Image from "next/image";
import ComponentElement from "@/components/Elements/ComponentElement";
import HTMLElementWrapper from "@/components/Elements/HTMLElementWrapper";

const Welcome = () => {
  return (
    <article className="flex flex-col lg:flex-row gap-6 p-10 mx-10 my-10 border-1 rounded-lg max-w-7xl">
      <section className="flex flex-1 flex-col">
        <ComponentElement
          className="text-blue dark:text-green text-4xl mb-4"
          componentName="Welcome"
        />
        <div>
          <HTMLElementWrapper
            elementName="h1"
            className="mb-1"
            child={
              <h1 className="pl-5 text-4xl py-1">
                Hi, I&apos;m <span className="text-purple font-bold">Tom Moosbrugger</span>.
              </h1>
            }
          />
          <HTMLElementWrapper
            elementName="p"
            className="mb-1"
            child={
              <p className="pl-5 py-1">
                I&apos;m a full-stack engineer driven by the challenge of
                building high-quality web applications from the ground up. I
                specialize in delivering performant, maintainable solutions that
                are as intuitive for users as they are scalable for teams. From
                backend systems to frontend polish, I approach every project
                with <span className="text-red">precision</span> and <span className="text-red">purpose</span>.
              </p>
            }
          />
          <HTMLElementWrapper
            elementName="p"
            className="mb-1"
            child={
              <p className="pl-5 py-1">
                I&apos;m looking for a team where I can keep building great
                software — and keep growing. If that sounds like what
                you&apos;re building, let&apos;s chat.
              </p>
            }
          />
        </div>
      </section>
      <section className="flex flex-1 items-center justify-center lg:justify-end">
        <Image
          src="/Headshot.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-lg object-cover shadow-light dark:shadow-dark"
        />
      </section>
    </article>
  );
};

export default Welcome;
