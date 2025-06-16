import ComponentElement from '@/components/Elements/ComponentElement';
import Image from 'next/image';
import AboutMeTile from './AboutMeTile';

const AboutMe = () => {
  return (
    <article className="m-10 max-w-7xl rounded-lg border p-10">
      <header className="mb-8 flex flex-col gap-6">
        <ComponentElement
          componentName="AboutMe"
          className="text-blue dark:text-green text-xl sm:text-4xl"
        />
        <h1 className="text-lg sm:text-xl">
          When I'm not busy with my next project, you can find me...
        </h1>
      </header>
      <section className='flex flex-col gap-10 text-lg sm:text-xl'>
        <AboutMeTile
          src="/about/exploring.jpg"
          alt="Picture of the author on a hike"
          position="justify-start"
          textFirst={false}
          text="Exploring the great outdoors with my partner"
        />
        <AboutMeTile
          src="/about/running.JPEG"
          alt="Picture of the author running in a race"
          position="justify-end"
          textFirst={true}
          text="Running marathons"
        />
        <AboutMeTile
          src="/about/dog.jpg"
          alt="Picture of the author with his dog"
          position="justify-start"
          textFirst={false}
          text="Hanging with my cute dog Molly"
        />
        
        <AboutMeTile
          src="/about/traveling.jpg"
          alt="Picture of the author at the Eiffel Tower"
          position="justify-end"
          textFirst={true}
          text="Traveling the world"
        />
      </section>
    </article>
  );
};

export default AboutMe;
