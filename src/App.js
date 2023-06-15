// App.js

import React, { useState } from "react";

import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";

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
