import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {
  const convertRelativeTime = date => {
    return moment(date).fromNow();
  };

  return (
      //render compnents here
  );
};