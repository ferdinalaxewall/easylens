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
    const {data} = await resData.json();
    const paths = data.map(product => ({
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
    const {data} = await resData.json();

    if(!data){
        return {
            notFound : true
        }
    }

    return {
        props : {
            product : data[0]
        }
    }
}

export default ProductPage