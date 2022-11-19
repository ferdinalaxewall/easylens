import { BiLock, BiMailSend, BiUser, BiUserCircle } from "react-icons/bi"
import Link from "next/link"
import AdminLayout from "./admin/Layout"

const LoginPage = () => {
  return (
    <AdminLayout forLoginPage={true}>
      <section className="w-full px-2 grid place-items-center h-full" id="login-section">
        <div className="w-full md:w-1/3 bg-white shadow-lg p-10 rounded-2xl font-sans flex flex-col space-y-4">
          <div className="flex flex-col items-center text-center mb-2">
            <div className="p-5 border-2 rounded-full border-primary">
              <img className="w-20" src="/icon/logo.svg" alt="Easylens Logo" />
            </div>
            <div className="flex flex-col mt-2">
              <h3 className="font-bold text-4xl mb-2">Register</h3>
              <p className="font-medium text-base">Welcome to EasyLens!</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="relative mb-3">
              <input type="text" className="peer w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Full Name" />
              <label className="text-xl absolute top-1/2 left-5 peer-focus:text-primary text-gray-500 -translate-y-1/2 transition-colors duration-150 ease-in"><BiUser /></label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="peer w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Email" />
              <label className="text-xl absolute top-1/2 left-5 peer-focus:text-primary text-gray-500 -translate-y-1/2 transition-colors duration-150 ease-in"><BiMailSend /></label>
            </div>
            <div className="relative mb-3">
              <input type="text" className="peer w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Username" />
              <label className="text-xl absolute top-1/2 left-5 peer-focus:text-primary text-gray-500 -translate-y-1/2 transition-colors duration-150 ease-in"><BiUserCircle /></label>
            </div>
            <div className="relative mb-3">
              <input type="password" className="peer w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Password" />
              <label className="text-xl absolute top-1/2 left-5 peer-focus:text-primary text-gray-500 -translate-y-1/2 transition-colors duration-150 ease-in"><BiLock /></label>
            </div>
            <button className="bg-primary text-white rounded-md py-2 px-3 mb-3">Register</button>
            <Link href={"./login"} className="text-primary hover:text-primary visited:text-primary text-sm underline hover:no-underline cursor-pointer font-bold">Already Registered?</Link>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}

export default LoginPage