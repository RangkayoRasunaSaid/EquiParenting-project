import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import LandingPage from "./components/landing-page/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import DailyMission from "./pages/daily-mission";

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
            <Route path="/mission/daily-mission" element={<DailyMission />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
