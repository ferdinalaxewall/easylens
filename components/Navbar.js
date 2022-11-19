import { useState } from "react"

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const menuButton = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

  return (
    <nav className="navbar">
        <div className="content-wrapper">
            <a href="/" className="navbar__brand">Easy<span className="highlighted-text">Lens</span></a>

            <ul className={isNavbarOpen ? "show" : ""}>
                <li className="navbar__list"><a href="/#beranda" className="navbar__link">Beranda</a></li>
                <li className="navbar__list"><a href="/#layanan" className="navbar__link">Layanan</a></li>
                <li className="navbar__list"><a href="/#produk" className="navbar__link">Produk & Jasa</a></li>
                <li className="navbar__list"><a href="/#cara-pemesanan" className="navbar__link">Cara Pemesanan</a></li>
                <li className="navbar__list"><a href="/#galeri" className="navbar__link">Galeri</a></li>
            </ul>

            <div className={`navbar-overlay ${isNavbarOpen ? "show" : ""}`}></div>

            <a href="./register" className="get-started-button">
                Mulai Sekarang 
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15H25M16.25 6.25L25 15L16.25 23.75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>

            <button className="menu-button" onClick={() => menuButton()}>
                <span></span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar