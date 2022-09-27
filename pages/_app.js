import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DefaultThemeSetting from "../src/theme/DefaultThemeSetting";
import LoginLayout from "../src/Layout/LoginLayout";
import DashboardLayout from "../src/Layout/DashboardLayout";
import wrapper from "../src/store/Store";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Gettheme = DefaultThemeSetting();
  const Layout = Component.Layout ? LoginLayout : DashboardLayout;
  return (
    <>
      <Head>
        <title>Control Tower</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={Gettheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
