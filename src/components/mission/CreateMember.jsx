import React, { useState } from "react";
import ModalButton from "./modals/ModalButton";
import ModalCreateMember from "./modals/ModalCreateMember";

const CreateMember = () => {
    
  const mdlBtn = (
    <button className="bg-ungu1 rounded-lg drop-shadow-lg py-3 lg:py-12 px-5 text-white">
      <p className="hidden lg:block lg:text-xl lg:font-semibold">Tambah Anggota</p>
      <p className="text-6xl font-bold lg:my-6">+</p>
      <p className="font-medium lg:text-xl lg:font-semibold">Max 2</p>
    </button>
  )

  return (
    <>
      {/* Tombol untuk membuka modal */}
      <ModalButton btnContent={mdlBtn} mdlContent={(<ModalCreateMember />)} />

    </>
  );
};

export default CreateMember;