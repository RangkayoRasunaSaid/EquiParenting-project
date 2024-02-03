import Modal from "./ModalTim";

export default function Tim() {
    const modalContent = (
        <>
            <div className="grid justify-items-center">
                <div className="grid content-center size-52 text-center rounded-circle mb-3 text-md font-bold p-4" style={{backgroundColor:"#d9d9d9", color:"#a49eb5"}}>
                    <label role="button" for='file-input'>
                        <p className="mb-4">Unggah<br />Foto</p>
                        <h1 className="text-5xl" style={{color:"#675893"}}><i className="bi bi-upload"></i></h1>
                    </label>
                    <input id="file-input" type="file" style={{display:"none"}} />
                </div>
            </div>
            <form className="fs-2 mb-2 font-bold">
                <div class="row mb-0">
                    <label for="inputName" class="col-sm-3 col-form-label">Nama:</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control border-0 fs-2 mb-1 font-bold" id="inputName" placeholder="Masukkan Nama" />
                    </div>
                </div>
                <div class="row mt-0 mb-3 items-center">
                    <label for="inputRole" class="col-sm-3 col-form-label">Peran:</label>
                    <div class="col-sm-7">
                        <select id="inputRole" className="ms-2 form-select fs-5 font-bold rounded-4 form-select-lg" style={{color:"#d9d9d9"}} aria-label="Small select example">
                            <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                            <option className="font-bold" style={{color:"#675893"}}>Bunda</option>
                            <option className="font-bold" style={{color:"#675893"}} value="1">Ayah</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="purpleBg text-lg rounded-2 shadow-md p-4 font-semibold">TAMBAHKAN</button>
                </div>
            </form>
        </>
    )
    return (
        <div className="m-4 p-sm-3 p-md-4 p-2 ">
            <h1 className="text-center fs-2 mb-2 font-bold">Tim</h1>
            <div className="row row-cols-1 row-cols-md-3 gx-5 gy-3 text-center text-inherent p-sm-4 p-md-5 p-2">
                <div className="col">
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" role="button" className="card rounded-5 border-0 shadow-md h-100 purpleBg">
                        <div className="card-body">
                            <h5 className="card-title fs-4 font-bold mb-4">Tambah Anggota</h5>
                            <h6 className="text-7xl font-bold">+</h6>
                        </div>
                        <div className="card-footer text-lg font-bold bg-transparent border-0">
                            Max Total 5 Tim
                        </div>
                    </div>
                    <Modal />
                </div>
                <div className="col">
                    <div className="card rounded-5 border-0 shadow-md h-100">
                        <div className="card-body">
                            <div className="flex justify-center mb-2">
                                <img className="rounded-circle ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://pedulihatibangsa.id/wp-content/uploads/2023/01/Mama_hug_2-1024x1024.jpg" />
                            </div>
                            <h5 className="card-title fs-5 font-bold" style={{color:"#675893"}}>Bunda</h5>
                            <p className="card-text text-slate-300 font-bold text-sm my-2">Sarah</p>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="progress bg-slate-700" role="progressbar" style={{ height: "10px", width: "100%" }} aria-label="Example with label" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-purple-600" style={{ width: "93%" }}></div>
                                </div>
                                <span className="progress-label text-xs ml-2">93%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card rounded-5 border-0 shadow-md h-100 flex flex-col justify-center">
                        <div className="card-body">
                            <div className="flex justify-center mb-2">
                                <img className="rounded-circle ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://pedulihatibangsa.id/wp-content/uploads/2023/01/Mama_hug_2-1024x1024.jpg" />
                            </div>
                            <h5 className="card-title fs-5 font-bold" style={{color:"#675893"}}>Ayah</h5>
                            <p className="card-text text-slate-300 font-bold text-sm my-2">Adrian</p>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="progress bg-slate-700" role="progressbar" style={{ height: "10px", width: "100%" }} aria-label="Example with label" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-purple-600" style={{ width: "93%" }}></div>
                                </div>
                                <span className="progress-label text-xs ml-2">93%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}