import { BiEditAlt, BiTrashAlt } from "react-icons/bi"
import AdminLayout from "../Layout"

function Transactions() {
  return (
    <AdminLayout pageTitle="Data Transaksi" urlButton="/admin/transactions/add">
        <div className="overflow-x-auto shadow-md rounded">
            <table className="w-full table-auto text-sm text-left text-gray-500 overflow-hidden">
                <thead className="text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-6">No</th>
                        <th scope="col" className="py-3 px-6">Nama Penyewa</th>
                        <th scope="col" className="py-3 px-6">Produk</th>
                        <th scope="col" className="py-3 px-6">Status</th>
                        <th scope="col" className="py-3 px-6">Transaksi Dibuat</th>
                        <th scope="col" className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-6">No</td>
                        <td className="py-3 px-6">Nama Penyewa</td>
                        <th scope="col" className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">Produk</th>
                        <td className="py-3 px-6">Status</td>
                        <td className="py-3 px-6">Transaksi Dibuat</td>
                        <td className="py-3 px-6 text-white text-xl flex flex-wrap justify-center gap-1">
                            <a className="hover:text-white visited:text-white bg-green-600 p-1 rounded" href="/admin/transaction/edit">
                                <BiEditAlt />
                            </a>
                            <button className=" bg-red-600 p-1 rounded">
                                <BiTrashAlt />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AdminLayout>
  )
}

export default Transactions