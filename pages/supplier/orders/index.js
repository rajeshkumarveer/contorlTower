import React, { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiClock,
  FiCommand,
  FiShoppingCart,
  FiTruck,
} from "react-icons/fi";

import img1 from "../../../assests/images/shop/img1.jpg";
import img2 from "../../../assests/images/shop/img2.jpg";
import img3 from "../../../assests/images/shop/img3.jpg";
import img4 from "../../../assests/images/shop/img4.jpg";

// Timeline
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { motion } from "framer-motion";

const rows = [
  {
    id: 1,
    imgsrc: img1,
    pname: "The sectional/modular",
    // customer: "Dhanush",
    status: "Delivered",
    price: "123.00",
    quantity: "3",
  },
  {
    id: 2,
    imgsrc: img2,
    pname: "The classic round arm",
    // customer: "Rajesh",
    status: "In Process",
    price: "123.00",
    quantity: "3",
  },
  {
    id: 3,
    imgsrc: img3,
    pname: "The square arm sofa",
    // customer: "Dhanush",
    status: "In Process",
    price: "123.00",
    quantity: "3",
  },
  {
    id: 4,
    imgsrc: img4,
    pname: "The hard wedge arm",
    // customer: "In Process",
    status: "Delivered",
    price: "123.00",
    quantity: "3",
  },
];

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell sx={{ border: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <Image
            height="80"
            width="100"
            style={{ borderRadius: "10px" }}
            src={row.imgsrc}
            alt={row.pname}
          />
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <Typography variant="h5" fontWeight="400">
            {row.pname}
          </Typography>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <Chip
            sx={{
              backgroundColor:
                row.status === "Delivered"
                  ? (theme) => theme.palette.success.light
                  : row.status === "In Process"
                  ? (theme) => theme.palette.error.light
                  : (theme) => theme.palette.secondary.light,
              color:
                row.status === "Delivered"
                  ? (theme) => theme.palette.success.main
                  : row.status === "In Process"
                  ? (theme) => theme.palette.error.main
                  : (theme) => theme.palette.secondary.main,
              borderRadius: "6px",
              pl: "3px",
              pr: "3px",
            }}
            size="small"
            label={row.status}
          />
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <Typography color="textSecondary" variant="h5" fontWeight="400">
            {row.price}
          </Typography>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <Typography color="textSecondary" variant="h5" fontWeight="400">
            {row.quantity}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Timeline sx={{ color: "rgba(0, 0, 0, 0.87)" }}>
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6" color="textSecondary">
                        11/11/2012, Tuesday
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        04:30 am
                      </Typography>
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color="primary"
                      sx={{
                        p: 1,
                      }}
                    >
                      <FiTruck style={{ height: "22px", width: "22px" }} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box
                      sx={{
                        backgroundColor: "primary.light",
                        p: 2,
                        borderRadius: 6,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="400"
                        component="span"
                      >
                        Order Picked
                      </Typography>
                      <Typography variant="h5" fontWeight="400">
                        Pending Merchant Action
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <TimelineItem
                  sx={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <TimelineOppositeContent
                    sx={{
                      m: "auto 0",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                    align="left"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6" color="textSecondary">
                        11/11/2012, Tuesday
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        04:30 am
                      </Typography>
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color="secondary"
                      sx={{
                        p: 1,
                      }}
                    >
                      <FiCalendar style={{ height: "22px", width: "22px" }} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box
                      sx={{
                        backgroundColor: "secondary.light",
                        p: 2,
                        borderRadius: 6,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="400"
                        component="span"
                      >
                        Product Proccessing
                      </Typography>
                      <Typography variant="h5" fontWeight="400">
                        Pending Approval
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6" color="textSecondary">
                        11/11/2012, Tuesday
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        04:30 am
                      </Typography>
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color="warning"
                      sx={{
                        p: 1,
                      }}
                    >
                      <FiShoppingCart
                        style={{ height: "22px", width: "22px" }}
                      />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box
                      sx={{
                        backgroundColor: "warning.light",
                        p: 2,
                        borderRadius: 6,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="400"
                        component="span"
                      >
                        Order Status
                      </Typography>
                      <Typography variant="h5" fontWeight="400">
                        Picked by delivery truck
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                <TimelineItem
                  sx={{ display: "flex", flexDirection: "row-reverse" }}
                >
                  <TimelineOppositeContent
                    sx={{
                      m: "auto 0",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Box display="flex" flexDirection="column">
                      <Typography variant="h6" color="textSecondary">
                        11/11/2012, Tuesday
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        04:30 am
                      </Typography>
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color="success"
                      sx={{
                        p: 1,
                      }}
                    >
                      <FiCheck style={{ height: "22px", width: "22px" }} />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box
                      sx={{
                        backgroundColor: "success.light",
                        p: 2,
                        borderRadius: 6,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="400"
                        component="span"
                      >
                        Status
                      </Typography>
                      <Typography variant="h5" fontWeight="400">
                        Order Delivered
                      </Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            </Timeline>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const Orders = () => {
  return (
    <Card data-aos="zoom-in-up">
      <CardContent>
        <TableContainer
          style={{ padding: 0, boxShadow: "none" }}
          component={Paper}
        >
          <Table
            aria-label="collapsible table"
            sx={{ whiteSpace: { xs: "nowrap", sm: "unset" } }}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant="h5">Orders</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Products</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Total</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h5">Quantity</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return <Row key={row.id} row={row} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Orders;
