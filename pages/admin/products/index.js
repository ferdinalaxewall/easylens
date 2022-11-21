import { useEffect, useState } from "react"
import { BiEditAlt, BiInfoCircle, BiTrashAlt } from "react-icons/bi"
import AdminLayout from "../Layout"
import axios from "axios"
import { useRouter } from "next/router"

function AdminProducts({products}) {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const router = useRouter();
    const deleteProductById = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
        refreshData();
    }

    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
      };
      useEffect(() => {
        setIsRefreshing(false);
      }, [products]);

  return (
    <AdminLayout pageTitle="Data Produk" urlButton="/admin/products/add">
        <div className="overflow-x-auto shadow-md rounded">
            <table className="w-full table-auto text-xs md:text-sm text-left text-gray-500 overflow-hidden">
                <thead className="text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-6">No</th>
                        <th scope="col" className="py-3 px-6">Nama Produk</th>
                        <th scope="col" className="py-3 px-6">Kategori</th>
                        <th scope="col" className="py-3 px-6">Deskripsi</th>
                        <th scope="col" className="py-3 px-6 text-center">Harga</th>
                        <th scope="col" className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-stone-100">
                    {!products.length ? (
                        <tr>
                            <th scope="col" colSpan={6} className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap text-center">Tidak ada data produk</th>
                        </tr>
                    ) : products.map((product, index) => (
                        <tr key={product.id}>
                            <td className="py-3 px-6">{index+1}</td>
                            <th scope="col" className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">{product.name}</th>
                            <td className="py-3 px-6">{product.category}</td>
                            <td className="py-3 px-6">{product.description}</td>
                            <td className="py-3 px-6 text-center">
                                <button className="text-sky-800">
                                    <BiInfoCircle className="text-xl mr-2" /> <span className="hidden lg:block">Lihat Harga</span>
                                </button>
                            </td>
                            <td className="py-3 px-6 text-white text-xl flex flex-wrap justify-center gap-1">
                                <a className="hover:text-white visited:text-white bg-green-600 p-1 rounded" href={`/admin/products/edit/${product.id}`}>
                                    <BiEditAlt />
                                </a>
                                <button className=" bg-red-600 p-1 rounded" onClick={() => deleteProductById(product.id)}>
                                    <BiTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </AdminLayout>
  )
}

export default AdminProducts

export async function getServerSideProps(){
    const { data : products} = await axios.get("http://127.0.0.1:8000/api/products");

    return {
        props : {
            products,
        }
    }
}