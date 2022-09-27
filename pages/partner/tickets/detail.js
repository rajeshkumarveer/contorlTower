import {
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import CustomSelectField from "../../../src/components - Copy/forms/CustomElements/CustomSelectField";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TicketDetail = () => {
  const [text, setText] = useState("");
  const [request, setRequest] = useState("");

  const handleChange2 = (event2) => {
    setRequest(event2.target.value);
  };

  const [assign, setAssign] = useState("");

  const handleChange3 = (event2) => {
    setAssign(event2.target.value);
  };
  return (
    <Grid container spacing={0} data-aos="zoom-in-up">
      <Grid item xs={12} md={12} lg={8} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Typography variant="h3" fontWeight="500">
              Ticket
            </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ mt: 2 }}>
              Hi There, i was wondering, do you provide a service to build
              custom pages. I need some pages for a ticket system similar to the
              one you have. Please advise if you provide this service and i will
              send through my requirements. Regards.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ListItem
              sx={{
                borderBottom: "1px solid #ddd",
                borderRadius: "0px !important",
              }}
            >
              <ListItemAvatar display="flex" alignItems="center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  width="60px"
                  height="60px"
                  className="roundedCircle"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5" fontWeight="400" sx={{ ml: 3 }}>
                    Username
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="h6"
                    fontWeight="400"
                    color="text.secondary"
                    sx={{ ml: 3, mt: 1 }}
                  >
                    In order to continue to deliver the best and most secure
                    experience to our mobile SDK users. On account of the recent
                    enhancements and updates to the mobile SDKs, we have planned
                    to mark the older versions of the Mobile SDKs for
                    deprecation to ensure stable and smooth operation.
                  </Typography>
                }
              />
            </ListItem>

            <ListItem
              sx={{
                borderBottom: "1px solid #ddd",
                borderRadius: "0px !important",
              }}
            >
              <ListItemAvatar display="flex" alignItems="center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  width="60px"
                  height="60px"
                  className="roundedCircle"
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5" fontWeight="400" sx={{ ml: 3 }}>
                    Username
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="h6"
                    fontWeight="400"
                    color="text.secondary"
                    sx={{ ml: 3, mt: 1 }}
                  >
                    We request you to use only the above channels to reach out
                    to us. In case you find any third-party site using our name
                    or trying to mislead you, do not hesitate to report it to
                    us.
                  </Typography>
                }
              />
            </ListItem>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ReactQuill
              value={text}
              onChange={(value) => setText(value)}
              placeholder="Type here.."
            />
            <Button
              variant="contained"
              sx={{
                mt: "15px",
                color: "#fff",
                backgroundColor: (theme) => theme.palette.secondary.main,
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                  boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                },
              }}
            >
              Reply
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: "15px",
                ml: 1,
                color: "#fff",
                backgroundColor: (theme) => theme.palette.primary.main,
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                },
              }}
            >
              Reply & Close
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={4} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
              Title
            </CustomFormLabel>
            <CustomTextField
              autoFocus
              size="small"
              margin="dense"
              id="title"
              placeholder="Title"
              type="text"
              fullWidth
              variant="outlined"
            />

            <FormControl variant="outlined" sx={{ my: 1 }} fullWidth>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Assigned to
              </CustomFormLabel>

              <CustomSelectField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={assign}
                fullWidth
                onChange={handleChange3}
                size="small"
              >
                <MenuItem value={"Employee 1"}>Employee 1</MenuItem>
                <MenuItem value={"Employee 2"}>Employee 2</MenuItem>
              </CustomSelectField>
            </FormControl>

            <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
              Status
            </CustomFormLabel>
            <CustomTextField
              autoFocus
              size="small"
              margin="dense"
              id="status"
              placeholder="Status"
              type="text"
              fullWidth
              variant="outlined"
            />
            <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
              Name
            </CustomFormLabel>
            <CustomTextField
              autoFocus
              size="small"
              margin="dense"
              id="name"
              placeholder="Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
              Date
            </CustomFormLabel>
            <CustomTextField
              autoFocus
              size="small"
              margin="dense"
              id="date"
              placeholder="Date"
              type="text"
              fullWidth
              variant="outlined"
            />

            <FormControl variant="outlined" sx={{ my: 1 }} fullWidth>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Ticket Type
              </CustomFormLabel>

              <CustomSelectField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={request}
                fullWidth
                onChange={handleChange2}
                size="small"
              >
                <MenuItem value={10}>Informative</MenuItem>
                <MenuItem value={20}>Quotation</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </CustomSelectField>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                mt: "15px",
                color: "#fff",
                backgroundColor: (theme) => theme.palette.primary.main,
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                },
              }}
            >
              Update
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h3" fontWeight="500">
              Request Info
            </Typography>
            <Typography variant="h5" fontWeight="400" sx={{ mt: 2 }}>
              Request Status
            </Typography>
            <Chip
              sx={{
                mt: 1,
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.primary.main,
                // backgroundColor:
                //   row.status === "Delivered"
                //     ? (theme) => theme.palette.success.light
                //     : row.status === "In Process"
                //     ? (theme) => theme.palette.error.light
                //     : (theme) => theme.palette.secondary.light,
                // color:
                //   row.status === "Delivered"
                //     ? (theme) => theme.palette.success.main
                //     : row.status === "In Process"
                //     ? (theme) => theme.palette.error.main
                //     : (theme) => theme.palette.secondary.main,
                borderRadius: "6px",
                pl: "3px",
                pr: "3px",
              }}
              size="small"
              label="In Progress"
            />
            <Typography variant="h5" fontWeight="400" sx={{ mt: 2 }}>
              Request Creator
            </Typography>
            <Typography variant="h6" fontWeight="400" color="text.secondary">
              Username
            </Typography>
            <Typography variant="h5" fontWeight="400" sx={{ mt: 2 }}>
              Support Staff
            </Typography>
            <Typography variant="h6" fontWeight="400" color="text.secondary">
              Agent name
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" sx={{ mb: 2 }} fontWeight="500">
                User Info
              </Typography>
              <ListItemAvatar>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  width="60px"
                  height="60px"
                  className="roundedCircle"
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                primary={
                  <Typography variant="h5" fontWeight="400">
                    Username
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="h6"
                    fontWeight="400"
                    color="text.secondary"
                  >
                    Cras sit amet nibh libero,
                  </Typography>
                }
              />
            </ListItem>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TicketDetail;
