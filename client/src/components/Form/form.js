import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import importGoogleFonts from "import-google-fonts";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

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

const Header = styled.h2`
  font-family: "Abril Fatface";
  font-size: 90px;
  font-weight: 700;
  line-height: 94px;
  color: white;
  margin-top: 100px;
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
  justify-content: space-around;
  font-size: large;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #fc00ff 0%,
    #00dbde 51%,
    #fc00ff 100%
  );
  margin-left: 50px;
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

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  return (
    <MainDiv>
      <Header> Create a Post! </Header>
      <Forum autoComplete="off" onSubmit={handleSubmit}>
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
      </Forum>
    </MainDiv>
  );
}
export default Form;
