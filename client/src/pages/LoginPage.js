import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { auth, provider } from '../firebase';
import ModalDialog from '../components/FormPopup';
import '../App.css';

const Login = () => {
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {};

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center login">
      <div className="login__logo">
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          alt="discord logo"
        />
      </div>

      <div className="login__buttons">
        <div className="login__signUp">
          <Button onClick={handleOpen}>Sign Up</Button>
          <ModalDialog open={open} handleClose={handleClose} />
        </div>

        <div className="login__login">
          <Button onClick={login}>Login</Button>
        </div>

        <div className="login__googleLogin">
          <Button onClick={loginWithGoogle}>Login With Google</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
