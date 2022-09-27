import {
  Card,
  Button,
  Box,
  Grid,
  Typography,
  Fab,
  InputAdornment,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Checkbox,
} from "@mui/material";
import Image from "next/image";

import av1 from "../../../assets/images/users/4.png";
import Next from "next/link";

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import React, { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiDownload,
  FiList,
  FiSearch,
  FiXCircle,
} from "react-icons/fi";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const newOrder = [
  {
    name: "Customer 1",
    orderedAt: "Yesterday at 5:06 PM",
    address:
      "11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA",
    status: "Approved",
  },
  {
    name: "Customer 2",
    orderedAt: "Yesterday at 5:06 PM",
    address: "11, Avenue Ganesh, Near Osia plex, opposit",
    status: "Rejected",
  },
  {
    name: "Customer 3",
    orderedAt: "Yesterday at 1:06 PM",
    address:
      "11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA",
    status: "Pending",
  },
];

const images = [
  {
    label: "Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZ1cm5pdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    label: "Bird Box",
    imgPath:
      "https://images.unsplash.com/photo-1588714306299-aca44edf20de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZ1cm5pdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    label: "Bali,Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1652924132517-72144e3c4a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGZ1cm5pdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    label: "Ga,Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxmdXJuaXR1cmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const ImageSlider = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box sx={{ mt: 2 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 230,
                  borderRadius: "10px",
                  display: "block",
                  maxWidth: 330,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

const CustomerOrder = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchval, setsearchval] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(newOrder);
    console.log(orders);
  }, [orders]);
  return (
    <Grid container spacing={0} display="flex" flexDirection="column">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 1, pr: 3 }}
      >
        <CustomTextField
          placeholder="Search Customer"
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
      </Box>
      <Box display="flex">
        {orders
          .filter((e) =>
            e.name.toLocaleLowerCase().includes(searchval.toLocaleLowerCase())
          )
          .map((row, i) => {
            return (
              <Grid item lg={4} md={12} xs={12}>
                <Card sx={{ p: 3 }} data-aos="zoom-in-up" >

                  <Next href={`/customer/orders/status/${i}`}>
                   <Box sx={{cursor:"pointer"}}>
                   <Box display="flex" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Image
                          alt="Remy Sharp"
                          src={av1}
                          width="45"
                          height="45"
                          style={{ borderRadius: "50%" }}
                        />
                        <Box
                          display="flex"
                          justifyContent="left"
                          flexDirection="column"
                          sx={{ ml: 1 }}
                        >
                          <Typography variant="h5">{row.name}</Typography>
                          <Typography variant="caption">{row.orderedAt}</Typography>
                        </Box>
                      </Box>
                      {row.status == "Approved" ? <Box sx={{ ml: "auto" }}>
                        <Chip
                          color="success"
                          size="small"
                          label="Approved"
                          sx={{ borderRadius: "6px" }}
                        />
                      </Box> : row.status == "Rejected" ? <Box sx={{ ml: "auto" }}>
                        <Chip
                          color="error"
                          size="small"
                          label="Rejected"
                          sx={{ borderRadius: "6px" }}
                        />
                      </Box> : <Box sx={{ ml: "auto" }}>
                        <Chip
                          color="warning"
                          size="small"
                          label="Pending (3)"
                          sx={{ borderRadius: "6px" }}
                        />
                      </Box>}




                    </Box>
                    <ImageSlider images={images} />
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      sx={{ mt: 1, mb: 1 }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body2">
                      {row.address.slice(0, 40)}
                    </Typography>
                   </Box>
                  </Next>
                  {/* <Fab
                      sx={{ my: 2, borderRadius: "6px" }}
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
                    </Fab> */}
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        ml: "auto",
                      }}
                    >

                      <Tooltip title="download">
                        <Checkbox
                          icon={<DownloadOutlinedIcon />}
                          checkedIcon={<DownloadIcon />}
                          name="download"
                          color="success"
                          size="medium"
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Box>
    </Grid>
  );
};

export default CustomerOrder;
