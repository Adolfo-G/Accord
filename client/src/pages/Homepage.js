import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.getAllThoughts || [];
  return (
    <>{loading ? <div>Loading...</div> : <PostList thoughts={thoughts} />}</>
  );
};

export default Home;
