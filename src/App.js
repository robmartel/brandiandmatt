import { Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import RegistryPage from './Pages/RegistryPage';
import CeremonyPage from './Pages/CeremonyPage';
import ReceptionPage from './Pages/ReceptionPage';
import RSVPPage from './Pages/RSVPPage';
import AccommodationsPage from './Pages/AccommodationsPage';
import StagDoePage from './Pages/StagDoePage';

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
        <Route
        path='/registry'
        element={<RegistryPage />}
        />
        <Route
        path='/ceremony'
        element={<CeremonyPage />}
        />
        <Route
        path='/reception'
        element={<ReceptionPage />}
        />
         <Route
        path='/accommodations'
        element={<AccommodationsPage />}
        />
        <Route
        path='/stagDoe'
        element={<StagDoePage />}
        />
      </Routes>
      </div>
  );
}

export default App;
