import PropTypes from 'prop-types';

const CustomSelect = ({ onChange }) => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="">Pilih Penyetuju...</option>
            <option value="Dad">Dad</option> {/* Mengganti Ayah dengan Dad */}
            <option value="Mom">Mom</option> {/* Mengganti Bunda dengan Mom */}
            {/* Anda bisa menambahkan opsi dinamis lain jika diperlukan */}
        </select>
    );
};

CustomSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
