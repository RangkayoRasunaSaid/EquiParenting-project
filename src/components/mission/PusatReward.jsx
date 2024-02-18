import { useEffect, useState } from 'react';
import { titleCase } from '../Breadcrumbs.jsx';
import SummaryCard from './SummaryCard.jsx';
import WheelReward from './WheelReward.jsx';
import ModalButton from "./modals/ModalButton";
import ModalSpin from "./modals/ModalSpin";
import { Link } from 'react-router-dom';
import axios from 'axios';
import MemberItem from './MemberItem.jsx';

export default function PusatReward({ members }) {
    const isAuthenticated = sessionStorage.getItem("token");
    const btnCtn = (
        <img
            role='button'
            className='rounded-circle'
            src='/src/assets/spin.svg'
            alt="spin-wheel"
        />
    )
    const [stats, setStats] = useState([]);
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');

        const fetchMemberActivityStats = async (member) => {
            try {
                const response = await axios.get(`http://localhost:3000/stats/${member.id}/${member.Rewards[0].start_date}/${member.Rewards[0].end_date}`, { headers: { Authorization: token } });
                return { [member.id]: response.data }
            } catch (error) {
                console.error('Error fetching member activity stats:', error);
                return { [member.id]: null }
            }
        };

        const fetchStatsForAllMembers = async () => {
            const statsPromises = members.map(member => fetchMemberActivityStats(member));
            const stats = await Promise.all(statsPromises);
            const statsObject = stats.reduce((acc, stat) => ({ ...acc, ...stat }), {})
            setStats(statsObject)
        };

        fetchStatsForAllMembers();
    }, [members]);

    const calculateDifferenceInDays = (startDate, endDate) => {
        const differenceInMilliseconds = new Date(endDate).getTime() - new Date(startDate).getTime();
        return Math.round(differenceInMilliseconds / (1000 * 3600 * 24));
    }    

      return (
        <div className="bg-white sm:p-5 md:p-10 p-3 rounded-[60px] flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold">Pusat Reward</h1>
            <div className="bg-white m-4 rounded-[60px] shadow-md flex-none lg:flex pb-sm-3 pb-md-4 pb-2 ps-sm-3 ps-md-4 ps-2">
                <div className="lg:w-1/3">
                    {isAuthenticated ? (
                        <ModalButton btnContent={(btnCtn)} mdlContent={(<ModalSpin />)} maxWidth='100vw' />
                    ) : (<Link to='/login'>{btnCtn}</Link>)}
                </div>
                {members.length === 0 ? (
                    <div className='flex flex-col justify-center items-center lg:mx-auto'>
                        <Link to={isAuthenticated ? "/mission/daily-mission" : '/login'}>
                            <button className='flex items-center justify-center px-5 py-3 rounded-3xl shadow-lg text-xl font-semibold'>
                                Buat Tim <span className='ms-5 text-4xl'>+</span>
                            </button>
                        </Link>
                    </div>
                ) : members.map(member => (
                        <WheelReward key={member.id} member={member} />
                    )
                )}
            </div>
      
            {/* link to daily mission */}
            <Link to="/mission/daily-mission" >
                <button className="p-sm-3 p-md-4 mb-4 p-4 mt-8 text-white bg-main-color rounded-[60px] font-bold text-[16px] md:text-xl shadow-md w-full">Lihat Aktivitas Daily Mission</button>
            </Link>

            {members.filter(member => member.Rewards[0]).length > 0 &&
                <>
                    <h1 className='mt-5 text-center text-3xl font-bold'>Ringkasan</h1>
                    <div className="flex text-center">
                        {members.map(m => (
                            <div key={m.id}>
                                {m.Rewards.length > 0 ? (
                                    <>
                                        <SummaryCard title={`${titleCase(m.member_role)} Idaman`} fontSz='text-7xl'
                                            description={`selesaikan banyak misi untuk menaikkan score menjadi "${titleCase(m.member_role)} Idaman”`}
                                            firstRow={stats[m.id]?.percentage}
                                        />
                                        <SummaryCard title='Daily Mission'
                                            value={stats[m.id]?.approvedActivities || '0'}
                                            fontSz='text-7xl'
                                            description={`Misi diselesaikan (per ${calculateDifferenceInDays(m.Rewards[0].start_date, m.Rewards[0].end_date)} hari)`}
                                        />
                                        <SummaryCard
                                            title='Kategori'
                                            value={stats[m.id]?.categoryCounts?.length || '0'}
                                            fontSz='text-7xl'
                                            description={`Kategori yang telah dilaksanakan (per ${calculateDifferenceInDays(m.Rewards[0].start_date, m.Rewards[0].end_date)} hari)`}
                                        />
                                        {stats[m.id]?.maxApprovalCategory?.category &&
                                            <SummaryCard
                                                title='Kategori'
                                                value={stats[m.id]?.maxApprovalCategory?.category || '0'}
                                                fontSz='text-3xl'
                                                description={`Paling banyak dilaksanakan (per ${calculateDifferenceInDays(m.Rewards[0].start_date, m.Rewards[0].end_date)} hari)`}
                                            />
                                        }
                                    </>
                                ) : (
                                    <>
                                        <h1 className='font-semibold'>Atur periode untuk melihat ringkasan</h1>
                                        <MemberItem member={m} />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            }

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