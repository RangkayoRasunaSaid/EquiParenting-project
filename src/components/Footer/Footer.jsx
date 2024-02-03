import logo from "../../assets/logo.svg"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"

const Footer = () => {
  return (
    <div className="bg-primary">
      <section className="mx-auto max-w-[1320px] text-white">
        <div className="grid py-4 md:grid-cols-3">

          {/* logo and contact */}
          <div className="pl-8 md:pl-16 py-8">
            {/* <div> */}
              <a href="/">
                <img src={logo} alt="logo" className="w-[200px] h-auto" />
              </a>
            {/* </div> */}
            {/* <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p> */}
            <br />
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <p>Jakarta</p>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <FaMobileAlt />
              <p>(+62) 813-1212-1212</p>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <MdOutlineMail />
              <p>equi.parenting@gmail.com</p>
            </div>
          </div>

          {/* menu links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-18">
            <div>
              <div className="pl-8 md:pl-16 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Fitur
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:font-medium">
                    Beranda
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:font-medium">
                    Parenting
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:font-medium">
                    Mission
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] hover:font-medium">
                    Ceritaku
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="pr-8 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Parenting
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:font-medium">
                    Pola Asuh
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Emosi & Self Awarness
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Perilaku
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Sosial
                  </li>
                </ul>
              </div>
            </div>

            {/* social media handle */}
            <div className="">
              <div className="px-8 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Follow Us
                </h1>
                <div className="flex flex-col gap-3">
                  {/* <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  /> */}

                  <div className="flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <div>
          <div className="mx-8 md:mx-16 border-t-2 border-gray-300/50 py-6 text-center">
            @ Copyright 2024 All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;