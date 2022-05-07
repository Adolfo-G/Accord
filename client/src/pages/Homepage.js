import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsList } from '../components/PostList';
import { Post } from '../components/Post';
import { AddPostForm } from '../components/PostForm'

function HomePage() {
  return (
    <div class="container">
      <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
        <div className="main-picture contentBox">
          <h1>Hello World!</h1>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default HomePage;
