import AdminLayout from "./Layout"

function Dashboard() {
  return (
    <AdminLayout pageTitle="Dashboard" withBackground={false} withButton={false}>
            <main className="grid grid-cols-4 gap-2">
                <div className="bg-white p-5 grid place-items-center rounded">
                    <h1>Kotak-1</h1>
                </div>
                <div className="bg-white p-5 grid place-items-center rounded">
                    <h1>Kotak-1</h1>
                </div>
                <div className="bg-white p-5 grid place-items-center rounded">
                    <h1>Kotak-1</h1>
                </div>
                <div className="bg-white p-5 grid place-items-center rounded">
                    <h1>Kotak-1</h1>
                </div>
                <div className="bg-white p-5 grid place-items-center rounded">
                    <h1>Kotak-1</h1>
                </div>
            </main>
    </AdminLayout>
  )
}

export default Dashboard