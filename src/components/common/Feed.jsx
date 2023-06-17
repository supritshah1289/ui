import React from "react";
import Posts from "./Posts";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts />
    </Box>
  );
};

export default Feed;
