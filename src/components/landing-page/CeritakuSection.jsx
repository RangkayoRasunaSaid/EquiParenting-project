// next feature
const CeritakuSection = () => {
    return (
      <>
        <div className="grid grid-rows-1 grid-flow-col gap-2 bg-gradient-to-r from-secondary-color py-4">
          <div className="flex flex-col md:flex-row-reverse mx-auto my-6">
            <div>
              <img
                className="mx-auto mb-6 md:mr-4"
                src="../assets/ceritaku-section-explanation-img.png"
                alt="mission-feature-explanation-figure"
              />
            </div>
  
            {/* ceritaku feature content */}
            <div className="w-full text-main-color">
              <h1 className="text-2xl md:text-4xl font-bold text-left py-2 pl-6 md:pl-12">
                Serunya Berbagi Cerita! <br />
                Cari solusi serta
                bagikan tips dan trik untuk sesama
              </h1>
              <h4 className="text-base md:text-xl font-normal text-left leading-normal py-0 md:py-2 pl-6 pr-8 md:pl-12 md:pr-0 text-black-color">
                Fitur yang memudahkan Ayah dan Bunda menemukan solusi terkait permasalahan 
                pola asuh, regulasi emosi, perilaku, interaksi sosial,
                melalui forum yang terkoneksi dengan user lain.
                Sehingga Ayah dan Bunda dapat mendapatkan <span className="italic">feedback</span>.
              </h4>
  
              {/* button for explore ceritaku */}
              <div className="mt-3 md:mt-6 px-6 md:px-12 text-left">
                <a
                  className="text-base md:text-xl font-semibold tracking-wide bg-main-color text-white rounded-3xl py-2 px-4 md:p-4 inline-block shadow-lg hover:bg-tertiery"
                  href="http://">Bagikan Ceritamu Sekarang!
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CeritakuSection;