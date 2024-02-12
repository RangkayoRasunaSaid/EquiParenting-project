import { titleCase } from "../Breadcrumbs"

export default function WheelReward({ member }) {
    return (
        <div className="text-center lg:w-1/3 p-sm-3 p-md-4 p-2">
            <h3 className='text-xl font-semibold'>{titleCase(member.member_role)}</h3>
            <h4 className='text-2xl font-bold my-3'>Ditraktir bunda di alun kota</h4>
            <p className='text-sm font-semibold text-violet-400'>(Diperoleh pada: 6 Jan 2024) 19:30:00 WIB</p>
        </div>
    )
}