import React, {useState} from 'react';
import styled, { createGlobalStyle } from "styled-components";
import importGoogleFonts from "import-google-fonts";
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

const MainDiv = styled.div
``

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

  const Form = styled.form
  ``
  
const
export default function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const  handleSubmit = () =>{

    }
    return(
        <MainDiv>
             <Header> Create a Post! </Header>
            <Form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <label for="Creator">Author</label>
                <input type="text" id="author" name="author" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}  />
                <label for="Title">Title:</label>
                <input type="text" id="title" name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <label for="Text">Text:</label>
                <input type="text" id="text" name="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <label for="Text">Hastags:</label>
                <input type="text" id="tags" name="tags"value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>

                

                
            </Form>
        </MainDiv>
    )
}