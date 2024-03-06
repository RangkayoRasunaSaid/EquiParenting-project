import Breadcrumbs from '../Breadcrumbs.jsx';
import { Route, Routes } from 'react-router-dom';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MisiAnggota from './MisiAnggota.jsx';
import config from '../../config/config.js';
import { fetchMembers } from '../../redux/slices/memberSlice.js';
import { useDispatch } from 'react-redux';

// Styled component for customizing modal background transition
const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export default function App({ setUpdateMembers, activities }) {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        dispatch(fetchMembers())
        const categoriesResponse = await axios.get(config.apiUrl + '/categories');
        setCategories(categoriesResponse.data);
      };
      if (sessionStorage.getItem("token")) fetchData();
    }, []);
  
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
          <div className='pt-10'>
            <div className="min-h-screen text-main-color bg-violet-100 sm:mx-5 md:mx-24 mx-3 sm:p-3 md:p-10 px-3 rounded-[40px]">
                <Breadcrumbs />
                <h1 className="text-center text-xl md:text-4xl pt-6 md:pt-2 mb-4 md:mb-8 font-semibold">
                    Selamat datang di misi keluarga idaman!
                </h1>
                <Routes>
                    <Route path="/" element={<PusatReward setUpdateMembers={setUpdateMembers} />} />
                    <Route path="/daily-mission" element={<DailyMission setUpdateMembers={setUpdateMembers} activities={activities} />} />
                    <Route path="/daily-mission/:role" element={<MisiAnggota categories={categories} />} />
                </Routes>
            </div>
          </div>
        </ModalProvider>
    );
}