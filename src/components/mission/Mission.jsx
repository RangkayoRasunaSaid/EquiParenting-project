import Breadcrumbs from '../Breadcrumbs.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DailyMission from './Daymission.jsx';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';
import MisiBunda from './MisiBunda.jsx';
import MisiAyah from './MisiAyah.jsx';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
// import '../../App.scss'

// Styled component for customizing modal background transition
const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export default function App() {
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <div  className="min-h-screen text-main-color bg-violet-100 my-10 sm:mx-5 md:mx-24 mx-3 sm:p-3 md:p-10 px-3 rounded-[40px]">
                <Breadcrumbs />
                <h1 className="text-center text-xl md:text-4xl pt-6 md:pt-2 mb-4 md:mb-8 font-semibold">
                    Selamat datang di misi keluarga idaman!
                </h1>
                <Routes>
                    <Route path="/" element={<PusatReward />} />
                    <Route path="/daily-mission" element={<DailyMission />} />
                    <Route path="/daily-mission/misi-bunda" element={<MisiBunda />} />
                    <Route path="/daily-mission/misi-ayah" element={<MisiAyah />} />
                </Routes>
            </div>
        </ModalProvider>
    );
}