import NextLink from "next/link";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SimpleBar from "simplebar-react";
import { useRouter } from "next/router";
import React from "react";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineListAlt,
  MdBorderColor,
  MdInsertComment,
  MdStoreMallDirectory,
  MdSettings,
  MdOutlineSpaceDashboard,
  MdOutlineAccountCircle,
} from "react-icons/md";
import {
  FaCaravan,
  FaIdBadge,
  FaTicketAlt,
  FaTrademark,
  FaTruck,
} from "react-icons/fa";
import { BiBarChartSquare, BiGroup, BiCategoryAlt } from "react-icons/bi";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineTeam, AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import {
  TbSettings,
  TbShoppingCartDiscount,
  TbAddressBook,
  TbFileSettings,
  TbDiscount,
  TbBuildingWarehouse,
  TbFileAnalytics,
  TbShip,
} from "react-icons/tb";
import {
  MdOutlineManageAccounts,
  MdOutlineLeaderboard,
  MdOutlineBorderColor,
  MdAppRegistration,
} from "react-icons/md";
import {
  FiTarget,
  FiClipboard,
  FiCalendar,
  FiUsers,
  FiUserPlus,
  FiShoppingBag,
  FiAward,
  FiPieChart,
  FiAirplay,
  FiUserCheck,
  FiCreditCard,
  FiTruck,
  FiDatabase,
  FiList,
  FiShieldOff,
} from "react-icons/fi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { HiOutlinePresentationChartBar, HiUserGroup } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { RiAdvertisementLine, RiEqualizerLine } from "react-icons/ri";
import { BsChatLeftDots } from "react-icons/bs";
import { CgController } from "react-icons/cg";

const FinalMenuList = [
  {
    navlabel: true,
    subheader: "DASHBOARDS",
    icon: "mdi mdi-dots-horizontal",
    href: "dashboard",
  },
  {
    title: "Dashboard 1",
    icon: <MdOutlineSpaceDashboard />,
    href: "/dashboard/dashboard1",
  },
  {
    title: "Dashboard 2",
    icon: <FiPieChart />,
    href: "/dashboard/dashboard2",
  },
  {
    navlabel: true,
    subheader: "DATA",
    icon: "mdi mdi-dots-horizontal",
    href: "content",
  },
  {
    title: "Management",
    icon: <FiAirplay />,
    href: "/content/management",
  },
  {
    title: "Control",
    icon: <CgController />,
    href: "/content/control",
  },
  {
    title: "Presentation",
    icon: <HiOutlinePresentationChartBar />,
    href: "/content/presentation",
  },
  {
    title: "Analytics",
    icon: <TbFileAnalytics />,
    href: "/content/analytics",
  },
  {
    navlabel: true,
    subheader: "CUSTOMER",
    icon: "mdi mdi-dots-horizontal",
    href: "customer",
  },
  {
    title: "Leads",
    icon: <MdOutlineLeaderboard />,
    href: "/customer",
  },
  {
    title: "Orders",
    icon: <FiShoppingBag />,
    href: "/customer/orders",
  },
  {
    title: "Tickets",
    icon: <IoTicketOutline />,
    href: "/partner/tickets",
  },
  {
    title: "Chat",
    icon: <BsChatLeftDots />,
    href: "/customer/chat",
  },
  {
    title: "Shipment",
    icon: <TbShip />,
    href: "/customer/shipment",
  },
  {
    navlabel: true,
    subheader: "CONFIG",
    icon: "mdi mdi-dots-horizontal",
    href: "configuration",
  },
  {
    title: "Discount",
    icon: <TbDiscount />,
    href: "/configuration/discount",
  },
  {
    title: "Employee",
    icon: <FiUserCheck />,
    href: "/configuration/employee",
  },
  {
    title: "Customer",
    icon: <FiUserPlus />,
    href: "/configuration/customer",
  },
  {
    title: "Address",
    icon: <FiCreditCard />,
    href: "/configuration/address",
  },
  {
    title: "Supplier",
    icon: <FiUsers />,
    href: "/configuration/supplier",
  },
  {
    title: "Carrier Account",
    icon: <FiTruck />,
    href: "/configuration/carrieraccount",
  },
  {
    title: "Product Category",
    icon: <BiCategoryAlt />,
    href: "/configuration/productcategory",
  },
  {
    title: "Module Access",
    icon: <IoAccessibilityOutline />,
    href: "/configuration/moduleaccess",
  },
  {
    title: "Account",
    icon: <MdOutlineAccountCircle />,
    href: "/configuration/account",
  },
  {
    navlabel: true,
    subheader: "TOOLS",
    icon: "mdi mdi-dots-horizontal",
    href: "tools",
  },
  {
    title: "Notes",
    icon: <CgNotes />,
    href: "/tools/notes",
  },
  {
    title: "Calendar",
    icon: <FiCalendar />,
    href: "/tools/calender",
  },
  {
    title: "Todos",
    icon: <FiClipboard />,
    href: "/tools/todo",
  },
  {
    navlabel: true,
    subheader: "TENDER",
    icon: "mdi mdi-dots-horizontal",
    href: "tender",
  },
  {
    title: "RFP",
    icon: <CgNotes />,
    href: "/tender/rfp",
  },
  {
    title: "Advertisement",
    icon: <RiAdvertisementLine />,
    href: "/tender/advertisement",
  },
  {
    title: "Evaluation",
    icon: <RiEqualizerLine />,
    href: "/tender/evaluation",
  },
  {
    title: "Award",
    icon: <FiAward />,
    href: "/tender/award",
  },
  // {
  //   navlabel: true,
  //   subheader: "PARTNER",
  //   icon: "mdi mdi-dots-horizontal",
  //   href: "partner",
  // },

  {
    navlabel: true,
    subheader: "SUPPLIER",
    icon: "mdi mdi-dots-horizontal",
    href: "supplier",
  },
  {
    title: "Tickets",
    icon: <IoTicketOutline />,
    href: "/partner/tickets",
  },
  {
    title: "Chat",
    icon: <BsChatLeftDots />,
    href: "/partner/chat",
  },
  {
    title: "Products",
    icon: <FiShoppingBag />,
    href: "/supplier/products",
  },
  {
    title: "My Orders",
    icon: <FiList />,
    href: "/supplier/orders",
  },
  {
    title: "Suppiler Registration",
    icon: <MdAppRegistration />,
    href: "/supplier/request",
  },
  {
    navlabel: true,
    subheader: "MISCELLANEOUS",
    icon: "mdi mdi-dots-horizontal",
    href: "additional",
  },
  {
    title: "Document store",
    icon: <FiDatabase />,
    href: "/documentstore",
  },
  {
    title: "Warehouse",
    icon: <TbBuildingWarehouse />,
    href: "/content/warehouse",
  },
];

