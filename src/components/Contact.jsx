import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">

      {/* 🔥 HEADING */}
      <h1 className="mt-20 text-3xl font-bold text-center mb-10">
        Contact <span className="text-blue-600">Us</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 LEFT - CONTACT INFO */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-600">

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>Mahuva, Gujarat, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+91 9409451292</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>mayurgiri8907@gmail.com</p>
            </div>

          </div>

          {/* OPTIONAL MAP */}
          <div className="mt-6">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=mahuva%20gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 rounded-lg border"
              loading="lazy"
            />
          </div>
        </div>

        {/* 🔹 RIGHT - FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Send Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;