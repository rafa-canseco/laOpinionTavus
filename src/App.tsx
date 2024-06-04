import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Notes from './pages/Notes/Notes';
import AuthPage from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import GENAI from './pages/Gen-AI/Gen-AI';
import Videogen from './pages/Video-gen/Video-gen';
import RegistrarPage from './pages/Registrar/Registrar';
import PrivateRoute from './components/PrivateRoute/privateroute';


/* CMS */

import AuthPageCMS from './pages/CMS/Auth/Auth-cms';
import HomeCMS from './pages/CMS/Home/home-cms';
import AcontentCMS from './pages/CMS/Acontent/Acontent-cms'
import EditcontentCMS from './pages/CMS/Editcontent/Editcontent-cms'

function App() {
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', () => {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  return (
    <Router>
      <Routes>
      
        <Route path="/cms" element={<AuthPageCMS />} />
        <Route path="/" element={<AuthPage />} />
        <Route path="/registrar" element={<RegistrarPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home-cms" element={<HomeCMS />} />
          <Route path="/acontent-cms" element={<AcontentCMS />} />
          <Route path="/editcontent-cms" element={<EditcontentCMS />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gen-ai" element={<GENAI />} />
          <Route path="/video-gen" element={<Videogen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
