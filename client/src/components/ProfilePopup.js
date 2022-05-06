import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Profile from './Profile';

const ProfilePopup = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Profile handleClose={handleClose} />
    </Dialog>
  );
};

export default ProfilePopup;
