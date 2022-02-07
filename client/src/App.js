import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/home";
import Auth from "./Auth/auth";

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
    <BrowserRouter>
      <MainDiv>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </MainDiv>
    </BrowserRouter>
  );
}

export default App;
