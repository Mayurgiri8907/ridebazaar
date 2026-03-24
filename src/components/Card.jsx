import { Car, Bike } from "lucide-react";

const Card = ({ img, name, type, price }) => {
  return (
    <div className=" w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
      
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={img || "https://images.unsplash.com/photo-1549924231-f129b911e442"}
          alt={name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">

        {/* TYPE + NAME */}
        <div className="flex items-center gap-2 mb-2 text-gray-800">
          {type === "car" ? <Car size={18} /> : <Bike size={18} />}
          <h3 className="text-base sm:text-lg font-semibold truncate">
            {name}
          </h3>
        </div>

        {/* PRICE */}
        {price && (
          <p className="text-sm text-gray-500 mb-3">
            ₹{price} / day
          </p>
        )}

        {/* BUTTON */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-full text-sm sm:text-base hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;