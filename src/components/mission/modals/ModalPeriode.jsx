export default function ModalPeriode() {
    return (
        <div className="px-5">
            <h1 className="text-center font-bold text-lg mb-5">Atur Rentang Waktu Misi</h1>
            <h1 className="font-semibold text-sm">Petunjuk:</h1>
            <p className="text-sm mb-5">Atur rentang waktu kapan misi dimulai dan selesai untuk menentukan periode Anda atau member agar dapat melakukan pemutaran hadiah di Pusat Reward.</p>
            <form className="mb-2 font-semibold">
                <div className="grid grid-cols-5 gap-4 items-center">
                    <label for="endTime" className="col-span-2">Waktu Mulai:</label>
                    <div className="col-span-3">
                        <input type="datetime-local" name="endTime" id="endTime" />
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <label for="startTime" className="col-span-2">Waktu Selesai:</label>
                    <div className="col-span-3">
                        <input type="datetime-local" name="startTime" id="startTime" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-main-color text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">Atur</button>
                </div>
            </form>
        </div>
    )
}