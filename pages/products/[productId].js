import DetailProduct from "../../components/DetailProduct"
import Layout from "../Layout"

function ProductPage({ product }) {
    const {name, image, description, price} = product;

    return (
        <Layout footer={false}>
            <div className="content-wrapper" id="detail-produk__wrapper">
                <DetailProduct name={name} image={image} description={description} prices={price} />
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const resData = await fetch(`http://easylens.vercel.app/api/products`)
    const products = await resData.json();
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
    const resData = await fetch(`http://easylens.vercel.app/api/products/${params.productId}`);
    const product = await resData.json();

    if(!product){
        return {
            notFound : true
        }
    }

    return {
        props : {
            product,
        }
    }
}

export default ProductPage