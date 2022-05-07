import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBarStyle contentBox">
          <Link to="/" className="nav-brand-link">
            <p className="navbar-brand">Accord</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="portfolioNav">
              <li className="nav-item">
                <Link to="/homepage" className="nav-link">
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page/chat" className="nav-link">
                  <p>Chat</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page/profile" className="nav-link">
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resumepage" className="nav-link">
                  <p></p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
