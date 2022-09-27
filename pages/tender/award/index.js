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
    Chip,
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
import { FiSearch } from "react-icons/fi";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import { useRouter } from 'next/router'

const columns = [
    { id: "sno", label: "S.No." },
    { id: "rfpID", label: "RFP ID" },
    { id: "rfpName", label: "RFP Name" },
    { id: "descrip", label: "Description" },
    { id: "status", label: "Status" },
];

function index() {
    const router = useRouter()
    const [rows, setrows] = useState([
        {
            id: 1,
            rfpID: "789001",
            rfpName: "Robert",
            descrip: "description 1",
            status: "closed",
        },
        {
            id: 2,
            rfpID: "789002",
            rfpName: " Hendry",
            descrip: "description 2",
            status: "open",
        },
        {
            id: 3,
            rfpID: "789003",
            rfpName: " Mikman",
            descrip: "description 3",
            status: "closed",
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

    const [searchOpen, setSearchOpen] = React.useState(false);
    
    return (
        <div  >
            <Typography variant="h5" color="gray" sx={{ p: 3, pb: 1, pt: 1 }} data-aos="zoom-in-up" >
                Award Records Details
            </Typography>
            <Card data-aos="zoom-in-up" >
                <CardContent>
                    <Grid container sx={{ pb: 2 }}>
                        <Grid
                            item
                            display="flex"
                            alignItems="center"
                            lg={12}
                            md={12}
                            xs={12}
                            justifyContent="flex-end"
                        >
                            <CustomTextField
                                onChange={(e) => setsearchval(e.target.value)}
                                placeholder="Search"
                                fullWidth
                                size="small"
                                sx={{
                                    width: searchOpen ? "300px" : "0%",
                                    display: searchOpen ? "block" : "none",
                                    transition: "all 0.4s linear",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment >
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
                                        e.rfpID
                                            .toLocaleLowerCase()
                                            .includes(searchval.toLocaleLowerCase())
                                    )
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover key={row.id} sx={{ cursor: (row.status === "open")? "pointer" :"normal" }} onClick={()=>{
                                                if(row.status === "open" ) router.push("/tender/award/process");
                                            }} >
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
                                                                {row.rfpID}
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
                                                            <Typography variant="h6">{row.rfpName}</Typography>
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
                                                            <Typography variant="h6">{row.descrip}</Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        pl: 0,
                                                    }}
                                                >
                                                    <Chip
                                                        sx={{
                                                            backgroundColor:
                                                                row.status === "open"
                                                                    ? (theme) => theme.palette.success.light
                                                                    : (theme) => theme.palette.error.light,
                                                            color:
                                                                row.status === "open"
                                                                    ? (theme) => theme.palette.success.main
                                                                    : (theme) => theme.palette.error.main,
                                                            borderRadius: "6px",
                                                            pl: "3px",
                                                            pr: "3px",
                                                            ml: 2,
                                                        }}
                                                        size="small"
                                                        label={row.status}
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
