import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

// UNSPLASH
const PostForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [thoughtBody, setThoughtBody] = useState('');
  const [img, setImg] = useState('');
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=NowIsjRQM_LT9V62QbZFHKt_lHGehaDTgF2pjaaLlHo&per_page=1`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const SubmitImg = () => {
    fetchRequest();
    setImg('');
  };
  // UNSPLASH

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
      window.location.assign('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
    }
    if (name === 'post-content' && value.length <= 280) {
      setThoughtBody(value);
    }
  };

  return (
    <div className="post-form">
      <h3>My Post</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="form-group">
              <input
                name="thoughtText"
                placeholder="Title"
                value={thoughtText}
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Body"
                className="form-input"
                id="post-content"
                name="post-content"
                value={thoughtBody}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* UNSPLASH  */}
            <div className="form-group">
              <input
                className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
                type="text"
                placeholder="Search Anything..."
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <div className="col-12 d-flex justify-content-evenly flex-wrap">
                {res.map((value) => {
                  return (
                    <>
                      <img
                        key={value.id}
                        className="col-3 img-fluid img-thumbnail"
                        src={value.urls.regular}
                        alt="value.alt_description"
                      />
                    </>
                  );
                })}
              </div>
              <button
                type="submitImg"
                onClick={SubmitImg}
                className="btn bg-dark text-white fs-3 mx-3"
              >
                Search
              </button>
            </div>
            {/* UNSPLASH  */}

            <div className="post-submit">
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
