import React from "react";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Hero from "./components/Hero/hero";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      {/* <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Hero />} />
          <Route path="/blog" element={<Hero />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
