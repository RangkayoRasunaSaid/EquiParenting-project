import NavbarAcc from "../components/navbar/Navbar";

const Profile = () => {
  //   const [data, setData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleRegister = async (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="bg-[url('/src/assets/background2.jpg')] bg-fixed">
      <NavbarAcc />
      <div className="text-center pt-10 text-ungu1">
        <h1 className="text-2xl lg:text-3xl font-bold">Akun Terhubung</h1>
        <h3 className="text-lg lg:text-xl font-medium my-4 lg:my-6">Atur Profile Akunmu!</h3>
      </div>
      <div className="flex justify-center mx-auto pb-10">
        <div className="bg-ungu2 w-80 lg:w-max p-8 rounded-3xl text-ungu1 font-medium shadow-lg">
          <form>
            <div>
              <div></div>
              <div>
                <label className="lg:text-lg">Username</label>
                <br />
                <input
                  className="w-full my-2 lg:my-3 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="text"
                  placeholder=""
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

          <form>
            <div>
              <div>
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Lama"
                  required
                />
                <br />
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Masukkan Password Baru"
                  required
                />
                <br />
                <input
                  className="w-full lg:w-96 my-2 h-9 lg:h-12 rounded-full px-4 focus:outline-none focus:ring-4 focus:ring-ungu1"
                  type="password"
                  placeholder="Konfirmasi Password Baru"
                  required
                />
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
