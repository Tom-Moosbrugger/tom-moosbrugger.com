import Welcome from "@/components/HomePage/Welcome/Welcome";
import TechnicalSkills from "@/components/HomePage/TechnicalSkills/TechnicalSkills";
import FeaturedProjects from "@/components/HomePage/FeaturedProjects/FeaturedProjects";
import FeaturedProjectsWrapper from "@/components/HomePage/FeaturedProjects/FeaturedProjectsWrapper";

const Home = () => {
  return (
   <div className="flex flex-col items-center justify-center">
    <Welcome />
    <TechnicalSkills />
    <FeaturedProjectsWrapper />
   </div>
  );
}

export default Home;

/* 

Home page needs the following sections:

Welcome:

  Quick intro with introductory paragraph about me and photo.
  Make sure to have different layouts for screen sizes
  also include animation with typing

Technologies and Skills
  List of technologies and skills
  Probably logo based
  Different grid layouts depending on screen size

Featured Projects
  Quick list of featured projects?

Personal Interests
  Section with photos and animated gifs highlighting my personal interests: running, reading, traveling
  Could be it's own page?


At the bottom: link to contact form

*/