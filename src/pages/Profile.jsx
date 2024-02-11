import axios from "axios";
import { useState, useEffect } from "react";
import NavbarAcc from "../components/NavbarAcc";

const Profile = () => {
  const [userData, setUserData] = useState({ username: "", avatar: "" });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/profile", { headers: { Authorization: token } })
      .then((response) => {
        setUserData(response.data);
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        alert("Pengambilan Data Gagal");
        window.location.reload();
      });
  }, []);

  const handleUsernameChange = (event) => {
    setUserData({ ...userData, username: event.target.value });
  };

  // upload profile belum bisa
  // const handleFileChange = (event) => {
  // };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    axios
      .put(
        "https://outrageous-gold-twill.cyclic.app/update-profile",
        {
          username: userData.username,
          avatar: userData.avatar,
        },
        { headers: { Authorization: token } }
      )
      .then((response) => {
        console.log(response.data.message);
        alert("Profile berhasil diubah");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Update Profile Gagal");
      });
    setIsLoading(false);
  };

  const handlePasswordUpdate = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const token = sessionStorage.getItem("token");

    if (passwordData.newPassword.length < 8) {
      alert("Password harus memiliki minimal 8 karakter!");
      setIsLoading(false);
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("Password baru dan konfirmasi password baru tidak cocok");
      setIsLoading(false);
      return;
    }

    const requestData = {
      oldPassword: passwordData.oldPassword,
      newPassword: passwordData.newPassword,
    };

    axios
      .put("https://outrageous-gold-twill.cyclic.app/update-password", requestData, {
        headers: { Authorization: token },
      })
      .then((response) => {
        alert(response.data.message);
        setPasswordData({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        alert("Update Password Gagal");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!isDataLoaded) {
    return (
      <>
        <div className="bg-[url('/src/assets/background2.jpg')] min-h-screen">
          <NavbarAcc />
          <div className="w-full h-full flex items-center justify-center my-48">
            <div className="animate-spin rounded-full h-32 w-32 border-8 border-dotted border-ungu1"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div
      className={
        isLoading
          ? "bg-[url('/src/assets/background2.jpg')] min-h-screen cursor-wait"
          : "bg-[url('/src/assets/background2.jpg')] min-h-screen"
      }
    >
      <NavbarAcc />
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Akun Terhubung</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Atur Profile Akunmu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
          <form onSubmit={handleProfileUpdate}>
            {/* Form components for profile update */}
            <div className="flex items-center gap-4 lg:gap-8">
              <div>
                <img src={userData.avatar || "/src/assets/default.png"} className="max-w-16 lg:max-w-24" />
                <input type="file" id="file" style={{ display: "none" }} />
                {/* onChange={handleFileChange} gambar belum bisa*/}
                <label
                  htmlFor="file"
                  className="bg-white px-2 py-1 lg:px-3 lg:py-2 rounded-full cursor-pointer absolute transform translate-x-10 -translate-y-16 lg:translate-x-16 lg:-translate-y-24"
                >
                  ✎
                </label>
              </div>
              <div>
                <label className="lg:text-lg">Username</label>
                <br />
                <input
                  className="w-full lg:w-64 my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="text"
                  placeholder={userData.username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                disabled={isLoading}
                className={
                  isLoading
                    ? "bg-ungu1/50 bg-opacity-70 cursor-wait text-white text-sm lg:text-base w-48 p-2 rounded-full"
                    : "hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-48 p-2 rounded-full"
                }
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
          {/* End of Form for profile update */}

          <form onSubmit={handlePasswordUpdate}>
            {/* Form components for password update */}
            <div>
              <div>
                <input
                  name="oldPassword"
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Lama"
                  onChange={handlePasswordChange}
                  required
                />
                <br />
                <input
                  name="newPassword"
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Baru"
                  onChange={handlePasswordChange}
                  required
                />
                <br />
                <input
                  name="confirmNewPassword"
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Konfirmasi Password Baru"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={
                    isLoading
                      ? "bg-ungu1/50 bg-opacity-70 cursor-wait text-white text-sm lg:text-base w-48 p-2 rounded-full"
                      : "hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-48 p-2 rounded-full"
                  }
                >
                  Ubah Password
                </button>
              </div>
            </div>
          </form>
          {/* End of Form for password update */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
