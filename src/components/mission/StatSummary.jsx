import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { titleCase } from '../Breadcrumbs.jsx';
import SummaryCard from './SummaryCard.jsx';

const options = {
    stagePadding: 40, items: 3, margin:20, nav:true,
    responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 }}
}

const calculateDifferenceInDays = (startDate, endDate) => {
    const differenceInMilliseconds = new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.round(differenceInMilliseconds / (1000 * 3600 * 24));
}

const renderSummaryCard = (m, allRolesUnique, stats, daysDifference) => (
    <div key={m.id} className='item'>
        <SummaryCard title={`${m.member_role === 'others' ? 'Member' : titleCase(m.member_role)} Idaman`} fontSz='text-7xl'
            description={`selesaikan banyak misi untuk menaikkan score menjadi "${m.member_role === 'others' ? 'Member' : titleCase(m.member_role)} Idaman”`}
            firstRow={stats[m.id]?.percentage} memberName={!allRolesUnique ? m.name : ''}
        />
        <SummaryCard title='Daily Mission'
            value={`${stats[m.id]?.approvedActivities || '0'}/${stats[m.id]?.totalActivitiesCount || '0'}`}
            fontSz='text-7xl'
            description={`Misi diselesaikan (per ${daysDifference} hari)`}
        />
        <SummaryCard
            title='Kategori'
            value={stats[m.id]?.categoryCounts?.length || '0'}
            fontSz='text-7xl'
            description={`Kategori yang telah dilaksanakan (per ${daysDifference} hari)`}
        />
        {stats[m.id]?.maxApprovalCategory?.category &&
            <SummaryCard
                title='Kategori'
                value={stats[m.id]?.maxApprovalCategory?.category || '0'}
                fontSz='text-3xl'
                description={`Paling banyak dilaksanakan (per ${daysDifference} hari)`}
            />
        }
    </div>
);

export default function StatSummary({ members, stats }) {
    const allRolesUnique = new Set(members.map(member => member.member_role)).size === members.length;
    const daysDifference = calculateDifferenceInDays(members[0].Rewards[0].start_date, members[0].Rewards[0].end_date);

    return (
        <>
            {members.length > 2 ? (
                <OwlCarousel className='owl-theme text-center' {...options} key={`carousel_${Date.now()}`} >
                    {members.map(m => renderSummaryCard(m, allRolesUnique, stats, daysDifference))}
                </OwlCarousel>
            ) : (
                <div className={`${members.length === 2 ? 'flex justify-center sm:gap-10 gap-5 p-2' : ''}`}>
                    {members.map(m => (
                        <div className={`${members.length === 1 ? 'md:flex justify-center md:grid-cols-4 grid-cols-2 gap-10' : ''}`} key={m.id}>
                            {renderSummaryCard(m, allRolesUnique, stats, daysDifference)}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
