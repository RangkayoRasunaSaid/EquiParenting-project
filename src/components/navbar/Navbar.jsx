import { useState } from "react"
import logo from "../../assets/logo.svg"
import { FaXmark, FaBars } from "react-icons/fa6"
import ResponsiveMenu from "./ResponsiveMenu"


const Navbar = () => {
  const navMenu = [
    {link: "Beranda", path: "beranda"},
    {link: "Parenting", path: "parenting"},
    {link: "Mission", path: "mission"},
    {link: "Ceritaku", path: "ceritaku"},
  ]

  // State to track the selected link
  const [selectedLink, setSelectedLink] = useState(null)

  const handleMenuClick = (link) => {
    setSelectedLink(link)
  }

  // State to track the visibility of the navMenu
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
     <header className="bg-white text-main-color"> 
        <nav className="bg-white md:px-8 p-4 max-w-screen-2xl mx-auto text-main-color cursor-pointer top-0 right-0 left-0">
          <div className="container space-x-6 mx-auto flex justify-between items-center">

            {/* logo */}
            <div className="relative] min-w-screen-md"> 
              <a href="/">
                <img src={logo} alt="logo" className="w-[120px] h-auto inline-block items-center"/>
              </a>
            </div>

            {/* showing navMenu using map */}
            <div className="flex items-center space-x-12">
              <ul className="md:flex space-x-6 hidden">
                {
                  navMenu.map(({ link, path }) => 
                    <a 
                      key={link} 
                      href={path} 
                      onClick = {() => handleMenuClick(link)}
                      className={`text-lg block py-1 px-4 rounded-2xl hover:bg-secondary hover:font-medium transition-none ${selectedLink === link ? 'bg-secondary font-medium transition-none' : ''}`}>
                      {link}
                    </a>
                  )
                }
              </ul>

              {/* login and register */}
              <div className="space-x-2 hidden md:flex items-center text-md">
                <button 
                  className="py-1 px-4 border-2 rounded-2xl border-primary transition-all duration-300 hover:text-white hover:bg-tertiery hover:border-tertiery">
                  Masuk
                </button>
                <button 
                  className="py-1 px-4 border-2 rounded-2xl bg-primary border-primary text-white transition-all duration-300 hover:text-white hover:bg-tertiery hover:border-tertiery">
                  Daftar
                </button>
              </div>
            </div>


            {/* mobile display */}
            <div className="md:hidden">
              {/* <button onClick={toggleMenu}>
                {
                  showMenu ? (
                    <FaXmark className="w-6 h-6 text-main-color cursor-pointer transition-all"/>
                  ) : (
                    <FaBars className="w-6 h-6 text-main-color cursor-pointer transition-all"/>
                  )
                }
              </button> */}
              {
                showMenu ? (
                  <FaBars 
                    onClick={toggleMenu}
                    className="w-6 h-6 text-main-color cursor-pointer transition-all"/>
                ) : (
                  <FaXmark 
                    onClick={toggleMenu}  
                    className="w-6 h-6 text-main-color cursor-pointer transition-all"/>
                )
              }
            </div>
          </div>
        </nav>

        {/* <div className={`z-40 space-y-4 pt-24 pb-8 bg-white shadow-md rounded-md ${showMenu ? "block fixed top-[89px] right-0 left-[240px]" : "hidden"}`}>
          {
            navMenu.map(({ link, path }) => 
              <a key={link} href={path} className="text-lg text-main-color block p-2 pl-8 rounded-md hover:bg-secondary hover:font-medium transition-none">{link}</a>)
          }
        </div> */}

        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </header>
    </>
  )
}

export default Navbar