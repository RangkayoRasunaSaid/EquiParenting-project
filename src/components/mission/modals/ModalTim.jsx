export default function ModalTim() {
    return (
        <div className="px-5">
            <h1 className="text-center font-bold text-lg my-5">Tim Baru</h1>
            <div className="grid justify-items-center">
                <div className="grid content-center size-40 text-center rounded-full mb-3 text-md font-bold p-4" style={{backgroundColor:"#d9d9d9", color:"#a49eb5"}}>
                    <label role="button" for='file-input'>
                        <p className="mb-4">Unggah<br />Foto</p>
                        <h1 className="text-5xl" style={{color:"#675893"}}><i className="bi bi-upload"></i></h1>
                    </label>
                    <input id="file-input" type="file" style={{display:"none"}} />
                </div>
            </div>
            <form className="fs-2 mb-2 font-bold">
                <div className="grid grid-cols-4 gap-4 mb-0">
                    <label for="inputName" className="col-span-1">Nama:</label>
                    <input type="text" className="col-span-3 border-0 mb-1 font-bold" id="inputName" placeholder="Masukkan Nama" />
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label for="inputRole" className="col-span-1">Peran:</label>
                    <div className="col-sm-7">
                        <select id="inputRole" className="col-span-3 font-bold rounded-lg form-select-lg" style={{color:"#d9d9d9"}} aria-label="Small select example">
                            <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                            <option className="font-bold" style={{color:"#675893"}}>Bunda</option>
                            <option className="font-bold" style={{color:"#675893"}} value="1">Ayah</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-main-color text-white text-base rounded-md shadow-md my-5 py-2 px-4 font-semibold">TAMBAHKAN</button>
                </div>
            </form>
        </div>
    )
}