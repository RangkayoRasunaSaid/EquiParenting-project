import Breadcrumbs from '../Breadcrumbs.jsx';
import { Route, Routes } from 'react-router-dom';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MisiAnggota from './MisiAnggota.jsx';
import { toast } from 'react-toastify';
import config from '../../config/config.js';

// Styled component for customizing modal background transition
const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export default function App({ members, setMembers, updateMembers, setUpdateMembers, activities }) {
    const [categories, setCategories] = useState([]);
    let endDate
    let currentDate = new Date();
    const [spinTime, setSpinTime] = useState(endDate < currentDate);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = sessionStorage.getItem('token');
          
          // Fetch members
          const membersResponse = await axios.get(config.apiUrl + '/members', { headers: { Authorization: token } });
          const membersData = membersResponse.data.members;
          setMembers(membersData);
          if (members.length > 0 && members[0].Rewards?.length > 0) {
              endDate = new Date(members[0].Rewards[0]?.end_date)
              currentDate = new Date()
              setSpinTime(endDate < currentDate);
          };

          const categoriesResponse = await axios.get(config.apiUrl + `/categories`);
          setCategories(categoriesResponse.data);
        } catch (error) {
          // console.error('Error fetching data:', error);
          toast.error('Failed fetching data');
        }
      };
    
      fetchData();
    }, [updateMembers]);
  
    return (
        <ModalProvider backgroundComponent={FadingBackground}>
          <div className='pt-10'>
            <div className="min-h-screen text-main-color bg-violet-100 sm:mx-5 md:mx-24 mx-3 sm:p-3 md:p-10 px-3 rounded-[40px]">
                <Breadcrumbs />
                <h1 className="text-center text-xl md:text-4xl pt-6 md:pt-2 mb-4 md:mb-8 font-semibold">
                    Selamat datang di misi keluarga idaman!
                </h1>
                <Routes>
                    <Route path="/" element={<PusatReward members={members} setUpdateMembers={setUpdateMembers} spinTime={spinTime} setSpinTime={setSpinTime} />} />
                    <Route path="/daily-mission" element={<DailyMission members={members} setUpdateMembers={setUpdateMembers} activities={activities} />} />
                    <Route path="/daily-mission/:role" element={<MisiAnggota categories={categories} />} />
                </Routes>
            </div>
          </div>
        </ModalProvider>
    );
}