"use client";

import { ProjectData } from "@/lib/types";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ProjectLink from "@/components/ProjectsPage/ProjectLink";

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
            entry.target.classList.add(index % 2 === 0 ? "animate-slide-right" : "animate-slide-left");
            entry.target.classList.add("opacity-100")
          }
        });
      },
      { threshold: .5 }
    );

    const projectNode = projectRef.current;

    if (projectNode) {
      observer.observe(projectNode);
    }

    () => observer.disconnect();
  }, []);

  return (
    <article ref={projectRef} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} px-10 mb-10 opacity-0`}>
      <section className={`${index % 2 === 0 ? "shadow-blue-left dark:shadow-green-left" : "shadow-blue-right dark:shadow-green-right lg:order-1"} p-10 flex flex-col gap-6 max-w-xl border dark:bg-black bg-white`}>
        <h1 className="text-4xl font-extrabold dark:text-shadow-dark text-shadow-light">
          {project.name}
        </h1>
        <p className="text-xl">{project.description}</p>
        <ul className="flex flex-row flex-wrap">
          {project.technologies.map((technology, i) => (
            <li
              key={i}
              className="border px-2 py-1 m-1 font-bold shadow-md shadow-gray-500 bg-blue dark:bg-green dark:text-black cursor-pointer hover:scale-105"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-6 h-10">
          <ProjectLink url={project.liveURL} linkText="Live Website" />
          <ProjectLink url={project.githubURL} linkText="GitHub" />
        </div>
      </section>
      <section className={`flex-shrink-0 border border-white z-1 hidden sm:block shadow-md shadow-gray-400 ${index % 2 === 0 ? "lg:-ml-5" : "lg:-mr-5"}`}>
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
