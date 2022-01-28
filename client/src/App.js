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
  justify-content: space-around;
  margin: 20px;
  flex-wrap: nowrap;
  align-items: flex-start;
`;

function App() {
  const dispath = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispath(getPosts());
  }, [currentId, dispath]);

  return (
    <div className="App">
      <Hero />
      <MainDiv>
        <Posts setCurrentId={setCurrentId} />
      </MainDiv>
       <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
