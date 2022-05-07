import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChatPage() {
  return (
    <div className="container">
      <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">
        <div className="main-picture contentBox">
          <h1>Chat!</h1>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default ChatPage;
