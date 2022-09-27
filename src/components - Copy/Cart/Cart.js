import React from 'react'
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Button,
    Typography,
    Menu,
    Chip,
    MenuItem,
    Divider,
    Drawer,
  } from "@mui/material";
import Image from "next/image";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addorderlist } from '../../store/OrderProductList/Action';
import { useRouter } from 'next/router';

function Cart({showDrawer,setShowDrawer}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const Shopitems = useSelector(
        (state) => state.CardProductList.productList
      );

    return (
        <Drawer
            anchor="right"
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: {
                        xs: "100%",
                        sm: "395px",
                    },
                    padding: "30px",
                },
            }}
        >
            <Box display="flex" alignItems="center">
                <Typography variant="h4">Shopping Cart</Typography>
                <Box sx={{ ml: "auto" }}>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowDrawer(false)}
                        sx={{
                            color: (theme) => theme.palette.grey.A200,
                        }}
                    >
                        <MdOutlineClose />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <Box>
                    {Shopitems.map((product) => {
                        return (
                            <Box key={product.id}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{ pt: 2, pb: 2 }}
                                >
                                    <Image
                                        src={product.productImage}
                                        alt={product.productTitle}
                                        height="100px"
                                        width="150px"
                                    />
                                    <Box sx={{ ml: 2, width: "100%" }}>
                                        <Typography variant="h6" color="GrayText">{product.productID}</Typography>
                                        <Typography variant="h5">{product.productTitle}</Typography>
                                        <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                                            <Typography variant="h5" sx={{ mr: "auto" }}>
                                                Qty: {product.productQuantity} 
                                            </Typography>
                                            <Typography variant="h5">{product.productPrice}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                        );
                    })}
                </Box>
                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h5" style={{ fontWeight: "400" }}>
                        Sub Total
                    </Typography>
                    <Box sx={{ ml: "auto" }}>
                        <Typography variant="h5" sx={{ color: "primary.main" }}>
                            $72
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="h5" style={{ fontWeight: "400" }}>
                        Total
                    </Typography>
                    <Box sx={{ ml: "auto" }}>
                        <Typography variant="h5" sx={{ color: "primary.main" }}>
                            $72
                        </Typography>
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    style={{
                        textTransform: "capitalize",
                    }}
                    sx={{
                        mt: 2,
                        display: "block",
                        width: "100%",
                        backgroundColor: "secondary.main",
                    }}
                    onClick={(e)=>{
                        e.preventDefault();
                        dispatch(addorderlist(Shopitems));
                        router.push("/supplier/products/placeorder");
                        setShowDrawer(false);
                      }}
                >
                    Place Order
                </Button>
            </Box>
        </Drawer>
    )
}

export default Cart