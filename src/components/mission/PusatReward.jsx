import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import WheelReward from './WheelReward.jsx';
import ModalButton from "./modals/ModalButton";
import ModalSpin from "./modals/ModalSpin";
import { Link } from 'react-router-dom';
import StatSummary from './StatSummary.jsx';

export default function PusatReward({ members }) {
    const btnCtn = (
        <img
            role='button'
            className='rounded-circle max-w-xs'
            src='/src/assets/7.png'
            alt="spin-wheel"
        />
    ) 

    const options = {
        stagePadding: 40, items: 2, margin:20, nav:true,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:2 }
        }
    }

      return (
        <div className="text-center bg-white sm:p-5 md:p-10 p-3 rounded-[60px] flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Pusat Reward</h1>
            <div className="bg-white m-4 rounded-[60px] shadow-md flex-none lg:flex">
                <div className="lg:w-1/3 sm:w-full flex justify-center">
                    {sessionStorage.getItem("token") ? (
                        <ModalButton btnContent={(btnCtn)} mdlContent={(<ModalSpin />)} maxWidth='100vw' />
                    ) : (<Link to='/login'>{btnCtn}</Link>)}
                </div>
                {members.length === 0 ? (
                    <div className='flex flex-col justify-center items-center lg:mx-auto'>
                        <Link to={sessionStorage.getItem("token") ? "/mission/daily-mission" : '/login'}>
                            <button className='flex items-center justify-center px-5 py-3 rounded-3xl shadow-lg text-xl font-semibold'>
                                Buat Tim <span className='ms-5 text-4xl'>+</span>
                            </button>
                        </Link>
                    </div>
                ) : (
                    <OwlCarousel className='owl-theme lg:w-2/3 my-10' {...options} >
                        {members.map(member => (
                            <WheelReward key={member.id} member={member} />
                        ))}
                    </OwlCarousel>
                )}
            </div>
      
            {/* link to daily mission */}
            <Link to="/mission/daily-mission" >
                <button className="p-sm-3 p-md-4 mb-4 p-4 mt-8 text-white bg-main-color rounded-[60px] font-bold text-[16px] md:text-xl shadow-md w-full">Lihat Aktivitas Daily Mission</button>
            </Link>

            {members.filter(member => member.Rewards[0]).length > 0 &&
                <>
                    <h1 className='mt-5 text-center text-3xl font-bold'>Ringkasan</h1>
                    <StatSummary members={members} />
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