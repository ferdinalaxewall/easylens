import { useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import AdminLayout from "../../Layout"
import axios from "axios"
import { useRouter } from "next/router";

function UpdateProducts({product}) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [lite, setLite] = useState("");
    const [medium, setMedium] = useState("");
    const [large, setLarge] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("")
    const router = useRouter();
    
    const {name : getName, category : getCategory, description : getDescription, lite : getLite, medium : getMedium, large : getLarge, image : getImage} = product;
    const previewUrl = `https://ferdinalapi.000webhostapp.com/storage/product-images/${getImage}`;

    useEffect(() => {
        setName(getName);
        setCategory(getCategory);
        setDescription(getDescription);
        setLite(getLite);
        setMedium(getMedium);
        setLarge(getLarge);
        setPreview(previewUrl);
    }, [router.query.productId])

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image)
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("lite", lite);
        formData.append("medium", medium);
        formData.append("large", large);
        formData.append("file", file);
        file !== "" && formData.append("file", file);

        try {
            await axios.post(`https://ferdinalapi.000webhostapp.com/api/products/${router.query.productId}`, formData)
            router.push("/admin/products")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <AdminLayout pageTitle="Ubah Produk" withButton={false}>
        <div className="overflow-x-auto rounded">
            <form onSubmit={updateProduct}>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={name} onChange={(e) => setName(e.target.value)} placeholder="Contoh: Kamera Canon EOS 70D" required />
                    <label className="font-medium">Nama Produk</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <select name="" id="" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="" selected disabled>-- Pilih Kategori --</option>
                        <option className="text-gray-800 font-medium" value="camera">Kamera</option>
                        <option className="text-gray-800 font-medium" value="lensa">Lensa</option>
                        <option className="text-gray-800 font-medium" value="led">LED</option>
                        <option className="text-gray-800 font-medium" value="audio-mic">Audio</option>
                        <option className="text-gray-800 font-medium" value="standing">Standing</option>
                        <option className="text-gray-800 font-medium" value="lighting">Lighting</option>
                        <option className="text-gray-800 font-medium" value="accesories">Accesories</option>
                    </select>
                    <label className="font-medium">Kategori</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <textarea name="" id="" className="px-4 py-2 shadow h-24 rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in resize-none" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsikan Bagaimana Produknya..."></textarea>
                    <label className="font-medium">Deskripsi</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={lite} onChange={(e) => setLite(e.target.value)} placeholder="Contoh: 40,000" required />
                    <label className="font-medium">Harga 6 Jam</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={medium} onChange={(e) => setMedium(e.target.value)}  placeholder="Contoh: 70,000" required />
                    <label className="font-medium">Harga 12 Jam</label>
                </div>
                <div className="mb-5 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={large} onChange={(e) => setLarge(e.target.value)}  placeholder="Contoh: 120,000" required />
                    <label className="font-medium">Harga 24 Jam</label>
                </div>
                <div className="mb-5 flex flex-col-reverse gap-1">
                    <input type="file" className="" onChange={loadImage} placeholder="Contoh: 120,000" />
                    <img className="w-44 mb-3 mt-1" src={preview} alt="" />
                    <label className="font-medium">Upload Gambar</label>
                </div>
                <button type="submit" className="mx-auto bg-sky-800 text-white px-5 py-2 rounded font-semibold text-sm md:text-base flex items-center gap-3">
                    <BiSave /> Simpan
                </button>
            </form>
        </div>
    </AdminLayout>
  )
}

export default UpdateProducts


export const getStaticPaths = async () => {
    const {data : products} = await axios.get(`https://ferdinalapi.000webhostapp.com/api/products`)
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

export const getStaticProps = async ({params}) => {
    const {data : product} = await axios.get(`https://ferdinalapi.000webhostapp.com/api/products/${params.productId}`)
    if(product && Object.keys(product).length === 0){
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