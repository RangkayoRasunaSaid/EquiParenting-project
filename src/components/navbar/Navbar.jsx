import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"
import { FaXmark, FaBars } from "react-icons/fa6"
import ResponsiveMenu from "./ResponsiveMenu"


const Navbar = () => {
  const navMenu = [
    {link: "Beranda", path: "/"},
    {link: "Parenting", path: "/parenting"},
    {link: "Mission", path: "/mission"},
    {link: "Ceritaku", path: "/ceritaku"},
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
        <nav className="shadow-lg bg-white md:px-[32px] p-[16px] max-w-screen-2xl mx-auto text-main-color cursor-pointer top-0 right-0 left-0">
          <div className="container space-x-[24px] mx-auto flex justify-between items-center">

            {/* logo */}
            <div className="relative min-w-screen-md"> 
              <Link to="/">
                <img src={logo} alt="logo" className="w-[120px] h-auto inline-block items-center"/>
              </Link>
            </div>

            {/* showing navMenu using map */}
            <div className="flex items-center space-x-[48px]">
              <ul className="md:flex space-x-[24px] hidden">
                {
                  navMenu.map(({ link, path }) => 
                    <Link 
                      style={{color: 'rgba(103, 88, 147)'}}
                      key={link} 
                      to={path} 
                      onClick = {() => handleMenuClick(link)}
                      className={`text-lg block py-[4px] px-[16px] rounded-2xl hover:bg-secondary-color hover:font-medium transition-none ${selectedLink === link ? 'bg-secondary-color font-medium transition-none' : ''}`}>
                      {link}
                    </Link>
                  )
                }
              </ul>

              {/* login and register */}
              <div className="space-x-[8px] hidden md:flex items-center text-base">
                <Link
                    key='/login'
                    to='/login'>
                  <button
                    className="py-[4px] px-[16px] border-2 rounded-2xl border-main-color transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                    Masuk
                  </button>
                </Link>
                <Link
                    key='/register'
                    to='/register'>
                  <button
                    className="py-[4px] px-[16px] border-2 rounded-2xl bg-main-color border-main-color text-white transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                    Daftar
                  </button>
                </Link>
              </div>
            </div>


            {/* mobile display */}
            <div className="md:hidden">
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

        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </header>
    </>
  )
}

export default Navbar