import React from 'react';

const CommentList = ({ comments = [] }) => {
  return (
    <>
      <h3 className="header-h3">Comments</h3>
      <div className="flex-row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12">
              <div className="">
                <p className="com-header">
                  <span className="com-author">{comment.commentAuthor} </span>{' '}
                  commented on
                  <span className="com-date"> {comment.createdAt}</span>
                </p>
                <p className="com-body">{comment.commentText}</p>
                <button className="btn btn-sm btn-danger ml-auto">
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
