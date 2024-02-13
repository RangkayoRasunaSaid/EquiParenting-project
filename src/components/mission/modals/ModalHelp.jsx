import PropTypes from 'prop-types';

export default function ModalHelp({ role }) {
    return (
        <div>
            <h1 className="rounded-3xl sticky top-0 bg-white py-5 text-center text-2xl font-bold ungu1">Petunjuk Pembuatan Aktivitas</h1>
            <div style={{overflowY: 'scroll', maxHeight: '70vh'}}>
                <img className="rounded-[90px]" src={`/src/assets/fitur-mission-${role}.png`} alt="" />
                <div className="flex justify-center mt-5">
                    <img width='100%' style={{maxWidth: '700px'}} src={`/src/assets/contoh-activity-${role}.png`} alt="" />
                </div>
            </div>
            <div className="text-center text-white text-sm">.</div>
        </div>
    )
}
ModalHelp.propTypes = {
    role: PropTypes.string.isRequired,
};