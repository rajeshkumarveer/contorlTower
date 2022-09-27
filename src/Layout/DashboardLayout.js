import {
    experimentalStyled,
    useMediaQuery,
    Container,
    Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import SideNavbar from "./SideNavbar/SideNavbar";
import React from 'react';

const MainWrapper = experimentalStyled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
}));

const ContentWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("lg")]: {
        paddingTop: "64px",
    },
    [theme.breakpoints.down("lg")]: {
        paddingTop: "64px",
    },
}));

function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = React.useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
    const ThemeCustom = useSelector((state) => state.ThemeCustomReducer);
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    return (
        <MainWrapper>
            <HeaderNavbar
                sx={{
                    paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
                    backgroundColor: ThemeCustom.activeMode === "dark" ? "#20232a" : "#fafbfb",
                }}
                toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                toggleMobileSidebar={() => setMobileSidebarOpen(true)}
            />
            <SideNavbar
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
            />
            <ContentWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: "20px",
                        paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
                    }}
                >
                    <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
                </Container>
            </ContentWrapper>
        </MainWrapper>
    )
}

export default DashboardLayout