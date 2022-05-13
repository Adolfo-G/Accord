import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary footer">
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Accord</h4>
        <div className="row">  
                <h3>Contact Info:</h3>

                    <div className="col d-flex justify-content-center text-center">
                        <a href="https://github.com/Adolfo-G"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                        <a href="https://github.com/bxz5089"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                        <a href="https://github.com/mbarrientos1129"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                        <a href="https://github.com/Yanbud"><FontAwesomeIcon icon={faGithub} size='lg'/></a> 
                    </div>

                </div> 

      </div>
    </footer>
  );
};

export default Footer;
