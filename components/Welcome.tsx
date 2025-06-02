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
          <HTMLElement elementName="h1" open={false} className="mb-4" />
          <HTMLElement elementName="p" open={true} />
          <p className="pl-5 py-1">
            I&apos;m a full-stack engineer driven by the challenge of building
            high-quality web applications from the ground up. I specialize in
            delivering performant, maintainable solutions that are as intuitive
            for users as they are scalable for teams. From backend systems to
            frontend polish, I approach every project with precision and
            purpose.
          </p>
          <HTMLElement elementName="p" open={false} className="mb-4" />
          <HTMLElement elementName="p" open={true} />
          <p className="pl-5 py-1">
            Before transitioning into software, I spent a decade leading
            impactful work in the nonprofit sector. That experience honed my
            skills as a careful and detail-oriented planner, effective project
            manager, and collaborative team player — all of which contribute to
            my success as a software developer.
          </p>
          <HTMLElement elementName="p" open={false} className="mb-4" />
          <HTMLElement elementName="p" open={true} />
          <p className="pl-5 py-1">
            I&apos;m looking for a team where I can keep building great software
            — and keep growing. If that sounds like what you&apos;re building,
            let&apos;s chat.
          </p>
          <HTMLElement elementName="p" open={false} className="mb-4" />
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
