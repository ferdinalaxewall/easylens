import React from 'react'
import NumberFormat from '../utils/number-format'

function DetailProduct({name, image, description, prices}) {
    const showPrice = (e) => {
        console.log(e.target.getAttribute("data-price"))
    }
    const orderWhatsapp = (e) => {
        console.log(e.target)
    }
    
    return (
        <div className="detail-produk__content">
            <a href="/products" className="back-link">
                <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15H25M16.25 6.25L25 15L16.25 23.75" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Lihat Semua Produk</a>
            <div className="detail-produk__main">
                <div className="detail-produk__image">
                    <img src={`/img/produk/${image}`} alt={name} />
                </div>
                <div className="detail-produk__text">
                    <div className="detail-produk__header">
                        <h1 className="detail-produk__title">{name}</h1>
                        <h3 className="variant__title">Pilih Lama Peminjaman:</h3>
                        <div className="variant__button-group">
                            {
                                // Object.getOwnPropertyNames(prices).forEach((val, index) => {
                                //     const price = NumberFormat(prices[val]);
                                //     return "Hello"
                                // })
                                Object.entries(prices).map((price, index) => {
                                    const [ priceName, priceNumber ] = price;
                                    const time = priceName === "lite" ? "6 Jam" : (priceName === "medium" ? "12 Jam" : "24 Jam")
                                    const priceNumberFormat = NumberFormat(priceNumber)
                                    if(priceNumberFormat !== "") return (
                                            <button key={index} className="button-variant" variant-value="12" data-price={priceNumberFormat} onClick={(e) => showPrice(e)} >
                                                {time}
                                            </button>
                                        )
                                    
                                    
                                })
                            }
                            {/* <button className="button-variant" variant-value="12" data-price=" mediumPrice " onClick={(e) => showPrice(e)} > 12 Jam </button>
                            <button className="button-variant" variant-value="24" data-price=" largePrice " onClick={(e) => showPrice(e)} > 24 Jam </button> */}
                        </div>
                    </div>
                    <div className="detail-produk__price">
                        <h3 className="price__title">Total:</h3>
                        <h1 className="price__number highlighted-text">Rp. 0</h1>
                        <button className="book-produk" onClick={(e) => orderWhatsapp(e)} disabled>
                            <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.0037 7.04129C21.9642 5.99489 20.7273 5.16518 19.3648 4.60022C18.0023 4.03526 16.5412 3.74629 15.0663 3.75004C8.88125 3.75004 3.84625 8.78379 3.84375 14.9713C3.84375 16.9488 4.36 18.8788 5.34125 20.5813L3.75 26.395L9.69875 24.8338C11.3442 25.7295 13.1877 26.1992 15.0612 26.2H15.0663C21.25 26.2 26.285 21.1663 26.2875 14.9788C26.2917 13.5044 26.0037 12.0438 25.4401 10.6814C24.8765 9.31895 24.0484 8.08175 23.0037 7.04129ZM15.0663 24.3063H15.0625C13.3919 24.3065 11.752 23.857 10.315 23.005L9.975 22.8025L6.445 23.7288L7.38625 20.2875L7.165 19.935C6.23098 18.4481 5.73654 16.7273 5.73875 14.9713C5.74125 9.82879 9.925 5.64504 15.07 5.64504C16.2953 5.64231 17.509 5.88264 18.6408 6.3521C19.7726 6.82156 20.8001 7.51084 21.6637 8.38004C22.532 9.24509 23.2202 10.2737 23.6886 11.4063C24.157 12.5389 24.3962 13.7531 24.3925 14.9788C24.39 20.1213 20.2063 24.3063 15.0663 24.3063ZM20.1825 17.32C19.9013 17.1788 18.5238 16.5013 18.2662 16.4075C18.01 16.3138 17.8238 16.2675 17.6363 16.5475C17.4488 16.8275 16.9113 17.4588 16.7475 17.6463C16.5837 17.8338 16.42 17.8563 16.14 17.7163C15.86 17.5763 14.9563 17.28 13.885 16.325C13.0512 15.5813 12.4887 14.6638 12.325 14.3825C12.1612 14.1013 12.3075 13.95 12.4487 13.81C12.575 13.685 12.7288 13.4825 12.8687 13.3188C13.0087 13.155 13.055 13.0388 13.1488 12.8513C13.2425 12.6638 13.1962 12.5 13.125 12.36C13.055 12.2188 12.4937 10.8388 12.26 10.2775C12.0337 9.73379 11.8025 9.80629 11.63 9.79879C11.4513 9.79148 11.2726 9.78814 11.0938 9.78879C10.9516 9.79241 10.8117 9.82537 10.6828 9.8856C10.554 9.94582 10.439 10.032 10.345 10.1388C10.0875 10.42 9.36375 11.0975 9.36375 12.4775C9.36375 13.8575 10.3687 15.1913 10.5087 15.3788C10.6487 15.5663 12.4862 18.3975 15.2987 19.6125C15.9688 19.9013 16.4913 20.0738 16.8975 20.2038C17.5687 20.4175 18.18 20.3863 18.6637 20.315C19.2025 20.235 20.3225 19.6375 20.5562 18.9825C20.79 18.3275 20.79 17.7663 20.72 17.6488C20.65 17.5313 20.4613 17.46 20.1825 17.32Z" fill="#f3f3f3"/>
                            </svg>
                                
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
            <div className="detail-produk__sub-main">
                <h1 className="sub-main__title">Description</h1>
                <p className="sub-main__description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default DetailProduct