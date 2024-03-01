import PropTypes from 'prop-types';
import img1 from '../../../assets/fitur-mission-bunda.png'
import img2 from '../../../assets/fitur-mission-ayah.png'
import img3 from '../../../assets/contoh-activity-bunda.png'
import img4 from '../../../assets/contoh-activity-ayah.png'

export default function ModalHelp({ role }) {
    const missionImage = role === "bunda" ? img1 : img2;
    const activityImage = role === "bunda" ? img3 : img4;
    return (
        <div>
            <h1 className="rounded-3xl sticky top-0 bg-white py-5 text-center text-2xl font-bold ungu1">Petunjuk Pembuatan Aktivitas</h1>
            <div style={{overflowY: 'scroll', maxHeight: '70vh'}}>
                <img className="rounded-[90px]" src={missionImage} alt="" />
                <div className="flex justify-center mt-5">
                    <img width='100%' style={{maxWidth: '700px'}} src={activityImage} alt="" />
                </div>
            </div>
            <div className="text-center text-white text-sm">.</div>
        </div>
    )
}
ModalHelp.propTypes = {
    role: PropTypes.string.isRequired,
};