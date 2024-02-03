import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.scss'
import Mission from './components/Mission';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css'

import "./App.css"
import "./components/landing-page/LandingPage.css";
import { Provider } from "react-redux"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store/store';
import LandingPage from "./components/landing-page/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
    <>
    <Navbar />
    <Mission />
    <Footer />
    </>
  )
}

export default App;
