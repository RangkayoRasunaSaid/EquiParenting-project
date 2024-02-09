import { useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import { FaXmark, FaBars } from "react-icons/fa6"
import { FaUserCircle } from "react-icons/fa"
import ResponsiveMenu from "./ResponsiveMenu"

const Navbar = () => {
  const location = useLocation().pathname

  const navMenu = [
    { link: "Beranda", path: "/" },
    { link: "Parenting", path: "/parenting" },
    { link: "Mission", path: "/mission" },
    { link: "Ceritaku", path: "/ceritaku" },
  ]

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <>
      <header className="bg-white text-main-color">
        <nav className="shadow-lg bg-white md:px-[32px] p-[16px] max-w-screen-2xl mx-auto text-main-color cursor-pointer top-0 right-0 left-0">
          <div className="container space-x-[24px] mx-auto flex justify-between items-center">
            <div className="relative min-w-screen-md">
              <Link to="/">
                <img src={logo} alt="logo" className="w-[120px] h-auto inline-block items-center" />
              </Link>
            </div>

            <div className="flex items-center space-x-[48px]">
              <ul className="md:flex space-x-[24px] hidden">
                {navMenu.map(({ link, path }) => {
                  let isActive = false
                  if (location !== '/') isActive = location.startsWith(path) && path !== "/"
                  else if (location === '/') isActive = location === path
                  return (
                    <Link
                      key={link}
                      to={path}
                      className={`text-lg block py-[4px] px-[16px] rounded-2xl hover:bg-secondary-color hover:font-medium transition-none ${isActive ? 'bg-secondary-color font-medium transition-none' : ''}`}
                      style={{ color: isActive ? 'bg-secondary-color' : '' }}>
                      {link}
                    </Link>
                  )
                })}
              </ul>

              <div className="space-x-[8px] hidden md:flex items-center text-base">
                {console.log(isAuthenticated)}
                {!isAuthenticated ? (
                  // Display "Masuk" and "Daftar" buttons when not authenticated
                  <>
                    <Link key="/login" to="/login">
                      <button className="py-[4px] px-[16px] border-2 rounded-2xl border-main-color transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                        Masuk
                      </button>
                    </Link>
                    <Link key="/register" to="/register">
                      <button className="py-[4px] px-[16px] border-2 rounded-2xl bg-main-color border-main-color text-white transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                        Daftar
                      </button>
                    </Link>
                  </>
                ) : (
                  // Display "Profile" button when authenticated
                  <Link key="/profile" to="/profile">
                    <div className="flex px-4 items-center justify-start gap-3 hover:">
                      <FaUserCircle size={50} className="hover:lavender-shade transition-all" />
                      <div>
                        <h1>{isAuthenticated.username}</h1>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            <div className="md:hidden">
              {showMenu ? (
                <FaBars onClick={toggleMenu} className="w-6 h-6 text-main-color cursor-pointer transition-all" />
              ) : (
                <FaXmark onClick={toggleMenu} className="w-6 h-6 text-main-color cursor-pointer transition-all" />
              )}
            </div>
          </div>
        </nav>

        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </header>
    </>
  )
}

export default Navbar
