import React, { useEffect } from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux";
import Post from "./Post";
import Posts from "./Posts";

const App = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>
      <Posts isLoading={isLoading} posts={posts} />
    </div>
  );
};

export default App;
