import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/actions/profile';
import Loading from '../Loading';
import { toast } from 'react-toastify';
import config from '../config/config';

const Profile = () => {
  // const dispatch = useDispatch();
  // const userProfile = useSelector((state) => state.userProfile);
  const [profile, setProfile] = useState({
    avatar: "",
    username: ""
  });
  const [password, setPassword] = useState({
    old: "",
    new: ""
  });
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);

  // useEffect(() => {
  //   dispatch(fetchUserProfile());
  // }, [dispatch]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // const [userData, setUserData] = useState({});
  // const [username, setUsername] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      const loadingToastId = toast.loading('Getting profile info ...')
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get(config.apiUrl + '/profile', { headers: { Authorization: token } });
        setProfile(response.data);
        toast.update(loadingToastId, {
          render:  "Your Profile is Ready",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });

      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.update(loadingToastId, {
          render:  "Error fetching profile",
          isLoading: error,
          type: "success",
          autoClose: 5000,
          closeOnClick: true
        });
      }
    };

    getUserProfile();
  }, []);

  // useEffect(() => {
  //   // Fetch user profile data when component mounts
  //   getUserProfile();
  // }, []);

  // const getUserProfile = async () => {
  //   const authToken = sessionStorage.getItem("token");
  //   try {
  //     const response = await fetch('http://localhost:3000/profile', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${authToken}`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUserData(data);
  //       setUsername(data.username); // Optionally set username state
  //       console.log(userData);
  //     } else {
  //       console.error('Failed to fetch user profile');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user profile:', error);
  //   }
  // };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToastId = toast.loading('Updating profile ...')

    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(config.apiUrl + '/update-profile', profile,{
        headers: { Authorization: token } 
      });
      if (response.ok) {
        console.log('Profile updated successfully');
        toast.update(loadingToastId, {
          render:  "Profile updated successfully",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
        fetchUserProfile(); // Refresh profile data
      } else {
        console.error(response);
        toast.update(loadingToastId, {
          render:  "Profile updated successfully",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
        fetchUserProfile();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.update(loadingToastId, {
        render:  "Error updating profile",
        isLoading: error,
        type: "success",
        autoClose: 5000,
        closeOnClick: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const loadingToastId = toast.loading('Updating password ...')
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.put(config.apiUrl + '/update-profile', password,{
        headers: { Authorization: token } 
      });
      if (response.ok) {
        console.log('Password updated successfully');
        toast.update(loadingToastId, {
          render:  "Password updated successfully",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
        setPassword({ new: '', old: '' })
      } else {
        console.error('Failed to update password');
        toast.update(loadingToastId, {
          render:  "Password updated successfully",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true
        });
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.update(loadingToastId, {
        render:  "Error updating password",
        isLoading: error,
        type: "success",
        autoClose: 5000,
        closeOnClick: true
      });
    }
  };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] bg-fixed">
      {/* {isLoading && <Loading />} */}
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Akun Terhubung</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Atur Profile Akunmu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
          <form onSubmit={handleUpdateProfile}>
            <div className="flex items-center gap-4 lg:gap-8">
              <div>
                <img src={profile.avatar ?
                  profile.avatar : "https://ih1.redbubble.net/image.1046392292.3346/st,medium,507x507-pad,600x600,f8f8f8.jpg"}
                  className="max-w-16 lg:max-w-24 rounded-full"
                />
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
                />
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
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
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
                  value={password.old}
                  onChange={(e) => setPassword({ ...password, old: e.target.value })}
                  required
                />
                <br />
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Baru"
                  value={password.new}
                  onChange={(e) => setPassword({ ...password, new: e.target.value })}
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
