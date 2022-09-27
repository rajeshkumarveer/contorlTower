import React, { useEffect,useState } from "react";
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
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomSelectField from "../../../src/components - Copy/forms/CustomElements/CustomSelectField";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { addorderlist } from "../../../src/store/OrderProductList/Action";

const steps = ["Orders", "Settings", "Complete"];
function PlaceOrder() {
  let productItems = useSelector((state) => state.OrderListReducer.productList);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CardProductList.productList);
  useEffect(() => {
    if (productItems.length == 0 && cartItems.length > 0) {
      dispatch(addorderlist(cartItems));
    }
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep == 2) {
      dispatch(addorderlist([]));
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // step 2nd process
  const [carrierService, setCarrierService] = useState("");
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const onCarrierServiceChanges = (event) => {
    setCarrierService(event.target.value);
  };
  const onAccountChanges = (event) => {
    setAccount(event.target.value);
  };
  const onAddressChanges = (event) => {
    setAddress(event.target.value);
  };
  const oncountryChanges = (event) => {
    setCountry(event.target.value);
  };
  const onSalespersonChanges = (event) => {
    setSalesperson(event.target.value);
  };

  // Po Invoice
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#dd1818",
      color: theme.palette.common.white,
      textTransform: "uppercase",
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const printPDF = () => {
    const domElement = document.getElementById("card");
    html2canvas(domElement, { scale: 3 }).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL("image/png");
      let PDF = new jsPdf("p", "mm", "a4");
      let position = 0;
      PDF.addImage(FILEURI, "PNG", 0, position, fileWidth, fileHeight);
      PDF.save(`${new Date().toISOString()}.pdf`);
    });
  };
  // eslint-disable-next-line consistent-return
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ p: 3 }}>
            <Box>
              {productItems.length == 0 ? (
                <>
                  <Typography variant="h5" color="GrayText" textAlign="center">
                    {" "}
                    Please add product to cart
                  </Typography>
                </>
              ) : (
                <></>
              )}
              {productItems.map((product) => {
                return (
                  <>
                    <Grid container spacing={1} sx={{ p: 2 }}>
                      <Grid
                        item
                        lg={3}
                        md={3}
                        sm={4}
                        xs={12}
                        textAlign="center"
                      >
                        <img
                          src={product.productImage}
                          alt={product.productTitle}
                          style={{
                            borderRadius: "5px",
                            maxHeight: "140px",
                            maxWidth: "250px",
                          }}
                          width="100%"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={9}
                        md={9}
                        sm={8}
                        xs={12}
                        alignSelf="center"
                      >
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h4">
                            {product.productTitle}
                          </Typography>
                          <Typography color="textSecondary" variant="h5">
                            {product.productID}
                          </Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{ mt: 1 }}
                          >
                            <Typography variant="h6" sx={{ mr: "auto", mt: 1 }}>
                              Quantity : 1
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 1 }}>
                              Price : {product.productPrice}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider />
                    {/* <Box key={product.id}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                sx={{ p: 2, pt: 3 }}
                                            >
                                                <img
                                                    src={product.productImage}
                                                    alt={product.productTitle}
                                                    height="180px"
                                                    width="320px"
                                                    style={{ borderRadius: "10px" }}
                                                />
                                                <Box sx={{ ml: 2, width: "100%" }}>
                                                    <Typography variant="h4">{product.productTitle}</Typography>
                                                    <Typography color="textSecondary" variant="h5">{product.productID}</Typography>
                                                    <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                                                        <Typography variant="h6" sx={{ mr: "auto", mt: 1 }}>
                                                            Quantity : 1
                                                        </Typography>
                                                        <Typography variant="h6" sx={{ mt: 1 }}>Price : {product.productPrice}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Divider />
                                        </Box> */}
                  </>
                );
              })}
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ p: 3, pt: 0 }}>
            <Box>
              {/* <Typography variant="h4" sx={{ m: "auto", mt: 5, mb: 1 }} textAlign="center" color="textSecondary">CODE</Typography>
                            <Divider /> */}
              {/* <Grid container spacing={3}>
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <CustomFormLabel htmlFor="Name">Sales Person :  </CustomFormLabel>

                                    <CustomSelectField
                                        id="Name"
                                        value={salesperson}
                                        onChange={onSalespersonChanges}
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        sx={{ mt: 1, mb: 3 }}
                                    >
                                        {[{ value: 'sname1', label: 'Sales Person 1', }, { value: 'sname2', label: 'Sales Person 2', }].map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CustomSelectField>
                                </Grid>
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <CustomFormLabel htmlFor="Name">Discount : </CustomFormLabel>
                                    <CustomTextField
                                        id="Name"
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ mt: 1, mb: 3 }}
                                    />
                                </Grid>
                            </Grid> */}
            </Box>
            <Grid container spacing={3} sx={{ pt: 5 }}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomFormLabel htmlFor="Name">
                  Sales Person :{" "}
                </CustomFormLabel>

                <CustomSelectField
                  id="Name"
                  value={salesperson}
                  onChange={onSalespersonChanges}
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  {[
                    { value: "sname1", label: "Sales Person 1" },
                    { value: "sname2", label: "Sales Person 2" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelectField>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomFormLabel
                  sx={{ mt: 0 }}
                  justifyContent="center"
                  htmlFor="Carrier-Service"
                >
                  Carrier Service
                </CustomFormLabel>

                <CustomSelectField
                  id="Carrier-Service"
                  value={carrierService}
                  onChange={onCarrierServiceChanges}
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  {[
                    { value: "fedex", label: "Fedex" },
                    { value: "UPS", label: "UPS" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelectField>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <CustomFormLabel sx={{ mt: 0 }} htmlFor="account">
                  Account
                </CustomFormLabel>

                <CustomSelectField
                  id="account"
                  value={account}
                  onChange={onAccountChanges}
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  {[
                    { value: "myaccount", label: "My Account" },
                    { value: "other", label: "Other" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelectField>
              </Grid>
              <Grid item lg={12} md={2} sm={12} xs={12}>
                <CustomFormLabel sx={{ mt: 0 }} htmlFor="address">
                  Ship to Address
                </CustomFormLabel>

                <CustomSelectField
                  id="address"
                  value={address}
                  onChange={onAddressChanges}
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  {[
                    { value: "myaddress", label: "My Address" },
                    { value: "myaddress1", label: "My Address 1" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelectField>
              </Grid>
              <Grid item lg={12} md={2} sm={12} xs={12}>
                <CustomFormLabel sx={{ mt: 0 }} htmlFor="address">
                  Return to Address
                </CustomFormLabel>

                <CustomSelectField
                  id="address"
                  value={address}
                  onChange={onAddressChanges}
                  fullWidth
                  variant="outlined"
                  size="small"
                >
                  {[
                    { value: "myaddress", label: "My Address" },
                    { value: "myaddress1", label: "My Address 1" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelectField>
              </Grid>
              {!(address === "newAddress") ? (
                <></>
              ) : (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h4"
                      sx={{ mb: 3, mt: 2 }}
                      color="textSecondary"
                    >
                      New Address
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomFormLabel
                          sx={{
                            mt: 0,
                          }}
                          htmlFor="street-text"
                        >
                          Street
                        </CustomFormLabel>

                        <CustomTextField
                          id="street-text"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item lg={6} md={12} sm={12} xs={12}>
                        <CustomFormLabel
                          sx={{
                            mt: 0,
                          }}
                          htmlFor="city-text"
                        >
                          City
                        </CustomFormLabel>
                        <CustomTextField
                          id="city-text"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item lg={6} md={12} sm={12} xs={12}>
                        <CustomFormLabel
                          sx={{
                            mt: 0,
                          }}
                          htmlFor="state-text"
                        >
                          State
                        </CustomFormLabel>
                        <CustomTextField
                          id="state-text"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item lg={6} md={12} sm={12} xs={12}>
                        <CustomFormLabel
                          sx={{
                            mt: 0,
                          }}
                          htmlFor="post-text"
                        >
                          Post Code
                        </CustomFormLabel>
                        <CustomTextField
                          id="post-text"
                          variant="outlined"
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item lg={6} md={12} sm={12} xs={12}>
                        <CustomFormLabel
                          sx={{
                            mt: 0,
                          }}
                          htmlFor="country-text"
                        >
                          Country
                        </CustomFormLabel>
                        <CustomSelectField
                          id="country-select"
                          value={country}
                          onChange={oncountryChanges}
                          fullWidth
                          variant="outlined"
                          size="small"
                        >
                          {[
                            {
                              value: "india",
                              label: "India",
                            },
                            {
                              value: "uk",
                              label: "United Kingdom",
                            },
                          ].map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </CustomSelectField>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              )}
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ p: 3 }}>
            <Typography
              variant="h5"
              sx={{ mt: 2, mb: 2 }}
              textAlign="center"
              color="textSecondary"
            >
              Verify Order Placing Details
            </Typography>
            <Divider />
            <Grid
              container
              spacing={1}
              sx={{ p: 5, pt: 1, pl: 0, pr: 0 }}
              border="1px solid textSecondary"
            >
              <Grid
                item
                lg={3}
                md={12}
                sm={12}
                xs={12}
                alignSelf="center"
                sx={{ pb: 2, pt: 3 }}
              >
                <Typography variant="h5" fontWeight="bold">
                  Products{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12}>
                <Box>
                  {productItems.map((product) => {
                    return (
                      <>
                        <Grid container spacing={1} sx={{ p: 2, pl: 0, pr: 0 }}>
                          <Grid
                            item
                            lg={3}
                            md={3}
                            sm={4}
                            xs={12}
                            textAlign="center"
                          >
                            <img
                              src={product.productImage}
                              alt={product.productTitle}
                              style={{
                                borderRadius: "5px",
                                maxHeight: "120px",
                                maxWidth: "220px",
                              }}
                              width="100%"
                            />
                          </Grid>
                          <Grid
                            item
                            lg={9}
                            md={9}
                            sm={8}
                            xs={12}
                            alignSelf="center"
                          >
                            <Box sx={{ ml: 2 }}>
                              <Typography variant="h4">
                                {product.productTitle}
                              </Typography>
                              <Typography color="textSecondary" variant="h5">
                                {product.productID}
                              </Typography>
                              <Box
                                display="flex"
                                alignItems="center"
                                sx={{ mt: 1 }}
                              >
                                <Typography
                                  variant="h6"
                                  sx={{ mr: "auto", mt: 1 }}
                                >
                                  Quantity : 1
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                  Price : {product.productPrice}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                        <Divider />
                      </>
                    );
                  })}
                </Box>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Total Amount{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  $ 176{" "}
                </Typography>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Discount{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  10%{" "}
                </Typography>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Carrier Service{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  Fedex{" "}
                </Typography>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Account Details{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  My Account{" "}
                </Typography>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Sales Person{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  Raj kumar{" "}
                </Typography>
              </Grid>
              <Grid item lg={3} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" fontWeight="bold">
                  Address{" "}
                </Typography>
              </Grid>
              <Grid item lg={9} md={12} sm={12} xs={12} alignSelf="center">
                <Typography variant="h5" color="textSecondary">
                  Block 'A' Kadirenahalli, Banashankari 2nd stage
                </Typography>
                <Typography variant="h5" color="textSecondary">
                  Bangalore , Karnataka - 638 0001.
                </Typography>
              </Grid>
            </Grid>
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
    <Card data-aos="zoom-in-up">
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
              All steps completed - your order has been placed
            </Box>
            <Box sx={{ m: 3 }}>
              <Accordion
                sx={{
                  p: 1,
                  backgroundColor: "secondary.light",
                  borderRadius: 1,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Purchase Order Preview and Download</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box style={{ overflowX: "scroll" }}>
                    <Card id="card" style={{ minWidth: "992px" }}>
                      <CardContent>
                        <Grid
                          item
                          sm={12}
                          lg={12}
                          md={12}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            fontWeight="700"
                            style={{
                              textTransform: "uppercase",
                              fontSize: "30px",
                              letterSpacing: 1.2,
                            }}
                          >
                            KUPEX
                          </Typography>
                        </Grid>

                        <Grid
                          item
                          sm={6}
                          md={6}
                          lg={12}
                          xs={12}
                          sx={{
                            p: 2,
                          }}
                          display="flex"
                          alignItems="flex-start"
                          justifyContent="space-between"
                        >
                          <Box
                            sx={{
                              width: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography variant="h3" fontWeight="700">
                              KUPEX
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              Boston Office
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              One Post Office Square
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              Boston MA, 02109
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              USA
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: "50%",
                              overflow: "hidden",
                            }}
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-end"
                          >
                            <Typography variant="h3" fontWeight="700">
                              Purchase Order
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              PO No : P0000454
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              04/26/2017
                            </Typography>
                            <Typography variant="h5" fontWeight="400">
                              PO Status Closed Completed
                            </Typography>
                          </Box>
                        </Grid>

                        <Divider />

                        <Grid
                          item
                          sm={6}
                          md={6}
                          lg={12}
                          xs={12}
                          sx={{
                            p: 2,
                          }}
                          display="flex"
                          alignItems="flex-start"
                        >
                          <Box
                            sx={{
                              width: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              SUPPLIER
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              DELIVERY ADDRESS
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Compressing objects: 100% (17/17), done. Writing
                                objects: 100% (20/20), 68.54 KiB | 3.26 MiB/s,
                                done.
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Divider />

                        <Grid
                          item
                          sm={6}
                          md={6}
                          lg={12}
                          xs={12}
                          sx={{
                            p: 2,
                          }}
                          display="flex"
                          alignItems="flex-start"
                          flexWrap="wrap"
                        >
                          <Box
                            sx={{
                              width: "25%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              SUPPLIER
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "25%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              REQUESTED BY
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "25%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              APPROVED BY
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: "25%",
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="h5"
                              fontWeight="500"
                              sx={{
                                p: 1,
                                backgroundColor: "#dd1818",
                                color: "#fff",
                              }}
                            >
                              DEPARTMENT
                            </Typography>
                            <Box sx={{ p: 1 }}>
                              <Typography
                                variant="h5"
                                fontWeight="400"
                                textAlign="left"
                                flexWrap="wrap"
                              >
                                Boston Office
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Divider />

                        <TableContainer
                          component={Paper}
                          sx={{ mt: 3, p: 2, boxShadow: "none" }}
                        >
                          <Table
                            sx={{ minWidth: 700 }}
                            aria-label="customized table"
                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>
                                  Dessert (100g serving)
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Calories
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Fat&nbsp;(g)
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Carbs&nbsp;(g)
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Protein&nbsp;(g)
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.calories}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.fat}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.carbs}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.protein}
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </Card>
                  </Box>

                  <Box
                    display="flex"
                    sx={{ flexDirection: "row", p: 3 }}
                    justifyContent="center"
                    alignSelf="center"
                  >
                    <Button
                      onClick={printPDF}
                      id="print"
                      variant="contained"
                      color="primary"
                    >
                      Download (PO Invoice)
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box display="flex" sx={{ flexDirection: "row", p: 3 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <NextLink href="/supplier/products">
                <Button onClick={handleReset} variant="contained" color="error">
                  Products
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
                disabled={productItems.length == 0}
                color={
                  activeStep === steps.length - 1 ? "success" : "secondary"
                }
              >
                {activeStep === steps.length - 1 ? "Complete" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Card>
  );
}

export default PlaceOrder;
