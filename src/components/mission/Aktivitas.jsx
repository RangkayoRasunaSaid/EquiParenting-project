import MisiPeriode from './MisiPeriode';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import PropTypes from 'prop-types';
import ModalPeriode from './modals/ModalPeriode';
import ModalButton from './modals/ModalButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + months[monthIndex] + ' ' + year;
}

export default function Aktivitas({ members, setUpdateMembers, activities }){
    const [isCreating, setIsCreating] = useState(false)
    const endDate = new Date(members[members.length - 1].Rewards[0]?.end_date)
    endDate.setTime(endDate.getTime() - (7 * 60 * 60 * 1000))
    const currentDate = new Date();
    let hasActivities
    if (activities) hasActivities = activities.some(item => item.activities.length > 0);

    const options = {
        stagePadding: 40, items: 4, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:4 }
        }
    }

    const formattedPeriod = members[0].Rewards[0]?.start_date && members[0].Rewards[0]?.end_date ?
        `${formatDate(currentDate)} - ${formatDate(endDate)}`
        : '';  
    const allRolesUnique = new Set(members.map(member => member.member_role)).size === members.length;

    return (
        <div className='text-center'>
            <div className="flex justify-between items-center my-5">
                <div className='px-2 invisible text-sm md:block hidden'>Lihat Riwayat</div>
                <h1 className="text-3xl font-bold">Aktivitas</h1>
                <Link to='/history'>
                    <button className={`border-2 text-sm rounded-3xl p-2 bg-ungu1 text-white hover:bg-dark-main-color focus:bg-ungu3 focus:outline-none ${!hasActivities ? 'invisible' : '' }`} onClick={() => window.scrollTo(0, 0)}>
                        Lihat Riwayat
                    </button>
                </Link>                
            </div>
                <div className="flex justify-center">
                    <ModalButton
                        btnContent={(
                            <button
                                disabled={currentDate < endDate || isCreating}
                                className="disabled:bg-slate-400 flex text-2xl gap-4 justify-center items-center px-5 text-white bg-main-color rounded-2xl font-bold md:text-xl shadow-md"
                            >
                                <span>Atur Periode Mission</span>
                                <span className='text-5xl'>+</span>
                            </button>
                        )}
                        mdlContent={(
                            <ModalPeriode
                                memberIds={members.map(member => member.id)}
                                setUpdateMembers={setUpdateMembers}
                                setIsCreating={setIsCreating}
                            />
                        )}
                    />
                </div>
            {currentDate < endDate &&
                <>
                    {formattedPeriod &&  (
                        <h1 className='my-10 text-xl font-bold'>
                            Periode {formattedPeriod}
                        </h1>
                    )}
                    {members.length > 3 ? (
                        <OwlCarousel className='owl-theme' {...options} key={`carousel_${Date.now()}`} >
                            {members.map(m =>(
                                <MisiPeriode key={m.id} members={members} member={m} memberName={!allRolesUnique} />
                            ))}
                        </OwlCarousel>
                    ) : (
                        <div className="md:flex justify-center sm:gap-10 gap-5 p-2">
                            {members.map(m =>(
                                <MisiPeriode key={m.id} members={members} member={m} />
                            ))}
                        </div>
                    )}
                </>
            }
        </div>
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