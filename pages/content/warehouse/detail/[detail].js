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
  Tooltip,
  Divider,
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
import CustomTextField from "../../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import CustomFormLabel from "../../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import { FiSearch } from "react-icons/fi";

const columns = [
  { id: "sno", label: "S.No." },
  { id: "prodID", label: "Product ID" },
  { id: "prodName", label: "Product Name" },
  { id: "quantity", label: "Quantity" },
  { id: "Edit", label: "Edit" },
  { id: "Delete", label: "Delete" },
];

function index() {
  const [id, setid] = useState(2);
  const [rows, setrows] = useState([
    {
      id: 1,
      prodID  : "94201ac2",
      prodName: "Solid soffa",
      quantity: "85",
    },
    {
      id: 2,
      prodID  : "94201ac3",
      prodName: "Chairs",
      quantity: "105",
    },
  ]);
  const [dialogval, setdialogval] = useState({
    id: id + 1,
    prodID  : "",
    prodName: "",
    quantity: "",
  });
  const emptyDialogValue = async () => {
    await setdialogval({
      id: id + 1,
      prodID  : "",
      prodName: "",
      quantity: "",
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
  const [dense, setDense] = React.useState(false);
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
    <div  >
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }} data-aos="zoom-in-up" >
        Location : Southamton
      </Typography>
      <Card data-aos="zoom-in-up" >
        <CardContent>
          <Grid container sx={{ pb: 2 }}>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              lg={12}
              md={12}
              xs={12}
            >
              <CustomTextField
                placeholder="Search"
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
            </Grid>
          </Grid>
          {/* <Box >
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
              {isUpdate ? "Update" : "Add"} Employee Details
            </DialogTitle>
            <Divider />
            <DialogContent>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Product ID
              </CustomFormLabel>
              <CustomTextField
                autoFocus
                margin="dense"
                size="small"
                id="prodID"
                type="text"
                fullWidth
                variant="outlined"
                value={dialogval.prodID}
                onChange={(e) => {
                  setdialogval({ ...dialogval, prodID: e.target.value });
                }}
              />
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Product Name
              </CustomFormLabel>
              <CustomTextField
                margin="dense"
                size="small"
                id="prodName"
                type="text"
                fullWidth
                variant="outlined"
                value={dialogval.prodName}
                onChange={(e) => {
                  setdialogval({ ...dialogval, prodName: e.target.value });
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
                    e.prodName
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
                              <Typography variant="h6">
                                {row.prodID}
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
                                {row.prodName}
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
                              <Typography variant="h6">{row.quantity}</Typography>
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
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
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
