// TaskItem.js
import React from 'react';

const TaskItem = ({ category, title, timestamp, imageUrl, description, completed, responsible, approvedBy, deadline, disabled }) => {
  return (
    <div className='item'>
      <div className="card position-relative rounded-5 border-0 mt-3 shadow-md" style={{ zIndex: '1' }}>
        <div className={`position-absolute rounded-1 text-xs font-semibold px-5 py-1 shadow-md top-0 start-50 purpleBg translate-middle`} style={{ backgroundColor: "#a693de" }}>{category}</div>
        <div className="card-body px-4 py-3">
          <h5 className="card-title fs-6 font-bold my-2" style={{ color: "#675893" }}>{title}</h5>
          <h6 className="card-subtitle mb-3 text-slate-300 text-xs font-semibold">{timestamp}</h6>
          <div className="text-center rounded-5 mb-3 text-xs font-bold" style={{ maxHeight: "150px", overflow: "hidden", backgroundColor:"#d9d9d9", color:"#a49eb5" }}>
            {!imageUrl ? (
                <div className="p-4">
                    <label role="button" for='photo-input'>
                        <p className="mb-4">Unggah Bukti Berupa Foto</p>
                        <h1 className="text-6xl" style={{color:"#675893"}}><i className="bi bi-upload"></i></h1>
                    </label>
                    <input id="photo-input" type="file" style={{display:"none"}} />
                </div>
            ) : (
                <img style={{ width: "100%", height: "auto", objectFit: "cover" }} alt="..." src={imageUrl} />
            )}
            
          </div>
          <p className="card-text text-xs font-bold">Deskripsi:</p>
          <p className="card-text text-xs font-medium">{description}</p>
          <p className="text-slate-300 text-xs font-semibold text-center my-3">
            {completed.includes('Diselesaikan') ? completed : (
                <span className='text-red-500'>{completed}</span>
            )}
          </p>
            <p className="text-xs font-bold mb-2">Penanggung Jawab: {responsible}</p>
            <div className="row g-3 align-items-center text-xs font-bold mb-2">
                <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label">Disetujui Oleh: </label>
                </div>
                <div className="col-auto">
                    <select className="form-select text-xs font-bold rounded-pill form-select-sm" style={{color:"#675893"}} aria-label="Small select example">
                        <option className="text-xs font-bold" style={{color:"#675893"}} selected>{approvedBy}</option>
                        <option className="text-xs font-bold" style={{color:"#675893"}} value="1">Ayah</option>
                    </select>
                </div>
            </div>
            <p className="text-xs font-bold mb-4">Set Alarm: {deadline} <i className="ms-1 font-bold bi bi-pencil-square"></i></p>
            <div className="flex justify-center">
                <button className="purpleBg rounded-2 shadow-md py-2 px-3 font-semibold" disabled style={{backgroundColor:"#a693de"}}>Misi Selesai</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
