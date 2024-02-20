import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import axios from 'axios';
import { titleCase } from '../Breadcrumbs.jsx';
import SummaryCard from './SummaryCard.jsx';

export default function StatSummary({ members }) {
    const [stats, setStats] = useState([]);

    const options = {
        stagePadding: 40, items: 3, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }}
    }

    const calculateDifferenceInDays = (startDate, endDate) => {
        const differenceInMilliseconds = new Date(endDate).getTime() - new Date(startDate).getTime();
        return Math.round(differenceInMilliseconds / (1000 * 3600 * 24));
    }   
    
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

        if (members[0].Rewards?.length > 0) fetchStatsForAllMembers();
    }, []);

    return(
        <>
            {members.length > 2 ? (
                <OwlCarousel className='owl-theme text-center' {...options} key={`carousel_${Date.now()}`} >
                    {members.map(m => (
                        <div key={m.id} className='item'>
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
                        </div>
                    ))}
                </OwlCarousel>
            ) : (
                <div className="flex justify-center sm:gap-10 gap-5 p-2">
                    {members.map(m =>(
                        <div key={m.id}>
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
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}