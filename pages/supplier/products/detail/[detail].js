import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Button,
  MobileStepper,
  Typography,
  Chip,
  Radio,
  MenuItem,
  FormControl,
  Select,
  Divider,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { addorderlist } from "../../../../src/store/OrderProductList/Action";
// import CircleIcon from "@mui/icons-material/Circle";
// import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomFormLabel from "../../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import { MdOutlinePlace, MdOutlineShoppingCart } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import Relatedproduct from "../relatedproduct";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../../../src/components - Copy/Cart/Cart";
import { addCartProductlist } from "../../../../src/store/CardProductList/Action";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ProductDetail = (props) => {
  const { productItem } = props;
  const images = [
    {
      imgPath: productItem.productImage,
      id: 1,
    },
    {
      imgPath: productItem.productImage1,
      id: 2,
    },
    {
      imgPath: productItem.productImage2,
      id: 3,
    },
    {
      imgPath: productItem.productImage3,
      id: 4,
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
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

  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [size, setSize] = useState("10");

  const handleChange2 = (event2) => {
    setSize(event2.target.value);
  };

  //   Qty
  const [qty, setQty] = useState("10");

  const handleChange3 = (event3) => {
    setQty(event3.target.value);
  };

  const [value, setValue] = useState(0);

  const handleChange4 = (event, newValue) => {
    setValue(newValue);
  };

  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div data-aos="zoom-in-up">
      <Card>
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={6}>
              {/* TODO :Need to Change Padding */}
              <Box
                sx={{
                  paddingRight: { xs: 0, lg: "50px" },
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    position: "relative",
                    margin: {
                      sm: "0 auto",
                      xs: "0 auto",
                      lg: "unset",
                    },
                  }}
                >
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <Box key={step.id}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img
                            src={step.imgPath}
                            alt={step.label}
                            width="100%"
                            height="100%"
                          />
                        ) : null}
                      </Box>
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
                        {/* {theme.direction === "rtl" ? (
              <FeatherIcon icon="arrow-left" width="18" />
            ) : (
              <FeatherIcon icon="arrow-right" width="18" />
            )} */}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {/* {theme.direction === "rtl" ? (
              <FeatherIcon icon="arrow-right" width="18" />
            ) : (
              <FeatherIcon icon="arrow-left" width="18" />
            )} */}
                        Back
                      </Button>
                    }
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box>
                <Box display="flex" alignItems="center">
                  <Chip
                    label={productItem.productStatus}
                    color="success"
                    sx={{
                      borderRadius: "6px",
                      backgroundColor: (theme) => theme.palette.success.main,
                      pl: "8px",
                      pr: "8px",
                      pt: "3px",
                      pb: "3px",
                      color: "#fff",
                      height: "unset",
                      mr: "10px",
                      "& .MuiChip-label": {
                        pl: 0,
                        pr: 0,
                      },
                    }}
                  />
                  <Typography
                    color="textSecondary"
                    variant="caption"
                    fontWeight="400"
                  >
                    {productItem.productID}
                  </Typography>
                </Box>
                <Typography
                  fontWeight="500"
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "30px",
                      lg: "30px",
                    },
                    mt: "5px",
                  }}
                >
                  {productItem.productTitle}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="400"
                  sx={{
                    mt: "10px",
                    color: "#99ABB4",
                    fontWeight: "400",
                    fontSize: "1rem",
                    lineHeight: "24px",
                  }}
                >
                  {productItem.productDesc.slice(0, 100)}...
                </Typography>
                <Typography
                  fontWeight="600"
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "30px",
                      lg: "30px",
                    },
                    mt: "20px",
                  }}
                >
                  {productItem.productPrice}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    mt: 3,
                    mb: 3,
                  }}
                >
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                  >
                    Colors
                  </CustomFormLabel>
                  <Box
                    sx={{
                      ml: 2,
                    }}
                  >
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      // icon={<CircleIcon />}
                      // checkedIcon={<CircleTwoToneIcon />}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fill: (theme) => theme.palette.primary.main,
                        },
                      }}
                    />
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      // icon={<CircleIcon />}
                      // checkedIcon={<CircleTwoToneIcon />}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fill: (theme) => theme.palette.secondary.main,
                        },
                      }}
                    />
                    <Radio
                      checked={selectedValue === "c"}
                      onChange={handleChange}
                      // icon={<CircleIcon />}
                      // checkedIcon={<CircleTwoToneIcon />}
                      value="c"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "C" }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fill: (theme) => theme.palette.error.main,
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Divider />
                <Box sx={{ pt: 3, pb: 3 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} lg={6}>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ mb: { xs: 3, sm: 0, lg: 0 } }}
                      >
                        <CustomFormLabel
                          className="heading6"
                          htmlFor="demo-simple-select-outlined"
                          sx={{
                            mt: 0,
                          }}
                        >
                          Size
                        </CustomFormLabel>
                        <Box sx={{ ml: 2, width: "180px" }}>
                          <FormControl variant="outlined" fullWidth>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={size}
                              fullWidth
                              onChange={handleChange2}
                              size="small"
                            >
                              <MenuItem value={10}>1</MenuItem>
                              <MenuItem value={20}>2</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ mb: { xs: 3, sm: 0, lg: 0 } }}
                      >
                        <CustomFormLabel
                          className="heading6"
                          htmlFor="demo-simple-select-outlined"
                          sx={{
                            mt: 0,
                          }}
                        >
                          Qty.
                        </CustomFormLabel>
                        <Box sx={{ ml: 2, width: "180px" }}>
                          <FormControl variant="outlined" fullWidth>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={qty}
                              fullWidth
                              onChange={handleChange3}
                              size="small"
                            >
                              <MenuItem value={10}>1</MenuItem>
                              <MenuItem value={20}>2</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Grid
                  container
                  spacing={2}
                  sx={{
                    mt: 2,
                  }}
                >
                  <Grid item xs={12} sm={6} lg={6}>
                    <Box>
                      {/* <NextLink href="/product/placeorder"> */}
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.secondary.main,
                          "&:hover": {
                            backgroundColor: (theme) =>
                              theme.palette.secondary.dark,
                          },
                          color: "#fff",
                          display: "block",
                          width: "100%",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(addorderlist([productItem]));
                          router.push("/supplier/products/placeorder");
                        }}
                      >
                        <IconButton size="small" color="inherit">
                          <MdOutlinePlace />
                        </IconButton>
                        <Box component="span">Place Order</Box>
                      </Button>
                      {/* </NextLink> */}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <Button
                      variant="contained"
                      size="large"
                      display="flex"
                      alignitems="center"
                      justifycontent="center"
                      sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.primary.dark,
                        },
                        color: "#fff",
                        width: "100%",
                        borderRadius: "9px",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(addCartProductlist([productItem]));
                        setShowDrawer(true);
                      }}
                    >
                      <IconButton size="small" color="inherit">
                        <MdOutlineShoppingCart />
                      </IconButton>
                      <Box component="span">Add to Cart</Box>
                    </Button>
                    <Cart
                      showDrawer={showDrawer}
                      setShowDrawer={setShowDrawer}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 5 }}>
                  <Typography
                    fontWeight="400"
                    sx={{
                      color: "#99ABB4",
                      fontWeight: "400",
                      fontSize: "1rem",
                      lineHeight: "24px",
                    }}
                  >
                    Dispatched in 2-3 weeks
                  </Typography>
                  <Typography fontWeight="400">
                    Why the longer time for delivery?
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ p: { xs: "20px", sm: "35px", lg: "35px" } }}>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange4}
                aria-label="basic tabs example"
              >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Assembly Instruction" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography fontWeight="400">
                {productItem.productDesc}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography fontWeight="400">
                {productItem.productAssemblyInstructionion}
              </Typography>
            </TabPanel>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ pl: "15px", mt: 5, mb: 3 }}
        >
          Related Products
        </Typography>
        {/* <ShopList /> */}
        <Relatedproduct productItems={props.productItems} />
      </Box>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);

  // let data = await fetch('http://localhost:3000/api/product/allproduct')
  // let {productItem} = await data.json()
  // let data = await fetch('http://localhost:3000/api/product/allproduct')
  // let {productItems} = await data.json();

  return {
    props: {
      productItem: {
        productTitle: "The Rough wood",
        productID: "2A6079S",
        productCategory: "wood",
        productPrice: "$89",
        productQuantity: "5",
        productImage: "/images/shop/img6.jpg",
        productImage1: "/images/shop/img2.jpg",
        productImage2: "/images/shop/img3.jpg",
        productImage3: "/images/shop/img4.jpg",
        productDesc: "Give your living room a classic look with beautifully crafted wooden sofas in muted shades. Pick a modern wooden sofa set for your spacious living room .",
        productAssemblyInstructionion: `Give your living room a classic look with beautifully crafted wooden sofas in muted shades. Pick a modern wooden sofa set for your spacious living room . 
        Go for a 1-1 set to add seating space to your patio, balcony or bedrooms. Wooden sofas upholstered with bright coloured fabrics are a perfect choice to add to your modern décor .
        `,
        id: 1,
      },
      productItems: [
        {
          productTitle: "The sectional/modular",
          productID: "19A6079S",
          productCategory: "Sofa shop",
          productPrice: "$89",
          productQuantity: "5",
          productImage: "/images/shop/img1.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstructionion: "",
          id: 1,
        },
        {
          productTitle: "The classic round arm",
          productID: "19A6079S",
          productCategory: "Sofa shop",
          productPrice: "$87",
          productQuantity: "5",
          productImage: "/images/shop/img2.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 2,
        },
        {
          productTitle: "The square arm sofa",
          productID: "19A6079S",
          productCategory: "Sofa shop",
          productPrice: "$45",
          productQuantity: "5",
          productImage: "/images/shop/img3.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 3,
        },
        {
          productTitle: "The hard wedge arm",
          productID: "19A6079S",
          productCategory: "Sofa shop",
          productPrice: "$123",
          productQuantity: "5",
          productImage: "/images/shop/img4.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 4,
        },
      ],
    }, // will be passed to the page component as props
  };
}
export default ProductDetail;
