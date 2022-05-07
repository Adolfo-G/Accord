import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignUpForm = ({ handleClose }) => {
  const classes = useStyles();

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { error, data }] = useMutation(CREATE_USER);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, email, password });

    try {
      const { data } = await createUser({
        variables: { username, email, password }
      })
      Auth.login(data.createUser.token);
      window.location.href='/homepage'
    } catch (e) {
      console.error(e)
    }
    handleClose();
  };

  return (
    <div>
      {data ? (
        <p>
          Success! You may now head to the Homepage!
        </p>

      ) : (
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="filled"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
