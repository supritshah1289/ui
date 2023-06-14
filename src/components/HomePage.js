// components/HomePage.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "@mui/material";
import { logout } from "../reducers/authReducer";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
  };

  return (
    <Container maxWidth="sm">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <h1>Please log in.</h1>
      )}
    </Container>
  );
};

export default HomePage;
