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
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import { FiSearch, FiXCircle } from "react-icons/fi";

const columns = [
  { id: "sno", label: "S.No." },
  { id: "proposalID", label: "Proposal ID" },
  { id: "supName", label: "Supplier Name" },
  { id: "amount", label: "Amount" },
  { id: "effort", label: "Effort" },
];

function index() {
  const [rows, setrows] = useState([
    {
      id: 1,
      proposalID: "789001",
      supName: "Robert",
      amount: "$120",
      effort: "Effort Detail 1",
    },
    {
      id: 2,
      proposalID: "789002",
      supName: " Hendry",
      amount: "$520",
      effort: "Effort Detail 2",
    },
    {
      id: 2,
      proposalID: "789003",
      supName: " Mikman",
      amount: "$320",
      effort: "Effort Detail 3",
    },
  ]);
  const [openDialog, setopenDialog] = React.useState(false);
  const [searchval, setsearchval] = useState("");
  const handleClickDialog = async () => {
    await setopenDialog(true);
  };

  const handleCloseDialog = async () => {
    await setopenDialog(false);
  };

  const [dense, setDense] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div  >
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }}  data-aos="zoom-in-up" >
        Evaluation Records Details
      </Typography>
      <Card  data-aos="zoom-in-up" >
        <CardContent>
          <Grid container sx={{ pb: 2 }}>
          <Grid
              item
              lg={12}
              md={12}
              xs={12}
              display="flex"
              justifyContent="flex-end"
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
                  onClick={() => setSearchOpen(true)}
                  size="small"
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
             <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ float: "right", mb: 2 , ml:2}}
                >
                  Evaluate
                </Button>
             </Box>
            </Grid>
            {/* <Grid
              item
              display="flex"
              alignItems="center"
              lg={12}
              md={12}
              xs={12}
            >
              <CustomTextField
                type="text"
                label="Search"
                value={searchval}
                onChange={(e) => setsearchval(e.target.value)}
                fullWidth
                variant="outlined"
                placeholder="Search"
              /> */}
              {/* <Tooltip title="Add new">
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
              </Tooltip> */}
            {/* </Grid> */}
          </Grid>
          {/* <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ float: "right", mb: 2 }}
            >
              Evaluate
            </Button>
          </Box> */}
          {/* dialog */}
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            fullScreen
          >
            <DialogTitle
              sx={{ p: 1 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4">Proposal Detail</Typography>
              <IconButton onClick={handleCloseDialog}>
                <FiXCircle />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <iframe
                src="/proposal.pdf"
                width="100%"
                height="98%"
              />
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
            </DialogActions> */}
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
                    e.proposalID
                      .toLocaleLowerCase()
                      .includes(searchval.toLocaleLowerCase())
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        key={row.id}
                        onClick={handleClickDialog}
                        sx={{ cursor: "pointer" }}
                      >
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
                                {row.proposalID}
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
                                {row.supName}
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
                              <Typography variant="h6">{row.amount}</Typography>
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
                              <Typography variant="h6">{row.effort}</Typography>
                            </Box>
                          </Box>
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
            rowsPerPageOptions={[3, 4, 6, 10]}
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
