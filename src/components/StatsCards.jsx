// StatsCards.jsx
const stats = [
  { title: "Total Cars", value: "750+", color: "bg-orange-500" },
  { title: "Daily Trips", value: "1697+", color: "bg-green-500" },
  { title: "Clients", value: "85K+", color: "bg-purple-500" },
  { title: "Kilometers", value: "2167+", color: "bg-blue-500" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className={`p-4 rounded-xl ${item.color} shadow-lg`}
        >
          <h2 className="text-sm">{item.title}</h2>
          <p className="text-xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;