import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import ModalPeriode from "./modals/ModalPeriode";
import ModalButton from "./modals/ModalButton";
import { titleCase } from "../Breadcrumbs";
import { useEffect, useState } from "react";

const MemberItem = ({ member }) => {
    const [percent, setPercent] = useState(0)
    const handleDelete = (memberId) => {
      const authToken = sessionStorage.getItem("token");
      const confirmed = window.confirm("Are you sure you want to delete this member?");
      if (confirmed) {
        axios.delete(`http://localhost:3000/members/${memberId}`, {
          headers: {
            Authorization: authToken,
          },
        })
        .then(response => {
          // Handle success, maybe refresh the member list
          // onDelete(memberId)
        })
        .catch(error => {
          console.error("Error deleting member:", error);
        });
      }
    };
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');

        const fetchMemberActivityStats = async (member) => {
        try {
            const response = await axios.get(`http://localhost:3000/stats/${member.id}/${member.Rewards[0].start_date}/${member.Rewards[0].end_date}`,
              {
                headers: { Authorization: token }
              });
            console.log(response.data);
            setPercent(response.data.percentage)
        } catch (error) {
            console.error('Error fetching member activity stats:', error);
        }
        };

        if (member.Rewards.length > 0) fetchMemberActivityStats(member)
    }, []);
    
    return (
        <div className="text-center p-3 rounded-[40px] border-0 shadow-md h-100">
          {/* <button onClick={() => handleDelete(member.id)}>Delete</button> */}
            <div className="flex justify-center mb-2">
              <img src={member.avatar ? member.avatar : `/src/assets/${member.member_role}.svg`} className={`rounded-full ${member.avatar && 'ring-2 ring-purple-500'}`} style={{height:"90px", width:"90px"}} alt="..." />
            </div>
            <h5 className="text-xl font-bold" style={{color:"#675893"}}>{titleCase(member.member_role)}</h5>
            <p className="text-slate-300 font-bold text-sm my-1">{titleCase(member.name)}</p>
            {/* {member.Rewards.length === 0 ? (
                <ModalButton btnContent={(
                  <button className='text-center p-2 px-3 rounded-xl font-medium bg-main-color text-white'>
                    Atur Periode
                  </button>
                )} mdlContent={(<ModalPeriode memberId={member.id} />)} />
            ) : ( */}
              <div className="grid grid-cols-12 items-center">
                  <div className="col-start-1 col-end-12 pe-2">
                      <ProgressBar completed={percent} height="10px" labelSize="10px" isLabelVisible={false} bgColor="rgba(103, 88, 147)" baseBgColor="#3b363d" />
                  </div>
                  <div className="text-xs text-right col-start-12">{percent}%</div>
              </div>
            {/* )} */}
        </div>
    );
  };
//   MemberItem.propTypes = {
//     member: PropTypes.shape({
//         id: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.number
//         ]).isRequired,
//         name: PropTypes.string.isRequired,
//         member_role: PropTypes.string.isRequired,
//         avatar: PropTypes.string,
//         percentage: PropTypes.number // Assuming 'percentage' is part of the 'member' object and used for the ProgressBar
//     }).isRequired,
//     startDate: PropTypes.string, // Assuming 'startDate' and 'endDate' are strings representing dates
//     endDate: PropTypes.string,
//     onDelete: PropTypes.func.isRequired, // Function to call when a member is deleted
// };
  export default MemberItem