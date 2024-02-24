import React, { useRef, useEffect, useState } from 'react';
import './spinStyle.css'
import { titleCase } from '../../Breadcrumbs';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../config/config';

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

const ModalSpin = ({ spinMembers, setUpdateMembers }) => {
  // const [claimingReward, setClaimingReward] = useState(false)
  let claimingReward = false
  let memberSpin = ''
  if (spinMembers.length === 1) memberSpin = spinMembers[0]
  const [rewardFor, setRewardFor] = useState(memberSpin)
  const [title, setTitle] = useState('')
  const canvasRef = useRef(null);
  const spinRef = useRef(null);
  const spanRef = useRef(null);
  const [angVel, setAngVel] = useState(0);
  const [ang, setAng] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dia = canvas.width;
    const rad = dia / 2;
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / sectors.length;
    const friction = 0.991;

    const getIndex = () => Math.floor(sectors.length - (ang / TAU) * sectors.length) % sectors.length;

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

    const rotate = () => {
      const sector = sectors[getIndex()];
      canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
      spanRef.current.textContent = !angVel ? 'SPIN' : sector.label;
      spinRef.current.style.background = sector.color;
      setTitle(sector.label)
    };

    const frame = async () => {
      if (!angVel || claimingReward) return
      let newAngVel = angVel * friction;
      if (newAngVel < 0.002) {
        claimingReward = true
        console.log(claimingReward);
        newAngVel = 0
        const loadingToastId = toast.loading('Claiming the Reward ...');
        console.log(ang, angVel, claimingReward);
        let reqData
        if (spinMembers.length === 1) reqData = rewardFor
        else reqData = JSON.parse(rewardFor)
        try {
          const response = await axios.post(config.apiUrl + "/spin-wheel", {
            id_member: reqData.id,
            title: title,
            id_reward: reqData.Rewards[0].id,
          });
          toast.update(loadingToastId, { render:  'Selamat Menikmati Rewardmu!', isLoading: false, autoClose: 5000, closeOnClick: true });
        
        } catch (error) {
          toast.update(loadingToastId, { render: "Pengambilan member gagal", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
          console.error("Error adding claiming reward:", error);
        } finally {
          spinRef.current.classList.add('modal-button');
          spinRef.current.click();
          setUpdateMembers(Date.now())
          return
        }
      };

      let newAng = ang + newAngVel;
      newAng %= TAU;
      setAng(newAng);
      setAngVel(newAngVel);
      rotate();
    };

    const engine = () => {
      frame();
      requestAnimationFrame(engine);
    };

    sectors.forEach(drawSector);
    rotate(); // Initial rotation
    engine(); // Start engine

    return () => cancelAnimationFrame(engine);
  }, [ang, angVel]);

  const handleClick = () => {
    if (!rewardFor) {
      toast.warning('Pilih Penerima Reward')
      return
    }
    if (!angVel && !claimingReward) {
      const newAngVel = Math.random() * (0.45 - 0.25) + 0.25;
      setAngVel(newAngVel);
    }
  };

  return (
      <div>
        <div className={spinMembers.length > 1 ? 'flex justify-center items-center' : ''}>
          <h1 className="rounded-xl sticky top-0 px-5 text-center text-2xl font-semibold ungu1" style={{color:"#675893"}}>
            Putar Roda Rewards {spinMembers.length === 1 ? `untuk ${titleCase(spinMembers[0].member_role)} ${titleCase(spinMembers[0].name)}` : ''}
          </h1>
          {spinMembers.length > 1 &&
            <select value={rewardFor} onChange={(e) => setRewardFor(e.target.value)} className="font-semibold rounded-[30px] outline-0 border-0 text-xl" style={{color:"#675893"}}>
              <option className="font-semibold text-lg rounded-[30px] border-0" value="" disabled>untuk siapa</option>
                {spinMembers.map(m => (
                  <option
                    key={m.id} className="font-semibold text-lg rounded-[30px] border-0"
                    style={{color:"#675893"}} value={JSON.stringify(m)}>
                      {titleCase(m.member_role)} {titleCase(m.name)}
                  </option>
                ))}
            </select>
          }
        </div>
          <div className="grid grid-cols-4">
              <div className='px-5 md:col-span-3 col-span-4' id='wheelOfFortune' style={{maxHeight: '95vh'}}>
                  <canvas ref={canvasRef} id='canvas' width={600} height={600}></canvas>
                  <div id="spin" ref={spinRef} onClick={handleClick}>
                    SPIN
                  </div>
              </div>
                <div className='md:col-span-1 col-span-4 flex justify-center'>
                    <p ref={spanRef} className='min-h-20 w-44 flex flow-col items-center text-center font-semibold' id="chosen-sector" style={{color:"#675893"}}>
                        SPIN
                    </p>
                </div>
          </div>
      </div>
  );
};

export default ModalSpin;