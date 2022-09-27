import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  CardContent,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const index = (props) => {
  const { productItems } = props;
  return (
    <Grid container spacing={0}>
      {productItems.map((product) => (
        <Grid
          item
          xs={12}
          lg={3}
          sm={4}
          display="flex"
          alignItems="stretch"
          key={product.id}
          data-aos="zoom-in"
        >
          <motion.div
            style={{ padding: "14px" }}
            // initial={{ y: -250 }}
            // animate={{ y: -10 }}
            whileHover={{ scaleY: 1.1, scaleX: 1.109 }}
          >
            <NextLink
              href={`/supplier/products/detail/${product.id}`}
              style={{ cursor: "pointer" }}
            >
              <Card
                sx={{ p: 0, width: "100%", m: { xs: 0 }, cursor: "pointer" }}   data-aos="zoom-in" data-aos-duration="500"
              >
                <motion.div whileTap={{ scale: 1.06 }}>
                  <img
                    src={product.productImage}
                    alt="img"
                    height="260px"
                    width="100%"
                  />
                </motion.div>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="caption">{product.productID}</Typography>
                  <Typography
                    fontWeight="500"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      cursor: "pointer",
                      color: (theme) =>
                        `${
                          theme.palette.mode === "dark"
                            ? theme.palette.grey.A200
                            : "rgba(0, 0, 0, 0.87)"
                        }`,
                    }}
                  >
                    {product.productTitle}
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                      mt: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={{ mr: "auto" }}>
                      {product.productPrice}
                    </Typography>
                    <Typography variant="h5">
                      Qty : {product.productQuantity}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </NextLink>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export async function getServerSideProps(context) {
  // let data = await fetch('http://localhost:3000/api/product/allproduct')
  // let {productItems} = await data.json()

  return {
    props: {
      productItems: [
        {
          productTitle: "The rough wood",
          productID: "2A6079S",
          productCategory: "wood",
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
          productTitle: "The Night glar Wood",
          productID: "2A6071S",
          productCategory: "Glar wood",
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
          productTitle: "The wooden Bench",
          productID: "226071S",
          productCategory: "Wooden Bench",
          productPrice: "$45",
          productQuantity: "5",
          productImage: "/images/shop/img7.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 3,
        },
        {
          productTitle: "Best Solid chairs",
          productID: "326071S",
          productCategory: "chairs",
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
        {
          productTitle: "Circle sofa",
          productID: "19A9079S",
          productCategory: "Sofa shop",
          productPrice: "$12",
          productQuantity: "5",
          productImage: "/images/shop/img5.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 5,
        },
        {
          productTitle: "The classic round arm",
          productID: "19A1079S",
          productCategory: "Sofa shop",
          productPrice: "$87",
          productQuantity: "5",
          productImage: "/images/shop/img6.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 6,
        },
        {
          productTitle: "The square arm sofa",
          productID: "19A6179S",
          productCategory: "Sofa shop",
          productPrice: "$45",
          productQuantity: "5",
          productImage: "/images/shop/img3.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 7,
        },
        {
          productTitle: "The hard wedge arm",
          productID: "19A6009S",
          productCategory: "Sofa shop",
          productPrice: "$123",
          productQuantity: "5",
          productImage: "/images/shop/img8.jpg",
          productImage1: "",
          productImage2: "",
          productImage3: "",
          productDesc: "",
          productAssemblyInstruction: "",
          id: 8,
        },
        
      ],
    }, // will be passed to the page component as props
  };
}
export default index;
