import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import Loading from "../Loading";
import config from "../config/config";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
      // alert("Harap lengkapi semua kolom!");
      toast.warning("Harap lengkapi semua kolom!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      // alert("Harap masukkan alamat email yang valid!");
      toast.warning("Harap masukkan alamat email yang valid!");
      return;
    }

    if (data.password.length < 8) {
      // alert("Password harus memiliki minimal 8 karakter!");
      toast.warning("Password harus memiliki minimal 8 karakter!");
      return;
    }

    if (data.password !== data.confirmPassword) {
      // alert("Password dan Konfrimasi Password tidak sesuai");
      toast.warning("Password dan Konfrimasi Password tidak sesuai");
      return;
    }

    const loadingToastId = toast.loading('Signing up...')

    try {
      const response = await axios.post(config.apiUrl + "/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      
      toast.update(loadingToastId, {
        render:  "Pendaftaran akun berhasil!",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true
      });

      window.location.href = "/login";
      window.scrollTo(0, 0)
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          // alert("Email sudah terdaftar, silakan gunakan email lain.");
          toast.update(loadingToastId, {
            render:  "Email sudah terdaftar, silakan gunakan email lain.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true
          });
        } else {
          console.error("Pendaftaran Akun Gagal:", error.message);
          // alert("Pendaftaran akun anda gagal! Silakan coba lagi");
          toast.update(loadingToastId, {
            render:  "Pendaftaran akun anda gagal! Silakan coba lagi",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true
          });
        }
      }
    } finally {
      // toast.dismiss(loadingToastId)
      // setIsLoading(false); // Menyembunyikan loading
    }
  };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Daftar</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Yuk, Bergabung dengan kami!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">

        {/* {isLoading && <Loading />} */}
          <form onSubmit={handleRegister}>
            <div>
              <div>
                <label className="lg:text-lg">Username</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="text"
                  value={data.username}
                  onChange={(e) => setData({ ...data, username: e.target.value })}
                />
              </div>
              <div>
                <label className="lg:text-lg">E-mail</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                />
              </div>
              <div>
                <label className="lg:text-lg">Konfirmasi Password</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  value={data.confirmPassword}
                  onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                />
              </div>

              {/* ceklis persetujuan user atas syarat dan kebijakan privasi */}

              {/* <div className="text-xxs my-2">
                <label className="flex gap-3 items-start">
                  <input type="checkbox" name="agree" required />
                  <div className="text">
                    <p>
                      Saya menyetujui{" "}
                      <Link to="#" className="font-extrabold">
                        Syarat & Ketentuan
                      </Link>{" "}
                      dan{" "}
                      <Link to="#" className="font-extrabold">
                        Kebijakan Privasi
                      </Link>{" "}
                      yang berlaku
                    </p>
                  </div>
                </label>
              </div> */}

              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-20 lg:w-28 p-2 rounded-full"
                >
                  Daftar
                </button>
              </div>
            </div>
          </form>
          <div className="flex gap-24 lg:gap-52 text-xxs lg:text-sm">
            <span>Sudah memiliki akun?</span>
            <Link to="/login" className="font-extrabold">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;