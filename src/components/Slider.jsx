import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    title: "Ride Smart",
    subtitle: "Best Cars & Bikes for You",
  },
  {
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    title: "Luxury Cars",
    subtitle: "Drive Your Dream Today",
  },
  {
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
    title: "Affordable Bikes",
    subtitle: "Speed Meets Style",
  },
];
const Slider = () => {
  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide (30 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 30 sec

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">

      {/* 🔹 Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
            
          <img
            src={slide.img}
            alt="slider"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* 🔥 LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
      >
        <ChevronLeft />
      </button>

      {/* 🔥 RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
      >
        <ChevronRight />
      </button>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;