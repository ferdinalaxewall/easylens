import { BiBox, BiGridAlt, BiGroup, BiLogOut, BiTransfer } from "react-icons/bi"

function Sidebar({isSidebarOpen}) {
  return (
    <aside className={`fixed ${isSidebarOpen ? "-left-20 lg:w-56 lg:pt-12" : "-left-0 lg:w-16"} sm:left-0 top-0 z-20 w-16 font-sans bg-sky-800 text-white px-2 pt-5 pb-6 h-screen flex flex-col justify-between transition-all duration-150 ease-in`}>
        <div className="flex flex-col gap-4">
            <div className={`hidden ${isSidebarOpen ? "lg:flex" : "lg:hidden"} lg:flex w-full flex-col items-center text-center gap-5`}>
                <div className="relative after:content-[''] after:absolute after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:h-28 after:w-28 after:border-2 after:border-x-white after:border-y-transparent after:rotate-45 after:scale-105 p-5 bg-white rounded-full">
                    <img className="w-16" src="/icon/logo.svg" alt="EasyLens Logo" />
                </div>
                <h1 className="font-bold text-xl">EasyLens</h1>
            </div>

            <hr className={`hidden ${isSidebarOpen && "lg:block"} mx-6`} />

            <ul className={`flex flex-col gap-3 ${isSidebarOpen && "lg:gap-1"}`}>
                <li>
                    <a className={`w-full flex items-center font-semibold hover:bg-sky-900 hover:opacity-100 rounded hover:text-white visited:text-white px-2 ${isSidebarOpen ? "lg:px-3 lg:justify-start" : "justify-center"} py-2 lg:py-2 gap-3`} href="/admin/dashboard">
                        <BiGridAlt className={`text-2xl ${isSidebarOpen && "lg:text-xl"}`} />
                        <span className={`hidden ${isSidebarOpen && "lg:block"}`}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className={`w-full flex items-center font-semibold hover:bg-sky-900 hover:opacity-100 rounded hover:text-white visited:text-white px-2 ${isSidebarOpen ? "lg:px-3 lg:justify-start" : "justify-center"} py-2 lg:py-2 gap-3`} href="/admin/transactions">
                        <BiTransfer className={`text-2xl ${isSidebarOpen && "lg:text-xl"}`} />
                        <span className={`hidden ${isSidebarOpen && "lg:block"}`}>Transaksi</span>
                    </a>
                </li>
                <li>
                    <a className={`w-full flex items-center font-semibold hover:bg-sky-900 hover:opacity-100 rounded hover:text-white visited:text-white px-2 ${isSidebarOpen ? "lg:px-3 lg:justify-start" : "justify-center"} py-2 lg:py-2 gap-3`} href="/admin/products">
                        <BiBox className={`text-2xl ${isSidebarOpen && "lg:text-xl"}`} />
                        <span className={`hidden ${isSidebarOpen && "lg:block"}`}>Produk</span>
                    </a>
                </li>
                <li>
                    <a className={`w-full flex items-center font-semibold hover:bg-sky-900 hover:opacity-100 rounded hover:text-white visited:text-white px-2 ${isSidebarOpen ? "lg:px-3 lg:justify-start" : "justify-center"} py-2 lg:py-2 gap-3`} href="/admin/users">
                        <BiGroup className={`text-2xl ${isSidebarOpen && "lg:text-xl"}`} />
                        <span className={`hidden ${isSidebarOpen && "lg:block"}`}>Pengguna</span>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <a href="" className="w-full flex items-center font-semibold hover:bg-sky-900 hover:opacity-100 rounded hover:text-white visited:text-white px-2 py-2 lg:py-2 justify-start gap-3">
                <BiLogOut className={`text-2xl ${isSidebarOpen && "lg:text-xl"}`} />
                <span className={`hidden ${isSidebarOpen && "lg:block"}`}>Logout</span>
            </a>
        </div>
    </aside>
  )
}

export default Sidebar