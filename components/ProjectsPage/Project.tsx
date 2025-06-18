'use client';

import { ProjectData } from '@/lib/types';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ProjectLink from '@/components/ProjectsPage/ProjectLink';

interface ProjectProps {
  project: ProjectData;
  index: number;
}

const Project = ({ project, index }: ProjectProps) => {
  const projectRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // create new intersection observer that watches for a project entering the viewport
    // once the element enters the viewport, add my custom animation utility class to its class
    // even indexed projects will slide in from the right, odd from the left
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left',
            );
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.5 },
    );

    const projectNode = projectRef.current;

    if (projectNode) {
      observer.observe(projectNode);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={projectRef}
      className={`flex flex-col items-center lg:flex-row ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-10 px-10 opacity-0`}
    >
      <section
        className={`${index % 2 === 0 ? 'shadow-blue-left dark:shadow-green-left' : 'shadow-blue-right dark:shadow-green-right lg:order-1'} flex max-w-xl flex-col gap-6 border bg-white p-8 sm:p-10 dark:bg-black`}
      >
        <h1 className="dark:text-shadow-dark text-shadow-light text-xl font-extrabold sm:text-4xl">
          {project.name}
        </h1>
        <p className="sm:text-xl">{project.description}</p>
        <ul className="flex flex-row flex-wrap">
          {project.technologies.map((technology, i) => (
            <li
              key={i}
              className="bg-blue dark:bg-green m-1 cursor-pointer border px-2 py-1 font-bold shadow-md shadow-gray-500 hover:scale-105 dark:text-black"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="flex h-10 flex-row gap-6">
          <ProjectLink url={project.liveURL} linkText="Live Site" />
          <ProjectLink url={project.githubURL} linkText="GitHub" />
        </div>
      </section>
      <section
        className={`z-1 hidden flex-shrink-0 border border-white shadow-md shadow-gray-400 sm:block ${index % 2 === 0 ? 'lg:-ml-5' : 'lg:-mr-5'}`}
      >
        <Image
          src={project.gif}
          alt={`${project.name} screenshot`}
          height={700}
          width={700}
          layout="fixed"
        />
      </section>
    </article>
  );
};

export default Project;
