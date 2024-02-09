import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Member from "../components/member";
import CreateMember from "../components/CreateMember";
import { useEffect, useState } from "react";
import axios from "axios";

const DailyMission = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/members", { headers: { Authorization: token } })
      .then((response) => {
        setMembers(response.data.members);
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
        alert("Pengambilan Data Gagal");
        window.location.reload();
      });
  }, []);

  return (
    <>
      {!isDataLoaded ? (
        <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
          <Navbar />
          <div className="w-full h-full flex items-center justify-center my-48">
            <div className="animate-spin rounded-full h-32 w-32 border-8 border-dotted border-ungu1"></div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
          <Navbar />
          <div className="bg-white bg-opacity-40 m-6 p-4 lg:p-8 rounded-3xl">
            <div className="flex gap-1">
              <Link to={"/mission"} className="text-ungu1 font-semibold text-opacity-70 hover:text-opacity-100">
                Mission
              </Link>
              <p className="text-ungu1 text-opacity-70 font-semibold"> {">"} </p>
              <Link
                to={"/mission/daily-mission"}
                className="text-ungu1 font-semibold text-opacity-70 hover:text-opacity-100"
              >
                Daily Mission
              </Link>
            </div>
            <h1 className="text-ungu1 font-extrabold text-xl lg:text-3xl text-center my-4 lg:my-8">
              Selamat Datang di Pusat Misi Keluarga Idaman!
            </h1>
            <div className="bg-white rounded-3xl px-3 lg:px-8 py-1">
              {/* Team Member Section */}
              <div className="mb-10">
                <h1 className="text-ungu1 font-extrabold text-xl lg:text-2xl text-center my-4 lg:my-8">Team</h1>
                <div className="flex items-center lg:my-20 gap-3 lg:gap-12">
                  <CreateMember members={members} setMembers={setMembers} />
                  <Member members={members} />
                </div>
              </div>

              {/* Activity Section */}
              <div>
                <h1 className="text-ungu1 font-extrabold text-xl lg:text-2xl text-center my-4">Aktivitas</h1>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default DailyMission;
