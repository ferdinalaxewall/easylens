import { useState } from "react"
import { BiChevronDown, BiLogOut, BiMenuAltLeft, BiUser } from "react-icons/bi"

function Navbar({setIsSidebarOpen, isSidebarOpen}) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const handleProfile = () => {
        setIsProfileOpen(!isProfileOpen)
    }
    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
    <nav className={`fixed w-full bg-white top-0 left-0 z-10 ${isSidebarOpen ? "pl-2 lg:pl-60" : "pl-16 lg:pl-16"} sm:pl-16 pr-8 font-sans flex items-center justify-between py-2 transition-all duration-150 ease-in`}>
        <div className={`flex items-center ml-5 ${isSidebarOpen ? "lg:ml-2" : "lg:ml-5" } transition-all duration-150 ease-in`}>
            <button className="text-3xl" onClick={() => handleSidebar()}>
                <BiMenuAltLeft />
            </button>
        </div>
        <ul>
            <li className="relative">
                <button className="flex items-center gap-3 py-2 rounded" onClick={() => handleProfile()}>
                    <img className="w-8 object-cover object-center rounded-full" src="/img/testimoni/foto-produk-1.jpg" alt="EasyLens Logo" />
                    <span className="font-medium text-sm mr-2">Muhamad Ferdinal</span>
                    <BiChevronDown className={`text-xl transition-transform duration-150 ease-in ${ isProfileOpen && "-rotate-180"}`} />
                </button>

                <div className={`${ isProfileOpen ? "visible opacity-100 -translate-y-0" : "invisible opacity-0 -translate-y-5"} bg-white shadow-xl p-3 rounded absolute w-36 right-0 top-full mt-3 transition-all duration-200 ease-in`}>
                    <ul className="flex flex-col gap-1">
                        <li><a href="" className="flex items-center hover:bg-slate-100 rounded px-3 py-2 justify-start gap-3"> <BiUser className="text-xl ml-0.5 text-sky-800" /> <span className="text-sm font-medium">Profile</span></a></li>
                        <li><a href="" className="flex items-center hover:bg-slate-100 rounded px-3 py-2 justify-start gap-3"> <BiLogOut className="text-xl text-red-600" /> <span className="text-sm font-medium ml-0.5">Logout</span></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar