import { Link } from "react-router-dom";


export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 
        bg-gray-900 text-gray-300 p-5 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition`}
      >
        <Link to="/deshborad"><h1 className="text-2xl font-bold text-white mb-8">
          Ride<span className="text-blue-600">Bazaar</span>
        </h1></Link>

        <nav className="space-y-3">
          <Link to="/deshborad"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Dashboard
          </p></Link>

          <Link to="/users"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Users
          </p></Link>

          <Link to="/addvahical"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Add Vahical
          </p></Link>

          <Link to="/showvahical"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Show Vahical
          </p></Link>

          <Link to="/addbanner"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Add Banner
          </p></Link>

          <Link to="/addreview"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Add Users Review
          </p></Link>

          <Link to="/showreview"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Show Users Review
          </p></Link>
        
          <Link to="/deshborad"><p className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
            Settings
          </p></Link>
        </nav>
      </div>
    </>
  );
}