import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import Menu from './components/Menu';
import useLocalStorage from './hooks/useLocalStorage';
import './css/app.css';

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos])

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, id: uuidv4() }]);
  };

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.id !== id))
  };

  return (
    < >
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={< TechnoAdd handleAddTechno={handleAddTechno} />} />
          <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
