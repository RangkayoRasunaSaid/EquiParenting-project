import DailyMission from './DailyMission';
import PusatReward from './pusatReward';

export default function() {
    return (
        <div className="bg-gradient-to-r from-violet-100 m-sm-3 m-md-5 m-2 p-sm-3 p-md-5 p-2 rounded-5">
            <h1 className="text-center fs-1 font-semibold">Selamat datang di misi keluarga idaman!</h1>
            {/* <PusatReward /> */}
            <DailyMission />
        </div>
    )
}