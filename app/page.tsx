import Welcome from '@/components/HomePage/Welcome/Welcome';
import TechnicalSkills from '@/components/HomePage/TechnicalSkills/TechnicalSkills';
import FeaturedProjectsWrapper from '@/components/HomePage/FeaturedProjects/FeaturedProjectsWrapper';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import AboutMe from '@/components/HomePage/AboutMe/AboutMe';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Welcome />
      <TechnicalSkills />
      <FeaturedProjectsWrapper />
      <AboutMe />
      <ContactBanner threshold={0.5} />
    </main>
  );
};

export default Home;
