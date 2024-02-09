import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const CreateMember = () => {
  // State untuk mengontrol tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk menampilkan modal saat tombol ditekan
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menyembunyikan modal saat tombol tutup ditekan
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Tombol untuk membuka modal */}
      <button className="bg-ungu1 rounded-lg drop-shadow-lg py-3 lg:py-12 px-5 text-white" onClick={openModal}>
        <p className="hidden lg:block lg:text-xl lg:font-semibold">Tambah Anggota</p>
        <p className="text-6xl font-bold lg:my-6">+</p>
        <p className="font-medium lg:text-xl lg:font-semibold">Max 2</p>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Konten modal */}
            <h2 className="text-2xl text-center text-ungu1 font-bold mb-4">Buat Tim Baru</h2>
            <form className="flex flex-col items-center">
              <div className="mb-4">
                <img src="/src/assets/default.png" className="max-w-16 lg:max-w-24" />
                <input type="file" id="avatar" style={{ display: "none" }} />
                <label
                  role="img"
                  htmlFor="avatar"
                  className="text-ungu1 p-4 lg:p-7 cursor-pointer rounded-full absolute transform -translate-y-16 lg:-translate-y-24"
                >
                  <FaCamera className="w-8 lg:w-10 h-8 lg:h-10" />
                </label>
              </div>

              <div className="text-base font-bold text-ungu1 mb-4">
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
              </div>

              {/* Tombol untuk menutup modal */}
              <button
                className="bg-ungu2 hover:bg-ungu1 text-ungu1 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={closeModal}
              >
                Tambahkan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateMember;