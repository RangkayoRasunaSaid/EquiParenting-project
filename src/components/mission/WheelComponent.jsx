import { useEffect } from 'react';
import { Wheel } from 'spin-wheel';
import { props } from './props.js';

export default function WheelComponent() {
  useEffect(() => {
    const container = document.querySelector('#wheel-wrapper');
    const wheel = new Wheel(container, props[0]);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id='wheel-wrapper' className='wheel-wrapper h-72'></div>;
}