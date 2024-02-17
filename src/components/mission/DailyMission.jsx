import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
import axios from "axios";
// import Tim from "./Tim";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function DailyMission({ members, setMembers }) {
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);
  
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