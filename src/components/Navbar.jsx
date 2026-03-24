import { React, useState } from 'react'
import { Phone, Car, Bike, User, House, Book } from "lucide-react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/ridelogo.png"
                            alt="logo"
                            className="h-10"
                        />
                        <h1 className="text-xl font-semibold">
                            Ride<span className="text-blue-600">Bazaar</span>
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

                        {/* Home */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <House size={18} />
                            Home
                        </Link>

                        {/* About */}
                        <Link
                            to="/about"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <User size={18} />
                            About
                        </Link>

                        {/* Rate */}
                        <Link
                            to="/rate"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <Book size={18} />
                            Rate
                        </Link>

                        {/* Car */}
                        <Link
                            to="/car"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <Car size={18} />
                            Car
                        </Link>

                        {/* Bike */}
                        <Link
                            to="/bike"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <Bike size={18} />
                            Bike
                        </Link>

                        {/* Contact */}
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <Phone size={18} />
                            Contact
                        </Link>

                    </div>

                    {/* LOGIN BUTTON */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                            Login
                        </button>
                    </div>

                    {/* 🔥 HAMBURGER BUTTON */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => setOpen(!open)}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* 🔥 MOBILE MENU */}
                <div
                    className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 text-gray-700 font-medium">

  <Link
    to="/"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    Home
  </Link>

  <Link
    to="/about"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    About
  </Link>

  <Link
    to="/rate"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    Rate
  </Link>

  <Link
    to="/car"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    Car
  </Link>

  <Link
    to="/bike"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    Bike
  </Link>

  <Link
    to="/contact"
    className="border-b pb-2 hover:text-blue-600 transition"
    onClick={() => setOpen(false)}
  >
    Contact
  </Link>

                        <button className="bg-blue-600 text-white py-2 rounded-full mt-3">
                            Login
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
