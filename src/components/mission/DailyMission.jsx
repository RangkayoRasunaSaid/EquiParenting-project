import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
import axios from "axios";
// import Tim from "./Tim";

export default function DailyMission({ members, setMembers }) {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
  
    // useEffect(() => {
    //   const token = sessionStorage.getItem("token");
    //   axios
    //     .get("http://localhost:3000/members", { headers: { Authorization: token } })
    //     .then((response) => {
    //       setMembers(response.data.members);
    //       console.log(response.data.members);
    //       setIsDataLoaded(true);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching members:", error);
    //       alert("Failed fetching data");
    //       window.location.reload();
    //     });
    //   }, []);

    return (
        <>
        <div className="bg-white mx-4 px-10 rounded-[60px] pb-5 flex flex-col justify-center">
            <Tim members={members} setMembers={setMembers} />
            {members.length > 0 &&
              <Aktivitas members={members} setMembers={setMembers} />
            }
        </div>
        <div>
            <h1>Container ke Card Activity</h1>
        </div>
        </>
    )
}