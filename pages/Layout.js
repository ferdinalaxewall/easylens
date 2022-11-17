import Head from "next/head"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>EasyLens</title>
            <meta name="description" content="Sewa Kamera daerah Bogor dan Sekitarnya" />
            <link rel="icon" href="/icon/logo.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Passion+One&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>

        <Navbar />

        <div className="content-wrapper" id='main-content'>
            {children}
        </div>

        <Footer />
    </>
  )
}

export default Layout