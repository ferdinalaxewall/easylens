import { useState } from "react";
import Layout from "./Layout"

const GaleriPage = () => {
    const [lightboxImage, setLightboxImage] = useState("");
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isImageOpen, setIsImagOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    isLoading && document.body.classList.remove("on-load")

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
        setIsLoading(true)
        setLightboxImage("")
        setIsLightboxOpen(false)
        setIsImagOpen(false)
    }

  return (
    <>
        <Layout footer={false}>
            <section className="content-section" id="galeri-page">
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
                        <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                            <img src="/img/testimoni/foto-produk-11.jpg" alt="Foto Produk 11" loading="lazy" data-scroll="show" />
                        </div>
                        <div className="galeri__box" data-aos="zoom-out" onClick={(e) => openLightBox(e.target)}>
                            <img src="/img/testimoni/foto-produk-12.jpg" alt="Foto Produk 12" loading="lazy" data-scroll="show" />
                        </div>
                    </div>
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

export default GaleriPage