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
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { FiCheck, FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";
import { MdBorderColor, MdCheck, MdCheckBox, MdClose } from "react-icons/md";
import img1 from "../../../../assests/images/shop/img1.jpg";
import { useRouter } from "next/router";
const OrderDetail = () => {
  const router = useRouter();
  const { status } = router.query;
  console.log(status);
  return (
    <Card data-aos="zoom-in-up">
      <CardContent>
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
            <Grid container spacing={1} sx={{ p: 2, pl: 0, pr: 0 }}>
              <Grid item lg={3} md={3} sm={4} xs={12} textAlign="center">
                <Image
                  src={img1}
                  height="130px"
                  width="150px"
                  style={{
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item lg={9} md={9} sm={8} xs={12} alignSelf="center">
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h4">The sectional modular</Typography>
                  <Typography color="textSecondary" variant="h5">
                    19A6079S
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                    <Typography variant="h6" sx={{ mr: "auto", mt: 1 }}>
                      Quantity : 1
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      Price : $89
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider />
          </Grid>
          <Grid
            item
            lg={3}
            md={12}
            sm={12}
            xs={12}
            alignSelf="center"
            sx={{ mt: 2 }}
          >
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
          <Grid item lg={3} md={12} sm={12} xs={12} />
          <Grid item lg={9} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            {status === "Pending" ? (
              <>
              
                <Button  color="error" sx={{m:1,ml:0}} variant="outlined">Reject</Button>
                {/* <Fab
                  size="medium"
                  variant="extended"
                  color="error"
                  aria-label="medium-bell"
                  sx={{ mx: 1, borderRadius: "6px" }}
                >
                  <FiXCircle
                    fontSize="small"
                    icon="bell"
                    width="18"
                    height="18"
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    Reject
                  </Typography>
                </Fab> */}
                <Button  color="success" sx={{m:1,ml:0}} variant="outlined" >Approve</Button>
                {/* <Fab
                  size="medium"
                  variant="extended"
                  color="success"
                  aria-label="medium-bell"
                  sx={{ borderRadius: "6px" }}
                >
                  <FiCheckCircle
                    fontSize="small"
                    icon="bell"
                    width="18"
                    height="18"
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    Approve
                  </Typography>
                </Fab> */}
              </>
            ) : status === "Approved" ? (
              <>
                <Button  color="success" sx={{m:1,ml:0}} variant="outlined" >Approved</Button>
                {/* <Fab
                  size="medium"
                  variant="extended"
                  color="success"
                  aria-label="medium-bell"
                  sx={{ borderRadius: "6px" }}
                >
                  <FiCheckCircle
                    fontSize="small"
                    icon="bell"
                    width="18"
                    height="18"
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    Approved
                  </Typography>
                </Fab> */}
              </>
            ) : (
              <>
                <Button  color="error" sx={{m:1,ml:0}} variant="outlined" >Rejected</Button>
                {/* <Fab
                  size="medium"
                  variant="extended"
                  color="error"
                  aria-label="medium-bell"
                  sx={{ mx: 1, borderRadius: "6px" }}
                >
                  <FiXCircle
                    fontSize="small"
                    icon="bell"
                    width="18"
                    height="18"
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    Rejected
                  </Typography>
                </Fab> */}
              </>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderDetail;
