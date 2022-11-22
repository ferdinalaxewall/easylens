import axios from "axios";
import DetailProduct from "../../components/DetailProduct"
import Layout from "../Layout"

function ProductPage({ product }) {
    const {name, image, description, lite, medium, large} = product;

    return (
        <Layout footer={false}>
            <div className="content-wrapper" id="detail-produk__wrapper">
                <DetailProduct name={name} image={image} description={description} lite={lite} medium={medium} large={large} />
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const {data : products} = await axios(`https://ferdinalapi.000webhostapp.com/api/products`)
    const paths = products.map(product => ({
        params : {
            productId : `${product.id}`
        }
    }));

    return {
        paths,
        fallback : 'blocking'
    }
}


export async function getStaticProps({ params }){
    const {data : product} = await axios(`https://ferdinalapi.000webhostapp.com/api/products/${params.productId}`);

    if(!product){
        return {
            notFound : true
        }
    }

    return {
        props : {
            product,
        },
        revalidate : 30,
    }
}

export default ProductPage