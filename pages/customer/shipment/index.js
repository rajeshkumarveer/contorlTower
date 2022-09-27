import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Grid,
  Paper,
  IconButton,
  Tooltip,
  FormControlLabel,
  Breadcrumb,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { visuallyHidden } from "@mui/utils";
import FeatherIcon from "feather-icons-react";
// import img1 from "../../assets/images/users/1.jpg";
// import img2 from "../../assets/images/users/2.jpg";
// import img3 from "../../assets/images/users/3.jpg";
// import img4 from "../../assets/images/users/4.jpg";
// import img5 from "../../assets/images/users/5.jpg";
import {
  FiCalendar,
  FiCheck,
  FiDownload,
  FiExternalLink,
  FiMoreHorizontal,
  FiPower,
  FiSearch,
  FiShoppingCart,
  FiTruck,
} from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Slide from "@mui/material/Slide";

// Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { motion } from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const DialogMotion = (props) => {
  return (
    <Dialog
      PaperProps={{
        style: {
          borderRadius: "20px",
          padding: "10px",
        },
      }}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose1}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
      fullWidth="md"
    >
      <DialogTitle sx={{ fontSize: "16px" }}>Order Status</DialogTitle>
      <Divider />
      <DialogContent>
        <Timeline sx={{ color: "rgba(0, 0, 0, 0.87)" }}>
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="textSecondary">
                    11/11/2012, Tuesday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    04:30 am
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="primary"
                  sx={{
                    p: 1,
                  }}
                >
                  <FiTruck style={{ height: "22px", width: "22px" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "primary.light",
                    p: 2,
                    borderRadius: 6,
                  }}
                >
                  <Typography variant="h5" fontWeight="400" component="span">
                    Order Picked
                  </Typography>
                  <Typography variant="h5" fontWeight="400">
                    Pending Merchant Action
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <TimelineItem
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  display: "flex",
                  alignItems: "flex-start",
                }}
                align="left"
                variant="body2"
                color="text.secondary"
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="textSecondary">
                    11/11/2012, Tuesday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    04:30 am
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="secondary"
                  sx={{
                    p: 1,
                  }}
                >
                  <FiCalendar style={{ height: "22px", width: "22px" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "secondary.light",
                    p: 2,
                    borderRadius: 6,
                  }}
                >
                  <Typography variant="h5" fontWeight="400" component="span">
                    Product Proccessing
                  </Typography>
                  <Typography variant="h5" fontWeight="400">
                    Pending Approval
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="textSecondary">
                    11/11/2012, Tuesday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    04:30 am
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="warning"
                  sx={{
                    p: 1,
                  }}
                >
                  <FiShoppingCart style={{ height: "22px", width: "22px" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "warning.light",
                    p: 2,
                    borderRadius: 6,
                  }}
                >
                  <Typography variant="h5" fontWeight="400" component="span">
                    Order Status
                  </Typography>
                  <Typography variant="h5" fontWeight="400">
                    Picked by delivery truck
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <TimelineItem
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  display: "flex",
                  alignItems: "flex-start",
                }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" color="textSecondary">
                    11/11/2012, Tuesday
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    04:30 am
                  </Typography>
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color="success"
                  sx={{
                    p: 1,
                  }}
                >
                  <FiCheck style={{ height: "22px", width: "22px" }} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    backgroundColor: "success.light",
                    p: 2,
                    borderRadius: 6,
                  }}
                >
                  <Typography variant="h5" fontWeight="400" component="span">
                    Status
                  </Typography>
                  <Typography variant="h5" fontWeight="400">
                    Order Delivered
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        </Timeline>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose1}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("/PO.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "PO.pdf";
      alink.click();
    });
  });
};

const headCells = [
  {
    id: "sno",
    numeric: false,
    disablePadding: false,
    label: "S.No",
  },
  {
    id: "customer",
    numeric: false,
    disablePadding: false,
    label: "Customer",
  },
  {
    id: "orderID",
    numeric: false,
    disablePadding: false,
    label: "Order ID",
  },
  {
    id: "ordermode",
    numeric: false,
    disablePadding: false,
    label: "Order Mode",
  },
  {
    id: "carriertype",
    numeric: false,
    disablePadding: false,
    label: "Carrier Type",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "accountID",
    numeric: false,
    disablePadding: false,
    label: "Account ID",
  },
  {
    id: "info",
    numeric: false,
    disablePadding: false,
    label: "Info",
  },
];

const rows1 = [
  { sno: 1, orderID: "OID283729" },
  { sno: 2, orderID: "OID392839" },
  { sno: 3, orderID: "OID397327" },
  { sno: 4, orderID: "OID287228" },
];

