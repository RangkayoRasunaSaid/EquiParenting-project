export default function Modal() {
    return (
        <div className="px-5" style={{color:"#675893"}}>
            <h1 className="text-center text-3xl mb-4 font-bold">Task Baru</h1>
            <form className="text-2xl mb-2 font-bold">
                <div className="flex gap-4 mb-3">
                    <label for="inputTask">Judul Task:</label>
                    <div className="col-sm-8">
                        <input type="text" className="border-0 text-2xl mb-1 font-bold" id="inputTask" placeholder="Masukkan task baru disini" />
                    </div>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputPIC">Yang Bertugas:</label>
                    <div className="col-sm-8">
                        <select id="inputPIC" className="ms-2 form-select text-xl font-bold rounded-lg" style={{color:"#d9d9d9"}} aria-label="Small select example">
                            <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                            <option className="font-bold" style={{color:"#675893"}}>Bunda</option>
                            <option className="font-bold" style={{color:"#675893"}} value="1">Ayah</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputPIC">Kategori:</label>
                    <div className="col-sm-8">
                        <select id="inputPIC" className="ms-2 form-select text-xl font-bold rounded-lg" style={{color:"#d9d9d9"}} aria-label="Small select example">
                            <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                            <option className="font-bold" style={{color:"#675893"}}>Dapur</option>
                            <option className="font-bold" style={{color:"#675893"}} value="1">Baby</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="inputDescription" className="mb-1">Deskripsi:</label>
                </div>
                <div className="mb-3">
                    <textarea type="text" className="w-full ring-2 ring-purple-500 text-base font-semibold" rows='5' id="inputDescription" placeholder="Berikan keterangan atau detail task baru disini..."></textarea>
                </div>
                <div className="flex gap-4 mb-3 items-center">
                    <label for="inputPIC">Waktu Mulai:</label>
                    <div className="col-sm-8">
                        <input type="datetime-local" className="border-0 text-xl mb-1 font-bold" id="inputTask" value="2024-01-30T19:30" />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <label for="inputPIC">Waktu Selesai:</label>
                    <div className="col-sm-8">
                        <input type="datetime-local" className="border-0 text-xl mb-1 font-bold" id="inputTask" placeholder="Masukkan task baru disini" />
                    </div>
                </div>
                <div className="flex my-5 justify-center">
                    <button className="bg-main-color text-white text-lg rounded-lg shadow-md p-4 font-semibold">TAMBAHKAN</button>
                </div>
            </form>
        </div>
    )
}