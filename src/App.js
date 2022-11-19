import { Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
import Home from './Pages/Home';
// import CeremonyPage from './Pages/CeremonyPage';
import RSVPPage from './Pages/RSVPPage';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          exact
          element={<Home />}
        />
          <Route
          path='/rsvp'
          element={<RSVPPage />}
        />
      </Routes>
      </div>
  );
}

export default App;
