import Breadcrumbs from '../Breadcrumbs.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';
import MisiBunda from './MisiBunda.jsx';
import MisiAyah from './MisiAyah.jsx';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
// import '../../App.scss'

const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export default function App() {
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <div className="text-main-color bg-gradient-to-r from-violet-100 my-10 sm:mx-5 md:mx-20 mx-3 sm:p-3 sm:p-10 md:p-20 p-5 rounded-[60px]">
                <Breadcrumbs />
                <h1 className="text-center text-4xl mb-10 font-semibold">
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