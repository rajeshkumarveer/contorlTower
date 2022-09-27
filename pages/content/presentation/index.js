import React from "react";
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
  MenuItem,
  Grid,
  Autocomplete,
  Checkbox,
  Fab,
} from "@mui/material";
import { useState } from "react";
import CustomSelectField from "../../../src/components - Copy/forms/CustomElements/CustomSelectField";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useEffect } from "react";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FiDownload, FiPlusCircle } from "react-icons/fi";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

import pptxgen from "pptxgenjs";

function index() {
  const customerList = [
    { id: 1, value: "robert", label: "Robert" },
    { id: 2, value: "hendry", label: "Hendry" },
  ];
  const pList = [
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
  const [presentationValue, setpresentationValue] = useState({
    productList: [],
    customer: "",
    date: null,
  });
  const onCreate = () => {
    let tempcust = presentationValue.productList.map((p) => p.id);
    const data = { ...presentationValue, productList: tempcust };
    // Make ur api/query here.... data contains required values..
    console.log(data);
  };

  useEffect(() => {
    console.log(presentationValue);
  });

  const handleChange = (newValue) => {
    // setValue(newValue);
    setpresentationValue({
      ...presentationValue,
      date: newValue,
    });
  };

  // PPT
  const createPPT = () => {
    let pres = new pptxgen();

    //initial slide
    pres.layout = "LAYOUT_WIDE";

    pres.defineSlideMaster({
      title: "MASTER_SLIDE",
      background: { color: "FFFFFF" },
      objects: [
        {
          image: {
            x: 5.5,
            y: 2.8,
            w: 2.0,
            h: 1.0,
            path: "https://i.ibb.co/NKMH3WD/n1.png",
          },
        },
        {
          text: {
            text: "20/09/2022",
            options: {
              x: 5.8,
              y: 3.4,
              w: 5.5,
              h: 0.75,
              bold: true,
              fontFace: "Arial",
              fontSize: 18,
            },
          },
        },

        {
          image: {
            x: 0.3,
            y: 0.3,
            w: 0.5,
            h: 0.5,
            path: "https://i.ibb.co/M6gQQJL/download.jpg",
          },
        },
        {
          rect: {
            x: 0.0,
            y: 6.8,
            w: "100%",
            h: 0.75,
            fill: { color: "808080" },
          },
        },
        {
          text: {
            text: "Linon",
            options: {
              x: 6.0,
              y: 6.8,
              w: 5.8,
              h: 0.75,
              bold: true,
              fontSize: 22,
            },
          },
        },
      ],
      slideNumber: { x: 0.0, y: 6.8, h: 1.0, bold: true, fontSize: 20 },
    });

    let intslide = pres.addSlide({ masterName: "MASTER_SLIDE" });

    const sopt1 = {
      x: 4.5,
      y: 2.0,
      w: "100%",
      margin: 0.5,
      fontFace: "Arial",
      fontSize: 28,
      color: "CC0000",
      bold: true,
    };
    const sopt2 = {
      x: 5.5,
      y: 2.5,
      w: "100%",
      margin: 0.5,
      fontFace: "Arial",
      fontSize: 22,
      color: "000000",
      bold: true,
    };
    intslide.addText("Customer Presentation", sopt1);
    intslide.addText("Nandeswaran", sopt2);

    //product slide1
    pres.layout = "LAYOUT_WIDE";

    pres.defineSlideMaster({
      title: "PRODUCT_SLIDE",
      background: { color: "FFFFFF" },
      objects: [
        {
          image: {
            x: 0.3,
            y: 0.3,
            w: 0.5,
            h: 0.5,
            path: "https://i.ibb.co/M6gQQJL/download.jpg",
          },
        },
        {
          rect: {
            x: 0.0,
            y: 6.8,
            w: "100%",
            h: 0.75,
            fill: { color: "808080" },
          },
        },
        {
          text: {
            text: "Linon",
            options: {
              x: 6.0,
              y: 6.8,
              w: 5.8,
              h: 0.75,
              bold: true,
              fontSize: 22,
            },
          },
        },
      ],
      slideNumber: { x: 0.0, y: 6.8, h: 1.0, bold: true, fontSize: 20 },
    });

    let slide1 = pres.addSlide({ masterName: "PRODUCT_SLIDE" });
    slide1.addImage({
      path: "https://i.ibb.co/GnvxL5p/blacksofa.jpg",
      x: "8%",
      y: "8%",
      h: "70%",
      w: "35%",
    });

    slide1.addText("PORTER BLACK SOFA ", {
      x: 6.0,
      y: 0.8,
      w: "100%",
      h: 0.75,
      bold: true,
      fontSize: 26,
      color: "CC0000",
    });
    slide1.addText("FURPR01", {
      x: 6.0,
      y: 1.1,
      w: "100%",
      h: 0.75,
      fontSize: 20,
    });
    slide1.addText("$200", {
      x: 6.0,
      y: 1.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide1.addText(
      "Better-quality pieces have foam covered by batting enclosed in muslin.Knead the frame along back, rail, corners and arms.",
      { x: 6.0, y: 2.4, w: "50%", h: 0.75, fontSize: 22 }
    );
    slide1.addText("Dimension: 78.25X20X10", {
      x: 6.0,
      y: 3.4,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide1.addText("Pack Qty: 1", {
      x: 6.0,
      y: 3.8,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide1.addText("Product Weight: 30kg", {
      x: 6.0,
      y: 4.2,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide1.addText("Trade Name: Powell", {
      x: 6.0,
      y: 4.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });

    //product slide2
    let slide2 = pres.addSlide({ masterName: "PRODUCT_SLIDE" });
    slide2.addImage({
      path: "https://i.ibb.co/1LYNyw2/chair.jpg",
      x: "8%",
      y: "8%",
      h: "70%",
      w: "35%",
    });

    slide2.addText("FLEXY CUB CHAIR ", {
      x: 6.0,
      y: 0.8,
      w: "100%",
      h: 0.75,
      bold: true,
      fontSize: 26,
      color: "CC0000",
    });
    slide2.addText("FURPR02", {
      x: 6.0,
      y: 1.1,
      w: "100%",
      h: 0.75,
      fontSize: 20,
    });
    slide2.addText("$100", {
      x: 6.0,
      y: 1.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide2.addText(
      "Finished piece of furniture prior to the upholstering, the frame establishes the final quality, including its durability, and sets limits upon the final design.",
      { x: 6.0, y: 2.4, w: "50%", h: 0.75, fontSize: 22 }
    );
    slide2.addText("Dimension: 40X20X10", {
      x: 6.0,
      y: 3.4,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide2.addText("Pack Qty: 1", {
      x: 6.0,
      y: 3.8,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide2.addText("Product Weight: 5kg", {
      x: 6.0,
      y: 4.2,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide2.addText("Trade Name: Powell", {
      x: 6.0,
      y: 4.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });

    //product slide3
    let slide3 = pres.addSlide({ masterName: "PRODUCT_SLIDE" });
    slide3.addImage({
      path: "https://i.ibb.co/GR3sfyD/halldesign.jpg",
      x: "8%",
      y: "8%",
      h: "70%",
      w: "35%",
    });

    slide3.addText("INTERIOR HALL SET ", {
      x: 6.0,
      y: 0.8,
      w: "100%",
      h: 0.75,
      bold: true,
      fontSize: 26,
      color: "CC0000",
    });
    slide3.addText("FURPR03", {
      x: 6.0,
      y: 1.1,
      w: "100%",
      h: 0.75,
      fontSize: 20,
    });
    slide3.addText("$500", {
      x: 6.0,
      y: 1.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide3.addText(
      "Fabric set are the most bought sofa sets as it is the most comfortable type of sofa and is available in a wide diversity of colours and sizes.",
      { x: 6.0, y: 2.4, w: "50%", h: 0.75, fontSize: 22 }
    );
    slide3.addText("Dimension: 70.75X30.25X10.20", {
      x: 6.0,
      y: 3.4,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide3.addText("Pack Qty: 1", {
      x: 6.0,
      y: 3.8,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide3.addText("Product Weight: 50kg", {
      x: 6.0,
      y: 4.2,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide3.addText("Trade Name: Powell", {
      x: 6.0,
      y: 4.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });

    //product slide3
    let slide4 = pres.addSlide({ masterName: "PRODUCT_SLIDE" });
    slide4.addImage({
      path: "https://i.ibb.co/kSQ3p3b/img1.jpg",
      x: "8%",
      y: "8%",
      h: "70%",
      w: "35%",
    });

    slide4.addText("RIGID STUDY CHAIR ", {
      x: 6.0,
      y: 0.8,
      w: "100%",
      h: 0.75,
      bold: true,
      fontSize: 26,
      color: "CC0000",
    });
    slide4.addText("FURPR04", {
      x: 6.0,
      y: 1.1,
      w: "100%",
      h: 0.75,
      fontSize: 20,
    });
    slide4.addText("$150", {
      x: 6.0,
      y: 1.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide4.addText(
      "Leather chairs are purely made up of leather making them long-lasting and easy to clean. Leatherette chairs are the cheapest of the lot.",
      { x: 6.0, y: 2.4, w: "50%", h: 0.75, fontSize: 22 }
    );
    slide4.addText("Dimension: 30X40X8", {
      x: 6.0,
      y: 3.4,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide4.addText("Pack Qty: 1", {
      x: 6.0,
      y: 3.8,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide4.addText("Product Weight: 15kg", {
      x: 6.0,
      y: 4.2,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });
    slide4.addText("Trade Name: Powell", {
      x: 6.0,
      y: 4.6,
      w: "100%",
      h: 0.75,
      fontSize: 22,
    });

    //last slide
    pres.layout = "LAYOUT_WIDE";

    pres.defineSlideMaster({
      title: "LAST_SLIDE",
      background: { color: "FFFFFF" },
      objects: [
        {
          image: {
            x: 0.3,
            y: 0.3,
            w: 0.5,
            h: 0.5,
            path: "https://i.ibb.co/M6gQQJL/download.jpg",
          },
        },
        {
          rect: {
            x: 0.0,
            y: 6.8,
            w: "100%",
            h: 0.75,
            fill: { color: "808080" },
          },
        },
        {
          text: {
            text: "Linon",
            options: {
              x: 6.0,
              y: 6.8,
              w: 5.8,
              h: 0.75,
              bold: true,
              fontSize: 22,
            },
          },
        },
      ],
      slideNumber: { x: 0.0, y: 6.8, h: 1.0, bold: true, fontSize: 20 },
    });

    let slideL = pres.addSlide({ masterName: "LAST_SLIDE" });
    slideL.addText("THANK Q", {
      x: 6.0,
      y: 2.5,
      w: "50%",
      h: 1.5,
      fontSize: 26,
      bold: true,
      color: "CC0000",
    });

    pres.writeFile({ fileName: "kupexSlides.pptx" });
  };

  return (
    <div >
      <Typography
        variant="h5"
        color="gray"
        sx={{ p: 3, pb: 1, pt: 1 }}
        data-aos="zoom-in-up"
        
      >
        Create Presentation
      </Typography>
      <Card data-aos="zoom-in-up" >
        <CardContent>
          <Grid container sx={{ pb: 2 }}>
            <Grid item lg={3} md={12} xs={12} alignSelf="center">
              <CustomFormLabel htmlFor="productslist">Products</CustomFormLabel>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
              <Box>
                <Autocomplete
                  multiple
                  limitTags={2}
                  id="checkboxes-tags-demo"
                  options={pList}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => {
                    console.log(value);
                    // const products = value.map((value) => value.label);
                    // setpresentationValue({
                    //   ...presentationValue,
                    //   productList: value,
                    // });
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
                      size="small"
                      aria-label="Products"
                      fullWidth
                    />
                  )}
                />
                {/* <Autocomplete
                  multiple
                  limitTags={2}
                  id="productslist"
                  options={pList}
                  getOptionLabel={(option) => option.label}
                  defaultValue={[]}
                  fullWidth
                  // value={row.access}
                  onChange={(event, value) => {
                    console.log(value);
                    const products = value.map((value) => value.label);
                    setpresentationValue({
                      ...presentationValue,
                      productList: value,
                    });
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
                /> */}
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ pb: 2 }}>
            <Grid item lg={3} md={12} xs={12} alignSelf="center">
              <CustomFormLabel htmlFor="customer">Customer</CustomFormLabel>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
              <CustomSelectField
                margin="dense"
                id="customer"
                value={presentationValue.customer}
                onChange={(e) => {
                  // alert(e.target.value)
                  setpresentationValue({
                    ...presentationValue,
                    customer: e.target.value,
                  });
                }}
                fullWidth
                variant="outlined"
                size="small"
              >
                {customerList.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </CustomSelectField>
            </Grid>
          </Grid>
          <Grid container sx={{ pb: 5 }}>
            <Grid item lg={3} md={12} xs={12} alignSelf="center">
              <CustomFormLabel htmlFor="date">Date</CustomFormLabel>
            </Grid>
            <Grid item lg={9} md={12} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    inputFormat="DD/MM/YYYY"
                    value={presentationValue.date}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
              {/* <CustomTextField
                id="date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                value={presentationValue.date}
                onChange={(e) => {
                  setpresentationValue({
                    ...presentationValue,
                    date: e.target.value,
                  });
                }}
              /> */}
            </Grid>
          </Grid>
          <Box textAlign="right">
            <Fab
              onClick={createPPT}
              sx={{
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
                Create Presentation
              </Typography>
            </Fab>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default index;
