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
        <div className="">
          <div className="flex flex-row-reverse">
            <div className="hero-section relative overflow-hidden">

              {/* image slider */}
              <Slider {...settings} className="w-full">
                {images.map((imageUrl, index) => (
                  <div key={index} className="w-full h-[54vh] md:h-[36vh]">
                    <img
                      className="w-full object-cover h-[54vh] md:h-[28vh] md:opacity-80"
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>

              {/* hero content */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="bg-gradient-to-t via-white from-white bg-opacity-75 text-center md:px-12 py-6">
                  <h2 className="md:py-2 text-2xl md:text-3xl font-black text-main-color">EquiParenting</h2>
                  <h4 className="text-3xl md:text-5xl text-tertiery-color font-black my-2 md:my-4 px-2">Setara Mulai dari Rumah</h4>
                  <p className="my-2 md:my-4 px-4 text-sm md:text-lg font-medium text-black-color">
                    <span className="text-sm md:text-lg font-medium text-black-color">&quot;</span>
                    Komunikasi, kolaborasi, dan keterlibatan aktif antara Ibu dan Ayah 
                    sangat penting dalam proses pengasuhan anak untuk menciptakan 
                    lingkungan di mana anak-anak dapat tumbuh dan berkembang dengan 
                    dukungan yang setara.
                    <span className="text-sm md:text-xl font-medium text-black-color">&quot;</span>
                  </p>
                  <button>
                    <a href="#" className="flex justify-center bg-main-color rounded-3xl mt-2 sm:my-0 px-4 py-2 text-sm md:text-lg text-white text-center font-medium hover:bg-tertiery">
                      Mari Bergabung 
                      {/* <span className="text-align-center"> <AiOutlineArrowRight /> </span> */}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default heroSection;
