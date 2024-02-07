import { BsFillQuestionCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ModalButton from "./ModalButton";
import ModalHelp from "./ModalHelp";
import TaskItem from "./TaskItem";

export default function MisiBunda() {
    const options = {
        center: true,
        stagePadding: 50,
        items: 3,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }
    return (
        <div className="bg-white p-5 rounded-[40px]">
            <div className="flex items-center justify-between text-3xl font-semibold mb-10 px-5">
                <Link to="/mission/daily-mission">
                    <BsArrowLeftShort />
                </Link>
                <h1>Aktivitas Bunda</h1>
                <ModalButton btnContent={(<BsFillQuestionCircleFill />)} mdlContent={(<ModalHelp />)} maxWidth="1000px" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-center">Misi Harian</h1>
                <OwlCarousel className='owl-theme' {...options} >
                    <div className="item relative rounded-[60px] border-0 mt-3 shadow-md" style={{ zIndex: '1' }}>
                        <div className="absolute rounded-md text-xs font-semibold px-5 py-1 shadow-md top-0 left-1/3 text-white text-center" style={{ backgroundColor: "#a693de" }}>Dapur</div>
                        <div className="px-4 py-7">
                            <h5 className="text-center text-base font-bold" style={{ color: "#675893" }}>Memasak Makanan Malam</h5>
                            <h6 className="mb-3 text-slate-300 text-xs font-semibold">Hari Ini, 2 Feb 2024 12:52 WIB</h6>
                            <p className="text-xs font-bold">Deskripsi:</p>
                            <p className="text-xs font-medium mb-5">bunda pulang dari kantor lebih cepet jadi bunda bisa masak makan malem. Nanti poin bunda bisa 20 yah :)</p>
                            <p className="text-xs font-bold mb-2">Poin Yang Akan Diperoleh: 20 Poin</p>
                            <p className="text-xs font-bold mb-2">Penanggung Jawab:Bunda</p>
                            <p className="text-xs font-bold mb-2">Disetujui Oleh: Ayah</p>
                            <div className="flex justify-center">
                                <button className="purpleBg rounded-lg shadow-md py-2 px-3 font-semibold text-white" style={{backgroundColor:"#a693de"}}>Misi Selesai</button>
                            </div>
                        </div>
                    </div>
                    <div className="item relative rounded-[60px] border-0 mt-3 shadow-md" style={{ zIndex: '1' }}>
                        <div className="absolute rounded-md text-xs font-semibold px-5 py-1 shadow-md top-0 left-1/3 text-white text-center" style={{ backgroundColor: "#a693de" }}>Baby</div>
                        <div className="px-4 py-7">
                            <h5 className="text-center text-base font-bold" style={{ color: "#675893" }}>Ganti Popok Baby Shift Subuh</h5>
                            <h6 className="mb-3 text-slate-300 text-xs font-semibold">Hari Ini, 2 Feb 2024 20:43 WIB</h6>
                            <p className="text-xs font-bold">Deskripsi:</p>
                            <p className="text-xs font-medium mb-5">Bunda tidur lebih cepat yah jadi ayah yang ganti popok sama bikin susu dini hari karena jam 4 bunda masak + ganti popok di subuh</p>
                            <p className="text-xs font-bold mb-2">Poin Yang Akan Diperoleh: 10 Poin</p>
                            <p className="text-xs font-bold mb-2">Penanggung Jawab:Bunda</p>
                            <p className="text-xs font-bold mb-2">Disetujui Oleh: Ayah</p>
                            <div className="flex justify-center">
                                <button className="purpleBg rounded-lg shadow-md py-2 px-3 font-semibold text-white" disabled style={{backgroundColor:"#a693de"}}>Misi Selesai</button>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}