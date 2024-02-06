const Member = () => {
  return (
    <div className="bg-white p-2 lg:p-8 rounded-lg drop-shadow-lg flex flex-col items-center">
      <img src="/src/assets/ayah.svg" className="max-w-10 rounded-full lg:max-w-24" />
      <div className="text-ungu1 text-sm lg:text-lg lg:my-3 font-bold">Ayah</div>
      <div className="text-ungu1 text-opacity-80 text-xs lg:text-base font-semibold">Username</div>
      <div class="w-full lg:h-6 bg-neutral-200 dark:bg-neutral-600 rounded-sm">
        <div
          class="bg-primary lg:h-6 text-center text-xs lg:text-base font-bold leading-none text-white rounded-sm"
          style={{ width: "0%" }}
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default Member;
