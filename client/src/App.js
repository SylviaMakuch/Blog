import React, { useEffect } from "react";
import Hero from "./components/Hero/hero";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import Posts from "./components/Posts/posts";
// import Form from "./components/Form/form";
import { useDispatch } from 'react-redux';
import { getPosts } from "./actions/post";
import Form from "./components/Form/form";
function App() {
  const dispath = useDispatch();
  
  useEffect(() => {
    dispath(getPosts());
  }, [dispath]);

  return (
    <div className="App">
      <Hero></Hero>
      <Form></Form>
      {/* <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
