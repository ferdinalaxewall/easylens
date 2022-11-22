import AdminLayout from "./Layout"

function Dashboard() {
  return (
    <AdminLayout pageTitle="Dashboard" withButton={false}>
        <div className="h-24">
            
        <h1 className="text-4xl font-bold">Welcome back, <span className="text-sky-800">Admin EasyLens</span>!</h1>
        </div>
    </AdminLayout>
  )
}

export default Dashboard