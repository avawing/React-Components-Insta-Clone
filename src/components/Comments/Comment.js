// You do not need to change this file.
import React from 'react';

const Comment = props => {
  // Make sure the parent of Comment is passing the right props!

  
  const { comment, setComment } = props;
  const commentHandler=(input)=>{
    input.preventDefault()
    setComment(input.target.value)
  }

  return (
    <div className="comment-text">
      <span className="user">{comment.username}</span>
      {' '}
      <span className="comment">{comment.text}</span>
      <input type = "text" placeholder = "Comment" ></input>
      <button onClick = {commentHandler}>Submit</button>
    </div>
  );
};


export default Comment;
