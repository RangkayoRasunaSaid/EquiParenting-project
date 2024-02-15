import { Link } from 'react-router-dom'
import ModalButton from './modals/ModalButton'
import ModalPeriode from './modals/ModalPeriode'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MisiPeriode from './MisiPeriode';
import PropTypes from 'prop-types';

export default function Aktivitas({ members }){
    // Function to check if current time is within the defined period
    // const [rewards, setRewards] = useState([]);

    // useEffect(() => {
    //     const token = sessionStorage.getItem("token");
    //     axios
    //         .get("http://localhost:3000/rewards", { headers: { Authorization: token } })
    //         .then((response) => {
    //         if (Array.isArray(response.data) && response.data.length > 0) {
    //             setRewards(response.data);
    //             console.log(response.data);
    //         } else if (Array.isArray(response.data) && response.data.length === 0) {
    //             console.log("No rewards found");
    //         } else {
    //             console.log("Invalid data format for rewards");
    //         }
    //         })
    //         .catch((error) => {
    //         console.error("Error fetching rewards:", error);
    //         alert("Pengambilan Data Gagal");
    //         window.location.reload();
    //         });
    // }, []);

    // const startTime = rewards.length > 0 ? rewards[0].start_date || '' : '';
    // const endTime = rewards.length > 0 ? rewards[0].start_date || '' : '';

    return (
        <>
            <h1 className="text-center text-3xl my-5 font-bold">Aktivitas</h1>
            <div className="flex justify-center sm:gap-10 gap-5 text-center p-2">
                {members.map(m =>(
                    <MisiPeriode key={m.id} members={members} member={m} />
                ))}
            </div>
        </>
    )
}
Aktivitas.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })).isRequired,
};