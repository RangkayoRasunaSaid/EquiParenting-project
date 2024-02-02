const FeatureSection = () => {
    return(
        <>
            <div className="secondSection container-fluid mx-auto my-6 py-6">
                <div className="row justify-center text-center">
                    <div className="col-12 md:col-8">
                    <h3 className="text-3xl font-bold">Belajar & Berkembang</h3>
                    <p className="text-lg">Dapatkan tips dan aktivitas berdasarkan usia anak</p>
                    </div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                        <div className="flex justify-center mx-auto mt-6 mb-2">
                            <div>
                                <img
                                className="normal-size-feature mx-2"
                                src="/src/assets/feature-pola-asuh.svg"
                                alt="equiparenting memiliki concern tentang pola asuh"
                                />
                            </div>
                            <div>
                                <img
                                className="bigger-size-feature"
                                src="/src/assets/feature-emosi-self-awarenes.svg"
                                alt="equiparenting memiliki concern tentang pola asuh"
                                />
                            </div>
                            <div>
                                <img
                                className="normal-size-feature mx-2"
                                src="/src/assets/feature-perilaku.svg"
                                alt="equiparenting memiliki concern tentang pola asuh"
                                />
                            </div>
                            <div>
                                <img
                                className="normal-size-feature mx-3"
                                src="/src/assets/feature-sosial.svg"
                                alt="equiparenting memiliki concern tentang pola asuh"
                                />
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};
export default FeatureSection;