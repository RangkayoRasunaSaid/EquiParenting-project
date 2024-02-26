import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import config from '../../../config/config';

export default function ModalPeriode({ memberIds, setUpdateMembers }) {
    const [data, setData] = useState({
      spinned_at: '',
      start_date: new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":")),
      end_date: "",
      id_member: null
    });

    const handleEndTimeChange = (e) => {
        const endDate = e.target.value;
        if (endDate < new Date().toISOString().slice(0, 16)) {
            toast.warning("End date must be after today's date");
            return;
        }
        if (endDate <= data.startTime) {
            toast.warning("End date must be after start date");
            return;
        }
        setData({ ...data, end_date: e.target.value });
    };

    const handleStartTimeChange = (e) => {
        const startDate = e.target.value;
        if (startDate < new Date().toISOString().slice(0, 16)) {
            toast.warning("Start date must be after today's date");
            return;
        }
        if (data.endTime < startDate && data.endTime) {
            toast.warning("Start date must be before end date");
            return;
        }
        setData({ ...data, start_date: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        if (!data.start_date || !data.end_date) {
            toast.warning("Harap isi semua kolom");
            return;
        }
        
        try {
          // Create rewards for each member asynchronously
          await Promise.all(memberIds.map(async (memberId) => {
            const requestData = {
              spinned_at: '',
              start_date: data.start_date,
              end_date: data.end_date,
              id_member: memberId
            };
      
            // Create reward for the member
            const rewardResponse = await axios.post(config.apiUrl + "/reward", requestData, {
              headers: {
                Authorization: token,
              },
            });
            console.log("Reward created successfully for member with ID:", memberIds);
      
            // Reset the score for the current memberId
            const resetResponse = await axios.put(config.apiUrl + "/reset-score", { memberId: memberId }, {
              headers: {
                Authorization: token,
              },
            });
            console.log("Score reset successfully for member with ID:", memberId);
          }))
            toast('Reward Dates Created Successfully');
        } catch (error) {
          console.error("Error:", error);
          toast.error('Error Creating Reward Dates')
        } finally {
            setUpdateMembers(Date.now())
        }
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
                            value={
                                new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))
                            }
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
                            value={data.end_date}
                            onChange={handleEndTimeChange} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="modal-button bg-main-color text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">Atur</button>
                </div>
            </form>
        </div>
    );
}
// ModalPeriode.propTypes = {
//     memberId: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number
//     ]).isRequired,
// };