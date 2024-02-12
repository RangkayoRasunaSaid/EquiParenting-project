import React, { useState, useEffect, useRef } from 'react';
import './spinStyle.css'

export default function ModalSpin() {
    const sectors = [
        { color: '#6A5ACD', label: 'A Relaxing Spa Day' },
        { color: '#FF6347', label: 'Home-cooked Candlelight Dinner' },
        { color: '#4682B4', label: 'Weekend Getaway' },
        { color: '#32CD32', label: 'Personalized Love Notes' },
        { color: '#FFD700', label: 'DIY Coupon Book' },
        { color: '#9370DB', label: 'Photobook of Memories' },
        { color: '#FFA07A', label: 'Adventure Experience' },
        { color: '#FF4500', label: 'Customized Jewelry' },
        { color: '#8B4513', label: 'Home Spa Kit' },
        { color: '#800080', label: 'Date Night Subscription Box' },
        { color: '#00CED1', label: 'Professional Photoshoot' },
        { color: '#FF69B4', label: 'Handwritten Love Letter' }
      ];

    const [chosenSector, setChosenSector] = useState(null);
      
    const [angVel, setAngVel] = useState(0);
    const [ang, setAng] = useState(0);
  
    const canvasRef = useRef(null)
    const spinElRef = useRef(null)

    const getIndex = () => {
        const tot = sectors.length;
        const normalizedAng = (ang + TAU / 4) % TAU; // Adjusting angle to start from top
        const sectorIndex = Math.floor((tot * normalizedAng) / TAU);
        return sectorIndex >= 0 ? sectorIndex : tot + sectorIndex; // Ensure positive index
      };
      
    const rand = (m, M) => Math.random() * (M - m) + m;
    const tot = sectors.length;
    const dia = 600;
    const rad = dia / 2;
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / sectors.length;
    const friction = 0.991;
  
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
  
      const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;
  
      const drawSector = (sector, i) => {
        const ang = arc * i;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = sector.color;
        ctx.moveTo(rad, rad);
        ctx.arc(rad, rad, rad, ang, ang + arc);
        ctx.lineTo(rad, rad);
        ctx.fill();
        ctx.translate(rad, rad);
        ctx.rotate(ang + arc / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText(sector.label, rad - 10, 10);
        ctx.restore();
      };
  
      function rotate() {
        const sector = sectors[getIndex()];
        canvasRef.current.style.transform = `rotate(${ang - PI / 2}rad)`;
        const label = !angVel ? 'SPIN' : sector.label.split(' ')[0]; // Extracting the first word
        spinElRef.current.textContent = label;
        spinElRef.current.style.background = sector.color;
        setChosenSector(sector.label);
      }
      
      const frame = () => {
        if (!angVel) return;
        let newAngVel = angVel * friction;
        if (newAngVel < 0.002) newAngVel = 0;
        let newAng = ang + angVel;
        newAng %= TAU;
        setAngVel(newAngVel);
        setAng(newAng);
        rotate();
      };
  
      const engine = () => {
        frame();
        requestAnimationFrame(engine);
      };
  
      sectors.forEach(drawSector);
      rotate();
      engine();
  
      return () => cancelAnimationFrame(engine);
    }, [ang, angVel, sectors]);
  
    const handleSpinClick = () => {
      if (!angVel) setAngVel(rand(0.25, 0.45));
    };
  
    return (
        <div>
            <h1 className="rounded-xl sticky top-0 bg-white text-center text-2xl font-bold ungu1">Putar Roda Rewards</h1>
            <div className="grid grid-cols-4">
                <div className='px-5 md:col-span-3 col-span-4' id='wheelOfFortune' style={{maxHeight: '95vh'}}>
                    <canvas ref={canvasRef} id='canvas' width={600} height={600}></canvas>
                    <div id="spin" ref={spinElRef} onClick={handleSpinClick}>
                        SPIN
                    </div>
                </div>
                {chosenSector && (
                    <div className='md:col-span-1 col-span-4 flex justify-center'>
                        <p className='min-h-20 w-44 flex flow-col items-center text-center font-semibold' id="chosen-sector">
                            Chosen Reward: <br />{chosenSector}
                        </p>
                    </div>
                )}
            </div>
        </div>
      );
}