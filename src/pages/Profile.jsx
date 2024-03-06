import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, fetchProfile, updatePassword } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const override = { display: "block", margin: "auto auto" };

const Profile = () => {
  const navigate = useNavigate()
  if (!sessionStorage.getItem('token')) navigate("/login")

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.user)
  const [username, setUsername] = useState('');
  console.log(error);

  const [profile, setProfile] = useState(user && user.username || { avatar: "", username: "" });
  const [password, setPassword] = useState({ oldPassword: "", newPassword: "" });

  useEffect(() => {
    dispatch(fetchProfile())
    if (!error) setProfile(user)
  }, []);

  useEffect(() => { 
    if (!profile || !profile.username || !error) setProfile(user)
    if (user && !username && !error) setUsername(user.username)
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!profile.username) return toast.warning('Harap lengkapi semua kolom!')
    if (profile.username === username) return toast.warning('Isi dengan Username Baru')

    dispatch(updateProfile(profile, username, dispatch))
    setUsername(profile.username)
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    dispatch(updatePassword(password))
    setPassword({ newPassword: '', oldPassword: '' })
  };
  console.log(profile);

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] bg-fixed">
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Akun Terhubung</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Atur Profile Akunmu!</h3>
      </div>
      {loading || !profile ? (
        <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
      ) : (
        <div className="flex justify-center mx-auto pb-10">
          <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
            <form onSubmit={handleUpdateProfile}>
              <div className="flex items-center gap-4 lg:gap-8">
                  <div><img src={profile && profile.avatar ?
                      profile.avatar : "https://ih1.redbubble.net/image.1046392292.3346/st,medium,507x507-pad,600x600,f8f8f8.jpg"}
                      className="max-w-16 lg:max-w-24 rounded-full"
                    />
                    <input
                      type="file" id="file" style={{ display: "none" }}
                      onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
                    />
                    <label htmlFor="file" className="hover:bg-white/80 bg-white px-2 py-1 lg:px-3 lg:py-2 rounded-full cursor-pointer absolute transform translate-x-10 -translate-y-16 lg:translate-x-16 lg:-translate-y-24">
                      ✎
                  </label></div>
                <div>
                  <label className="lg:text-lg">Username</label>
                  <br />
                    <input
                      className="w-full lg:w-64 my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                      type="text"
                      value={profile ? profile.username : ''}
                      onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                      placeholder="Username"
                    />
                </div>
              </div>
              <div className="flex justify-center my-5">
                <button disabled={!profile || !profile.username || username === profile.username} type="submit" className="hover:bg-ungu1/50 disabled:bg-ungu1/50 bg-ungu1 text-white text-sm lg:text-base w-48 p-2 rounded-full">
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
                    value={password.oldPassword}
                    onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })}
                  />
                  <br />
                  <input
                    className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                    type="password"
                    placeholder="Masukkan Password Baru"
                    value={password.newPassword}
                    onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                  />
                  <br />
                </div>
                <div className="flex justify-center my-5">
                  <button disabled={!password.newPassword || !password.oldPassword} type="submit" className="hover:bg-ungu1/50 disabled:bg-ungu1/50 bg-ungu1 text-white text-sm lg:text-base w-48 p-2 rounded-full" >
                    Ubah Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;