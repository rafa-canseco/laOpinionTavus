import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Notes from './pages/Notes/Notes';
import AuthPage from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import GENAI from './pages/Gen-AI/Gen-AI';
//import PrivateRoute from './components/PrivateRoute/privateroute';

function App() {
  useEffect(() => {
    // Deshabilitar almacenamiento en caché
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', (event) => {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        
          <Route path="/notes" element={<Notes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gen-ai" element={<GENAI />} />
        
      </Routes>
    </Router>
  );
}

export default App;
