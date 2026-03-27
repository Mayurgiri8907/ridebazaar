import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Routing from "../utils/Routing";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
    

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        <Dashboard />
        <Routing/>
      </div>
    </div>
  );
}