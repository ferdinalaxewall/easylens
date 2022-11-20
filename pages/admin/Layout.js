import Head from "next/head"
import { useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import Navbar from "../../components/AdminComponents/Navbar"
import Sidebar from "../../components/AdminComponents/Sidebar"
import axios from "axios"

const AdminLayout = ({children, pageTitle, withBackground = true, forLoginPage = false, withButton = true, urlButton = "" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <div onClick={() => isProfileOpen && setIsProfileOpen(false)}>
        <Head>
            <title>EasyLens</title>
            <meta name="description" content="Sewa Kamera daerah Bogor dan Sekitarnya" />
            <link rel="icon" href="/icon/logo.svg" />
        </Head>

        { !forLoginPage && (
          <>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen} />
          </>
        )}
        
        {
          forLoginPage ? (
            <div className="bg-slate-300 w-screen h-screen mx-auto">
              {children}
            </div> 
          ) : (
            <div className={`admin-content__wrapper w-screen min-h-screen mx-auto ${isSidebarOpen ? "pl-3 lg:pl-60" : "pl-20 lg:pl-20"} sm:pl-20 pt-20 pr-3 pb-3 font-sans transition-all duration-200 ease-in`}>
              <section className={`py-4 px-6 ${ withBackground ? "bg-white rounded" : "" }`}>
                  <div className="flex items-center justify-between mb-5 pr-5">
                    <h1 className="text-2xl font-bold inline-block relative after:content-[''] after:hidden after:md:block after:absolute after:w-24 after:h-1 after:rounded-full after:bg-sky-800 after:top-1/2 after:left-full after:ml-5">{pageTitle}</h1>
                    { withButton && (
                      <a href={urlButton} className="text-2xl text-sky-800 hover:text-sky-800 visited:text-sky-800 hover:opacity-75">
                        <BiPlusCircle  />
                      </a>
                    )}
                  </div>
                  {children}
              </section>
            </div>
          )
        }

    </div>
  )
}

export default AdminLayout