import axios from 'axios';
import { useState } from 'react';

export default function ModalPeriode({ memberId }) {
    console.log(memberId);
    const [data, setData] = useState({
      member_id: memberId,
      start_date: "",
      end_date: "",
      spinned_at: ''
    });

    // Handle input changes for end time
    const handleEndTimeChange = (e) => {
        const endDate = e.target.value;
        // Check if end date is after start date
        if (endDate < new Date().toISOString().slice(0, 16)) {
            alert("End date must be after today's date");
            return;
        }
        if (endDate <= data.startTime) {
            alert("End date must be after start date");
            return;
        }
        setData({ ...data, end_date: e.target.value });
    };

    // Handle input changes for start time
    const handleStartTimeChange = (e) => {
        const startDate = e.target.value;
        console.log(data);
        // Check if start date is after today's date
        if (startDate < new Date().toISOString().slice(0, 16)) {
            alert("Start date must be after today's date");
            return;
        }
        // Check if start date is before end date
        if (data.endTime < startDate && data.endTime) {
            alert("Start date must be before end date");
            return;
        }
        setData({ ...data, start_date: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        // Save start time and end time to localStorage
        e.preventDefault();
        console.log(data.start_date);
    
        const token = sessionStorage.getItem("token");
        if (!data.start_date || !data.end_date) {
          alert("Harap isi semua kolom");
          return;
        }
    
        console.log(data);
    
        axios
          .post("http://localhost:3000/reward", data, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            alert("Berhasil menambahkan periode");
            window.location.reload();
            closeModal();
          })
          .catch((error) => {
          //   alert("Penambahan member gagal");
            console.error("Error adding date period:", error);
          })
          .finally(() => {
            setIsCreating(false);
          });
    };

    return (
        <div className="px-5">
            <h1 className="text-center font-bold text-lg my-5">Atur Rentang Waktu Misi</h1>
            <h1 className="font-semibold text-sm">Petunjuk:</h1>
            <p className="text-sm mb-5">Atur rentang waktu kapan misi dimulai dan selesai untuk menentukan periode Anda atau member agar dapat melakukan pemutaran hadiah di Pusat Reward.</p>
            <form className="mb-2 font-semibold" onSubmit={handleSubmit}>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <label htmlFor="endTime" className="col-span-2">Waktu Mulai:</label>
                    <div className="col-span-3">
                        <input
                            type="datetime-local"
                            name="endTime"
                            id="endTime"
                            // value="2024-02-13T03:35"
                            // value={data.start_date}
                            onChange={handleStartTimeChange} />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <label htmlFor="startTime" className="col-span-2">Waktu Selesai:</label>
                    <div className="col-span-3">
                        <input
                            type="datetime-local"
                            name="startTime"
                            id="startTime"
                            // value="2024-02-14T03:35"
                            // value={data.end_date}
                            onChange={handleEndTimeChange} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-main-color text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">Atur</button>
                </div>
            </form>
        </div>
    );
}
