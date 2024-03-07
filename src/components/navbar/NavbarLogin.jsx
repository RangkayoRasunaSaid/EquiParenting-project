import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import { FaXmark, FaBars } from "react-icons/fa6"
import { FaUserCircle } from "react-icons/fa"
import ResponsiveMenu from "./ResponsiveMenu"
import { toast } from "react-toastify"

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleLogout = () => {
    // Clear authentication data
    window.scrollTo(0, 0)
    sessionStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.info("Anda telah logout");

    // Redirect to the login page
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      if (navRef.current && currentScrollPos === 0 || isScrolledDown) navRef.current.classList.remove('fixed');
      else if (!isScrolledDown) navRef.current.classList.add('fixed');
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Function to close dropdown when clicking outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setDropdownOpen(false);
      if (menuRef.current && !menuRef.current.contains(event.target)) setShowMenu(false);
    }

    // Attach event listener to document body when dropdown is open
    if (dropdownOpen || showMenu) document.addEventListener('click', handleClickOutside);
    else document.removeEventListener('click', handleClickOutside);

    // Cleanup function to remove event listener
    return () => { document.removeEventListener('click', handleClickOutside) };
  }, [dropdownOpen, showMenu]);

  const location = useLocation().pathname

  const navMenu = [
    { link: "Beranda", path: "/" },
    // { link: "Parenting", path: "/parenting" }, // next feature
    { link: "Mission", path: "/mission" },
    // { link: "Ceritaku", path: "/ceritaku" }, // next feature
  ]

  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <>
      <header ref={navRef} className={`bg-white text-main-color w-full z-30`}>
        <nav className="shadow-lg bg-white md:px-[32px] p-[16px] max-w-screen-2xl mx-auto text-main-color cursor-pointer top-0 right-0 left-0">
          <div className="container space-x-[24px] mx-auto flex justify-between items-center">
            <div className="relative min-w-screen-md">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
                      style={{ color: isActive ? 'bg-secondary-color' : '' }} onClick={() => window.scrollTo(0, 0)}>
                      {link}
                    </Link>
                  )
                })}
              </ul>

              <div className="space-x-[8px] hidden md:flex items-center text-base">
                {!sessionStorage.getItem("token") ? (
                  // Display "Masuk" and "Daftar" buttons when not authenticated
                  <>
                    <Link key="/login" to="/login" onClick={() => window.scrollTo(0, 0)}>
                      <button className="py-[4px] px-[16px] border-2 rounded-2xl border-main-color transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                        Masuk
                      </button>
                    </Link>
                    <Link key="/register" to="/register" onClick={() => window.scrollTo(0, 0)}>
                      <button className="py-[4px] px-[16px] border-2 rounded-2xl bg-main-color border-main-color text-white transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                        Daftar
                      </button>
                    </Link>
                  </>
                ) : (
                  // Display "Profile" button when authenticated
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center px-4 gap-3 cursor-pointer"
                    >
                      <FaUserCircle size={30} className="hover:lavender-shade transition-all" />
                      <div>
                        <h1>{isAuthenticated.username}</h1>
                      </div>
                    </div>
                    {dropdownOpen && (
                      <div className="absolute bg-white shadow-md top-full right-0 mt-1 z-50">
                        <ul onClick={() => {
                          setDropdownOpen(!dropdownOpen)
                          window.scrollTo(0, 0)}}>
                          <li>
                            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 w-full text-left">
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
                <FaBars onClick={toggleMenu} className="w-6 h-6 text-main-color cursor-pointer transition-all" />
            </div>
          </div>
        </nav>

        {showMenu && (
          <ResponsiveMenu ref={menuRef} showMenu={showMenu} toggleMenu={toggleMenu} handleLogout={handleLogout} />
        )}
      </header>
    </>
  )
}

export default Navbar