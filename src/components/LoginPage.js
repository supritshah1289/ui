// components/LoginPage.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { login } from "../reducers/authReducer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dispatch login action with username and password
    dispatch(login(username, password));
    history.push("/"); // Redirect to home page after successful login
  };

  return (
    <Container maxWidth="sm">
      <h1>Login Page</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;
