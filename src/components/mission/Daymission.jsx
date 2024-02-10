import { useState, useEffect } from "react";
import Member from "./Member";
import ModalButton from "./modals/ModalButton";
import ModalCreateMember from "./modals/ModalCreateMember";

const DailyMission = () => {
  const mdlBtn = (
    <button className="bg-ungu1 rounded-lg drop-shadow-lg py-3 lg:py-12 px-5 text-white">
      <p className="hidden lg:block lg:text-xl lg:font-semibold">Tambah Anggota</p>
      <p className="text-6xl font-bold lg:my-6">+</p>
      <p className="font-medium lg:text-xl lg:font-semibold">Max 2</p>
    </button>
  )

  return (
      <div className="mb-10">
        <h1 className="text-ungu1 font-extrabold text-xl lg:text-2xl text-center my-4 lg:my-8">Team</h1>
        <div className="flex items-center lg:my-20 gap-3 lg:gap-12">
          <ModalButton btnContent={mdlBtn} mdlContent={(<ModalCreateMember />)} />
          <Member />
        </div>
      </div>
  );
};

export default DailyMission;