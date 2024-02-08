import OwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Modal from "./ModalAktivitas"
import TaskItem from './TaskItem'
import ModalButton from './ModalButton'
import ModalPeriode from './ModalPeriode'

export default function Aktivitas(){
    const mdlBtn = (
        <div className='flex justify-center'>
            <button className="px-5 text-center justify-center text-white bg-main-color rounded-xl font-bold shadow-md flex items-center">
                Atur Periode Mission
                <span className='text-5xl ms-10'>+</span>
            </button>
        </div>
    )
    const options = {
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
        <>
            <h1 className="text-center text-3xl my-5 font-bold">Aktivitas</h1>
            <ModalButton btnContent={mdlBtn} mdlContent={(<ModalPeriode />)} />
            <h1 className='text-center font-bold text-lg mt-10 mb-3'>Periode 2 Januari 2024 - 9 Januari 2024</h1>
            
            <div className="flex justify-center gap-10 text-center p-2">
                <div className="px-10 py-6 rounded-[20px] border-0 shadow-md h-100">
                    <Link to="/mission/daily-mission/misi-bunda">
                        <h5 className="text-xl font-bold" style={{color:"#675893"}}>Misi Bunda</h5>
                        <div className="flex justify-center mt-3">
                            <img className="rounded-full ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://pedulihatibangsa.id/wp-content/uploads/2023/01/Mama_hug_2-1024x1024.jpg" />
                        </div>
                    </Link>
                </div>
                <div className="px-10 py-6 rounded-[20px] border-0 shadow-md h-100 flex flex-col justify-center">
                    <Link to="/mission/daily-mission/misi-ayah">
                        <h5 className="text-xl font-bold" style={{color:"#675893"}}> Misi Ayah</h5>
                        <div className="flex justify-center mt-3">
                            <img className="rounded-full ring-2 ring-purple-500" style={{height:"90px", width:"90px"}} alt="..." src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSTr5uG-dPgDdvqjbo5OLKtyB6EDFsaRo5fUuVpit58jsyjGK2" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}