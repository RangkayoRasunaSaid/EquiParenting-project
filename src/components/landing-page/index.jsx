import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import MissionSection from './MissionSection';
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
