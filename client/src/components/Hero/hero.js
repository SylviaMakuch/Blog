import React from "react";
import heropic from "./../media/heropic.svg";
import styled, { createGlobalStyle } from "styled-components";
import importGoogleFonts from "import-google-fonts";

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

const Slogan = styled.p`
  font-family: "System-ui";
  font-weight: 100;
  font-size: 40px;
  text-transform: uppercase;
  color: #ffffff;
`;

const PageDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  flex-wrap: wrap;
`;

const TextDiv = styled.div`
  align-content: center;
  justify-content: center;
`;

const MediaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroPic = styled.img`
  height: 500px;
`;

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #fc00ff 0%,
    #00dbde 51%,
    #fc00ff 100%
  );
  font-family: "Aclonica";
  font-size: 40px;
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
export default function Hero() {
  return (
    <PageDiv>
      <TextDiv>
        <GoogleFonts />
        <Header>Digi-Book</Header>
        <Slogan>Your Digitial Note Pad</Slogan>
      </TextDiv>
      <MediaDiv>
        <HeroPic src={heropic}></HeroPic>
        <Button> Create </Button>
      </MediaDiv>
    </PageDiv>
  );
}
