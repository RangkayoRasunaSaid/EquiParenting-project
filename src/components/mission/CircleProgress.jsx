import PropTypes from 'prop-types';

export default function CircleProgress({ percent }) {
    return (
        <div className='flex justify-center my-3'>
            <div className="size-[140px] relative">
                <div className="size-[140px] rounded-full shadow-md p-[20px]">
                    <div className="size-[100px] rounded-full shadow-inner flex items-center justify-center">
                        <div className="number font-semibold">{percent}%</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0 size-[140px]' version="1.1">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#DA22FF" />
                            <stop offset="100%" stopColor="#9733EE" />
                        </linearGradient>
                    </defs>
                    <circle className='fill-none stroke-teal-500 stroke-[20px]' style={{stroke:'url(#GradientColor)', strokeDasharray: '350', strokeDashoffset:'15', animation:'anim 2s linerar forwards'}} cx="70" cy="70" r="60" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}
CircleProgress.propTypes = {
    percent: PropTypes.number.isRequired,
};