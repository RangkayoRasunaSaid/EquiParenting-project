import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import LandingPage from "./components/landing-page/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import DailyMission from "./pages/daily-mission";
import Authenticated from "./components/Authenticated";

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Authenticated>
                  <Profile />
                </Authenticated>
              }
            />
            <Route
              path="/mission/daily-mission"
              element={
                <Authenticated>
                  <DailyMission />
                </Authenticated>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
