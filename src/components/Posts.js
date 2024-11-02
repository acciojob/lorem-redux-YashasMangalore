import React from "react";
import Post from "./Post";

function Posts({ posts = [], isLoading = false }) {
  // if (isLoading) {
  // 	return (
  // 		<ul className='posts'>
  // 			<li className='post'>
  // 				<p className='title'>Loading...</p>
  // 			</li>
  // 		</ul>
  // 	)
  // }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
