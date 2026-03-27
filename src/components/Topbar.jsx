export default function Topbar({ setOpen }) {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">
      
      <div className="flex items-center gap-4">
        <button onClick={() => setOpen(true)} className="md:hidden">
          ☰
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-5 text-gray-600">
        🔔
        👤
      </div>
    </div>
  );
}