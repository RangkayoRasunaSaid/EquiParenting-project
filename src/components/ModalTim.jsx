export default function ModalTim() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <h1 className="text-center fs-2 mb-4 font-bold" id="exampleModalLabel" style={{color:"#675893"}}>Tim Baru</h1>
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
                            <div className="row mb-0">
                                <label for="inputName" className="col-sm-3 col-form-label">Nama:</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control border-0 fs-2 mb-1 font-bold" id="inputName" placeholder="Masukkan Nama" />
                                </div>
                            </div>
                            <div className="row mt-0 mb-3 items-center">
                                <label for="inputRole" className="col-sm-3 col-form-label">Peran:</label>
                                <div className="col-sm-7">
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
                    </div>
                </div>
            </div>
        </div>
    )
}