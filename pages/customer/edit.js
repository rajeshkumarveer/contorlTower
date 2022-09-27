import React from "react";
import Image from "next/image";
import {
  Card,
  Grid,
  Typography,
  Button,
  Autocomplete,
  CardContent,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import av1 from "../../assets/images/users/1.jpg";
import CustomTextField from "../../src/components - Copy/forms/CustomElements/CustomTextField";
import CustomFormLabel from "../../src/components - Copy/forms/CustomElements/CustomFormLabel";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Teams = [
  {
    id: "sp1",
    label: "Sales Person 1",
  },
  {
    id: "sp2",
    label: "Sales Person 2",
  },
  {
    id: "sp3",
    label: "Sales Person 3",
  },
  {
    id: "sp4",
    label: "Sales Person 4",
  },
];

function edit() {
  const [text, setText] = React.useState("");
  return (
    <Grid container spacing={0} >
      <Grid item lg={5} md={12} xs={12}>
        <Card sx={{ p: 3 }} data-aos="zoom-in-up"  >
          <Image
            alt="Remy Sharp"
            src={av1}
            width="110"
            height="110"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="h2" sx={{ mt: 1 }}>
            Nirav Joshi
          </Typography>
          <Typography variant="body2">Surya Furniture</Typography>
          <Typography variant="h6" fontWeight="600" sx={{ mt: 3, mb: 1 }}>
            Address
          </Typography>
          <Typography variant="body2">
            11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New York, USA
          </Typography>
          <Button color="error" variant="contained" sx={{ mt: 3 }}>
            Delete Account
          </Button>
        </Card>
        <Card  data-aos="zoom-in-up"  >
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h2" sx={{ mt: 1 }}>
              Notes
            </Typography>
            <Box
              display="flex"
              alignItems="flex-start"
              sx={{
                my: 2,
              }}
            >
              <Box flexShrink={0}>
                <Image
                  alt="Remy Sharp"
                  src={av1}
                  width="45"
                  height="45"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5">James Anderson</Typography>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Lorem Ipsum is simply dummy text of the printing and type
                  etting industry
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Chip
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.light,
                      color: (theme) => theme.palette.primary.dark,
                      borderRadius: "15px",
                      pl: "3px",
                      pr: "3px",
                    }}
                    size="small"
                    label="Active"
                  />
                  <Typography
                    color="textSecondary"
                    variant="caption"
                    fontWeight="400"
                  >
                    April 14, 2021
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              display="flex"
              alignItems="flex-start"
              sx={{
                my: 2,
              }}
            >
              <Box flexShrink={0}>
                <Image
                  alt="Remy Sharp"
                  src={av1}
                  width="45"
                  height="45"
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography variant="h5">James Anderson</Typography>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Lorem Ipsum is simply dummy text of the printing and type
                  etting industry
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  <Chip
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.light,
                      color: (theme) => theme.palette.primary.dark,
                      borderRadius: "15px",
                      pl: "3px",
                      pr: "3px",
                    }}
                    size="small"
                    label="Active"
                  />
                  <Typography
                    color="textSecondary"
                    variant="caption"
                    fontWeight="400"
                  >
                    April 14, 2021
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
          </CardContent>
        </Card>
        <Card  data-aos="zoom-in-up"  >
          <CardContent>
            <ReactQuill
              value={text}
              onChange={(value) => setText(value)}
              placeholder="Type here.."
            />
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: (theme) => theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
                color: "#fff",
                borderRadius: "6px",
              }}
            >
              Add
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={7} md={12} xs={12}>
        <Card sx={{ p: 3 }} data-aos="zoom-in-up"  >
          <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
            Edit Details
          </Typography>
          <form>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField
              id="name"
              variant="outlined"
              defaultValue="Nirav Joshi"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="Email">Email</CustomFormLabel>
            <CustomTextField
              id="Email"
              variant="outlined"
              defaultValue="nirav@suryafurniture.com"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="project">Company Name</CustomFormLabel>
            <CustomTextField
              id="project"
              variant="outlined"
              defaultValue="Surya Furniture"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="project-details">
              Company Description
            </CustomFormLabel>
            <CustomTextField
              id="project-details"
              variant="outlined"
              multiline
              rows={4}
              defaultValue="Surya is a leading manufacturer of high-quality, fashion-forward area rugs and coordinating home accessories. 
              Surya Furniture can be a product of design and is considered a form of decorative art. In addition "
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel>Sales Person</CustomFormLabel>

            <Autocomplete
              multiple
              id="tags-outlined"
              options={Teams}
              getOptionLabel={(option) => option.label}
              defaultValue={[Teams[1]]}
              filterSelectedOptions
              renderInput={(params) => (
                <CustomTextField
                  {...params}
                  placeholder="users"
                  size="small"
                  aria-label="users"
                  sx={{
                    mb: 3,
                  }}
                />
              )}
            />
            <CustomFormLabel htmlFor="week">Week</CustomFormLabel>
            <CustomTextField
              id="week"
              variant="outlined"
              defaultValue="40"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <CustomFormLabel htmlFor="Budget">Budget</CustomFormLabel>
            <CustomTextField
              id="Budget"
              variant="outlined"
              defaultValue="$2.4K"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />

            <Button color="primary" variant="contained">
              Update
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

export default edit;
