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
  Grid,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Checkbox,
  InputAdornment,
  Tooltip,
  Chip,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const columns = [
  { id: "sno", label: "S.No.", width: 120 },
  { id: "tenderID", label: "Tender ID", width: 170 },
  { id: "name", label: "Tender Name", width: 170 },
  { id: "duedate", label: "Due Date", width: 170 },
  { id: "customeraccess", label: " Customer", width: 250 },
];

function index() {
  const [searchval, setsearchval] = useState("");
  const emplist = [
    { id: 1, label: "Dhanush" },
    { id: 2, label: "Rajesh" },
    { id: 3, label: "Shaeik" },
    { id: 4, label: "Govind" },
    { id: 5, label: "Sumanth" },
  ];

  const [rows, setrows] = useState([
    {
      id: 1,
      tenderID : "IP2829382",
      name : "Rajesh Kumar",
      duedate : "19/05/2021",
      customeraccess: [],
    },
    {
      id: 2,
      tenderID : "IP2829384",
      name : "Dhanush Karthick",
      duedate : "21/04/2021",
      customeraccess: [],
    },
    
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
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
    temp[i].customeraccess = value;
    setrows([...temp]);
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div >
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }}  data-aos="zoom-in-up"  >
        Advertisement Details
      </Typography>
      <Card  data-aos="zoom-in-up"  >
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
            </Grid>
          </Grid>
          <TableContainer
            sx={{
              minWidth: 550,
            }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ fontWeight: "bold", minWidth: column.width }}
                    >
                      <Typography variant="h6" style={{ fontWeight: "bold" }}>
                        {column.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .filter((e) =>
                    e.tenderID
                      .toLocaleLowerCase()
                      .includes(searchval.toLocaleLowerCase())
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
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
                                {row.tenderID}
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
                                {row.name}
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
                              <Chip
                                sx={{
                                  backgroundColor: (theme) => theme.palette.error.light,
                                  color: (theme) => theme.palette.error.dark,
                                  borderRadius: "6px",
                                  fontWeight: "600",
                                }}
                                size="large"
                                label={row.duedate}
                              />
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell
                        // sx={{
                        //   pl: 0,width:"400px"
                        // }}
                        >
                          <Box display="flex" alignItems="center">
                            <Box>
                              <Autocomplete
                                multiple
                                limitTags={1}
                                id="checkboxes-tags-demo"
                                options={emplist}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) => {
                                  console.log(value);
                                }}
                                renderOption={(props, option, { selected }) => (
                                  <li {...props}>
                                    <Checkbox
                                      icon={icon}
                                      checkedIcon={checkedIcon}
                                      style={{ marginRight: 8 }}
                                      checked={selected}
                                    />
                                    {option.label}
                                  </li>
                                )}
                                fullWidth
                                renderInput={(params) => (
                                  <CustomTextField
                                    {...params}
                                    placeholder="customer access"
                                    size="small"
                                    aria-label="customeraccess"
                                    sx={{
                                      width: "250px",
                                    }}
                                  />
                                )}
                              />
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
            rowsPerPageOptions={[4, 8, 25, 100]}
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
