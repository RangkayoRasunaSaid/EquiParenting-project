import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Modal from "./ModalAktivitas"
import TaskItem from './TaskItem'

export default function Aktivitas(){
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
            <OwlCarousel className='owl-theme' {...options} >
                <TaskItem
                    category="Dapur"
                    title="Mencuci Piring Makan Malam"
                    timestamp="Hari ini, 4 Jan 2024 12:52 WIB"
                    imageUrl="https://i0.wp.com/bogor.bandung.media/wp-content/uploads/2022/09/cowok-nyuci-piring.jpeg?w=724&ssl=1"
                    description="Ayah harus mencuci semua piring dan peralatan yang digunakan untuk masak"
                    completed='Diselesaikan Tepat Waktu'
                    responsible='Ayah'
                    approvedBy='Bunda'
                    deadline='4 Jan 2024 12:52-4 Jan 2024 19:50'
                    disabled={true}
                />

                <TaskItem
                    category="Baby"
                    title="Ganti Popok Baby Shift Subuh"
                    timestamp="Hari ini, 4 Jan 2024 15:43 WIB"
                    description="Ayah harus mencuci semua piring dan peralatan yang digunakan untuk masak"
                    completed='Batas Waktu: 4 Jam 17 Menit Tersisa'
                    responsible='Ayah'
                    approvedBy='Bunda'
                    deadline='4 Jan 2024 12:52-4 Jan 2024 19:50'
                />
            </OwlCarousel>
            <div className="flex justify-center my-5">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal2" className="w-72 text-xl purpleBg rounded-full shadow-md py-1 px-3 font-semibold flex items-center justify-center"><span className="text-6xl me-3">+</span> <span style={{color:"c3b8da"}}>Tambah Aktivitas</span></button>
            </div>
            <Modal />
        </>
    )
}