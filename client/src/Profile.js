import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';


const Profile = () => {

    const back = () => {};

    return (
        <div className="profile">
            <div className="profile__picture">
                Profile Picture.....
            </div>

            <div className="profile__information">
                Username
                Email
                Password
            </div>

        </div>
    )

};

export default Profile;
