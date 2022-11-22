import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard';
import Layout from '../Layout'

function ProductsPage({products}) {
    const router = useRouter();
    const productClass = router.pathname === '/products' && "produk-page__box";
    const [category, setCategory] = useState("semua");
    const [allProducts, setAllProducts] = useState(products);

    const handleSelectCategory = (value) => {
      setCategory(value)
      if (value !== "semua") {
        const filterProducts = products.filter(product => product.category === value);
        setAllProducts(filterProducts);
      }else{
        setAllProducts(products)
      }
    } 

    return (
      <Layout>
          <section className="content-wrapper" id="produk-page">
            <div className="produk-page__header">
                <h1 className="content-title">Semua Produk & Jasa</h1>
                <select name="filter-content" id="filter-content" value={category} onChange={(e) => handleSelectCategory(e.target.value)}>
                    <option value="semua">Semua Produk & Jasa</option>
                    <option value="camera">Kamera</option>
                    <option value="lensa">Lensa</option>
                    <option value="led">LED</option>
                    <option value="audio-mic">Audio Mic</option>
                    <option value="standing">Standing</option>
                    <option value="lighting">Lighting</option>
                    <option value="accesories">Accesories</option>
                </select>
            </div>
            <div className="produk-page__content">
                { allProducts.map(product => {
                  const { id, name, category, price, image } = product
                  return (
                      <ProductCard key={id} id={id} name={name} category={category} price={price} image={image} productClass={productClass} />
                  )
                }) }
            </div>
          </section>
      </Layout>
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
export default ProductsPage