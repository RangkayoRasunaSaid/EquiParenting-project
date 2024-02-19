import { BsFillQuestionCircleFill, BsArrowLeftShort } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
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
import { toast } from "react-toastify";

export default function MisiAnggota() {
    const { state } = useLocation()
    const {members, member} = state
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = sessionStorage.getItem('token');
            // const activitiesResponse = await axios.get(`https://outrageous-gold-twill.cyclic.app/activities/${member.id}`);
            const activitiesResponse = await axios.get(
                `http://localhost:3000/activities/${member.id}/${member.Rewards[0].start_date}/${member.Rewards[0].end_date}`
                );
            setData(activitiesResponse.data);

            // const categoriesResponse = await axios.get(`https://outrageous-gold-twill.cyclic.app/categories`);
            const categoriesResponse = await axios.get(`http://localhost:3000/categories`);
            setCategories(categoriesResponse.data);
          } catch (error) {
            toast.error('Error fetching activities data')
            // console.error('Error fetching data:', error);
            // alert('Failed fetching data');
            // window.location.reload();
          }
        };
        fetchData();
      }, []);  

    const options = {
        stagePadding: 40, items: 3, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }
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

