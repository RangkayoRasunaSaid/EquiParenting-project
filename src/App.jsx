import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Mission from './components/mission/Mission';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"
import LandingPage from "./components/landing-page/index";
import store from "./redux/store.js";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NavbarLogin from "./components/navbar/NavbarLogin"
import Footer from './components/Footer/Footer'
import { ToastContainer, Flip } from 'react-toastify';
import History from './components/mission/History.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [updateMembers, setUpdateMembers] = useState(0)
  const [members, setMembers] = useState([])
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const token = sessionStorage.getItem('token');
        // const response = await axios.get('http://localhost:3000/activities', { headers: { Authorization: token } });
        const response = await axios.get('https://jolly-hen-jodhpurs.cyclic.app/activities', { headers: { Authorization: token } });
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, [members])

  return (
    <Provider store={store}>
      <Router>
          {/* <Navbar /> */}
          <div className="bg-[url('/src/assets/background2.jpg')]">
          <ToastContainer
            closeOnClick
            position="top-center"
          />
          <NavbarLogin />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/mission/*" element={<Mission members={members} setMembers={setMembers} updateMembers={updateMembers} setUpdateMembers={setUpdateMembers} activities={activities} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<History activities={activities} members={members} setUpdateMembers={setUpdateMembers} />} />
            </Routes>
          <Footer />
          </div>
      </Router>
    </Provider>
  )
}

export default App;
