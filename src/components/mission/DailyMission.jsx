import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
import axios from "axios";
// import Tim from "./Tim";

export default function DailyMission() {
    const [members, setMembers] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
  
    // useEffect(() => {
    //   const token = sessionStorage.getItem("token");
    //   axios
    //     .get("http://localhost:3000/members", { headers: { Authorization: token } })
    //     .then((response) => {
    //       setMembers(response.data.members);
    //       console.log(response.data.members);
    //       setIsDataLoaded(true);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching members:", error);
    //       alert("Failed fetching data");
    //       window.location.reload();
    //     });
    //   }, []);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = sessionStorage.getItem('token');
          
          // Fetch members
          const membersResponse = await axios.get('http://localhost:3000/members', { headers: { Authorization: token } });
          const membersData = membersResponse.data.members;
          // setMembers(membersData);
          console.log(membersData);
    
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
    
          // setRewardsByMember(rewardsMappedByMember);
    
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
          console.error('Error fetching data:', error);
          alert('Failed fetching data');
          window.location.reload();
        }
      };
    
      fetchData();
    }, []);    
    console.log(members);

    return (
        <div className="bg-white mx-4 px-10 rounded-[60px] pb-5 flex flex-col justify-center">
            <Tim members={members} setMembers={setMembers} />
            <Aktivitas members={members} setMembers={setMembers} />
        </div>
    )
}