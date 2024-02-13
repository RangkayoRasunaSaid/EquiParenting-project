import CircleProgress from './CircleProgress';

// SummaryCard component function
export default function SummaryCard({ title, value, fontSz, description, firstRow }) {
  return (
    <div className='flex justify-center'>
      <div
        className='p-3 rounded-[20px] md:rounded-[40px] border-0 shadow-md flex flex-col justify-between max-w-[250px] lg:max-w-[350px] mt-2 md:mt-8 space-y-2 md:space-y-4'
        style={{ width: '100%', color: '#675893' }}
      >
        <h5 className='text-[14px] md:text-3xl font-semibold'>{title}</h5>
        {firstRow ? (
          <CircleProgress percent={firstRow} />
        ) : (
          <h6 className={`my-2 font-bold ${fontSz}`}>{value}</h6>
        )}
        <div className='text-violet-400 text-xxs md:text-lg font-normal bg-transparent border-0'>
          {description}
        </div>
      </div>
    </div>
  );
}
