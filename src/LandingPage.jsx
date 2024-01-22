import { AiOutlineArrowRight } from 'react-icons/ai';
const LandingPage = () => {
    return (
        <>
            <main>
                <div className="mx-auto px-3">
                    <div className="flex flex-row-reverse">
                        <div className="card-hero">
                            <img
                                className="img-hero"
                                src="https://i0.wp.com/whiz.id/wp-content/uploads/2022/05/Untitled-design-30.png?w=1200&ssl=1"
                                alt="equiparenting = equal, equip, eq, ui for parenting"
                            />
                            <div className="card-content">
                                <h2 className="title-hero text-4xl">EquiParenting</h2>
                                <h4 className="subtitle-hero text-black">Setara Mulai dari Rumah</h4>
                                <p className="text-hero text-xl font-medium text-light-main-color">
                                <span className="text-2xl font-bold text-dark-main-color">&quot;</span>
                                    Ibu maupun Ayah memiliki peran yang sama penting dalam mendidik
                                    dan merawat anak-anak. Dibutuhkan komunikasi, kolaborasi, dan
                                    keterlibatan aktif dari kedua orang tua dalam proses pengasuhan
                                    anak, menciptakan lingkungan di mana anak-anak dapat tumbuh dan
                                    berkembang dengan dukungan yang setara dari kedua orang tua.
                                <span className="text-2xl font-bold text-dark-main-color">&quot;</span>
                                </p>

                                <a href="#" className="button flex items-center" id="btn-hero">
                                    Get Started
                                    <span className="text-align-center"> <AiOutlineArrowRight></AiOutlineArrowRight></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default LandingPage;
