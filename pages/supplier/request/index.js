import {
  Card,
  Button,
  Box,
  Grid,
  Typography,
  Fab,
  InputAdornment,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip, Divider,
} from "@mui/material";
import Image from "next/image";
import av1 from "../../../assets/images/users/4.png";
import Next from "next/link";
import React, { useEffect, useState } from "react";
import {
  FiSearch,
} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from 'next/router'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const index = () => {
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchval, setsearchval] = useState("");
  const [supplier, setsupplier] = useState([
    {
      id: 1,
      name: "Kaar Technology",
      requestAt: "21/05/2022",
      email: "kaartech@gmail.com",
      address:
        "11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA",
      status: "Approved",
      response: true
    },
    {
      id: 2,
      name: "Linon furniture",
      requestAt: "21/07/2020",
      email: "linon@gmail.com",
      address: "11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA",
      status: "Rejected",
      response: true
    },
    {
      id: 3,
      name: "Weking Technology",
      requestAt: "06/05/2021",
      email: "wt@gmail.com",
      address:
        "11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA",
      status: "Pending",
      response: true
    },
  ]);
  const [dialogval, setdialogval] = useState({
    id: supplier.length,
    name: "",
    requestAt: "--/--/----",
    email: "",
    address:
      "",
    status: "Pending",
    response: false
  });
  const [openDialog, setopenDialog] = React.useState(false);
  const handleClickDialog = async () => {
    await setopenDialog(true);
    await setdialogval({
      id: supplier.length,
      name: "",
      requestAt: "--/--/----",
      email: "",
      address:
        "",
      status: "Pending",
      response: false
    })
  };
  const handleCloseDialog = async () => {
    await setopenDialog(false);
  };
  const handleAddDetails = async (row) => {
    await setsupplier([...supplier, dialogval]);
    await setopenDialog(false);
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container spacing={0} display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 1, pr: 3 }}
      >
        <CustomTextField
          placeholder="Search Customer"
          fullWidth
          size="small"
          sx={{
            width: searchOpen ? "300px" : "0%",
            display: searchOpen ? "block" : "none",
            transition: "all 0.4s linear",
          }}
          onChange={(e) => setsearchval(e.target.value)}
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
        <Tooltip title="Add new">
          <IconButton
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.dark,
              },
              color: "#fff",
              borderRadius: "50%",
              ml: 2,
            }}
            onClick={handleClickDialog}
          >
            <AiOutlinePlus />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog
        PaperProps={{
          style: { borderRadius: "20px", padding: "10px" },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth="sm"
      >
        <DialogTitle sx={{ fontSize: "18px" }}>
          Add Supplier Details
        </DialogTitle>
        <Divider />
        <DialogContent>
          <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
            Company Name
          </CustomFormLabel>
          <CustomTextField
            autoFocus
            margin="dense"
            size="small"
            id="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={dialogval.name}
            onChange={(e) => {
              setdialogval({ ...dialogval, name: e.target.value });
            }}
          />
          <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
            Email ID
          </CustomFormLabel>
          <CustomTextField
            size="small"
            margin="dense"
            id="emailID"
            type="text"
            fullWidth
            variant="outlined"
            value={dialogval.email}
            onChange={(e) => {
              setdialogval({ ...dialogval, email: e.target.value });
            }}
          />
          <CustomFormLabel sx={{ mt: 1 }} htmlFor="address">
            Address
          </CustomFormLabel>
          <CustomTextField
            margin="dense"
            size="small"
            id="address"
            type="text"
            fullWidth
            variant="outlined"
            value={dialogval.address}
            onChange={(e) => {
              setdialogval({ ...dialogval, address: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddDetails}
          >
            Add Supplier
          </Button>
        </DialogActions>
      </Dialog>
      <Grid spacing={2} container>
        {supplier
          .filter((e) =>
            e.name.toLocaleLowerCase().includes(searchval.toLocaleLowerCase())
          )
          .map((row, i) => {
            return (
              <Grid item lg={4} md={6} xs={12} key={i}>
                <Card sx={{ p: 3, cursor: "pointer" }} data-aos="zoom-in-up" onClick={row.response ? () => {
                  router.push(`/supplier/request/details/${row.id}`)
                } : handleClick}

                >
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Image
                        alt="Remy Sharp"
                        src={av1}
                        width="45"
                        height="45"
                        style={{ borderRadius: "50%" }}
                      />
                      <Box
                        display="flex"
                        justifyContent="left"
                        flexDirection="column"
                        sx={{ ml: 1 }}
                      >
                        <Typography variant="h5">{row.name}</Typography>
                        <Typography variant="caption">{row.requestAt}</Typography>
                      </Box>
                    </Box>
                    {row.status == "Approved" ? <Box sx={{ ml: "auto" }}>
                      <Chip
                        color="success"
                        size="small"
                        label="Approved"
                        sx={{ borderRadius: "6px" }}
                      />
                    </Box> : row.status == "Rejected" ? <Box sx={{ ml: "auto" }}>
                      <Chip
                        color="error"
                        size="small"
                        label="Rejected"
                        sx={{ borderRadius: "6px" }}
                      />
                    </Box> : <Box sx={{ ml: "auto" }}>
                      <Chip
                        color="warning"
                        size="small"
                        label="Pending"
                        sx={{ borderRadius: "6px" }}
                      />
                    </Box>}

                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{ mt: 3, mb: 1 }}
                  >
                    Address
                  </Typography>
                  <Typography variant="body2">
                    {row.address}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
      </Grid>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%', color: "white" }} >
          Still Supplier haven't Register yet !!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default index;
