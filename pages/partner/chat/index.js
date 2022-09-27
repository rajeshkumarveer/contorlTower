import {
  Breadcrumbs,
  Card,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Drawer } from "@mui/material";
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import SimpleBar from "simplebar-react";
import { useEffect } from "react";

const Chat = () => {
  const [mobileSideOpen, SetMobileSideOpen] = useState(true);
  const drawerWidth = 290;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [currentUser, setCurrentUser] = useState([]);

  const chats = [
    {
      id: 11293,
      name: "Sheaik",
      role: "Sales Executive",
      messages: [
        {
          user: "linon",
          message: "Your payment for order 4024ac29 is still pending.",
        },
        {
          user: "customer",
          message: "Yeah, sure i will pay it.",
        },
      ],
    },
    {
      id: 99293,
      name: "Dhanush Karthick S",
      role: "Sales Member",
      messages: [
        {
          user: "linon",
          message: "Your payment for order 94024ac2 is still pending.",
        },
        {
          user: "customer",
          message: "Okay",
        },
      ],
    },
  ];

  const handleUser = (id) => {
    chats.filter((chat) => {
      if (chat.id === id) setCurrentUser(chat);
    });
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div data-aos="zoom-in-up">
      <Breadcrumbs>
        <Typography
          variant="h5"
          className="heading3"
          sx={{ pl: 2 }}
          data-aos="zoom-in-up"
        >
          Kupex Chat
        </Typography>
      </Breadcrumbs>
      <Card
        className="chat-design"
        sx={{ display: "flex" }}
        data-aos="zoom-in-up"
      >
        {lgUp ? (
          <>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { position: "relative" },
              }}
              variant="permanent"
            >
              <div>
                <Box p={2} sx={{ pt: "21px", pb: "21px" }}>
                  <TextField
                    id="outlined-search"
                    placeholder="Search contacts"
                    size="small"
                    type="search"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Divider />
                <List
                  sx={{
                    height: { lg: "calc(100vh - 280px)" },
                    sm: { height: "100vh" },
                    p: 1,
                  }}
                >
                  {chats.map((chat) => {
                    return (
                      <ListItem
                        button
                        alignItems="flex-start"
                        key={chat.id}
                        onClick={() => handleUser(chat.id)}
                      >
                        <ListItemAvatar>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            width="45px"
                            height="45px"
                            className="roundedCircle"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={chat.name}
                          secondary={chat.role}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Drawer>
          </>
        ) : (
          <>
            <Drawer
              open={mobileSideOpen}
              onClose={() => SetMobileSideOpen(false)}
              variant="temporary"
              sx={{
                zIndex: 1,
                [`& .MuiDrawer-paper`]: { paddingTop: "70px" },
              }}
            >
              <div>
                <Box p={2} sx={{ pt: "21px", pb: "21px" }}>
                  <TextField
                    id="outlined-search"
                    placeholder="Search contacts"
                    size="small"
                    type="search"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Divider />
                <List
                  sx={{
                    height: { lg: "calc(100vh - 280px)" },
                    sm: { height: "100vh" },
                    p: 1,
                  }}
                >
                  {chats.map((chat) => {
                    return (
                      <ListItem
                        button
                        alignItems="flex-start"
                        key={chat.id}
                        onClick={() => handleUser(chat.id)}
                      >
                        <ListItemAvatar>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            width="45px"
                            height="45px"
                            className="roundedCircle"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={chat.name}
                          secondary={chat.role}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Drawer>
          </>
        )}
        <Box flexGrow={1}>
          <div style={{ height: "85%" }}>
            {Object.entries(currentUser).length > 0 ? (
              <>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    p={2}
                    sx={{
                      pt: "8px",
                      pb: "7px",
                    }}
                  >
                    <Box
                      sx={{
                        display: { xs: "block", md: "block", lg: "none" },
                        mr: "10px",
                      }}
                    >
                      <MenuRoundedIcon
                        onClick={() => SetMobileSideOpen(true)}
                      />
                    </Box>
                    <ListItem dense disableGutters>
                      <ListItemAvatar>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          width="45px"
                          height="45px"
                          className="roundedCircle"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="h4" className="heading4">
                            {currentUser.name}
                          </Typography>
                        }
                        secondary={currentUser.role}
                      />
                    </ListItem>
                  </Box>
                  <Divider />
                  <SimpleBar style={{ height: "calc(100vh - 320px)" }}>
                    <Box p={2} sx={{ minHeight: "calc(100vh - 320px)" }}>
                      {currentUser.messages.map((message) => {
                        return message.user === "linon" ? (
                          <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="row"
                            gap={1}
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              width="45px"
                              height="45px"
                              className="roundedCircle"
                            />
                            <div className="pl-3">
                              <Box
                                mb={1}
                                sx={{
                                  p: 1,
                                  backgroundColor: "primary.light",
                                  borderRadius: "6px",
                                  width: "100%",
                                  height: "45px",
                                }}
                              >
                                {message.message}
                              </Box>
                            </div>
                          </Box>
                        ) : (
                          <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="row-reverse"
                            gap={1}
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              width="45px"
                              height="45px"
                              className="roundedCircle"
                            />
                            <div className="pl-3">
                              <Box
                                mb={1}
                                sx={{
                                  p: 1,
                                  backgroundColor: "secondary.light",
                                  borderRadius: "6px",
                                  width: "100%",
                                  height: "45px",
                                }}
                              >
                                {message.message}
                              </Box>
                            </div>
                          </Box>
                        );
                      })}
                    </Box>
                  </SimpleBar>
                </Box>
                <Divider />
                <Box p={2}>
                  <Box display="flex" alignItems="center">
                    <TextField
                      id="outlined-search"
                      placeholder="Type a Message"
                      size="small"
                      type="search"
                      variant="outlined"
                      fullWidth
                    />
                    <IconButton
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    >
                      <TelegramIcon />
                    </IconButton>
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                style={{ height: "100%" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Please Select a Chat
              </Box>
            )}
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default Chat;
