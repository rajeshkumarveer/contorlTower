import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  Divider,
  InputAdornment,
} from "@mui/material";
import {
  Chip,
  Paper,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FiCreditCard, FiExternalLink, FiSearch } from "react-icons/fi";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomSelectField from "../../../src/components - Copy/forms/CustomElements/CustomSelectField";

// Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import { AiOutlinePlus } from "react-icons/ai";

import SimpleBar from "simplebar-react";
const Tickets = (props) => {
  const router = useRouter();
  const [status, setStatus] = useState([{}]);

  useEffect(() => {
    setStatus(ticket);
  }, []);

  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [action, setAction] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setAction(false);
  };

  const handleClickUpdate = () => {
    setOpen(true);
    setAction(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [request, setRequest] = useState("");

  const handleChange2 = (event2) => {
    setRequest(event2.target.value);
  };

  const ticket = [
    {
      creator: "Eric Pratt",
      title: "Elegant",
      assignee: "Alice Bohr",
      status: "In Progress",
      product: "Elegant Admin",
      date: "2018-05-01",
    },
    {
      creator: "Eric Pratt",
      title: "Elegant Theme ",
      assignee: "Alice Bohr",
      status: "Open",
      product: "Elegant Admin",
      date: "2018-05-01",
    },
    {
      creator: "Eric Pratt",
      title: "Elegant Theme Side ",
      assignee: "Alice Bohr",
      status: "Closed",
      product: "Elegant Admin",
      date: "2018-05-01",
    },
    {
      creator: "Eric Pratt",
      title: "Elegant Theme Side Menu ",
      assignee: "Alice Bohr",
      status: "In Progress",
      product: "Elegant Admin",
      date: "2018-05-01",
    },
  ];

  const filterStatus = (status) => {
    if (status === "") {
      return setStatus(ticket);
    }
    const filterArr = ticket.filter((ticket) => {
      if (ticket.status === status) {
        return ticket;
      }
    });
    setStatus(filterArr);
  };

  const searchTicket = (value) => {
    if (value === "") {
      return setStatus(ticket);
    }
    const searchedRows = status.filter((row) => {
      return row.title.toLowerCase().includes(value.toLowerCase());
    });

    setStatus(searchedRows);
  };

  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} lg={3}>
          <Card data-aos="zoom-in-up"  
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: "#fff",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => filterStatus("")}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ position: "relative" }}
              >
                <Typography variant="h4" sx={{ marginBottom: "0" }}>
                  Total Tickets
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    mt: 3,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    color="inherit"
                    sx={{
                      backgroundColor: (theme) => theme.palette.secondary.dark,
                    }}
                  >
                    <FiCreditCard />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{ marginTop: "10px", lineHeight: "24px !important" }}
              >
                10
              </Typography>
              <Typography
                variant="h6"
                fontWeight="400"
                sx={{ marginBottom: "0", marginTop: "10px" }}
              >
                Tickets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card data-aos="zoom-in-up"  
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: "#fff",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => filterStatus("In Progress")}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ position: "relative" }}
              >
                <Typography variant="h4" sx={{ marginBottom: "0" }}>
                  In Progress
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    mt: 3,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    color="inherit"
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    }}
                  >
                    <FiCreditCard />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{ marginTop: "10px", lineHeight: "24px !important" }}
              >
                10
              </Typography>
              <Typography
                variant="h6"
                fontWeight="400"
                sx={{ marginBottom: "0", marginTop: "10px" }}
              >
                Tickets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card data-aos="zoom-in-up"  
            sx={{
              backgroundColor: (theme) => theme.palette.success.dark,
              color: "#fff",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => filterStatus("Open")}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ position: "relative" }}
              >
                <Typography variant="h4" sx={{ marginBottom: "0" }}>
                  Open
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    mt: 3,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    color="inherit"
                    sx={{
                      backgroundColor: (theme) => theme.palette.success.main,
                    }}
                  >
                    <FiCreditCard />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{ marginTop: "10px", lineHeight: "24px !important" }}
              >
                10
              </Typography>
              <Typography
                variant="h6"
                fontWeight="400"
                sx={{ marginBottom: "0", marginTop: "10px" }}
              >
                Tickets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card data-aos="zoom-in-up"  
            sx={{
              backgroundColor: (theme) => theme.palette.error.dark,
              color: "#fff",
            }}
            style={{ cursor: "pointer" }}
            onClick={() => filterStatus("Closed")}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ position: "relative" }}
              >
                <Typography variant="h4" sx={{ marginBottom: "0" }}>
                  Closed
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    mt: 3,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <IconButton
                    disableRipple
                    size="large"
                    color="inherit"
                    sx={{
                      backgroundColor: (theme) => theme.palette.error.main,
                    }}
                  >
                    <FiCreditCard />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{ marginTop: "10px", lineHeight: "24px !important" }}
              >
                10
              </Typography>
              <Typography
                variant="h6"
                fontWeight="400"
                sx={{ marginBottom: "0", marginTop: "10px" }}
              >
                Tickets
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card data-aos="fade-up" >
        <CardContent>
          <Grid
            sx={{ my: 2, width: "100%" }}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            // sx={{ float: "right" }}
          >
            <CustomTextField
              placeholder="Search Ticket"
              fullWidth
              size="small"
              sx={{
                width: searchOpen ? "300px" : "0%",
                display: searchOpen ? "block" : "none",
                transition: "all 0.4s linear",
              }}
              onChange={(e) => searchTicket(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => setSearchOpen(false)}>
                      <FiSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Tooltip title="Enable Search">
              <IconButton
              size="small"
                onClick={() => setSearchOpen(true)}
                sx={{
                  display: !searchOpen ? "flex" : "none",
                  alignItems: "center",
                  background: "rgb(223, 223, 223)",
                  "&:hover": {
                    background: "rgb(223, 223, 223)",
                  },
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                }}
              >
                <FiSearch />
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="Add new">
              <IconButton
                sx={{
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.secondary.dark,
                  },
                  color: "#fff",
                  borderRadius: "50%",
                  ml: 1,
                  height: "45px",
                  width: "45px",
                }}
                onClick={handleClickOpen}
              >
                <AiOutlinePlus />
              </IconButton>
            </Tooltip> */}
            <Dialog
              PaperProps={{
                style: { borderRadius: "20px", padding: "10px" },
              }}
              open={open}
              onClose={handleClose}
              maxWidth="sm"
              fullWidth="sm"
            >
              <DialogTitle sx={{ fontSize: "18px" }}>
                {action ? "Update Ticket" : "Add Ticket"}
              </DialogTitle>
              <Divider />
              <SimpleBar style={{ height: "350px" }}>
                <DialogContent>
                  <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                    Created By
                  </CustomFormLabel>
                  <CustomTextField
                    autoFocus
                    size="small"
                    margin="dense"
                    id="Created-by"
                    placeholder="Created By"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
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
                  <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                    Assigned to
                  </CustomFormLabel>
                  <CustomTextField
                    autoFocus
                    size="small"
                    margin="dense"
                    id="assigned-to"
                    placeholder="Assigned to"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
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
                    </CustomSelectField>
                  </FormControl>
                </DialogContent>
              </SimpleBar>
              <DialogActions sx={{ p: 2 }}>
                <Button onClick={handleClose}>Cancel Ticket</Button>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                >
                  {action ? "Update Ticket" : "Add Ticket"}
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <TableContainer
            style={{ padding: 0, boxShadow: "none" }}
            component={Paper}
          >
            <Table
              aria-label="collapsible table"
              sx={{ whiteSpace: { xs: "nowrap", sm: "unset" } }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h5">Creator</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Title</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Assignee</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Product</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {status.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="h6" fontWeight="400">
                          {row.creator}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ cursor: "pointer" }}>
                        <Typography
                          variant="h6"
                          fontWeight="400"
                          onClick={() => router.push("/partner/tickets/detail")}
                        >
                          {row.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" fontWeight="400">
                          {row.assignee}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          sx={{
                            backgroundColor:
                              row.status === "Open"
                                ? (theme) => theme.palette.success.light
                                : row.status === "Closed"
                                ? (theme) => theme.palette.error.light
                                : (theme) => theme.palette.primary.light,
                            color:
                              row.status === "Open"
                                ? (theme) => theme.palette.success.main
                                : row.status === "Closed"
                                ? (theme) => theme.palette.error.main
                                : (theme) => theme.palette.primary.main,
                            borderRadius: "6px",
                            pl: "3px",
                            pr: "3px",
                          }}
                          size="small"
                          label={row.status}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" fontWeight="400">
                          {row.product}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6" fontWeight="400">
                          {row.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="inherit"
                          onClick={handleClickUpdate}
                        >
                          <FiExternalLink />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Tickets;
