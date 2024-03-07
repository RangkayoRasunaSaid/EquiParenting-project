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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity } from "../../redux/slices/activitySlice";
import { ClipLoader } from "react-spinners";
import { override } from "../../pages/Profile";

const options = {
    stagePadding: 40, items: 3, margin:20, nav:true,
    responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }
    }
}

export default function MisiAnggota({ categories }) {
    const dispatch = useDispatch();
    const { state } = useLocation()

    const { activity, loading } = useSelector(state => state.activity)

    useEffect(() => {
        dispatch(fetchActivity(state))
      }, [state]);  

    return (
        <div className="bg-white py-5 rounded-[40px] text-center">
            <div className="flex items-center justify-between text-3xl font-semibold px-5">
                <Link to="/mission/daily-mission" onClick={() => window.scrollTo(0, 0)} className="hover:bg-zinc-300 rounded-full">
                    <BsArrowLeftShort />
                </Link>
                <h1>Aktivitas {titleCase(state.member_role)}</h1>
                <ModalButton
                    btnContent={(<BsFillQuestionCircleFill className="hover:ungu1/50" role="button" />)}
                    mdlContent={(<ModalHelp role={state.member_role} />)} maxWidth="1000px"
                />
            </div>
            <div>
                <h5 className='text-slate-300 mt-2 font-bold text-sm'>{titleCase(state.name)}</h5>
                <h1 className="text-2xl font-semibold mt-6 mb-5">Yuk, Buat Misi Sendiri untuk {titleCase(state.member_role)}!</h1>
                {loading || !activity ? (
                    <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
                ) : (
                    <OwlCarousel className='owl-theme' {...options} key={`carousel_${Date.now()}`} >
                        {activity.map(activity => (
                            <TaskItem
                                key={activity.id}
                                activity={activity}
                                responsible={titleCase(state.member_role)}
                            />
                        ))}
                    </OwlCarousel>
                )}
                <div className="flex justify-center my-5">
                    <ModalButton btnContent={(
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            className="w-72 text-xl hover:bg-ungu1/90 bg-ungu1 text-white rounded-[30px] shadow-md py-1 px-3 font-semibold flex items-center justify-center">
                                <span className="text-6xl me-3">+</span>
                                <span style={{color:"c3b8da"}}>Tambah Aktivitas</span>
                        </button>)}
                        mdlContent={(<ModalAktivitas member={state} categories={categories} />)}
                        maxWidth="800px"
                    />
                    
                </div>
            </div>
        </div>
    )
}

