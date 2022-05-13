import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import { Link } from 'react-router-dom';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <p className="text-primary">
        You need to be logged in to see this. Use the navigation links above to logout then
        sign up or log in!
      </p>
    );
  }

  return (

    <div className="content">
      <div className="profile-header row"><h2>
        {!userParam ? `${user.username}'s Posts` : ''}
      </h2>
        <Link to='/addPost'><span className="btn btn-sm btn-primary ">+ Create Post</span></Link></div>
      <div>
        <PostList
          thoughts={user.thoughts}
          title={`${user.username}'s thoughts...`}
          showTitle={false}
          showUsername={false}
          showEdit={true}
        />
      </div>

    </div>

  );
};

export default Profile;
