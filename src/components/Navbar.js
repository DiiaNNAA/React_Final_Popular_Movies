import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import MoonIcon from '../assets/icons/dark-mode-icon.svg';
import SunIcon from '../assets/icons/day-mode-icon.svg';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/Feedback">Feedback</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? (
            <img src={MoonIcon} alt="Moon Icon" className="theme-icon" />
          ) : (
            <img src={SunIcon} alt="Sun Icon" className="theme-icon" />
          )}
        </button>
    </nav>
  );
};

export default Navbar;
