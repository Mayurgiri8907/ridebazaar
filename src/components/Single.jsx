import { ChevronLeft, ChevronRight, Fuel } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import Skeletonsingle from "./Skeletonsingle";


const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singlevehicle, setSingleVehicle] = useState(null);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);


  const getSingleVehicle = async () => {
    try {
      const res = await axios.get(`/api/vahical/${id}`);
      setSingleVehicle(res.data.data || {});
    } catch (error) {
      toast.error("Failed to fetch vehicle");
    }  finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleVehicle();
  }, [id]);

  const handleBooking = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    navigate("/delivery", {
      state: {
        price: singlevehicle.price,
        vehicleId: singlevehicle._id,
        name: singlevehicle.name,
      },
    });
  };

  if (!singlevehicle) {
  return <Skeletonsingle />;
}

  const images = singlevehicle?.images
    ? Object.values(singlevehicle.images)
    : [];

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="p-3 sm:p-4 bg-gray-100 min-h-screen">
      <div className="mt-30 max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT - IMAGE SECTION */}
        <div className="relative">

          {/* Main Image */}
          <img
            src={images[current] || "/no-image.png"}
            className="w-full h-64 sm:h-80 object-cover rounded-lg"
          />

          {/* Left Button */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right Button */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Thumbnails (Scrollable on mobile) */}
          <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setCurrent(i)}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer rounded border ${
                  current === i ? "border-orange-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              {singlevehicle.name}
            </h1>

            <p className="text-green-600 text-lg sm:text-xl mt-2 font-semibold">
              ₹{singlevehicle.totalprice} / Toal Pring
            </p>
            <p className="text-green-600 text-lg sm:text-xl mt-2 font-semibold">
              ₹{singlevehicle.price} / Booking Pring
            </p>

            <p className="mt-2 flex items-center gap-2 text-gray-600 text-sm sm:text-base">
              <Fuel size={16} /> {singlevehicle?.fuel?.join(", ")}
            </p>

            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              {singlevehicle.description}
            </p>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg text-base sm:text-lg font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Single;