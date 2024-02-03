import Breadcrumbs from '../Breadcrumbs.jsx';
import SummaryCard from './SummaryCard.jsx';
import WheelComponent from './WheelComponent.jsx';
import { Link } from 'react-router-dom';

export default function PusatReward({ onButtonClick }) {
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
        <div className="bg-white p-sm-3 p-md-4 p-2 rounded-5 flex flex-col justify-center">
            <h1 className="text-center fs-2 font-bold">Pusat Reward</h1>
            <div className="bg-white m-4 rounded-5 shadow-md row pb-sm-3 pb-md-4 pb-2 ps-sm-3 ps-md-4 ps-2">
                <div className="col-md-4">
                    <WheelComponent />
                </div>
                <div className="dad-spin text-center col-md-4 p-sm-3 p-md-4 p-2">
                    <h3 className='fs-4 font-semibold'>Ayah</h3>
                    <h4 className='fs-3 font-bold my-3'>Ditraktir bunda di alun kota</h4>
                    <p className='text-sm font-semibold text-violet-400'>(Diperoleh pada: 6 Jan 2024) 19:30:00 WIB</p>
                </div>
                <div className="mom-spin text-center col-md-4 p-sm-3 p-md-4 p-2">
                    <h3 className='fs-4 font-semibold'>Bunda</h3>
                    <h4 className='fs-3 font-bold my-3'>Bunda dapet hadiah sepatu "Branded"</h4>
                    <p className='text-sm font-semibold text-violet-400'>(Diperoleh pada: 6 Jan 2024) 19:31:00 WIB</p>
                </div>
            </div>
            <Link to="/mission/daily-mission">
                <button className="p-sm-3 p-md-4 mb-4 p-3 mx-5 purpleBg rounded-5 font-bold shadow-md" style={{width: '90%'}}>Lihat Aktivitas Daily Mission</button>
            </Link>
            {/* <button onClick={onButtonClick} className="p-sm-3 p-md-4 mb-4 p-3 mx-5 purpleBg rounded-5 font-bold shadow-md">Lihat Aktivitas Daily Mission</button> */}
            <div className="p-sm-3 p-md-4 p-3 px-sm-4 px-md-5 px-3 mb-4 mx-sm-1 mx-md-5 mx-1 bg-white shadow-md rounded-5">
                <h1 className="text-center fs-2 font-bold mb-4">Ringkasan</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4 text-center">
                    <SummaryCard title='Ayah Idaman' value='60' fontSz='text-7xl' description='selesaikan banyak misi untuk menaikan score' firstRow={94} />
                    <SummaryCard title='Bunda Idaman' value='60' fontSz='text-7xl' description='selesaikan banyak misi untuk menaikan score' firstRow={94} />
                    <SummaryCard title='Daily Mission' value='60' fontSz='text-7xl' description='Misi diselesaikan overdue (per 30 hari)' />
                    <SummaryCard title='Daily Mission' value='2' fontSz='text-7xl' description='Misi diselesaikan overdue (per 30 hari)' />
                    <SummaryCard title='Kategori' value='4' fontSz='text-7xl' description='Kategori yang telah dilaksanakan (per 30 hari)' />
                    <SummaryCard title='Kategori' value='Baby Care' fontSz='fs-2' description='Paling banyak dilaksanakan (per 30 hari)' />
                </div>
            </div>
        </div>
    )
}