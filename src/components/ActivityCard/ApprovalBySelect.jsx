import { useState, useRef, useEffect } from 'react';


const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedApprover, setSelectedApprover] = useState('');
  const dropdownRef = useRef(null);

  const handleApproverChange = (approver) => {
    setSelectedApprover(approver);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={handleToggleDropdown}
        className="cursor-pointer px-2 py-0 mx-2 text-xs border rounded-md w-full"
      >
        {selectedApprover || 'Pilih'}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-12 mt-1 border rounded-md bg-white w-20 text-xxs">
          <div
            onClick={() => handleApproverChange('ayah')}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            Ayah
          </div>
          <div
            onClick={() => handleApproverChange('bunda')}
            className="cursor-pointer hover:bg-gray-200 p-2"
          >
            Bunda
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
