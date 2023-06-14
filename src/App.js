// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Sidebar from "./components/common/Sidebar";
import Feed from "./components/common/Feed";
import Rightbar from "./components/common/Rightbar";
import Navbar from "./components/common/Navbar";
import Add from "./components/common/Add";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkMode}>
        {/* <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router> */}
        {/* material ui: to box component we can pass which html elements we would like to use using component props. Example component="span" */}
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
