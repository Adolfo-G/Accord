import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center footer">
      <footer className="contentBox">
        <div className="row">
          <h3>Accord</h3>
          <div className="col d-flex justify-content-end text-end">Product</div>
          <div className="col d-flex justify-content-center text-center">Resources</div>
          <div className="col d-flex justify-content-start text-start">Policies</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
