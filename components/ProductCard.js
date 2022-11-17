import React from 'react'
import NumberFormat from '../utils/number-format';

function ProductCard({ id, name, category, price, image, productClass}) {
    const { lite, medium, large } = price;
    const priceNumberFormat = lite !== '' ? NumberFormat(lite) : NumberFormat(medium)
  return (
    <a href={`/products/${id}`} className={productClass} data-category={category} data-product-show="show" data-scroll="show"> 
        <div className="produk__box-image">
            <img src={`/img/produk/${image}`} alt={name} loading="lazy" />
        </div>
        <div className="produk__box-body">
            <h3 className="produk__title">{name}</h3>
            <div className="produk__body-footer">
                <h5 className="produk__price">
                    Rp. {priceNumberFormat === "" ? NumberFormat(large) : priceNumberFormat}
                </h5>
            </div>
        </div>
    </a>
  )
}

export default ProductCard