const rows = [
  {
    sno: 1,
    customer: "Customer 1",
    orderID: "OID3232",
    ordermode: "Kupex",
    carriertype: "Fedex",
    accountID: "IUC387436473",
    date: "08/06/2001",
    info: {
      returnAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage  Bangalore , Karnataka - 638 0001.",
      shipmentAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage Bangalore , Karnataka - 638 0001.",
    },
  },
  {
    sno: 2,
    customer: "Customer 2",
    orderID: "OID3233",
    ordermode: "Manual",
    carriertype: "UPS",
    accountID: "IUC387433233",
    date: "08/06/2002",
    info: {
      returnAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage  Bangalore , Karnataka - 638 0001.",
      shipmentAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage Bangalore , Karnataka - 638 0001.",
    },
  },
  {
    sno: 3,
    customer: "Customer 3",
    orderID: "OID3234",
    ordermode: "EDA",
    carriertype: "Fedex",
    accountID: "IUC387439999",
    date: "08/06/2003",
    info: {
      returnAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage  Bangalore , Karnataka - 638 0001.",
      shipmentAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage Bangalore , Karnataka - 638 0001.",
    },
  },
  {
    sno: 4,
    customer: "Customer 4",
    orderID: "OID123",
    ordermode: "Manual",
    carriertype: "UPS",
    accountID: "IUC821",
    date: "08/06/1992",
    info: {
      returnAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage  Bangalore , Karnataka - 638 0001.",
      shipmentAddress:
        "Block 'A' Kadirenahalli, Banashankari 2nd stage Bangalore , Karnataka - 638 0001.",
    },
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const Shipment = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("customer");

  useEffect(() => {
    setData(rows);
  }, []);

  const searchCustomer = (value) => {
    if (value === "") {
      return setData(rows);
    }
    const searchedRows = rows.filter((row) => {
      return row.customer.toLowerCase().includes(value.toLowerCase());
    });

    setData(searchedRows);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [page1, setPage1] = React.useState(0);
  const [rowsPerPage1, setRowsPerPage1] = React.useState(2);
  const [searchOpen1, setSearchOpen1] = React.useState(false);
  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };
  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(parseInt(event.target.value, 10));
    setPage1(0);
  };
  const emptyRows1 =
    page1 > 0 ? Math.max(0, (1 + page1) * rowsPerPage1 - rows1.length) : 0;

  const [open, setOpen] = React.useState(false);

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

  const [searchVal, setSearchVal] = useState("");
  return (
    <Box>
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Box>
            <Paper sx={{ width: "100%", mt: 1, mb: 1, boxShadow: "none" }}>
              <Grid
                sx={{ my: 1, width: "100%" }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4" fontWeight="500">
                  Orders
                </Typography>
                <CustomTextField
                  onChange={(e) => searchCustomer(e.target.value)}
                  placeholder="Search Customer"
                  fullWidth
                  size="small"
                  sx={{
                    width: searchOpen ? "300px" : "0%",
                    display: searchOpen ? "block" : "none",
                    transition: "all 0.4s linear",
                  }}
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
              </Grid>
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={"medium"}
                >
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                  />
                  <TableBody>
                    {stableSort(data, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                            style={{ cursor: "pointer" }}
                          >
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.sno}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.customer}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.orderID}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.ordermode}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.carriertype}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.date}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.accountID}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <IconButton
                                sx={{ p: 0, m: 0 }}
                                onClick={handleClickOpen}
                              >
                                <FiMoreHorizontal />
                              </IconButton>
                              <Dialog
                                PaperProps={{
                                  style: {
                                    borderRadius: "20px",
                                    padding: "10px",
                                  },
                                }}
                                // sx={{ opacity: 0.7 }}
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                                size="sm"
                                fullWidth="sm"
                              >
                                <DialogTitle style={{ fontSize: "16px" }}>
                                  More Shipment Details
                                </DialogTitle>
                                <Divider />
                                <DialogContent>
                                  <Grid container spacing={1}>
                                    <Grid
                                      item
                                      lg={4}
                                      md={4}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Return Address
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={8}
                                      md={8}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        {row.info.returnAddress}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={4}
                                      md={4}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                      >
                                        Shipping Address
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      lg={8}
                                      md={8}
                                      sm={12}
                                      xs={12}
                                      alignSelf="center"
                                    >
                                      <Typography
                                        variant="h5"
                                        color="textSecondary"
                                      >
                                        {row.info.shipmentAddress}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                              </Dialog>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (false ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[2, 4, 8]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </CardContent>
      </Card>
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Grid container sx={{ pb: 2 }}>
            <Grid
              item
              display="flex"
              alignItems="center"
              lg={12}
              md={12}
              xs={12}
              justifyContent="space-between"
            >
              <Typography variant="h4" fontWeight="500">
                Shipment
              </Typography>
              <CustomTextField
                placeholder="Search"
                fullWidth
                size="small"
                sx={{
                  width: searchOpen1 ? "300px" : "0%",
                  display: searchOpen1 ? "block" : "none",
                  transition: "all 0.4s linear",
                }}
                onChange={(e) => setSearchVal(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton onClick={() => setSearchOpen1(false)}>
                        <FiSearch />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Tooltip title="Enable Search">
                <IconButton
                  onClick={() => setSearchOpen1(true)}
                  size="small"
                  sx={{
                    display: !searchOpen1 ? "flex" : "none",
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
            </Grid>
          </Grid>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {["S.no", "Order ID", "Initialize", "Status", "Label"].map(
                    (column, index) => (
                      <TableCell key={column.id} align="left">
                        <Typography variant="h6" fontWeight="600">
                          {column}
                        </Typography>
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1
                  .filter((e) =>
                    e.orderID
                      .toLocaleLowerCase()
                      .includes(searchVal.toLocaleLowerCase())
                  )
                  .slice(
                    page1 * rowsPerPage1,
                    page1 * rowsPerPage1 + rowsPerPage1
                  )
                  .map((row) => {
                    return (
                      <TableRow hover>
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
                              <Typography variant="h6">{row.sno}</Typography>
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
                                {row.orderID}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <IconButton sx={{ p: 0, m: 0 }}>
                            <FiPower style={{ fontSize: "16px" }} />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={handleClickOpen1}>
                            <FiExternalLink style={{ fontSize: "16px" }} />
                          </IconButton>
                          <DialogMotion
                            open={open1}
                            handleClose1={handleClose1}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={onButtonClick}>
                            <FiDownload style={{ fontSize: "16px" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows1 > 0 && (
                  <TableRow
                    style={{
                      height: (true ? 33 : 53) * emptyRows1,
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
            count={rows1.length}
            rowsPerPage={rowsPerPage1}
            page={page1}
            onPageChange={handleChangePage1}
            onRowsPerPageChange={handleChangeRowsPerPage1}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Shipment;
