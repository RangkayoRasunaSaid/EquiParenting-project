const Member = () => {
  return (
    <div className="bg-white p-2 rounded-lg drop-shadow-lg flex flex-col items-center">
      <img src="/src/assets/ayah.svg" className="max-w-10 rounded-full lg:max-w-24" />
      <div className="text-ungu1 text-sm font-bold">Ayah</div>
      <div className="text-ungu1 text-opacity-80 text-xs font-semibold">Username</div>
      <div class="w-full bg-neutral-200 dark:bg-neutral-600 rounded-sm">
        <div
          class="bg-primary p-0.5 text-center text-xs font-bold leading-none text-white rounded-sm"
          style={{ width: "25%" }}
        >
          25%
        </div>
      </div>
    </div>
  );
};

export default Member;
