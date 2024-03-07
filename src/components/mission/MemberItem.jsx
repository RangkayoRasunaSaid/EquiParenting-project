import ProgressBar from "@ramonak/react-progress-bar";
import { FaXmark } from "react-icons/fa6"
import ModalHapusMember from "./modals/ModalHapusMember";
import ModalButton from "./modals/ModalButton";
import { titleCase } from "../Breadcrumbs";
import { useEffect, useState } from "react";
import others from '../../assets/others.png'
import bunda from '../../assets/bunda.svg'
import ayah from '../../assets/ayah.svg'
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../../redux/slices/statsSlice";
import { deleteMembers } from "../../redux/slices/memberSlice";

const MemberItem = ({ member }) => {
    const dispatch = useDispatch();
    const { error, stats, loading } = useSelector(state => state.stats)
    let percent = 0
    if (stats && stats[member.id]) percent = stats[member.id].percentage

    useEffect(() => {
      const fetchMemberActivityStats = async () => {
        const data = {
            startDate: member.Rewards[0].start_date,
            endDate: member.Rewards[0].end_date
        };
        dispatch(fetchStats(data))
      };
      if (member.Rewards.length > 0 && !stats) fetchMemberActivityStats();
    }, []);
  
    const handleDelete = async (memberId) => dispatch(deleteMembers(memberId))
    
    return (
      <div className="text-center p-3 rounded-[40px] border-0 shadow-md h-100 relative">
        <ModalButton btnContent={(
          <button className="absolute top-4 right-4 rounded-lg bg-main-color p-px text-white hover:opacity-80">
            <FaXmark /></button>
          )} mdlContent={(<ModalHapusMember member={member} handleDelete={handleDelete} />)} />
        <div className="flex justify-center mb-2">
          <img
            src={member.avatar ? member.avatar : (member.member_role === 'others' ? others : member.member_role === 'bunda' ? bunda : ayah)}
            className={`rounded-full ${(!member.avatar && member.member_role === 'others') && 'ring-2 ring-purple-500'}`}
            style={{ height: "90px", width: "90px" }}
            alt="..."
          />
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
  export default MemberItem