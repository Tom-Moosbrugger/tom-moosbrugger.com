import FeaturedProjects from "./FeaturedProjects";
import { ProjectData } from "@/lib/types";

const FeaturedProjectsWrapper = async () => {
    let projects: ProjectData[] = [];

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);

        if (response.ok) {
            const data = await response.json();
            projects = data.projects;
            console.log(projects)
        } else {
            console.error("HTTP Error!");
        }
    } catch (e: any) {
        console.error("Whoops, there was an error fetching the projects!", e.message);
    }

    return <FeaturedProjects projects={projects} />
};

export default FeaturedProjectsWrapper;