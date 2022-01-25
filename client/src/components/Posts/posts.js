import React from "react";
// import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import Post from "./Post/Post";
const MediaDiv = styled.div`
  display: flex;
`;

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(Posts);
  return (
   !posts.length ? <CircularProgress /> : (
     <MediaDiv>

     </MediaDiv>
   );
};

export default Posts;

//useSelector will allow us to have access to our global state .: we will have access to Reducers>posts
