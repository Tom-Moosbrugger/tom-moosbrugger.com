"use client";

import ComponentElement from "@/components/Elements/ComponentElement";
import { ProjectData } from "@/lib/types";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Circle from "@/public/other/circle.svg";

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
    <article className="flex flex-col px-15 py-10 mx-10 my-10 border-1 rounded-lg max-w-7xl">
      <header className="mb-14">
        <ComponentElement
          className="text-blue dark:text-green text-xl sm:text-4xl"
          componentName="FeaturedProjects"
        />
      </header>
      <section className="flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl aspect-video border-2 border-black dark:border-white overflow-hidden">
          <img
            src={projects[index].img1}
            alt={`${projects[index].name} screenshot`}
            className="w-full h-full object-fit"
          />
        </div>
        <div className="text-center font-extrabold w-full text-xl sm:text-3xl border-x-1 border-b-1 border-black dark:border-white py-5">
          {projects[index].name}
        </div>
      </section>
      <section className="flex flex-row justify-center items-center pt-10">
        <ChevronLeftIcon
          height={40}
          width={40}
          className="cursor-pointer mr-4"
          onClick={decrementIndex}
        />
        {projects.map((project, i) => (
          <Circle
            key={i}
            height={20}
            width={20}
            className={`${
              index === i
                ? "dark:text-green dark:fill-green fill-blue text-blue"
                : "fill-gray-400 text-gray-400"
            }`}
          />
        ))}
        <ChevronRightIcon
          height={40}
          width={40}
          className="cursor-pointer ml-4"
          onClick={incrementIndex}
        />
      </section>
    </article>
  );
};

export default FeaturedProjects;

/* 

The goal is to have a carousel-like horizontal container that can scroll through projects
there should be arrows to either side of an image of a project
clicking an arrow scrolls to the next project, changing the image

so if we had an array of objects from the backend, we could:

create a slice of state for index
have two arrow icons that change the index state
display an image and box for the image and name, respectively
have three dots below indicating the position in the carousel. 

*/
