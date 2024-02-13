import HeroSection from '../components/landing-page/HeroSection';
import FeatureSection from '../components/landing-page/FeatureSection';
import MissionSection from '../components/landing-page/MissionSection';
// import CeritakuSection from './CeritakuSection'; // next feature
import { useSelector } from 'react-redux';
// import { selectUser } from '../../redux/slices/userSlice';
// import CarouselArticle from './CarouselArticle' // next feature

const LandingPage = () => {
  // const user = useSelector(selectUser)
  return (
    <>
      {/* {user.isAuthenticated && (
        <p>{user.username}</p>
      )} */}
      
      <HeroSection />
      <FeatureSection />
      <MissionSection />

      {/* next feature */}
      {/* <CeritakuSection /> */} 
      {/* <CarouselArticle /> */}
    </>
  );
};

export default LandingPage;
