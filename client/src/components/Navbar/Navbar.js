import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import Auth from "../../Auth/auth";
import { useState, useEffect } from "react";

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  background: #37303c36;
  height: 80px;
  width: 100%;
`;
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  return (
    <AppBar position="static" style={{ backgroundColor: "#37303c36" }}>
      <Toolbar>
        {user?.result ? (
          <Profile>
            <Typography
              variant="h6"
              style={{
                margin: "10px",
              }}
            >
              {user?.result.name.charAt(0)}{" "}
            </Typography>
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Button variant="contained" color="secondary">
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
