import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { titleCase } from "../../Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { createMember } from "../../../redux/slices/memberSlice";

export default function ModalCreateMember() {
  const { members, loading } = useSelector(state => state.member)
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  let startDate = ''
  let endDate = ''

  if (members && members.length > 0 && members[0].Rewards.length > 0) {
    startDate = members[0].Rewards[0].start_date,
    endDate = members[0].Rewards[0].end_date
  }

  const [data, setData] = useState({
    name: "",
    member_role: "",
    avatar: null,
    start_date: startDate,
    end_date: endDate
  });

  const roles = ["ayah", "bunda", 'others'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.member_role) return toast.warning("Harap isi semua kolom!")
    buttonRef.current.classList.add('modal-button');
    buttonRef.current.click();
    dispatch(createMember(data))
  };
  
  return (
      <div className="p-5">
          <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Tambah Member</h2>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="text-base font-bold text-ungu1 mb-4">
              <div className="mb-2">
                <label className="mr-2">Nama :</label>
                <input
                  type="text"
                  placeholder="Masukkan Nama"
                  value={data.name}
                  disabled={loading}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className={loading ? "w-40 focus:outline-none cursor-wait" : "w-40 focus:outline-none"}
                />
              </div>

              <div>
                <label className="mr-2">Peran :</label>
                <select
                  className="focus:outline-none"
                  disabled={loading}
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
              disabled={loading}>Tambahkan</button>
          </form>
      </div>
  )
}