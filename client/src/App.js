import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/hero";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
import Form from "./components/Form/form";
import Posts from "./components/Posts/posts";


function App() {
  const dispath = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispath(getPosts());
  }, [currentId, dispath]);

  return (
    <div className="App">
      <Hero />
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
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
