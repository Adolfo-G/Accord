import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary footer">
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Accord</h4>
          <h5>Contact Info:</h5>
              <div className="text-center">
                  <a href="https://github.com/Adolfo-G"><FontAwesomeIcon icon={faGithub} size='lg' style={{padding:'0px 10px'}}/>Adolfo Gonzalez</a> 
                  <a href="https://github.com/bxz5089"><FontAwesomeIcon icon={faGithub} size='lg' style={{padding:'0px 10px'}}/>Bowen Zheng</a> 
                  <a href="https://github.com/mbarrientos1129"><FontAwesomeIcon icon={faGithub} size='lg' style={{padding:'0px 10px'}}/>Michael Barrientos</a> 
                  <a href="https://github.com/Yanbud"><FontAwesomeIcon icon={faGithub} size='lg' style={{padding:'0px 10px'}}/>Yan Zhang</a> 
              </div>
      </div>
    </footer>
  );
};

export default Footer;
