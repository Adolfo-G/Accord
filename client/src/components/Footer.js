import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary footer">
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Accord</h4>
      </div>
      <div className='footer-container'>
      <ul className='foot-nav'>
        <li className="nav-item"><a href="https://github.com/Adolfo-G" >Adolfo Gonzalez</a></li>
        <li className="nav-item"><a href="https://github.com/bxz5089" >Bowen Zheng</a></li>
        <li className="nav-item"><a href="https://github.com/mbarrientos1129" >Michael Barrientos</a></li>
        <li className="nav-item"><a href="https://github.com/Yanbud" >Yan Zhang</a></li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
