import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import importGoogleFonts from "import-google-fonts";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/post";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleFonts = importGoogleFonts(
  createGlobalStyle,
  null,
  ["Abril Fatface"],
  ["Aclonica"]
);

const Header = styled.h1`
  font-family: "Abril Fatface";
  font-size: 90px;
  font-weight: 700;
  line-height: 94px;
  color: white;

`;

const Forum = styled.form`
  background-color: #08080a45;
  height: 500px;
  width: 300px;
  padding: 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: monospace;
  justify-content: space-between;
  font-size: large;
`;

const H3 = styled.h1`
  color: coral;
  text-align: center;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #fc00ff 0%,
    #00dbde 51%,
    #fc00ff 100%
  );
  
  margin: 50px 0px;
  font-family: "Aclonica";
  font-size: 20px;
  margin: 10px;
  padding: 10px 45px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 2px #fc00ff; */
  border-radius: 10px;
  width: 50%;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

const Button2 = styled.button`
  display: inline-block;
   padding: 0.35em 1.2em;
   border: 0.1em solid #ffffff;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: #ffffff;
   text-align: center;
   background-color: #ffffff00;
   height: 32px;

  &:hover {
     color: #000000;
     background-color: #ffffff;
  }
`;

function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch;
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  };
 
  return (
    <MainDiv>
      <Header> Create a Post! </Header>
      <Forum autoComplete="off" onSubmit={handleSubmit}>
        <H3> {currentId ? "Editing" : "Creating"}</H3>
        <label for="Creator">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <label for="Title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <label for="Text">Text:</label>
        <input
          type="text"
          id="text"
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <label for="Text">Hastags:</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <ButtonDiv>
          <Button type="submit">Submit</Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button2 onClick={clear}>clear</Button2>
        </ButtonDiv>
      </Forum>
    </MainDiv>
  );
}
export default Form;

//currentID required to link with form to edit it from the post
