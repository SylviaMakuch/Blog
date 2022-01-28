import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/Hero/hero";
// import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
import Form from "./components/Form/form";
import Posts from "./components/Posts/posts";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const dispath = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispath(getPosts());
  }, [currentId, dispath]);

  return (
    <MainDiv>
      <Hero />
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </MainDiv>
  );
}

export default App;
