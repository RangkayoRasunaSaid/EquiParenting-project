import Breadcrumbs from '../Breadcrumbs.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DailyMission from './Daymission.jsx';
import DailyMission from './DailyMission';
import PusatReward from './PusatReward';
import MisiBunda from './MisiBunda.jsx';
import MisiAyah from './MisiAyah.jsx';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MisiAnggota from './MisiAnggota.jsx';
// import '../../App.scss'

// Styled component for customizing modal background transition
const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
`;

export default function App() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = sessionStorage.getItem('token');
            
            // Fetch members
            const membersResponse = await axios.get('http://localhost:3000/members', { headers: { Authorization: token } });
            const membersData = membersResponse.data.members;
      
            // Fetch rewards
            const rewardsResponse = await axios.get('http://localhost:3000/rewards', { headers: { Authorization: token } });
            const rewardsData = rewardsResponse.data;
      
            // Group rewards by member ID
            const rewardsMappedByMember = rewardsData.reduce((acc, reward) => {
              const memberId = reward.member_id;
              if (!acc[memberId]) {
                acc[memberId] = [];
              }
              acc[memberId].push(reward);
              return acc;
            }, {});
      
            // Calculate start_date and end_date for each member
            const membersWithDates = membersData.map(member => {
              const memberRewards = rewardsMappedByMember[member.id] || [];
              const lastReward = memberRewards.length > 0 ? memberRewards[memberRewards.length - 1] : null;
              const { start_date, end_date } = lastReward || {};
              return { ...member, start_date, end_date };
            });
            setMembers(membersWithDates);
            
            setIsDataLoaded(true);
          } catch (error) {
            // console.error('Error fetching data:', error);
            // alert('Failed fetching data');
            // window.location.reload();
          }
        };
      
        fetchData();
      }, []);    

    return (
        <ModalProvider backgroundComponent={FadingBackground}>
            <div  className="min-h-screen text-main-color bg-violet-100 my-10 sm:mx-5 md:mx-24 mx-3 sm:p-3 md:p-10 px-3 rounded-[40px]">
                <Breadcrumbs />
                <h1 className="text-center text-xl md:text-4xl pt-6 md:pt-2 mb-4 md:mb-8 font-semibold">
                    Selamat datang di misi keluarga idaman!
                </h1>
                <Routes>
                    <Route path="/" element={<PusatReward members={members} />} />
                    <Route path="/daily-mission" element={<DailyMission members={members} setMembers={setMembers} />} />
                    <Route path="/daily-mission/:role" element={<MisiAnggota />} />
                </Routes>
            </div>
        </ModalProvider>
    );
}