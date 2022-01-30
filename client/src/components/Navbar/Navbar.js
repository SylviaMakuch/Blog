import React from "react";
import styled from "styled-components";
import { Link } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  background: #37303c36;
  height: 80px;
  width: 100%;
`;
const Navbar = () => {
    const user = null;
return (
    <AppBar position="static" style={{  backgroundColor: "#37303c36"}}>
      <Toolbar >
        {user?.result ? (
          <Profile >
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" color="secondary" >Logout</Button>
          </Profile>
        ) : (
          <Button variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};


export default Navbar;
