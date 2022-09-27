import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import img1 from "../../assests/images/shop/img1.jpg";
import img2 from "../../assests/images/shop/img2.jpg";
import img3 from "../../assests/images/shop/img3.jpg";
import img4 from "../../assests/images/shop/img4.jpg";

import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";

import CustomTextField from "../../src/components - Copy/forms/CustomElements/CustomTextField";

const Row = (props) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Dhanush" },
    { key: 1, label: "Karthick" },
    { key: 2, label: "Rajesh" },
  ]);

  const { row } = props;

  return (
    <TableRow>
      <TableCell>
        <Typography variant="h5" color="textSecondary" fontWeight="400">
          {row.id}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h5">{row.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h5">
          <Chip
            label={row.availability}
            sx={{
              borderRadius: "6px",
              backgroundColor:
                row.availability === "In Stock"
                  ? (theme) => theme.palette.success.light
                  : row.availability === "Out of Stock"
                  ? (theme) => theme.palette.error.light
                  : (theme) => theme.palette.primary.light,
              color:
                row.availability === "In Stock"
                  ? (theme) => theme.palette.success.main
                  : row.availability === "Out of Stock"
                  ? (theme) => theme.palette.error.main
                  : (theme) => theme.palette.primary.main,
              pl: "8px",
              pr: "8px",
              pt: "3px",
              pb: "3px",
              height: "unset",
              mr: "10px",
              "& .MuiChip-label": {
                pl: 0,
                pr: 0,
              },
            }}
          />
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h5" color="textSecondary" fontWeight="400">
          {row.category}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h5" color="textSecondary" fontWeight="400">
          {row.code}
        </Typography>
      </TableCell>
      <TableCell>
        <Box display="flex">
          <IconButton
            onClick={handleClickOpen}
            sx={{ p: 0, color: (theme) => theme.palette.primary.main }}
          >
            <AiOutlineInfoCircle />
          </IconButton>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "750px", // Set your width here
                },
              },
            }}
          >
            <DialogContent>
              <ListItem
                button
                alignItems="center"
                disableRipple
                disableTouchRipple
                sx={{
                  "&:hover": {
                    backgroundColor: "#fff",
                    cursor: "default",
                  },
                }}
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
                  primary="Dhanush Karthick"
                  secondary="Yesterday 6.30 PM"
                />
              </ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={6}>
                  <Image src={row.image} />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                  <Box display="flex" alignItems="center">
                    <Chip
                      label="In Stock"
                      sx={{
                        borderRadius: "6px",
                        backgroundColor:
                          row.availability === "In Stock"
                            ? (theme) => theme.palette.success.light
                            : row.availability === "Out of Stock"
                            ? (theme) => theme.palette.error.light
                            : (theme) => theme.palette.primary.light,
                        color:
                          row.availability === "In Stock"
                            ? (theme) => theme.palette.success.main
                            : row.availability === "Out of Stock"
                            ? (theme) => theme.palette.error.main
                            : (theme) => theme.palette.primary.main,
                        pl: "8px",
                        pr: "8px",
                        pt: "3px",
                        pb: "3px",
                        height: "unset",
                        mr: "10px",
                        "& .MuiChip-label": {
                          pl: 0,
                          pr: 0,
                        },
                      }}
                    />
                    <Typography
                      color="textSecondary"
                      variant="caption"
                      fontWeight="400"
                    >
                      {row.category}
                    </Typography>
                  </Box>
                  <Typography
                    fontWeight="500"
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "30px",
                        lg: "30px",
                      },
                      mt: "5px",
                    }}
                  >
                    {row.name}
                  </Typography>
                  <Typography
                    fontWeight="600"
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "30px",
                        lg: "30px",
                      },
                      mt: "5px",
                    }}
                  >
                    $ {row.price}.00
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1 }} fontWeight="400">
                    {row.description}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
          <IconButton
            onClick={handleClickOpen1}
            sx={{ p: 0, color: (theme) => theme.palette.success.main }}
          >
            <AiOutlineEye style={{ marginRight: "20px", marginLeft: "20px" }} />
          </IconButton>
          <Dialog open={open1} onClose={handleClose1}>
            <DialogTitle sx={{ fontSize: "18px" }}>Add Customer</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add Customer to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                sx={{ my: 2 }}
                autoFocus
                margin="dense"
                id="name"
                label="Add Customer"
                type="text"
                fullWidth
                variant="outlined"
              />
              <Divider />
              <Box sx={{ my: 2 }}>
                {chipData.map((chip) => {
                  return (
                    <Chip
                      sx={{ mx: 1 }}
                      key={chip.key}
                      avatar={
                        <Avatar
                          alt={chip.label}
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        />
                      }
                      label={chip.label}
                      variant="outlined"
                    />
                  );
                })}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose1}
              >
                Add Customer
              </Button>
              <Button onClick={handleClose1}>Cancel</Button>
            </DialogActions>
          </Dialog>
          <IconButton sx={{ p: 0, color: (theme) => theme.palette.error.main }}>
            <AiOutlineDelete />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

