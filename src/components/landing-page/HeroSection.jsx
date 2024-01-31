import { AiOutlineArrowRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroSection = () => {
    const images = [
        "https://www.allianz.co.id/explore/asuransi-apa-yang-tepat-untuk-anak/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1626950881771/asuransi-apa-yang-tepat-untuk-anak.jpeg",
        "https://www.payuung.com/static/images/prutect/banner.svg",
        "https://janjimedia.com/wp-content/uploads/2023/03/Sayangi-Keluarga-Dengan-Asuransi-Jiwa-Terbaik-di-Indonesia.jpg", 
        "https://s4.bukalapak.com/uploads/content_attachment/e76eb14df357f2fd78c4fcb5/original/Main_Image_%2844%29.jpg",
        "https://www.allianz.co.id/explore/cara-memilih-asuransi-kesehatan-untuk-keluarga-muda/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1688099780360/yukpahami-cara-memilih-asuransi-kesehatan-untuk-keluarga-muda.jpeg",
        "https://axa-mandiri.co.id/documents/1415637/1443207/product-detail.jpg/9c1970f0-038d-a846-61dc-3c4c5d6bc790?t=1591863155890",
        "https://janethes.com/wp-content/uploads/2019/11/516.-Mindful-Parenting-Pola-Asuh-Anak-yang-Kekinian_Artboard-2.jpg",
        "https://asset.kompas.com/crops/Bl6AA95OokNIoy8xe1wH6xlsUf0=/0x7:740x500/750x500/data/photo/2020/12/23/5fe2a0d272f20.jpg",
        "https://static.vecteezy.com/system/resources/previews/018/974/113/non_2x/activities-together-during-the-holidays-parents-and-children-are-having-a-meal-together-during-the-holidays-boy-is-teasing-his-father-by-giving-him-bread-and-vegetables-free-photo.jpg",
        "https://akcdn.detik.net.id/visual/2023/05/03/5-kebiasaan-ayah-di-rumah-yang-jadi-contoh-buruk-anak-bikin-sulit-dekat_169.jpeg?w=750&q=90"
        
      ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };  
    return (
        <>
            <main>
                <div className="mx-auto px-3">
                    <div className="flex flex-row-reverse">
                        <div className="card-hero">
                            <Slider {...settings}>
                            {images.map((imageUrl, index) => (
                                <div key={index} className="card-hero">
                                <img
                                    className="img-hero"
                                    src={imageUrl}
                                    alt={`Slide ${index + 1}`}
                                />
                                </div>
                            ))}
                            </Slider>
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
                                    Mari Bergabung  
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

export default heroSection;
