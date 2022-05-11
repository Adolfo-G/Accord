import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign('/')
  };
  return (
    <header className="flex-row align-center custom-header">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-logo" to="/">
            <h1 className="m-0">Accord</h1>
          </Link>

        </div>
        <div className="nav">
          {Auth.loggedIn() ? (
            <>
              <Link className="" to="/me">
                My Posts  </Link>
              <button className="btn-a" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn-login " to="/login">
                Login
              </Link>
              <Link className="btn-signup " to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
