import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Flip } from 'react-toastify';
import axios from "axios";
import Loading from "../Loading";
import config from "../config/config";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    const loadingToastId = toast.loading('Logging in...', {transition: Flip})

    try {
      const response = await axios.post(config.apiUrl + "/login", data);
      const { token } = response.data;

      sessionStorage.setItem("token", token);
      window.scrollTo(0, 0)

      // alert("Login Berhasil");
      toast.update(loadingToastId, {
        render:  "Login Berhasil",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        transition: Flip,
        closeOnClick: true
      });

      navigate("/");
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          // alert("User tidak ditemukan");
          toast.update(loadingToastId, {
            render:  "User tidak ditemukan",
            type: "error",
            isLoading: false,
            closeOnClick: true,
            autoClose: 5000
          });
        } else if (status === 401) {
          // alert("Password yang dimasukkan salah");
          toast.update(loadingToastId, {
            render:  "Password yang dimasukkan salah",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true
           });
        }
      } else {
        console.error("Proses Login Gagal:", error.message);
        // alert("Login gagal, silakan coba lagi");
        toast.update(loadingToastId, {
          render:  "Login gagal, silakan coba lagi",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }
    } finally {
      // toast.dismiss(loadingToastId)
      // setIsLoading(false); // Menyembunyikan loading
    }
  };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Masuk</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Yuk, Lanjutkan dengan akun kamu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
        {/* {isLoading && <Loading />} */}
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