    import { useState } from 'react';
    import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
    import "pure-react-carousel/dist/react-carousel.es.css";
    import { TiUpload } from "react-icons/ti";
    /* Install pure-react-carousel using -> npm i pure-react-carousel */
    import CustomSelect from './ApprovalBySelect';

    export default function Index() {
        const [image, setImage] = useState(null);
        
        const handleImageUpload = (e) => {
            const file = e.target.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
            }
        };
        return (
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-100 lg:py-0 sm:py-2 md:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider 
                        className="lg:block hidden" 
                        naturalSlideWidth={100} 
                        isIntrinsicHeight={true} 
                        //pengaruh banget totalSlides ini sama jumlah slides jadi hati hati bisa bisa berantakan
                        totalSlides={6}  // must lenth of how much cards otherwise they will shrink
                        visibleSlides={4} // visibleSlides less than 2 value from totalSlides, it's for adjustment of view when button next prev triggered
                        step={1} 
                        infinite={true}
                    >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-lg object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-lg mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xxs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>                                    
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider 
                        className="lg:hidden md:block hidden" 
                        naturalSlideWidth={100} 
                        isIntrinsicHeight={true} 
                        //pengaruh banget totalSlides ini sama jumlah slides jadi hati hati bisa bisa berantakan
                        totalSlides={1}  // must lenth of how much cards otherwise they will shrink
                        visibleSlides={1} // visibleSlides less than 2 value from totalSlides, it's for adjustment of view when button next prev triggered
                        step={1} 
                        infinite={true}
                    >
                        
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-md object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-md mx-auto relative'>
                                                        <p className='font-semibold text-xs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider 
                        className="block md:hidden " 
                        naturalSlideWidth={100} 
                        isIntrinsicHeight={true} 
                        //pengaruh banget totalSlides ini sama jumlah slides jadi hati hati bisa bisa berantakan
                        totalSlides={1}  // must lenth of how much cards otherwise they will shrink
                        visibleSlides={1} // visibleSlides less than 2 value from totalSlides, it's for adjustment of view when button next prev triggered
                        step={1} 
                        infinite={true}
                    >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-sm object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-sm mx-auto relative'>
                                                        <p className='font-semibold text-xxs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.pinimg.com/564x/c9/d2/71/c9d27110a0312b614b0866ab0b5db30d.jpg" alt="activity-card-background" className="bg-card-sm object-cover object-center w-full" />
                                                <div className="bg-gray-200 bg-opacity-30 absolute w-full h-full pt-0 py-4 px-4">
                                                    <h2 className="lg:text-xs text-white bg-main-color rounded-sm shadow-lg p-1 text-center">Category</h2>
                                                    <p className="py-1 font-bold text-center text-ungu1 text-sm">Judul Task</p>
                                                    <p className="py-0 text-left text-gray-400 text-xs font-reguler mb-3">Hari Ini, 2 Feb 2024 18:42 WIB</p>
                                                    <div className='kotak-sm mx-auto relative'>
                                                        <p className='font-semibold text-xxs text-center text-ungu1 py-2'>Unggah Bukti Berupa Foto</p>
                                                        {image && <img src={image} alt="Uploaded" className="object-cover object-center w-full h-full" />}
                                                        <label htmlFor="imageInput" className="flex text-ungu1 text-4xl justify-center px-2 py-10 cursor-pointer absolute top-0 left-0 w-full h-full">
                                                        <TiUpload />
                                                        </label>
                                                        <input
                                                        id="imageInput"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        onChange={handleImageUpload}
                                                        />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs py-2 text-ungu1'>Deskripsi: </p>
                                                        <p className="text-gray-700 text-xs min-h-12 max-h-13  overflow-y-auto">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur ...Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-red-500 text-center'>Batas Waktu: 1 jam 54 menit tersisa</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Poin Yang Akan Diperoleh: 5 poin</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Penanggung Jawab: Ayah</p>
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1 flex items-center">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Disetujui Oleh:</p>
                                                        <CustomSelect />
                                                    </div>
                                                    <div className="max-w-md mx-auto py-1">
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>Waktu Aktivitas:</p>
                                                        <p className='font-bold text-xxs text-ungu1 text-left'>2 Feb 2024 18:42 - 3 Feb 2024 00:00</p>
                                                    </div>
                                                    <div className="flex justify-center max-w-md mx-auto pb-1">     
                                                        <button className="bg-main-color hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded mt-2">
                                                            Misi Selesai
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        );
    }
