import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/home";

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
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/auth" element={<Auth />}></Route> */}
        </Routes>
      </BrowserRouter>
    </MainDiv>
  );
}

export default App;
