import React from "react";

function Post({ post = {} }) {
  return (
    <li className="post">
      <p className="title">
        <strong>Title :</strong>
        {post.title}
      </p>
      <p className="body">
        <strong>Body :</strong>
        {post.body}
      </p>
    </li>
  );
}

export default Post;
