import FeaturedProjects from './FeaturedProjects';
import { ProjectData } from '@/lib/types';

const FeaturedProjectsWrapper = async () => {
  let projects: ProjectData[] = [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    const response = await fetch(
      `${baseUrl}/api/projects`,
    );

    if (response.ok) {
      const data = await response.json();
      projects = data.projects;
    } else {
      console.error('HTTP Error!');
    }
  } catch (e: unknown) {
    console.error('Whoops, there was an error!', e instanceof Error ? e.message : e);
  }

  return <FeaturedProjects projects={projects} />;
};

export default FeaturedProjectsWrapper;
