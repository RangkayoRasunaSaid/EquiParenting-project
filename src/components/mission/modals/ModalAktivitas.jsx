import axios from "axios";
import { useEffect, useState } from "react";
import { titleCase } from "../../Breadcrumbs";
import { Navigate } from "react-router";
import PropTypes from 'prop-types';

export default function Modal({ members, member, categories }) {
    const [data, setData] = useState({
      id_member: member.id,
      title: "",
      category: "",
      date_start_act: "",
      date_stop_act: "",
      description: "",
      point: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const token = sessionStorage.getItem("token");
      if (!data.id_member || !data.title || !data.category || !data.date_start_act || !data.date_stop_act || !data.description || !data.point) {
        alert("Harap isi semua kolom");
        return;
      }
  
      console.log(data);
  
      axios
        .post("http://localhost:3000/activities", data, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          alert("Berhasil menambahkan member");
          window.location.reload();
        })
        .catch((error) => {
        //   alert("Penambahan member gagal");
          console.error("Error adding member:", error);
        })
        .finally(() => {
          setIsCreating(false);
        });
    };

    return (
        <div className="px-5" style={{color:"#675893"}}>
            <h1 className="text-center text-2lg my-4 font-bold">Task Baru</h1>
            <form onSubmit={handleSubmit} className="text-lg mb-2 font-bold">
                <div className="flex gap-4 mb-3">
                    <label for="inputTask">Judul Task:</label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="border-0 text-lg mb-1 font-bold"
                            id="inputTask"
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                            placeholder="Masukkan task baru disini"
                        />
                    </div>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <p for="inputPIC">Yang Bertugas: {titleCase(member.member_role)}</p>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputCategory">Kategori:</label>
                    <div className="col-sm-8">
                        <select value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} id="inputCategory" className="ms-2 border-2 form-select text-lg font-bold rounded-lg">
                            <option value="" disabled selected>Select One</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category} className="font-bold">{category}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="inputDescription" className="mb-1">Deskripsi:</label>
                </div>
                <div className="mb-3">
                    <textarea
                        type="text" 
                        className="w-full ring-2 ring-purple-500 text-base font-semibold"
                        rows='5' id="inputDescription"
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        placeholder="Berikan keterangan atau detail task baru disini..."
                        value={data.description}>
                    </textarea>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputPoint">Poin:</label>
                    <div className="col-sm-8">
                        <select value={data.point} onChange={(e) => setData({ ...data, point: e.target.value })} id="inputPoint" className="ms-2 border-2 form-select text-lg font-bold rounded-lg">
                            <option key='5' value='5' className="font-bold">Mudah: 5 Poin</option>
                            <option key='10' value='10' className="font-bold">Sedang: 10 Poin</option>
                            <option key='15' value='15' className="font-bold">Sulit: 15 Poin</option>
                            <option key='20' value='20' className="font-bold">Sangat Sulit: 20 Poin</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputPIC">Waktu Mulai:</label>
                    <div className="col-sm-8">
                        <input
                            type="datetime-local"
                            className="border-0 text-lg mb-1 font-bold"
                            onChange={(e) => setData({ ...data, date_start_act: e.target.value })}
                            id="inputTask" value={data.date_start_act} />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <label for="inputPIC">Waktu Selesai:</label>
                    <div className="col-sm-8">
                        <input type="datetime-local"
                        className="border-0 text-lg mb-1 font-bold"
                        onChange={(e) => setData({ ...data, date_stop_act: e.target.value })}
                        id="inputTask" value={data.date_stop_act} />
                    </div>
                </div>
                <div className="flex my-5 justify-center">
                    <button type="submit" className="bg-main-color text-white text-lg rounded-lg shadow-md p-4 font-semibold">TAMBAHKAN</button>
                </div>
            </form>
        </div>
    )
}
Modal.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        member_role: PropTypes.string,
    })).isRequired,
    member: PropTypes.shape({
        id: PropTypes.number.isRequired,
        member_role: PropTypes.string,
    }).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
};