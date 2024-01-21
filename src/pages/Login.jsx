import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="header">
        <h1>Masuk</h1>
        <h3>Yuk, Lanjutkan dengan akun kamu!</h3>
      </div>
      <div className="container">
        <form className="form">
          <div className="input-box">
            <div className="field-input">
              <label htmlFor="email">E-mail</label>
              <br />
              <input type="email" id="email" required />
            </div>
            <div className="field-input">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" id="password" required />
            </div>

            <div className="done">
              <span>
                Belum memiliki akun? <Link to="/register">Daftar</Link>
              </span>
            </div>

            <button id="button" type="submit">
              Masuk
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
