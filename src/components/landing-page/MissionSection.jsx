import { Link } from 'react-router-dom';

const MissionSection = () => {
  return (
    <>
      <div className="mx-auto my-6 py-2">
        <h1
          className="my-4 px-6 text-center font-black text-3xl md:text-5xl text-main-color">
          Our Special Service or Feature
        </h1>
        <div className="flex justify-center">
          <img
            className="w-full md:w-[72%]"
            src="../assets/mission-section.png"
            alt="special-service-or-special-feature"
          />
        </div>
        <div className="mx-12 md:mx-48 mt-8 border-dotted border-t-8 border-dark-main-color"></div>
      </div>

      {/* mission feature content */}
      <div className="flex flex-col md:flex-row items-center justify-between my-8">
        <div className="w-full md:w-[65%] px-6 md:px-0 md:ml-12">
          <img
            src="../assets/mission-section-explanation.png"
            alt="mission-feature-explanation-figure"
          />
        </div>
        <div className="w-full text-main-color">
          <h1
            className="text-2xl md:text-4xl font-bold text-left py-2 px-6">
            Pekerjaan Rumah Tangga <br />
            & Menemani Si Kecil <br />
            Jadi Lebih Seru!
          </h1>
          <h4
            className="text-base md:text-xl font-normal text-left leading-normal py-0 md:py-2 px-6 text-black-color">
            Fitur yang memudahkan Ayah dan Bunda dalam melakukan <span className="italic">daily activity </span>
            seperti pembagian tugas rumah tangga, menemani si kecil bermain hingga
            jadwal <span className="italic">quality time</span> secara berkala.
          </h4>

          {/* icons */}
          <div className="flex flex-col md:flex-row px-6">
            <div className="flex justify-start mt-4 mb-2 gap-6 lg:gap-8">
              <div>
                <img
                  className="w-10 md:w-16 lg:w-14 h-auto mx-auto mb-1"
                  src="../assets/task-icon-mission.svg"
                  alt="equiparenting memiliki concern tentang pola asuh"
                />
                <h3 className="text-base lg:text-xl font-semibold text-center">Misi</h3>
              </div>
              <div>
                <img
                  className="w-10 md:w-16 lg:w-14 h-auto mx-auto mb-1"
                  src="../assets/badge-icon-mission.svg"
                  alt="equiparenting memiliki concern tentang pola asuh"
                />
                <h3 className="text-base lg:text-xl font-semibold">Lencana</h3>
              </div>
              <div>
                <img
                  className="w-10 md:w-16 lg:w-14 h-auto mx-auto mb-1"
                  src="../assets/reward-icon-mission.svg"
                  alt="equiparenting memiliki concern tentang pola asuh"
                />
                <h3 className="text-base lg:text-xl font-semibold">Hadiah</h3>
              </div>
              <div>
                <img
                  className="w-10 md:w-16 lg:w-14 h-auto mx-auto mb-1"
                  src="../assets/love-icon-mission.svg"
                  alt="equiparenting memiliki concern tentang pola asuh"
                />
                <h3 className="text-base lg:text-xl font-semibold">Harmonis</h3>
              </div>
            </div>
          </div>

          {/* button for explore mission */}
          <div className="mt-3 md:mt-6 px-6 text-left">
            <Link
              className="text-base md:text-xl font-semibold tracking-wide bg-main-color text-white rounded-3xl py-2 px-4 md:p-4 inline-block shadow-lg hover:bg-tertiery"
              to="/mission">Jelajahi Mission Sekarang!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionSection;