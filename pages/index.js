import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SliderContent from '../components/SliderContent';
import Layout from './Layout'

export default function Home({products}) {
    const router = useRouter();
    const productClass = router.pathname === '/' && "produk__box";
    const [lightboxImage, setLightboxImage] = useState("");
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isImageOpen, setIsImagOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const openLightBox = (box) => {
        const imageSrc = box.getAttribute("src")
        setIsLoading(true)
        setLightboxImage(imageSrc)
        setIsLightboxOpen(true)
        setTimeout(() => {
            setIsImagOpen(true)
        }, 50);
    }
    
    const closeLightBox = () => {
        setIsLoading(false)
        setLightboxImage("")
        setIsLightboxOpen(false)
        setIsImagOpen(false)
    }
    
    isLoading && document.body.classList.remove("on-load")

    return (
    <>
        <Layout>
            <section id="beranda" className="content-section">
                <div className="beranda__text-group">
                    <h1 className="beranda__title" data-scroll="show">
                        <span className="highlighted-text">Mudahkan</span> Bisnis Anda Hanya dalam <span className="highlighted-text">Satu Genggaman</span>
                    </h1>
                    <p className="beranda__description" data-scroll="show">
                        EasyLens hadir untuk mempermudah proses pelayanan dan pendataan dalam pemesanan suatu produk, atau jasa. Tunggu apalagi ayo gabung bersama kami!
                    </p>

                    <a href="/register" className="get-started-button" data-scroll="show">
                        Mulai Sekarang 
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15H25M16.25 6.25L25 15L16.25 23.75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeinejoin="round"/>
                        </svg>
                    </a>
                </div>

                <div className="beranda__image-group" data-scroll="show">
                    <img src="/img/kamera-illustration.png" alt="Camera Illustration" loading="lazy" />
                </div>
            </section>

            <section id="layanan" className="content-section">
                <div className="layanan__box-group" data-scroll="show">
                    <div className="layanan__box" data-scroll="show">
                        <img src="/img/sewa-kamera-illustration.svg" alt="Rental Camera Illustration" loading="lazy" />
                        <h5 className="layanan__title">Penyewaan Kamera</h5>
                    </div>
                    <div className="layanan__box" data-scroll="show">
                        <img src="/img/fotografer-illustration.svg" alt="Photographer Illustration" loading="lazy" />
                        <h5 className="layanan__title">Jasa Fotografer</h5>
                    </div>
                    <div className="layanan__box" data-scroll="show">
                        <img src="/img/videografer-illustration.svg" alt="Videographer Camera" loading="lazy" />
                        <h5 className="layanan__title">Jasa Videografer</h5>
                    </div>
                </div>

                <h1 className="section-title" data-scroll="show">Mengapa Harus EasyLens?</h1>

                <div className="layanan__content">
                    <div className="layanan__content-box" data-aos="fade-down" data-once="true" data-scroll="show">
                        <img src="/img/user-friendly-illustration.svg" alt="User Friendly Illustration" loading="lazy" />
                        <h5 className="layanan__content-title">Aplikasi User-Friendly</h5>
                    </div>
                    <div className="layanan__content-box" data-aos="fade-down" data-once="true" data-aos-delay="300" data-scroll="show">
                        <img src="/img/produk-kualitas-illustration.svg" alt="User Friendly Illustration" loading="lazy" />
                        <h5 className="layanan__content-title">Produk & Jasa Berkualitas </h5>
                    </div>                                                                                                                                                                                                                                                                                                           
                    <div className="layanan__content-box" data-aos="fade-down" data-once="true" data-aos-delay="600" data-scroll="show">
                        <img src="/img/payment-sistem-illustration.svg" alt="Online Payment System Illustration" loading="lazy" />
                        <h5 className="layanan__content-title">Sistem Pembayaran Online</h5>
                    </div>
                </div>
            </section>

            <section id="produk" className="content-section">
                <div className="section-header"  data-scroll="show">
                    <h1 className="section-title" data-scroll="show">Apa Saja yang Ditawarkan?</h1>

                    <a href="/products" id="lihat-produk" data-scroll="show">Lihat Semua Produk</a>
                </div>

                <SliderContent products={products}/>

            </section>

            <section id="cara-pemesanan" className="content-section">
                <h1 className="section-title" data-scroll="show">Bagaimana Cara Pemesanannya?</h1>
                <div className="order__content">
                    <div className="order__box" data-scroll="show">
                        <div className="order__box-number">1</div>
                        <img src="/icon/user-icon.svg" alt="User Icon" loading="lazy" />
                        <h5 className="order__title">
                            Buat akun EasyLens sebagai Member
                        </h5>
                    </div>
                    <div className="order__box" data-scroll="show">
                        <div className="order__box-number">2</div>
                        <img src="/icon/card-check-icon.svg" alt="Identity Card Icon" loading="lazy" />
                        <h5 className="order__title">
                            Lengkapi identitas pada Halaman Profil
                        </h5>
                    </div>
                    <div className="order__box" data-scroll="show">
                        <div className="order__box-number">3</div>
                        <img src="/icon/camera-icon.svg" alt="Camera Icon" loading="lazy" />
                        <h5 className="order__title">
                            Pilih Produk atau Jasa
                        </h5>
                    </div>
                    <div className="order__box" data-scroll="show">
                        <div className="order__box-number">4</div>
                        <img src="/icon/invoice-icon.svg" alt="Invoice Icon" loading="lazy" />
                        <h5 className="order__title">
                            Tunjukkan Bukti Pemesanan
                        </h5>
                    </div>
                </div>
            </section>

            <section className="content-section" id="galeri">
                <h1 className="section-title" data-scroll="show">Galeri</h1>
                <div className="galeri__content">
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-1.jpg" alt="Foto Produk 1" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-2.jpg" alt="Foto Produk 2" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-3.jpg" alt="Foto Produk 3" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-4.jpg" alt="Foto Produk 4" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-5.jpg" alt="Foto Produk 5" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-6.jpg" alt="Foto Produk 6" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-7.jpg" alt="Foto Produk 7" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-8.jpg" alt="Foto Produk 8" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-9.jpg" alt="Foto Produk 9" loading="lazy" data-scroll="show" />
                    </div>
                    <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                        <img src="/img/testimoni/foto-produk-10.jpg" alt="Foto Produk 10" loading="lazy" data-scroll="show" />
                    </div>
                </div>
                <a href="/galeri" className="to-galeri">Lihat Selengkapnya</a>
            </section>
        </Layout>

        <div className={`lightbox ${isLightboxOpen ? "open" : ""}`}>
            <div className="lightbox-overlay" onClick={() => closeLightBox()}></div>
            <button className="close-lightbox" onClick={() => closeLightBox()}>&times;</button>
            <div className={`lightbox-content ${isImageOpen ? "open" : ""}`}>
                <img src={lightboxImage} alt="" />
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const {data : products} = await axios("https://ferdinalapi.000webhostapp.com/api/products");

    return {
        props : {
            products,
        }
    }
}
