export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-5 shadow-md px-4">
                    <div className="modal-body">
                        <h1 className="text-center fs-2 mb-4 font-bold" id="exampleModalLabel2" style={{color:"#675893"}}>Task Baru</h1>
                        <form className="fs-4 mb-2 font-bold">
                            <div className="row mb-0">
                                <label for="inputTask" className="col-sm-4 col-form-label">Judul Task:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control border-0 fs-4 mb-1 font-bold" id="inputTask" placeholder="Masukkan task baru disini" />
                                </div>
                            </div>
                            <div className="row mt-0 items-center">
                                <label for="inputPIC" className="col-sm-4 col-form-label">Yang Bertugas:</label>
                                <div className="col-sm-8">
                                    <select id="inputPIC" className="ms-2 form-select fs-5 font-bold rounded-4" style={{color:"#d9d9d9"}} aria-label="Small select example">
                                        <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                                        <option className="font-bold" style={{color:"#675893"}}>Bunda</option>
                                        <option className="font-bold" style={{color:"#675893"}} value="1">Ayah</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-0 mb-3 items-center">
                                <label for="inputPIC" className="col-sm-4 col-form-label">Kategori:</label>
                                <div className="col-sm-8">
                                    <select id="inputPIC" className="ms-2 form-select fs-5 font-bold rounded-4" style={{color:"#d9d9d9"}} aria-label="Small select example">
                                        <option className="font-bold" style={{color:"#675893"}} selected value="1">Silahkan Pilih</option>
                                        <option className="font-bold" style={{color:"#675893"}}>Dapur</option>
                                        <option className="font-bold" style={{color:"#675893"}} value="1">Baby</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="inputDescription" className="form-label">Deskripsi:</label>
                                <textarea type="text" className="ring-2 ring-purple-500 form-control text-md mb-1 font-semibold" id="inputDescription" placeholder="Berikan keterangan atau detail task baru disini..."></textarea>
                            </div>
                            <div className="row mt-0 items-center">
                                <label for="inputPIC" className="col-sm-4 col-form-label">Waktu Mulai:</label>
                                <div className="col-sm-8">
                                    <input type="datetime-local" className="form-control border-0 fs-6 mb-1 font-bold" id="inputTask" value="2024-01-30T19:30" />
                                </div>
                            </div>
                            <div className="row mt-0 mb-3 items-center">
                                <label for="inputPIC" className="col-sm-4 col-form-label">Waktu Selesai:</label>
                                <div className="col-sm-8">
                                    <input type="datetime-local" className="form-control border-0 fs-6 mb-1 font-bold" id="inputTask" placeholder="Masukkan task baru disini" />
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