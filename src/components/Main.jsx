import { useState } from "react";
import Slider from "./Slider";
import Card from "./card";
import Review from "./Review";
import Contact from "./Contact";


const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      {/* Main Area */}
      <div className="">
        
        <Slider />
        <div className="bg-gray-100 p-5">

          {/* 🔥 HEADING */}
          <h1 className="mt-20 mb-10 text-3xl font-bold text-gray-800 mb-6 text-center">
            Car & Bike
          </h1>

          {/* 🔹 GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
        <Review />
        <Contact />

      </div>

    </>
  );
};

export default Main;
