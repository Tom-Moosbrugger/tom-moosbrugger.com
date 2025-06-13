import Image from 'next/image';
import ComponentElement from '@/components/Elements/ComponentElement';
import HTMLElementWrapper from '@/components/Elements/HTMLElementWrapper';

const Welcome = () => {
  const pBaseClass = 'sm:pl-5 text-lg sm:text-xl py-1';

  return (
    <article className="m-10 flex max-w-7xl flex-col gap-6 rounded-lg border-1 p-10 lg:flex-row">
      <section className="flex flex-1 flex-col">
        <ComponentElement
          className="text-blue dark:text-green mb-6 text-xl sm:text-4xl"
          componentName="Welcome"
        />
        <div>
          <h1 className="mb-4 py-1 text-xl sm:pl-5 sm:text-4xl">
            Hi, I&apos;m{' '}
            <span className="text-shadow-light dark:text-shadow-dark font-bold text-black dark:text-white">
              Tom Moosbrugger
            </span>
            .
          </h1>
          <p className={`${pBaseClass} mb-4`}>
            I&apos;m a full-stack engineer driven by the challenge of building
            high-quality web applications from the ground up. I specialize in
            delivering performant, maintainable solutions that are as intuitive
            for users as they are scalable for teams. From backend systems to
            frontend polish, I approach every project with{' '}
            <span className="text-red">precision</span> and{' '}
            <span className="text-red">purpose</span>.
          </p>
          <p className={`${pBaseClass}`}>
            I&apos;m looking for a team where I can keep building great software
            — and keep growing. If that sounds like what you&apos;re building,
            let&apos;s chat.
          </p>
        </div>
      </section>
      <section className="flex flex-1 items-center justify-center lg:justify-end">
        <Image
          src="/Headshot.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="shadow-blue dark:shadow-green rounded-lg object-cover"
        />
      </section>
    </article>
  );
};

export default Welcome;
