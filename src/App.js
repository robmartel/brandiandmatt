import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import CeremonyPage from './Pages/CeremonyPage';

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
          path='/ceremony'
          element={<CeremonyPage />}
        />
      </Routes>
      </div>
  );
}

export default App;
