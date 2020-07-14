import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments, setComment } = props;
  const segments = comments.comments;

  

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}

      {
        segments.map(comment => {
          return <Comment comment = {comment} key = {comment.id} setComment = {setComment}/>
        })
      }
    </div>
  );
};

export default Comments;
