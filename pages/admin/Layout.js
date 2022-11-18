import Head from "next/head"

const AdminLayout = ({children}) => {
  return (
    <div>
        <Head>
            <title>EasyLens - Admin</title>
            <meta name="description" content="Sewa Kamera daerah Bogor dan Sekitarnya" />
            <link rel="icon" href="/icon/logo.svg" />
        </Head>
        
        <div className="bg-slate-300 w-screen h-screen mx-auto">
          {children}
        </div>
    </div>
  )
}

export default AdminLayout