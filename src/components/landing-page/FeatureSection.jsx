const FeatureSection = () => {
  return (
    <>
      <div className="container bg-lavender-shade mx-auto py-4 text-center">
        <h3 className="mt-4 mb-2 px-4 text-2xl md:text-4xl font-bold text-main-color">Belajar & Berkembang</h3>
        <p className="text-md md:text-xl px-4 font-normal text-balck-color">
          Dapatkan tips parenting berdasarkan usia anak
        </p>

        {/* parenting features */}
        <div className="flex md:flex-row flex-col items-center justify-center flex-wrap mt-8 mb-6 gap-4 text-main-color font-semibold text-lg md:text-xl">
          <div className="flex flex-col items-center mb-2">
            <img
              className="size-2/4 md:size-3/5 mb-2"
              src="/src/assets/pola-asuh.svg"
              alt="equiparenting memiliki concern tentang pola asuh"
            />
            <p>Pola Asuh</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img
              className="size-[44%] md:size-[47%] mb-2"
              src="/src/assets/emosi-self-awarness.svg"
              alt="equiparenting memiliki concern tentang pola asuh"
            />
            <p>Emosi & Self Awarness</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img
              className="size-2/4 md:size-3/5 mb-2"
              src="/src/assets/perilaku.svg"
              alt="equiparenting memiliki concern tentang pola asuh"
            />
            <p>Perilaku</p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <img
              className="size-2/4 md:size-3/5 mb-2"
              src="/src/assets/sosial.svg"
              alt="equiparenting memiliki concern tentang pola asuh"
            />
            <p>Sosial</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
