'use client';

import ComponentElement from '@/components/Elements/ComponentElement';
import { ProjectData } from '@/lib/types';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Circle from '@/public/other/circle.svg';

interface FeaturedProjectsProps {
  projects: ProjectData[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const [index, setIndex] = useState(0);

  const decrementIndex = () => {
    setIndex((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }

      return 0;
    });
  };

  const incrementIndex = () => {
    setIndex((prevState) => {
      if (prevState < projects.length - 1) {
        return prevState + 1;
      }

      return projects.length - 1;
    });
  };

  return (
    <article className="m-10 flex max-w-7xl flex-col rounded-lg border-1 px-4 sm:px-10 py-10">
      <header className="mb-8 sm:mb-14">
        <ComponentElement
          className="text-blue dark:text-green text-xl sm:text-4xl"
          componentName="FeaturedProjects"
        />
      </header>
      <a 
        className="flex flex-col items-center justify-center lg:mx-50"
        href={projects[index].githubURL}
        target='_blank'
        referrerPolicy="no-referrer"
      >
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-t-xl border-1 border-black dark:border-white">
          <img
            src={projects[index].img1}
            alt={`${projects[index].name} screenshot`}
            className="object-fit h-full w-full"
          />
        </div>
        <div className="dark:bg-green bg-blue text-shadow-light w-full border-x-1 border-b-1 border-black py-2 text-center text-xl font-extrabold sm:text-3xl dark:border-white dark:text-black">
          {projects[index].name}
        </div>
      </a>
      <section className="flex flex-row items-center justify-center pt-10">
        <ChevronLeftIcon
          height={40}
          width={40}
          className="mr-4 cursor-pointer"
          onClick={decrementIndex}
        />
        {projects.map((project, i) => (
          <Circle
            key={i}
            height={20}
            width={20}
            className={`${
              index === i
                ? 'dark:text-green dark:fill-green fill-blue text-blue'
                : 'fill-gray-400 text-gray-400'
            } cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
        <ChevronRightIcon
          height={40}
          width={40}
          className="ml-4 cursor-pointer"
          onClick={incrementIndex}
        />
      </section>
    </article>
  );
};

export default FeaturedProjects;
