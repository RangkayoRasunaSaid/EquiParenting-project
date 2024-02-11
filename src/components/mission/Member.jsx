import axios from "axios";
import { useEffect, useState } from "react";
import MemberItem from "./MemberItem";

// Define Member component
const Member = ({ members, setMembers, scores, setScores }) => {

  if (members.length === 0) {
    return null;
  }

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
        console.log(rewards);

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
    <>
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
    </>
  );
};

export default Member;
