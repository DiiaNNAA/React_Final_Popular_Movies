import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home/Home';
import Movies from './pages/Movie/Movie';
import Feedback from './pages/Feedback/Feedback';
import Footer from './components/Footer';
import Error from './components/Error';
import './styles/App.scss';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
      <Router basename="/React_Final_Popular_Movies">
        <div>
          <Navbar theme={theme} toggleTheme={toggleTheme}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="*" element={<Error />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
