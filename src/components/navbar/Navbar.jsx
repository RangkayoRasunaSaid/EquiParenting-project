import logo from "../../assets/logo.svg"
import { PiCaretDownBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md text-main-color">
      <nav className="container flex items-center justify-between h-[74px] p-2">
        {/* Logo section */}
        <div className="py-2.5">
          <img src={logo} alt="logo" className="w-32 h-auto" />
        </div>

        {/* Menu section */}
        <div>
          <ul className="flex items-center gap-10 text-lg cursor-pointer">
            <li className="p-2 rounded-md hover:bg-secondary">Beranda</li>
            <li className="group relative">
              <a href="#" className="flex items-center gap-x-1 p-2 rounded-md hover:bg-secondary">
                Parenting <span>
                  <PiCaretDownBold className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>

              {/* Dropdown menu section */}
              <div className="absolute -left-3 z-[99999] hidden w-[150px] text-center bg-white shadow-md rounded-b-lg group-hover:block">
                <ul>
                  <li className="p-2 rounded-md hover:bg-secondary">Artikel</li>
                  <li className="p-2 rounded-md hover:bg-secondary">Video</li>
                </ul>
              </div>
            </li>

            <li className="p-2 rounded-md hover:bg-secondary">Mission</li>
            <li className="p-2 rounded-md hover:bg-secondary">Ceritaku</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 w-20 border-2 rounded-md border-primary text-main-color hover:bg-tertiery hover hover:border-tertiery hover:text-white">Masuk</button>
          <button className="p-2 w-20 border-2 rounded-md border-primary bg-primary text-white hover:bg-tertiery hover hover:border-tertiery">Daftar</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar