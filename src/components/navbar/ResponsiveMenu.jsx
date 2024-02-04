// import { FaUserCircle } from "react-icons/fa"

const navMenu = [
  { link: "Beranda", path: "beranda" },
  { link: "Parenting", path: "parenting" },
  { link: "Mission", path: "mission" },
  { link: "Ceritaku", path: "ceritaku" },
]

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu }) => {
  // console.log("showMenu", showMenu);
  return (
    <div 
      className={`${showMenu ? "-right-[100%]" : "right-0"} 
      h-[50%] w-[75%] bg-white fixed top-[81px] z-20 transition-all duration-200 pb-6 flex flex-col justify-between text-main-color md:hidden`}>

      <div>
        {/* user profile */}
        {/* <div className="flex mt-8 px-8 items-center justify-start gap-3">
        <FaUserCircle size={50} />
          <div>
            <h1>Mia</h1>
          </div>
        </div> */}

         {/* showing navMenu using map */}
        <div className="space-y-2 mt-8">
          {
            navMenu.map(({ link, path }) =>
              <a
                key={link}
                href={path}
                className="text-lg text-main-color rounded-2xl block p-2 px-8 hover:bg-secondary hover:font-medium transition-none">
                {link}
              </a>
            )
          }

          {/* login and register */}
          <div className="space-x-2 pt-4 px-8">
            <button
              className="py-1 px-4 border-2 rounded-2xl border-main-color text-md transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
              Masuk
            </button>
            <button
              className="py-1 px-4 border-2 rounded-2xl bg-main-color border-main-color text-white text-md transition-all duration-300 hover:text-white hover:bg-tertiery-color hover:border-tertiery-color">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu