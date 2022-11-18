import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = ({children, footer = true}) => {
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

        <Navbar />

        <div className="content-wrapper" id='main-content'>
            {children}
        </div>

        { footer && <Footer />}
        
    </>
  )
}

export default Layout