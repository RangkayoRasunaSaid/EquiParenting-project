import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'
import './components/landing-page/LandingPage.css';
import LandingPage from './components/landing-page/index';

function App() {
  return (
    <Provider store={store}>
    <>
      <LandingPage />
      {/* Add other components or routes here */}
    </>
  </Provider>
  );
}

export default App
