import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import CustomTextField from "../../src/components - Copy/forms/CustomElements/CustomTextField";
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
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { visuallyHidden } from "@mui/utils";
import FeatherIcon from "feather-icons-react";
import img1 from "../../assets/images/users/1.jpg";
import img2 from "../../assets/images/users/2.jpg";
import img3 from "../../assets/images/users/3.jpg";
import img4 from "../../assets/images/users/4.jpg";
import img5 from "../../assets/images/users/5.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

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

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Customer",
  },
  {
    id: "pname",
    numeric: false,
    disablePadding: false,
    label: "Company Name",
  },
  {
    id: "users",
    numeric: false,
    disablePadding: false,
    label: "Sales person",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "weeks",
    numeric: false,
    disablePadding: false,
    label: "Weeks",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  // {
  //   id: "action",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Action",
  // },
];
const rows = [
  {
    id: "1",
    imgsrc: img4,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    pname: "Surya Furniture",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "Y",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Active",
    weeks: "40",
    budget: "2.4",
  },
  {
    id: "2",
    imgsrc: img1,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    pname: "Burma Teakwood Furniture",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "D",
      },
    ],
    status: "Active",
    weeks: "11",
    budget: "3.9",
  },
  {
    id: "3",
    imgsrc: img2,
    name: "Andrew McDown",
    email: "andrew@gmail.com",
    pname: "Lotus Furniture Marketing",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "A",
      },
      {
        color: (theme) => theme.palette.success.main,
        text: "X",
      },
      {
        color: (theme) => theme.palette.secondary.main,
        text: "N",
      },
    ],
    status: "Pending",
    weeks: "19",
    budget: "24.5",
  },
  {
    id: "4",
    imgsrc: img3,
    name: "Christo Jamil",
    email: "jamil@gmail.com",
    pname: "Wipro Furniture",
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Completed",
    weeks: "30",
    budget: "12.8",
  },

  {
    id: "5",
    imgsrc: img5,
    name: "Micheal Doe",
    email: "micheal@gmail.com",
    pname: "Usha Lexus Furniture",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
    ],
    status: "Cancel",
    weeks: "1",
    budget: "9.3",
  },
  {
    id: "6",
    imgsrc: img4,
    name: "Nirav Joshi",
    email: "nirav@gmail.com",
    pname: "Nilkamal Ltd",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "Y",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Active",
    weeks: "16",
    budget: "2.4",
  },
  {
    id: "7",
    imgsrc: img1,
    name: "Sunil Joshi",
    email: "sunil@gmail.com",
    pname: "Elite Admin",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
      {
        color: (theme) => theme.palette.error.main,
        text: "D",
      },
    ],
    status: "Active",
    weeks: "12",
    budget: "3.9",
  },
  {
    id: "8",
    imgsrc: img2,
    name: "Andrew McDownland",
    email: "andrew@gmail.com",
    pname: "Real Homes WP Theme",
    teams: [
      {
        color: (theme) => theme.palette.primary.main,
        text: "A",
      },
      {
        color: (theme) => theme.palette.warning.main,
        text: "X",
      },
      {
        color: (theme) => theme.palette.secondary.main,
        text: "N",
      },
    ],
    status: "Pending",
    weeks: "14",
    budget: "24.5",
  },
  {
    id: "9",
    imgsrc: img3,
    name: "Christopher Jamil",
    email: "jamil@gmail.com",
    pname: "MedicalPro WP Theme",
    teams: [
      {
        color: (theme) => theme.palette.error.main,
        text: "X",
      },
    ],
    status: "Completed",
    weeks: "12",
    budget: "12.8",
  },

  {
    id: "10",
    imgsrc: img5,
    name: "Micheal Doe",
    email: "micheal@gmail.com",
    pname: "Helping Hands WP Theme",
    teams: [
      {
        color: (theme) => theme.palette.secondary.main,
        text: "S",
      },
    ],
    status: "Cancel",
    weeks: "9",
    budget: "9.3",
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

function index() {
  const [data, setData] = useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  useEffect(() => {
    setData(rows);
  }, []);

  const searchCustomer = (value) => {
    if (value === "") {
      return setData(rows);
    }
    const searchedRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(value.toLowerCase());
    });

    setData(searchedRows);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const history = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
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

  return (
    <Box >
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Box>
            <Paper sx={{ width: "100%", mt: 1, mb: 1, boxShadow: "none" }}>
              <Grid
                sx={{ my: 2, width: "100%" }}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <CustomTextField
                  onChange={(e) => searchCustomer(e.target.value)}
                  placeholder="Search Leads"
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
                <Tooltip title="Add new">
                  <IconButton
                    sx={{
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.secondary.dark,
                      },
                      color: "#fff",
                      borderRadius: "50%",
                      ml: 1,
                      height: "40px",
                      width: "40px",
                    }}
                  >
                    <AiOutlinePlus />
                  </IconButton>
                </Tooltip>
              </Grid>
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={"medium"}
                >
                  {/* <TableHead>
                    <TableRow>
                      {headCells.map((headCell) => (
                        <TableCell
                          key={headCell.id}
                          align={headCell.numeric ? "right" : "left"}
                          padding={headCell.disablePadding ? "none" : "normal"}
                          style={{ fontWeight: "bold" }}
                        >
                          {headCell.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead> */}
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
                            onClick={() => history.push("/customer/edit")}
                          >
                            <TableCell>
                              <Box display="flex" alignItems="center">
                                <Image
                                  src={row.imgsrc}
                                  alt={row.imgsrc}
                                  width="40"
                                  height="40"
                                  style={{ borderRadius: "50%" }}
                                />
                                <Box
                                  sx={{
                                    ml: 2,
                                  }}
                                >
                                  <Typography variant="h6" fontWeight="600">
                                    {row.name}
                                  </Typography>
                                  <Typography
                                    color="textSecondary"
                                    variant="subtitle2"
                                  >
                                    {row.email}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "h6.fontSize",
                                }}
                              >
                                {row.pname}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Box display="flex" alignItems="center">
                                {row.teams.map((team) => (
                                  <Avatar
                                    key={team.text}
                                    sx={{
                                      backgroundColor: team.color,
                                      width: "35px",
                                      height: "35px",
                                      color: "#fff",
                                      ml: "-8px",
                                    }}
                                  >
                                    {team.text}
                                  </Avatar>
                                ))}
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box display="flex" alignItems="center">
                                <Box
                                  sx={{
                                    backgroundColor:
                                      row.status === "Active"
                                        ? (theme) => theme.palette.success.main
                                        : row.status === "Pending"
                                        ? (theme) => theme.palette.warning.main
                                        : row.status === "Completed"
                                        ? (theme) => theme.palette.primary.main
                                        : row.status === "Cancel"
                                        ? (theme) => theme.palette.error.main
                                        : (theme) =>
                                            theme.palette.secondary.main,
                                    borderRadius: "100%",
                                    height: "10px",
                                    width: "10px",
                                  }}
                                />
                                <Typography
                                  color="textSecondary"
                                  variant="subtitle2"
                                  sx={{
                                    ml: 1,
                                  }}
                                >
                                  {row.status}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                variant="subtitle2"
                              >
                                {row.weeks}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography fontWeight="500" variant="h6">
                                ${row.budget}k
                              </Typography>
                            </TableCell>
                            {/* <TableCell>
                              <Tooltip title="Edit">
                                <IconButton>
                                  <NextLink href="/customer/edit">
                                    <FeatherIcon icon="edit-3" width="18" />
                                  </NextLink>
                                </IconButton>
                              </Tooltip>
                            </TableCell> */}
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
                rowsPerPageOptions={[4, 8, 25, 100]}
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
    </Box>
  );
}

export default index;
