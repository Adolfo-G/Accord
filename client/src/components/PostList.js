import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../assets/images/1.png'
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { REMOVE_THOUGHT } from '../utils/mutations';

const ThoughtList = ({ thoughts, showEdit = false }) => {
  const [removeThought, { error }] = useMutation(REMOVE_THOUGHT)
  const RemoveThoughtFunction= async (tid)=>{
      const { data } = await removeThought({
        variables: {
          thoughtId:tid,
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
              >  <img className="img" src={p1} /></Link>
              <p className="post-info">
                <span>
                  {thought.thoughtAuthor}</span><span>
                  {thought.createdAt}</span>
              </p>
              <Link
                className="post-title"
                to={`/thoughts/${thought._id}`}
              > <span className="text">{thought.thoughtText}</span></Link>
              <p className="post-body">
              </p>
              {showEdit && (
                <div className="post-edit">
                  <Link 
                  to='/editpost'
                  state={{thoughtId:thought._id}}
                  >
                    <span className="btn btn-sm btn-primary ">Edit</span>
                  </Link>
                  <button 
                  className="btn btn-sm btn-danger ml-auto"
                  onClick={()=>RemoveThoughtFunction(thought._id)}
                  >
                    delete
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
