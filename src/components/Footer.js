import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Movie Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
