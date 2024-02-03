import Aktivitas from "./Aktivitas";
import Tim from "./Tim";

export default function DailyMission() {
    return (
        <div className="bg-white rounded-5 flex flex-col justify-center">
            <Tim />
            <Aktivitas />
        </div>
    )
}