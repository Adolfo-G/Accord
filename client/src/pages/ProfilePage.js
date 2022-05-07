import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../App.css';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <div className="profile__picture">
        <img src={user.photo} />
        <div className="profile__userInfo">
          {user.displayName}
          <div>#{user.uid.substring(0, 5)}</div>
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
            Email: {user.email}
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
