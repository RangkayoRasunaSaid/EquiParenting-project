import MisiPeriode from './MisiPeriode';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import PropTypes from 'prop-types';
import ModalPeriode from './modals/ModalPeriode';
import ModalButton from './modals/ModalButton';

export default function Aktivitas({ members, setUpdateMembers }){
    // Filter out members without Rewards defined
    const membersWithRewards = members.filter(member => member?.Rewards[0]);
    const memberIds = members.map(member => member.id);

    const options = {
        stagePadding: 40, items: 4, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:4 }
        }
    }

    function formatDate(inputDate) {
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const date = new Date(inputDate);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return day + ' ' + months[monthIndex] + ' ' + year;
    }

    const formattedPeriod = members[0].Rewards[0]?.start_date && members[0].Rewards[0]?.end_date ?
        `${formatDate(new Date(members[0].Rewards[0].start_date).toLocaleDateString())} - ${formatDate(new Date(members[0].Rewards[0].end_date).toLocaleDateString())}`
        : '';  
    console.log(members);

    return (
        <div className='text-center'>
            <h1 className="text-3xl my-5 font-bold">Aktivitas</h1>
            <div className="flex justify-center">
                <ModalButton btnContent={(
                    <button disabled={formattedPeriod} className="disabled:bg-slate-400 flex text-2xl gap-4 justify-center items-center px-5 text-white bg-main-color rounded-2xl font-bold md:text-xl shadow-md">
                        <span>Atur Periode Mission</span>
                        <span className='text-5xl'>+</span>
                    </button>
                )} mdlContent={(<ModalPeriode memberIds={memberIds} setUpdateMembers={setUpdateMembers} />)} />
            </div>
            {formattedPeriod && (
                <h1 className='my-10 text-xl font-bold'>
                    Periode {formattedPeriod}
                </h1>
            )}
            {membersWithRewards.length > 3 ? (
                <OwlCarousel className='owl-theme' {...options} key={`carousel_${Date.now()}`} >
                    {membersWithRewards.map(m =>(
                        <MisiPeriode key={m.id} members={members} member={m} />
                    ))}
                </OwlCarousel>
            ) : (
                <div className="md:flex justify-center sm:gap-10 gap-5 p-2">
                    {membersWithRewards.map(m =>(
                        <MisiPeriode key={m.id} members={members} member={m} />
                    ))}
                </div>
            )}
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