import React, { useState } from "react";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const NavIcons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const MobileUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Suki
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search ....." />
        </Search>
        <NavIcons>
          {" "}
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>{" "}
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>{" "}
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Suprit"
            src="https://media.licdn.com/dms/image/C4D03AQEFqvfKALmmBw/profile-displayphoto-shrink_800_800/0/1600649364027?e=2147483647&v=beta&t=DOK9jyzpSWn7dP2bmlhMdKVBhvb0xixnjShJ8smWyIA"
            onClick={(e) => setOpen(true)}
          />
        </NavIcons>
        <MobileUserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Suprit"
            src="https://media.licdn.com/dms/image/C4D03AQEFqvfKALmmBw/profile-displayphoto-shrink_800_800/0/1600649364027?e=2147483647&v=beta&t=DOK9jyzpSWn7dP2bmlhMdKVBhvb0xixnjShJ8smWyIA"
          />
          <Typography variant="span"> Suprit </Typography>
        </MobileUserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
