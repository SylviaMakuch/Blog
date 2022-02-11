import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import Auth from "../../Auth/auth";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from 'jwt-decode';

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  /* background: #37303c36; */
  height: 80px;
  width: 100%;
`;
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/auth', {replace: true});
    setUser(null)
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  //want to use this when we swtich from /auth-->/ .: useLocation

  return (
    <AppBar position="static" style={{ backgroundColor: "#37303c36" }}>
      <Toolbar>
        {user?.result ? (
          <Profile>
            <Typography variant="h6">{user?.result.name.charAt(0)} </Typography>
            <Avatar
              alt={user?.result.name}
              src={user?.result.imageUrl}
              style={{
                margin: "10px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </Profile>
        ) : (
          <Link to="/auth" component={<Auth />}>
            {" "}
            <Button variant="contained" color="primary">
              {" "}
              Sign In
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
