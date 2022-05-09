import React, { useState } from 'react';
import '../App.css';
import profileImg from '../assets/img/ben-sweet-2LowviVHZ-E-unsplash.jpg';
import testPic from '../assets/img/brett-jordan-YyzYbcIw3VE-unsplash.jpg';

const Profile = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center profile">
  
          <div className="card mb-3 profile__userInfo">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={profileImg} className="img-fluid rounded-start profile__picture" alt="..."></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Username</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 profile__userPosts">
          <div className="col">
            <div className="card">
              <img src={testPic} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={testPic} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={testPic} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Profile;
