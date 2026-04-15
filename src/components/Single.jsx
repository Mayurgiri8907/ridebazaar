import { ChevronLeft, ChevronRight, Fuel } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const Single = () => {
  const { id } = useParams();
  const [singlevehicle, setSingleVehicle] = useState(null);
  const [current, setCurrent] = useState(0);

  const getSingleVehicle = async () => {
    try {
      const res = await axios.get(`/api/vahical/${id}`);
      setSingleVehicle(res.data.data || {});
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicle");
    }
  };

  useEffect(() => {
    getSingleVehicle();
  }, [id]);

  // ✅ Loading state
  if (!singlevehicle) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ✅ FIX: Convert object images → array
  const images = singlevehicle?.images
    ? Object.values(singlevehicle.images)
    : [];

  // ✅ No images case
  if (images.length === 0) {
    return <p className="text-center mt-10">No images available</p>;
  }

  return (
  <div className="mt-6 md:mt-10 bg-gray-100 py-6 md:py-8 px-3 md:px-4">
    <div className="m-10 max-w-7xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

      {/* LEFT SIDE */}
      <div>
        <div className="relative">
          <img
            src={images[current]}
            alt="vehicle"
            onError={(e) => (e.target.src = "/no-image.png")}
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg"
          />

          {/* LEFT BUTTON */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1.5 md:p-2 rounded-full shadow"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() =>
              setCurrent((current + 1) % images.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1.5 md:p-2 rounded-full shadow"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              onClick={() => setCurrent(i)}
              className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded cursor-pointer border ${
                current === i ? "border-blue-600" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold mb-2">
          {singlevehicle?.name}
        </h1>

        <p className="text-xl md:text-2xl text-green-600 font-bold mb-3">
          ₹{singlevehicle?.price} / day
        </p>

        <div className="flex items-center gap-2 mb-3 md:mb-4 text-sm md:text-base">
          <Fuel size={16} />
          Fuel: {singlevehicle?.fuel?.join(", ")}
        </div>

        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-700">
          {singlevehicle?.description}
        </p>

        <button className="w-full bg-orange-500 text-white py-2.5 md:py-3 rounded-lg hover:bg-orange-600 transition text-sm md:text-base">
          Book Now
        </button>
      </div>

    </div>
  </div>
);
};

export default Single;