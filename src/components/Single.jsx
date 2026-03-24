import { useState } from "react";
import { ChevronLeft, ChevronRight, Fuel } from "lucide-react";

const vehicle = {
  name: "Royal Enfield Classic 350",
  price: 1200,
  fuel: "Petrol",
  description:
    "Powerful bike for long rides with great comfort and mileage.",
  images: [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
  ],
};

const Single = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-gray-100 py-8 px-4">

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow grid md:grid-cols-2 gap-8">

        {/* 🔹 LEFT - IMAGE SECTION */}
        <div>

          {/* MAIN IMAGE */}
          <div className="relative">
            <img
              src={vehicle.images[current]}
              className="w-full h-80 object-cover rounded-lg"
            />

            {/* BUTTONS */}
            <button
              onClick={() =>
                setCurrent(
                  current === 0
                    ? vehicle.images.length - 1
                    : current - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setCurrent((current + 1) % vehicle.images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>

          {/* 🔥 THUMBNAILS */}
          <div className="flex gap-3 mt-4">
            {vehicle.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrent(i)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  current === i ? "border-blue-600" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔹 RIGHT - DETAILS */}
        <div>

          {/* NAME */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {vehicle.name}
          </h1>

          {/* PRICE */}
          <p className="text-2xl text-green-600 font-bold mb-3">
            ₹{vehicle.price} / day
          </p>

          {/* FUEL */}
          <div className="flex items-center gap-2 mb-4 text-gray-700">
            <Fuel size={18} className="text-blue-600" />
            Fuel: {vehicle.fuel}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-6">
            {vehicle.description}
          </p>

          {/* 🔥 BUTTONS */}
          <div className="flex gap-4">

            <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
              Book Now
            </button>

            

          </div>

          {/* 🔥 EXTRA INFO */}
          <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-600">
            <p>✔ Free cancellation</p>
            <p>✔ Best Services</p>
            <p>✔ 24/7 customer support</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Single;