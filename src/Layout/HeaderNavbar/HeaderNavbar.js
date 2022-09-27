import FeatherIcon from "feather-icons-react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Menu,
  Chip,
  MenuItem,
  Divider,
  Drawer,
} from "@mui/material";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";

import NextLink from "next/link";
import React, { useState } from "react";
import img1 from "../../../assests/images/shop/img1.jpg";
import img2 from "../../../assests/images/shop/img2.jpg";
import img3 from "../../../assests/images/shop/img3.jpg";
import img4 from "../../../assests/images/shop/img4.jpg";
import Cart from "../../components - Copy/Cart/Cart";

const HeaderNavbar = ({
  sx,
  customClass,
  toggleSidebar,
  toggleMobileSidebar,
  position,
}) => {
  const messages = [
    {
      id: "1",
      avatar: img1,
      title: "Roman Joined the Team!",
      subtitle: "Congratulate him",
      time: "9:08 AM",
      status: "success",
    },
    {
      id: "2",
      avatar: img2,
      title: "New message received",
      subtitle: "Salma sent you new message",
      time: "11:56 AM",
      status: "warning",
    },
    {
      id: "3",
      avatar: img3,
      title: "New Payment received",
      subtitle: "Check your earnings",
      time: "4:39 AM",
      status: "success",
    },
    {
      id: "4",
      avatar: img4,
      title: "Jolly completed tasks",
      subtitle: "Assign her new tasks",
      time: "1:12 AM",
      status: "danger",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const profileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const profileClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // Notification
  const [anchorEl3, setAnchorEl3] = useState(null);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        {/* Toggle bar  */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          sx={{
            display: {
              lg: "flex",
              xs: "none",
            },
          }}
        >
          <MdOutlineMenu />
        </IconButton>
        {/* Toggle bar for Mobile  */}
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <MdOutlineMenu />
        </IconButton>
        {/* search icon  */}
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          aria-controls="search-menu"
          aria-haspopup="true"
          size="large"
        >
          <FeatherIcon icon="search" width="20" height="20" />
        </IconButton>

        <Box flexGrow={1} />
        {/* cart  */}
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setShowDrawer(true)}
        >
          <FeatherIcon icon="shopping-cart" width="20" height="20" />
        </IconButton>
        <Cart showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        {/* message */}
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          onClick={handleClick2}
        >
          <Badge variant="dot" color="primary">
            <FeatherIcon icon="message-square" width="20" height="20" />
          </Badge>
        </IconButton>

        <Menu
          id="msgs-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "385px",
              right: 0,
              top: "70px ",
            },
            "& .MuiList-padding": {
              p: "15px",
            },
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Box display="flex" alignItems="center">
              <Typography variant="h4" className="heading4" fontWeight="500">
                Messages
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Chip
                  size="small"
                  label="5 new"
                  sx={{
                    borderRadius: "6px",
                    pl: "5px",
                    pr: "5px",
                    background: (theme) => theme.palette.secondary.main,
                    color: "#fff",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            {messages.map((message) => {
              return (
                <Box key={message.id}>
                  <MenuItem sx={{ pt: 1, pb: 1, borderRadius: "0px" }}>
                    <Box display="flex" alignItems="center">
                      <Badge variant="dot" color="success">
                        <Image
                          src={message.avatar}
                          alt={message.title}
                          width="45px"
                          height="45px"
                          style={{ borderRadius: "50%" }}
                        />
                      </Badge>
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="h5"
                          className="heading5"
                          noWrap
                          sx={{ width: "240px" }}
                        >
                          {message.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          className="heading6"
                          noWrap
                          sx={{ width: "240px" }}
                        >
                          {message.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{
                            width: "240px",
                            fontSize: "10px",
                            color: "#ccc",
                          }}
                        >
                          {message.time}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        </Menu>
        {/* Notifications */}
        <IconButton
          size="large"
          aria-label="menu"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick3}
        >
          <Badge variant="dot" color="secondary">
            <FeatherIcon icon="bell" width="20" height="20" />
          </Badge>
        </IconButton>

        <Menu
          id="msgs-menu"
          anchorEl={anchorEl3}
          keepMounted
          open={Boolean(anchorEl3)}
          onClose={handleClose3}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "385px",
              right: 0,
              top: "70px ",
            },
            "& .MuiList-padding": {
              p: "15px",
            },
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Box display="flex" alignItems="center">
              <Typography variant="h4" className="heading4" fontWeight="500">
                Notifications
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Chip
                  size="small"
                  label="5 new"
                  sx={{
                    borderRadius: "6px",
                    pl: "5px",
                    pr: "5px",
                    background: (theme) => theme.palette.secondary.main,
                    color: "#fff",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            {messages.map((message) => {
              return (
                <Box key={message.id}>
                  <MenuItem sx={{ pt: 1, pb: 1, borderRadius: "0px" }}>
                    <Box display="flex" alignItems="center">
                      <Badge variant="dot" color="success">
                        <Image
                          src={message.avatar}
                          alt={message.title}
                          width="45px"
                          height="45px"
                          style={{ borderRadius: "50%" }}
                        />
                      </Badge>
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="h5"
                          className="heading5"
                          noWrap
                          sx={{ width: "240px" }}
                        >
                          {message.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          className="heading6"
                          noWrap
                          sx={{ width: "240px" }}
                        >
                          {message.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{
                            width: "240px",
                            fontSize: "10px",
                            color: "#ccc",
                          }}
                        >
                          {message.time}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        </Menu>

        <Box
          sx={{
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "25px",
            ml: 1,
            mr: 1,
          }}
        />

        {/* profile  */}
        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={profileClick}
        >
          <Box display="flex" alignItems="center">
            <Image
              src="/profile.jpeg"
              alt="user-image"
              className="roundedCircle"
              width={28}
              height={30}
              style={{ borderRadius: "50px" }}
            />
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{
                  ml: 1,
                }}
              >
                Rajesh
              </Typography>
              <FeatherIcon icon="chevron-down" width="20" height="20" />
            </Box>
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={profileClose}
          sx={{
            "& .MuiMenu-paper": {
              width: "215px",
              right: "10px",
              top: "70px !important",
            },
            "& .MuiList-padding": {
              p: "10px",
            },
          }}
        >
          <Box>
            <NextLink href="/authentication/login">
              <Button
                sx={{
                  mt: 2,
                  display: "block",
                  width: "100%",
                }}
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </NextLink>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavbar;
