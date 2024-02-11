import { Link } from "react-router-dom";
import ModalPeriode from "./modals/ModalPeriode";
import ModalButton from "./modals/ModalButton";

export default function({ member }) {
    // Format the selected period for display

    // const isWithinPeriod = (endTime) => {
    //     const now = Date.now();
    //     return now >= now <= new Date(endTime).getTime();
    // };

    const formattedPeriod = member.start_date && member.end_date ? `${new Date(member.start_date).toLocaleDateString()} - ${new Date(member.end_date).toLocaleDateString()}` : '';
    return (
        <div className={`px-10 py-6 rounded-[20px] border-0 shadow-md h-100 ${!formattedPeriod ? 'bg-slate-100' : ''}`}>
            <Link to={formattedPeriod ? "/mission/daily-mission/misi-bunda" : '#'}>
                <h5 className="text-xl font-bold" style={{ color: "#675893" }}>Misi {member.member_role.charAt(0).toUpperCase() + member.member_role.substr(1).toLowerCase()}</h5>
                <div className="flex justify-center mt-3">
                    <img className="rounded-full ring-2 ring-purple-500" style={{ height: "90px", width: "90px" }} alt="..." src={`/src/assets/${member.member_role}.svg`} />
                </div>
                {/* Render the formatted period if it exists */}
                {formattedPeriod ? (
                    <h1 className='text-center font-semibold text-md mt-5'>Periode<br />{formattedPeriod}</h1>
                ) : (
                    <ModalButton btnContent={(
                      <button className='mt-5 text-center p-2 px-3 rounded-xl font-medium bg-main-color text-white'>
                        Atur Periode
                      </button>
                    )} mdlContent={(<ModalPeriode memberId={member.id} />)} />
                )}
            </Link>
        </div>
    )    
}