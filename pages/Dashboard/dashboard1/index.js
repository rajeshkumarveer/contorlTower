import {
  Card,
  CardContent,
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Chip,
  styled,
  Avatar,
  TableHead,
  Fab,
} from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";

import { AiOutlineTeam } from "react-icons/ai";

import { BsCurrencyDollar } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import img1 from "../../../assests/images/shop/img1.jpg";
import img2 from "../../../assests/images/shop/img2.jpg";
import img3 from "../../../assests/images/shop/img3.jpg";
import img4 from "../../../assests/images/shop/img4.jpg";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { MdOutlineDelete } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Home() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const seriesreport = [
    {
      name: "Products Performance",
      data: [35, 90, 30, 55, 40],
    },
  ];
  const optionsreport = {
    colors: [secondary],
    chart: {
      height: 30,
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
        columnWidth: "45%",
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

  const pieSeries = [44, 55, 41, 17];

  const pieOption = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const Shopitems = [
    {
      id: 1,
      imgsrc: img1,
      pname: "The sectional/modular",
      customer: "Dhanush",
      status: "Delivered",
      price: "123.00",
      quantity: "3",
    },
    {
      id: 2,
      imgsrc: img2,
      pname: "The classic round arm",
      customer: "Rajesh",
      status: "In Process",
      price: "123.00",
      quantity: "3",
    },
    {
      id: 3,
      imgsrc: img3,
      pname: "The square arm sofa",
      customer: "Dhanush",
      status: "In Process",
      price: "123.00",
      quantity: "3",
    },
    {
      id: 4,
      imgsrc: img4,
      pname: "The hard wedge arm",
      customer: "In Process",
      status: "Delivered",
      price: "123.00",
      quantity: "3",
    },
  ];

  return (
    <div>
      <Grid container spacing={0} >
        <Grid item xs={12} lg={4}>
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
                  fontWeight="700"
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
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                            
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.secondary.dark,
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
              <Typography variant="h3">$3232.923</Typography>
              {/* <Button variant="contained" color="primary" sx={{ mt: "15px" }}>
                Download
              </Button> */}
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
                <FiDownload
                  fontSize="small"
                  icon="bell"
                  width="18"
                  height="18"
                />
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
        <Grid item xs={12} lg={8}>
          <Card sx={{ p: 0 }} data-aos="zoom-in-up">
            <Grid container spacing={0}>
              <Grid item xs={6} lg={3} sm={3}>
                <CardContent
                  sx={{
                    borderRight: { xs: "0", sm: "1px solid rgba(0,0,0,0.1)" },
                    padding: "30px",
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{
                      backgroundColor: "primary.light",
                      color: "primary.main",
                      boxShadow: "none",
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                            
                      "&:hover": {
                        backgroundColor: "primary.light",
                      },
                    }}
                  >
                    <AiOutlineTeam />
                  </IconButton>
                  <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h3">52,785</Typography>
                    <Typography
                      color="success.main"
                      variant="caption"
                      fontWeight="400"
                      sx={{ ml: 1 }}
                    >
                      -23%
                    </Typography>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Customer
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={6} lg={3} sm={3}>
                <CardContent
                  sx={{
                    borderRight: { xs: "0", sm: "1px solid rgba(0,0,0,0.1)" },
                    padding: "30px",
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{
                      backgroundColor: "secondary.light",
                      color: "secondary.main",
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                      "&:hover": {
                        backgroundColor: "secondary.light",
                      },
                    }}
                  >
                    <AiOutlineTeam />
                  </IconButton>
                  <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h3">52,785</Typography>
                    <Typography
                      color="error.main"
                      variant="caption"
                      fontWeight="400"
                      sx={{ ml: 1 }}
                    >
                      -23%
                    </Typography>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Customer
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={6} lg={3} sm={3}>
                <CardContent
                  sx={{
                    borderRight: { xs: "0", sm: "1px solid rgba(0,0,0,0.1)" },
                    padding: "30px",
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{
                      backgroundColor: "error.light",
                      color: "error.main",
                      boxShadow: "none",
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                            
                      "&:hover": {
                        backgroundColor: "error.light",
                      },
                    }}
                  >
                    <AiOutlineTeam />
                  </IconButton>
                  <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h3">52,785</Typography>
                    <Typography
                      color="success.main"
                      variant="caption"
                      fontWeight="400"
                      sx={{ ml: 1 }}
                    >
                      -23%
                    </Typography>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Customer
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={6} lg={3} sm={3}>
                <CardContent
                  sx={{
                    borderRight: { xs: "0", sm: "1px solid rgba(0,0,0,0.1)" },
                    padding: "30px",
                    "& :last-child": {
                      borderRight: "0",
                    },
                  }}
                >
                  <IconButton
                    size="large"
                    sx={{
                      backgroundColor: "success.light",
                      color: "success.main",
                      boxShadow: "none",
                      boxShadow:
                      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                            
                      "&:hover": {
                        backgroundColor: "success.light",
                      },
                    }}
                  >
                    <AiOutlineTeam />
                  </IconButton>
                  <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h3">52,785</Typography>
                    <Typography
                      color="success.main"
                      variant="caption"
                      fontWeight="400"
                      sx={{ ml: 1 }}
                    >
                      -23%
                    </Typography>
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="400"
                  >
                    Customer
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card data-aos="zoom-in-up">
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" fontWeight="500" sx={{ mr: "auto" }}>
                  Products Performance
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
              <Grid container spacing={0} sx={{ mt: 3 }}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  sm={5}
                  sx={{
                    borderRight: {
                      xs: "0",
                      sm: "1px solid rgba(0,0,0,0.1)",
                    },
                    pr: 2,
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Typography variant="h1" fontWeight="500">
                      $83,928
                    </Typography>
                    <IconButton
                      sx={{
                        ml: 1,
                        backgroundColor: (theme) => theme.palette.success.main,
                        boxShadow:
                        "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                              
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.success.dark,
                        },
                        color: "#fff",
                        height: "30px",
                        width: "30px",
                        fontSize: "10px",
                      }}
                    >
                      30%
                    </IconButton>
                  </Box>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    fontWeight="400"
                  >
                    Budget
                  </Typography>
                  <Typography variant="h1" sx={{ mt: 1 }} fontWeight="500">
                    $93,928
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    fontWeight="400"
                  >
                    Expense
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Chart
                      options={optionsreport}
                      series={seriesreport}
                      type="line"
                      height="30"
                    />
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
                      <FiDownload
                        fontSize="small"
                        icon="bell"
                        width="18"
                        height="18"
                      />
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
                  </Box>
                </Grid>
                <Grid item xs={12} lg={7} sm={7}>
                  <Box>
                    <Chart
                      options={optionsproductperformance}
                      series={seriesproductperformance}
                      type="bar"
                      height="265"
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            data-aos="zoom-in-up"
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: "#fff",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="flex-start"
                sx={{ position: "relative" }}
              >
                <Typography
                  color="textSecondary"
                  variant="h4"
                  fontWeight="700"
                  sx={{ marginBottom: "0", color: "#fff" }}
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
              <Typography variant="h3">$3232.923</Typography>
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
                <FiDownload
                  fontSize="small"
                  icon="bell"
                  width="18"
                  height="18"
                />
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
          <Card data-aos="zoom-in-up">
            <CardContent>
              <Grid container spacing={0}>
                <Grid item xs={6} xl={7}>
                  <Typography
                    variant="h1"
                    fontWeight="500"
                    sx={{ lineHeight: "35px" }}
                  >
                    $12,231
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    fontWeight="400"
                    sx={{ lineHeight: "35px" }}
                  >
                    Yearly Sales
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="h6"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
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
                      2021
                    </Typography>
                    <Typography
                      variant="h6"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
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
                      2022
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      variant="h6"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
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
                      2021
                    </Typography>
                    <Typography
                      variant="h6"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
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
                      2022
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={6}
                  xl={5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Chart
                      options={pieOption}
                      series={pieSeries}
                      type="donut"
                      height="145"
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Card data-aos="zoom-in-up">
            <CardContent>
              <TableContainer
                style={{ padding: 0, boxShadow: "none" }}
                component={Paper}
              >
                <Table sx={{ whiteSpace: { xs: "nowrap", sm: "unset" } }}>
                  <TableHead>
                    <TableRow>
                      {Shopitems.map((headCell) => (
                        <TableCell sx={{ border: "none" }}></TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Shopitems.map((row) => {
                      return (
                        <TableRow>
                          <TableCell
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              height="80"
                              width="100"
                              style={{ borderRadius: "10px" }}
                              src={row.imgsrc}
                              alt={row.pname}
                            />
                          </TableCell>
                          <TableCell>
                            <Box
                              display="flex"
                              flexDirection="column"
                              sx={{ ml: 2 }}
                            >
                              <Typography variant="h5" fontWeight="400">
                                {row.pname}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                fontWeight="400"
                              >
                                {row.pname}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box display="flex" flexDirection="column">
                              <Typography variant="h5" fontWeight="400">
                                Good
                              </Typography>
                              <BorderLinearProgress
                                sx={{ my: 1 }}
                                variant="determinate"
                                value={50}
                              />
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                fontWeight="400"
                              >
                                98% sold
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box
                              display="flex"
                              flexDirection="column"
                              sx={{ ml: 2 }}
                            >
                              <Typography variant="h5" fontWeight="400">
                                $32,323
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                fontWeight="400"
                              >
                                Earnings
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <IconButton >
                              <MdOutlineDelete />
                            </IconButton>
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
        <Grid item xs={12} lg={4}>
          <Card data-aos="zoom-in-up">
            <CardContent>
              <Typography variant="h3" fontWeight="500">
                Weekly Stats
              </Typography>

              <Box sx={{ pt: "10px" }}>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Avatar sx={{ backgroundColor: "primary.main" }} width="45">
                    <AiOutlineTeam />
                  </Avatar>
                  <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                    <Typography variant="h5" fontWeight="400">
                      Top Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      fontWeight="400"
                    >
                      John Doe
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Chip
                      color="default"
                      size="small"
                      label="68%"
                      sx={{ borderRadius: "6px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ pt: "10px" }}>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Avatar sx={{ backgroundColor: "secondary.main" }} width="45">
                    <AiOutlineTeam />
                  </Avatar>
                  <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                    <Typography variant="h5" fontWeight="400">
                      Top Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      fontWeight="400"
                    >
                      John Doe
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Chip
                      color="default"
                      size="small"
                      label="68%"
                      sx={{ borderRadius: "6px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ pt: "10px" }}>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Avatar sx={{ backgroundColor: "success.main" }} width="45">
                    <AiOutlineTeam />
                  </Avatar>
                  <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                    <Typography variant="h5" fontWeight="400">
                      Top Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      fontWeight="400"
                    >
                      John Doe
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Chip
                      color="default"
                      size="small"
                      label="68%"
                      sx={{ borderRadius: "6px" }}
                    />
                  </Box>
                </Box>
                <Chart
                  options={optionsreport}
                  series={seriesreport}
                  type="line"
                  height="30"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card data-aos="zoom-in-up">
            <CardContent>
              <Typography variant="h3" fontWeight="500">
                MedicalPro Branding
              </Typography>
              <Box display="flex" sx={{ mt: 1, mb: 1 }}>
                <Chip
                  size="small"
                  label="Angular"
                  sx={{
                    borderRadius: "6px",
                    backgroundColor: "secondary.main",
                    color: "#fff",
                  }}
                />
                <Chip
                  size="small"
                  label="React"
                  sx={{
                    borderRadius: "6px",
                    backgroundColor: "primary.main",
                    color: "#fff",
                    ml: 1,
                  }}
                />
              </Box>
              <Box sx={{ pt: "10px" }}>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Avatar sx={{ backgroundColor: "success.main" }} width="45">
                    <AiOutlineTeam />
                  </Avatar>
                  <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                    <Typography variant="h5" fontWeight="400">
                      Top Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      fontWeight="400"
                    >
                      John Doe
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Chip
                      color="default"
                      size="small"
                      label="68%"
                      sx={{ borderRadius: "6px" }}
                    />
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mb: 3 }}>
                  <Avatar sx={{ backgroundColor: "success.main" }} width="45">
                    <AiOutlineTeam />
                  </Avatar>
                  <Box display="flex" flexDirection="column" sx={{ ml: 2 }}>
                    <Typography variant="h5" fontWeight="400">
                      Top Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      fontWeight="400"
                    >
                      John Doe
                    </Typography>
                  </Box>
                  <Box sx={{ ml: "auto" }}>
                    <Chip
                      color="default"
                      size="small"
                      label="68%"
                      sx={{ borderRadius: "6px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card data-aos="zoom-in-up">
            <CardContent>
              <Typography variant="h3" fontWeight="500">
                Daily Activities
              </Typography>
              <Image
                style={{ borderRadius: "10px", marginTop: "10px" }}
                src={img1}
                alt="sofa"
              />
              <Typography variant="h4" sx={{ mt: 1 }} fontWeight="500">
                React 18 coming soon!
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }} fontWeight="500">
                By Johnathan Doe
              </Typography>
              <Typography
                variant="h6"
                sx={{ mt: 1 }}
                color="textSecondary"
                fontWeight="400"
              >
                This will be the small description for the news you have shown
                here. There could be some great info.
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
                <FiDownload
                  fontSize="small"
                  icon="bell"
                  width="18"
                  height="18"
                />
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
      </Grid>
    </div>
  );
}
