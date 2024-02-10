import { useState } from 'react';

export default function ModalPeriode() {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    // Handle input changes for end time
    const handleEndTimeChange = (e) => {
        const endDate = e.target.value;
        // Check if end date is after start date
        if (endDate < new Date().toISOString().slice(0, 16)) {
            alert("End date must be after today's date");
            return;
        }
        if (endDate <= startTime) {
            alert("End date must be after start date");
            return;
        }
        setEndTime(endDate);
    };

    // Handle input changes for start time
    const handleStartTimeChange = (e) => {
        const startDate = e.target.value;
        // Check if start date is after today's date
        if (startDate < new Date().toISOString().slice(0, 16)) {
            alert("Start date must be after today's date");
            return;
        }
        // Check if start date is before end date
        if (endTime < startDate && endTime) {
            console.log('endTime', endTime);
            console.log('startDate', startDate);
            alert("Start date must be before end date");
            return;
        }
        setStartTime(startDate);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        // Save start time and end time to localStorage
        localStorage.setItem('startTime', startTime);
        localStorage.setItem('endTime', endTime);
        // Optionally, you can also perform further actions such as closing the modal
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
                        <input type="datetime-local" name="endTime" id="endTime" value={startTime} onChange={handleStartTimeChange} />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <label htmlFor="startTime" className="col-span-2">Waktu Selesai:</label>
                    <div className="col-span-3">
                        <input type="datetime-local" name="startTime" id="startTime" value={endTime} onChange={handleEndTimeChange} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-main-color text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">Atur</button>
                </div>
            </form>
        </div>
    );
}
