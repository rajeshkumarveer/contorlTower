import React from "react";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  LinearProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Divider,
  Tooltip,
  TablePagination,
  InputAdornment,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlinePlus } from "react-icons/ai";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import SimpleBar from "simplebar-react";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";

import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { id: "sno", label: "S.No." },
  { id: "productImages", label: "Product Images" },
  { id: "productName", label: "Product Name" },
  { id: "productID", label: "Product ID" },
  { id: "quantity", label: "Quatity" },
  { id: "price", label: "Price" },
  { id: "more", label: "More" },
  { id: "Edit", label: "Edit" },
  { id: "Delete", label: "Delete" },
];

function index() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [id, setid] = useState(0);
  const [rows, setrows] = useState([
    {
      id: 1,
      productName: "Solid Chair",
      productID: "789001",
      productImages: "/images/shop/img3.jpg",
      description: "Its an wooden solid chair",
      quantity: "4",
      price: "$5",
    },
    {
      id: 2,
      productName: "Brittel soffa",
      productID: "789002",
      productImages: "/images/shop/img7.jpg",
      description: "Its an wooden Brittel soffa",
      quantity: "2",
      price: "$8",
    },
  ]);
  const [dialogval, setdialogval] = useState({
    id: id + 1,
    productName: "",
    productID: "",
    productImages: "",
    // description: "",
    quantity: "",
    price: "",
  });
  const emptyDialogValue = async () => {
    await setdialogval({
      id: id + 1,
      productName: "",
      productID: "",
      productImages: "",
      // description: "",
      quantity: "",
      price: "",
    });
  };
  const [isUpdate, setisUpdate] = useState(false);
  const [openDialog, setopenDialog] = React.useState(false);
  const [searchval, setsearchval] = useState("");
  const handleClickDialog = async () => {
    await setopenDialog(true);
    await emptyDialogValue();
  };
  const handleUpdateDialog = async (row) => {
    await setdialogval(row);
    await setisUpdate(true);
    await setopenDialog(true);
  };

  const handleCloseDialog = async () => {
    await setopenDialog(false);
    await emptyDialogValue();
    await setisUpdate(false);
  };

  const handleAddDetails = async () => {
    await setrows([...rows, dialogval]);
    await setid(id + 1);
    await emptyDialogValue();
    await setopenDialog(false);
  };
  const handleUpdateDetails = async () => {
    const newRows = rows;
    let index = newRows.findIndex((ele) => ele.id == dialogval.id);
    console.log(dialogval.id);
    newRows[index] = dialogval;
    await setrows([...newRows]);
    await emptyDialogValue();
    await setisUpdate(false);
    await setopenDialog(false);
  };
  const handleDeleteRow = async (row) => {
    const newRows = rows;
    console.log(row.id);
    newRows = newRows.filter((e) => e.id != row.id);
    newRows = newRows.map((e, i) => {
      e.id = i + 1;
      return e;
    });
    await setrows([...newRows]);
    await setid(id - 1);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const onChangeValue = (value, i) => {
    const temp = rows;
    temp[i].access = value;
    setrows([...temp]);
  };
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div >
      <Typography
        variant="h5"
        color="gray"
        sx={{ p: 3, pb: 1, pt: 1 }}
        data-aos="zoom-in-up"
       
      >
        Product Content Details
      </Typography>
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Grid container sx={{ pb: 2 }}>
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <CustomTextField
                  size="small"
                placeholder="Search"
                fullWidth
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
                    ml: 1,
                    height: "40px",
                    width: "40px",
                  }}
                  onClick={handleClickDialog}
                >
                  <AiOutlinePlus />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          {/* <Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AiOutlinePlus />}
              sx={{ float: "right", mb: 2 }}
              onClick={handleClickDialog}
            >
              Add New
            </Button>
          </Box> */}
          {/* dialog */}
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
              {" "}
              {isUpdate ? "Update" : "Add"} Product Content Details
            </DialogTitle>
            <Divider />
            <SimpleBar style={{ height: "350px" }}>
              <DialogContent>
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Product Name
                </CustomFormLabel>
                <CustomTextField
                  autoFocus
                  margin="dense"
                  size="small"
                  id="productName"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={dialogval.productName}
                  onChange={(e) => {
                    setdialogval({
                      ...dialogval,
                      productName: e.target.value,
                    });
                  }}
                />
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Product ID
                </CustomFormLabel>
                <CustomTextField
                  size="small"
                  margin="dense"
                  id="productID"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={dialogval.productID}
                  onChange={(e) => {
                    setdialogval({ ...dialogval, productID: e.target.value });
                  }}
                />
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Product Images
                </CustomFormLabel>
                <CustomTextField
                  margin="dense"
                  size="small"
                  id="productImages"
                  type="file"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    multiple: true,
                  }}
                  onChange={(e) => {
                    let url = URL.createObjectURL(e.target.files[0]);
                    setdialogval({ ...dialogval, productImages: url });
                  }}
                />
                {/* <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Product Description
                </CustomFormLabel> */}
                {/* <CustomTextField
                  size="small"
                  margin="dense"
                  id="description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={dialogval.description}
                  onChange={(e) => {
                    setdialogval({
                      ...dialogval,
                      description: e.target.value,
                    });
                  }}
                /> */}
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Price
                </CustomFormLabel>
                <CustomTextField
                  size="small"
                  margin="dense"
                  id="price"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={dialogval.price}
                  onChange={(e) => {
                    setdialogval({ ...dialogval, price: e.target.value });
                  }}
                />
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Quantity
                </CustomFormLabel>
                <CustomTextField
                  size="small"
                  margin="dense"
                  id="quantity"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={dialogval.quantity}
                  onChange={(e) => {
                    setdialogval({ ...dialogval, quantity: e.target.value });
                  }}
                />
              </DialogContent>
            </SimpleBar>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={isUpdate ? handleUpdateDetails : handleAddDetails}
              >
                {isUpdate ? "Update Details" : "Add Details"}
              </Button>
            </DialogActions>
          </Dialog>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      <Typography variant="h6" fontWeight="600">
                        {column.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .filter((e) =>
                    e.productName
                      .toLocaleLowerCase()
                      .includes(searchval.toLocaleLowerCase())
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover key={row.id}>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6">{row.id}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Image
                                src={row.productImages}
                                width="70px"
                                height="70px"
                                style={{ borderRadius: "50px" }}
                              />
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6">
                                {row.productName}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6">
                                {row.productID}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>

                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6">
                                {row.quantity}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <Typography variant="h6">{row.price}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            pl: 0,
                          }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box
                              sx={{
                                ml: 2,
                              }}
                            >
                              <IconButton
                                onClick={handleClickOpen}
                                // onClick={() => handleUpdateDialog(row)}
                              >
                                <FiMoreHorizontal />
                                {/* <FeatherIcon
                                  icon=""
                                  width="18"
                                  height="18"
                                  sx={{
                                    color: (theme) => theme.palette.grey.A200,
                                  }}
                                /> */}
                              </IconButton>
                              <Dialog
                                PaperProps={{
                                  style: {
                                    borderRadius: "20px",
                                    padding: "10px",
                                  },
                                }}
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                              >
                                <DialogTitle style={{ fontSize: "16px" }}>
                                  Show More
                                </DialogTitle>
                                <Divider />
                                <DialogContent>
                                  <Grid container spacing={1}>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Total Amount{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        $ 176{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Discount{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        10%{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Carrier Service{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        Fedex{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Account Details{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        My Account{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Sales Person{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        Raj kumar{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Address{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        Block 'A' Kadirenahalli, Banashankari
                                        2nd stage
                                      </Typography>
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        Bangalore , Karnataka - 638 0001.
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={3}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Dimension{" "}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={9}
                                      md={12}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        11h * 14w{" "}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                              </Dialog>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleUpdateDialog(row)}>
                            <FeatherIcon
                              icon="edit"
                              width="18"
                              height="18"
                              sx={{
                                color: (theme) => theme.palette.grey.A200,
                              }}
                            />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleDeleteRow(row)}>
                            <FeatherIcon
                              icon="trash"
                              width="18"
                              height="18"
                              sx={{
                                color: (theme) => theme.palette.grey.A200,
                              }}
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={12} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 4, 6, 10]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default index;
