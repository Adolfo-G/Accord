import React from 'react';
import p1 from '../assets/images/1.png'

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comments from '../components/Comments';
import AddComment from '../components/AddComment';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-post">

      <div className="article-container">
        <h1 className="article-title">
          {thought.thoughtText}
        </h1>
        <p className="article-info">
          <span className="mr-1">Posted by{` `}{thought.thoughtAuthor}</span>
          <span>{thought.createdAt}
          </span>
        </p>
        <div className="article-img"><img className="img" src={p1} /></div>
        <p className="article-body">{thought.thoughtBody}</p>

      </div>

      <div className="comments">
        <Comments comments={thought.comments} />
      </div>
      <div className="add-comment">
        <AddComment thoughtId={thought._id} />
      </div>
    </div >
  );
};

export default SingleThought;
