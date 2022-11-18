import React from 'react'
import ProductCard from '../components/ProductCard';
import dynamic from 'next/dynamic';
var $ = require("jquery")
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery")
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


function SliderContent({products, productClass = "produk__box"}) {
  return (
    
    <OwlCarousel className="produk__content owl-carousel owl-theme" loop margin={10} nav dots stagePadding={50} lazyLoad autoWidth>
        { products.slice(0, 6).map(product => {
            const { id, name, category, price, image } = product
            return (
                <ProductCard key={id} id={id} name={name} category={category} price={price} image={image} productClass={productClass} />
            )
        })}
    </OwlCarousel>
  )
}

export default SliderContent