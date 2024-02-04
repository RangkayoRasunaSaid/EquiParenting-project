import React from 'react';
import CircleProgress from './CircleProgress';

export default function SummaryCard({ title, value, fontSz, description, firstRow }) {
  return (
    <div className='flex justify-center'>
      <div
        className='p-3 rounded-[60px] border-0 shadow-md flex flex-col justify-between'
        style={{ width: '100%', color: '#675893', maxWidth: '300px' }}
      >
        <h5 className='text-3xl font-bold'>{title}</h5>
        {firstRow ? (
          <CircleProgress percent={firstRow} />
        ) : (
          <h6 className={`my-2 font-bold ${fontSz}`}>{value}</h6>
        )}
        <div className='text-violet-400 text-sm font-semibold bg-transparent border-0'>
          {description}
        </div>
      </div>
    </div>
  );
}
