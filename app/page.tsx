import Welcome from "@/components/HomePage/Welcome/Welcome";
import TechnicalSkills from "@/components/HomePage/TechnicalSkills/TechnicalSkills";
import FeaturedProjectsWrapper from "@/components/HomePage/FeaturedProjects/FeaturedProjectsWrapper";
import ContactBanner from "@/components/HomePage/ContactBanner/ContactBanner";

const Home = () => {
  return (
   <div className="flex flex-col items-center justify-center">
    <Welcome />
    <TechnicalSkills />
    <FeaturedProjectsWrapper />
    <ContactBanner />
   </div>
  );
}

export default Home;