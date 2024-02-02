const CeritakuSection = () => {
    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-2">
                <div className="flex flex-row-reverse mx-auto mb-2">
                    <div>
                        <img 
                            className="mission-explanation-img mr-12"
                            src="/src/assets/ceritaku-section-explanation-img.png" 
                            alt="mission-feature-explanation-figure" 
                        />
                    </div>
                    <div className="mx-12">
                        <h1
                            className="text-4xl font-bold text-left mt-12">
                                Serunya Berbagi! Mulai dari mencari solusi, memberi solusi hingga 
                                membagikan tips dan trik untuk sesama
                        </h1>
                        <h4 
                            className="text-xl font-medium text-left mt-12">
                            Fitur memudahkan Ayah dan Bunda menemukan solusi terkait permasalahan pola asuh, 
                            regulasi emosi, perilaku hingga interaksi sosial melalui forum yang terkoneksi dengan user lain. 
                            Sehingga Ayah dan Bunda dapat mendapatkan feedback.
                        </h4>
                        <div className="mt-12 text-left">
                            <a 
                            className="align-item-left text-3xl font-bold bg-main-color text-white rounded-md p-4 inline-block hover:shadow-lg hover:text-yellow-300"
                            href="http://">Bagikan Ceritamu Sekarang !
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CeritakuSection;