import { useEffect, useState } from "react";
import ModalButton from "./modals/ModalButton";
import ModalCreateMember from "./modals/ModalCreateMember";
import axios from "axios";
import MemberItem from "./MemberItem";

const DailyMission = ({ members, setMembers }) => {
  const mdlBtn = (
    <div role="button" className="text-center py-4 md:px-5 rounded-[40px] border-0 shadow-md h-100 bg-main-color text-white flex flex-col justify-between">
        <h5 className="text-2xl font-bold">Tambah Anggota</h5>
        <h6 className="text-7xl font-bold">+</h6>
        <div className="text-lg font-bold bg-transparent border-0">
            Max Total 2 Tim
        </div>
    </div>
  )

  const handleDeleteMember = (deletedMemberId) => {
    // Remove the deleted member from the local state
    setMembers(prevMembers => prevMembers.filter(member => member.id !== deletedMemberId));
  };
  
  const [rewardsByMember, setRewardsByMember] = useState({});

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/rewards', { headers: { Authorization: token } });
        const rewards = response.data;

        // Group rewards by member ID
        const rewardsMappedByMember = rewards.reduce((acc, reward) => {
          const memberId = reward.member_id;
          if (!acc[memberId]) {
            acc[memberId] = [];
          }
          acc[memberId].push(reward);
          return acc;
        }, {});

        setRewardsByMember(rewardsMappedByMember);
      } catch (error) {
        console.error('Error fetching rewards:', error);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div className="m-4 p-sm-3 p-md-4 p-2 ">
        <h1 className="text-center text-3xl mb-2 font-bold">Tim</h1>
        <div className="grid justify-items-stretch md:grid-cols-3 gap-3 text-center p-sm-4 p-md-5 p-2">
          <ModalButton btnContent={mdlBtn} mdlContent={(<ModalCreateMember members={members} setMembers={setMembers} />)} />
          {members.map((member, index) => {
            // Retrieve rewards for the current member
            const memberRewards = rewardsByMember[member.id] || [];
            let start_date = ''
            let end_date = ''
            
            // Find the last reward for the member
            const lastReward = memberRewards.length > 0 ? memberRewards[memberRewards.length - 1] : null;
            if (lastReward) {
              start_date = lastReward.start_date
              end_date = lastReward.end_date
            }
              
              return (
                <MemberItem
                  key={index} 
                  member={member} 
                  startDate={start_date} 
                  endDate={end_date} 
                  onDelete={handleDeleteMember}
                />
              );
          })}
        </div>
      </div>
  );
};

export default DailyMission;