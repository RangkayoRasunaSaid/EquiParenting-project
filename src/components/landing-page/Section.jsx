{/*

---Props----

contoh penggunaan props, jadi nanti di halaman atau 
komponen yang manggil Section ini yang berisi value-value nya

nah perlu diketahui bahwa kita harus tau komponen mana yang bisa dijadikan props,
biasanya yang polanya berulang-ulang dan sama, jadi di bagian komponen yang jadi halaman utama itu yang menyesuaikan

import PropTypes from 'prop-types';

const Section = (props) => {
    return(
        <> 
            <img src= {props.img} />
            <h1>{props.title}</h1>

        </>
    )
}
Section.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add more prop validations as needed
};
export default Section;

*/}

{/**

--Hooks dan State---

state itu data yang dinamis yang biasanya dari api atau inputan mangkanya butuh hooks.

hooks itu ditandai dengan mengimpor: import {useState} from 'react'

contoh dalam menampilkan list buah baik menggunakan loop map maupun non loop

import {useState} from 'react';

//menggunakan loop
const ListBuah = () => {
    //buah = tempat data tersimpan, setBuah itu function untuk mengubah data, useState(data_yang_ingin_disimpan)
    const [buah, setBuah] = useState(['Apel', 'Jeruk', 'Pisang', 'Mangga'])
    return(
        <>
            <h1>List buah looping map:</h1>
            <ul>
                {buah.map((namaBuah, index) => (
                    <li key={index}>{namaBuah}</li>
                ))}
            </ul>
        </>
    );
}
export default ListBuah;

//non loop
const ListBuah = () => {
    //buah = tempat data tersimpan, setBuah itu function untuk mengubah data, useState(data_yang_ingin_disimpan)
    const [buah, setBuah] = useState(['Apel', 'Jeruk', 'Pisang', 'Mangga'])
    return(
        <>
            <h1>List Buah tanpa Loop:</h1>
            <ul>
                <li>{buah[0]}</li>
                <li>{buah[1]}</li>
                <li>{buah[2]}</li>
                <li>{buah[3]}</li>
            </ul>
        </>
    );
}
export default ListBuah;

*/}

{
/**
 * nah sekarang coba kita combine props dengan hooks
 * 
 */
}