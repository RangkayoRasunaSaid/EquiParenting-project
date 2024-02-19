import { useEffect, useState } from "react";
import Aktivitas from "./Aktivitas";
import Tim from "./Daymission";
// import Tim from "./Tim";
import { useNavigate } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function DailyMission({ members, setMembers }) {
    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);
  
    return (
        <>
            <div className="bg-white mx-4 px-10 rounded-[60px] pb-5 flex flex-col justify-center">
                <Tim members={members} setMembers={setMembers} />
                <ReactOwlCarousel className='owl-theme' loop margin={10} nav autoplay={true}>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>1</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>2</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>3</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>4</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>5</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>6</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>7</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>8</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>9</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>10</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>11</h4>
                    </div>
                    <div className='bg-slate-300 h-52 item'>
                        <h4>12</h4>
                    </div>
                </ReactOwlCarousel>;
                {members.length > 0 &&
                    <Aktivitas members={members} />
                }
            </div>
        </>
    )
}
// DailyMission.propTypes = {
//     members: PropTypes.array.isRequired, // Assuming members is an array of objects
//     setMembers: PropTypes.func.isRequired, // Function for updating the members state
// };