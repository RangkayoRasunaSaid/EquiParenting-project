// components/LandingPage/index.jsx
import Navbar from '../NavbarAcc'
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import MissionSection from './MissionSection';
import CeritakuSection from './CeritakuSection';
import CarouselArticle from './CarouselArticle'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <MissionSection />
      <CeritakuSection />
      <CarouselArticle />
    </>
  );
};

export default LandingPage;
