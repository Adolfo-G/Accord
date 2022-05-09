import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ChatPage() {
  return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center chat">
        <div className="main-picture contentBox">
          <h1>Chat!</h1>
        </div>
        <div className="content"></div>
      </div>
  );
}

export default ChatPage;
