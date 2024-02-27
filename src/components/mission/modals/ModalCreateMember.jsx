import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { titleCase } from "../../Breadcrumbs";
import config from "../../../config/config";

export default function ModalCreateMember({ members, setUpdateMembers }) {
  const buttonRef = useRef(null);
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = sessionStorage.getItem("token");
      if (!data.name || !data.member_role) {
        toast.warning("Harap isi semua kolom!");
        setIsCreating(false);
        return;
      }
      buttonRef.current.classList.add('modal-button');
      buttonRef.current.click();
      const loadingToastId = toast.loading('Adding a member ...');
      try {
        const response = await axios.post(config.apiUrl + "/members", data, {
          headers: {
            Authorization: token,
          },
        });
    
        const { id } = response.data.member;
        const startDates = members
          .filter(m => m.Rewards[0] && typeof m.Rewards[0].start_date === 'string')
          .map(m => m.Rewards[0].start_date);

        const endDates = members
          .filter(m => m.Rewards[0] && typeof m.Rewards[0].end_date === 'string')
          .map(m => m.Rewards[0].end_date);

        if (startDates.length > 0 && endDates.length > 0) {
          // Create reward for the new member using the existing reward date
          const rewardResponse = await axios.post(config.apiUrl + "/reward", {
            spinned_at: '',
            start_date: startDates[startDates.length - 1],
            end_date: endDates[endDates.length - 1],
            id_member: id
          }, {
            headers: { Authorization: token }
          });
          console.log("Reward created successfully for member with ID:", id);
        }
        toast.update(loadingToastId, { render:  `Berhasil menambahkan ${titleCase(data.name)} sebagai ${titleCase(data.member_role)}`, isLoading: false, autoClose: 5000, closeOnClick: true });
      
      } catch (error) {
        toast.update(loadingToastId, { render: "Penambahan member gagal", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
        console.error("Error adding member:", error);
      } finally {
        setUpdateMembers(Date.now())
      }
    };
    
    return (
        <div className="p-5">
            {/* Konten modal */}
            <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Tambah Member</h2>
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
                    className="focus:outline-none"
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
                ref={buttonRef}
                className='bg-ungu2 text-ungu1 font-bold py-2 px-4 rounded inline-flex items-center w-32'
                type="submit"
                disabled={isCreating}>Tambahkan</button>
            </form>
        </div>
    )
}
// ModalCreateMember.propTypes = {
//   members: PropTypes.array.isRequired,
//   setMembers: PropTypes.func.isRequired,
// };