import React from 'react';
import { Link } from 'react-router-dom';
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
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { REMOVE_THOUGHT } from '../utils/mutations';

const ThoughtList = ({ thoughts, showEdit = false }) => {
  const randomImage=()=>{
    const images=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15]
    return images[Math.floor(Math.random() * 14)]
  }
  const [removeThought, { error }] = useMutation(REMOVE_THOUGHT)
  const RemoveThoughtFunction = async (tid) => {
    const { data } = await removeThought({
      variables: {
        thoughtId: tid,
        thoughtAuthor: Auth.getProfile().data.username,
      },
    });
    window.location.assign('/me')
  }
  return (
    <div className='row'>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card col-sm-6 col-md-4">
            <div className="card-body">
              <Link
                to={`/thoughts/${thought._id}`}
              >  <img className="img" src={randomImage()} /></Link>
              <p className="post-info">
                <span>
                  {thought.thoughtAuthor}</span><span>
                  {thought.createdAt}</span>
              </p>
              <Link
                className="post-title"
                to={`/thoughts/${thought._id}`}
              > <span className="text">{thought.thoughtText}</span></Link>
              <p className="post-body">{thought.thoughtBody}
              </p>
              {showEdit && (
                <div className="post-edit">
                  <Link
                    to='/editpost'
                    state={{ thoughtId: thought._id }}
                  >
                    <span className="btn btn-sm btn-primary ">Edit</span>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-auto"
                    onClick={() => RemoveThoughtFunction(thought._id)}
                  >
                    Delete
                  </button>
                </div>)}
            </div>
          </div>
        ))
      }
    </div >
  );
};

export default ThoughtList;
