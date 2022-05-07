import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
      <footer className="footer contentBox">
        <div className="row">
          <h3>Footer Contact Info:</h3>
          <div className="col d-flex justify-content-end text-end"></div>
          <div className="col d-flex justify-content-center text-center"></div>
          <div className="col d-flex justify-content-start text-start"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
