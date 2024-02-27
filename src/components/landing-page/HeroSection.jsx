import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const heroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async (imageUrl) => {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    };

    const loadImages = async () => {
      const imageUrls = [
        '/src/assets/hero/1.jpeg',
        '/src/assets/hero/2.svg',
        '/src/assets/hero/3.jpg',
        '/src/assets/hero/4.jpg',
        '/src/assets/hero/5.jpeg',
        '/src/assets/hero/6.jpg',
        '/src/assets/hero/7.jpg',
        '/src/assets/hero/8.jpeg'
      ];

      const loadedImages = await Promise.all(imageUrls.map(loadImage));
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  const options = {
    dots: false,
    loop: true,
    navSpeed: 500,
    items: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      {images.length === 8 && imagesLoaded && (
        <div className="flex flex-row-reverse">
          <div className="hero-section relative overflow-hidden w-full">
              <OwlCarousel className='owl-theme hero w-full z-0' {...options} key={`carousel_${Date.now()}`}>
                {images.map((imageUrl, index) => (
                  <img key={index} className="item object-cover h-[54vh] md:opacity-80" src={imageUrl} alt={`Slide ${index + 1}`} />
                ))}
              </OwlCarousel>

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
                <button className={sessionStorage.getItem("token") ? 'hidden' : ''}
                  onClick={() => window.scrollTo(0, 0)}>
                  <Link
                    className="flex justify-center bg-main-color rounded-3xl mt-2 sm:my-0 px-4 py-2 text-sm md:text-lg text-white text-center font-medium hover:bg-tertiery"
                    to="/login">
                      Mari Bergabung 
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default heroSection;