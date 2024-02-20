import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
// import Tim from "./Tim";
import { useNavigate } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function DailyMission({ members, setUpdateMembers }) {
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
                <Tim members={members} setUpdateMembers={setUpdateMembers} />
                {members.length > 0 &&
                    <Aktivitas members={members} setUpdateMembers={setUpdateMembers} />
                }
            </div>
        </>
    )
}
// DailyMission.propTypes = {
//     members: PropTypes.array.isRequired, // Assuming members is an array of objects
//     setMembers: PropTypes.func.isRequired, // Function for updating the members state
// };