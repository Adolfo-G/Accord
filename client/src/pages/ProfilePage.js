import React, { useState } from 'react';
import '../App.css';

const Profile = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center profile">
      <div className="profile__picture">
        
        <div className="profile__userInfo">
          
          <div>#</div>
        </div>
      </div>

      <div className="profile__information">
        <div className="profile__infoTitle">User Information</div>

        <form>
          <label>
            Username:
            <div>
              <input type="text" placeholder="Edit" />
            </div>
          </label>
        </form>

        <form>
          <label>
            Email:
            <div>
              <input type="text" placeholder="Edit" />
            </div>
          </label>
        </form>

        <form>
          <label>
            Password:
            <div>
              <input type="text" placeholder="Edit" />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Profile;
