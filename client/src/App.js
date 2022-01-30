import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainDiv>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </MainDiv>
  );
}

export default App;
