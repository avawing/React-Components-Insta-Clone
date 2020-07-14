import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts, setComment } = props;

  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}

      {
        posts.map(post => {
          return <Post post = {post} key = {post.id} setComment = {setComment}/>
        })
      }
    </div>
  );
};

export default Posts;
