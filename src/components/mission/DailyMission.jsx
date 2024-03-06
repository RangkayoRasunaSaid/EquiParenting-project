import { useEffect } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
import { useNavigate } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from "react-redux";
import { override } from "../../pages/Profile";
import { ClipLoader } from "react-spinners";

export default function DailyMission({ setUpdateMembers, activities }) {
    const navigate = useNavigate()
    if (!sessionStorage.getItem('token')) navigate('/login')

    const { members, loading } = useSelector(state => state.member)
  
    return (
        <div className="bg-white mx-4 px-10 rounded-[60px] pb-5 flex flex-col justify-center">
        {!members ? (
          <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
        ) : (
            <>
                <Tim setUpdateMembers={setUpdateMembers} />
                {members.length > 0 &&
                    <Aktivitas setUpdateMembers={setUpdateMembers} activities={activities} />
                }
            </>
        )}
        </div>
    )
}
// DailyMission.propTypes = {
//     members: PropTypes.array.isRequired, // Assuming members is an array of objects
//     setMembers: PropTypes.func.isRequired, // Function for updating the members state
// };