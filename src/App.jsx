import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mission from './components/mission/Mission';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css'

import "./App.css"
import "./components/landing-page/LandingPage.css";
import { Provider } from "react-redux"; 
import store from './store/store';
import LandingPage from "./components/landing-page/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  // )
  //   <>
  //   <Navbar />
  //   <Mission />
  //   <Footer />
  //   </>
  );
}

export default App;
