import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PropTypes from 'prop-types';

// SummaryCard component function
export default function SummaryCard({ title, value, fontSz, description, firstRow }) {
  return (
    <div className='flex justify-center'>
      <div
        className='p-3 rounded-[20px] md:rounded-[40px] border-0 shadow-md flex flex-col justify-between max-w-[250px] lg:max-w-[350px] mt-2 md:mt-8 space-y-2 md:space-y-4'
        style={{ width: '100%', color: '#675893' }}
      >
        {firstRow >= 0 ? (
          <>
            <h5 className='text-[14px] md:text-3xl font-semibold'>{firstRow !== 100 ? title.split(" ")[0] : title}</h5>
            <div className='flex justify-center'>
              <div style={{ width: 130, height: 130 }}>
                <CircularProgressbarWithChildren value={firstRow} strokeWidth={12}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                    pathTransitionDuration: 0.5,

                    pathColor: `rgba(133,119,170, ${firstRow / 100})`,
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}>
                  <div style={{ fontSize: 25, marginTop: -5, color: '#000' }}>
                    <strong>{firstRow}%</strong>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className='text-violet-400 text-[10px] font-semibold md:text-lg font-normal bg-transparent border-0'>
              {firstRow !== 100 && description}
            </div>
          </>
          // <CircleProgress percent={firstRow} />
        ) : (
          <>
            <h5 className='text-[14px] md:text-3xl font-semibold'>{title}</h5>
            <h6 className={`my-2 font-bold ${fontSz}`}>{value}</h6>
            <div className='text-violet-400 text-[10px] font-semibold md:text-lg font-normal bg-transparent border-0'>
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
SummaryCard.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  value: PropTypes.string, // value is optional and must be a string if provided
  fontSz: PropTypes.string, // fontSz is optional and must be a string if provided
  description: PropTypes.string, // description is optional and must be a string if provided
  firstRow: PropTypes.number, // firstRow is optional and must be a number if provided
};
