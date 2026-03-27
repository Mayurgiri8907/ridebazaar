import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Mon", users: 400, sales: 240 },
    { name: "Tue", users: 300, sales: 139 },
    { name: "Wed", users: 500, sales: 380 },
    { name: "Thu", users: 200, sales: 190 },
    { name: "Fri", users: 600, sales: 480 },
];

export default function Dashboard() {
    return (
        <div className="p-6 space-y-6 overflow-y-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Total Users</h3>
                    <p className="text-2xl font-bold text-gray-800">1,240</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Total Car</h3>
                    <p className="text-2xl font-bold text-gray-800">$8,540</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Total Bike</h3>
                    <p className="text-2xl font-bold text-gray-800">320</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Today Orders</h3>
                    <p className="text-2xl font-bold text-gray-800">320</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Pending Orders</h3>
                    <p className="text-2xl font-bold text-gray-800">320</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                    <h3 className="text-gray-500">Complate Orders</h3>
                    <p className="text-2xl font-bold text-gray-800">320</p>
                </div>
            </div>



            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Line Chart */}
                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="mb-4 font-semibold">User Growth</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="users" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white p-5 rounded-xl shadow">
                    <h3 className="mb-4 font-semibold">Sales</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sales" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}