import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Mission from './components/mission/Mission';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css"
import LandingPage from "./components/landing-page/index";
import store from "./store/store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navbar from './components/navbar/Navbar';
import NavbarLogin from "./components/navbar/NavbarLogin"
import Footer from './components/Footer/Footer'

function App() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
          {/* <Navbar /> */}
          <div className="bg-[url('/src/assets/background2.jpg')]">
          <NavbarLogin />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/mission/*" element={<Mission />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          <Footer />
          </div>
      </Router>
    </Provider>
  )
}

export default App;
