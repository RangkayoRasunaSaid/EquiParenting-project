import { Link } from "react-router-dom";

const NavbarAcc = () => {
  return (
    <div className="Navbar bg-white shadow-lg">
      <Link to="/">
        <div className="logo">
          <img src="/src/assets/logo.svg" alt="logo" className="w-32 lg:w-44 p-4" />
        </div>
      </Link>
    </div>
  );
};

export default NavbarAcc;
