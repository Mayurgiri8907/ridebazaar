import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* 🔹 LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Ride<span className="text-blue-500">Bazaar</span>
          </h2>
          <p className="text-sm leading-6">
            Your trusted platform for renting cars and bikes at affordable prices.
          </p>
        </div>

        {/* 🔹 QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Cars</li>
            <li className="hover:text-white cursor-pointer">Bikes</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 🔹 CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Mahuva, Gujarat
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9409451292
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> mayurgiri8907@gmail.com
            </li>
          </ul>
        </div>

        {/* 🔹 SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer transition">
              <Facebook size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer transition">
              <Twitter size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 cursor-pointer transition">
              <Instagram size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 cursor-pointer transition">
              <Linkedin size={18} />
            </span>
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} RideBazaar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;