// import { useState } from "react";
// import logo from "../../assets/logo.svg"
// import { PiCaretDownBold } from "react-icons/pi";
// import { HiMenu } from "react-icons/hi"
// import { IoClose } from "react-icons/io5"

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false)

//   const toggleMenu = () => {
//     setShowMenu(!showMenu)
//   }

//   return (
//     <header className="bg-white shadow-md text-main-color">
//       <nav className="container flex items-center justify-between h-[74px] p-2">
//         {/* Logo section */}
//         <div className="py-2.5">
//           <img src={logo} alt="logo" className="w-32 h-auto" />
//         </div>

//         {/* Menu section */}
        // <div>
        //   <ul className="flex items-center gap-10 text-lg cursor-pointer">
        //     <li className="p-2 rounded-md hover:bg-secondary">Beranda</li>
        //     <li className="group relative">
        //       <a href="#" className="flex items-center gap-x-1 p-2 rounded-md hover:bg-secondary">
        //         Parenting <span>
        //           <PiCaretDownBold className="transition-all duration-200 group-hover:rotate-180" />
        //         </span>
        //       </a>

        //       {/* Dropdown menu section */}
        //       <div className="absolute -left-3 z-[9999] hidden w-[150px] text-center bg-white shadow-md rounded-b-lg group-hover:block">
        //         <ul>
        //           <li className="p-2 rounded-md hover:bg-secondary">Artikel</li>
        //           <li className="p-2 rounded-md hover:bg-secondary">Video</li>
        //         </ul>
        //       </div>
        //     </li>

        //     <li className="p-2 rounded-md hover:bg-secondary">Mission</li>
        //     <li className="p-2 rounded-md hover:bg-secondary">Ceritaku</li>
        //   </ul>
        // </div>

//         <div className="flex items-center gap-2">
//           <button className="p-2 w-20 border-2 rounded-md border-primary text-main-color hover:bg-tertiery hover hover:border-tertiery hover:text-white">Masuk</button>
//           <button className="p-2 w-20 border-2 rounded-md border-primary bg-primary text-white hover:bg-tertiery hover hover:border-tertiery">Daftar</button>
//         </div>

//         {/* Mobile menu header */}
//         <div className="flex items-center gap-4 md:hidden">
//           {showMenu ? (<IoClose
//             onClick={toggleMenu}
//             className="cursor-pointer transition-all"
//             size={30}
//           />
//           ) : (
//             <HiMenu
//               onClick={toggleMenu}
//               className="cursor-pointer transition-all"
//               size={30}
//             />
//           )}

//           {/* Mobile menu content */}
//           {showMenu && (
//             <div className="absolute z-[9999] top-[74px] left-2/3 right-0 bg-white text-center shadow-md rounded-b-lg">
//               <ul className="py-2">
//                 <li className="p-2 rounded-md hover:bg-secondary">Beranda</li>
//                 <li className="p-2 rounded-md hover:bg-secondary">Parenting</li>
//                 <li className="p-2 rounded-md hover:bg-secondary">Artikel</li>
//                 <li className="p-2 rounded-md hover:bg-secondary">Video</li>
//                 <li className="p-2 rounded-md hover:bg-secondary">Mission</li>
//                 <li className="p-2 rounded-md hover:bg-secondary">Ceritaku</li>
//               </ul>
//             </div>
//           )}
//         </div>

        
//       </nav>
//     </header>
    
//   )
// }

// export default Navbar