// components/LandingPage/index.jsx
// import Navbar from '../navbar/Navbar'
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import MissionSection from './MissionSection';
import CeritakuSection from './CeritakuSection';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/userSlice';
// import CarouselArticle from './CarouselArticle'
// import Footer from '../Footer/Footer'

const LandingPage = () => {
  const user = useSelector(selectUser)
  return (
    <>
      {/* <Navbar /> */}
      {/* {user.isAuthenticated && (
        <p>{user.username}</p>
      )} */}
      
      <HeroSection />
      <FeatureSection />
      <MissionSection />
      <CeritakuSection />
      {/* <CarouselArticle /> */}
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
