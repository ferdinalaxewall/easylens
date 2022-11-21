import { useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import AdminLayout from "../Layout"
import axios from "axios"
import { useRouter } from "next/router";
import NumberFormat from "../../../utils/number-format";

function AddTransaction({products}) {
    const [tenantName, setTenantName] = useState("");
    const [productId, setProductId] = useState("");
    const [loanLength, setLoanLength] = useState("");
    const [getPrice, setPriceState] = useState({});
    const router = useRouter();
    
    useEffect(() => {
        if(productId !== ""){
            const filtered = products.find(product => product.id == productId);
            setPriceState(filtered.price)
        }
    },[productId])

    const saveTransaction = async (e) => {
        e.preventDefault();
        
        const data = {
            tenant_name : tenantName,
            product_id : parseInt(productId),
            loan_length : loanLength
        }

        try {
            await axios.post("http://127.0.0.1:8000/api/transactions", data)
            router.push("/admin/transactions")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <AdminLayout pageTitle="Tambah Transaksi" withButton={false}>
        <div className="overflow-x-auto rounded">
            <form onSubmit={saveTransaction}>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={tenantName} onChange={(e) => setTenantName(e.target.value)} placeholder="Contoh: John Doe" required />
                    <label className="font-medium">Nama Penyewa</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <select name="" id="" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={productId} onChange={(e) => setProductId(e.target.value)} required>
                        <option value="" selected disabled>-- Pilih Produk --</option>
                        {
                            products.map(product => (
                                <option key={product.id} className="text-gray-800 font-medium" value={product.id}>{product.name}</option>
                            ))
                        }
                    </select>

                    <label className="font-medium">Produk</label>
                </div>

                { productId !== "" && (
                    <div className="mb-3 flex flex-col-reverse gap-1">
                        <select name="" id="" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={loanLength} onChange={(e) => setLoanLength(e.target.value)} required>
                            <option value="" selected disabled>-- Pilih Produk --</option>
                            {
                                Object.entries(getPrice).map((price, index) => {
                                    const [ priceName, priceNumber ] = price;
                                    const time = priceName === "lite" ? "6 Jam" : (priceName === "medium" ? "12 Jam" : "24 Jam")
                                    const priceNumberFormat = priceNumber !== null ? NumberFormat(priceNumber) : null
                                    if(priceNumberFormat !== "" && priceNumberFormat !== null) return (
                                            <option key={index} value={priceName} >
                                                {time} - Rp. {priceNumberFormat}
                                            </option>
                                        )
                                })
                            }
                        </select>

                        <label className="font-medium">Lama Peminjaman</label>
                    </div>
                )}
                
                <button type="submit" className="mx-auto bg-sky-800 text-white px-5 py-2 rounded font-semibold text-sm md:text-base flex items-center gap-3">
                    <BiSave /> Simpan
                </button>
            </form>
        </div>
    </AdminLayout>
  )
}

export default AddTransaction

export async function getServerSideProps(){
    const { data : products} = await axios.get("http://127.0.0.1:8000/api/products");
    
    return {
        props : {
            products,
        }
    }
}