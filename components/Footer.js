const Footer = () => {
  return (
    <footer className="footer">
        <div className="content-wrapper">
            <div className="footer__left">
                <h1 className="footer__title">Easy<span className="highlighted-text">Lens</span></h1>
                <p className="footer__address">
                    Jalan Abdul Fatah Kp. Cikalancing, RT.018/RW.03, Cinangneng, Kec. Tenjolaya, Kabupaten Bogor, Jawa Barat 16620
                </p>
            </div>
            <ul className="footer__center">
                <li><a href="/#beranda" className="footer__link">Beranda</a></li>
                <li><a href="/#layanan" className="footer__link">Layanan</a></li>
                <li><a href="/#produk" className="footer__link">Produk & Jasa</a></li>
                <li><a href="/#cara-pemesanan" className="footer__link">Cara Pemesanan</a></li>
            </ul>
    
            <div className="footer__right">
                <h5 className="footer__contact-title">Hubungi Kami:</h5>
                <div className="footer__button-group">
                    <a href="#" className="footer__button">
                        <img src="/icon/whatsapp-icon.svg" alt="WhatsApp Icon" />
                    </a>
                    <a href="#" className="footer__button">
                        <img src="/icon/mail-icon.svg" alt="Mail Icon" />
                    </a>
                    <a href="#" className="footer__button">
                        <img src="/icon/instagram-icon.svg" alt="Instagram Icon" />
                    </a>
                    <a href="#" className="footer__button">
                        <img src="/icon/tiktok-icon.svg" alt="Tiktok Icon" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer