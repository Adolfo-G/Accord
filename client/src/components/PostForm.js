import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const PostForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtBody, setThoughtBody] = useState('');

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtBody,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
      setThoughtBody('');
      window.location.assign('/')
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
    }
    if (name === "post-content" && value.length <= 280){
      setThoughtBody(value);
    }
  };

  return (
    <div>
      <h3>My Post</h3>

      {Auth.loggedIn() ? (
        <>

          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >


            <div className="form-group">
              <label>Title:</label>
              <input name="thoughtText"
                value={thoughtText}
                className="form-input"
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="post-content">Body:</label>
              <textarea className="form-input" 
              id="post-content" 
              name="post-content"
              value = {thoughtBody}
              onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="image" />
                <label className="custom-file-label">Choose File</label>
              </div></div>

            <div className="col-12">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Create
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
