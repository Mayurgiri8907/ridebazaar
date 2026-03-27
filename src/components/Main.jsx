import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
// import Dashboard from "./Dashboard";
import Routing from "../utils/Routing";

export default function Main() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Topbar setOpen={setOpen} />
        {/* <Dashboard /> */}
        <Routing/>
      </div>
    </div>
  );
}