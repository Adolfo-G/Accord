import React from 'react';
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { REMOVE_COMMENT } from "../utils/mutations";

const CommentList = ({ comments = [] }) => {
  const [removeComment, { error }] = useMutation(REMOVE_COMMENT)
  const removeCommentFunction = async (cid) => {
    console.log(cid)
    
    const { data } = await removeComment({
      variables: {
        commentId: cid,
        commentAuthor: Auth.getProfile().data.username,
      },
    });
    window.location.assign('/me')
  }
  return (
    <>
      <h3
        className="header-h3"
      >
        Comments
      </h3>
      <div className="flex-row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12">
              <div className="">
                <p className="com-header">
                  <span className="com-author">{comment.commentAuthor} </span> commented on
                  <span className="com-date"> {comment.createdAt}
                  </span>
                </p>
                <p className="com-body">{comment.commentText}</p>
                <button
                    className="btn btn-sm btn-danger ml-auto"
                    onClick={() => removeCommentFunction(comment._id)}
                  >
                    Delete
                  </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
