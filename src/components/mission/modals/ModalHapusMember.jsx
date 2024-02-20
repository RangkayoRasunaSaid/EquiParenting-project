import { titleCase } from '../../Breadcrumbs';

export default function ModalPeriode({ member, handleDelete }) {
  
    return (
        <div className="px-5">
            <h1 className="text-center font-bold text-lg my-5">Hapus Anggota</h1>
            <h1 className="font-semibold text-sm">Yakin ingin menghapus {titleCase(member.name)} sebagai {titleCase(member.member_role)}?</h1>
            <div className="flex justify-around my-5">
                <button onClick={() => handleDelete(member.id)} className='py-2 px-3 font-semibold rounded-xl bg-main-color text-white modal-button hover:opacity-80'>Iya</button>
                <button className='py-2 px-3 font-semibold rounded-xl border-2 border-main-color modal-button hover:bg-zinc-300'>Tidak</button>
            </div>
            
        </div>
    );
}