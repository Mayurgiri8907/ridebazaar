import { Car, Bike } from "lucide-react";

const carRates = [
  { name: "Toyota Fortuner", price: 4500, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70" },
  { name: "Hyundai Creta", price: 3000, img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { name: "Swift Dzire", price: 2000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
  { name: "Swift Dzire", price: 2000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
  { name: "Swift Dzire", price: 2000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
  { name: "Swift Dzire", price: 2000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d" },
];

const bikeRates = [
  { name: "Royal Enfield", price: 1200, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc" },
  { name: "Pulsar 220", price: 900, img: "https://images.unsplash.com/photo-1580310614729-ccd69652491d" },
  { name: "Splendor", price: 500, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },
];

const Rate = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">

      {/* 🔥 HEADING */}
      <h1 className="mt-20 text-3xl font-bold text-center mb-10">
        Our <span className="text-blue-600">Rental Rates</span>
      </h1>

      <div className="max-w-7xl mx-auto space-y-12">

        {/* 🚗 CAR SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Car className="text-blue-600" /> Cars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {carRates.map((car, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <p className="text-gray-500 mb-3">₹{car.price} / day</p>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🏍️ BIKE SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Bike className="text-blue-600" /> Bikes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bikeRates.map((bike, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={bike.img}
                  alt={bike.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{bike.name}</h3>
                  <p className="text-gray-500 mb-3">₹{bike.price} / day</p>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rate;