import React from 'react';
import CircleProgress from './CircleProgress';

export default function SummaryCard({ title, value, fontSz, description, firstRow }) {
  return (
    <div className='col flex justify-center'>
      <div className='card rounded-5 border-0 shadow-md' style={{ width: '100%', color: '#675893', maxWidth: '300px' }}>
        <div className='card-body flex flex-col justify-between'>
          <h5 className='card-title fs-2 font-bold'>{title}</h5>
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
    </div>
  );
}
