import "./LandingPage.css";
// components/LandingPage/index.jsx
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import MissionSection from "./MissionSection";
import CeritakuSection from "./CeritakuSection";
// import CarouselArticle from './CarouselArticle'
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <MissionSection />
      <CeritakuSection />
      {/* <CarouselArticle /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
