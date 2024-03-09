import MisiPeriode from './MisiPeriode';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import PropTypes from 'prop-types';
import ModalPeriode from './modals/ModalPeriode';
import ModalButton from './modals/ModalButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { override } from '../../pages/Profile';
import { fetchHistory } from '../../redux/slices/historySlice';
import { useEffect } from 'react';

const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const options = {
    stagePadding: 40, items: 4, margin:20, nav:true,
    responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:4 }
    }
}

export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + months[monthIndex] + ' ' + year;
}

export default function Aktivitas() {
    const dispatch = useDispatch();
    const { members } = useSelector(({ member }) => member);
    const { loading, history } = useSelector(({ reward, history }) => ({ loading: reward.loading, history: history.history }));
    const endDate = new Date(members[members.length - 1].Rewards[0]?.end_date);
    endDate.setTime(endDate.getTime() - (7 * 60 * 60 * 1000));
    const currentDate = new Date();
    let histBtn = true
    let hasActivities
    if (history && Array.isArray(history)) {
        hasActivities = history.some(item => item.activities && item.activities.length > 0);
        histBtn = false
    }
    const formattedPeriod = members[0].Rewards[0]?.start_date && members[0].Rewards[0]?.end_date ?
        `${formatDate(currentDate)} - ${formatDate(endDate)}`
        : '';
    const allRolesUnique = new Set(members.map(member => member.member_role)).size === members.length;

    useEffect(() => {
      dispatch(fetchHistory())
    }, [members]);

    return (
        <div className='text-center'>
            <div className={`flex items-center my-5 ${!histBtn && !hasActivities ? 'justify-center' : 'justify-between'}`}>
                <div className='px-2 invisible text-sm md:block hidden'>Lihat Riwayat</div>
                <h1 className="text-3xl font-bold">Aktivitas</h1>
                {hasActivities ? (
                    <Link to='/history'>
                        <button className='border-2 text-sm rounded-3xl p-2 bg-ungu1/70 text-white hover:bg-ungu1/50 focus:bg-ungu3 focus:outline-none'>
                            Lihat Riwayat
                        </button>
                    </Link>
                ) : histBtn ? (
                    <div className="bg-gray-100 text-gray-100 text-sm p-2 rounded-3xl">Lihat Riwayat</div>
                ) : (
                    <div className='px-2 invisible text-sm md:block hidden'>Lihat Riwayat</div>
                )}
          
            </div>
            <div className="flex justify-center">
                <ModalButton
                    btnContent={(
                        <button
                            disabled={currentDate < endDate || loading}
                            className="hover:bg-ungu1/90 disabled:bg-ungu1/60 bg-ungu1 flex text-2xl gap-4 justify-center items-center px-5 text-white rounded-2xl font-bold md:text-xl shadow-md"
                        >
                            <span>Atur Periode Mission</span>
                            <span className='text-5xl'>+</span>
                        </button>
                    )}
                    mdlContent={(
                        <ModalPeriode memberIds={members.map(member => member.id)} />
                    )}
                />
            </div>
            {loading || !members ? (
                <ClipLoader color="silver" loading={loading} cssOverride={override} size={50} aria-label="Loading Spinner" data-testid="loader" />
            ) : currentDate < endDate && (
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
                                {members.map(m => (
                                    <MisiPeriode key={m.id} members={members} member={m} />
                                ))}
                            </div>
                        )}
                    </>
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