import Aktivitas from "./Aktivitas";
import Tim from "./Tim";

export default function DailyMission() {
    return (
        <div className="bg-white mx-4 rounded-[60px] pb-5 flex flex-col justify-center">
            <Tim styled />
            <Aktivitas />
        </div>
    )
}