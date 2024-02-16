import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
import axios from "axios";
// import Tim from "./Tim";
import PropTypes from 'prop-types';

export default function DailyMission({ members, setMembers }) {
  
    return (
        <>
        <div className="bg-white mx-4 px-10 rounded-[60px] pb-5 flex flex-col justify-center">
            <Tim members={members} setMembers={setMembers} />
            {members.length > 0 &&
              <Aktivitas members={members} setMembers={setMembers} />
            }
        </div>
        </>
    )
}
DailyMission.propTypes = {
    members: PropTypes.array.isRequired, // Assuming members is an array of objects
    setMembers: PropTypes.func.isRequired, // Function for updating the members state
};