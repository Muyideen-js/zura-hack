import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Tracks from './pages/Tracks.jsx';
import Sponsors from './pages/Sponsors.jsx';
import CodeOfConduct from './pages/CodeOfConduct.jsx';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
      <Footer />
    </>
  );
}
