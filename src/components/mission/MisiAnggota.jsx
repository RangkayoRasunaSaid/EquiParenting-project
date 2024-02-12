import { BsFillQuestionCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ModalButton from "./modals/ModalButton";
import ModalAktivitas from "./modals/ModalAktivitas"
import ModalHelp from "./modals/ModalHelp";
import TaskItem from "./TaskItem";
import { titleCase } from "../Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MisiAnggota() {
    const { state } = useLocation()
    const {members, member} = state
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = sessionStorage.getItem('token');
            
            const activitiesResponse = await axios.get(`http://localhost:3000/activities/${member.id}`);
            // const activitiesResponse = await axios.get(`http://localhost:3000/activities/21`);
            const activitiesData = activitiesResponse.data;
            setData(activitiesData);

            const categoriesResponse = await axios.get(`http://localhost:3000/categories`);
            const categoriesData = categoriesResponse.data;
            setCategories(categoriesData);
          } catch (error) {
            // console.error('Error fetching data:', error);
            // alert('Failed fetching data');
            // window.location.reload();
          }
        };
      
        fetchData();
      }, []);  

    const options = {
        stagePadding: 40,
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
        <div className="bg-white py-5 rounded-[40px]">
            <div className="flex items-center justify-between text-3xl font-semibold mb-10 px-5">
                <Link to="/mission/daily-mission">
                    <BsArrowLeftShort />
                </Link>
                <h1>Aktivitas {titleCase(member.member_role)}</h1>
                <ModalButton
                    btnContent={(<BsFillQuestionCircleFill role="button" />)}
                    mdlContent={(<ModalHelp role={member.member_role} />)} maxWidth="1000px"
                />
            </div>
            {/* <div className=" mb-10">
                <h1 className="text-2xl font-semibold text-center">Misi Harian</h1>
                <OwlCarousel className='owl-theme' {...options} >
                    <TaskItem
                        category="Dapur"
                        title="Memasak Makanan Malam"
                        timestamp="Hari Ini, 2 Feb 2024 12:52 WIB"
                        bySystem={true}
                        description="bunda pulang dari kantor lebih cepet jadi bunda bisa masak makan malem. Nanti poin bunda bisa 20 yah :)"
                        points= '20'
                        responsible='Bunda'
                        approvedBy='Ayah'
                    />
                    <TaskItem
                        category="Baby"
                        title="Ganti Popok Baby Shift Subuh"
                        timestamp="Hari ini, 2 Jan 2024 20:43 WIB"
                        bySystem={true}
                        description="Bunda tidur lebih cepat yah jadi ayah yang ganti popok sama bikin susu dini hari karena jam 4 bunda masak + ganti popok di subuh"
                        points= '10'
                        responsible='Bunda'
                        approvedBy='Ayah'
                    />
                </OwlCarousel>
            </div> */}
            <div>
                <h1 className="text-2xl font-semibold text-center">Yuk, Buat Misi Sendiri untuk {titleCase(member.member_role)}!</h1>
                <OwlCarousel className='owl-theme' {...options} >
                    {data.map(activity => (
                        <TaskItem
                            key={activity.id}
                            members={members}
                            member={member}
                            activity={activity}
                            responsible={titleCase(member.member_role)}
                        />
                    ))}
                    {/* <TaskItem
                        category="Baby"
                        title="Membuat susu adek pagi"
                        timestamp="Hari ini, 2 Jan 2024 18:42 WIB"
                        description="Bunda lakuin shift pagi dini hari jam 2, nanti ayah jam 5 subuh ya"
                        completed='Batas Waktu: 5 Jam 18 Menit Tersisa'
                        points= '10'
                        responsible='Bunda'
                        approvedBy='Ayah'
                        deadline='2 Feb 2024 18:42 - 3 Feb 2024 02:00'
                        disabled={false}
                    /> */}
                </OwlCarousel>
                <div className="flex justify-center my-5">
                    <ModalButton btnContent={(
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            className="w-72 text-xl bg-main-color text-white rounded-[30px] shadow-md py-1 px-3 font-semibold flex items-center justify-center">
                                <span className="text-6xl me-3">+</span>
                                <span style={{color:"c3b8da"}}>Tambah Aktivitas</span>
                        </button>)}
                        mdlContent={(<ModalAktivitas members={members} member={member} categories={categories} />)}
                        maxWidth="800px"
                    />
                    
                </div>
            </div>
        </div>
    )
}

