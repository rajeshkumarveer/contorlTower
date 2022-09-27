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
  Divider,
  Fab,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import { useState } from "react";
import {
  FiCopy,
  FiExternalLink,
  FiSearch,
  FiSend,
  FiShare,
  FiShare2,
} from "react-icons/fi";
import CustomSwitch from "../../../src/components - Copy/forms/CustomElements/CustomSwitch";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { AiOutlineSync } from "react-icons/ai";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const columns = [
//   { id: "sno", label: "S.No.", width: 120 },
//   { id: "customer", label: "Customer", width: 170 },
//   { id: "productaccess", label: "Product access", width: 200 },
//   { id: "api", label: "API's", width: 170 },
// ];

const column1 = [
  { id: "sno", label: "S.No", width: 120 },
  { id: "platform", label: "Platform", width: 170 },
  { id: "productaccess", label: "Product Access", width: 200 },
  { id: "sync", label: "Sync", width: 170 },
];

const SwitchComponent = () => {
  const apis = [
    {
      name: "https://linon/api/v1/getAllProducts",
      bgColor: "primary.light",
      borderColor: "primary.main",
    },
    {
      name: "https://linon/api/v1/getDetail/3",
      bgColor: "success.light",
      borderColor: "success.main",
    },
    {
      name: "https://linon/api/v1/getList",
      bgColor: "secondary.light",
      borderColor: "secondary.main",
    },
  ];

  const [checked, setChecked] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    console.log(event.target.checked);
    if (event.target.checked === true) {
      // setOpen(true);
      setChecked(event.target.checked);
      console.log(event.target.checked);
    } else setChecked(!checked);
  };

  React.useEffect(() => {
    console.log(checked);
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text ?? "");
    } else {
      document.execCommand("copy", true, text ?? "");
    }
  };

  return (
    <>
      <CustomSwitch
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      {checked ? (
        <IconButton size="small" onClick={() => setOpen(true)}>
          <FiExternalLink />
        </IconButton>
      ) : (
        <></>
      )}

      <Dialog
        PaperProps={{
          style: { borderRadius: "20px", padding: "10px" },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth="sm"
      >
        <DialogTitle sx={{ fontSize: "18px" }}>{"Select API's"}</DialogTitle>
        <Divider />
        <DialogContent sx={{ minWidth: "100%" }}>
          {apis.map((row, index) => {
            return (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: "50px",
                  minWidth: "530px",
                  px: 2,
                  my: 1,
                  borderRadius: "9px",
                  backgroundColor: row.bgColor,
                  border: 1,
                  borderColor: row.borderColor,
                }}
              >
                <Tooltip title={row.name}>
                  <Typography variant="h5" fontWeight={500}>
                    {row.name}
                  </Typography>
                </Tooltip>
                <Box display="flex">
                  <Tooltip title="Share API">
                    <Fab
                      sx={{
                        borderRadius: "6px",
                        height: "30px",
                        width: "auto",
                        p: 1,
                        boxShadow: "none",
                      }}
                      size="medium"
                      variant="extended"
                      color="success"
                      aria-label="medium-bell"
                    >
                      <FiSend
                        fontSize="small"
                        icon="bell"
                        width="20"
                        height="20"
                      />
                      <Typography
                        sx={{
                          ml: 1,
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        Share
                      </Typography>
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Copy API">
                    <Fab
                      onClick={() => copyToClipboard(row.name)}
                      sx={{
                        mx: 1,
                        borderRadius: "6px",
                        height: "30px",
                        width: "auto",
                        p: 1,
                        boxShadow: "none",
                      }}
                      size="medium"
                      variant="extended"
                      color="grey.A100"
                      aria-label="medium-bell"
                    >
                      <FiCopy
                        fontSize="small"
                        icon="bell"
                        width="20"
                        height="20"
                      />
                      <Typography
                        sx={{
                          ml: 1,
                          textTransform: "uppercase",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        COPY
                      </Typography>
                    </Fab>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

// function index() {
//   const [searchval, setsearchval] = useState("");
//   const [searchval1, setsearchval1] = useState("");
//   const pList = [
//     {
//       id: 100,
//       label: "All Products",
//     },
//     {
//       id: 111,
//       label: "Wooden Chairs category",
//     },
//     {
//       id: 112,
//       label: "Kids furniture category",
//     },
//     {
//       id: 1,
//       label: "Solid Chair",
//     },
//     {
//       id: 2,
//       label: "Brittel soffa",
//     },
//     {
//       id: 3,
//       label: "Cub Chair",
//     },
//     {
//       id: 4,
//       label: "Dark Sofda",
//     },
//     {
//       id: 5,
//       label: "Team Chair",
//     },
//   ];
//   const [rows, setrows] = useState([
//     {
//       id: 1,
//       customer: "Robert",
//       productaccess: [],
//     },
//     {
//       id: 2,
//       customer: "Hendry",
//       productaccess: [],
//     },
//   ]);
//   const [rows1, setrows1] = useState([
//     {
//       id: 1,
//       customer: "Amazon",
//       productaccess: [],
//     },
//     {
//       id: 2,
//       customer: "Walmart",
//       productaccess: [],
//     },
//   ]);

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(2);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const [page1, setPage1] = React.useState(0);
//   const [rowsPerPage1, setRowsPerPage1] = React.useState(2);
//   const handleChangePage1 = (event, newPage) => {
//     setPage1(newPage);
//   };
//   const handleChangeRowsPerPage1 = (event) => {
//     setRowsPerPage1(parseInt(event.target.value, 10));
//     setPage1(0);
//   };
//   const emptyRows1 =
//     page1 > 0 ? Math.max(0, (1 + page1) * rowsPerPage1 - rows.length) : 0;

//   const onChangeValue = (value, i) => {
//     const temp = rows;
//     temp[i].productaccess = value;
//     setrows([...temp]);
//   };

//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchOpen1, setSearchOpen1] = useState(false);

//   const Spinner = ({ name }) => {
//     const [spinIcon, setSpinIcon] = useState(false);

//     return (
//       <Tooltip title={!spinIcon ? `Sync with ${name}` : `Syncing with ${name}`}>
//         <IconButton
//           size="small"
//           onClick={() => {
//             setSpinIcon(!spinIcon);
//           }}
//           // sx={{spinIcon ? {} : }}
//           sx={{
//             color: spinIcon
//               ? (theme) => theme.palette.primary.main
//               : (theme) => theme.palette.grey.A400,
//             animation: spinIcon ? "spin 2s linear infinite" : "",
//             "@keyframes spin": {
//               "0%": {
//                 transform: spinIcon ? "rotate(360deg)" : "",
//               },
//               "100%": {
//                 transform: spinIcon ? "rotate(0deg)" : "",
//               },
//             },
//           }}
//         >
//           <AiOutlineSync />
//         </IconButton>
//       </Tooltip>
//     );
//   };

//   return (
//     <div >
//       <Typography
//         variant="h5"
//         color="gray"
//         sx={{ p: 3, pb: 1, pt: 1 }}
//         data-aos="zoom-in-up"
        
//       >
//         Customer - Product Access Details
//       </Typography>
//       <Card data-aos="zoom-in-up" >
//         <CardContent>
//           <Grid container sx={{ pb: 2 }}>
//             <Grid
//               item
//               lg={12}
//               md={12}
//               xs={12}
//               display="flex"
//               alignItems="center"
//               justifyContent="flex-end"
//             >
//               <CustomTextField
//                 placeholder="Search"
//                 fullWidth
//                 sx={{
//                   width: searchOpen ? "100%" : "0%",
//                   display: searchOpen ? "block" : "none",
//                   transition: "all 0.4s linear",
//                 }}
//                 onChange={(e) => setsearchval(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment>
//                       <IconButton onClick={() => setSearchOpen(false)}>
//                         <FiSearch />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Tooltip title="Enable Search">
//                 <IconButton
//                   onClick={() => setSearchOpen(true)}
//                   sx={{
//                     display: !searchOpen ? "flex" : "none",
//                     alignItems: "center",
//                     background: "rgb(223, 223, 223)",
//                     "&:hover": {
//                       background: "rgb(223, 223, 223)",
//                     },
//                     borderRadius: "50%",
//                     height: "45px",
//                     width: "45px",
//                   }}
//                 >
//                   <FiSearch />
//                 </IconButton>
//               </Tooltip>
//             </Grid>
//           </Grid>
//           <TableContainer
//             sx={{
//               minHeight: 230,
//               minWidth: 550,
//             }}
//             aria-labelledby="tableTitle"
//             size={"medium"}
//           >
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ fontWeight: "bold", minWidth: column.width }}
//                     >
//                       <Typography variant="h6" style={{ fontWeight: "bold" }}>
//                         {column.label}
//                       </Typography>
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows
//                   .filter((e) =>
//                     e.customer
//                       .toLocaleLowerCase()
//                       .includes(searchval.toLocaleLowerCase())
//                   )
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row, i) => {
//                     return (
//                       <TableRow hover key={row.id}>
//                         <TableCell
//                           sx={{
//                             pl: 0,
//                           }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box
//                               sx={{
//                                 ml: 2,
//                               }}
//                             >
//                               <Typography variant="h6">{row.id}</Typography>
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             pl: 0,
//                           }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box
//                               sx={{
//                                 ml: 2,
//                               }}
//                             >
//                               <Typography variant="h6">
//                                 {row.customer}
//                               </Typography>
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell
//                         // sx={{
//                         //   pl: 0,width:"400px"
//                         // }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box>
//                               <Autocomplete
//                                 multiple
//                                 id="checkboxes-tags-demo"
//                                 options={pList}
//                                 disableCloseOnSelect
//                                 getOptionLabel={(option) => option.label}
//                                 onChange={(event, value) => {
//                                   console.log(value);
//                                 }}
//                                 renderOption={(props, option, { selected }) => (
//                                   <li {...props}>
//                                     <Checkbox
//                                       icon={icon}
//                                       checkedIcon={checkedIcon}
//                                       style={{ marginRight: 8 }}
//                                       checked={selected}
//                                     />
//                                     {option.label}
//                                   </li>
//                                 )}
//                                 fullWidth
//                                 renderInput={(params) => (
//                                   <CustomTextField
//                                     {...params}
//                                     placeholder="Product access"
//                                     size="small"
//                                     aria-label="Product access"
//                                     sx={{
//                                       width: "350px",
//                                     }}
//                                   />
//                                 )}
//                               />
//                               {/* <Autocomplete
//                                 multiple
//                                 limitTags={2}
//                                 id="tags-outlined"
//                                 options={pList}
//                                 getOptionLabel={(option) => option.label}
//                                 defaultValue={[]}
//                                 fullWidth
//                                 // value={row.productaccess}
//                                 onChange={(event, value) => {
//                                   console.log(value);
//                                   let data = {
//                                     ...rows[i],
//                                     productaccess: value,
//                                   };
//                                   let tempRows = rows;
//                                   tempRows[i] = data;
//                                   console.log(rows);
//                                   setrows([...tempRows]);
//                                 }}
//                                 filterSelectedOptions
//                                 renderInput={(params) => (
//                                   <CustomTextField
//                                     {...params}
//                                     placeholder="productaccess"
//                                     size="small"
//                                     aria-label="productaccess"
//                                     sx={{
//                                       width: "470px",
//                                     }}
//                                   />
//                                 )}
//                               /> */}
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell sx={{ p: 0 }}>
//                           <SwitchComponent />
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })}
//                 {emptyRows > 0 && (
//                   <TableRow
//                     style={{
//                       height: (dense ? 33 : 53) * emptyRows,
//                     }}
//                   >
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[2, 5, 10, 25, 100]}
//             component="div"
//             count={rows.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </CardContent>
//       </Card>
//       <Typography
//         variant="h5"
//         color="gray"
//         sx={{ p: 3, pb: 1, pt: 1 }}
//         data-aos="zoom-in-up"
        
//       >
//         Platform - Product Access Details
//       </Typography>
//       <Card data-aos="zoom-in-up" >
//         <CardContent>
//           <Grid container sx={{ pb: 2 }}>
//             <Grid
//               item
//               lg={12}
//               md={12}
//               xs={12}
//               display="flex"
//               alignItems="center"
//               justifyContent="flex-end"
//             >
//               <CustomTextField
//                 placeholder="Search"
//                 fullWidth
//                 sx={{
//                   width: searchOpen1 ? "100%" : "0%",
//                   display: searchOpen1 ? "block" : "none",
//                   transition: "all 0.4s linear",
//                 }}
//                 onChange={(e) => setsearchval1(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment>
//                       <IconButton onClick={() => setSearchOpen1(false)}>
//                         <FiSearch />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Tooltip title="Enable Search">
//                 <IconButton
//                   onClick={() => setSearchOpen1(true)}
//                   sx={{
//                     display: !searchOpen1 ? "flex" : "none",
//                     alignItems: "center",
//                     background: "rgb(223, 223, 223)",
//                     "&:hover": {
//                       background: "rgb(223, 223, 223)",
//                     },
//                     borderRadius: "50%",
//                     height: "45px",
//                     width: "45px",
//                   }}
//                 >
//                   <FiSearch />
//                 </IconButton>
//               </Tooltip>
//             </Grid>
//           </Grid>
//           <TableContainer
//             sx={{
//               minHeight: 230,
//               minWidth: 550,
//             }}
//             aria-labelledby="tableTitle"
//             size={"medium"}
//           >
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {column1.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ fontWeight: "bold", minWidth: column.width }}
//                     >
//                       <Typography variant="h6" style={{ fontWeight: "bold" }}>
//                         {column.label}
//                       </Typography>
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows1
//                   .filter((e) =>
//                     e.customer
//                       .toLocaleLowerCase()
//                       .includes(searchval1.toLocaleLowerCase())
//                   )
//                   .slice(
//                     page1 * rowsPerPage1,
//                     page1 * rowsPerPage1 + rowsPerPage1
//                   )
//                   .map((row, i) => {
//                     return (
//                       <TableRow hover key={row.id}>
//                         <TableCell
//                           sx={{
//                             pl: 0,
//                           }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box
//                               sx={{
//                                 ml: 2,
//                               }}
//                             >
//                               <Typography variant="h6">{row.id}</Typography>
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell
//                           sx={{
//                             pl: 0,
//                           }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box
//                               sx={{
//                                 ml: 2,
//                               }}
//                             >
//                               <Typography variant="h6">
//                                 {row.customer}
//                               </Typography>
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell
//                         // sx={{
//                         //   pl: 0,width:"400px"
//                         // }}
//                         >
//                           <Box display="flex" alignItems="center">
//                             <Box>
//                               <Autocomplete
//                                 multiple
//                                 id="checkboxes-tags-demo"
//                                 options={pList}
//                                 disableCloseOnSelect
//                                 getOptionLabel={(option) => option.label}
//                                 onChange={(event, value) => {
//                                   console.log(value);
//                                 }}
//                                 renderOption={(props, option, { selected }) => (
//                                   <li {...props}>
//                                     <Checkbox
//                                       icon={icon}
//                                       checkedIcon={checkedIcon}
//                                       style={{ marginRight: 8 }}
//                                       checked={selected}
//                                     />
//                                     {option.label}
//                                   </li>
//                                 )}
//                                 fullWidth
//                                 renderInput={(params) => (
//                                   <CustomTextField
//                                     {...params}
//                                     placeholder="Product access"
//                                     size="small"
//                                     aria-label="Product access"
//                                     sx={{
//                                       width: "350px",
//                                     }}
//                                   />
//                                 )}
//                               />
//                             </Box>
//                           </Box>
//                         </TableCell>
//                         <TableCell>
//                           {/* <SwitchComponent /> */}
//                           <Spinner name={row.customer} />{" "}
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })}
//                 {emptyRows1 > 0 && (
//                   <TableRow
//                     style={{
//                       height: (dense ? 33 : 53) * emptyRows1,
//                     }}
//                   >
//                     <TableCell colSpan={6} />
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[2, 5, 10, 25, 100]}
//             component="div"
//             count={rows.length}
//             rowsPerPage={rowsPerPage1}
//             page={page1}
//             onPageChange={handleChangePage1}
//             onRowsPerPageChange={handleChangeRowsPerPage1}
//           />
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default index;


