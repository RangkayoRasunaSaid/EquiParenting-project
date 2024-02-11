import { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { MdAdd } from "react-icons/md";
import axios from 'axios';

const ButtonAddActivity = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [taskData, setTaskData] = useState({
      judulTask: '',
      yangBertugas: '',
      kategori: '',
      deskripsi: '',
      point: '',
      waktuMulai: '',
      waktuSelesai: '',
      gambar: '',
      disetujuiOleh: ''
    });
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setTaskData({
        ...taskData,
        [name]: value,
      });
    };
  
    const handleDateTimeChange = (e) => {
      const { name, value } = e.target;
      setTaskData({
        ...taskData,
        [name]: value,
      });
    };
  
    const handleSubmit = async () => {
      try {
        // Kirim data ke API menggunakan axios
        const response = await axios.post('https://6582da8502f747c8367a60e5.mockapi.io/schedule/aktivitas', taskData);
        console.log('Response:', response.data);
        // Alert pengguna jika data berhasil dikirim
        alert('Aktivitas berhasil ditambahkan!');
        // Setelah berhasil, tutup modal
        closeModal();
      } catch (error) {
        console.error('Error:', error);
        // Alert pengguna jika terjadi kesalahan
        alert('Gagal menambahkan aktivitas. Silakan coba lagi.');
      }
    };
  
    return (
      <div>
        {/* Tombol untuk membuka modal */}
        <button onClick={openModal} className="bg-main-color hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        <MdAdd className='text-3xl'></MdAdd>
        </button>
  
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
                <div className="flex justify-end mb-2 absolute top-4 right-4">
                    {/* Tombol close dengan ikon */}
                    <IoCloseCircle onClick={closeModal} className="text-black-500 hover:text-red-500 cursor-pointer" size={24} />
                </div>
            <div className="m-8 my-20 max-w-[400px] mx-auto relative">
                <div className="mb-8">
                    <h1 className="mb-4 text-3xl font-extrabold">Membuat Aktivitas Baru </h1>
                </div>
                <form>
                    <div className="mb-4">
                      <label htmlFor="judulTask" className="block text-sm font-medium text-gray-600">
                        Judul Task:
                      </label>
                      <input
                        type="text"
                        id="judulTask"
                        name="judulTask"
                        value={taskData.judulTask|| ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      />
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="yangBertugas" className="block text-sm font-medium text-gray-600">
                        Yang bertugas:
                      </label>
                      <select
                        id="yangBertugas"
                        name="yangBertugas"
                        value={taskData.yangBertugas || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      >
                        <option value="" disabled selected>Silahkan Pilih</option>
                        <option value="ayah">Ayah</option>
                        <option value="bunda">Bunda</option>
                      </select>
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="kategori" className="block text-sm font-medium text-gray-600">
                        Kategori:
                      </label>
                      <select
                        id="kategori"
                        name="kategori"
                        value={taskData.kategori || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      >
                        <option value=""disabled selected>Silahkan Pilih</option>
                        <option value="Baby">Baby</option>
                        <option value="Dapur">Dapur</option>
                        <option value="Laundry">Laundry</option>
                        <option value="Kebun/Teras">Kebun/Teras</option>
                        <option value="Liburan">Liburan</option>
                        <option value="Kamar Mandi">Kamar Mandi</option>
                        <option value="Kamar Tidur">Kamar Tidur</option>
                        <option value="Edukasi">Edukasi</option>
                        <option value="Ruang Makan">Ruang Makan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-600">
                        Deskripsi:
                      </label>
                      <textarea
                        id="deskripsi"
                        name="deskripsi"
                        value={taskData.deskripsi || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full"
                      />
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="point" className="block text-sm font-medium text-gray-600">
                        Poin:
                      </label>
                      <select
                        id="point"
                        name="point"
                        value={taskData.point || ''}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      >
                        <option value="" disabled selected>Silahkan Pilih</option>
                        <option value="5">Mudah: 5 Poin</option>
                        <option value="10">Sedang: 10 Poin</option>
                        <option value="15">Sulit: 15 Poin</option>
                        <option value="20">Sangat Sulit: 20 Poin</option>
                      </select>
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="waktuMulai" className="block text-sm font-medium text-gray-600">
                        Waktu Mulai:
                      </label>
                      <input
                        type="datetime-local"
                        id="waktuMulai"
                        name="waktuMulai"
                        value={taskData.waktuMulai || ''}
                        onChange={handleDateTimeChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      />
                    </div>
  
                    <div className="mb-4">
                      <label htmlFor="waktuSelesai" className="block text-sm font-medium text-gray-600">
                        Waktu Selesai:
                      </label>
                      <input
                        type="datetime-local"
                        id="waktuSelesai"
                        name="waktuSelesai"
                        value={taskData.waktuSelesai || ''}
                        onChange={handleDateTimeChange}
                        className="mt-1 p-2 border rounded-md w-full"
                        required
                      />
                    </div>
  
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="p-3 bg-black rounded-full text-white font-semibold"
                      >
                        Tambahkan
                      </button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default ButtonAddActivity;