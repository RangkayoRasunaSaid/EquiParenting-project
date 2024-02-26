import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"
import { FaXmark } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    sessionStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.info("Anda telah logout");

    // Redirect to the login page
    navigate("/login");
  };
  const location = useLocation().pathname

  const navMenu = [
    { link: "Beranda", path: "/" },
    // { link: "Parenting", path: "parenting" }, // next feature
    { link: "Mission", path: "mission" },
    // { link: "Ceritaku", path: "ceritaku" }, // next feature
  ]

  const authenticatedUser = {
    id: "",
    username: "",
  }

  const handleLinkClick = () => {
    // Call the toggleMenu function to hide the menu
    toggleMenu();
    window.scrollTo(0, 0)
  }

  return (
    <div
      className={`${showMenu ? "-right-[100%]" : "right-0"} rounded-bl-3xl
      h-[40%] w-[70%] bg-white fixed top-0 z-20 transition-all duration-200 pb-6 flex flex-col justify-between text-main-color md:hidden`}>

      <div className='relative'>
        <FaXmark onClick={toggleMenu} className="absolute top-8 right-4 w-6 h-6 text-main-color cursor-pointer transition-all" />
        {/* user profile */}
        <div className="flex mt-8 px-8 items-center justify-start gap-3">
          {!sessionStorage.getItem("token") ? (
            // Display login & register buttons when not authenticated
            <>
              <Link key="/login" to="/login" onClick={handleLinkClick}>
                <button className="py-[4px] px-[16px] border-2 rounded-2xl border-main-color transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                  Masuk
                </button>
              </Link>
              <Link key="/register" to="/register" onClick={handleLinkClick}>
                <button className="py-[4px] px-[16px] border-2 rounded-2xl bg-main-color border-main-color text-white transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                  Daftar
                </button>
              </Link>
            </>
          ) : (
            <>
            {/* Display "Profile" button when authenticated */}
            <Link key="/profile" to="/profile" onClick={handleLinkClick}>
              <div className="flex px-4 items-center justify-start gap-3 hover:">
                <FaUserCircle size={40} className="hover:lavender-shade transition-all" />
                <div>
                  <h1>{authenticatedUser.username}</h1>
                </div>
              </div>
            </Link>
              <Link key="/login" to="/login">
                <button onClick={handleLogout} className="py-[4px] px-[16px] border-2 rounded-2xl bg-main-color border-main-color text-white transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>

        {/* showing navMenu using map */}
        <div className="space-y-2 pl-4 mt-8">
          {
            navMenu.map(({ link, path }) => {
              let isActive = false;
              if (location !== '/') isActive = location.startsWith(path) && path !== "/";
              else if (location === '/') isActive = location === path;
              return (
                <Link
                  key={link}
                  to={path}
                  onClick={handleLinkClick}
                  className={`text-lg block py-[4px] px-[16px] rounded-2xl hover:bg-secondary-color hover:font-medium transition-none ${isActive ? 'bg-secondary-color font-medium transition-none' : ''}`}
                  style={{ color: isActive ? 'bg-secondary-color' : '' }}>
                  {link}
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu