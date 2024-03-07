import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import WheelReward from './WheelReward.jsx';
import ModalButton from "./modals/ModalButton";
import ModalSpin from "./modals/ModalSpin";
import { Link } from 'react-router-dom';
import StatSummary from './StatSummary.jsx';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import img1 from '../../assets/8.png'
import img2 from '../../assets/7.png'
import { fetchStats } from '../../redux/slices/statsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { override } from '../../pages/Profile.jsx';

const options = {
    stagePadding: 40, items: 2, margin:20, nav:true,
    responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:2 }
    }
}

export default function PusatReward() {
    const token = sessionStorage.getItem('token')
    const dispatch = useDispatch();
    const { stats, loading } = useSelector(state => state.stats)
    const { members } = useSelector(state => state.member)
    let endDate

    if (members && members.length > 0) {
      endDate = new Date(members[0].Rewards[0]?.end_date)
      endDate.setTime(endDate.getTime() - (7 * 60 * 60 * 1000))
    }

    let currentDate = new Date();
    let keysWith100Percentage
    let spinMembers = []
    let allRolesUnique = true
   
    useEffect(() => {
        const fetchMemberActivityStats = async () => {
            const data = {
                startDate: members[0].Rewards[0].start_date,
                endDate: members[0].Rewards[0].end_date
            }
            dispatch(fetchStats(data))
        };

        if (!token || !members || members.length === 0 || members[0].Rewards.length === 0) return
        fetchMemberActivityStats()
    }, [members]);

    if (stats && members) {
        keysWith100Percentage = Object.keys(stats).filter(key => stats[key].percentage === 100);
        spinMembers = members.filter(member => keysWith100Percentage.includes(member.id.toString()) && member.Rewards.some(reward => reward.Reward_Items.length === 0));
        allRolesUnique = new Set(members.map(member => member.member_role)).size === members.length;
    }

    const btnCtn = (
        <img
            role='button'
            className='rounded-circle max-w-xs'
            src={endDate < currentDate && spinMembers && spinMembers.length > 0 ? img1 : img2}
            alt="spin-wheel"
        />
    ) 

    return (
        <div className="text-center bg-white sm:p-5 md:p-10 p-3 rounded-[60px] flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Pusat Reward</h1>
                <>
                    <div className="bg-white m-4 rounded-[60px] shadow-md flex-none lg:flex">
                        <div className="lg:w-1/3 sm:w-full flex justify-center">
                            {token && members ? (
                                members.length === 0 || endDate > currentDate || spinMembers.length === 0 ? (
                                    <div onClick={() => {
                                        if (endDate > currentDate) toast.warning('Belum Bisa Putar Spin karena Periode Masih Berjalan')
                                        else if (members.length === 0) toast.warning('Silahkan Buat Tim Terlebih Dahulu')
                                        else toast.warning('Silahkan Coba Lagi di Periode Berikutnya')
                                    }}>{btnCtn}</div>
                                ) : (
                                    <ModalButton btnContent={btnCtn} mdlContent={<ModalSpin spinMembers={spinMembers} />} maxWidth='100vw' />
                                )
                            ) : (
                                <Link to='/login'>{btnCtn}</Link>
                            )}
                        </div>
                        {!members || members.length === 0 ? (
                            <div className='flex flex-col justify-center items-center lg:mx-auto'>
                                <Link to={token ? "/mission/daily-mission" : '/login'}>
                                    <button onClick={() => window.scrollTo(0, 0)} className='flex items-center justify-center px-5 py-3 rounded-3xl shadow-lg text-xl font-semibold'>
                                        Buat Tim <span className='ms-5 text-4xl'>+</span>
                                    </button>
                                </Link>
                            </div>
                        ) : !stats || !members ? (
                            <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
                        ) : (
                            <OwlCarousel className='owl-theme lg:w-2/3 my-10' {...options} >
                                {members.map(member => (
                                    <WheelReward
                                        key={member.id}
                                        member={member}
                                        percent={stats[member.id]?.percentage}
                                        memberName={!allRolesUnique}
                                    />
                                ))}
                            </OwlCarousel>
                        )
                        }
                    </div>
            
                    {/* link to daily mission */}
                    <Link to="/mission/daily-mission">
                        <button className="p-sm-3 p-md-4 mb-4 p-4 mt-8 text-white hover:bg-ungu1/90 bg-ungu1 rounded-[60px] font-bold text-[16px] md:text-xl shadow-md w-full" onClick={() => window.scrollTo(0, 0)}>Lihat Aktivitas Daily Mission</button>
                    </Link>

                    {token && (
                        <>
                            <h1 className='mt-5 text-center text-3xl font-bold'>Ringkasan</h1>
                            { !stats || !members ? (
                                <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
                            ) : members.filter(member => member.Rewards[0]).length > 0 && (
                                <StatSummary members={members} stats={stats} />
                            )}
                        </>
                    )}
                </>

        </div>
    )
}
// PusatReward.propTypes = {
//     members: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.number
//         ]).isRequired,
//         member_role: PropTypes.string.isRequired,
//         percentage: PropTypes.number,
//         // Include any other properties that members might have and you use in this component
//     })).isRequired,
// };