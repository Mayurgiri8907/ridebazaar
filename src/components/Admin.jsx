import { LayoutDashboard, Car, Bike, Users, LogOut } from "lucide-react";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-gray-900 text-gray-300 p-5 hidden md:block">

        <h2 className="text-2xl font-bold text-white mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-4">

          <li className="flex items-center gap-3 hover:text-white cursor-pointer">
            <LayoutDashboard size={18} /> Dashboard
          </li>

          <li className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Car size={18} /> Cars
          </li>

          <li className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Bike size={18} /> Bikes
          </li>

          <li className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Users size={18} /> Users
          </li>

          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer mt-10">
            <LogOut size={18} /> Logout
          </li>

        </ul>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1">

        {/* 🔥 HEADER */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="admin"
              className="w-8 h-8 rounded-full"
            />
            <span>Admin</span>
          </div>
        </div>

        {/* 🔹 DASHBOARD CARDS */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Total Cars</h2>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Total Bikes</h2>
            <p className="text-2xl font-bold">18</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Users</h2>
            <p className="text-2xl font-bold">45</p>
          </div>

        </div>

        {/* 🔹 VEHICLE TABLE */}
        <div className="p-6">
          <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="p-4 border-b flex justify-between">
              <h2 className="font-semibold">Vehicles</h2>
              <button className="bg-blue-600 text-white px-4 py-1 rounded">
                + Add
              </button>
            </div>

            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-3">Fortuner</td>
                  <td className="p-3">Car</td>
                  <td className="p-3">₹4500</td>
                  <td className="p-3 space-x-2">
                    <button className="text-blue-600">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-3">Splendor</td>
                  <td className="p-3">Bike</td>
                  <td className="p-3">₹500</td>
                  <td className="p-3 space-x-2">
                    <button className="text-blue-600">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;