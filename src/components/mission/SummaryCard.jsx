import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PropTypes from 'prop-types';
import { titleCase } from '../Breadcrumbs';

// SummaryCard component function
export default function SummaryCard({ title, value, fontSz, description, firstRow, memberName }) {
  let splitValues
  if (value) splitValues = value.toString().split('/')

  return (
    <div className='flex justify-center'>
      <div
        className='p-3 rounded-[20px] md:rounded-[40px] border-0 shadow-md flex flex-col justify-between max-w-[250px] lg:max-w-[350px] mt-2 md:mt-8 space-y-2 md:space-y-4'
        style={{ width: '100%', color: '#675893' }}
      >
        {firstRow >= 0 ? (
          <>
            <div>
              <h5 className='text-[14px] md:text-3xl font-semibold'>{firstRow !== 100 ? title.split(" ")[0] : title}</h5>
              {memberName && (
                <h5 className='text-slate-300 mt-0.5 font-bold text-sm'>{titleCase(memberName)}</h5>
              )}
            </div>
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
        ) : value && (
          <>
            <h5 className='text-[14px] md:text-3xl font-semibold'>{title}</h5>
            <div className="my-2 flex justify-center items-end">
              <h6 className={`font-bold ${fontSz}`}>
                {!splitValues || fontSz === 'text-3xl' ? value.toString().replace('/', ' / ') : splitValues[0]}
              </h6>
              {fontSz !== 'text-3xl' && splitValues.length > 1 &&
                <h6 className='text-violet-400 font-semibold text-lg'>/ {splitValues[1]}</h6>
              }
            </div>
            <div className='text-violet-400 text-[10px] font-semibold md:text-lg font-normal bg-transparent border-0'>
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
// SummaryCard.propTypes = {
//   title: PropTypes.string.isRequired, // title is required and must be a string
//   value: PropTypes.string, // value is optional and must be a string if provided
//   fontSz: PropTypes.string, // fontSz is optional and must be a string if provided
//   description: PropTypes.string, // description is optional and must be a string if provided
//   firstRow: PropTypes.number, // firstRow is optional and must be a number if provided
// };
