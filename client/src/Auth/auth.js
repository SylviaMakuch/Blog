import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styled from "styled-components";
import Input from "./input";
import lock from "../components/media/lock.svg";
import Icon from "./icon";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Form = styled.div`
  background-image: linear-gradient(
    to bottom,
    #fc00ffd6 0%,
    #ce7effa1 51%,
    #140d18ad 100%
  );
  height: 700px;
  width: 400px;
  padding: 40px 80px;
  margin: 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: monospace;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  box-shadow: 15px 15px 50px 15px #00000045;
`;

const FormDiv = styled.div`
  position: relative;
  left: -18px;
`;

const Button1 = styled.button`
  height: 40px;
  color: white;
  background-color: transparent;
  margin: 10px;
  position: relative;
  left: 18;
`;
const Lockimg = styled.img`
  height: 50px;
  width: 50px;
`;

const Auth = () => {
  const [showPassword, setShowPassword] = useState("false");

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const [isSignup, setSignup] = useState("false");

  const switchMode = () => {
    setSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = () => {};


  const googleSuccess = () => {};
  const googleError = () => {};

  return (
    <MainDiv>
      <Form>
        <h1> {isSignup ? "Sign up" : "Sign in"}</h1>
        <Avatar>
          <Lockimg src={lock} />
        </Avatar>
        <form>
          <FormDiv>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
                style={{ color: "white" }}
              />
            )}
          </FormDiv>

          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="GOOGLE ID"
            render={(renderProps) => (
              <Button
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button1 onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button1>
            </Grid>
          </Grid>
        </form>
      </Form>
    </MainDiv>
  );
};
export default Auth;
