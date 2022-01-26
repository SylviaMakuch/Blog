import React from "react";
// import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";
import Post from "../Post/post";

import Post from "./Post/Post";
const MainDiv = styled.div`
  display: flex;
`;

const Card = styled.div`
  height: 100px;
`;

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(Posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <MainDiv>
      {posts.map((post) => (
        <Card key={post.id}>
          <Post post={post} />
        </Card>
      ))}
    </MainDiv>
  );
};

export default Posts;

//useSelector will allow us to have access to our global state .: we will have access to Reducers>posts
