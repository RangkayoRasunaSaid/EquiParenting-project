import { useEffect } from "react";
import { titleCase } from "../Breadcrumbs"
import PropTypes from 'prop-types';

export default function WheelReward({ member, percent, memberName, spinTime, setSpinTime }) {
    let endDate = new Date(member.Rewards[0]?.end_date);
    let spinnedAt = new Date(member.Rewards[0]?.spinned_at)
    if (member.Rewards[0].Reward_Items.length > 0) spinnedAt = new Date(member.Rewards[0].spinned_at)

    useEffect(() => {
        if (spinTime) return
        const interval = setInterval(() => {
            const currentDate = new Date();
            endDate = new Date(member.Rewards[0]?.end_date);
            setSpinTime(endDate < currentDate);
        }, 1000);
        return () => clearInterval(interval);
    }, [spinTime]);

    const formatDate = (date) => {
        const addLeadingZero = (num) => (num < 10 ? "0" + num : num);
        return `${addLeadingZero(date.getDate())} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(date)} ${date.getFullYear()} ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:${addLeadingZero(date.getSeconds())} WIB`;
    }

    return (
        <div className="item text-center">
            <h3 className='text-xl font-semibold'>{titleCase(member.member_role)} {memberName ? titleCase(member.name) : ''}</h3>
            {member.Rewards.length > 0 ? (
                <>
                    <h4 className='text-2xl font-bold my-3'>
                        {member.Rewards[0].Reward_Items.length > 0 ? member.Rewards[0].Reward_Items[0].title : (
                            spinTime ? `Putar Spin ${percent < 100 ? 'apabila Score 100%' : ''}`
                                : `Putar Spin Setelah Periode Selesai ${percent < 100 ? 'dengan Score 100%' : ''}`
                        )}
                    </h4>
                    <p className='text-sm font-semibold text-violet-400'>
                        {spinTime ? `
                                ${percent === 100 ? `(Diperoleh Pada: ${member.Rewards[0].Reward_Items.length > 0 ? formatDate(spinnedAt) : '-' })` : ''}
                            ` : `
                                (Periode selesai pada: ${formatDate(endDate)})
                        `}
                    </p>
                </>
            ) : (
                <h4 className='text-2xl font-bold my-3'>Silahkan Atur Periode</h4>
            )}
        </div>
    );
}
WheelReward.propTypes = {
    member: PropTypes.shape({
        member_role: PropTypes.string.isRequired,
        // Include any other properties of member that you use or expect to use
    }).isRequired,
};