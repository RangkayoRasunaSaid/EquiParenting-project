import axios from "axios";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function ModalCreateMember() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [avatar, setAvatar] = useState('');
  
    const handleSubmit = async (e) => {  
      try {
        const response = await axios.post('http://localhost:3000/member', {
          name,
          member_role: role,
          avatar,
        });
  
        console.log(response.data); // assuming the backend responds with a message
        // You can add further logic here, like showing a success message or redirecting the user
      } catch (error) {
        console.error('Error adding member:', error);
        // You can handle errors here, like showing an error message to the user
      }
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Buat Tim Baru</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="mb-4">
                    <img src="https://ih1.redbubble.net/image.1046392292.3346/st,medium,507x507-pad,600x600,f8f8f8.jpg" className="max-w-16 lg:max-w-24 rounded-full" />
                    <input type="file" id="avatar" style={{ display: "none" }} />
                    <label
                        role="img"
                        htmlFor="avatar"
                        className="text-ungu1 p-4 lg:p-7 cursor-pointer rounded-full absolute transform -translate-y-16 lg:-translate-y-24"
                    >
                        <FaCamera className="w-8 lg:w-10 h-8 lg:h-10" />
                    </label>
                </div>

                <div className="text-base font-bold text-ungu1">
                    <div className="mb-2">
                        <label className="mr-2">Nama :</label>
                        <input type="text" placeholder="Masukkan Nama" className="w-40 focus:outline-none" required />
                    </div>

                    <div>
                        <label className="mr-2">Peran :</label>
                        <select className="focus:outline-none">
                        <option disabled>Silahkan dipilih</option>
                        <option>Ayah</option>
                        <option>Bunda</option>
                        <option>Lainnya</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-main-color text-white text-base rounded-md shadow-md mt-5 py-2 px-4 font-semibold">Tambah Member</button>
                    </div>
                </div>
            </form>
        </div>
    )
}