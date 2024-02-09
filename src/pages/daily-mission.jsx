import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Member from "../components/Member";
import CreateMember from "../components/CreateMember";

const DailyMission = () => {
  return (
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
              <CreateMember />
              <Member />
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
  );
};

export default DailyMission;