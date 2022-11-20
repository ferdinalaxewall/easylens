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
                        <th scope="col" className="py-3 px-6">Nama Lengkap</th>
                        <th scope="col" className="py-3 px-6">Email</th>
                        <th scope="col" className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-6">No</td>
                        <td className="py-3 px-6">Nama Lengkap</td>
                        <th scope="col" className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap">Email</th>
                        <td className="py-3 px-6 text-white text-xl flex flex-wrap justify-center gap-1">
                            <a className="hover:text-white visited:text-white bg-green-600 p-1 rounded" href="/admin/transactions/edit">
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