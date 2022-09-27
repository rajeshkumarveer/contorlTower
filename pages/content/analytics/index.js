import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Grid,
  MenuItem,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import CustomFormLabel from "../../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import CustomTextField from "../../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomSelect from "../../../src/components - Copy/forms/CustomElements/CustomSelectField";

import Checkbox from "@mui/material/Checkbox";

const Analytics = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const success = theme.palette.success.main;
  const error = theme.palette.error.main;
  const info = theme.palette.info.main;
  const warning = theme.palette.warning.main;

  const optionsproductperformance = {
    chart: {
      type: "bar",
      height: 265,
      stacked: true,
      // toolbar: {
      //   show: false,
      // },
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

  const optionsproductperformance1 = {
    chart: {
      type: "bar",
      height: 265,
      stacked: true,
      // toolbar: {
      //   show: false,
      // },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 9,
      },
    },
    colors: [success, warning],
    fill: {
      type: "solid",
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
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
  const seriesproductperformance1 = [
    {
      name: "Expence",
      data: [330, 300, 180, 320, 250, 300, 300],
    },
    {
      name: "Budget",
      data: [60, 90, 80, 60, 70, 100, 80],
    },
  ];

  const gradienChartOption = {
    chart: {
      height: 350,
      type: "line",
      // toolbar: {
      //   show: false,
      // },
    },

    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    title: {
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: [error],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
    },
  };
  const gradientChartSeries = [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  const radarOption = {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    // title: {
    //   text: "Radar Chart - Multi Series",
    // },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
  };
  const radarSeries = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const radarPolyOption = {
    chart: {
      height: 350,
      type: "radar",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    // title: {
    //   text: "Radar with Polygon Fill",
    // },
    colors: ["#FF4560"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  };
  const radarPolySeries = [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ];

  const StepOption = {
    chart: {
      type: "line",
      height: 350,
    },
    stroke: {
      curve: "stepline",
    },
    dataLabels: {
      enabled: false,
    },
    // title: {
    //   text: "Stepline Chart",
    //   align: "left",
    // },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
  };

  const StepSeries = [{ data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58] }];

  const radialOption = {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Annual Progress"],
  };
  const radialSeries = [67];

  const polarOption = {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
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
  const polarSeries = [14, 23, 21, 17, 15, 10, 12, 17, 21];

  const lineColOption = {
    chart: {
      height: 350,
      type: "line",
      fontFamily: "'DM Sans',sans-serif",
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Sales",
        },
      },
      {
        opposite: true,
        title: {
          text: "Marketing",
        },
      },
    ],
  };
  const lineColSeries = [
    {
      name: "Sales",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Marketing",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];

  const splineOption = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  const splineSeries = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const [dept, setDept] = useState("Sales");
  const handleChangeDept = (e) => {
    setDept(e.target.value);
  };

  const [sortby, setSortBy] = useState("Week");
  const handleChangeSort = (e) => {
    setSortBy(e.target.value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Employee Name</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter text"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Employee ID</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter text"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name">Performance</CustomFormLabel>
                <CustomTextField
                  id="name"
                  placeholder="Enter text"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                  Department
                </CustomFormLabel>
                <CustomSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dept}
                  onChange={handleChangeDept}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Pre Sales">Pre Sales</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                  Sort By
                </CustomFormLabel>
                <CustomSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortby}
                  onChange={handleChangeSort}
                  fullWidth
                  size="small"
                >
                  <MenuItem value="Week">Week</MenuItem>
                  <MenuItem value="Month">Month</MenuItem>
                  <MenuItem value="Year">Year</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                  Checkbox
                </CustomFormLabel>
                <FormControlLabel
                  label="Label"
                  control={
                    <Checkbox
                      label="Child 1"
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                  Radio button
                </CustomFormLabel>
                <FormControlLabel
                  sx={{ mt: 0 }}
                  value="Radio"
                  control={<Radio />}
                  label="Radio 1"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                  Radio button
                </CustomFormLabel>
                <FormControlLabel
                  sx={{ mt: 0 }}
                  value="Radio"
                  control={<Radio />}
                  label="Radio 2"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={4}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
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
      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={optionsproductperformance1}
                series={seriesproductperformance1}
                type="bar"
                height="265"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={gradienChartOption}
                series={gradientChartSeries}
                type="line"
                height="350"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={radarOption}
                series={radarSeries}
                type="radar"
                height="350"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={radarPolyOption}
                series={radarPolySeries}
                type="radar"
                height="350"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={StepOption}
                series={StepSeries}
                type="line"
                height={350}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={radialOption}
                series={radialSeries}
                type="radialBar"
                height={350}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={polarOption}
                series={polarSeries}
                type="polarArea"
                height={350}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={splineOption}
                series={splineSeries}
                type="area"
                height={350}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} data-aos="zoom-in-up">
        <Card>
          <CardContent>
            <Box>
              <Chart
                options={lineColOption}
                series={lineColSeries}
                type="line"
                height={350}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Analytics;
