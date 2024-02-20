import { Link } from "react-router-dom";
import { titleCase } from "../Breadcrumbs";
import PropTypes from 'prop-types';

export default function MisiPeriode({ members, member }) {
    const formattedPeriod = member.Rewards[0]?.start_date && member.Rewards[0]?.end_date ?
        `${new Date(member.Rewards[0].start_date).toLocaleDateString()} - ${new Date(member.Rewards[0].end_date).toLocaleDateString()}`
        : '';

    return (
        <div className={`px-10 py-6 rounded-[20px] border-0 shadow-md h-100 item`}>
            <Link
                to={`/mission/daily-mission/:${member.member_role}`}
                state={{ members, member }}
            >
                <h5 className="text-xl font-bold" style={{ color: "#675893" }}>Misi {titleCase(member.member_role)}</h5>
                <div className="flex justify-center mt-3">
                    <img className={`rounded-full ${member.avatar || member.member_role === 'others' && 'ring-2 ring-purple-500'}`} style={{ height: "90px", width: "90px" }} alt="..." src={`/src/assets/${member.member_role === 'others' ? 'others.png' : member.member_role+'.svg'}`} />
                </div>
            </Link>
        </div>
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