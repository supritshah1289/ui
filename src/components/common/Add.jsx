import {
  Box,
  Fab,
  Tooltip,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { itemAdded } from "../../reducers/Item/itemSlice";
import { useDispatch } from "react-redux";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  const canSave = Boolean(title) && Boolean(description) && Boolean(imageUrl);

  const handleSubmit = () => {
    if (title && description && imageUrl) {
      dispatch(itemAdded(title, description, imageUrl));
    }
    reset();
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            {" "}
            Create Post{" "}
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <Stack p={2}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              label="Description"
              variant="standard"
              placeholder="Describe what you're offering to customers"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="Image url"
              variant="standard"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!canSave}
          >
            Submit
          </Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
