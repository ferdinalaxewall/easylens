import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi"
import AdminLayout from "../Layout"

function Transactions({users}) {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const router = useRouter();
    const deleteUsersById = async (id) => {
        await axios.delete(`https://ferdinalapi.000webhostapp.com/api/users/${id}`);
        refreshData();
    }

    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
      };

    useEffect(() => {
        setIsRefreshing(false);
    }, [users]);

  return (
    <AdminLayout pageTitle="Data Pengguna" urlButton="/admin/users/add">
        <div className="overflow-x-auto shadow-md rounded">
            <table className="w-full table-auto text-sm text-left text-gray-500 overflow-hidden">
                <thead className="text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-6">No</th>
                        <th scope="col" className="py-3 px-6">Nama Lengkap</th>
                        <th scope="col" className="py-3 px-6">Email</th>
                        <th scope="col" className="py-3 px-6 text-center">Role</th>
                        <th scope="col" className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {!users.length ? (
                        <tr>
                            <th scope="col" colSpan={6} className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap text-center">Tidak ada data pengguna</th>
                        </tr>
                    ) : users.map((user, index) => (
                        <tr key={user.id}>
                            <td className="py-3 px-6">{index+1}</td>
                            <td className="py-3 px-6">{user.full_name}</td>
                            <td className="py-3 px-6">{user.email}</td>
                            <th scope="col" className="py-3 px-6 font-bold text-xs text-gray-900 whitespace-nowrap uppercase text-center">{user.roles}</th>
                            <td className="py-3 px-6 text-white text-xl flex flex-wrap justify-center gap-1">
                                <a className="hover:text-white visited:text-white bg-green-600 p-1 rounded" href={`/admin/users/edit/${user.id}`}>
                                    <BiEditAlt />
                                </a>
                                {/* <button className=" bg-red-600 p-1 rounded" onClick={() => deleteUsersById(user.id)}>
                                    <BiTrashAlt />
                                </button> */}
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
    const { data : users} = await axios.get("https://ferdinalapi.000webhostapp.com/api/users");

    return {
        props : {
            users,
        }
    }
}