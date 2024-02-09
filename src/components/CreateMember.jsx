import axios from "axios";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

const CreateMember = ({ members, setMembers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    member_role: "",
    avatar: null,
  });

  const [roles, setRoles] = useState(["ayah", "bunda"]);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    setRoles((prevRoles) => {
      const existingRoles = members.map((member) => member.member_role);
      const filteredRoles = prevRoles.filter((role) => !existingRoles.includes(role));
      return filteredRoles;
    });
  }, [members]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAvatarPreview(null);
  };

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsCreating(true);

    const token = sessionStorage.getItem("token");
    if (!data.name || !data.member_role) {
      alert("Harap isi semua kolom");
      setIsCreating(false);
      return;
    }

    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("member_role", data.member_role);
    formData.append("avatar", data.avatar);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    axios
      .post("http://localhost:3000/members", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(formData);
        alert("Berhasil menambahkan member");
        console.log(formData);
        window.location.reload();
        closeModal();
      })
      .catch((error) => {
        alert("Penambahan member gagal");
        console.error("Error adding member:", error);
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  return (
    <>
      {/* Tombol untuk membuka modal */}
      <button
        className={
          roles.length > 0
            ? "bg-ungu1 rounded-lg drop-shadow-lg py-3 lg:py-12 px-5 text-white"
            : "bg-ungu1 bg-opacity-60 rounded-lg drop-shadow-lg py-3 lg:py-12 px-5 text-white cursor-not-allowed"
        }
        onClick={roles.length > 0 ? openModal : null}
      >
        <p className="hidden lg:block lg:text-xl lg:font-semibold">Tambah Anggota</p>
        <p className="text-6xl font-bold lg:my-6">+</p>
        <p className="font-medium lg:text-xl lg:font-semibold">Max 2</p>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={
            isCreating
              ? "fixed inset-0  cursor-wait flex items-center justify-center bg-black bg-opacity-50 z-50"
              : "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          }
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Konten modal */}
            <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Buat Tim Baru</h2>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <div className="mb-4">
                <img
                  src={avatarPreview || "/src/assets/default.png"}
                  className="max-w-16 lg:max-w-24 max-h-16 lg:max-h-24 min-w-16 lg:min-w-24 min-h-16 lg:min-h-24 rounded-full"
                  alt="Avatar Preview"
                />
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setAvatarPreview(url);
                      setData({ ...data, avatar: file });
                    }
                  }}
                  className={isCreating ? "cursor-wait" : ""}
                />
                <label
                  role="img"
                  htmlFor="avatar"
                  className={
                    isCreating
                      ? "text-ungu1 p-4 lg:p-7 cursor-wait rounded-full absolute transform -translate-y-16 lg:-translate-y-24"
                      : "text-ungu1 p-4 lg:p-7 cursor-pointer rounded-full absolute transform -translate-y-16 lg:-translate-y-24"
                  }
                >
                  <FaCamera className="w-8 lg:w-10 h-8 lg:h-10" />
                </label>
              </div>

              <div className="text-base font-bold text-ungu1 mb-4">
                <div className="mb-2">
                  <label className="mr-2">Nama :</label>
                  <input
                    type="text"
                    placeholder="Masukkan Nama"
                    value={data.name}
                    disabled={isCreating}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={isCreating ? "w-40 focus:outline-none cursor-wait" : "w-40 focus:outline-none"}
                    required
                  />
                </div>

                <div>
                  <label className="mr-2">Peran :</label>
                  <select
                    className={isCreating ? "focus:outline-none" : "focus:outline-none"}
                    disabled={isCreating}
                    onChange={(e) => setData({ ...data, member_role: e.target.value })}
                  >
                    <option disabled selected>
                      Silahkan dipilih
                    </option>
                    {roles.map((role, index) => (
                      <option key={index}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tombol untuk menutup modal */}
              <button
                className={
                  isCreating
                    ? "bg-ungu2 cursor-wait text-ungu1 font-bold py-2 px-4 rounded inline-flex items-center mb-4 w-32"
                    : "bg-ungu2 hover:bg-ungu1 text-ungu1 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mb-4 w-32"
                }
                type="submit"
                disabled={isCreating}
              >
                Tambahkan
              </button>
              <button
                className={
                  isCreating
                    ? "bg-ungu2 cursor-wait text-ungu1 font-bold py-2 px-4 rounded inline-flex items-center w-32 pl-9"
                    : "bg-ungu2 hover:bg-ungu1 text-ungu1 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center w-32 pl-9"
                }
                onClick={closeModal}
                disabled={isCreating}
              >
                Tutup
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateMember;