function SideNavbar(
  { isMobileSidebarOpen, onSidebarClose, isSidebarOpen },
  props
) {
  console.log(props);
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const pathDirect = router.pathname;
  const location = router.pathname;
  const pathWithoutLastPart = router.pathname.slice(
    0,
    router.pathname.lastIndexOf("/")
  );
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
      console.log(location);
    } else {
      setOpen(index);
    }
  };
  const SidebarContent = (
    <SimpleBar style={{ height: "100%" }}>
      <Box p={2} height="100%">
        <Box
          pt={2}
          sx={{
            fontSize: "h2.fontSize",
            fontWeight: "bold",
            textAlign: "center",
            color: "#EB5757",
          }}
        >
          KUPEX
        </Box>
        <Box mt={2}>
          <List>
            {FinalMenuList.map((item, index) => {
              //  {/********SubHeader**********/}
              if (item.subheader) {
                return (
                  <li key={item.subheader}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      sx={{ my: 2, mt: 4, opacity: "0.4" }}
                    >
                      {item.subheader}
                    </Typography>
                  </li>
                );
                // {/********If Sub Menu**********/}
                // {/* eslint no-else-return: "off" */}
              } else if (item.children) {
                return (
                  <React.Fragment key={item.title}>
                    <ListItem
                      button
                      component="li"
                      onClick={() => handleClick(index)}
                      selected={pathWithoutLastPart === item.href}
                      sx={{
                        mb: 1,
                        ...(pathWithoutLastPart === item.href && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.secondary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathWithoutLastPart === item.href && {
                            color: "white",
                            fontSize: "16px",
                          }),
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText>{item.title}</ListItemText>
                      {index === open || pathWithoutLastPart === item.href ? (
                        <ExpandMoreIcon fontSize="16px" />
                      ) : (
                        <ChevronRightIcon fontSize="16px" />
                      )}
                    </ListItem>
                    <Collapse
                      in={index === open || pathWithoutLastPart === item.href}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="li" disablePadding>
                        {item.children.map((child) => {
                          return (
                            <NextLink
                              key={child.title}
                              href={child.href}
                              onClick={onSidebarClose}
                            >
                              <ListItem
                                button
                                selected={pathDirect === child.href}
                                // sx={{
                                //   mb: 1,
                                //   ...(pathWithoutLastPart === child.href && {
                                //     color: "primary.main",
                                //     backgroundColor: "green !important",
                                //   }),
                                // }}
                                sx={{
                                  mb: 1,
                                  ...(pathDirect === child.href && {
                                    color: "white",
                                    backgroundColor: (theme) =>
                                      `${theme.palette.primary.main}!important`,
                                  }),
                                }}
                              >
                                <ListItemIcon
                                  // sx={{
                                  //   svg: { width: "14px", marginLeft: "3px" },
                                  //   ...(pathDirect === child.href && {
                                  //     color: "primary.main",
                                  //     fontSize: "18px",
                                  //   }),
                                  sx={{
                                    ...(pathDirect === child.href && {
                                      color: "white",
                                      fontSize: "16px",
                                    }),
                                    // }}
                                  }}
                                >
                                  {child.icon}
                                </ListItemIcon>
                                <ListItemText>{child.title}</ListItemText>
                              </ListItem>
                            </NextLink>
                          );
                        })}
                      </List>
                    </Collapse>
                  </React.Fragment>
                );
                //  {/********If Sub No Menu**********/}
              } else {
                return (
                  <List component="li" disablePadding key={item.title}>
                    <NextLink href={item.href}>
                      <ListItem
                        onClick={() => handleClick(index)}
                        button
                        selected={pathDirect === item.href}
                        sx={{
                          mb: 1,
                          ...(pathDirect === item.href && {
                            color: "white",
                            backgroundColor: (theme) =>
                              `${theme.palette.primary.main}!important`,
                          }),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ...(pathDirect === item.href && { color: "white" }),
                            fontSize: "16px",
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText onClick={onSidebarClose}>
                          {item.title}
                        </ListItemText>
                      </ListItem>
                    </NextLink>
                  </List>
                );
              }
            })}
          </List>
        </Box>
      </Box>
    </SimpleBar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
}
export async function getServerSideProps(context) {
  const Menuitems = [
    // {
    //     navlabel: true,
    //     subheader: "DASHBOARDS",
    //     icon: "mdi mdi-dots-horizontal",
    //     href: "Dashboard",
    // },
    {
      title: "Dashboard",
      icon: <MdOutlineSpaceDashboard />,
      href: "/",
    },
    {
      title: "CMS",
      icon: <BiBarChartSquare />,
      href: "/cms",
    },
    {
      title: "Configuration",
      icon: <MdSettings />,
      href: "/configuration",
    },
    ,
    {
      title: "Supplier",
      icon: <AiOutlineTeam />,
      href: "/c",
    },
    ,
    {
      title: "Tickets",
      icon: <IoTicketOutline />,
      href: "/partner/tickets",
    },
    ,
    {
      title: "Sales",
      icon: <MdStoreMallDirectory />,
      href: "/e",
    },
    {
      title: "Customer",
      icon: <AiOutlineTeam />,
      href: "/customer",
    },
  ];
  const Menuitems1 = [
    {
      navlabel: true,
      subheader: "ADDITIONAL",
      icon: "mdi mdi-dots-horizontal",
      href: "/",
    },
    // {
    //   title: "Setting",
    //   icon: <MdSettings />,
    //   href: "/s",
    // },
    {
      title: "Productivity",
      icon: <FiTarget />,
      href: "/productivity",
      collapse: true,
      children: [
        {
          title: "Notes",
          icon: <FiClipboard />,
          href: "/productivity/notes",
        },
        {
          title: "Calender",
          icon: <FiCalendar />,
          href: "/productivity/calender",
        },
        {
          title: "Todo",
          icon: <FiClipboard />,
          href: "/productivity/todo",
        },
      ],
    },
    // {
    //   title: "Configuration",
    //   icon: <MdSettings />,
    //   href: "/configuration",
    // },
  ];
  return {
    props: {
      Menuitems,
      Menuitems1,
    }, // will be passed to the page component as props
  };
}
export default SideNavbar;
