import React, { useState } from "react";
import { Avatar, Button, Grid } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import Input from "./input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Lock from "../components/media/lock.svg";
import Wave from "../components/media/wave.svg";
import { signin, signout } from "../actions/auth";

const BackgroundImg = styled.img`
  width: 100%;
  height: 100vh;
`;
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 0;
  /* background: linear-gradient(
    247.39deg,
    #af47ef 0%,
    rgba(24, 0, 62, 0.929213) 46.22%,
    rgba(67, 86, 135, 0.86) 100%
  ); */
  background-size: cover;
 */
  width: 100%;
  height: 100vh;
`;

const Form = styled.div`
  position: absolute;
  background-color: #8e8093b5;
  /* background-image: linear-gradient(
    to bottom,
    #ffffffd6 0%,
    #ce7effa1 60%,
    #140d18ad 100%
  ); */
  height: 700px;
  width: 400px;
  padding: 40px 80px;
  margin: 100px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: system-ui;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 15px 15px 50px 15px #00000045;
`;

const FormDiv = styled.div`
  position: relative;
  left: -18px;
`;

const Button1 = styled.button`
  height: 40px;
  color: white;
  background-image: linear-gradient(
    to bottom,
    #00dbde 0%,
    #0072ff 51%,
    #00dbde 100%
  );
  margin: 10px;
`;
const Locking = styled.img`
  height: 50px;
  width: 50px;
`;
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState(initialState);
  const [showPassword, setShowPassword] = useState("false");
  const [isSignup, setSignup] = useState("false");
  // import signup form

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isSignup){
    //   dispatch(signup(registerData, navigate('/', {replace: true})));
    // }
    // else{

    // }
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };


  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  return (
    <MainDiv>
      <BackgroundImg src={Wave} />
      <Form>
        <h1> {isSignup ? "Sign up" : "Sign in"}</h1>
        <Avatar>
          <Locking src={Lock} />
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
                  style={{ color: "white" }}
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
              autocomplete="on"
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginBottom: "8px", backgroundColor: "#923fb5" }}
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="831530185138-9a1suordsgu512o279sop8ggl4snqb99.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                color="primary"
                // style={{backgroundColor:"#923fb5"}}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container>
            <Button1 onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign Up"}
            </Button1>
          </Grid>
        </form>
      </Form>
    </MainDiv>
  );
};
export default Auth;