import { AiOutlinePlus } from "react-icons/ai";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";


const columns = [
  { id: "sno", label: "S.No." },
  { id: "customer", label: "Customer" },
  { id: "productlist", label: "Product List" },
  { id: "Edit", label: "Edit" },
  { id: "API", label: "API's" },
];

const columns1 = [
  { id: "sno", label: "S.No." },
  { id: "platform", label: "Platform" },
  { id: "productlist", label: "Product List" },
  { id: "Edit", label: "Edit" },
  { id: "sync", label: "Sync" },
];
function index() {
  const pList = [
    {
      id: 100,
      label: "All Products",
    },
    {
      id: 111,
      label: "Wooden Chairs category",
    },
    {
      id: 112,
      label: "Kids furniture category",
    },
    {
      id: 1,
      label: "Solid Chair",
    },
    {
      id: 2,
      label: "Brittel soffa",
    },
    {
      id: 3,
      label: "Cub Chair",
    },
    {
      id: 4,
      label: "Dark Sofda",
    },
    {
      id: 5,
      label: "Team Chair",
    },
  ];
  const [id, setid] = useState(2);
  const [id1, setid1] = useState(2);
  const [rows, setrows] = useState([
    {
      id: 1,
      customer: "Rajesh kumar",
      productlist: [
        {
          id: 1,
          label: "Solid Chair",
        },
        {
          id: 2,
          label: "Brittel soffa",
        },
      ],
    },
    {
      id: 2,
      customer: "Dhanush",
      productlist: [
        {
          id: 100,
          label: "All Products",
        },
      ],
    },
  ]);
  const [rows1, setrows1] = useState([
    {
      id: 1,
      platform: "Amazon",
      productlist: [
        {
          id: 2,
          label: "Brittel soffa",
        },
      ],
    },
    {
      id: 2,
      platform: "Walmart",
      productlist: [
        {
          id: 100,
          label: "All Products",
        },
      ],
    },
  ]);
  const [dialogval, setdialogval] = useState({
    id: id + 1,
    customer: "",
    productlist: [],
  });
  const [dialogval1, setdialogval1] = useState({
    id: id + 1,
    platform: "",
    productlist: [],
  });
  const emptyDialogValue = async () => {
    await setdialogval({
      id: id + 1,
      customer: "",
      productlist: [],
    });
  };
  const emptyDialogValue1 = async () => {
    await setdialogval1({
      id: id + 1,
      platform: "",
      productlist: [],
    });
  };

  const [openDialog, setopenDialog] = React.useState(false);
  const [openDialog1, setopenDialog1] = React.useState(false);
  const [searchval, setsearchval] = useState("");
  const [searchval1, setsearchval1] = useState("");
  const handleClickDialog = async () => {
    await setopenDialog(true);
    await emptyDialogValue();
  };
  const handleClickDialog1 = async () => {
    await setopenDialog1(true);
    await emptyDialogValue1();
  };
  const handleUpdateDialog = async (row) => {
    await setdialogval(row);
    +(await setopenDialog(true));
  };
  const handleUpdateDialog1 = async (row) => {
    await setdialogval1(row);
    +(await setopenDialog1(true));
  };
  const handleCloseDialog = async () => {
    await setopenDialog(false);
    await emptyDialogValue();
  };
  const handleCloseDialog1 = async () => {
    await setopenDialog1(false);
    await emptyDialogValue1();
  };

  const handleUpdateDetails = async () => {
    const newRows = rows;
    let index = newRows.findIndex((ele) => ele.id == dialogval.id);
    console.log(dialogval.id);
    newRows[index] = dialogval;
    await setrows([...newRows]);
    await emptyDialogValue();
    await setopenDialog(false);
  };
  const handleUpdateDetails1 = async () => {
    const newRows1 = rows1;
    let index1 = newRows1.findIndex((ele) => ele.id == dialogval1.id);
    console.log(dialogval1.id);
    newRows1[index1] = dialogval1;
    await setrows1([...newRows1]);
    await emptyDialogValue1();
    await setopenDialog1(false);
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
  const [dense1, setDense1] = React.useState(false);
  const [page1, setPage1] = React.useState(0);
  const [rowsPerPage1, setRowsPerPage1] = React.useState(2);
  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };
  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(parseInt(event.target.value, 10));
    setPage1(0);
  };
  const emptyRows1 =
    page1 > 0 ? Math.max(0, (1 + page1) * rowsPerPage1 - rows1.length) : 0;
  const onChangeValue1 = (value, i) => {
    const temp1 = rows1;
    temp1[i].access = value;
    setrows([...temp1]);
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchOpen1, setSearchOpen1] = useState(false);

    const Spinner = ({ name }) => {
    const [spinIcon, setSpinIcon] = useState(false);

    return (
      <Tooltip title={!spinIcon ? `Sync with ${name}` : `Syncing with ${name}`}>
        <IconButton
          size="small"
          onClick={() => {
            setSpinIcon(!spinIcon);
          }}
          // sx={{spinIcon ? {} : }}
          sx={{
            color: spinIcon
              ? (theme) => theme.palette.primary.main
              : (theme) => theme.palette.grey.A400,
            animation: spinIcon ? "spin 2s linear infinite" : "",
            "@keyframes spin": {
              "0%": {
                transform: spinIcon ? "rotate(360deg)" : "",
              },
              "100%": {
                transform: spinIcon ? "rotate(0deg)" : "",
              },
            },
          }}
        >
          <AiOutlineSync />
        </IconButton>
      </Tooltip>
    );
  };
  return (
    <div >
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }}   data-aos="zoom-in-up"  >
      Customer - Product Access Details
      </Typography>
      <Card   data-aos="zoom-in-up"  >
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
             
            </Grid>
          </Grid>
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
              Update Product Details
            </DialogTitle>
            <Divider />
            <DialogContent>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Customer
              </CustomFormLabel>
              <CustomTextField
                autoFocus
                margin="dense"
                size="small"
                id="customer"
                type="text"
                disabled
                fullWidth
                value={dialogval.customer}
                onChange={(e) => {
                  setdialogval({
                    ...dialogval,
                    customer: e.target.value,
                  });
                }}
              />
              <Box>
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Products
                </CustomFormLabel>
                <Autocomplete
                  multiple
                  size="small"
                  limitTags={2}
                  id="tags-outlined"
                  options={pList}
                  getOptionLabel={(option) => option.label}
                  defaultValue={dialogval.productlist }
                  fullWidth
                  // value={row.access}
                  onChange={(event, value) => {
                    console.log(value);
                    const products = value.map((value) => value.label);
                    setdialogval({ ...dialogval, productlist: value });
                  }}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      size="small"
                      margin="dense"
                      autoFocus
                      aria-label="products"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdateDetails}
              >
                Update Details
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
                    e.customer
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
                                {row.customer}
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
                              {row.productlist.map((product, i) => {
                                return (
                                  <Box key={i}>
                                    <Typography variant="h6">
                                      {product.label}{" "}
                                      {row.productlist.length - 1 != i
                                        ? ","
                                        : "."}
                                    </Typography>
                                  </Box>
                                );
                              })}
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
                        <TableCell sx={{ p: 0 }}>
                          <SwitchComponent />
                    
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
      <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }}   data-aos="zoom-in-up"  >
      Platform - Product Access Details
      </Typography>
      <Card   data-aos="zoom-in-up"  >
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
                  size="small"
                placeholder="Search"
                fullWidth
                sx={{
                  width: searchOpen1 ? "300px" : "0%",
                  display: searchOpen1 ? "block" : "none",
                  transition: "all 0.4s linear",
                }}
                onChange={(e) => setsearchval1(e.target.value)}
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
                  size="small"
                  onClick={() => setSearchOpen1(true)}
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
          <Dialog
            PaperProps={{
              style: { borderRadius: "20px", padding: "10px" },
            }}
            open={openDialog1}
            onClose={handleCloseDialog1}
            maxWidth="sm"
            fullWidth="sm"
          >
            <DialogTitle sx={{ fontSize: "18px" }}>
              Update Product Details
            </DialogTitle>
            <Divider />
            <DialogContent>
              <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                Platform
              </CustomFormLabel>
              <CustomTextField
                autoFocus
                margin="dense"
                size="small"
                id="customer"
                type="text"
                disabled
                fullWidth
                value={dialogval1.platform}
                onChange={(e) => {
                  setdialogval({
                    ...dialogval1,
                    platform: e.target.value,
                  });
                }}
              />
              <Box>
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="Name">
                  Products
                </CustomFormLabel>
                <Autocomplete
                  multiple
                  size="small"
                  limitTags={2}
                  id="tags-outlined"
                  options={pList}
                  getOptionLabel={(option) => option.label}
                  defaultValue={dialogval1.productlist }
                  fullWidth
                  // value={row.access}
                  onChange={(event, value) => {
                    console.log(value);
                    const products = value.map((value) => value.label);
                    setdialogval1({ ...dialogval1, productlist: value });
                  }}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      size="small"
                      margin="dense"
                      autoFocus
                      aria-label="products"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog1}>Cancel</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleUpdateDetails1}
              >
                Update Details
              </Button>
            </DialogActions>
          </Dialog>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns1.map((column1) => (
                    <TableCell key={column1.id} align={column1.align}>
                      <Typography variant="h6" fontWeight="600">
                        {column1.label}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1
                  .filter((e) =>
                    e.platform
                      .toLocaleLowerCase()
                      .includes(searchval1.toLocaleLowerCase())
                  )
                  .slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1)
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
                                {row.platform}
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
                              {row.productlist.map((product, i) => {
                                return (
                                  <Box key={i}>
                                    <Typography variant="h6">
                                      {product.label}{" "}
                                      {row.productlist.length - 1 != i
                                        ? ","
                                        : "."}
                                    </Typography>
                                  </Box>
                                );
                              })}
                            </Box>
                          </Box>
                        </TableCell>

                        <TableCell>
                          <IconButton onClick={() => handleUpdateDialog1(row)}>
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
                        <TableCell >
                          <Spinner name={row.platform} />
                    
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows1 > 0 && (
                  <TableRow
                    style={{
                      height: (dense1 ? 33 : 53) * emptyRows1,
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
    </div>
  );
}

export default index;
