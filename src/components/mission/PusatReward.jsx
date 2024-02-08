import SummaryCard from './SummaryCard.jsx';
import WheelComponent from './WheelComponent.jsx';
import ModalButton from "./modals/ModalButton";
import ModalSpin from "./modals/ModalSpin";
import { Link } from 'react-router-dom';

export default function PusatReward({ }) {
    // window.onload = () => {
    //     const props = {
    //         items: Array.from({ length: 12 }, (_, index) => ({
    //             label: `Item ${index + 1}`,
    //             backgroundColor: `hsl(${(index * 30)}, 70%, 70%)`, // Rainbow colors
    //           }))
    //     };
    //   }
    // const wheelContainerRef = useRef(null);
    // const [spinning, setSpinning] = useState(false);

    // const handleSpinClick = () => {
    //     if (!spinning) {
    //     const duration = 5000; // Adjust the duration as needed
    //     const easing = 'easeInOutCubic'; // You can use different easing functions

    //     // Simulate fetching the winning index from the backend
    //     const winningItemIndex = Math.floor(Math.random() * 6); // Assuming 6 items

    //     // Get the Wheel instance and spin to the winning index
    //     const wheelInstance = new Wheel(wheelContainerRef.current, props);
    //     wheelInstance.spinToItem(winningItemIndex, duration, true, 2, 1, easing);

    //     // Update the spinning state after the animation duration
    //     setTimeout(() => {
    //         setSpinning(false);
    //     }, duration);

    //     setSpinning(true);
    //     }
    // };

    
        // const [selectedTheme, setSelectedTheme] = useState(0);

        // useEffect(() => {
        //     loadFonts(props.map((i) => i.itemLabelFont));
        // }, []);

        // const handleThemeChange = (event) => {
        //     setSelectedTheme(parseInt(event.target.value, 10));
        // };
        // useEffect(() => {
        //     const container = document.querySelector('#wheel-wrapper');
        //     const wheel = new Wheel(container, props[0]);
        
        //     return () => {
        //         document.querySelector('#wheel-wrapper').innerHTML = ''
        //     };
        //   }, []);

      return (
        <div className="bg-white sm:p-5 md:p-10 p-3 rounded-[60px] flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold">Pusat Reward</h1>
            <div className="bg-white m-4 rounded-[60px] shadow-md flex-none lg:flex pb-sm-3 pb-md-4 pb-2 ps-sm-3 ps-md-4 ps-2">
                <div className="lg:w-1/3">
                    <ModalButton btnContent={(
                        <img role='button' className='rounded-circle' src="https://tr.rbxcdn.com/4010ec7c19018ebf46fde61a66b302f7/420/420/Image/Png" alt="spin-wheel" />
                        )}
                        mdlContent={(<ModalSpin />)}
                        maxWidth='100vw'
                    />
                    {/* <WheelComponent /> */}
                </div>
                <div className="text-center lg:w-1/3 p-sm-3 p-md-4 p-2">
                    <h3 className='text-xl font-semibold'>Ayah</h3>
                    <h4 className='text-2xl font-bold my-3'>Ditraktir bunda di alun kota</h4>
                    <p className='text-sm font-semibold text-violet-400'>(Diperoleh pada: 6 Jan 2024) 19:30:00 WIB</p>
                </div>
                <div className="text-center lg:w-1/3 p-sm-3 p-md-4 p-2">
                    <h3 className='text-xl font-semibold'>Bunda</h3>
                    <h4 className='text-2xl font-bold my-3'>Bunda dapet hadiah sepatu "Branded"</h4>
                    <p className='text-sm font-semibold text-violet-400'>(Diperoleh pada: 6 Jan 2024) 19:31:00 WIB</p>
                </div>
            </div>
            <Link to="/mission/daily-mission">
                <button className="p-sm-3 p-md-4 mb-4 p-3 mx-5 text-white bg-main-color rounded-[60px] font-bold shadow-md" style={{width: '95%'}}>Lihat Aktivitas Daily Mission</button>
            </Link>
            <div className="p-sm-3 p-md-4 p-3 px-sm-4 px-md-5 px-3 mb-4 mx-sm-1 mx-md-5 mx-1 bg-white shadow-md rounded-[60px]">
                <h1 className="text-center text-3xl font-bold mb-4">Ringkasan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <SummaryCard title='Ayah Idaman' value='60' fontSz='text-7xl' description='selesaikan banyak misi untuk menaikan score' firstRow={94} />
                    <SummaryCard title='Bunda Idaman' value='60' fontSz='text-7xl' description='selesaikan banyak misi untuk menaikan score' firstRow={94} />
                    <SummaryCard title='Daily Mission' value='60' fontSz='text-7xl' description='Misi diselesaikan overdue (per 30 hari)' />
                    <SummaryCard title='Daily Mission' value='2' fontSz='text-7xl' description='Misi diselesaikan overdue (per 30 hari)' />
                    <SummaryCard title='Kategori' value='4' fontSz='text-7xl' description='Kategori yang telah dilaksanakan (per 30 hari)' />
                    <SummaryCard title='Kategori' value='Baby Care' fontSz='text-3xl' description='Paling banyak dilaksanakan (per 30 hari)' />
                </div>
            </div>
        </div>
    )
}