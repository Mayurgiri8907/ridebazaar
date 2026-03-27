// Charts.jsx
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line
} from "recharts";

const weeklyData = [
  { name: "Mon", trips: 40 },
  { name: "Tue", trips: 30 },
  { name: "Wed", trips: 50 },
  { name: "Thu", trips: 45 },
  { name: "Fri", trips: 60 },
  { name: "Sat", trips: 70 },
  { name: "Sun", trips: 55 },
];

const monthlyData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 500 },
  { name: "May", users: 900 },
  { name: "Jun", users: 750 },
];

const BokkingChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Weekly Chart */}
      <div className="bg-[#020617] p-4 rounded-xl">
        <h2 className="mb-4">Weekly user</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="trips" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Chart */}
      <div className="bg-[#020617] p-4 rounded-xl">
        <h2 className="mb-4">Monthly Users</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="users" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default BokkingChart;