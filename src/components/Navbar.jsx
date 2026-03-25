import { useState, useEffect } from 'react'
import { Phone, Car, Bike, User, House, Book } from "lucide-react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Navbar() {
    const [open, setOpen] = useState(false);

    // 🔥 Demo login state (later connect with auth)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    const [userisLoggedIn, setUserIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <img src="/ridelogo.png" alt="logo" className="h-10" />
                    <h1 className="text-xl font-semibold">
                        Ride<span className="text-blue-600">Bazaar</span>
                    </h1>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

                    <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
                        <House size={18} /> Home
                    </Link>

                    <Link to="/about" className="flex items-center gap-2 hover:text-blue-600">
                        <User size={18} /> About
                    </Link>

                    <Link to="/rate" className="flex items-center gap-2 hover:text-blue-600">
                        <Book size={18} /> Rate
                    </Link>

                    <Link to="/car" className="flex items-center gap-2 hover:text-blue-600">
                        <Car size={18} /> Car
                    </Link>

                    <Link to="/bike" className="flex items-center gap-2 hover:text-blue-600">
                        <Bike size={18} /> Bike
                    </Link>

                    <Link to="/contact" className="flex items-center gap-2 hover:text-blue-600">
                        <Phone size={18} /> Contact
                    </Link>
                </div>

                {/* DESKTOP RIGHT */}
                <div className="hidden md:block relative">
                    {userisLoggedIn ? (
                        <div className="relative">
                            <div
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <User size={22} />
                                <span>Profile</span>
                            </div>

                            {/* DROPDOWN */}
                            {profileOpen && (
                                <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 z-50">

                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setProfileOpen(false)}
                                    >
                                        Profile
                                    </Link>

                                    <Link
                                        to="/booking"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setProfileOpen(false)}
                                    >
                                        My Booking
                                    </Link>

                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            setUserIsLoggedIn(false);   // 🔥 important
                                            setProfileOpen(false);
                                            setOpen(false);
                                            navigate("/");

                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* HAMBURGER */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={() => setOpen(!open)}
                >
                    <span className={`block w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] py-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-4 text-gray-700 font-medium">

                    {["/", "/about", "/rate", "/car", "/bike", "/contact"].map((path, i) => {
                        const names = ["Home", "About", "Rate", "Car", "Bike", "Contact"];
                        return (
                            <Link
                                key={i}
                                to={path}
                                className="border-b pb-2"
                                onClick={() => setOpen(false)}
                            >
                                {names[i]}
                            </Link>
                        );
                    })}

                    {/* 🔥 MOBILE LOGIN / PROFILE */}
                    {userisLoggedIn ? (
                        <div className="flex flex-col gap-2 mt-3">

                            <Link
                                to="/profile"
                                onClick={() => setOpen(false)}
                                className="text-center bg-gray-100 py-2 rounded-full"
                            >
                                Profile
                            </Link>

                            <Link
                                to="/booking"
                                onClick={() => setOpen(false)}
                                className="text-center bg-gray-100 py-2 rounded-full"
                            >
                                My Booking
                            </Link>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setUserIsLoggedIn(false);   // 🔥 important
                                    setProfileOpen(false);
                                    setOpen(false);
                                    navigate("/");
                                }}
                                className="bg-red-500 text-white py-2 rounded-full"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => setOpen(false)}
                        >
                            <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-3">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar