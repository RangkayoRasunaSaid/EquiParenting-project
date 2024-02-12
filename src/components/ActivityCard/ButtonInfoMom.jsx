import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const ButtonInfoMom = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleIconClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleCloseClick = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="relative inline-block">
        <FaQuestionCircle
          className="ml-auto cursor-pointer"
          onClick={handleIconClick}
        />
        {isPopupOpen && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white p-4 border rounded shadow">
              <div className="flex justify-end">
                {/* Close button with 'X' icon */}
                <button
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={handleCloseClick}
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <div className="mb-8">
                <h1 className="mb-4 text-xl font-bold text-center text-ungu1">Petunjuk Pembuatan Aktivitas</h1>
              </div>
              <div className="space-y-4">
                <img src="/src/assets/fitur-mission-mom.png" alt="petunjuk-fitur-dailiy-mission-mom" />
                <img src="/src/assets/contoh-activity-mom.png" alt="contoh-aktivitas-yang-sudah-berhasil-dibuat-untuk-mom" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonInfoMom;
