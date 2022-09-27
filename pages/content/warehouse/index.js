import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
} from "@mui/material";
import dynamic from "next/dynamic";
const Warehouses = dynamic(
  () => import("../../../src/components - Copy/warehouseMap/Warehouses"),
  { ssr: false }
);

function index() {
  return (
    <div>
      <Typography
        variant="h5"
        color="gray"
        sx={{ p: 3, pb: 1, pt: 1 }}
        data-aos="zoom-in-up"
      >
        Warehouse
      </Typography>
      <Card data-aos="zoom-in-up">
        <CardContent>
          <Warehouses />
        </CardContent>
      </Card>
    </div>
  );
}

export default index;
