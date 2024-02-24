import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { FaXmark } from "react-icons/fa6"
import ModalHapusMember from "./modals/ModalHapusMember";
import ModalButton from "./modals/ModalButton";
import { titleCase } from "../Breadcrumbs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import config from "../../config/config";

const MemberItem = ({ member, members, setUpdateMembers }) => {
    const [percent, setPercent] = useState(0)
    const token = sessionStorage.getItem('token');

    const handleDelete = async (memberId) => {
      const loadingToastId = toast.loading(`Deleting ${titleCase(member.name)} as ${titleCase(member.member_role)} ...`)
      try {
        await axios.delete(config.apiUrl + `/members/${memberId}`, {
          headers: {
            Authorization: token,
          },
        });
        toast.update(loadingToastId, { render: `${titleCase(member.name)} sebagai ${titleCase(member.member_role)} berhasil dihapus`, type:'info', isLoading: false, autoClose: 5000, closeOnClick: true });
      } catch (error) {
        toast.update(loadingToastId, { render: `Error deleting ${titleCase(member.name)} sebagai ${titleCase(member.member_role)}`, type:'error', isLoading: false, autoClose: 5000, closeOnClick: true });
        console.error("Error deleting member:", error);
      } finally {
        setUpdateMembers(Date.now())
      }
    };
    
    useEffect(() => {
        const fetchMemberActivityStats = async (member) => {
        try {
            const response = await axios.get(config.apiUrl + `/stats/${member.id}/${member.Rewards[0].start_date}/${member.Rewards[0].end_date}`,
              {
                headers: { Authorization: token }
              });
            setPercent(response.data.percentage)
        } catch (error) {
          toast.update(loadingToastId, { render: `Error fetching member activity stats`, type:'error', isLoading: false, autoClose: 5000, closeOnClick: true });
          console.error('Error fetching member activity stats:', error);
        }
        };
        if (member.Rewards.length > 0) fetchMemberActivityStats(member)
    }, [members]);
    
    return (
      <div className="text-center p-3 rounded-[40px] border-0 shadow-md h-100 relative">
        <ModalButton btnContent={(
          <button className="absolute top-4 right-4 rounded-lg bg-main-color p-px text-white hover:opacity-80">
            <FaXmark /></button>
          )} mdlContent={(<ModalHapusMember member={member} handleDelete={handleDelete} />)} />
        <div className="flex justify-center mb-2">
          <img src={member.avatar ? member.avatar : `/src/assets/${member.member_role === 'others' ? 'others.png' : member.member_role+'.svg'}`} className={`rounded-full ${member.avatar || member.member_role === 'others' && 'ring-2 ring-purple-500'}`} style={{height:"90px", width:"90px"}} alt="..." />
        </div>
        <h5 className="text-xl font-bold" style={{color:"#675893"}}>{titleCase(member.member_role)}</h5>
        <p className="text-slate-300 font-bold text-sm my-1">{titleCase(member.name)}</p>
        <div className="grid grid-cols-12 items-center">
          <div className="col-start-1 col-end-12 pe-2">
            <ProgressBar completed={percent} height="10px" labelSize="10px" isLabelVisible={false} bgColor="rgba(103, 88, 147)" baseBgColor="#3b363d" />
          </div>
          <div className="text-xs text-right col-start-12">{percent}%</div>
        </div>
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