"use client"

import { ProjectData } from "@/lib/types";

interface ProjectProps {
  project: ProjectData;
  index: number;
}

const Project = ({ project, index }: ProjectProps) => {
    return (
        <article>
            <h1>{project.name}</h1>
        </article>
    )
};

export default Project;
