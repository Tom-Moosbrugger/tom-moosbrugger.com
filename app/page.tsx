import Welcome from '@/components/HomePage/Welcome/Welcome';
import TechnicalSkills from '@/components/HomePage/TechnicalSkills/TechnicalSkills';
import FeaturedProjectsWrapper from '@/components/HomePage/FeaturedProjects/FeaturedProjectsWrapper';
import ContactBanner from '@/components/ContactBanner/ContactBanner';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Welcome />
      <TechnicalSkills />
      <FeaturedProjectsWrapper />
      <ContactBanner threshold={0} />
    </main>
  );
};

export default Home;
