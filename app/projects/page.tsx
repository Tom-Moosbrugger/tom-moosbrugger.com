import { ProjectData } from '@/lib/types';
import Project from '@/components/ProjectsPage/Project';
import ComponentElement from '@/components/Elements/ComponentElement';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

const Projects = async () => {
  let projects: ProjectData[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    );

    if (response.ok) {
      const data = await response.json();
      projects = data.projects;
    } else {
      console.error('HTTP Error!');
    }
  } catch (e: any) {
    console.error(
      'Whoops, there was an error fetching the projects!',
      e.message,
    );
  }

  return (
    <main>
      <header className="p-10 text-center">
        <ComponentElement
          componentName="RecentProjects"
          className="text-blue dark:text-green text-xl sm:text-4xl"
        />
      </header>
      {projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
      {/* <Template /> */}
      <ContactBanner threshold={1} />
    </main>
  );
};

export default Projects;
