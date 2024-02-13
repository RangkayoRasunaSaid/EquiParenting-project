import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import ModalPeriode from "./modals/ModalPeriode";
import ModalButton from "./modals/ModalButton";
import { titleCase } from "../Breadcrumbs";

const MemberItem = ({ member, startDate, endDate, onDelete }) => {
    const isWithinPeriod = (endTime) => {
        const now = Date.now();
        const result = now >= now <= new Date(endTime).getTime()
        return result
    };
  
    // Format the selected period for display
    const formattedPeriod = startDate && endDate ? `${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}` : '';
  
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
          onDelete(memberId)
        })
        .catch(error => {
          console.error("Error deleting member:", error);
        });
      }
    };
    
    return (
        <div className="text-center p-3 rounded-[40px] border-0 shadow-md h-100">
          <button onClick={() => handleDelete(member.id)}>Delete</button>
            <div className="flex justify-center mb-2">
              <img src={member.avatar ? member.avatar : `/src/assets/${member.member_role}.svg`} className="rounded-full ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." />
            </div>
            <h5 className="text-xl font-bold" style={{color:"#675893"}}>{titleCase(member.member_role)}</h5>
            <p className="text-slate-300 font-bold text-sm my-1">{member.name}</p>
            {!isWithinPeriod(endDate) ? (
                <ModalButton btnContent={(
                  <button className='text-center p-2 px-3 rounded-xl font-medium bg-main-color text-white'>
                    Atur Periode
                  </button>
                )} mdlContent={(<ModalPeriode memberId={member.id} />)} />
            ) : (
              <div className="grid grid-cols-12 items-center">
                  <div className="col-start-1 col-end-12 pe-2">
                      <ProgressBar completed={member.percentage} height="10px" labelSize="10px" isLabelVisible={false} bgColor="rgba(103, 88, 147)" baseBgColor="#3b363d" />
                  </div>
                  <div className="text-xs text-right col-start-12">{member.percentage}%</div>
              </div>
            )}
        </div>
    );
  };

  export default MemberItem