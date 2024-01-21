import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="header">
        <h1>Daftar</h1>
        <h3>Yuk, Bergabung dengan kami!</h3>
      </div>
      <div className="container">
        <form className="form">
          <div className="input-box">
            <div className="field-input">
              <label htmlFor="username">Username</label>
              <br />
              <input id="username" type="text" name="username" required />
            </div>
            <div className="field-input">
              <label htmlFor="email">E-mail</label>
              <br />
              <input id="email" type="email" name="email" required />
            </div>
            <div className="field-input">
              <label htmlFor="password">Password</label>
              <br />
              <input id="password" type="password" name="password" required />
            </div>
            <div className="field-input">
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <br />
              <input id="confirmPassword" type="password" name="confirmPassword" required />
            </div>

            <div className="check">
              <label>
                <input id="agree" type="checkbox" name="agree" required />
                <div className="text">
                  <p>
                    Saya menyetujui <Link to="#">Syarat & Ketentuan</Link> dan
                  </p>
                  <p>
                    <Link to="#">Kebijakan Privasi</Link> yang berlaku
                  </p>
                </div>
              </label>
            </div>

            <button id="button" type="submit">
              Daftar
            </button>
          </div>
        </form>
        <div className="done">
          <span>
            Sudah memiliki akun? <Link to="/login">Masuk</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
