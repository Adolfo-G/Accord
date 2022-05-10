import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../assets/images/1.png'


const ThoughtList = ({thoughts,showEdit = false}) => {
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
               {thought.thoughtBody}
              </p>
              {showEdit && (<div className="post-edit"><Link to='/editPost'><span className="btn btn-sm btn-primary ">Edit</span></Link><button className="btn btn-sm btn-danger ml-auto">delete</button></div>)}
            </div>

          </div>
        ))
      }
    </div >
  );
};

export default ThoughtList;
