import Head from "next/head"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = ({children, footer = true}) => {

  useEffect(() => {
      AOS.init({
        once : true
      });
  })
  return (
    <>
        <Head>
            <title>EasyLens</title>
            <meta name="description" content="Sewa Kamera daerah Bogor dan Sekitarnya" />
            <link rel="icon" href="/icon/logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Passion+One&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>

        <Loader />

        <Navbar />

        <div className="content-wrapper" id='main-content'>
            {children}
        </div>

        { footer && <Footer />}
        
    </>
  )
}

export default Layout