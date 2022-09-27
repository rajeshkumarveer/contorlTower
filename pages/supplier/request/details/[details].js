import {
    Box,
    Card,
    CardContent,
    Grid,
    Link,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography, Button, Chip
} from "@mui/material";
import React from "react";
import Next from "next/link";
import CustomFormLabel from "../../../../src/components - Copy/forms/CustomElements/CustomFormLabel"
import CustomTextField from "../../../../src/components - Copy/forms/CustomElements/CustomTextField";

const index = () => {
    let status = "Pending";
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={8}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" sx={{ my: 1 }} fontWeight="500">
                            Company Contact
                        </Typography>

                        <ListItem
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}
                        >
                            <ListItemAvatar>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    width="60px"
                                    height="60px"
                                    className="roundedCircle"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    ml: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                primary={
                                    <Typography variant="h5" fontWeight="500">
                                        Kaar Technologies
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        variant="caption"
                                        fontWeight="400"
                                        color="text.secondary"
                                    >
                                        21/07/2020
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Address 1 :
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        Shyamala Towers, 136, Arcot Road, Velayutham Colony,
                                        Saligramam, Chennai, Tamil Nadu 600093
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Telephone :
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        +91 12233267777
                                    </Typography>
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Email :
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        kaar@gmail.com
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Website :
                                    </CustomFormLabel>
                                    <Link href="#">kaartech</Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h4" sx={{ my: 1 }} fontWeight="500">
                            Company Overview
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        General details of Services / Goods :
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        We are providing high technology SAAS product.
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Business Type
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        Pure play SAP
                                    </Typography>
                                </Box>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        Gross Annual Sale
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        97%
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                        License Number
                                    </CustomFormLabel>
                                    <Typography variant="h6" fontWeight="400">
                                        283273627526
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" fontWeight="h5" sx={{ my: 1 }}>
                            Licensed Overview
                        </Typography>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Legal Structure :
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                Approved
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Years Previously registered :
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                2019
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Bonded :
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                Yes
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography variant="h4" fontWeight="h5" sx={{ my: 1 }}>
                            Certification
                        </Typography>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Name / Title :
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                Kaar Certification
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Title :
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                Kaar Certifies
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <CustomFormLabel sx={{ mt: 2 }} htmlFor="Name">
                                Date
                            </CustomFormLabel>
                            <Typography variant="h6" fontWeight="400">
                                08/06/2001
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12}></Grid>
            <Grid item lg={4} md={12} sm={12} xs={12} sx={{ mt: 2 , mb: 4 }} >
                {status === "Pending" ? (
                    <>
                        <Next href={`/supplier/request/`}>
                            <Button color="error" sx={{ m: 1, ml: 0 }} variant="outlined">Reject</Button>
                        </Next>
                        <Next href={`/supplier/request/`}>
                            <Button color="success" sx={{ m: 1, ml: 2 }} variant="outlined" >Approve</Button>
                        </Next>
                    </>
                ) : status === "Approved" ? (
                    <>
                        <Box sx={{ ml: "auto" }}>
                            <Chip
                                color="success"
                                size="small"
                                label="Approved"
                                sx={{ borderRadius: "6px" }}
                            />
                        </Box>
                    </>
                ) : (
                    <>
                        <Box sx={{ ml: "auto" }}>
                            <Chip
                                color="error"
                                size="small"
                                label="Rejected"
                                sx={{ borderRadius: "6px" }}
                            />
                        </Box>
                    </>
                )}
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}></Grid>
        </Grid>
    );
};

export default index;
