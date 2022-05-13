import React from 'react';
import p1 from '../assets/images/1.png'
import p2 from '../assets/images/2.png'
import p3 from '../assets/images/3.png'
import p4 from '../assets/images/4.png'
import p5 from '../assets/images/5.png'
import p6 from '../assets/images/6.png'
import p7 from '../assets/images/7.png'
import p8 from '../assets/images/8.png'
import p9 from '../assets/images/9.png'
import p10 from '../assets/images/10.png'
import p11 from '../assets/images/11.png'
import p12 from '../assets/images/12.png'
import p13 from '../assets/images/13.png'
import p14 from '../assets/images/14.png'
import p15 from '../assets/images/15.png'

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comments from '../components/Comments';
import AddComment from '../components/AddComment';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  const randomImage=()=>{
    const images=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15]
    return images[Math.floor(Math.random() * 14)]
  }
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
        <div className="article-img"><img className="img" src={randomImage()} /></div>
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
