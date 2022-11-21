import { useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import AdminLayout from "../../Layout"
import axios from "axios"
import { useRouter } from "next/router";

function UpdateUsers({user}) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const router = useRouter();
    
    const {full_name : getFullName, email : getEmail, username : getUsername, password : getPassword, roles : getRole} = user;

    useEffect(() => {
        setFullName(getFullName);
        setEmail(getEmail);
        setUsername(getUsername);
        setPassword(getPassword);
        setRole(getRole);
    }, [router.query.userId])

    const updateUser = async (e) => {
        e.preventDefault();
        
        const data = {
            full_name : fullName,
            email,
            username,
            password,
            roles : role
        }

        try {
            await axios.post(`http://127.0.0.1:8000/api/users/${router.query.userId}`, data)
            router.push("/admin/users")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <AdminLayout pageTitle="Ubah Pengguna" withButton={false}>
        <div className="overflow-x-auto rounded">
            <form onSubmit={updateUser}>
            <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Contoh: John Doe" required />
                    <label className="font-medium">Nama Lengkap</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Contoh: johndoe@example.com" required />
                    <label className="font-medium">Email</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="text" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Contoh: johndoe" required />
                    <label className="font-medium">Username</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <input type="password" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="********" required />
                    <label className="font-medium">Password</label>
                </div>
                <div className="mb-3 flex flex-col-reverse gap-1">
                    <select name="" id="" className="px-4 py-2 shadow rounded bg-gray-50 focus:outline-none border border-white border-b-sky-800 focus:border-sky-800 focus:border transition duration-200 ease-in" value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" selected disabled>-- Pilih Role --</option>
                        <option className="text-gray-800 font-medium" value="user">Pengguna</option>
                        <option className="text-gray-800 font-medium" value="admin">Administrator</option>
                    </select>
                    <label className="font-medium">Role</label>
                </div>
                <button type="submit" className="mx-auto bg-sky-800 text-white px-5 py-2 rounded font-semibold text-sm md:text-base flex items-center gap-3">
                    <BiSave /> Simpan
                </button>
            </form>
        </div>
    </AdminLayout>
  )
}

export default UpdateUsers


export const getStaticPaths = async () => {
    const {data : users} = await axios.get(`http://127.0.0.1:8000/api/users`)
    const paths = users.map(user => ({
        params : {
            userId : `${user.id}`
        }
    }));

    return {
        paths,
        fallback : 'blocking'
    }
}

export const getStaticProps = async ({params}) => {
    const {data : user} = await axios.get(`http://127.0.0.1:8000/api/users/${params.userId}`)
    if(user && Object.keys(user).length === 0){
        return {
            notFound : true
        }
    }

    return {
        props : {
            user,
        }
    }
}