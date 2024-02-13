import { useEffect, useState } from 'react';
import { titleCase } from '../Breadcrumbs.jsx';
import SummaryCard from './SummaryCard.jsx';
import WheelComponent from './WheelComponent.jsx';
import WheelReward from './WheelReward.jsx';
import ModalButton from "./modals/ModalButton";
import ModalSpin from "./modals/ModalSpin";
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function PusatReward({ members }) {
    console.log(members);
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

    const categoryCountsSum = (id) => Object.values(stats[id].categoryCounts).reduce((acc, curr) => acc + curr, 0);

    useEffect(() => {
      const token = sessionStorage.getItem('token');
      const fetchMemberActivityStats = async () => {
        try {
          const response = await axios.get('https://outrageous-gold-twill.cyclic.app/stats', { headers: { Authorization: token } });
          setStats(response.data);
          console.log(stats[24]);
        } catch (error) {
          console.error('Error fetching member activity stats:', error);
        }
      };
  
      fetchMemberActivityStats();
    }, []);

      return (
        <div className="bg-white sm:p-5 md:p-10 p-3 rounded-[60px] flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold">Pusat Reward</h1>
            <div className="bg-white m-4 rounded-[60px] shadow-md flex-none lg:flex pb-sm-3 pb-md-4 pb-2 ps-sm-3 ps-md-4 ps-2">
                <div className="lg:w-1/3">
                    {isAuthenticated ? (
                        <ModalButton btnContent={(btnCtn)} mdlContent={(<ModalSpin />)} maxWidth='100vw' />
                    ) : (<Link to='/login'>{btnCtn}</Link>)}
                    {/* <WheelComponent /> */}
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
            {members.length > 0 && (
                <>
                    <Link to="/mission/daily-mission">
                        <button className="p-sm-3 p-md-4 mb-4 p-3 mx-5 text-white bg-main-color rounded-[60px] font-bold shadow-md" style={{width: '95%'}}>Lihat Aktivitas Daily Mission</button>
                    </Link>
                    <div className="p-sm-3 p-md-4 p-3 px-sm-4 px-md-5 px-3 mb-4 mx-sm-1 mx-md-5 mx-1 bg-white shadow-md rounded-[60px]">
                        <h1 className="text-center text-3xl font-bold mb-4">Ringkasan</h1>
                        <div className="flex gap-4 text-center">
                            {members.map(m => (
                                <div key={m.id}>
                                    <SummaryCard title={`${titleCase(m.member_role)} Idaman`} fontSz='text-7xl'
                                        description={`selesaikan banyak misi untuk menaikan score menjadi "${titleCase(m.member_role)} Idaman”`}
                                        firstRow={m.percentage}
                                    />
                                    <SummaryCard title='Daily Mission'
                                        value={stats[m.id] && stats[m.id].totalActivities !== undefined ? String(stats[m.id].totalActivities) : '0'}
                                        fontSz='text-7xl'
                                        description='Misi diselesaikan overdue (per 30 hari)' 
                                    />
                                    <SummaryCard
                                        title='Kategori'
                                        value={stats[m.id] && stats[m.id].categoryCounts !== undefined ? categoryCountsSum(m.id) : '0'} 
                                        fontSz='text-7xl'
                                        description='Kategori yang telah dilaksanakan (per 30 hari)'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
PusatReward.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        member_role: PropTypes.string.isRequired,
        percentage: PropTypes.number,
        // Include any other properties that members might have and you use in this component
    })).isRequired,
};