import { ProjectData } from "@/lib/types";
import Project from "@/components/ProjectsPage/Project";

const Projects = async () => {
  let projects: ProjectData[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
    );

    if (response.ok) {
      const data = await response.json();
      projects = data.projects;
    } else {
      console.error("HTTP Error!");
    }
  } catch (e: any) {
    console.error(
      "Whoops, there was an error fetching the projects!",
      e.message
    );
  }

  return (
    <main>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
    </main>
  );
};

export default Projects;

/*

I want a page that displays all of my projects. 
Each project should have a title, description, list of technologies used, and set of images
Each project should also have a link to the github repo and the live website
Each project should also 'slide' into view in alternating order: first right, then left, etc.


*/
