import { useEffect, useState } from "react";
import ModalButton from "./modals/ModalButton";
import ModalCreateMember from "./modals/ModalCreateMember";
import axios from "axios";
import MemberItem from "./MemberItem";
import PropTypes from 'prop-types';

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

  return (
    <div className="m-4 p-sm-3 p-md-4 p-2 ">
        <h1 className="text-center text-3xl mb-2 font-bold">Tim</h1>
        <div className="grid justify-items-stretch md:grid-cols-3 gap-3 text-center p-sm-4 p-md-5 p-2">
          <ModalButton btnContent={mdlBtn} mdlContent={
            (<ModalCreateMember
              members={members}
              setMemberData={setMembers}
            />)} />
          {members.map((member, index) => {              
              return (
                <MemberItem
                  key={index} 
                  member={member}
                />
              );
          })}
        </div>
      </div>
  );
};
// DailyMission.propTypes = {
//   members: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.oneOfType([
//           PropTypes.string,
//           PropTypes.number
//       ]).isRequired,
//       name: PropTypes.string,
//   })).isRequired,
//   setMembers: PropTypes.func.isRequired,
// };
export default DailyMission;