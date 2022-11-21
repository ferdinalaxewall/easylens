import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi"
import AdminLayout from "../Layout"

function Transactions({transactions}) {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const router = useRouter();
    const deleteTransactionById = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/transactions/${id}`);
        refreshData();
    }
    
    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    };
    
    useEffect(() => {
        setIsRefreshing(false);
    }, [transactions]);


  return (
    <AdminLayout pageTitle="Data Transaksi" urlButton="/admin/transactions/add">
        <div className="overflow-x-auto shadow-md rounded">
            <table className="w-full table-auto text-sm text-left text-gray-500 overflow-hidden">
                <thead className="text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-6">No.</th>
                        <th scope="col" className="py-3 px-6">Nama Penyewa</th>
                        <th scope="col" className="py-3 px-6">Produk</th>
                        <th scope="col" className="py-3 px-6 text-center">Status</th>
                        <th scope="col" className="py-3 px-6">Transaksi Dibuat</th>
                        <th scope="col" className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {!transactions.length ? (
                        <tr>
                            <th scope="col" colSpan={6} className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap text-center">Tidak ada data transaksi</th>
                        </tr>
                    ) : transactions.map((transaction, index) => (
                        <tr key={transaction.id}>
                            <th scope="col" className="py-3 px-6 font-bold text-gray-900 whitespace-nowrap">{transaction.transaction_id}</th>
                            <td className="py-3 px-6">{transaction.account_name}</td>
                            <td className="py-3 px-6">{transaction.product_name}</td>
                            <td className="py-3 px-6 text-center"><span className="bg-red-700 text-white capitalize font-medium px-3 py-1 rounded-lg">{transaction.status}</span></td>
                            <td className="py-3 px-6">{transaction.created_at}</td>
                            <td className="py-3 px-6 text-white text-xl flex flex-wrap justify-center gap-1">
                                <a className="hover:text-white visited:text-white bg-green-600 p-1 rounded" href={`/admin/transactions/edit/${transaction.id}`}>
                                    <BiEditAlt />
                                </a>
                                <button className=" bg-red-600 p-1 rounded" onClick={() => deleteTransactionById(transaction.id)}>
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

export default Transactions

export async function getServerSideProps(){
    const { data : res} = await axios.get("http://127.0.0.1:8000/api/transactions");
    const transactions = res.map(resData => ({
        id : resData.id,
        created_at : new Date(resData.created_at).toLocaleString(),
        status : resData.status,
        transaction_id : resData.transaction_id,
        product_name : resData.products[0].name,
        account_name : resData.tenant_name
    }));
    
    return {
        props : {
            transactions,
        }
    }
}