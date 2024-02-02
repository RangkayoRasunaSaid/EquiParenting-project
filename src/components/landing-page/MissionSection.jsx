

const MissionSection = () => {
    return (
        <>
            <div className="mission-section card-mission container-fluid mx-auto my-2 py-2">
                <h1 
                    className="text-center font-black text-4xl my-4">
                        Our Special Service or Feature
                </h1>
                <div className="flex justify-center">
                    <img 
                    className="mission-img"
                    src="/src/assets/mission-section.png" 
                    alt="special-service-or-special-feature" 
                    />
                </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-2">
                <div className="flex mx-auto mt-6 mb-2">
                    <div>
                        <img 
                            className="mission-explanation-img mr-12"
                            src="/src/assets/mission-section-explanation-img.png" 
                            alt="mission-feature-explanation-figure" 
                        />
                    </div>
                    <div>
                        <h1
                            className="text-4xl font-bold text-left mt-12">
                                Pekerjaan Rumah Tangga 
                                & Menemani Si Kecil 
                                Jadi Lebih Seru !
                        </h1>
                        <h4 
                            className="text-xl font-medium text-left mt-12">
                            Fitur yang memudahkan Ayah dan Bunda dalam melakukan daily activity 
                            seperti pembagian tugas rumah tangga, menemani si kecil bermain hingga 
                            jadwal quality time secara berkala.
                        </h4>
                        <div className="grid grid-rows-1 grid-flow-col gap-8">
                            <div className="flex justify-center mt-12 mb-2">
                                <div>
                                    <img
                                        className="normal-size-feature mx-3"
                                        src="/src/assets/task-icon-mission.svg"
                                        alt="equiparenting memiliki concern tentang pola asuh"
                                    />
                                    <h3 className="text-xl font-bold">Aktivitas</h3>
                                </div>
                                <div>
                                    <img
                                        className="normal-size-feature mx-3"
                                        src="/src/assets/badge-icon-mission.svg"
                                        alt="equiparenting memiliki concern tentang pola asuh"
                                    />
                                    <h3 className="text-xl font-bold">Lencana</h3>
                                    </div>
                                <div>
                                    <img
                                        className="normal-size-feature mx-3"
                                        src="/src/assets/reward-icon-mission.svg"
                                        alt="equiparenting memiliki concern tentang pola asuh"
                                    />
                                    <h3 className="text-xl font-bold">Hadiah</h3>
                                </div>
                                <div>
                                    <img
                                        className="normal-size-feature mx-3"
                                        src="/src/assets/love-icon-mission.svg"
                                        alt="equiparenting memiliki concern tentang pola asuh"
                                    />
                                    <h3 className="text-xl font-bold">Harmonis</h3>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-left">
                            <a 
                            className="align-item-left text-3xl font-bold bg-main-color text-white rounded-md p-4 inline-block hover:shadow-lg hover:text-yellow-300"
                            href="http://">Jelajahi Keseruan Mission Sekarang!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MissionSection;