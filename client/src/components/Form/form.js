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
  
const
export default function Form() {
    const  handleSubmit = () =>{

    }
    return(
        <MainDiv>
             <Header> Create a Post! </Header>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <label for="Creator">Author</label>
                <input type="text" id="author" name="author" value={postData.creator} />
                <label for="Title">Title:</label>
                <input type="text" id="title" name="title" value={postData.title} />
                <label for="Text">Text:</label>
                <input type="text" id="text" name="text" value={postData.text}/>
                <label for="Text">Hastags:</label>
                <input type="text" id="tags" name="tags"value={postData.tags}/>

                

                
            </form>
        </MainDiv>
    )
}