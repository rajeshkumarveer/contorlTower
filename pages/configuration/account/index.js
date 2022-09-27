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
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const columns = [
  { id: "sno", label: "S.No.", width: 120 },
  { id: "empname", label: "Employee Name", width: 170 },
  { id: "custaccess", label: " Customer access List", width: 250 },
  { id: "supaccess", label: " Supllier access List", width: 250 },
];

function index() {
  const [searchval, setsearchval] = useState("");
  const custlist = [
    {
      id: "1",
      label: "Robert",
    },
    {
      id: "2",
      label: "mikman",
    },
    {
      id: "3",
      label: "Hendry",
    },
  ];
  const Suplierlist = [
    {
      id: "1",
      label: "Rajesh",
    },
    {
      id: "2",
      label: "Dhanush",
    },
    {
      id: "3",
      label: "Veer",
    },
  ];
  const [rows, setrows] = useState([
    {
      id: 1,
      empname: "Dinesh",
      custaccess: [],
      supaccess: [],
    },
    {
      id: 2,
      empname: "Kavita",
      custaccess: [],
      supaccess: [],
    },
    {
      id: 3,
      empname: "Raj bhai",
      custaccess: [],
      supaccess: [],
    },
  ]);

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
  const onChangeValue = (value, i) => {
    const temp = rows;
    temp[i].custaccess = value;
    setrows([...temp]);
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  // const [, setfirst] = useState(second)
  const saveSupplier = (value, i, opt, props) => {
    // if(value){
    // }
    // console.log(value);
    // console.log(i);
    // console.log(opt);
    // console.log(props);
    // let data = { ...rows[i] ,  custaccess : value}
    // let tempRows = rows;
    // tempRows[i] = data;
    // console.log(rows);
    // setrows([...tempRows]);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    // setrows({...rows[0], custaccess: e.target.value})
  };
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div >
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }}  data-aos="zoom-in-up" >
        Employee access Details
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
              minHeight: 280,
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
                    e.empname
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
                                {row.empname}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Box>
                            <Autocomplete
                            multiple
                            limitTags={1}
                            id="checkboxes-tags-demo"
                            options={custlist}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            onChange={(event, value) => {
                              console.log(value);
                              // let data = { ...rows[i] ,  custaccess : value}
                              // let tempRows = rows;
                              // tempRows[i] = data;
                              // setrows([...tempRows]);
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
                                aria-label="custaccess"
                                sx={{
                                  width: "270px",
                                }}
                              />
                            )}
                          />
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Autocomplete
                            multiple
                            limitTags={1}
                            id="checkboxes-tags-demo"
                            options={Suplierlist}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            onChange={(event, value) => {
                              console.log(value);
                              // let data = { ...rows[i] ,  custaccess : value}
                              // let tempRows = rows;
                              // tempRows[i] = data;
                              // setrows([...tempRows]);
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
                                aria-label="custaccess"
                                sx={{
                                  width: "270px",
                                }}
                              />
                            )}
                          />
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
            rowsPerPageOptions={[3, 8, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {/* <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(rows);
              }}
            >
              Save
            </Button>
          </Box> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default index;
