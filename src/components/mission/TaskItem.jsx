// TaskItem.js
import React, { useRef, useState } from 'react';
import moment from 'moment/moment';
import { titleCase } from '../Breadcrumbs';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { approveActivity } from '../../redux/slices/activitySlice';

function formatDate(stringDate) {
  const buttonRef = useRef(null);
  let date = moment(stringDate);
  date = moment(stringDate).utcOffset('+0700');
  return date.format('D MMM YYYY HH:mm [WIB]')
}

const TaskItem = ({ activity, responsible, history=false }) => {
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const { members } = useSelector(state => state.member)
  const { loading } = useSelector(state => state.activity)
  let date = moment(activity.date_start_act);
  if (activity.approval_date) date = moment(activity.approval_date)
  date = date.utcOffset('+0700');
  let currentDate = moment().utcOffset('+0700');
  let yesterday = moment().subtract(1, 'days').utcOffset('+0700');
  let tomorrow = moment().add(1, 'days').utcOffset('+0700');
  
  let formattedDate;
  
  if (date.isSame(currentDate, 'day')) formattedDate = 'Hari ini, ' + date.format('D MMM YYYY HH:mm [WIB]');
  else if (date.isSame(yesterday, 'day')) formattedDate = 'Kemarin, ' + date.format('D MMM YYYY HH:mm [WIB]');
  else if (date.isSame(tomorrow, 'day')) formattedDate = 'Besok, ' + date.format('D MMM YYYY HH:mm [WIB]');
  else formattedDate = date.format('D MMM YYYY HH:mm [WIB]');

  let targetDate = moment(activity.date_stop_act);
  let diffMilliseconds = targetDate.diff(moment());
  let diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  let diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  let isLate = diffMilliseconds < 0;
  let isLateApproval = activity.date_stop_act < activity.approval_date;
  diffHours = Math.abs(diffHours);
  diffMinutes = Math.abs(diffMinutes);
  let timeDifference = (isLate ? "Terlambat " : "") + diffHours + " Jam " + diffMinutes + " Menit";

  const [approvedBy, setApprovedBy] = useState('');
  let allRolesUnique = true
  if (members) allRolesUnique = new Set(members.map(member => member.member_role)).size === members.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    buttonRef.current.disabled = true
    if (!approvedBy) {
      buttonRef.current.disabled = false
      return toast.warning("Harap isi disetujui oleh")
    }
    buttonRef.current.disabled = true
    const member = members.find(member => member.id === activity.id_member);
    dispatch(approveActivity({activity, approvedBy, member}))
  };
  
  return (
    <div className='item'>
      <div className="relative rounded-[60px] border-0 mt-3 shadow-md" style={{ zIndex: '1' }}>
        <div className="absolute rounded-md text-xs font-semibold px-5 py-1 shadow-md -top-2 left-1/2 transform -translate-x-1/2 text-white text-center" style={{ backgroundColor: "#a693de" }}>{activity.category}</div>
        <div className="px-4 py-3">
          <h5 className="text-center text-base font-bold my-2" style={{ color: "#675893" }}>{activity.title}</h5>
          <h6 className="text-left mb-3 text-slate-300 text-xs font-semibold">
            {formattedDate}
          </h6>
          <p className="text-left text-xs font-bold">Deskripsi:</p>
          <p className="text-left text-xs font-medium mb-2">{activity.description}</p>
          <p className="text-slate-300 text-xs font-semibold text-center my-3">
            {!activity.approval_date ? (
              <span className='text-red-500'>{"Batas Waktu: " + timeDifference}</span>
            ) : (
              isLateApproval ? (
                <span className='text-red-500'>Diselesaikan Terlambat</span>
              ) : (
                <span>Diselesaikan Tepat Waktu</span>
              )
            )}
          </p>

          <p className="text-left text-xs font-bold mb-2">Poin yang {!activity.approval_by ? 'Akan' : ''} Diperoleh: {activity.point} Poin</p>
          <p className="text-left text-xs font-bold mb-2">Penanggung Jawab: {responsible}</p>
          <form onSubmit={handleSubmit}>
            {activity.approval_by || history ? (
              <p className="text-left text-xs font-bold mb-2">Disetujui Oleh: {!activity.approval_by ? '-' : titleCase(activity.approval_by)}</p>
            ) : (
              <div className="flex items-center gap-3 text-xs font-bold mb-2">
                  <div>
                      <label className="col-form-label">Disetujui Oleh: </label>
                  </div>
                  <div>
                      <select value={approvedBy} onChange={(e) => setApprovedBy(e.target.value)} className="form-select text-xs font-bold rounded-[30px] form-select-sm" style={{color:"#675893"}}>
                        <option value="" disabled>Select One</option>
                          {members && members.map(m => (
                            <option
                              key={m.id} className="text-xs font-bold"
                              style={{color:"#675893"}} value={m.member_role}>
                                {titleCase(m.member_role)} {allRolesUnique ? '' : titleCase(m.name)}
                            </option>
                          ))}
                      </select>
                  </div>
              </div>
            ) }
                <p className="text-xs font-bold mb-4">
                  Waktu Aktivitas: {formatDate(activity.date_start_act)} - {formatDate(activity.date_stop_act)}
                </p>
                <div className="flex justify-center">
                    <button ref={buttonRef}
                      type='submit'
                      className="text-white hover:bg-ungu1/50 disabled:bg-ungu1/50 bg-ungu1 rounded-lg shadow-md py-2 px-3 font-semibold "
                      disabled={loading || activity.approval_date || history}>
                        Misi Selesai
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};
TaskItem.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
      ]).isRequired,
      member_role: PropTypes.string.isRequired,
      // Define other member properties here if needed
  })).isRequired,
  member: PropTypes.shape({
      // Assuming 'member' has similar properties to those in 'members'
      id: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
      ]).isRequired,
      member_role: PropTypes.string.isRequired,
      // Include other properties of 'member' that you use
  }),
  activity: PropTypes.shape({
      id: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
      ]).isRequired,
      title: PropTypes.string.isRequired,
      date_start_act: PropTypes.string.isRequired,
      date_stop_act: PropTypes.string.isRequired,
      approval_date: PropTypes.string,
      approval_by: PropTypes.string,
      point: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // Add other activity properties as needed
  }).isRequired,
  bySystem: PropTypes.bool,
  responsible: PropTypes.string,
};

// Set default props for optional properties
TaskItem.defaultProps = {
  bySystem: false, // Assuming 'bySystem' is not required and defaults to false
};
export default TaskItem;
