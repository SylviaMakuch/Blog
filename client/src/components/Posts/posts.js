import React from "react";
// import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(Posts);
  return (
    <>
      <h1>Posts!</h1>
      <Post />
    </>
  );
};

export default Posts;

//useSelector will allow us to have access to our global state .: we will have access to Reducers>posts