const CMS = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rows = [
    {
      id: 1,
      name: "Modular Sofa",
      category: "Sofa",
      code: "LINON 001",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 320.0,
      image: img1,
      availability: "In Stock",
    },
    {
      id: 2,
      name: "Wooden Sofa",
      category: "Sofa",
      code: "LINON 002",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 120.0,
      image: img2,
      availability: "Out of Stock",
    },
    {
      id: 3,
      name: "Table Sofa",
      category: "Sofa",
      code: "LINON 003",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 20.0,
      image: img3,
      availability: "Out of Stock",
    },
    {
      id: 4,
      name: "Round Table Sofa",
      category: "Sofa",
      code: "LINON 004",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 220.0,
      image: img4,
      availability: "Out of Stock",
    },
    {
      id: 5,
      name: "Modular Sofa",
      category: "Sofa",
      code: "LINON 001",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 320.0,
      image: img1,
      availability: "In Stock",
    },
    {
      id: 6,
      name: "Wooden Sofa",
      category: "Sofa",
      code: "LINON 002",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 120.0,
      image: img2,
      availability: "Out of Stock",
    },
    {
      id: 7,
      name: "Table Sofa",
      category: "Sofa",
      code: "LINON 003",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 20.0,
      image: img3,
      availability: "In Stock",
    },
    {
      id: 8,
      name: "Round Tbale Sofa",
      category: "Sofa",
      code: "LINON 004",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 220.0,
      image: img4,
      availability: "Out of Stock",
    },
  ];

  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickDialog = () => {
    setopenDialog(true);
  };

  const handleCloseDialog = () => {
    setopenDialog(false);
  };
  return (
    <>
      <Box
        display="flex"
        sx={{ mb: 2 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" fontWeight="500" sx={{ mr: "auto" }}>
          Content Management System
        </Typography>
        <Button
          onClick={handleClickDialog}
          variant="contained"
          color="primary"
          startIcon={<AiOutlinePlus />}
        >
          Add New
        </Button>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth="md"
        >
          <DialogTitle sx={{ fontSize: "20px" }}>Add Product</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Product Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="availability"
                  label="Availability"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="category"
                  label="Category"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="code"
                  label="Code"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="url"
                  label="Image URL"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="date"
                  label="Date"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  id="price"
                  label="Price"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCloseDialog}
            >
              Add Product
            </Button>
            <Button onClick={handleCloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Card>
        <CardContent>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <Table
              aria-label="custom pagination table"
              sx={{ whiteSpace: "nowrap" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h5">ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Product Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Availability</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Category</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Code</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5">Actions</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => {
                  return <Row key={row.id} row={row} />;
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[2, 3, 5]}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CMS;
