import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Fetch user profile data when component mounts
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    const authToken = sessionStorage.getItem("token");
    try {
      const response = await fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setUsername(data.username); // Optionally set username state
        console.log(userData);
      } else {
        console.error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need to send authorization headers if required
        },
        body: JSON.stringify({ username }),
      });
      if (response.ok) {
        console.log('Profile updated successfully');
        getUserProfile(); // Refresh profile data
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You might need to send authorization headers if required
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      if (response.ok) {
        console.log('Password updated successfully');
        setOldPassword('');
        setNewPassword('');
      } else {
        console.error('Failed to update password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] bg-fixed">
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Akun Terhubung</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Atur Profile Akunmu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
          <form onSubmit={handleUpdateProfile}>
            <div className="flex items-center gap-4 lg:gap-8">
              <div>
                <img src="https://ih1.redbubble.net/image.1046392292.3346/st,medium,507x507-pad,600x600,f8f8f8.jpg" className="max-w-16 lg:max-w-24 rounded-full" />
                <input type="file" id="file" style={{ display: "none" }} />
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-48 p-2 rounded-full"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>

          <form onSubmit={handleUpdatePassword}>
            <div>
              <div>
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Lama"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
                <br />
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Baru"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <br />
              </div>
              <div className="flex justify-center my-5">
                <button
                  type="submit"
                  className="hover:bg-ungu1 bg-ungu1/50 text-white text-sm lg:text-base w-48 p-2 rounded-full"
                >
                  Ubah Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
