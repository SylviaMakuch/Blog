import React from "react";
import Post from "../Post/post";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import styled from "styled-components";
const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 500px;
`;

const Card = styled.div`

`;

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
console.log(posts)
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <MainDiv>
      {posts.map((post) => (
        <Card key={post.id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Card>
      ))}
    </MainDiv>
  );
};
export default Posts;

//useSelector will allow us to have access to our global state .: we will have access to Reducers>posts
