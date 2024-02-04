export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body nav-pills">
          <div className="container container-fluid fw-medium">
            <a className="navbar-brand" href="../home/index.html">
              <img src="https://raw.githubusercontent.com/RangkayoRasunaSaid/equiparenting/82b022600899b3c372fe6996faee7701e85d85ea/ceritaku/logo.svg" alt="EquiParenting" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-auto">
                <li className="nav-item mx-4 d-flex justify-content-center">
                  <a className="nav-link text-violet-800" href="../home/login-home.html">Beranda</a>
                </li>
                <li className="nav-item mx-4 d-flex justify-content-center dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Parenting</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="../parenting/index.html">Tips Parenting</a>
                    </li>
                    <li><a className="dropdown-item" href="#">Tips Permainan</a></li>
                  </ul>
                </li>
                <li className="nav-item mx-4 d-flex justify-content-center">
                  <a className="nav-link" href="#">Video</a>
                </li>
                <li className="nav-item mx-4 d-flex justify-content-center">
                  <a className="nav-link ceritaku fw-bolder" href="index.html" aria-current="page">Ceritaku</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto me-auto" id="navbarList"></ul>
            </div>
          </div>
        </nav>
    )
}