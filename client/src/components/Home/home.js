import React, { useEffect, useState } from "react";
import Hero from "../Hero/hero";
// import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/post";
import Form from "../Form/form";
import Posts from "../Posts/posts";
import styled from "styled-components";


const MainDiv = styled.div`
  display: flex;
  justify-content: center;
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
