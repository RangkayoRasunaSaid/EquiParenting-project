import { IoIosArrowRoundBack } from "react-icons/io";

const ButtonBack = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <IoIosArrowRoundBack />
    </button>
  );
};

export default ButtonBack;
