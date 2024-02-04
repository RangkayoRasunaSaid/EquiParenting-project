import { Link } from "react-router-dom";
import NavbarAcc from "../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("", data);
      console.log(response.data);
    } catch (error) {
      console.error("Proses Login Gagal:", error.message);
    }
  };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
      <NavbarAcc />
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Masuk</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Yuk, Lanjutkan dengan akun kamu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
          <form onSubmit={handleLogin}>
            <div>
              <div>
                <label className="lg:text-lg">E-mail</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="lg:text-lg">Password</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  required
                />
              </div>

              <div className="flex gap-24 lg:gap-52 text-xxs lg:text-sm mt-4">
                <span>Belum memiliki akun?</span>
                <Link to="/register" className="font-extrabold">
                  Daftar
                </Link>
              </div>

              <div className="flex justify-center mt-4 lg:mt-8">
                <button
                  type="submit"
                  className="hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-20 lg:w-28 p-2 rounded-full"
                >
                  Masuk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
