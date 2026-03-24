import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Amazing service! The car was clean and smooth.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Priya Patel",
    text: "Bike rental was super easy and affordable.",
    rating: 4,
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Amit Verma",
    text: "Great support and fast booking.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=3",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide (5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  return (
    <div className="bg-gray-100 py-16">

      {/* 🔥 HEADING */}
      <h1 className="mt-20 text-3xl font-bold text-center mb-12">
        What Our <span className="text-blue-600">Users Say</span>
      </h1>

      {/* 🔹 SLIDER WRAPPER */}
      <div className="relative max-w-3xl mx-auto overflow-hidden">

        {/* 🔥 SLIDE TRACK */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full px-4">

              {/* CARD */}
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">

                {/* IMAGE */}
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"
                />

                {/* STARS */}
                <div className="flex justify-center mb-3">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-600 mb-4 italic">
                  "{review.text}"
                </p>

                {/* NAME */}
                <h3 className="font-semibold text-gray-800">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ⬅️➡️ BUTTONS */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* 🔘 DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Review;