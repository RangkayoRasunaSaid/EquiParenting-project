import ProgressBar from "@ramonak/react-progress-bar";
import ModalButton from "./ModalButton";
import ModalTim from "./ModalTim";

export default function Tim() {
    const mdlBtn = (
        <div role="button" className="p-3 rounded-[40px] border-0 shadow-md h-100 bg-main-color text-white flex flex-col justify-between">
            <h5 className="text-2xl font-bold">Tambah Anggota</h5>
            <h6 className="text-7xl font-bold">+</h6>
            <div className="text-lg font-bold bg-transparent border-0">
                Max Total 2 Tim
            </div>
        </div>
    )
    return (
        <div className="m-4 p-sm-3 p-md-4 p-2 ">
            <h1 className="text-center text-3xl mb-2 font-bold">Tim</h1>
            <div className="grid md:grid-cols-3 gap-3 text-center p-sm-4 p-md-5 p-2">
                <ModalButton btnContent={mdlBtn} mdlContent={(<ModalTim />)} />
                <div className="p-3 rounded-[40px] border-0 shadow-md h-100">
                    <div className="flex justify-center mb-2">
                        <img className="rounded-full ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://pedulihatibangsa.id/wp-content/uploads/2023/01/Mama_hug_2-1024x1024.jpg" />
                    </div>
                    <h5 className="text-xl font-bold" style={{color:"#675893"}}>Bunda</h5>
                    <p className="text-slate-300 font-bold text-sm my-2">Sarah</p>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-start-1 col-end-12 pe-2">
                            <ProgressBar completed={93} height="10px" labelSize="10px" isLabelVisible={false} bgColor="rgba(103, 88, 147)" baseBgColor="#3b363d" />
                        </div>
                        <div className="text-xs text-right col-start-12">93%</div>
                    </div>
                </div>
                <div className="p-3 rounded-[40px] border-0 shadow-md h-100 flex flex-col justify-center">
                    <div className="flex justify-center mb-2">
                        <img className="rounded-full ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSTr5uG-dPgDdvqjbo5OLKtyB6EDFsaRo5fUuVpit58jsyjGK2" />
                    </div>
                    <h5 className="text-xl font-bold" style={{color:"#675893"}}>Ayah</h5>
                    <p className="text-slate-300 font-bold text-sm my-2">Adrian</p>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-start-1 col-end-12 pe-2">
                            <ProgressBar completed={93} height="10px" labelSize="10px" isLabelVisible={false} bgColor="rgba(103, 88, 147)" baseBgColor="#3b363d" />
                        </div>
                        <div className="text-xs text-right col-start-12">93%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}