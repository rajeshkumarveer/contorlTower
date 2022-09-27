import React, { useEffect, useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Typography,
  FormControlLabel,
  Divider,
  Grid,
  MenuItem,
  CardContent,
  AccordionSummary,
  AccordionDetails,
  TablePagination,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SendIcon from '@mui/icons-material/Send';
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

const steps = ["Process 1", "Process 2", "Complete"];
function index() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

  const [rows, setrows] = useState([
    {
      id: 1,
      checked: false,
      proposalID: "789001",
      supName: "Robert",
      amount: "$120",
      effort: "Effort Detail 1",
    },
    {
      id: 2,
      checked: false,
      proposalID: "789002",
      supName: " Hendry",
      amount: "$520",
      effort: "Effort Detail 2",
    },
  ]);
  const columns = [
    { id: "sno", label: "S.No." },
    { id: "proposalID", label: "Proposal ID" },
    { id: "supName", label: "Supplier Name" },
    { id: "amount", label: "Amount" },
    { id: "effort", label: "Effort" },
  ];
  const [checked, setChecked] = React.useState([false, false]);
  // eslint-disable-next-line consistent-return
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ p: 3, pt: 5, pb: 5 }}>

            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        <Typography variant="h6" fontWeight="600">
                          {column.id == "sno" ? (
                            // <Checkbox
                            //   checked={checked[0] && checked[1]}
                            //   indeterminate={checked[0] !== checked[1]}
                            //   onChange={()=>{
                            //     let temp = checked;
                            //     temp = temp.map(e=>event.target.checked);
                            //     setChecked([...temp])
                            //   }}
                            //   sx={{color : (theme) =>`${theme.palette.primary.main}!important`}}
                            // />
                            "Select")
                            : column.label}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => {
                      return (
                        <TableRow hover key={row.id} sx={{
                          // background : checked[row.id - 1] ? theme.primary.main :"white"
                          ...(row.checked && {
                            backgroundColor: (theme) =>
                              `${theme.palette.primary.light}!important`,
                          }),
                        }}>
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
                                <Checkbox checked={row.checked} onChange={() => {
                                  let temp = rows;
                                  temp[i].checked = event.target.checked;
                                  setrows([...temp]);
                                }} />
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
                                <Typography variant="h6">{row.supName}</Typography>
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
                                <Typography variant="h6">
                                  {row.effort}
                                </Typography>
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
          </Box>
        );
      case 1:
        return (
          <Box sx={{ p: 3, pt: 5, pb: 5 }}>
            <Typography variant="h3" sx={{ pb: 3, fontWeight: 700 }} color="primary">
              Details
            </Typography>
           <Box sx={{p:1}}>
           <Grid container spacing={1} sx={{pb:2}}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Supplier Name
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  Anty Rodes
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}  sx={{pb:2}}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Supplier ID
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  7800012
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}  sx={{pb:2}}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Discription
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  Large scale group company
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}  sx={{pb:2}}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Amount
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  $560
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}  sx={{pb:2}}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Region
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  USA
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} sm={4}>
                <Typography variant=" h6" sx={{ pb: 2, fontWeight: 700 }}>
                  Account Manager
                </Typography>
              </Grid>
              <Grid xs={12} sm={8}>
                <Typography variant=" h6" sx={{ pb: 2  }}>
                  RObert
                </Typography>
              </Grid>
            </Grid>
           </Box>

          </Box>
        );
      case 2:
        return (
          <Box sx={{ p: 3, pt: 5, pb: 5 }}>
            <Typography variant="h4" sx={{ pb: 2, fontWeight: 700 }}>
              Contract
            </Typography>
            <iframe src="/proposal.pdf" width="100%" height="100%" style={{ minHeight: "80vh" }} />
            <Box textAlign="center" sx={{p:2}}>
            <Button variant="contained" color="secondary"  endIcon={<SendIcon />} textAlign="center">
              Send
            </Button>
            </Box>
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Card  data-aos="zoom-in-up">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} sx={{ pt: 2 }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Box
              sx={{
                m: 3,
                p: 2,
                backgroundColor: "primary.light",
                borderRadius: 1,
              }}
              textAlign="center"
            >
              All steps completed
            </Box>
            <Box sx={{ m: 3 }}>
              {/* pdfview */}
            </Box>

            <Box display="flex" sx={{ flexDirection: "row", p: 3 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <NextLink href="/tender/award/">
                <Button onClick={handleReset} variant="contained" color="error">
                  Award section
                </Button>
              </NextLink>
            </Box>
          </>
        ) : (
          <>
            <Box>{handleSteps(activeStep)}</Box>

            <Box display="flex" sx={{ flexDirection: "row", p: 3 }}>
              <Button
                color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                variant="contained"
                color={
                  activeStep === steps.length - 1 ? "success" : "secondary"
                }
              >
                {activeStep === steps.length - 1 ? "Close RFP" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Card>
  );
}

export default index;
