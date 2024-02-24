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
import config from "../../config/config";

export default function MisiAnggota({ categories }) {
    const { state } = useLocation()
    const {members, member} = state
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const activitiesResponse = await axios.get(config.apiUrl + `
                /activities/${member.id}/${member.Rewards[0].start_date}/${member.Rewards[0].end_date}
            `);
            setData(activitiesResponse.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching activities data')
          }
        };
        fetchData();
      }, [updateData]);  

    const options = {
        stagePadding: 40, items: 3, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }
        }
    }
    return (
        <div className="bg-white py-5 rounded-[40px] text-center">
            <div className="flex items-center justify-between text-3xl font-semibold px-5">
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
                <h5 className='text-slate-300 mt-2 font-bold text-sm'>{titleCase(member.name)}</h5>
                <h1 className="text-2xl font-semibold mt-6 mb-5">Yuk, Buat Misi Sendiri untuk {titleCase(member.member_role)}!</h1>
                <OwlCarousel className='owl-theme' {...options} key={`carousel_${Date.now()}`} >
                    {data.map(activity => (
                        <TaskItem
                            key={activity.id}
                            members={members}
                            member={member}
                            activity={activity}
                            responsible={titleCase(member.member_role)}
                            setUpdateData={setUpdateData}
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
                        mdlContent={(<ModalAktivitas
                            members={members} member={member} categories={categories} setUpdateData={setUpdateData}
                        />)}
                        maxWidth="800px"
                    />
                    
                </div>
            </div>
        </div>
    )
}

