import AdminLayout from "./Layout"
import { FaRegUserCircle, FaLock } from "react-icons/fa"

const LoginPage = () => {
  return (
    <AdminLayout>
      <div className="w-full px-2 grid place-items-center h-full">
        <div className="w-full md:w-1/3 bg-white shadow-lg p-10 rounded-2xl font-sans flex flex-col space-y-4">
          <div className="flex flex-col items-center text-center mb-2">
            <div className="p-5 border-2 rounded-full border-primary">
              <img className="w-20" src="/icon/logo.svg" alt="Easylens Logo" />
            </div>
            <div className="flex flex-col mt-2">
              <h3 className="font-bold text-4xl mb-2">Login</h3>
              <p className="font-medium text-base">Welcome to EasyLens!</p>
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="relative mb-3">
              <label className="text-xl absolute top-1/2 left-5 text-gray-500 -translate-y-1/2"><FaRegUserCircle /></label>
              <input type="text" className="w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Username" />
            </div>
            <div className="relative mb-3">
              <label className="text-xl absolute top-1/2 left-5 text-gray-500 -translate-y-1/2"><FaLock /></label>
              <input type="password" className="w-full py-2 pl-14 pr-5 rounded-md border border-gray-500 focus:outline-none focus:border-primary transition-colors duration-150 ease-in" placeholder="Password" />
            </div>
            <button className="bg-primary text-white rounded-md py-2 px-3 mb-3">Login</button>
            <a className="text-sm text-primary font-bold" href="">Forgot your password?</a>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default LoginPage