import axios from "axios";
import { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { titleCase } from "../../Breadcrumbs";

export default function ModalCreateMember({ members, setMemberData, toggleModal }) {
    const [data, setData] = useState({
      name: "",
      member_role: "",
      avatar: null,
    });

    // const [roles, setRoles] = useState(["ayah", "bunda"]);
    const roles = ["ayah", "bunda", 'others'];
    // const [avatarPreview, setAvatarPreview] = useState(null);

    // useEffect(() => {
    //   setRoles((prevRoles) => {
    //     const existingRoles = members.map((member) => member.member_role);
    //     const filteredRoles = prevRoles.filter((role) => !existingRoles.includes(role));
    //     return filteredRoles;
    //   });
    // }, [members]);

    const [isCreating, setIsCreating] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsCreating(true);
  
      const token = sessionStorage.getItem("token");
      if (!data.name || !data.member_role) {
        toast.warning("Harap isi semua kolom!");
        // alert("Harap isi semua kolom");
        setIsCreating(false);
        return;
      }

      const loadingToastId = toast.loading('Adding a member ...')
  
      axios
        .post("http://localhost:3000/members", data, {
          headers: {
            Authorization: token,
          },
        })
        .then(response => {
          const { id, name, member_role } = response.data.member; // Destructure necessary data
          const Score = {score: 0}

          const existingStartDate = members.map((member) => member.Rewards[0]?.start_date);
          const existingEndDate = members.map((member) => member.Rewards[0]?.end_date);

          if (existingStartDate.length > 0 && existingEndDate.length > 0) {
            // Create reward for the new member using the existing reward date
            axios.post("http://localhost:3000/reward", {
                spinned_at: '',
                start_date: existingStartDate[0],
                end_date: existingEndDate[0],
                id_member: id
              }, {
                headers: { Authorization: token }
            }).then((response) => {
                console.log("Reward created successfully for member with ID:", id);
                const Rewards = [response.data.reward]
                const updatedMemberData = [...members, { Rewards, Score, id, name, member_role }];
                setMemberData(updatedMemberData);
            }).catch((error) => {
                console.error("Error creating reward for member with ID:", id, error);
            })
          }

          // alert("Berhasil menambahkan member");
          toggleModal()
          toast.update(loadingToastId, {
            render:  "Berhasil menambahkan member",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true
          });
        })
        .catch((error) => {
          toast.update(loadingToastId, {
            render:  "Penambahan member gagal",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true
          });
        //   alert("Penambahan member gagal");
          console.error("Error adding member:", error);
        })
        .finally(() => {
          setIsCreating(false);
        });
    };

    return (
        <div className="p-5">
            {/* Konten modal */}
            <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Buat Tim Baru</h2>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <img
                  src={avatarPreview || "/src/assets/default.png"}
                  className="max-w-16 lg:max-w-24 max-h-16 lg:max-h-24 min-w-16 lg:min-w-24 min-h-16 lg:min-h-24rounded-full"
                  alt="Avatar Preview"
                />
                <input
                  type="file"
                  id="avatar"
                  style={{ display: "none" }}
                  disabled={isCreating}
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
              </div> */}

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
                  />
                </div>

                <div>
                  <label className="mr-2">Peran :</label>
                  <select
                    className={isCreating ? "focus:outline-none" : "focus:outline-none"}
                    disabled={isCreating}
                    onChange={(e) => setData({ ...data, member_role: e.target.value })}
                  >
                    <option value="" disabled selected>Silahkan pilih</option>
                    {roles.map((role, index) => (
                      <option value={role} key={index}>{titleCase(role)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                className={
                  isCreating
                    ? "bg-ungu2 cursor-wait text-ungu1 font-bold py-2 px-4 rounded inline-flex items-center w-32"
                    : "bg-ungu2 hover:bg-ungu1 text-ungu1 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center w-32"
                }
                type="submit"
                disabled={isCreating}
              >
                Tambahkan
              </button>
            </form>
        </div>
    )
}
// ModalCreateMember.propTypes = {
//   members: PropTypes.array.isRequired,
//   setMembers: PropTypes.func.isRequired,
// };