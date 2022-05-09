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
        <p className="article-body">In October of 1871, the oldest University in Nashville TN, teetered on the brink of collapse. To survive, Fisk University staked its last $40 on a set of field hymns and 10 descendants of American slavery. The singing group carried melodies their families shared in secret from the cotton fields of middle Tennessee to the high court of the Queen of England. The landmark tours of the Fisk Jubilee Singers rescued a university, gave Nashville its identity, and set the course of American music.

          One hundred fifty years later the journey of the Fisk Jubilee Singers continues. Immerse yourself in the music and voices of the original chorus and hear how their stories are transformed through poetry in this one-hour special “Three Castles and the Music City.”

          Produced in partnership with Nashville Public Radio [WPLN]
          Hosted by: Destiny Birdsong
          Co-Written and Produced by: Joshua Moore and Colleen Phelps
          Editing by: Anita Bugg
          Transcription by: Ayinde Jean-Baptiste</p>

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
