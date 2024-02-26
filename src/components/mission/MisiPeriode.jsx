import { Link } from "react-router-dom";
import { titleCase } from "../Breadcrumbs";
import PropTypes from 'prop-types';

export default function MisiPeriode({ members, member, memberName }) {
    const memberRole = !memberName ? member.member_role : `${member.member_role}-${member.name}`
    return (
        <Link
            to={`/mission/daily-mission/:${memberRole}`}
            state={{ members, member }}
        >
            <div className={`px-10 py-6 rounded-[20px] border-0 shadow-md h-100 item`} onClick={() => window.scrollTo(0, 0)}>
                <h5 className="text-xl font-bold" style={{ color: "#675893" }}>Misi {titleCase(member.member_role)}</h5>
                {memberName && (
                    <h5 className='text-slate-300 mt-0.5 font-bold text-sm'>{titleCase(member.name)}</h5>
                )}
                <div className="flex justify-center mt-3">
                    <img className={`rounded-full ${member.avatar || member.member_role === 'others' && 'ring-2 ring-purple-500'}`} style={{ height: "90px", width: "90px" }} alt="..." src={`/src/assets/${member.member_role === 'others' ? 'others.png' : member.member_role+'.svg'}`} />
                </div>
            </div>
        </Link>
    )    
}
MisiPeriode.propTypes = {
    members: PropTypes.arrayOf(PropTypes.shape({
        // Assuming each member object has at least an id, and possibly other properties like member_role, start_date, end_date, etc.
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        member_role: PropTypes.string.isRequired,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        // Add other member object properties here as needed
    })).isRequired,
    member: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        member_role: PropTypes.string.isRequired,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        // Define other properties of the member object here as needed
    }).isRequired,
};