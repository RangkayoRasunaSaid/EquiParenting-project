import { Link } from "react-router-dom";
import NavbarAcc from "../components/NavbarAcc";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Member from "../components/member";

const DailyMission = () => {
  return (
    <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
      <Navbar />
      <div className="bg-white bg-opacity-40 m-6 p-4 rounded-3xl">
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
        <h1 className="text-ungu1 font-extrabold text-xl text-center my-4">
          Selamat Datang di Pusat Misi Keluarga Idaman!
        </h1>
        <div className="bg-white rounded-3xl px-3 py-1">
          <div>
            <h1 className="text-ungu1 font-extrabold text-xl text-center my-4">Tim</h1>
            <div className="flex items-center gap-3">
              <button className="bg-ungu1 rounded-lg drop-shadow-lg py-3 px-5 text-white">
                <p className="hidden">Tambah Anggota</p>
                <p className="text-6xl font-bold">+</p>
                <p className="font-medium">
                  Max <p className="hidden">Total Tim</p> 2
                </p>
              </button>
              <Member />
            </div>
          </div>
          <div>
            <h1 className="text-ungu1 font-extrabold text-xl text-center my-4">Aktivitas</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DailyMission;
