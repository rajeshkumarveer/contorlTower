import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Fab,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import BannerImage from "../../../assests/images/shop/dash-pic.svg";

import { BsCurrencyDollar, BsShop } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { FiDownload } from "react-icons/fi";

const Dashboard2 = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const seriesreport = [
    {
      name: "Monthly Sales",
      data: [35, 60, 30, 55, 40],
    },
  ];
  const optionsreport = {
    colors: [primary],
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const seriesreportNew = [35, 60, 30, 55, 40];
  const optionsreportNew = {
    colors: [primary, secondary],
    chart: {
      type: "donut",
      height: 280,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 7,
    },
    legend: {
      show: true,
      position: "bottom",
      verticalAlign: "bottom",
      align: "center",
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "78%",
          background: "transparent",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const optionsproductperformance = {
    chart: {
      type: "bar",
      height: 265,
      stacked: true,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 9,
      },
    },
    colors: [primary, secondary],
    fill: {
      type: "solid",
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      min: 100,
      max: 400,
      tickAmount: 3,
    },

    tooltip: {
      theme: "dark",
    },
  };
  const seriesproductperformance = [
    {
      name: "Expence",
      data: [330, 300, 180, 320, 250, 300, 300],
    },
    {
      name: "Budget",
      data: [60, 90, 80, 60, 70, 100, 80],
    },
  ];

  const dashboardArray = [
    {
      assigned: "Dhanush Karthick",
      role: "Chief Financial Officer",
      name: "Dhanush",
      priority: "In progress",
      budget: "13.4K",
      colors: "secondary.main",
    },
    {
      assigned: "Rajesh Kumar",
      role: "Manufacturing Head",
      name: "Rajesh",
      priority: "Low",
      budget: "23.4K",
      colors: "primary.main",
    },
    {
      assigned: "Dhanush Karthick",
      role: "Vice President, Sales",
      name: "Dhanush",
      priority: "High",
      budget: "13.4K",
      colors: "error.main",
    },
    {
      assigned: "Rajesh Kumar",
      role: "Director, SAP EDI",
      name: "Rajesh",
      priority: "Success",
      budget: "23.4K",
      colors: "success.main",
    },
  ];

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={6}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Box
              display="flex"
              alignItems="flex-start"
              sx={{ position: "relative" }}
            >
              <Typography
                color="textSecondary"
                variant="h4"
                fontWeight="400"
                sx={{ marginBottom: "0" }}
              >
                Hey Customer,
              </Typography>
              <Box
                sx={{
                  marginLeft: "auto",
                  mt: "-40px",
                  position: "absolute",
                  right: 0,
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Image
                  src={BannerImage}
                  height="200px"
                  width="200px"
                  alt="banner-img"
                />
              </Box>
            </Box>
            <Typography variant="h3" fontWeight="400">
              Download lates report
            </Typography>
            <Fab
              sx={{
                mt: 2,
                borderRadius: "6px",
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
              }}
              size="medium"
              variant="extended"
              color="primary"
              aria-label="medium-bell"
            >
              <FiDownload fontSize="small" icon="bell" width="18" height="18" />
              <Typography
                sx={{
                  ml: 1,
                  textTransform: "capitalize",
                  fontSize: "14px",
                }}
              >
                Download
              </Typography>
            </Fab>
          </CardContent>
        </Card>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <Card
              data-aos="zoom-in-up"
              sx={{
                background: (theme) => theme.palette.secondary.main,
                color: "#fff",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="600"
                    sx={{ marginBottom: "0" }}
                  >
                    Earnings
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "auto",
                      mt: 2,
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                        "&:hover": {
                          backgroundColor: (theme) => theme.palette.primary.dark,
                        },
                        color: "#fff",
                        height: "48px",
                        width: "48px",
                      }}
                    >
                      <BsCurrencyDollar height="24" width="24" />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="h3" fontWeight="600">
                  $3232.923
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: "15px",
                    color: "#fff", 
                    boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                          
                    backgroundColor: (theme) => theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                            
                    },
                  }}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card sx={{ pb: 0, pr: 0, pl: 0 }} data-aos="zoom-in-up">
              <CardContent sx={{ pl: "30px", pr: "30px" }}>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      sx={{ mb: 0 }}
                      gutterBottom
                    >
                      Monthly Sales
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 0, mt: 1 }} gutterBottom>
                      3,282
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <IconButton
                      sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.primary.dark,
                        },
                        color: "#fff",
                        height: "48px",
                        width: "48px",
                      }}
                    >
                      <BsShop height="24" width="24" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
              <Chart
                options={optionsreport}
                series={seriesreport}
                type="area"
                height="62px"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Box
              display="flex"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
              justifyContent="space-between"
            >
              <Typography variant="h3" fontWeight="500" sx={{ mr: "auto" }}>
                Sales Performance
              </Typography>
              <Typography
                variant="h6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ color: "primary.main" }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    "& svg": { fill: "primary.main" },
                    mr: "5px",
                    mt: "3px",
                  }}
                >
                  <VscCircleFilled height="10" width="10" />
                </Typography>
                Expense
              </Typography>
              <Typography
                variant="h6"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ color: "secondary.main", ml: 2 }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    "& svg": { fill: "secondary.main" },
                    mr: "5px",
                    mt: "3px",
                  }}
                >
                  <VscCircleFilled height="10" width="10" />
                </Typography>
                Budget
              </Typography>
            </Box>
            <Box>
              <Chart
                options={optionsproductperformance}
                series={seriesproductperformance}
                type="bar"
                height="265"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Typography variant="h3" fontWeight="500" sx={{ mr: "auto" }}>
              Total Sales
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1 }}
              color="textSecondary"
              fontWeight="400"
            >
              Overview of Years
            </Typography>
            <Divider />
            <Box>
              <Chart
                options={optionsreportNew}
                series={seriesreportNew}
                type="donut"
                height="280"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <TableContainer
              style={{ padding: 0, boxShadow: "none" }}
              component={Paper}
            >
              <Table sx={{ whiteSpace: { xs: "nowrap", sm: "unset" } }}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5" fontWeight="400">
                        Assigned
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5" fontWeight="400">
                        Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5" fontWeight="400">
                        Priority
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5" fontWeight="400">
                        Budget
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dashboardArray.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <img
                              alt={row.name}
                              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                              width="45px"
                              height="45px"
                              className="roundedCircle"
                            />
                            <Box sx={{ ml: 2 }}>
                              <Typography variant="h5" fontWeight="400">
                                {row.assigned}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                fontWeight="400"
                              >
                                {row.role}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" fontWeight="400">
                            {row.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" fontWeight="400">
                            <Chip
                              sx={{
                                backgroundColor: row.colors,
                                color: "#fff",
                              }}
                              label={row.priority}
                            />
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" fontWeight="400">
                            {row.budget}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Typography variant="h3" sx={{ mb: 2 }} fontWeight="500">
              Order Status
            </Typography>
            <Timeline sx={{ p: 0, my: 0 }}>
              <TimelineItem data-aos="fade-up" data-aos-duration="1000">
                <TimelineOppositeContent sx={{ flex: "0" }}>
                  <Typography variant="subtitle2">09.20</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent variant="h6">Order Picked</TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-up" data-aos-duration="1500">
                <TimelineOppositeContent sx={{ flex: "0" }}>
                  <Typography variant="subtitle2">10.30</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="error" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent variant="h6">Order Confirmed</TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-up" data-aos-duration="2000">
                <TimelineOppositeContent sx={{ flex: "0" }}>
                  <Typography variant="subtitle2">02.00</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent variant="h6">Order Shippped</TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-up" data-aos-duration="2500">
                <TimelineOppositeContent sx={{ flex: "0" }}>
                  <Typography variant="subtitle2">05.30</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  {/* <TimelineConnector /> */}
                </TimelineSeparator>
                <TimelineContent variant="h6">Out For Delivery</TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Typography variant="h3" fontWeight="500">
              Daily Activities
            </Typography>
            <Image
              style={{ borderRadius: "10px", marginTop: "10px" }}
              src={BannerImage}
              alt="sofa"
              height="160"
              width="200"
            />
            <Typography variant="h4" sx={{ mt: 1 }} fontWeight="500">
              Plugin Feature coming soon!
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }} fontWeight="500">
              By Nandewaran
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 1 }}
              color="textSecondary"
              fontWeight="400"
            >
              Plugin Manager is a plugin for Control Tower that allows you to
              install, update and remove plugins from this application.
            </Typography>
            <Fab
              sx={{
                mt: 2,
                borderRadius: "6px",
                boxShadow:
                  "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
              }}
              size="medium"
              variant="extended"
              color="primary"
              aria-label="medium-bell"
            >
              <FiDownload fontSize="small" icon="bell" width="18" height="18" />
              <Typography
                sx={{
                  ml: 1,
                  textTransform: "capitalize",
                  fontSize: "14px",
                }}
              >
                Download
              </Typography>
            </Fab>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Card data-aos="zoom-in-up">
          <CardContent>
            <Typography variant="h3" fontWeight="500" sx={{ mb: 2 }}>
              Weekly Stats
            </Typography>

            <Box display="flex" alignItems="center" sx={{ my: "15px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="45px"
                height="45px"
                className="roundedCircle"
              />
              <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                <Typography variant="h5" fontWeight="400">
                  Top Sales
                </Typography>
                <Typography variant="h6" color="textSecondary" fontWeight="400">
                  Danush
                </Typography>
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Chip
                  color="secondary"
                  size="small"
                  label="68%"
                  sx={{ borderRadius: "6px" }}
                />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" sx={{ my: "15px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="45px"
                height="45px"
                className="roundedCircle"
              />
              <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                <Typography variant="h5" fontWeight="400">
                  Top Sales
                </Typography>
                <Typography variant="h6" color="textSecondary" fontWeight="400">
                  Rajesh
                </Typography>
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Chip
                  color="error"
                  size="small"
                  label="68%"
                  sx={{ borderRadius: "6px" }}
                />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" sx={{ my: "15px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                width="45px"
                height="45px"
                className="roundedCircle"
              />
              <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                <Typography variant="h5" fontWeight="400">
                  Top Sales
                </Typography>
                <Typography variant="h6" color="textSecondary" fontWeight="400">
                  Nandeswaran
                </Typography>
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Chip
                  color="primary"
                  size="small"
                  label="68%"
                  sx={{ borderRadius: "6px" }}
                />
              </Box>
            </Box>
            <Chart
              options={optionsreport}
              series={seriesreport}
              type="area"
              height="92px"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard2;
