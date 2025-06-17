import FeaturedProjects from './FeaturedProjects';
import projects from "@/app/api/projects/projects.json";
import { ProjectData } from '@/lib/types';

const FeaturedProjectsWrapper = async () => {
  const typedProjects: ProjectData[] = projects

  return <FeaturedProjects projects={typedProjects} />;
};

export default FeaturedProjectsWrapper;
