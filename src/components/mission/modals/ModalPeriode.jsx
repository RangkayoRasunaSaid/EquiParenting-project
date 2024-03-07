import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createReward } from '../../../redux/slices/RewardSlice';

export default function ModalPeriode({ memberIds }) {
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.reward)
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
      buttonRef.current.disabled = true
      if (!data.start_date || !data.end_date) {
        buttonRef.current.disabled = false
        return toast.warning("Harap isi semua kolom")
    }
    buttonRef.current.classList.add('modal-button');
    buttonRef.current.disabled = false
    buttonRef.current.click();
    buttonRef.current.disabled = true
      dispatch(createReward({ data, memberIds }))
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
                          value={data.end_date}
                          onChange={handleEndTimeChange} />
                  </div>
              </div>
              <div className="flex justify-center">
                  <button
                    disabled={loading || !data.start_date || !data.end_date}
                    ref={buttonRef} type="submit"
                    className="hover:bg-ungu1/50 disabled:bg-ungu1/50 bg-ungu1 text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">Atur</button>
              </div>
          </form>
      </div>
  );
}